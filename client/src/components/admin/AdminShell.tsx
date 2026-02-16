import { Link, useLocation } from "wouter";
import { ReactNode } from "react";
import { logoutAdmin } from "@/lib/adminStore";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/apps", label: "Apps" },
  { href: "/admin/content", label: "Pages" },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const [location, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <h1 className="text-lg font-semibold">AA Mods Admin</h1>
          <button
            onClick={async () => {
              await logoutAdmin();
              setLocation("/admin/login");
            }}
            className="rounded bg-slate-800 px-3 py-1 text-sm hover:bg-slate-700"
          >
            Logout
          </button>
        </div>
      </header>

      <div className="mx-auto flex max-w-6xl gap-6 px-4 py-6">
        <aside className="w-52 shrink-0 rounded border border-slate-800 bg-slate-900 p-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mb-1 block rounded px-3 py-2 text-sm transition ${
                location === item.href ? "bg-emerald-600 text-white" : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </aside>

        <main className="flex-1 rounded border border-slate-800 bg-slate-900 p-6">{children}</main>
      </div>
    </div>
  );
}
