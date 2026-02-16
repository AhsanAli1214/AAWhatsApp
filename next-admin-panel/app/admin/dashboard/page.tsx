import { AdminShell } from "@/components/admin/AdminShell";
import { db } from "@/lib/db";

export default async function DashboardPage() {
  const [{ count: totalApps }, { data: latest }, { data: topDownloads }] = await Promise.all([
    db.from("apps").select("id", { count: "exact", head: true }),
    db.from("apps").select("appName,updatedAt").order("updatedAt", { ascending: false }).limit(5),
    db.from("apps").select("appName,downloads").order("downloads", { ascending: false }).limit(5),
  ]);

  return (
    <AdminShell>
      <h2 className="mb-4 text-xl font-semibold">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded border p-4">
          <p className="text-sm text-slate-500">Total apps</p>
          <p className="text-2xl font-semibold">{totalApps ?? 0}</p>
        </article>
        <article className="rounded border p-4 md:col-span-2">
          <h3 className="font-medium">Latest uploads</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {(latest ?? []).map((item) => (
              <li key={`${item.appName}-${item.updatedAt}`}>{item.appName}</li>
            ))}
          </ul>
        </article>
      </div>
      <section className="mt-6 rounded border p-4">
        <h3 className="font-medium">Most downloaded</h3>
        <ul className="mt-3 space-y-2 text-sm">
          {(topDownloads ?? []).map((item) => (
            <li key={item.appName}>
              {item.appName}: {item.downloads}
            </li>
          ))}
        </ul>
      </section>
    </AdminShell>
  );
}
