import { memo, useDeferredValue, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clapperboard,
  Music2,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { STORE_LINKS, storeApps, storeCategories } from "@/data/appData";
import { APP_LOGO_URL } from "@/lib/branding";

type StoreApp = (typeof storeApps)[number];

const AppCard = memo(function AppCard({ app }: { app: StoreApp }) {
  return (
    <article
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className={`relative flex items-center gap-4 bg-gradient-to-r ${app.gradient} p-6 text-white`}>
        <AppCardIcon app={app} size="large" />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-wider opacity-80">{app.developer}</p>
          <h3 className="truncate text-xl font-bold leading-tight">{app.name}</h3>
          <p className="truncate text-xs opacity-90">{app.subtitle}</p>
        </div>
      </div>

      <div className="flex flex-col p-5">
        <p className="line-clamp-2 text-sm text-slate-600">{app.shortDescription}</p>

        <div className="mt-4 flex items-center gap-3 text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-medium">{app.rating}</span>
          </div>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{app.downloads}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{app.version}</span>
        </div>

        <div className="mt-6">
          <Link href={`/app/${app.slug}`}>
            <Button className="w-full rounded-xl bg-emerald-600 py-5 text-sm font-semibold hover:bg-emerald-700">
              View details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
});


function AppCardIcon({ app, size = "small" }: { app: any; size?: "small" | "large" }) {
  const iconSize = size === "large" ? "h-16 w-16" : "h-12 w-12";
  const iconInnerSize = size === "large" ? "h-12 w-12" : "h-7 w-7";

  if (app.iconImage) {
    return <img src={app.iconImage} alt={`${app.name} icon`} loading="lazy" decoding="async" className={`${iconSize} rounded-2xl object-cover shadow-sm`} />;
  }

  const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className={`${iconSize} flex items-center justify-center rounded-2xl bg-white/20`}>{children}</div>
  );

  switch (app.iconType) {
    case "whatsapp":
      return (
        <IconWrapper>
          <FaWhatsapp className={iconInnerSize} />
        </IconWrapper>
      );
    case "business":
      return (
        <IconWrapper>
          <BriefcaseBusiness className={iconInnerSize} />
        </IconWrapper>
      );
    case "capcut":
      return (
        <IconWrapper>
          <Clapperboard className={iconInnerSize} />
        </IconWrapper>
      );
    case "youtube":
      return (
        <IconWrapper>
          <FaYoutube className={iconInnerSize} />
        </IconWrapper>
      );
    case "youtubeMusic":
      return (
        <IconWrapper>
          <SiYoutubemusic className={iconInnerSize} />
        </IconWrapper>
      );
    default:
      return (
        <IconWrapper>
          <Music2 className={iconInnerSize} />
        </IconWrapper>
      );
  }
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [activeCategory, setActiveCategory] = useState("All");

  const normalizedQuery = deferredSearchQuery.trim().toLowerCase();
  const isFiltering = deferredSearchQuery !== searchQuery;

  const searchableApps = useMemo(
    () =>
      storeApps.map((app) => ({
        app,
        name: app.name.toLowerCase(),
        description: app.shortDescription.toLowerCase(),
      })),
    [],
  );

  const filteredApps = useMemo(() => {
    return searchableApps
      .filter((item) => {
        const matchesSearch =
          normalizedQuery.length === 0 ||
          item.name.includes(normalizedQuery) ||
          item.description.includes(normalizedQuery);

        const matchesCategory = activeCategory === "All" || item.app.category === activeCategory;
        return matchesSearch && matchesCategory;
      })
      .map((item) => item.app);
  }, [searchableApps, normalizedQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>AA Mods Store | Official Apps</title>
        <meta
          name="description"
          content="Official AA Mods app store. Explore all apps with detailed information, latest versions, what's new, and direct APK downloads."
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/" />
      </Helmet>

      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <Link href="/">
            <img src={APP_LOGO_URL} alt="AA Mods Logo" fetchPriority="high" decoding="async" className="h-14 w-14 cursor-pointer object-contain" />
          </Link>
          <div className="relative min-w-0 flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              type="text"
              placeholder="Search apps, versions, or features..."
              className="h-10 rounded-full border-slate-200 bg-slate-100 pl-10 focus:bg-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="hidden text-right md:block">
            <p className="text-sm font-semibold">AA Mods Store</p>
            <p className="text-xs text-slate-500">Verified app collection</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section className="relative overflow-hidden rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-500 p-8 text-white shadow-lg shadow-emerald-900/10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/80">Official AA Mods Marketplace</p>
              <h1 className="mt-2 text-3xl font-bold md:text-5xl">Secure, modern, and fast APK downloads</h1>
              <p className="mt-3 max-w-3xl text-white/90">
                Experience the next level of mobile freedom. Our centralized store provides the most secure,
                feature-rich WhatsApp modifications and utility apps.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-medium text-white/90">
                <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2"><ShieldCheck className="h-4 w-4" /> Verified builds</span>
                <span className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2"><Sparkles className="h-4 w-4" /> Smooth install flow</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="h-11 rounded-xl bg-white px-5 font-semibold text-emerald-700 hover:bg-emerald-50">Browse Featured Apps</Button>
                <a href={STORE_LINKS.telegramChannel} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="h-11 rounded-xl border-white/40 bg-white/10 px-5 font-semibold text-white hover:bg-white/20">Trusted & Daily Updated</Button>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <div>
                <p className="text-2xl font-bold">{storeApps.length}+</p>
                <p className="text-xs text-white/80">Curated Apps</p>
              </div>
              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-xs text-white/80">Update Tracking</p>
              </div>
              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-xs text-white/80">Direct Links</p>
              </div>
              <div>
                <p className="text-2xl font-bold">A+</p>
                <p className="text-xs text-white/80">User Trust</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {storeCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">{activeCategory === "All" ? "Featured apps" : activeCategory}</h2>
            <p className="text-sm text-slate-500">{isFiltering ? "Updating results..." : `${filteredApps.length} apps available`}</p>
          </div>

          {filteredApps.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 [content-visibility:auto] [contain-intrinsic-size:900px]">
              {filteredApps.map((app) => (
                <AppCard key={app.slug} app={app} />
              ))}
            </div>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white text-slate-500">
              <Search className="mb-2 h-12 w-12 opacity-20" />
              <p>No apps found matching your criteria</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-2 text-emerald-600"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
