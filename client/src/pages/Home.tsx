import { memo, useDeferredValue, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  BriefcaseBusiness,
  Clapperboard,
  Music2,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Download,
  Zap,
  CheckCircle2,
  Users,
  X,
} from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HOME_POSTER_CONFIG, STORE_LINKS, storeApps, storeCategories } from "@/data/appData";
import { APP_LOGO_URL } from "@/lib/branding";
import { motion, AnimatePresence } from "framer-motion";

type StoreApp = (typeof storeApps)[number];

const POSTER_SESSION_KEY = "home-poster-dismissed";


const normalizeSearchValue = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const compactSearchValue = (value: string) => normalizeSearchValue(value).replace(/\s+/g, "");

const AppCard = memo(function AppCard({ app }: { app: StoreApp }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 dark:border-slate-800/60 dark:bg-slate-900"
    >
      <div className={`relative flex items-center gap-4 bg-gradient-to-br ${app.gradient} p-5 text-white`}>
        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="relative z-10 scale-100 transition-transform duration-500 group-hover:scale-110">
          <AppCardIcon app={app} size="small" />
        </div>
        <div className="min-w-0 flex-1 relative z-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">{app.developer}</p>
          <h3 className="truncate text-xl font-black leading-tight tracking-tight text-white">{app.name}</h3>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90">{app.subtitle}</p>
        </div>
      </div>

      <div className="flex flex-col p-5">
        <p className="line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{app.shortDescription}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[12px] font-semibold">
            <div className="flex items-center gap-1 text-slate-900 dark:text-slate-100">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              <span>{app.rating}</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div className="flex items-center gap-1 text-slate-500">
              <span className="text-[11px] font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300">{app.version}</span>
            </div>
            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            <div className="flex items-center gap-1 text-slate-500">
              <Download className="h-3 w-3" />
              <span>{app.downloads}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Verified</span>
          </div>
        </div>

        <div className="mt-5">
          <Link href={`/app/${app.slug}`}>
            <Button className="w-full h-11 rounded-xl bg-emerald-600 text-white text-sm font-bold shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-700 hover:shadow-emerald-500/30 active:scale-[0.97]">
              Download <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
});


