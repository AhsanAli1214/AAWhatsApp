import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Input } from "@/components/ui/input";
import { searchApps } from "@/lib/appsCatalog";

export default function AppsSearchPage() {
  const params = new URLSearchParams(window.location.search);
  const initialQuery = params.get("q") ?? "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => searchApps(query), [query]);

  return (
    <main className="container mx-auto px-4 py-10 max-w-5xl">
      <Helmet>
        <title>{query ? `${query} search results | AA Mods` : "Search apps | AA Mods"}</title>
        <meta
          name="description"
          content="Search MOD APK apps by name, tags, and categories on AA Mods."
        />
        <link
          rel="canonical"
          href={`https://aa-mods.vercel.app/apps/search${query ? `?q=${encodeURIComponent(query)}` : ""}`}
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Search apps</h1>
      <Input
        value={query}
        onChange={(event) => {
          const value = event.target.value;
          setQuery(value);
          const url = value ? `/apps/search?q=${encodeURIComponent(value)}` : "/apps/search";
          window.history.replaceState(null, "", url);
        }}
        placeholder="Search by name, keyword, category..."
      />

      <p className="text-sm text-muted-foreground mt-3 mb-6">
        {results.length} result{results.length === 1 ? "" : "s"} for “{query || "all apps"}”
      </p>

      <div className="grid gap-4">
        {results.map((app) => (
          <Link key={app.slug} href={`/apps/${app.slug}`}>
            <article className="border rounded-lg p-4 hover:border-primary transition-colors">
              <h2 className="font-semibold">{app.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">{app.description}</p>
              <p className="text-xs mt-2 text-primary">{app.category}</p>
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}
