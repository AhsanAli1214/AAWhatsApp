import { useRoute, Link } from "wouter";
import { Helmet } from "react-helmet";
import { 
  ArrowLeft, 
  Download, 
  ShieldCheck, 
  Zap, 
  Info, 
  CheckCircle2, 
  ChevronRight,
  Share2,
  AlertTriangle,
  History,
  Star,
  Users
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { getStoreApp } from "@/data/appData";
import logo from "@/assets/logo.png";

function AppIcon({ app }: { app: any }) {
  if (app.iconImage) {
    return (
      <div className="relative">
        <div className="absolute -inset-4 rounded-[3rem] bg-emerald-500/10 blur-2xl" />
        <img 
          src={app.iconImage} 
          alt={`${app.name} icon`} 
          className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-[2rem] sm:rounded-[2.5rem] object-cover shadow-2xl" 
        />
        <div className="absolute -bottom-2 -right-2 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg border-4 border-white">
          <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
      </div>
    );
  }
  return null;
}

export default function AppDetails() {
  const [, params] = useRoute("/app/:slug");
  const app = getStoreApp(params?.slug || "");

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
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("App link copied to clipboard.");
    }
  };

  const relatedMods = (app.seeMoreMods ?? []).map((mod: any) => ({ label: mod.label, slug: mod.slug }));

  return (
    <div className="min-h-screen bg-[#f8fafd] text-slate-900 pb-20">
      <Helmet>
        <title>{app.seoTitle || `${app.name} - Download Latest Version | AA Mods`}</title>
        <meta name="description" content={app.seoDescription || app.shortDescription} />
        <meta name="keywords" content={app.seoKeywords || `${app.name}, APK, mod, 2026, AA Mods`} />
        <link rel="canonical" href={`https://aa-mods.vercel.app/app/${app.slug}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://aa-mods.vercel.app/app/${app.slug}`} />
        <meta property="og:title" content={app.seoTitle || app.name} />
        <meta property="og:description" content={app.seoDescription || app.shortDescription} />
        <meta property="og:image" content={app.iconImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={app.seoTitle || app.name} />
        <meta name="twitter:description" content={app.seoDescription || app.shortDescription} />
        <meta name="twitter:image" content={app.iconImage} />

        {/* Structured Data for Google Search Visibility */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": app.name,
            "operatingSystem": "Android",
            "applicationCategory": app.category,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": app.rating,
              "ratingCount": "1000"
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": app.shortDescription,
            "softwareVersion": app.version,
            "downloadUrl": `https://aa-mods.vercel.app/app/${app.slug}`,
            "featureList": app.whatsNew?.join(", ")
          })}
        </script>
      </Helmet>

      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <img src="https://i.postimg.org/8Pz7S6G1/AA-Mods-Logo.png" alt="AA Mods" className="h-8 w-8 rounded-lg" />
              <span className="hidden font-bold sm:inline-block">AA Mods Store</span>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={handleShare} className="rounded-full">
            <Share2 className="h-5 w-5 text-slate-600" />
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pt-8">
        <section className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-sm">
          <div className={`h-32 w-full bg-gradient-to-r ${app.gradient} opacity-90`} />
          <div className="px-6 pb-8">
            <div className="relative -mt-16 flex flex-col sm:flex-row sm:items-end gap-6 text-center sm:text-left">
              <div className="flex justify-center sm:justify-start">
                <AppIcon app={app} />
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">{app.name}</h1>
                  <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-none">
                    Official Build
                  </Badge>
                </div>
                <p className="text-lg font-medium text-slate-600">{app.subtitle}</p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-bold text-slate-900">{app.rating}</span>
                  </div>
                  <Separator orientation="vertical" className="hidden sm:block h-4" />
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Users className="h-4 w-4" />
                    <span className="text-sm font-medium">{app.downloads} Downloads</span>
                  </div>
                  <Separator orientation="vertical" className="hidden sm:block h-4" />
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Badge variant="outline" className="text-xs uppercase tracking-wider">{app.category}</Badge>
                  </div>
                </div>
              </div>

              <div className="pt-4 sm:pt-0 w-full sm:w-auto">
                <a href={app.directDownloadLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full h-14 px-8 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-lg font-bold shadow-lg shadow-emerald-200 gap-2">
                    <Download className="h-6 w-6" /> Download APK
                  </Button>
                </a>
                <p className="mt-2 text-center text-xs text-slate-400 font-medium">Safe & Scanned by Play Protect</p>
              </div>
            </div>
          </div>

          <Separator className="bg-slate-100" />
          
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-slate-100">
            <div className="p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Version</p>
              <p className="mt-1 font-bold text-slate-900">{app.version}</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Updated</p>
              <p className="mt-1 font-bold text-slate-900">{app.updateDate.display}</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Base</p>
              <p className="mt-1 font-bold text-slate-900 truncate px-2">{app.baseVersion}</p>
            </div>
            <div className="p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Dev</p>
              <p className="mt-1 font-bold text-slate-900">{app.developer}</p>
            </div>
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <section className="grid sm:grid-cols-2 gap-4">
              <Card className="border-slate-200 shadow-sm bg-blue-50/30 border-l-4 border-l-blue-500">
                <CardContent className="p-4 flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-900">What's New</h3>
                    <ul className="mt-2 space-y-1.5">
                      {app.whatsNew?.slice(0, 3).map((item: string, i: number) => (
                        <li key={i} className="text-sm text-blue-800 flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-slate-200 shadow-sm bg-emerald-50/30 border-l-4 border-l-emerald-500">
                <CardContent className="p-4 flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-emerald-900">Security Status</h3>
                    <p className="mt-2 text-sm text-emerald-800 leading-relaxed">
                      Anti-ban protection enabled. Fully compatible with Android 14. 
                      Verified safe by our security team.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="rounded-[2.5rem] bg-white border border-slate-200 p-6 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Info className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-black tracking-tight">App Guide & Details</h2>
              </div>
              <article className="prose prose-slate max-w-none 
                prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900
                prose-h2:text-3xl prose-h3:text-2xl
                prose-p:text-slate-600 prose-p:text-lg prose-p:leading-relaxed
                prose-li:text-slate-600 prose-li:text-lg
                prose-strong:text-slate-900 prose-strong:font-bold
                prose-hr:border-slate-100
              ">
                <ReactMarkdown>{app.blogMarkdown}</ReactMarkdown>
              </article>
            </section>

            <section className="rounded-[2.5rem] bg-white border border-slate-200 p-6 sm:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900">
                  <History className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-black tracking-tight">Full Changelog</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {app.whatsNew?.map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50 transition-all group">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                    <p className="text-slate-700 font-semibold leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <Card className="rounded-[2.5rem] border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-900 p-6 text-white">
                <h3 className="text-xl font-black flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-emerald-400" /> Install Guide
                </h3>
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-5">
                  {[
                    "Download the APK file",
                    "Enable 'Unknown Sources' in settings",
                    "Tap install and follow prompts",
                    "Launch and enjoy premium features"
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700">
                        {i + 1}
                      </div>
                      <p className="text-base font-bold text-slate-700 leading-tight pt-1">{step}</p>
                    </div>
                  ))}
                </div>
                
                {app.note && (
                  <div className="rounded-[2rem] bg-amber-50 p-6 border border-amber-100 flex gap-4">
                    <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0" />
                    <p className="text-sm font-bold text-amber-900 leading-relaxed">
                      {app.note}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl font-black px-2">Related Mods</h3>
              <div className="space-y-3">
                {relatedMods.map((mod: any, i: number) => (
                  <Link key={i} href={`/app/${mod.slug}`}>
                    <div className="group flex items-center justify-between p-5 rounded-[2rem] bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all cursor-pointer">
                      <span className="font-black text-slate-800 group-hover:text-emerald-600">{mod.label}</span>
                      <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                        <ChevronRight className="h-6 w-6 text-slate-400 group-hover:text-emerald-600" />
                      </div>
                    </div>
                  </Link>
                ))}
                <Link href="/">
                  <Button variant="outline" className="w-full rounded-[2rem] h-14 border-slate-200 border-2 font-black hover:bg-slate-50 text-slate-700">
                    Explore All Apps
                  </Button>
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-emerald-600 text-white text-center space-y-3 shadow-2xl shadow-emerald-200 overflow-hidden relative">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 h-32 w-32 bg-white/10 rounded-full blur-2xl" />
              <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Join Community</p>
              <h4 className="text-xl font-black">AA Mods Official</h4>
              <p className="text-sm opacity-90 font-medium">Get instant updates, support, and exclusive mod news.</p>
              <a href="https://t.me/AA_ModsOfficial" target="_blank" rel="noopener noreferrer" className="block pt-2">
                <Button variant="secondary" className="w-full h-12 rounded-xl font-black text-emerald-700">Join Telegram</Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
