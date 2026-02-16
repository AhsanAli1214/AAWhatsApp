import { useState } from "react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import { Button } from "@/components/ui/button";
import { getAppBySlug } from "@/lib/appsCatalog";

interface AppDownloadPageProps {
  params: {
    slug: string;
  };
}

export default function AppDownloadPage({ params }: AppDownloadPageProps) {
  const app = getAppBySlug(params.slug);
  const [confirmed, setConfirmed] = useState(false);

  if (!app) {
    return (
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-3">Download unavailable</h1>
        <Link href="/apps">
          <Button>Back to all apps</Button>
        </Link>
      </main>
    );
  }

  const handleDownload = () => {
    ReactGA.event({
      category: "Apps",
      action: "download_click",
      label: app.slug,
    });

    window.open(app.mediafire, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="container mx-auto px-4 py-10 max-w-3xl">
      <Helmet>
        <title>{`Download ${app.name} ${app.version} | AA Mods`}</title>
        <meta
          name="description"
          content={`Safe download page for ${app.name}. Confirm and continue to official MediaFire link.`}
        />
        <link rel="canonical" href={`https://aa-mods.vercel.app/apps/${app.slug}/download`} />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">Download {app.name}</h1>
      <p className="text-muted-foreground mb-6">
        Confirm before continuing. We do not auto-redirect; you control when to open the MediaFire
        download page.
      </p>

      <div className="border rounded-lg p-5 space-y-4 bg-card">
        <p className="font-medium">Before download:</p>
        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-2">
          <li>Make sure Android unknown sources is enabled only when installing.</li>
          <li>Verify app version and file size after download.</li>
          <li>Disable unknown sources again after successful install.</li>
        </ul>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={confirmed}
            onChange={(event) => setConfirmed(event.target.checked)}
          />
          I understand and want to continue.
        </label>

        <div className="flex gap-3">
          <Button onClick={handleDownload} disabled={!confirmed}>
            Continue to MediaFire
          </Button>
          <Link href={`/apps/${app.slug}`}>
            <Button variant="outline">Back to app details</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
