"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminFetch } from "@/lib/client-security";

type ContentPage = { id: string; key: string; title: string; body: string; status: "draft" | "published" };

function toSlug(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function ContentManagerPage() {
  const [pages, setPages] = useState<ContentPage[]>([]);
  const [message, setMessage] = useState("");

  async function assertOk(res: Response) {
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message ?? "Request failed");
    return data;
  }

  const load = async () => {
    const res = await adminFetch("/api/admin/pages");
    const data = await assertOk(res);
    setPages(data.items ?? []);
  };

  useEffect(() => {
    load().catch((e) => setMessage(e.message));
  }, []);

  return (
    <AdminShell>
      <h2 className="mb-4 text-xl font-semibold">Website Pages</h2>
      {message && <p className="mb-4 text-sm text-red-600">{message}</p>}
      <button
        className="mb-4 rounded bg-slate-900 px-3 py-2 text-white"
        onClick={async () => {
          const title = prompt("Page title", "New Page")?.trim();
          if (!title) return;

          const keyInput = prompt("Page key / slug", toSlug(title))?.trim();
          if (!keyInput) return;

          setMessage("");
          const res = await adminFetch("/api/admin/pages", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ key: toSlug(keyInput), title, body: "", status: "draft" }),
          });
          await assertOk(res);
          setMessage("Page added successfully.");
          await load();
        }}
      >
        Add page
      </button>

      <div className="space-y-4">
        {pages.map((page) => (
          <article key={page.id} className="rounded border p-4">
            <input
              className="mb-2 w-full rounded border p-2"
              value={page.title}
              onChange={(e) => setPages((prev) => prev.map((p) => (p.id === page.id ? { ...p, title: e.target.value } : p)))}
            />
            <input
              className="mb-2 w-full rounded border p-2"
              value={page.key}
              onChange={(e) => setPages((prev) => prev.map((p) => (p.id === page.id ? { ...p, key: toSlug(e.target.value) } : p)))}
            />
            <textarea
              className="min-h-40 w-full rounded border p-2"
              value={page.body}
              onChange={(e) => setPages((prev) => prev.map((p) => (p.id === page.id ? { ...p, body: e.target.value } : p)))}
            />
            <select
              className="mt-2 rounded border p-2"
              value={page.status}
              onChange={(e) => setPages((prev) => prev.map((p) => (p.id === page.id ? { ...p, status: e.target.value as ContentPage["status"] } : p)))}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
            <div className="mt-3 flex gap-2">
              <button
                className="rounded bg-slate-900 px-3 py-2 text-white"
                onClick={async () => {
                  setMessage("");
                  const res = await adminFetch("/api/admin/pages", {
                    method: "PATCH",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(page),
                  });
                  await assertOk(res);
                  setMessage("Page saved successfully.");
                }}
              >
                Save page
              </button>
              <button
                className="rounded border px-3 py-2"
                onClick={async () => {
                  if (!confirm(`Delete page \"${page.title}\"?`)) return;
                  setMessage("");
                  const res = await adminFetch(`/api/admin/pages?id=${page.id}`, { method: "DELETE" });
                  await assertOk(res);
                  setMessage("Page deleted successfully.");
                  await load();
                }}
              >
                Delete page
              </button>
            </div>
          </article>
        ))}
      </div>
    </AdminShell>
  );
}
