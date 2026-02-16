import { Pool } from "pg";
import crypto from "crypto";

export type AdminApp = {
  id: string;
  name: string;
  slug: string;
  version: string;
  status: "draft" | "published";
  updatedAt: string;
};

export type AdminPage = {
  id: string;
  key: string;
  title: string;
  status: "draft" | "published";
  updatedAt: string;
};

const defaultApps: AdminApp[] = [
  { id: "1", name: "AA WhatsApp", slug: "aa-whatsapp", version: "v3.0", status: "published", updatedAt: new Date().toISOString() },
  { id: "2", name: "AA Business", slug: "aa-business", version: "v2.4", status: "published", updatedAt: new Date().toISOString() },
];

const defaultPages: AdminPage[] = [
  { id: "1", key: "privacy", title: "Privacy Policy", status: "published", updatedAt: new Date().toISOString() },
  { id: "2", key: "terms", title: "Terms of Service", status: "published", updatedAt: new Date().toISOString() },
];

let memApps = [...defaultApps];
let memPages = [...defaultPages];

const databaseUrl = process.env.DATABASE_URL;
const pool = databaseUrl ? new Pool({ connectionString: databaseUrl, ssl: { rejectUnauthorized: false } }) : null;

async function dbQuery<T = unknown>(sql: string, params: unknown[] = []) {
  if (!pool) return null;
  const result = await pool.query<T>(sql, params);
  return result;
}

export async function initAdminDb() {
  if (!pool) return;

  await dbQuery(`
    CREATE TABLE IF NOT EXISTS admin_apps (
      id text PRIMARY KEY,
      name text NOT NULL,
      slug text NOT NULL UNIQUE,
      version text NOT NULL,
      status text NOT NULL,
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `);

  await dbQuery(`
    CREATE TABLE IF NOT EXISTS admin_pages (
      id text PRIMARY KEY,
      key text NOT NULL UNIQUE,
      title text NOT NULL,
      status text NOT NULL,
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `);

  const appsCount = await dbQuery<{ count: string }>("SELECT COUNT(*)::text AS count FROM admin_apps");
  if (appsCount && Number(appsCount.rows[0]?.count || "0") === 0) {
    for (const app of defaultApps) {
      await dbQuery(
        "INSERT INTO admin_apps (id, name, slug, version, status, updated_at) VALUES ($1,$2,$3,$4,$5,$6)",
        [app.id, app.name, app.slug, app.version, app.status, app.updatedAt],
      );
    }
  }

  const pagesCount = await dbQuery<{ count: string }>("SELECT COUNT(*)::text AS count FROM admin_pages");
  if (pagesCount && Number(pagesCount.rows[0]?.count || "0") === 0) {
    for (const page of defaultPages) {
      await dbQuery(
        "INSERT INTO admin_pages (id, key, title, status, updated_at) VALUES ($1,$2,$3,$4,$5)",
        [page.id, page.key, page.title, page.status, page.updatedAt],
      );
    }
  }
}

export async function listAdminApps(): Promise<AdminApp[]> {
  const result = await dbQuery<{ id: string; name: string; slug: string; version: string; status: "draft" | "published"; updated_at: Date }>(
    "SELECT id, name, slug, version, status, updated_at FROM admin_apps ORDER BY updated_at DESC",
  );

  if (!result) return memApps;

  return result.rows.map((row) => ({
    id: row.id,
    name: row.name,
    slug: row.slug,
    version: row.version,
    status: row.status,
    updatedAt: row.updated_at.toISOString(),
  }));
}

export async function createAdminApp(input: { name: string; slug: string }): Promise<AdminApp> {
  const item: AdminApp = {
    id: crypto.randomUUID(),
    name: input.name,
    slug: input.slug,
    version: "v1.0",
    status: "draft",
    updatedAt: new Date().toISOString(),
  };

  const result = await dbQuery(
    "INSERT INTO admin_apps (id, name, slug, version, status, updated_at) VALUES ($1,$2,$3,$4,$5,$6)",
    [item.id, item.name, item.slug, item.version, item.status, item.updatedAt],
  );

  if (!result) memApps = [item, ...memApps];
  return item;
}

export async function updateAdminAppStatus(id: string): Promise<AdminApp | null> {
  const result = await dbQuery<{ id: string; name: string; slug: string; version: string; status: "draft" | "published"; updated_at: Date }>(
    `UPDATE admin_apps
     SET status = CASE WHEN status = 'draft' THEN 'published' ELSE 'draft' END,
         updated_at = now()
     WHERE id = $1
     RETURNING id, name, slug, version, status, updated_at`,
    [id],
  );

  if (!result) {
    let found: AdminApp | null = null;
    memApps = memApps.map((app) => {
      if (app.id !== id) return app;
      found = { ...app, status: app.status === "draft" ? "published" : "draft", updatedAt: new Date().toISOString() };
      return found;
    });
    return found;
  }

  const row = result.rows[0];
  if (!row) return null;
  return { id: row.id, name: row.name, slug: row.slug, version: row.version, status: row.status, updatedAt: row.updated_at.toISOString() };
}

export async function listAdminPages(): Promise<AdminPage[]> {
  const result = await dbQuery<{ id: string; key: string; title: string; status: "draft" | "published"; updated_at: Date }>(
    "SELECT id, key, title, status, updated_at FROM admin_pages ORDER BY updated_at DESC",
  );

  if (!result) return memPages;

  return result.rows.map((row) => ({
    id: row.id,
    key: row.key,
    title: row.title,
    status: row.status,
    updatedAt: row.updated_at.toISOString(),
  }));
}

export async function createAdminPage(input: { title: string; key: string }): Promise<AdminPage> {
  const item: AdminPage = {
    id: crypto.randomUUID(),
    title: input.title,
    key: input.key,
    status: "draft",
    updatedAt: new Date().toISOString(),
  };

  const result = await dbQuery(
    "INSERT INTO admin_pages (id, key, title, status, updated_at) VALUES ($1,$2,$3,$4,$5)",
    [item.id, item.key, item.title, item.status, item.updatedAt],
  );

  if (!result) memPages = [item, ...memPages];
  return item;
}
