"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { adminFetch } from "@/lib/client-security";

const links = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/apps", label: "Apps" },
  { href: "/admin/content", label: "Pages" },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <h1 className="font-semibold">AA Mods Admin</h1>
          <button
            className="rounded bg-slate-900 px-3 py-2 text-white"
            onClick={async () => {
              await adminFetch("/api/admin/auth/logout", { method: "POST" });
              router.push("/admin/login");
            }}
          >
            Logout
          </button>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-4 p-4 md:grid-cols-[220px_1fr]">
        <aside className="rounded border bg-white p-3">
          <nav className="space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded px-3 py-2 text-sm ${pathname === link.href ? "bg-slate-900 text-white" : "hover:bg-slate-100"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="rounded border bg-white p-5">{children}</main>
      </div>
    </div>
  );
}
