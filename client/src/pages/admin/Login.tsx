import { FormEvent, useState } from "react";
import { useLocation } from "wouter";
import { loginAdmin } from "@/lib/adminStore";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await loginAdmin(username, password);
      setLocation("/admin/dashboard");
    } catch {
      setError("Invalid credentials. Use configured ADMIN_USERNAME and ADMIN_PASSWORD.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">
      <form onSubmit={onSubmit} className="w-full max-w-md rounded border border-slate-800 bg-slate-900 p-6">
        <h1 className="mb-6 text-2xl font-bold">Admin Login</h1>
        <label className="mb-2 block text-sm text-slate-300">Username</label>
        <input
          className="mb-4 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />

        <label className="mb-2 block text-sm text-slate-300">Password</label>
        <input
          type="password"
          className="mb-4 w-full rounded border border-slate-700 bg-slate-950 px-3 py-2"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />

        {error ? <p className="mb-4 text-sm text-red-400">{error}</p> : null}

        <button type="submit" disabled={loading} className="w-full rounded bg-emerald-600 px-3 py-2 font-medium hover:bg-emerald-500 disabled:opacity-60">
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}
