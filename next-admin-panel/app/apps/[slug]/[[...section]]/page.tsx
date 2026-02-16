import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { db } from "@/lib/db";

const renderers: Record<string, (app: any) => JSX.Element> = {
  description: (app) => <p>{app.description}</p>,
  features: (app) => <ul>{app.features.map((f: string) => <li key={f}>{f}</li>)}</ul>,
  screenshots: (app) => (
    <div className="grid gap-3 md:grid-cols-2">
      {app.screenshots.map((src: string) => <img className="rounded border" key={src} src={src} alt={app.appName} />)}
    </div>
  ),
  changelog: (app) => <pre className="whitespace-pre-wrap">{app.changelog}</pre>,
  download: (app) => (
    <ul>
      {app.downloadLinks.map((link: string) => (
        <li key={link}><a className="text-blue-600 underline" href={link} target="_blank" rel="noreferrer">Download mirror</a></li>
      ))}
    </ul>
  ),
  faqs: (app) => <div>{app.faqs.map((faq: any) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>,
  "how-to-install": (app) => <p>{app.howToInstall || "No instructions yet."}</p>,
  disclaimer: (app) => <p>{app.disclaimer || "No disclaimer provided."}</p>,
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { data } = await db.from("apps").select("seo").eq("slug", params.slug).single();
  if (!data) return {};
  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
  };
}

export default async function AppSectionPage({ params }: { params: { slug: string; section?: string[] } }) {
  const sectionKey = params.section?.[0] ?? "description";
  const { data: app } = await db.from("apps").select("*").eq("slug", params.slug).single();
  if (!app || app.status !== "published") return notFound();

  const renderer = renderers[sectionKey];
  if (!renderer) return notFound();

  return (
    <main className="mx-auto max-w-4xl space-y-4 px-4 py-10">
      <h1 className="text-3xl font-semibold">{app.appName} {app.version}</h1>
      <nav className="flex flex-wrap gap-2 text-sm">
        {Object.keys(renderers).map((key) => (
          <a className="rounded border px-2 py-1" key={key} href={`/apps/${app.slug}/${key}`}>{key}</a>
        ))}
      </nav>
      {renderer(app)}
    </main>
  );
}