function AppCardIcon({ app, size = "small" }: { app: any; size?: "small" | "large" }) {
  const iconSize = size === "large" ? "h-16 w-16" : "h-12 w-12";
  const iconInnerSize = size === "large" ? "h-10 w-10" : "h-7 w-7";

  if (app.iconImage) {
    return (
      <div className="relative">
        <img 
          src={app.iconImage} 
          alt={`${app.name} icon`} 
          loading="lazy" 
          decoding="async" 
          className={`${iconSize} rounded-[1.25rem] object-cover shadow-md border-2 border-white/20`} 
        />
        <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
        </div>
      </div>
    );
  }

  const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className={`${iconSize} flex items-center justify-center rounded-[1.25rem] bg-white/20 backdrop-blur-sm border-2 border-white/20`}>{children}</div>
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
  const [searchInputValue, setSearchInputValue] = useState("");
  const deferredSearchQuery = useDeferredValue(searchQuery);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  useEffect(() => {
    if (!HOME_POSTER_CONFIG.enabled) {
      setIsPosterOpen(false);
      return;
    }

    const isDismissedForTab = window.sessionStorage.getItem(POSTER_SESSION_KEY) === "true";
    setIsPosterOpen(!isDismissedForTab);
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setSearchQuery(searchInputValue);
    }, 120);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [searchInputValue]);

  const closePosterForCurrentTab = () => {
    window.sessionStorage.setItem(POSTER_SESSION_KEY, "true");
    setIsPosterOpen(false);
  };

  const normalizedQuery = normalizeSearchValue(deferredSearchQuery);
  const compactQuery = compactSearchValue(deferredSearchQuery);
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const isFiltering = deferredSearchQuery !== searchQuery;
  const hasActiveSearch = normalizedQuery.length > 0;

  const searchableApps = useMemo(
    () =>
      storeApps.map((app) => {
        const searchableText = [
          app.name,
          app.shortDescription,
          app.longDescription,
          app.category,
          app.slug,
          app.seoKeywords ?? "",
          app.subtitle ?? "",
        ].join(" ");

        return {
          app,
          normalizedText: normalizeSearchValue(searchableText),
          compactText: compactSearchValue(searchableText),
        };
      }),
    [],
  );

  const filteredApps = useMemo(() => {
    return searchableApps
      .filter((item) => {
        const matchesSearch =
          normalizedQuery.length === 0 ||
          item.normalizedText.includes(normalizedQuery) ||
          (compactQuery.length > 0 && item.compactText.includes(compactQuery)) ||
          queryTokens.every((token) => item.normalizedText.includes(token));

        const matchesCategory = activeCategory === "All" || item.app.category === activeCategory;
        return matchesSearch && matchesCategory;
      })
      .map((item) => item.app);
  }, [searchableApps, normalizedQuery, compactQuery, queryTokens, activeCategory]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500/20 selection:text-emerald-900">
      <Helmet>
        <title>AA Mods - Download Premium WhatsApp Mods & Android Apps</title>
        <meta name="description" content="Download the latest AA WhatsApp Mods, CapCut Pro, Remini Mod, and more. Secure, fast, and always updated premium Android applications." />
        <meta name="keywords" content="AA WhatsApp, WhatsApp Mods, Android Apps, Premium APK, CapCut Pro, Remini Mod, YouTube Premium Mod" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#059669" />
        <meta property="og:title" content="AA Mods - Premium WhatsApp & Android Modifications" />
        <meta property="og:description" content="The ultimate destination for secure and powerful Android app modifications." />
        <meta property="og:site_name" content="AA Mods" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aa-mods.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AA Mods - Premium Android Mods" />
        <meta name="twitter:description" content="Secure, fast, and updated premium Android applications." />
        <meta name="copyright" content="AA Mods" />
        <meta name="author" content="AA Mods Team" />
        <link rel="canonical" href="https://aa-mods.vercel.app" />
        <meta property="og:image" content="https://i.postimg.cc/0NRdTr3r/generated_image_6bb6c336_9b07_4a65_b01b_92ba8e39c556_modified.png" />
        <meta property="og:image:secure_url" content="https://i.postimg.cc/0NRdTr3r/generated_image_6bb6c336_9b07_4a65_b01b_92ba8e39c556_modified.png" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image" content="https://i.postimg.cc/0NRdTr3r/generated_image_6bb6c336_9b07_4a65_b01b_92ba8e39c556_modified.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://i.postimg.cc" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AA Mods Store",
            "operatingSystem": "Android",
            "applicationCategory": "Utilities",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "10500"
            }
          })}
        </script>
      </Helmet>

      <header className="sticky inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <Link href="/">
            <img src={APP_LOGO_URL} alt="AA Mods Logo" fetchPriority="high" decoding="async" className="h-16 w-16 cursor-pointer object-contain" />
          </Link>
          <div className="relative min-w-0 flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              type="text"
              placeholder="Search apps or features..."
              className="h-10 rounded-full border-slate-200 bg-slate-100 pl-10 focus:bg-white"
              value={searchInputValue}
              onChange={(e) => setSearchInputValue(e.target.value)}
            />
          </div>
          <div className="hidden text-right md:block">
            <p className="text-sm font-semibold">AA Mods Store</p>
            <p className="text-xs text-slate-500">Verified app collection</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        {!hasActiveSearch ? (
        <section className="relative overflow-hidden rounded-3xl border border-emerald-300/40 bg-gradient-to-br from-emerald-600 via-emerald-500 to-green-500 p-8 text-white shadow-xl shadow-emerald-900/20">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-xl" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100/90">Official AA Mods Marketplace</p>
              <h1 className="mt-2 text-3xl font-bold text-white md:text-5xl">Secure, modern, and fast APK downloads</h1>
              <p className="mt-3 max-w-3xl text-emerald-50/95">
                Experience the next level of mobile freedom. Our centralized store provides the most secure,
                feature-rich WhatsApp modifications and utility apps.
              </p>
              <div className="mt-5 flex flex-wrap gap-5 text-sm font-semibold text-emerald-50">
                <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-white" /> Verified builds</span>
                <span className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-white" /> Smooth install flow</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="h-11 rounded-xl bg-white px-5 font-semibold text-emerald-700 hover:bg-emerald-50">Browse Featured Apps</Button>
                <a href={STORE_LINKS.telegramChannel} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="h-11 rounded-xl border-white/50 bg-white/10 px-5 font-semibold text-white hover:bg-white/20">Trusted & Daily Updated</Button>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/35 bg-white/10 p-4 backdrop-blur-sm">
              <div>
                <p className="text-2xl font-bold text-white">{storeApps.length}+</p>
                <p className="text-xs text-emerald-100/90">Curated Apps</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-xs text-emerald-100/90">Update Tracking</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">100%</p>
                <p className="text-xs text-emerald-100/90">Direct Links</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">A+</p>
                <p className="text-xs text-emerald-100/90">User Trust</p>
              </div>
            </div>
          </div>
        </section>
        ) : null}

        {!hasActiveSearch ? (
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
        ) : null}

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
                onClick={() => {
                  setSearchInputValue("");
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

      <AnimatePresence>
        {HOME_POSTER_CONFIG.enabled && isPosterOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 px-3 py-4 sm:p-6 backdrop-blur-sm"
            onClick={closePosterForCurrentTab}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-[95vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl overflow-hidden rounded-2xl border border-white/30 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closePosterForCurrentTab}
                className="absolute right-2 top-2 z-10 inline-flex h-9 w-9 sm:right-3 sm:top-3 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black/85"
                aria-label="Close poster"
              >
                <X className="h-5 w-5" />
              </button>

              <a href={HOME_POSTER_CONFIG.linkUrl} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={HOME_POSTER_CONFIG.imageUrl}
                  alt={HOME_POSTER_CONFIG.alt}
                  className="max-h-[82vh] sm:max-h-[85vh] w-full object-contain bg-black"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
