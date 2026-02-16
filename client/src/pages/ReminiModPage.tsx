import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ShieldCheck,
  Users,
  Zap,
  Lock,
  Infinity,
  EyeOff,
  Camera,
  Sparkles,
  Layers,
  ArrowRight,
  Clock,
  Star,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { APP_VERSIONS, APP_UPDATE_DATES, APP_FEATURES } from "@/config/appConfig";
import reminiLogo from "@assets/download_1771149808669.png";

export default function ReminiModPage() {
  const canonicalUrl = "https://aa-mods.vercel.app/remini-mod";
  const version = APP_VERSIONS.reminiMod;
  const updateDate = APP_UPDATE_DATES.reminiMod.display;
  const heroImageUrl = "https://i.postimg.cc/W4hMbDm9/image-1771089734969956.png";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#8B0000]/30">
      <Helmet>
        <title>Remini Mod APK {version} Download (100% Working, Premium Unlocked)</title>
        <meta
          name="description"
          content="Download the latest, community-tested Remini Mod APK for free. Our secure, virus-scanned mod transforms old photos into HD masterpieces with all premium features unlocked, no ads, and no watermarks."
        />
        <meta
          name="keywords"
          content="Remini Mod APK, Remini Pro APK, Remini Mod APK download, safe Remini mod, 100% working mod, AI photo enhancer, video enhancement, premium unlocked, free photo editor, unblur photos, photo restoration, Remini Mod APK latest version"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`Remini Mod APK ${version} Download (100% Working, Premium Unlocked)`} />
        <meta
          property="og:description"
          content="AA Mods verified Remini Mod APK with premium unlocked, unlimited edits, no ads, and no watermarks."
        />
        <meta property="og:image" content={heroImageUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Remini Mod APK ${version} by AA Mods`} />
        <meta name="twitter:description" content="Restore old photos in HD with premium Remini tools unlocked, ad-free workflow, and no watermark exports." />
        <meta name="twitter:image" content={heroImageUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Remini Mod APK",
            applicationCategory: "MultimediaApplication",
            operatingSystem: "Android",
            softwareVersion: version,
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", ratingCount: "25000" }
          })}
        </script>
      </Helmet>

      <Navigation />

      <section className="pt-28 pb-12 md:pt-24 md:pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <img
              src={reminiLogo}
              alt="Remini Mod APK"
              className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl border-2 border-[#FF0000]/20 shadow-xl mb-5"
            />
            <Badge className="mb-5 bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/20 uppercase tracking-[0.14em] font-black px-3 py-1 text-[11px]">
              AA Mods Verified
            </Badge>
            <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight mb-4">
              Unlock Your Memories with the
              <span className="text-[#FF0000] italic"> 100% Working </span>
              Remini Mod APK
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-base leading-relaxed font-medium">
              At AA Mods, every Remini Mod APK is rigorously tested by our team and verified by our community to ensure it is safe and fully functional. Remini uses advanced AI to restore blurry, old, and faded media, while this premium-unlocked mod removes limits, ads, and watermarks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <Link href="/remini-mod/download">
                <Button size="lg" className="h-11 px-6 rounded-xl font-bold bg-[#FF0000] hover:bg-[#c30000] text-sm">
                  Download Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/remini-mod/features">
                <Button variant="outline" size="lg" className="h-11 px-6 rounded-xl font-bold border-[#FF0000]/30 hover:bg-[#FF0000]/5 text-sm">
                  Explore Features
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10">
            {[
              { l: "Latest Version", v: version, i: Star },
              { l: "Last Update", v: updateDate, i: Clock },
              { l: "Working Status", v: "100%", i: Zap },
              { l: "Community", v: "Active", i: Users },
            ].map((item, idx) => (
              <Card key={idx} className="rounded-xl border-[#FF0000]/15 bg-[#FF0000]/5">
                <CardContent className="p-3 text-center">
                  <item.i className="h-5 w-5 mx-auto text-[#FF0000] mb-2" />
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{item.l}</p>
                  <p className="font-black text-base">{item.v}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-3 gap-6">
          {[
            {
              icon: ShieldCheck,
              title: "Safety First",
              desc: "Files are scanned through multiple antivirus engines before publishing. We prioritize transparency and safer distribution.",
            },
            {
              icon: Zap,
              title: "100% Working Mods",
              desc: "Our team and users validate core unlocks like premium tools, unlimited pro cards, no ads, and clean export experience.",
            },
            {
              icon: Users,
              title: "Community Driven",
              desc: "Get help, report issues, and share your results with an actively moderated user community built around trust.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="rounded-3xl border-[#FF0000]/15 bg-background">
              <CardHeader>
                <CardTitle className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-[#FF0000]" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-center mb-8">
            Key Benefits of Our <span className="text-[#FF0000] italic">Remini Mod APK</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {APP_FEATURES.reminiMod.map((feature, idx) => {
              const iconByFeature = [Lock, Infinity, EyeOff, Sparkles, Layers, Camera][idx] ?? Sparkles;
              const descriptionMap: Record<string, string> = {
                "Premium/VIP Unlocked": "Access paid pro tools and AI filters without weekly subscription costs.",
                "Unlimited Pro Cards": "No daily cap. Enhance as many photos and videos as you need.",
                "No Ads, No Watermarks": "Smooth workflow with clean exports and no intrusive interruptions.",
                "Advanced AI Technology": "Intelligent AI detects imperfections and improves facial and scene detail.",
                "High-Resolution Output": "Export enhanced media in high quality, including large-format output.",
                "100% Working & Safe": "Community-tested package with stable behavior and safer distribution checks.",
              };
              const Icon = iconByFeature;
              return (
                <Card key={feature} className="rounded-3xl border-[#FF0000]/15 bg-muted/20">
                  <CardHeader>
                    <CardTitle className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                      <Icon className="h-5 w-5 text-[#FF0000]" />
                      {feature}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground font-medium">{descriptionMap[feature] ?? "Premium Remini capability enabled in this configured build."}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="rounded-2xl border-[#FF0000]/20 bg-[#FF0000]/5">
            <CardHeader>
              <CardTitle className="text-xl font-black uppercase tracking-tight">Who Should Use Remini Mod APK?</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="rounded-2xl border border-[#FF0000]/15 bg-background/60 p-4">
                <p className="font-black uppercase tracking-tight mb-1">Family Archives</p>
                <p className="text-muted-foreground font-medium">Restore old portraits and faded family photos before printing or sharing.</p>
              </div>
              <div className="rounded-2xl border border-[#FF0000]/15 bg-background/60 p-4">
                <p className="font-black uppercase tracking-tight mb-1">Creators & Editors</p>
                <p className="text-muted-foreground font-medium">Clean up low-quality media for reels, thumbnails, and visual storytelling.</p>
              </div>
              <div className="rounded-2xl border border-[#FF0000]/15 bg-background/60 p-4">
                <p className="font-black uppercase tracking-tight mb-1">Everyday Users</p>
                <p className="text-muted-foreground font-medium">One-tap enhancement for blurry moments without subscriptions or limits.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
