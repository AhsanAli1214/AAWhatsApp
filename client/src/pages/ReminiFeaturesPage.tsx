import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Scan,
  Eye,
  Palette,
  Layers,
  UserCheck,
  Eraser,
  Sparkles,
  Scissors,
  Baby,
  Zap,
  Clock,
  Heart,
  Lock,
  Infinity,
  ShieldCheck,
  EyeOff,
  AlertTriangle,
} from "lucide-react";
import { APP_FEATURES, APP_UPDATE_DATES } from "@/config/appConfig";
import reminiLogo from "@assets/download_1771149808669.png";

export default function ReminiFeaturesPage() {
  const canonicalUrl = "https://aa-mods.vercel.app/remini-mod/features";
  const verifiedDate = APP_UPDATE_DATES.reminiMod.display;
  const heroImageUrl = "https://i.postimg.cc/W4hMbDm9/image-1771089734969956.png";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#8B0000]/30">
      <Helmet>
        <title>Remini Mod APK Features | Pro Unlocked (Verified Working), AI Filters</title>
        <meta
          name="description"
          content="Explore the powerful, community-verified features of Remini Mod APK. From AI-powered photo restoration to fun filters like the baby generator and hairstyle feature, discover everything you get with our tested and working premium unlocked version."
        />
        <meta
          name="keywords"
          content="Remini Mod APK features, AI filters, video enhancer, photo restoration, unblur, color correction, AI art generator, premium unlocked, unlimited pro cards, hairstyle feature, community tested mod"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Remini Mod APK Features | Pro Unlocked (Verified Working)" />
        <meta property="og:description" content="Explore tested Remini enhancement tools, AI creative filters, and premium unlocked benefits in one complete guide." />
        <meta property="og:image" content={heroImageUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Remini Mod APK Features Guide" />
        <meta name="twitter:description" content="Complete verified feature list: restoration tools, AI filters, and premium unlocked capabilities." />
        <meta name="twitter:image" content={heroImageUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {"@type": "Question", name: "Are all Remini premium features always unlocked?", acceptedAnswer: {"@type": "Answer", text: "Most client-side features are unlocked, but some server-side actions may vary by build and server checks."}},
              {"@type": "Question", name: "Can Remini Mod improve very old photos?", acceptedAnswer: {"@type": "Answer", text: "Yes, core tools can sharpen, denoise, color-correct, and upscale many old images."}}
            ]
          })}
        </script>
      </Helmet>

      <Navigation />

      <section className="pt-28 pb-10 container mx-auto px-4 max-w-6xl text-center">
        <img src={reminiLogo} alt="Remini" className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-2xl border-2 border-[#FF0000]/20" />
        <Badge className="mb-4 bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/20 uppercase tracking-[0.14em] font-black px-3 py-1 text-[11px]">
          Verified & Tested
        </Badge>
        <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-3">
          In-Depth Features of <span className="text-[#FF0000] italic">Remini Mod APK</span>
        </h1>
        <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base font-medium">
          Remini Mod APK combines professional restoration tools with creative AI filters. Our list below is structured with clear verification labels so users know what has been tested and what can vary by server-side processing.
        </p>
      </section>

      <section className="container mx-auto px-4 max-w-6xl pb-16 grid md:grid-cols-2 gap-5">
        <Card className="rounded-3xl border-[#FF0000]/15 bg-muted/20">
          <CardHeader>
            <CardTitle className="font-black uppercase tracking-tight text-xl">Core Enhancement & Restoration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { icon: Scan, t: "Photo & Video Restoration (Tested & Working)", d: "Repairs old, pixelated, and damaged visuals, including upscale and scratch recovery." },
              { icon: Eye, t: `Unblur & Sharpen (Verified on ${verifiedDate})`, d: "Improves detail clarity and reduces motion blur for crisper output." },
              { icon: Palette, t: "Auto Color & Colorize (Community Confirmed)", d: "Revives faded photos and colorizes black-and-white media with AI-assisted tones." },
              { icon: Layers, t: "Denoising", d: "Removes grain and digital noise to produce cleaner images." },
              { icon: UserCheck, t: "Face Enhancer & Portrait Mode", d: "Boosts facial detail, smooths blemishes, and improves portrait lighting." },
              { icon: Eraser, t: "Background & Object Removal", d: "Some builds include quick tools to remove objects or replace backgrounds." },
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl border border-[#FF0000]/10 bg-background/60">
                <p className="font-black text-sm uppercase tracking-tight flex items-center gap-2 mb-1">
                  <item.icon className="h-4 w-4 text-[#FF0000]" /> {item.t}
                </p>
                <p className="text-sm text-muted-foreground font-medium">{item.d}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-[#FF0000]/15 bg-muted/20">
          <CardHeader>
            <CardTitle className="font-black uppercase tracking-tight text-xl">Creative AI-Powered Filters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { icon: Sparkles, t: "AI Art Generator & Avatars", d: "Generate artistic portraits and stylized avatar looks from your photos." },
              { icon: Scissors, t: "Hairstyle Feature", d: "Try virtual haircuts and colors using Remini’s AI hair simulation tools." },
              { icon: Baby, t: "AI Baby Generator", d: "Create potential baby predictions from selected photos." },
              { icon: Zap, t: "Gender Swap", d: "View alternate facial structure and style transformations." },
              { icon: Clock, t: "Aging Video Feature", d: "Preview age progression through high-resolution time-lapse style outputs." },
              { icon: Heart, t: "AI Wedding & Pregnant Filters", d: "Use fun scenario-based filters for social content and edits." },
            ].map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl border border-[#FF0000]/10 bg-background/60">
                <p className="font-black text-sm uppercase tracking-tight flex items-center gap-2 mb-1">
                  <item.icon className="h-4 w-4 text-[#FF0000]" /> {item.t}
                </p>
                <p className="text-sm text-muted-foreground font-medium">{item.d}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-[#FF0000]/15 bg-[#FF0000]/5 md:col-span-2">
          <CardHeader>
            <CardTitle className="font-black uppercase tracking-tight text-xl">Exclusive Mod APK Benefits (Premium Unlocked)</CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {APP_FEATURES.reminiMod.map((feature, idx) => {
              const icons = [Lock, Infinity, EyeOff, Sparkles, Layers, ShieldCheck];
              const Icon = icons[idx] ?? ShieldCheck;
              return (
                <div key={feature} className="rounded-xl p-3 border border-[#FF0000]/15 bg-background/70 text-center">
                  <Icon className="h-5 w-5 text-[#FF0000] mx-auto mb-2" />
                  <p className="font-black text-sm uppercase tracking-tight">{feature}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-[#FF0000]/15 bg-muted/20 md:col-span-2">
          <CardHeader>
            <CardTitle className="font-black uppercase tracking-tight text-xl">Best-Use Workflow (Quick Tips)</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl border border-[#FF0000]/10 bg-background/60 p-3">
              <p className="font-black uppercase mb-1">1. Start with Restore</p>
              <p className="text-muted-foreground font-medium">Use restoration + unblur first before applying creative AI filters.</p>
            </div>
            <div className="rounded-xl border border-[#FF0000]/10 bg-background/60 p-3">
              <p className="font-black uppercase mb-1">2. Apply Color Tools</p>
              <p className="text-muted-foreground font-medium">Run colorize and denoise for cleaner skin tones and texture balance.</p>
            </div>
            <div className="rounded-xl border border-[#FF0000]/10 bg-background/60 p-3">
              <p className="font-black uppercase mb-1">3. Export High Quality</p>
              <p className="text-muted-foreground font-medium">Export after final sharpening to preserve maximum visual clarity.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-amber-500/30 bg-amber-500/5 md:col-span-2">
          <CardHeader>
            <CardTitle className="font-black uppercase tracking-tight text-lg text-amber-600 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" /> Important Caveat (Transparency Promise)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">
              Some premium Remini actions are server-sided. In certain app builds, those specific server-validated features may remain partially locked, even when UI unlocks, unlimited cards, and ad removal are working. We publish this clearly so users have realistic expectations.
            </p>
          </CardContent>
        </Card>
      </section>

      <Footer />
    </div>
  );
}
