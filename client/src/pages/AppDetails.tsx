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
    return (
      <div className="relative">
        <div className="absolute -inset-4 rounded-[3rem] bg-emerald-500/10 blur-2xl" />
        <img 
          src={app.iconImage} 
          alt={`${app.name} icon`} 
          className="relative h-40 w-40 rounded-[2.5rem] object-cover shadow-2xl ring-4 ring-white" 
        />
      </div>
    );
  }

  const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[3rem] bg-emerald-500/10 blur-2xl" />
      <div className="relative flex h-40 w-40 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-2xl ring-4 ring-white">
        {children}
      </div>
    </div>
  );

  switch (app.iconType) {
    case "whatsapp":
      return <IconWrapper><FaWhatsapp className="h-20 w-20" /></IconWrapper>;
    case "business":
      return <IconWrapper><BriefcaseBusiness className="h-20 w-20" /></IconWrapper>;
    case "capcut":
      return <IconWrapper><Clapperboard className="h-20 w-20" /></IconWrapper>;
    case "youtube":
      return <IconWrapper><FaYoutube className="h-20 w-20" /></IconWrapper>;
    case "youtubeMusic":
      return <IconWrapper><SiYoutubemusic className="h-20 w-20" /></IconWrapper>;
    default:
      return <IconWrapper><Music2 className="h-20 w-20" /></IconWrapper>;
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

      <div className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center px-4 py-3">
          <Link href="/" className="group flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-emerald-600">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-emerald-50">←</span>
            Back to Store
          </Link>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-8">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
          
          <div className="relative grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex justify-center">
              <AppIcon app={app} />
            </div>

            <div className="text-center md:text-left">
              <div className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-700">
                {app.category}
              </div>
              <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">{app.name}</h1>
              <p className="mt-2 text-lg font-medium text-slate-500">{app.subtitle}</p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-6 md:justify-start">
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Rating</span>
                  <div className="mt-1 flex items-center gap-1.5 text-lg font-bold">
                    <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                    {app.rating}
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Downloads</span>
                  <span className="mt-1 text-lg font-bold">{app.downloads}</span>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Version</span>
                  <span className="mt-1 text-lg font-bold">{app.version}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={app.directDownloadLink} target="_blank" rel="noreferrer" className="flex-1">
                  <Button className="h-14 w-full rounded-2xl bg-emerald-600 text-lg font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300">
                    <Download className="mr-2 h-5 w-5" /> Download APK
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_320px]">
            <div className="space-y-12">
              <article>
                <h2 className="text-2xl font-bold tracking-tight">About this app</h2>
                <p className="mt-4 leading-relaxed text-slate-600">{app.longDescription}</p>
              </article>

              <div className="rounded-[2rem] bg-slate-50 p-8">
                <div className="mb-6 flex items-center gap-2 text-lg font-bold">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" /> What's new in this version
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {app.whatsNew.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700 shadow-sm">
                      <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <article className="prose prose-slate max-w-none prose-headings:font-black prose-h2:text-3xl prose-h3:text-xl prose-p:text-slate-600 prose-li:text-slate-600">
                <h2 className="mb-8 font-black">Installation Guide & Features</h2>
                <ReactMarkdown>{app.blogMarkdown}</ReactMarkdown>
              </article>
            </div>

            <aside className="space-y-8">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">Technical Details</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Developer</span>
                    <span className="font-bold">{app.developer}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Base Version</span>
                    <span className="font-bold">{app.baseVersion}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Last Updated</span>
                    <span className="font-bold">{app.updatedDisplay}</span>
                  </div>
                </div>
              </div>

              {relatedMods.length > 0 && (
                <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50/50 p-6">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-emerald-800/50">Suggested Mods</h3>
                  <div className="mt-4 space-y-2">
                    {relatedMods.map((item) => (
                      <Link key={item.slug} href={`/app/${item.slug}`}>
                        <Button variant="ghost" className="w-full justify-start rounded-xl border border-emerald-200 bg-white font-bold text-emerald-700 hover:bg-emerald-50">
                          {item.label}
                        </Button>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {app.note && (
                <div className="rounded-[2rem] border border-amber-100 bg-amber-50/50 p-6">
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-amber-800">
                    Important Note
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-amber-900/80">{app.note}</p>
                </div>
              )}
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
