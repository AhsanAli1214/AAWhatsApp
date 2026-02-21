import { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { ArrowRight, BriefcaseBusiness, Clapperboard, Music2, Search, Star } from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { storeApps } from "@/data/appData";
import logo from "@/assets/logo.png";

const categories = ["All", "Communication", "Business", "Video", "Photography", "Music & Audio"];

function AppCardIcon({ app, size = "small" }: { app: any; size?: "small" | "large" }) {
  const iconSize = size === "large" ? "h-16 w-16" : "h-10 w-10";
  const iconInnerSize = size === "large" ? "h-10 w-10" : "h-7 w-7";

  if (app.iconImage) {
    return (
      <img 
        src={app.iconImage} 
        alt={`${app.name} icon`} 
        className={`${iconSize} rounded-2xl object-cover`} 
      />
    );
  }

  const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className={`${iconSize} flex items-center justify-center rounded-2xl bg-white/20`}>
      {children}
    </div>
  );

  switch (app.iconType) {
    case "whatsapp":
      return <IconWrapper><FaWhatsapp className={iconInnerSize} /></IconWrapper>;
    case "business":
      return <IconWrapper><BriefcaseBusiness className={iconInnerSize} /></IconWrapper>;
    case "capcut":
      return <IconWrapper><Clapperboard className={iconInnerSize} /></IconWrapper>;
    case "youtube":
      return <IconWrapper><FaYoutube className={iconInnerSize} /></IconWrapper>;
    case "youtubeMusic":
      return <IconWrapper><SiYoutubemusic className={iconInnerSize} /></IconWrapper>;
    default:
      return <IconWrapper><Music2 className={iconInnerSize} /></IconWrapper>;
  }
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredApps = useMemo(() => {
    return storeApps.filter((app) => {
      const matchesSearch = 
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        activeCategory === "All" || app.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-[#f8fafd] text-slate-900">
      <Helmet>
        <title>AA Mods Store | Official App Marketplace 2026</title>
        <meta
          name="description"
          content="The official AA Mods app store. Access the most secure WhatsApp mods, premium tools, and exclusive Android applications with direct high-speed APK downloads."
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/" />
      </Helmet>

      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
          <Link href="/">
            <img src="https://i.postimg.cc/0NRdTr3r/generated_image_6bb6c336_9b07_4a65_b01b_92ba8e39c556_modified.png" alt="AA Mods Logo" className="h-10 w-10 cursor-pointer rounded-xl object-cover" />
          </Link>
          <div className="relative min-w-0 flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input
              type="text"
              placeholder="Search AA Mods... (WhatsApp, CapCut, etc.)"
              className="h-10 rounded-full border-slate-200 bg-slate-50 pl-10 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="hidden text-right md:block">
            <p className="text-sm font-black tracking-tight text-slate-800">AA MODS STORE</p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">Secure Mod Gateway</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <section className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-600 p-8 text-white shadow-lg">
          <p className="text-xs uppercase tracking-[0.2em] text-white/80">Premium Modded Applications</p>
          <h1 className="mt-2 text-3xl font-bold md:text-4xl">The Ultimate Collection of AA Mods</h1>
          <p className="mt-3 max-w-3xl text-white/90 leading-relaxed">
            Experience the next level of mobile freedom. Our centralized store provides the most secure, 
            feature-rich WhatsApp modifications and utility apps. Each application is rigorously tested, 
            verified for safety, and comes with comprehensive changelogs and direct direct high-speed download links.
          </p>
        </section>

        <section>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "border-emerald-600 bg-emerald-600 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between">
            <h2 className="text-2xl font-semibold">
              {activeCategory === "All" ? "All apps" : activeCategory}
            </h2>
            <p className="text-sm text-slate-500">{filteredApps.length} apps available</p>
          </div>

          {filteredApps.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredApps.map((app) => (
                <article key={app.slug} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md">
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
              ))}
            </div>
          ) : (
            <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-slate-500">
              <Search className="mb-2 h-10 w-10 opacity-20" />
              <p>No apps found matching your criteria</p>
              <Button 
                variant="ghost" 
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
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
