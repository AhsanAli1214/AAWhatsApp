# Vercel environment variables (Admin + Supabase)

Set these in **Vercel Project → Settings → Environment Variables** for Production/Preview/Development as needed.

## Required

- `SUPABASE_URL`
  - Example: `https://xxxx.supabase.co`
  - Used by backend API routes and migration scripts.

- `SUPABASE_SERVICE_ROLE_KEY`
  - Server-only key from Supabase (**never expose in client code**).
  - Required so admin panel create/update endpoints can bypass RLS and write reliably.

- `VITE_SUPABASE_URL`
  - Same value as `SUPABASE_URL`.
  - Used by frontend realtime connection.

- `VITE_SUPABASE_ANON_KEY`
  - Supabase anon/public key.
  - Used by frontend realtime subscriptions.

- `ADMIN_PASSWORD`
  - Password required to unlock `/management/console/secure`.
  - Use a long random string.

## Optional

- `RESEND_API_KEY`
  - Needed only if you use the bug report email endpoint.

---


## Ready-to-paste env file (based on your provided values)

Use this in Vercel Environment Variables (add each key/value), or locally in `.env` for testing:

```env
SUPABASE_URL=https://lexwbssddchgwxzgtxjk.supabase.co
SUPABASE_KEY=sb_publishable_JldtswW8E8Zx1TpHywXVtw_O_l6UdHT
VITE_SUPABASE_URL=https://lexwbssddchgwxzgtxjk.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxleHdic3NkZGNoZ3d4emd0eGprIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTYzOTUwOCwiZXhwIjoyMDg3MjE1NTA4fQ.7hL2Lm4BpPUEe8ymbqKBGF5dzzK0HWNx_WYDGMN8EiU
VITE_SUPABASE_ANON_KEY=sb_publishable_JldtswW8E8Zx1TpHywXVtw_O_l6UdHT
ADMIN_PASSWORD=CHANGE_TO_STRONG_PASSWORD
```

> Keep `SUPABASE_SERVICE_ROLE_KEY` server-only (never expose in client code or public repos).

---

## Complete guide: where to get `SUPABASE_SERVICE_ROLE_KEY`

### 1) Open your Supabase project
1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard).
2. Open the exact project connected to this app.

### 2) Copy project URL and keys
1. In Supabase, go to **Project Settings → API**.
2. Copy:
   - **Project URL** → use as `SUPABASE_URL` and `VITE_SUPABASE_URL`.
   - **anon public key** → use as `VITE_SUPABASE_ANON_KEY`.
   - **service_role secret key** → use as `SUPABASE_SERVICE_ROLE_KEY`.

> Important: `service_role` is secret and must be used on backend only.

### 3) Add env vars in Vercel
1. Go to your Vercel project.
2. Open **Settings → Environment Variables**.
3. Add the following (for Production, Preview, Development as needed):
   - `SUPABASE_URL` = your Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = service_role key
   - `VITE_SUPABASE_URL` = same Supabase URL
   - `VITE_SUPABASE_ANON_KEY` = anon public key
   - `ADMIN_PASSWORD` = your admin login password
4. Click **Save**.
5. Redeploy your Vercel app (or trigger a new deployment) so new env vars load.

### 4) You already created `apps` table: run only realtime + read policy setup
Since your `apps` table already exists, do **not** recreate it. Instead, verify these:

1. In Supabase Dashboard → **Database → Replication**, enable replication for table `public.apps`.
2. If RLS is ON, run this SQL so frontend can read (list + realtime refresh):

```sql
alter table public.apps enable row level security;

drop policy if exists "Allow public read apps" on public.apps;
create policy "Allow public read apps"
on public.apps
for select
using (true);
```

> Admin write APIs use server-side `SUPABASE_SERVICE_ROLE_KEY`, so no public insert/update policy is required.

### 5) Verify it is correct
- Admin panel login should accept `ADMIN_PASSWORD`.
- Editing app details and pressing **Save Changes** should call:
  - `PATCH /api/apps/:slug` for existing app
  - `POST /api/apps` for new app
- Data should update in Supabase table `public.apps`.
- Open two browser tabs: save in one tab, and the other tab should auto-refresh app data (realtime).

### 6) Security rules (very important)
- Never put `SUPABASE_SERVICE_ROLE_KEY` in frontend env (`VITE_*`).
- Never commit secret keys into git.
- Rotate service role key if it was exposed.

---

## Troubleshooting quick checks

- `Save Failed: 500` in admin UI:
  - Check Vercel has `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`.
  - Redeploy after editing env vars.
- Realtime not updating:
  - Check `VITE_SUPABASE_URL` + `VITE_SUPABASE_ANON_KEY`.
  - Ensure `public.apps` is enabled in Replication.
- Admin login fails:
  - Ensure `ADMIN_PASSWORD` exists in Vercel and matches entered password.


## SQL to run in Supabase SQL Editor (RLS + realtime)

If your admin panel still cannot read/update correctly, run this full block once:

```sql
-- 1) Ensure RLS is enabled
alter table public.apps enable row level security;

-- 2) Public read policy (needed for frontend list + realtime refresh)
drop policy if exists "Allow public read apps" on public.apps;
create policy "Allow public read apps"
on public.apps
for select
to anon, authenticated
using (true);

-- 3) Optional: if you want authenticated users to update directly from frontend (NOT required in this project)
-- drop policy if exists "Allow authenticated update apps" on public.apps;
-- create policy "Allow authenticated update apps"
-- on public.apps
-- for update
-- to authenticated
-- using (true)
-- with check (true);

-- 4) Verify RLS policies created
select schemaname, tablename, policyname, permissive, roles, cmd
from pg_policies
where schemaname = 'public' and tablename = 'apps';
```

And in Supabase Dashboard, also enable realtime for `public.apps`:
- Database → Replication → toggle `apps` ON.

> In this codebase, writes should go through backend API (`/api/apps`, `/api/apps/:slug`) using `SUPABASE_SERVICE_ROLE_KEY`, so public write policies are not required.


## Your current policy output status

The policy output you shared is **correct**:

- `policyname`: `Allow public read apps`
- `roles`: `{anon,authenticated}`
- `cmd`: `SELECT`

This is exactly what frontend list + realtime read needs.

### Next required checks

1. Ensure `public.apps` is enabled in **Database → Replication**.
2. Ensure Vercel env has both:
   - server: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_PASSWORD`
   - client: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
3. Redeploy after setting env vars.
4. Test admin save:
   - update existing app (PATCH)
   - create new app (POST)
5. Test realtime in 2 tabs (save in one tab, observe auto-refresh in the other).

> You do **not** need public INSERT/UPDATE RLS policy for this project because writes are done by backend using service role key.
