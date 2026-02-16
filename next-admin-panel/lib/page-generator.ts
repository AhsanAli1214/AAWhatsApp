import type { AppRecord } from "@/types/app";

export function generateAppTsx(app: AppRecord): string {
  return `import { Metadata } from "next";

export const metadata: Metadata = {
  title: "${app.seo.title}",
  description: "${app.seo.description}",
  keywords: ${JSON.stringify(app.seo.keywords)},
};

export default function ${app.slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}Page() {
  return (
    <main className="prose mx-auto py-10">
      <h1>${app.appName} ${app.version}</h1>
      <p>${app.description.replace(/`/g, "'")}</p>
    </main>
  );
}
`;
}

export function generateAppHtmlSnippet(app: AppRecord): string {
  return `<article>
  <h1>${app.appName} (${app.version})</h1>
  <p>${app.description}</p>
  <a href="${app.downloadLinks[0]}" target="_blank" rel="noopener noreferrer">Download</a>
</article>`;
}
