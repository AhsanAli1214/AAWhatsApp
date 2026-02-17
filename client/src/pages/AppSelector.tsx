import { Link } from "wouter";
import { motion } from "framer-motion";
import reminiLogo from "@assets/download_1771149808669.png";
import {
  MessageSquare,
  Briefcase,
  Download,
  Sparkles,
  Users,
  Video,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { APP_VERSIONS } from "@/config/appConfig";
import { Helmet } from "react-helmet";

const AA_WHATSAPP_ICON_URL =
  "https://i.postimg.cc/N0p0fsf1/81ddf498-7efe-4101-83b1-101a77abf065.jpg";
const CAPCUT_ICON_URL = "https://i.postimg.cc/q71j1h4d/capcut-pro.png";
const AA_BUSINESS_ICON_URL =
  "https://i.postimg.cc/59vMs9dS/a8abc6a4_b6d9_4453_8a6a_08ffa7ad85d7.jpg";
const REMINI_ICON_URL = reminiLogo;
const YOUTUBE_ICON_URL = "https://i.postimg.cc/4y3bZ6cj/download-1-removebg-preview.png";
const FAVICON_URL = "https://i.postimg.cc/cH2Vjzjc/Gemini_Generated_Image_m5jfz1m5jfz1m5jf_removebg_preview.png";

type ProductCard = {
  appKey: keyof typeof APP_VERSIONS;
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
  tintClass: string;
  borderClass: string;
  hoverClass: string;
  iconClass: string;
  exploreHref: string;
  downloadHref: string;
  exploreLabel: string;
  highlights: string[];
};

const productCards: ProductCard[] = [
  {
    appKey: "aaWhatsApp",
    name: "AA WhatsApp",
    description:
      "Secure WhatsApp mod with advanced privacy controls, anti-ban optimization, and deep customization.",
    icon: MessageSquare,
    image: AA_WHATSAPP_ICON_URL,
    tintClass: "from-emerald-500/20 via-primary/10 to-cyan-500/20",
    borderClass: "border-emerald-400/40",
    hoverClass: "hover:border-emerald-300/70",
    iconClass: "text-primary",
    exploreHref: "/aa-whatsapp",
    downloadHref: "/aa-whatsapp/download",
    exploreLabel: "Explore AA WhatsApp",
    highlights: ["Anti-Ban Protection", "Ghost/Privacy Features", "Performance Optimized"],
  },
  {
    appKey: "capcutPro",
    name: "CapCut Pro",
    description:
      "Professional video editor build with premium assets, AI tools unlocked, and no-watermark exports.",
    icon: Video,
    image: CAPCUT_ICON_URL,
    tintClass: "from-emerald-500/20 via-primary/10 to-cyan-500/20",
    borderClass: "border-emerald-400/40",
    hoverClass: "hover:border-emerald-300/70",
    iconClass: "text-primary",
    exploreHref: "/capcut-pro",
    downloadHref: "/capcut-pro/download",
    exploreLabel: "Explore CapCut Pro",
    highlights: ["AI Features Enabled", "No Watermark", "Template Library Unlocked"],
  },
  {
    appKey: "aaBusiness",
    name: "AA Business WhatsApp",
    description:
      "Business-first WhatsApp experience with analytics, automation workflows, and enterprise messaging controls.",
    icon: Briefcase,
    image: AA_BUSINESS_ICON_URL,
    tintClass: "from-emerald-500/20 via-primary/10 to-cyan-500/20",
    borderClass: "border-emerald-400/40",
    hoverClass: "hover:border-emerald-300/70",
    iconClass: "text-blue-500",
    exploreHref: "/aa-business",
    downloadHref: "/aa-business/download",
    exploreLabel: "Explore AA Business",
    highlights: ["Bulk Messaging", "Smart Auto Replies", "Business Dashboard"],
  },

  {
    appKey: "youtubePremium",
    name: "YouTube Premium MOD",
    description:
      "Premium YouTube build with ad-free playback, SponsorBlock, RYD, enhanced bitrate, and offline-focused controls.",
    icon: Video,
    image: YOUTUBE_ICON_URL,
    tintClass: "from-emerald-500/20 via-primary/10 to-cyan-500/20",
    borderClass: "border-emerald-400/40",
    hoverClass: "hover:border-emerald-300/70",
    iconClass: "text-red-500",
    exploreHref: "/youtube-premium-mod",
    downloadHref: "/youtube-premium-mod/install",
    exploreLabel: "Explore YouTube Premium MOD",
    highlights: ["Ad-Free + Background Play", "SponsorBlock + RYD", "AA Mods Services Login"],
  },
  {
    appKey: "reminiMod",
    name: "Remini Mod",
    description:
      "AI-powered photo enhancer for restoration, unblur, and HD upscaling with premium workflow unlocks.",
    icon: Sparkles,
    image: REMINI_ICON_URL,
    tintClass: "from-emerald-500/20 via-primary/10 to-cyan-500/20",
    borderClass: "border-emerald-400/40",
    hoverClass: "hover:border-emerald-300/70",
    iconClass: "text-[#FF0000]",
    exploreHref: "/remini-mod",
    downloadHref: "/remini-mod/download",
    exploreLabel: "Explore Remini Mod",
    highlights: ["Premium Features", "100% Working Build", "Ad-Free Workflow"],
  },
];

export default function AppSelector() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>
          AA Mods – Ahsan Ali MOD APK Latest Version 2026 | AA Mods Download
        </title>
        <meta
          name="description"
          content={`Download AA Mods by Ahsan Ali Mods. Get AA Mods APK latest version 2026 with premium features unlocked, AI tools enabled, no watermark options, stable performance, and safe Android downloads including AAWhatsApp ${APP_VERSIONS.aaWhatsApp}, AA Business ${APP_VERSIONS.aaBusiness}, and CapCut Pro.`}
        />
        <meta
          name="keywords"
          content="AA Mods, Ahsan Ali Mods, AA Mods APK, Ahsan Ali MOD Apps, AA Mods Download, AA Mods Pro, AA Mods Latest Version, AA Mods Premium Features, Ahsan Ali MOD Games, AA Mods Android, AA Mods without watermark, AA Mods AI features unlocked, AA Mods stable MOD, Download AA Mods safely, AA Mods all templates working, AA Mods business mode, AA Mods no internet required, AA Mods MOD for Android 6+, AA Mods regional restrictions removed, AA Mods optimized APK, Best MOD apps by Ahsan Ali, Premium features unlocked MODs, Safe AA Mods download site, Fast and clean MOD APKs, Latest AA Mods update 2026, MOD APK for editing apps, All-in-one MOD APK, Secure MOD apps for Android, MOD apps without ads, Ahsan Ali MODs tutorials"
        />
        <meta
          property="og:title"
          content="AA Mods – Ahsan Ali Mods Official APK Hub (Latest Version 2026)"
        />
        <meta
          property="og:description"
          content="Official AA Mods by Ahsan Ali: safe MOD APK downloads with premium features unlocked, AI tools, stable builds, and no-watermark options for Android."
        />
        <meta
          property="og:image"
          content="https://aa-mods.vercel.app/AA%20Mods.png"
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/" />
        <link rel="icon" type="image/png" href={FAVICON_URL} />
        <link rel="shortcut icon" href={FAVICON_URL} />
        <link
          rel="preconnect"
          href="https://i.postimg.cc"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://i.postimg.cc" />
        <link
          rel="preload"
          as="image"
          href="/favicon.png"
          fetchPriority="high"
        />
        <link rel="preload" as="image" href={AA_WHATSAPP_ICON_URL} />
        <link rel="preload" as="image" href={CAPCUT_ICON_URL} />
        <link rel="preload" as="image" href={AA_BUSINESS_ICON_URL} />
        <link rel="preload" as="image" href={REMINI_ICON_URL} />
        <link rel="preload" as="image" href={YOUTUBE_ICON_URL} />
      </Helmet>

      <Navigation />

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <img
              src="/favicon.png"
              alt="AA Mods Logo"
              className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 object-contain rounded-2xl"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width="112"
              height="112"
            />
            <Badge className="bg-primary/10 text-primary border-primary/20 uppercase tracking-[0.14em] font-black text-[11px] px-3 py-1 mb-4">
              Official Apps Directory
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-3">
              Select Your <span className="text-primary italic">AA Mods</span> App
            </h1>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose from our verified app builds with a cleaner, safer and more professional download experience.
              Every listing below includes quick highlights, latest version, and direct action buttons.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
          >
            {[
              { icon: ShieldCheck, label: "Secure Builds", value: "Verified" },
              { icon: Users, label: "Community", value: "Active" },
              { icon: Sparkles, label: "Updates", value: "Frequent" },
              { icon: Download, label: "Access", value: "Direct" },
            ].map((item) => (
              <Card key={item.label} className="border-white/10 bg-secondary/20">
                <CardContent className="p-3 text-center">
                  <item.icon className="w-5 h-5 text-primary mx-auto mb-1.5" />
                  <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground font-bold">{item.label}</p>
                  <p className="font-black text-sm">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mb-8"
          >
            <Card className="border-primary/25 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
              <CardContent className="p-4 md:p-5">
                <p className="text-[11px] uppercase tracking-[0.14em] text-primary font-black mb-3">Latest Stable Versions</p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
                  {productCards.map((product) => (
                    <div key={`${product.name}-version`} className="rounded-lg border border-white/10 bg-background/50 px-3 py-2">
                      <p className="text-[11px] text-muted-foreground font-semibold leading-tight">{product.name}</p>
                      <p className="font-black mt-1">{APP_VERSIONS[product.appKey]}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {productCards.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
                >
                  <Card
                    className={`h-full border ${product.borderClass} ${product.hoverClass} transition-all duration-300 bg-gradient-to-br ${product.tintClass} shadow-lg shadow-emerald-500/10 hover:shadow-emerald-400/30 hover:-translate-y-1 relative overflow-hidden`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.20),transparent_52%),radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.16),transparent_56%)]" />
                    <CardHeader className="pb-2 relative z-10">
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image}
                          alt={`${product.name} icon`}
                          className="w-12 h-12 rounded-xl object-cover"
                          loading="eager"
                          decoding="async"
                          width="48"
                          height="48"
                        />
                        <div>
                          <CardTitle className="text-xl font-black tracking-tight">{product.name}</CardTitle>
                          <p className="text-xs text-muted-foreground font-semibold">Version {APP_VERSIONS[product.appKey]}</p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-3 relative z-10">
                      <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{product.description}</p>

                      <div className="space-y-2.5 mb-6">
                        {product.highlights.map((highlight) => (
                          <div key={highlight} className="flex items-center gap-2.5 text-sm">
                            <CheckCircle2 className={`w-4 h-4 shrink-0 ${product.iconClass}`} />
                            <span className="font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <Link href={product.exploreHref}>
                          <Button className="w-full font-bold" size="lg" data-testid={`button-explore-${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            <Icon className="w-4 h-4 mr-2" />
                            {product.exploreLabel}
                          </Button>
                        </Link>
                        <Link href={product.downloadHref}>
                          <Button variant="outline" className="w-full font-bold" size="lg" data-testid={`button-download-${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10"
          >
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.14em] text-primary font-black">Need help choosing?</p>
                  <p className="text-sm text-muted-foreground">Check feature pages and download guides for each app before installing.</p>
                </div>
                <Link href="/comparison">
                  <Button variant="outline" className="font-bold">
                    Compare Apps <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
