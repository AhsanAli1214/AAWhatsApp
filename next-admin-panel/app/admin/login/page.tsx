"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <form
        className="w-full max-w-md space-y-4 rounded border bg-white p-6"
        onSubmit={async (e) => {
          e.preventDefault();
          setError("");
          const res = await fetch("/api/admin/auth/login", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ username, password }),
          });

          if (!res.ok) return setError("Invalid credentials");
          router.push("/admin/dashboard");
        }}
      >
        <h1 className="text-2xl font-semibold">AA Mods Admin Login</h1>
        <input className="w-full rounded border p-2" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Admin username" required />
        <input className="w-full rounded border p-2" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button className="w-full rounded bg-slate-900 p-2 text-white">Sign in</button>
      </form>
    </main>
  );
}
