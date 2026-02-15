import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import {
  Sparkles,
  Check,
  Zap,
  ShieldCheck,
  Bot,
  Layers,
  FileVideo,
  Download,
} from "lucide-react";
import { APP_VERSIONS } from "@/config/appConfig";
import { Footer } from "@/components/Footer";

export default function ReminiFeaturesPage() {
  const canonicalUrl = "https://aa-mods.vercel.app/remini-mod/features";
  const HERO_IMAGE_URL = "https://i.postimg.cc/W4hMbDm9/image-1771089734969956.png";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Remini Mod APK Features | Pro Unlocked (Verified Working), AI Filters</title>
        <meta name="description" content="Explore the powerful, community-verified features of Remini Mod APK. From AI-powered photo restoration to fun filters like the baby generator and hairstyle feature." />
        <meta name="keywords" content="Remini Mod APK features, AI filters, video enhancer, photo restoration, unblur, color correction, AI art generator, premium unlocked, unlimited pro cards, hairstyle feature, community tested mod, AA Mods" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Remini Mod APK Features | Pro Unlocked (Verified Working) | AA Mods" />
        <meta property="og:description" content="Discover everything you get with our tested and working premium unlocked version of Remini." />
        <meta property="og:image" content={HERO_IMAGE_URL} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://aa-mods.vercel.app/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Remini Mod",
                "item": "https://aa-mods.vercel.app/remini-mod"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Features",
                "item": canonicalUrl
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="pt-32 pb-12 container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          <Badge className="mb-5 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-black">
            Premium Features Unlocked
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Powerful AI Restoration Features
          </h1>
          <p className="text-muted-foreground text-lg">
            Every feature is tested and verified by the AA Mods team to ensure 100% functionality.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl pb-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sparkles className="h-5 w-5 text-primary" /> Core Enhancement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Photo & Video Restoration</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Unblur & Sharpen</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Auto Color & Colorize</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Face Enhancer & Portrait</div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="h-5 w-5 text-primary" /> AI Creative Tools
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />AI Art Generator & Avatars</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Viral AI Baby Generator</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />AI Hairstyle Salon</div>
              <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />Gender Swap & Aging</div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg font-black">
                <Zap className="h-5 w-5 text-primary" /> Mod Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-primary" />Unlimited Pro Cards</div>
              <div className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-primary" />No Advertisements</div>
              <div className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-primary" />No Watermarks</div>
              <div className="flex items-center gap-2 font-bold"><Check className="h-4 w-4 text-primary" />Premium VIP Unlocked</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
