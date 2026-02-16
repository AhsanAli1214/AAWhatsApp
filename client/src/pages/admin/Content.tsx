import { FormEvent, useEffect, useState } from "react";
import { AdminPage, createPage, getPages } from "@/lib/adminStore";
import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminContent() {
  const [pages, setPages] = useState<AdminPage[]>([]);
  const [title, setTitle] = useState("");
  const [key, setKey] = useState("");

  const refresh = async () => {
    setPages(await getPages());
  };

  useEffect(() => {
    refresh();
  }, []);

  const addPage = async (event: FormEvent) => {
    event.preventDefault();
    await createPage(title, key);
    setTitle("");
    setKey("");
    await refresh();
  };

  return (
    <AdminShell>
      <h2 className="mb-4 text-2xl font-semibold">Pages</h2>

      <form onSubmit={addPage} className="mb-6 grid gap-2 rounded border border-slate-800 bg-slate-950 p-4 md:grid-cols-3">
        <input
          className="rounded border border-slate-700 bg-slate-900 px-3 py-2"
          placeholder="Page title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <input
          className="rounded border border-slate-700 bg-slate-900 px-3 py-2"
          placeholder="Key (e.g. faq)"
          value={key}
          onChange={(event) => setKey(event.target.value)}
          required
        />
        <button className="rounded bg-emerald-600 px-3 py-2 font-medium hover:bg-emerald-500">Add page</button>
      </form>

      <ul className="space-y-2">
        {pages.map((page) => (
          <li key={page.id} className="rounded border border-slate-800 bg-slate-950 p-3">
            <p className="font-medium">{page.title}</p>
            <p className="text-sm text-slate-400">
              /{page.key} • {page.status}
            </p>
          </li>
        ))}
      </ul>
    </AdminShell>
  );
}
