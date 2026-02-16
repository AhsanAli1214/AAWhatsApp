import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { getAppBySlug, getSimilarApps } from "@/lib/appsCatalog";

interface AppDetailPageProps {
  params: {
    slug: string;
  };
}

export default function AppDetailPage({ params }: AppDetailPageProps) {
  const app = getAppBySlug(params.slug);

  if (!app) {
    return (
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-3">App not found</h1>
        <Link href="/apps">
          <Button>Back to all apps</Button>
        </Link>
      </main>
    );
  }

  const similarApps = getSimilarApps(app.slug, app.category);

  return (
    <main className="container mx-auto px-4 py-10 max-w-5xl">
      <Helmet>
        <title>{`${app.seo.title} | AA Mods`}</title>
        <meta name="description" content={app.seo.description} />
        <meta name="keywords" content={app.seo.keywords.join(", ")} />
        <link rel="canonical" href={`https://aa-mods.vercel.app/apps/${app.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: app.name,
            applicationCategory: app.category,
            operatingSystem: `Android ${app.android}`,
            softwareVersion: app.version,
            dateModified: app.updated,
            description: app.description,
          })}
        </script>
      </Helmet>

      <p className="text-xs uppercase tracking-wide text-primary mb-2">{app.category}</p>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{app.name}</h1>
      <p className="text-muted-foreground mb-6">
        {app.name} {app.version} is ready to download with optimized performance, unlocked premium
        options, and a clean installation flow.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {app.tags.map((tag) => (
          <Link key={tag} href={`/apps/search?q=${encodeURIComponent(tag)}`}>
            <span className="cursor-pointer rounded-md bg-muted px-2 py-1 text-xs">#{tag}</span>
          </Link>
        ))}
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          {app.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Screenshots</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {app.screenshots.map((image, index) => (
            <img
              key={`${image}-${index}`}
              src={image}
              alt={`${app.name} screenshot ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg border"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className="mb-8 overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-3">App details</h2>
        <table className="min-w-full border rounded-md">
          <tbody>
            {[
              { label: "Version", value: app.version },
              { label: "Size", value: app.size },
              { label: "Developer", value: app.developer },
              { label: "Android", value: app.android },
              { label: "Updated", value: app.updated },
            ].map((item) => (
              <tr key={item.label} className="border-b">
                <th className="p-3 text-left w-40">{item.label}</th>
                <td className="p-3">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="flex flex-wrap gap-3 mb-10">
        <Link href={`/apps/${app.slug}/download`}>
          <Button size="lg">Go to download page</Button>
        </Link>
        <Link href={`/apps/category/${encodeURIComponent(app.category)}`}>
          <Button variant="outline" size="lg">
            More in {app.category}
          </Button>
        </Link>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Similar apps</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {similarApps.map((similar) => (
            <Link key={similar.slug} href={`/apps/${similar.slug}`}>
              <article className="border rounded-lg p-4 hover:border-primary transition-colors">
                <h3 className="font-semibold">{similar.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{similar.description}</p>
              </article>
            </Link>
          ))}
          {similarApps.length === 0 ? (
            <p className="text-sm text-muted-foreground">No similar apps found in this category.</p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
