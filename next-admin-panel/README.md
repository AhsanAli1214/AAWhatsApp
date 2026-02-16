# AA Mods Next.js Admin Panel (Vercel-ready)

This folder is a complete blueprint for a secure, free admin panel system for **AA Mods**.

## 1) Directory structure

```txt
next-admin-panel/
├── app/
│   ├── admin/
│   │   ├── login/page.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── apps/page.tsx
│   │   └── content/page.tsx
│   ├── apps/[slug]/[[...section]]/page.tsx
│   └── api/
│       └── admin/
│           ├── auth/login/route.ts
│           ├── auth/logout/route.ts
│           ├── apps/route.ts
│           ├── apps/[id]/route.ts
│           ├── pages/route.ts
│           └── preview/route.ts
├── components/admin/
│   ├── AdminShell.tsx
│   └── AppEditorForm.tsx
├── lib/
│   ├── auth.ts
│   ├── csrf.ts
│   ├── db.ts
│   ├── sanitize.ts
│   ├── validation.ts
│   └── page-generator.ts
├── types/app.ts
└── middleware.ts
```

## 2) Security model

- Protected admin routes using `middleware.ts` + signed JWT cookie.
- Login endpoint validates admin credentials from environment variables.
- CSRF check for mutations (`POST`, `PATCH`, `DELETE`).
- Input validation via `zod`.
- Output sanitization (basic HTML escaping) to reduce XSS risk.
- `httpOnly` session cookie + readable CSRF cookie (`secure` + `sameSite=strict`) for double-submit protection.

## 3) Database (Supabase free tier)

Use Supabase PostgreSQL with tables:

```sql
create table if not exists apps (
  id uuid primary key default gen_random_uuid(),
  "appName" text not null,
  slug text unique not null,
  "appConfigKey" text not null,
  version text not null,
  size text not null,
  developer text not null,
  "androidVersion" text not null,
  "downloadLinks" jsonb not null,
  features jsonb not null,
  screenshots jsonb not null,
  changelog text not null,
  seo jsonb not null,
  categories jsonb not null,
  tags jsonb not null,
  faqs jsonb not null,
  description text not null,
  "howToInstall" text,
  disclaimer text,
  status text not null default 'draft',
  downloads int not null default 0,
  "createdAt" timestamptz not null,
  "updatedAt" timestamptz not null
);

create table if not exists pages (
  id uuid primary key default gen_random_uuid(),
  key text unique not null,
  title text not null,
  body text not null,
  status text not null default 'draft',
  "createdAt" timestamptz not null,
  "updatedAt" timestamptz not null
);
```

## 4) Required environment variables

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SUPABASE_URL=https://<project>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
ADMIN_USERNAME=admin
ADMIN_PASSWORD=<strong-long-password>
ADMIN_JWT_SECRET=<32+ char random secret>
```

## 5) Auto-updating front-end

`/api/admin/apps` and `/api/admin/apps/[id]` call `revalidatePath` + `revalidateTag("apps")`.
This keeps ISR/SSG pages updated after admin saves changes.

## 6) Dynamic app pages and multi-page sections

The route `/apps/[slug]/[[...section]]` supports sections:

- `description`
- `features`
- `screenshots`
- `changelog`
- `download`
- `faqs`
- `how-to-install`
- `disclaimer`

Examples:
- `/apps/whatsapp-plus/description`
- `/apps/whatsapp-plus/features`
- `/apps/whatsapp-plus/download`

## 7) appConfig integration

The form and schema include `appConfigKey` so every app can be mapped into your existing app config system without manual edits.

## 8) HTML/TSX generation option

`lib/page-generator.ts` exposes:
- `generateAppTsx(app)`
- `generateAppHtmlSnippet(app)`

Use these for export workflows or quick static publishing.

## 9) Deploy on Vercel

1. Push to GitHub.
2. Import project to Vercel.
3. Configure environment variables in Vercel dashboard.
4. Ensure Supabase table RLS policies allow server-role writes only.
5. Deploy.

## 10) Local development

```bash
npm install
npm run dev
```

If starting from a fresh Next.js project:

```bash
npx create-next-app@latest aa-mods --typescript --tailwind --app
```

Then copy this folder's files into the generated app and install:

```bash
npm i zod jose @supabase/supabase-js
```
