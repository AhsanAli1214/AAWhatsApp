import { useEffect, useRef } from "react";
import { useRoute, Link } from "wouter";
import { Helmet } from "react-helmet";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  ChevronRight,
  Download,
  History,
  Info,
  Share2,
  ShieldCheck,
  Star,
  Users,
  Zap,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { STORE_LINKS, getStoreApp, storeApps } from "@/data/appData";
import { APP_LOGO_URL } from "@/lib/branding";

type StoreApp = (typeof storeApps)[number];

function AppIcon({ app }: { app: any }) {
  if (!app.iconImage) return null;

  return (
    <img
      src={app.iconImage}
      alt={`${app.name} icon`}
      className="h-32 w-32 rounded-[2rem] object-cover shadow-md sm:h-40 sm:w-40 sm:rounded-[2.5rem]"
    />
  );
}

export default function AppDetails() {
  const [, params] = useRoute("/app/:slug");
  const app = getStoreApp(params?.slug || "");
  const mainDownloadRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [params?.slug]);

  if (!app) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-slate-50 p-4 text-center">
        <h1 className="text-2xl font-bold text-slate-900">App not found</h1>
        <p className="mt-2 text-slate-600">The app you're looking for doesn't exist in our store.</p>
        <Link href="/">
          <Button className="mt-6 bg-emerald-600 hover:bg-emerald-700">Return to Store</Button>
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: app.seoTitle,
        text: app.seoDescription,
        url: window.location.href,
      });
      return;
    }

    navigator.clipboard.writeText(window.location.href);
    alert("App link copied to clipboard.");
  };

  const scrollToMainDownload = () => {
    mainDownloadRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const primaryRelatedApps = (app.seeMoreMods ?? [])
    .map((mod: any) => storeApps.find((item) => item.slug === mod.slug))
    .filter((item): item is StoreApp => Boolean(item));

  const fallbackRelatedApps = storeApps.filter(
    (item) => item.slug !== app.slug && !primaryRelatedApps.some((related) => related.slug === item.slug),
  );

  const relatedApps = [...primaryRelatedApps, ...fallbackRelatedApps].slice(0, 2);
  const changelogTitle = ["aa-whatsapp", "aa-business"].includes(app.slug)
    ? "Full Changelog"
    : "Mod Info";

  return (
    <div className="min-h-screen bg-[#f8fafd] pb-20 text-slate-900 selection:bg-emerald-500/20 selection:text-emerald-900">
      <Helmet>
        <title>{app.seoTitle} | Official Download - AA Mods</title>
        <meta name="description" content={app.seoDescription} />
        <meta name="keywords" content={app.seoKeywords} />
        <link rel="canonical" href={`https://aa-mods.vercel.app/app/${app.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": app.name,
            "operatingSystem": "Android",
            "applicationCategory": app.category,
            "description": app.seoDescription,
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": app.rating,
              "ratingCount": "1250"
            }
          })}
        </script>
      </Helmet>

      <header className="sticky inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100 transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <img src={APP_LOGO_URL} alt="AA Mods" fetchPriority="high" decoding="async" loading="eager" className="h-14 w-14 object-contain" />
              <span className="hidden font-black text-xl tracking-tight sm:inline-block">AA Mods</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleShare} className="rounded-full gap-2 border-slate-200 font-bold hover:bg-slate-50 hidden sm:flex">
              <Share2 className="h-4 w-4" /> Share App
            </Button>
            <Button variant="ghost" size="icon" onClick={handleShare} className="rounded-full sm:hidden">
              <Share2 className="h-5 w-5 text-slate-600" />
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pt-8">
        <section className="relative overflow-hidden rounded-[2.5rem] border border-emerald-200/70 bg-white shadow-md">
          <div className="px-6 pb-8">
            <div className="relative pt-6 flex flex-col gap-6 text-center sm:flex-row sm:items-end sm:text-left">
              <div className="flex justify-center sm:justify-start">
                <AppIcon app={app} />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
                  <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">{app.name}</h1>
                  <Badge variant="secondary" className="border-none bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    Official Build
                  </Badge>
                </div>
                <p className="text-lg font-medium text-slate-600">{app.subtitle}</p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-1 sm:justify-start">
                  <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-slate-900">{app.rating}</span>
                  </div>
                  <Separator orientation="vertical" className="hidden h-4 sm:block" />
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-medium">{app.downloads} Downloads</span>
                  </div>
                  <Separator orientation="vertical" className="hidden h-4 sm:block" />
                  <Badge variant="outline" className="text-xs uppercase tracking-wider">
                    {app.category}
                  </Badge>
                </div>
              </div>

              <div className="w-full pt-4 sm:w-auto sm:pt-0">
                <Button
                  onClick={scrollToMainDownload}
                  className="h-14 w-full gap-2 rounded-2xl bg-emerald-600 px-8 text-base font-bold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-700"
                >
                  <Download className="h-5 w-5" /> Go to Main Download
                </Button>
                <p className="mt-2 text-center text-xs font-medium text-emerald-700/80">Scroll to secure download section</p>
              </div>
            </div>
          </div>

          <Separator className="bg-slate-100" />

          <div className="grid grid-cols-2 divide-x divide-slate-100 sm:grid-cols-4">
            <div className="p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Version</p>
              <p className="mt-1 font-bold text-slate-900">{app.version}</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Base Version</p>
              <p className="mt-1 font-bold text-slate-900">{app.baseVersion}</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Update Date</p>
              <p className="mt-1 truncate px-2 font-bold text-slate-900">{app.updateDate.display}</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Dev</p>
              <p className="mt-1 font-bold text-slate-900">{app.developer}</p>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <section className="grid gap-4 sm:grid-cols-2">
              <Card className="border-l-4 border-l-blue-500 border-slate-200 bg-blue-50/30 shadow-sm">
                <CardContent className="flex gap-4 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">What's New</h3>
                    <ul className="mt-2 space-y-1.5">
                      {app.whatsNew?.slice(0, 3).map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-500 border-slate-200 bg-emerald-50/30 shadow-sm">
                <CardContent className="flex gap-4 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900">Security Status</h3>
                    <p className="mt-2 text-sm leading-relaxed text-emerald-800">
                      Anti-ban protection enabled. Fully compatible with Android 14. Verified safe by our security team.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-slate-900">
                  <History className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-black tracking-tight">{changelogTitle}</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {app.whatsNew?.map((item: string, i: number) => (
                  <div
                    key={i}
                    className="group flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-all hover:border-emerald-200 hover:bg-emerald-50"
                  >
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-emerald-500 transition-transform group-hover:scale-125" />
                    <p className="font-semibold leading-relaxed text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Info className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-black tracking-tight">App Guide & Details</h2>
              </div>
              <article
                className="prose prose-slate max-w-none prose-h2:text-3xl prose-h3:text-2xl prose-headings:font-black
                prose-headings:tracking-tight prose-headings:text-slate-900 prose-li:text-lg prose-li:text-slate-600
                prose-p:text-lg prose-p:leading-relaxed prose-p:text-slate-600 prose-strong:font-bold prose-strong:text-slate-900
                prose-blockquote:rounded-2xl prose-blockquote:border-emerald-200 prose-blockquote:bg-emerald-50/60 prose-blockquote:px-5 prose-blockquote:py-3
                prose-table:overflow-hidden prose-table:rounded-2xl prose-th:bg-slate-100 prose-th:font-bold prose-td:align-middle"
              >
                <ReactMarkdown>{app.blogMarkdown}</ReactMarkdown>
              </article>
            </section>

            <section ref={mainDownloadRef} className="rounded-[2.5rem] border border-emerald-200 bg-gradient-to-r from-emerald-50 to-cyan-50 p-6 shadow-sm sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Main Download</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Download {app.name} APK</h2>
              <p className="mt-2 whitespace-pre-line text-slate-600">🔒 Download Secure & Verified Version
Safe • Virus-Scanned • No Hidden Modifications</p>
              <a href={app.directDownloadLink} target="_blank" rel="noopener noreferrer" className="mt-6 block">
                <Button className="h-14 w-full gap-2 rounded-2xl bg-emerald-600 text-lg font-bold hover:bg-emerald-700">
                  <Download className="h-6 w-6" /> {app.primaryDownloadLabel ?? "Download APK Now"}
                </Button>
              </a>

              {app.mirrorDownloadLink && (
                <a href={app.mirrorDownloadLink} target="_blank" rel="noopener noreferrer" className="mt-3 block">
                  <Button variant="outline" className="h-12 w-full rounded-2xl border-emerald-300 font-bold text-emerald-700 hover:bg-emerald-100">
                    {app.mirrorDownloadLabel ?? "Download Mirror APK"}
                  </Button>
                </a>
              )}

              {app.aaModsServicesRequired && (
                <a href={STORE_LINKS.aaModsServices} target="_blank" rel="noopener noreferrer" className="mt-3 block">
                  <Button variant="outline" className="h-12 w-full rounded-2xl border-emerald-300 font-bold text-emerald-700 hover:bg-emerald-100">
                    Download AA Mods Services (Required)
                  </Button>
                </a>
              )}
            </section>
          </div>

          <div className="space-y-6">
            <Card className="overflow-hidden rounded-[2.5rem] border-slate-200 shadow-sm">
              <div className="bg-slate-900 p-6 text-white">
                <h3 className="flex items-center gap-2 text-xl font-black">
                  <ShieldCheck className="h-6 w-6 text-emerald-400" /> Install Guide
                </h3>
              </div>
              <CardContent className="space-y-6 p-8">
                <div className="space-y-5">
                  {[
                    "Download the APK file",
                    "Enable 'Unknown Sources' in settings",
                    "Tap install and follow prompts",
                    "Launch and enjoy premium features",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700">
                        {i + 1}
                      </div>
                      <p className="pt-1 text-base font-bold leading-tight text-slate-700">{step}</p>
                    </div>
                  ))}
                </div>

                {app.note && (
                  <div className="flex gap-4 rounded-[2rem] border border-amber-100 bg-amber-50 p-6">
                    <AlertTriangle className="h-6 w-6 shrink-0 text-amber-500" />
                    <p className="text-sm font-bold leading-relaxed text-amber-900">{app.note}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="px-2 text-xl font-black">Related Apps</h3>
              <div className="space-y-3">
                {relatedApps.map((relatedApp) => (
                  <article
                    key={relatedApp.slug}
                    className="flex min-h-[238px] flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all hover:border-emerald-200 hover:shadow-md"
                  >
                    <div className={`flex min-h-[84px] items-center gap-3 bg-gradient-to-r ${relatedApp.gradient} px-4 py-4 text-white`}>
                      <img src={relatedApp.iconImage} alt={`${relatedApp.name} icon`} className="h-12 w-12 rounded-xl object-cover shadow-sm" />
                      <div className="min-w-0 space-y-1">
                        <h4 className="truncate text-base font-black leading-tight">{relatedApp.name}</h4>
                        <p className="line-clamp-1 text-xs leading-relaxed opacity-90">{relatedApp.subtitle}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-4 p-4 sm:p-5">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-600">
                        <span className="flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> {relatedApp.rating}
                        </span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span>{relatedApp.downloads}</span>
                        <span className="h-1 w-1 rounded-full bg-slate-300" />
                        <span>Universal APK</span>
                      </div>
                      <Link href={`/app/${relatedApp.slug}`}>
                        <Button className="h-12 w-full gap-2 rounded-xl bg-emerald-600 px-6 text-sm font-bold tracking-wide hover:bg-emerald-700">
                          View App Details <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </article>
                ))}

                <Link href="/">
                  <Button variant="outline" className="h-14 w-full rounded-[2rem] border-2 border-slate-200 font-black text-slate-700 hover:bg-slate-50">
                    Explore All Apps
                  </Button>
                </Link>
              </div>
            </div>


            <Card className="overflow-hidden rounded-[2.5rem] border-none bg-gradient-to-br from-[#0f172a] via-[#0b2443] to-[#0d9488] text-white shadow-xl">
              <CardContent className="space-y-4 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">Official Channel</p>
                <h4 className="text-2xl font-black leading-tight">Join AA Mods Telegram</h4>
                <p className="text-sm leading-relaxed text-slate-100/90">
                  Get instant release alerts, update notes, troubleshooting help, and direct support from the AA Mods team.
                </p>
                <a href={STORE_LINKS.telegramChannel} target="_blank" rel="noopener noreferrer" className="block pt-1">
                  <Button className="h-12 w-full rounded-xl bg-white font-bold text-slate-900 hover:bg-slate-100">
                    Join Telegram Channel
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-[2.5rem] border-slate-200 bg-white shadow-sm">
              <CardContent className="space-y-4 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">AA Mods Trust Center</p>
                <h4 className="text-xl font-black leading-tight text-slate-900">Verified Updates & Secure Downloads</h4>
                <ul className="space-y-2 text-sm font-medium text-slate-600">
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Fast release tracking for all major builds</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Direct links with stable mirrors and update notes</li>
                  <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" />Clean install guidance for safer setup flow</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
