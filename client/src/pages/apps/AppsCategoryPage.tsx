import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { getAppsByCategory } from "@/lib/appsCatalog";

interface AppsCategoryPageProps {
  params: {
    cat: string;
  };
}

export default function AppsCategoryPage({ params }: AppsCategoryPageProps) {
  const category = decodeURIComponent(params.cat);
  const apps = getAppsByCategory(params.cat);

  return (
    <main className="container mx-auto px-4 py-10 max-w-5xl">
      <Helmet>
        <title>{`${category} MOD APKs | AA Mods`}</title>
        <meta
          name="description"
          content={`Browse ${category} MOD APK apps with features, screenshots, and safe download pages.`}
        />
        <link
          rel="canonical"
          href={`https://aa-mods.vercel.app/apps/category/${encodeURIComponent(category)}`}
        />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">{category} apps</h1>

      <div className="grid gap-4">
        {apps.map((app) => (
          <Link key={app.slug} href={`/apps/${app.slug}`}>
            <article className="border rounded-lg p-4 hover:border-primary transition-colors">
              <h2 className="font-semibold">{app.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">{app.description}</p>
            </article>
          </Link>
        ))}
        {apps.length === 0 ? (
          <p className="text-muted-foreground">No apps found in this category yet.</p>
        ) : null}
      </div>
    </main>
  );
}
