"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { AppEditorForm } from "@/components/admin/AppEditorForm";
import type { AppRecord } from "@/types/app";
import { adminFetch } from "@/lib/client-security";

export default function AppsPage() {
  const [apps, setApps] = useState<AppRecord[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");

  const loadApps = async () => {
    const qs = new URLSearchParams({ search, category }).toString();
    const res = await adminFetch(`/api/admin/apps?${qs}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message ?? "Unable to load apps");
    setApps(data.items ?? []);
  };

  useEffect(() => {
    loadApps().catch((e) => setMessage(e.message));
  }, []);

  async function assertOk(res: Response) {
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.message ?? "Request failed");
    return data;
  }

  return (
    <AdminShell>
      <h2 className="mb-4 text-xl font-semibold">Manage Apps</h2>
      {message && <p className="mb-4 text-sm text-red-600">{message}</p>}
      <div className="mb-4 grid gap-3 md:grid-cols-[1fr_1fr_auto]">
        <input className="rounded border p-2" placeholder="Search by app name" value={search} onChange={(e) => setSearch(e.target.value)} />
        <input className="rounded border p-2" placeholder="Filter category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <button className="rounded bg-slate-900 px-3 py-2 text-white" onClick={() => loadApps().catch((e) => setMessage(e.message))}>Apply</button>
      </div>

      <details className="mb-6 rounded border p-4">
        <summary className="cursor-pointer font-medium">Add new app</summary>
        <div className="mt-4">
          <AppEditorForm
            onSubmit={async (payload) => {
              setMessage("");
              const res = await adminFetch("/api/admin/apps", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(payload),
              });
              await assertOk(res);
              setMessage("App added successfully.");
              await loadApps();
            }}
          />
        </div>
      </details>

      <ul className="space-y-3">
        {apps.map((app) => (
          <li key={app.id} className="rounded border p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-medium">{app.appName}</p>
                <p className="text-sm text-slate-500">/{app.slug} · {app.version} · {app.appConfigKey}</p>
              </div>
              <div className="flex gap-2">
                <button
                  className="rounded border px-3 py-1"
                  onClick={async () => {
                    const res = await adminFetch(`/api/admin/preview?id=${app.id}`);
                    const data = await assertOk(res);
                    alert(data.previewUrl);
                  }}
                >
                  Preview
                </button>
                <button
                  className="rounded bg-red-600 px-3 py-1 text-white"
                  onClick={async () => {
                    if (!confirm(`Delete ${app.appName}?`)) return;
                    setMessage("");
                    const res = await adminFetch(`/api/admin/apps/${app.id}`, { method: "DELETE" });
                    await assertOk(res);
                    setMessage("App deleted successfully.");
                    await loadApps();
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="mt-3">
              <AppEditorForm
                initial={app}
                submitLabel="Update App"
                onSubmit={async (payload) => {
                  setMessage("");
                  const res = await adminFetch(`/api/admin/apps/${app.id}`, {
                    method: "PATCH",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(payload),
                  });
                  await assertOk(res);
                  setMessage("App updated successfully.");
                  await loadApps();
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </AdminShell>
  );
}
