import { Helmet } from "react-helmet";
import { BriefcaseBusiness, CalendarDays, Clapperboard, Download, Music2, ShieldCheck, Star } from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import ReactMarkdown from "react-markdown";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { getStoreApp, storeApps, type StoreApp } from "@/data/storeApps";

type AppDetailsProps = {
  params: {
    slug: string;
  };
};

function AppIcon({ app }: { app: StoreApp }) {
  if (app.iconImage) {
    return <img src={app.iconImage} alt={`${app.name} icon`} className="h-44 w-44 object-contain" />;
  }

  switch (app.iconType) {
    case "whatsapp":
      return <FaWhatsapp className="h-32 w-32" />;
    case "business":
      return <BriefcaseBusiness className="h-32 w-32" />;
    case "capcut":
      return <Clapperboard className="h-32 w-32" />;
    case "youtube":
      return <FaYoutube className="h-32 w-32" />;
    case "youtubeMusic":
      return <SiYoutubemusic className="h-32 w-32" />;
    default:
      return <Music2 className="h-32 w-32" />;
  }
}

export default function AppDetails({ params }: AppDetailsProps) {
  const app = getStoreApp(params.slug);

  if (!app) {
    return (
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold">App not found</h1>
        <p className="mt-2 text-slate-600">This app page is unavailable.</p>
        <Link href="/">
          <Button className="mt-6 rounded-full">Back to all apps</Button>
        </Link>
      </div>
    );
  }

  const pageUrl = `https://aa-mods.vercel.app/app/${app.slug}`;

  const relatedMods = [
    ...(app.seeMoreMods ?? []),
    ...storeApps
      .filter((candidate) => candidate.slug !== app.slug)
      .map((candidate) => ({ label: `${candidate.name} APK`, slug: candidate.slug })),
  ].filter((item, index, all) => all.findIndex((x) => x.slug === item.slug) === index).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#f8fafd] text-slate-900">
      <Helmet>
        <title>{app.seoTitle}</title>
        <meta name="description" content={app.seoDescription} />
        <meta name="keywords" content={app.seoKeywords} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={app.seoTitle} />
        <meta property="og:description" content={app.seoDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="AA Mods" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={app.seoTitle} />
        <meta name="twitter:description" content={app.seoDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: app.name,
            operatingSystem: "Android",
            applicationCategory: app.category,
            softwareVersion: app.version,
            description: app.longDescription,
            downloadUrl: app.directDownloadLink,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: app.rating,
              reviewCount: "100000",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: app.seoTitle,
            description: app.seoDescription,
            dateModified: app.updatedISO,
            datePublished: app.updatedISO,
            mainEntityOfPage: pageUrl,
            author: {
              "@type": "Organization",
              name: "AA Mods",
            },
            publisher: {
              "@type": "Organization",
              name: "AA Mods",
            },
          })}
        </script>
      </Helmet>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <Link href="/" className="text-sm font-semibold text-emerald-700">
          ← Back to all apps
        </Link>

        <section className="mt-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-[280px_1fr] md:items-center">
            <div className="flex items-center justify-center">
              <AppIcon app={app} />
            </div>

            <div>
              <p className="text-sm text-slate-500">{app.developer}</p>
              <h1 className="text-3xl font-bold">{app.name}</h1>
              <p className="mt-1 text-slate-600">{app.subtitle}</p>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  {app.rating}
                </div>
                <span>•</span>
                <span>{app.downloads} downloads</span>
                <span>•</span>
                <span>{app.category}</span>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                <span className="rounded-md bg-slate-100 px-2 py-1 font-semibold">{app.version}</span>
                <span>Base {app.baseVersion}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" /> Updated {app.updatedDisplay}
                </span>
              </div>

            </div>
          </div>

          <p className="mt-8 text-slate-700">{app.longDescription}</p>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-700">
              <ShieldCheck className="h-4 w-4" /> What's new
            </div>
            <ul className="grid gap-2 text-sm text-slate-700 md:grid-cols-2">
              {app.whatsNew.map((feature) => (
                <li key={feature} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                  {feature}
                </li>
              ))}
            </ul>
          </div>


          {relatedMods.length > 0 ? (
            <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-emerald-800">See More Mod</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedMods.map((item) => (
                  <Link key={item.slug} href={`/app/${item.slug}`}>
                    <Button variant="outline" className="rounded-full border-emerald-300 bg-white text-emerald-800">
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <article className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-bold text-slate-900">Detailed Blog Guide</h2>
            <div className="prose prose-slate mt-4 max-w-none prose-headings:font-bold prose-h2:text-xl prose-h3:text-base prose-li:my-1">
              <ReactMarkdown>{app.blogMarkdown}</ReactMarkdown>
            </div>
          </article>

          <div className="mt-8 flex justify-center">
            <a href={app.directDownloadLink} target="_blank" rel="noreferrer" className="w-full max-w-3xl">
              <Button className="h-16 w-full rounded-2xl bg-emerald-600 text-xl font-black hover:bg-emerald-700">
                <Download className="mr-2 h-6 w-6" /> Direct Download APK
              </Button>
            </a>
          </div>

          {app.note ? (
            <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-amber-800">Note</h2>
              <p className="mt-2 text-sm leading-relaxed text-amber-900">{app.note}</p>
            </div>
          ) : null}

        </section>
      </main>
    </div>
  );
}
