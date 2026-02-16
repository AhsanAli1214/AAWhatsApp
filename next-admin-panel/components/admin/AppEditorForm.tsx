"use client";

import { useState } from "react";
import type { AppRecord } from "@/types/app";

type Props = {
  initial?: Partial<AppRecord>;
  submitLabel?: string;
  onSubmit: (payload: Partial<AppRecord>) => Promise<void>;
};

type JsonFieldName = "downloadLinks" | "features" | "screenshots" | "categories" | "tags" | "faqs";

function stringify(value: unknown) {
  return JSON.stringify(value ?? [], null, 2);
}

function parseRequiredJson(name: JsonFieldName, value: string) {
  try {
    const parsed = JSON.parse(value || "[]");
    if (!Array.isArray(parsed)) throw new Error("must be an array");
    return parsed;
  } catch {
    throw new Error(`${name} must be valid JSON array`);
  }
}

export function AppEditorForm({ initial, submitLabel = "Save App", onSubmit }: Props) {
  const [form, setForm] = useState<Partial<AppRecord>>({ status: "draft", ...initial });
  const [jsonInputs, setJsonInputs] = useState({
    downloadLinks: stringify(initial?.downloadLinks),
    features: stringify(initial?.features),
    screenshots: stringify(initial?.screenshots),
    categories: stringify(initial?.categories),
    tags: stringify(initial?.tags),
    faqs: stringify(initial?.faqs),
  });
  const [error, setError] = useState("");

  const update = (key: keyof AppRecord, value: unknown) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <form
      className="space-y-4"
      onSubmit={async (event) => {
        event.preventDefault();
        setError("");

        try {
          const payload: Partial<AppRecord> = {
            ...form,
            downloadLinks: parseRequiredJson("downloadLinks", jsonInputs.downloadLinks) as string[],
            features: parseRequiredJson("features", jsonInputs.features) as string[],
            screenshots: parseRequiredJson("screenshots", jsonInputs.screenshots) as string[],
            categories: parseRequiredJson("categories", jsonInputs.categories) as string[],
            tags: parseRequiredJson("tags", jsonInputs.tags) as string[],
            faqs: parseRequiredJson("faqs", jsonInputs.faqs) as AppRecord["faqs"],
          };
          await onSubmit(payload);
        } catch (e) {
          setError(e instanceof Error ? e.message : "Unable to save app");
        }
      }}
    >
      <div className="grid gap-3 md:grid-cols-2">
        <input className="rounded border p-2" placeholder="App name" value={form.appName ?? ""} onChange={(e) => update("appName", e.target.value)} required />
        <input className="rounded border p-2" placeholder="Slug (my-app)" value={form.slug ?? ""} onChange={(e) => update("slug", e.target.value)} required />
        <input className="rounded border p-2" placeholder="appConfig key" value={form.appConfigKey ?? ""} onChange={(e) => update("appConfigKey", e.target.value)} required />
        <input className="rounded border p-2" placeholder="Version" value={form.version ?? ""} onChange={(e) => update("version", e.target.value)} required />
        <input className="rounded border p-2" placeholder="Size (62MB)" value={form.size ?? ""} onChange={(e) => update("size", e.target.value)} required />
        <input className="rounded border p-2" placeholder="Developer" value={form.developer ?? ""} onChange={(e) => update("developer", e.target.value)} required />
        <input className="rounded border p-2" placeholder="Android version" value={form.androidVersion ?? ""} onChange={(e) => update("androidVersion", e.target.value)} required />
      </div>

      <textarea className="min-h-20 w-full rounded border p-2" placeholder='Download links JSON ["https://mediafire..."]' value={jsonInputs.downloadLinks} onChange={(e) => setJsonInputs((p) => ({ ...p, downloadLinks: e.target.value }))} />
      <textarea className="min-h-20 w-full rounded border p-2" placeholder='Features JSON ["Unlimited gems"]' value={jsonInputs.features} onChange={(e) => setJsonInputs((p) => ({ ...p, features: e.target.value }))} />
      <textarea className="min-h-20 w-full rounded border p-2" placeholder='Screenshots JSON ["https://..."]' value={jsonInputs.screenshots} onChange={(e) => setJsonInputs((p) => ({ ...p, screenshots: e.target.value }))} />
      <textarea className="min-h-20 w-full rounded border p-2" placeholder='Categories JSON ["Tools"]' value={jsonInputs.categories} onChange={(e) => setJsonInputs((p) => ({ ...p, categories: e.target.value }))} />
      <textarea className="min-h-20 w-full rounded border p-2" placeholder='Tags JSON ["mod","premium"]' value={jsonInputs.tags} onChange={(e) => setJsonInputs((p) => ({ ...p, tags: e.target.value }))} />
      <textarea className="min-h-24 w-full rounded border p-2" placeholder='FAQs JSON [{"question":"...","answer":"..."}]' value={jsonInputs.faqs} onChange={(e) => setJsonInputs((p) => ({ ...p, faqs: e.target.value }))} />

      <textarea className="min-h-32 w-full rounded border p-2" placeholder="Description" value={form.description ?? ""} onChange={(e) => update("description", e.target.value)} required />
      <textarea className="min-h-24 w-full rounded border p-2" placeholder="Changelog" value={form.changelog ?? ""} onChange={(e) => update("changelog", e.target.value)} required />
      <textarea className="min-h-24 w-full rounded border p-2" placeholder="How to install (optional)" value={form.howToInstall ?? ""} onChange={(e) => update("howToInstall", e.target.value)} />
      <textarea className="min-h-24 w-full rounded border p-2" placeholder="Disclaimer (optional)" value={form.disclaimer ?? ""} onChange={(e) => update("disclaimer", e.target.value)} />

      <div className="grid gap-3 md:grid-cols-3">
        <input className="rounded border p-2" placeholder="SEO title" value={form.seo?.title ?? ""} onChange={(e) => update("seo", { ...form.seo, title: e.target.value })} required />
        <input className="rounded border p-2" placeholder="SEO description" value={form.seo?.description ?? ""} onChange={(e) => update("seo", { ...form.seo, description: e.target.value })} required />
        <input className="rounded border p-2" placeholder="SEO keywords (comma)" value={(form.seo?.keywords ?? []).join(",")} onChange={(e) => update("seo", { ...form.seo, keywords: e.target.value.split(",").map((k) => k.trim()).filter(Boolean) })} required />
      </div>

      <select className="rounded border p-2" value={form.status ?? "draft"} onChange={(e) => update("status", e.target.value)}>
        <option value="draft">Draft</option>
        <option value="published">Published</option>
      </select>

      {error && <p className="text-sm text-red-600">{error}</p>}
      <button className="rounded bg-slate-900 px-4 py-2 text-white" type="submit">{submitLabel}</button>
    </form>
  );
}
