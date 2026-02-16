import { FormEvent, useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminApp, createApp, getApps, toggleAppStatus } from "@/lib/adminStore";

export default function AdminApps() {
  const [apps, setApps] = useState<AdminApp[]>([]);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  const refresh = async () => {
    setApps(await getApps());
  };

  useEffect(() => {
    refresh();
  }, []);

  const addApp = async (event: FormEvent) => {
    event.preventDefault();
    await createApp(name, slug);
    setName("");
    setSlug("");
    await refresh();
  };

  const toggleStatus = async (id: string) => {
    await toggleAppStatus(id);
    await refresh();
  };

  return (
    <AdminShell>
      <h2 className="mb-4 text-2xl font-semibold">Apps</h2>
      <form onSubmit={addApp} className="mb-6 grid gap-2 rounded border border-slate-800 bg-slate-950 p-4 md:grid-cols-3">
        <input
          className="rounded border border-slate-700 bg-slate-900 px-3 py-2"
          placeholder="App name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <input
          className="rounded border border-slate-700 bg-slate-900 px-3 py-2"
          placeholder="Slug"
          value={slug}
          onChange={(event) => setSlug(event.target.value)}
          required
        />
        <button className="rounded bg-emerald-600 px-3 py-2 font-medium hover:bg-emerald-500">Add app</button>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-700 text-slate-300">
              <th className="py-2">Name</th>
              <th className="py-2">Slug</th>
              <th className="py-2">Version</th>
              <th className="py-2">Status</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {apps.map((app) => (
              <tr key={app.id} className="border-b border-slate-800">
                <td className="py-2">{app.name}</td>
                <td className="py-2 text-slate-300">{app.slug}</td>
                <td className="py-2">{app.version}</td>
                <td className="py-2">{app.status}</td>
                <td className="py-2">
                  <button className="text-emerald-400 hover:text-emerald-300" onClick={() => toggleStatus(app.id)}>
                    Toggle status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
