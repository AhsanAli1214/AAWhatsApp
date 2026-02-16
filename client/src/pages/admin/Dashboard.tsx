import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { AdminApp, AdminPage, getApps, getPages } from "@/lib/adminStore";

export default function AdminDashboard() {
  const [apps, setApps] = useState<AdminApp[]>([]);
  const [pages, setPages] = useState<AdminPage[]>([]);

  useEffect(() => {
    const run = async () => {
      const [appsResult, pagesResult] = await Promise.all([getApps(), getPages()]);
      setApps(appsResult);
      setPages(pagesResult);
    };

    run();
  }, []);

  return (
    <AdminShell>
      <h2 className="mb-4 text-2xl font-semibold">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Total Apps</p>
          <p className="text-3xl font-bold">{apps.length}</p>
        </div>
        <div className="rounded border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Published Apps</p>
          <p className="text-3xl font-bold">{apps.filter((app) => app.status === "published").length}</p>
        </div>
        <div className="rounded border border-slate-800 bg-slate-950 p-4">
          <p className="text-sm text-slate-400">Managed Pages</p>
          <p className="text-3xl font-bold">{pages.length}</p>
        </div>
      </div>
    </AdminShell>
  );
}
