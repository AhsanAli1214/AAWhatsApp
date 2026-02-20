import { Helmet } from "react-helmet";
import { ArrowRight, BriefcaseBusiness, Clapperboard, Download, Music2, Search, Star } from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { storeApps, type StoreApp } from "@/data/storeApps";
import logo from "@/assets/logo.png";

const categories = ["All", "Communication", "Business", "Video", "Photography", "Music & Audio"];

function AppCardIcon({ app }: { app: StoreApp }) {
  if (app.iconImage) {
    return <img src={app.iconImage} alt={`${app.name} icon`} className="h-8 w-8 rounded-lg object-cover" />;
  }

  switch (app.iconType) {
    case "whatsapp":
      return <FaWhatsapp className="h-7 w-7" />;
    case "business":
      return <BriefcaseBusiness className="h-7 w-7" />;
    case "capcut":
      return <Clapperboard className="h-7 w-7" />;
    case "youtube":
      return <FaYoutube className="h-7 w-7" />;
    case "youtubeMusic":
      return <SiYoutubemusic className="h-7 w-7" />;
    default:
      return <Music2 className="h-7 w-7" />;
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafd] text-slate-900">
      <Helmet>
        <title>AA Mods Store | Official Apps</title>
        <meta
          name="description"
          content="Official AA Mods app store. Explore all apps with detailed information, latest versions, what's new, and direct APK downloads."
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/" />
      </Helmet>

      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <img src={logo} alt="AA Mods Logo" className="h-10 w-10 rounded-xl object-cover" />
          <div className="min-w-0 flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4" />
              Search AA Mods apps
            </div>
          </div>
          <div className="hidden text-right md:block">
            <p className="text-sm font-semibold">AA Mods Store</p>
            <p className="text-xs text-slate-500">Official apps collection</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white shadow-lg">
          <p className="text-xs uppercase tracking-[0.2em] text-white/80">Official AA Mods Marketplace</p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">Download all AA Mods apps in one place</h1>
          <p className="mt-3 max-w-3xl text-white/90">
            Every app page includes latest version details, update information, complete highlights, and direct APK
            download links. Structure is centralized for easy add, edit, or delete operations.
          </p>
        </section>

        <section>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <div
                key={category}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium ${
                  index === 0
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-slate-200 bg-white text-slate-700"
                }`}
              >
                {category}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">All apps</h2>
            <p className="text-sm text-slate-500">{storeApps.length} apps available</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {storeApps.map((app) => (
              <article key={app.slug} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className={`mb-4 rounded-xl bg-gradient-to-r ${app.gradient} p-4 text-white`}>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                    <AppCardIcon app={app} />
                  </div>
                  <p className="text-xs opacity-90">{app.developer}</p>
                  <p className="mt-2 text-xl font-semibold">{app.name}</p>
                  <p className="text-xs opacity-90">{app.subtitle}</p>
                </div>

                <p className="text-sm text-slate-600">{app.shortDescription}</p>

                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    {app.rating}
                  </div>
                  <span>•</span>
                  <span>{app.downloads}</span>
                  <span>•</span>
                  <span>{app.version}</span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <a href={app.directDownloadLink} target="_blank" rel="noreferrer" className="inline-flex">
                    <Button className="rounded-full bg-emerald-600 hover:bg-emerald-700">
                      <Download className="mr-1 h-4 w-4" /> Direct Download
                    </Button>
                  </a>
                  <Link href={`/app/${app.slug}`}>
                    <Button variant="outline" className="rounded-full">
                      App details <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
