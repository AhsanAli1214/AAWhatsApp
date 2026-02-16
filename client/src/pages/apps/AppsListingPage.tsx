import { useMemo, useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllApps, getCategories } from "@/lib/appsCatalog";

export default function AppsListingPage() {
  const apps = getAllApps();
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"latest" | "name">("latest");
  const [search, setSearch] = useState("");

  const filteredApps = useMemo(() => {
    const byCategory =
      selectedCategory === "all"
        ? apps
        : apps.filter((app) => app.category === selectedCategory);

    const bySearch = byCategory.filter((app) =>
      `${app.name} ${app.description} ${app.tags.join(" ")}`
        .toLowerCase()
        .includes(search.toLowerCase().trim()),
    );

    return [...bySearch].sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      }
      return new Date(b.updated).getTime() - new Date(a.updated).getTime();
    });
  }, [apps, search, selectedCategory, sortBy]);

  return (
    <main className="container mx-auto px-4 py-10 max-w-6xl">
      <Helmet>
        <title>All Latest MOD APKs | AA Mods</title>
        <meta
          name="description"
          content="Browse the latest MOD APK apps by category with search, filters, and safe download pages."
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/apps" />
      </Helmet>

      <h1 className="text-3xl md:text-4xl font-bold mb-3">All Latest MOD APKs</h1>
      <p className="text-muted-foreground mb-6">
        Explore all apps, filter by category, and open each detail page for features, screenshots,
        and download links.
      </p>

      <div className="grid gap-3 md:grid-cols-4 mb-8">
        <Input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search apps..."
          className="md:col-span-2"
        />
        <select
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
        >
          <option value="all">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value as "latest" | "name")}
        >
          <option value="latest">Sort by latest</option>
          <option value="name">Sort by name</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredApps.map((app) => (
          <Card key={app.slug}>
            <CardContent className="p-5 space-y-3">
              <p className="text-xs text-primary uppercase tracking-wide">{app.category}</p>
              <h2 className="text-xl font-semibold">{app.name}</h2>
              <p className="text-sm text-muted-foreground">{app.description}</p>
              <div className="text-sm text-muted-foreground">
                Version {app.version} • Updated {app.updated}
              </div>
              <div className="flex flex-wrap gap-2">
                {app.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <Link href={`/apps/${app.slug}`}>
                  <Button size="sm">Open details</Button>
                </Link>
                <Link href={`/apps/category/${encodeURIComponent(app.category)}`}>
                  <Button variant="outline" size="sm">
                    Similar category
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredApps.length === 0 ? (
        <p className="mt-8 text-muted-foreground">No apps found for your current filters.</p>
      ) : null}

      <div className="mt-10">
        <Link href={`/apps/search?q=${encodeURIComponent(search)}`}>
          <Button variant="secondary">Open dedicated search results page</Button>
        </Link>
      </div>
    </main>
  );
}
