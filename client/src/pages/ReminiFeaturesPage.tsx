import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
  Image as ImageIcon,
  Palette,
  Eraser,
  Baby,
  Clock,
  UserCheck
} from "lucide-react";
import { APP_VERSIONS } from "@/config/appConfig";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

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
          <Badge className="mb-5 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-black px-4 py-1">
            Verified & Tested Features
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase leading-none">
            In-Depth <span className="text-primary italic">Features</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Remini Mod APK is packed with a diverse set of tools leveraging the power of artificial intelligence.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl pb-24">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
              <ImageIcon className="text-primary" /> Core Enhancement Tools
            </h2>
            <div className="grid gap-4">
              {[
                { title: "Photo & Video Restoration", desc: "Intelligently improves quality of old, pixelated, or damaged media." },
                { title: "Unblur & Sharpen", desc: "Removes motion blur and sharpens details for crisp images." },
                { title: "Auto Color & Colorize", desc: "Revives faded photos and colorizes black and white images." },
                { title: "Face Enhancer", desc: "Improves facial details, clearing blemishes and applying lighting effects." }
              ].map((f, i) => (
                <Card key={i} className="rounded-2xl border-primary/10 hover:border-primary/30 transition-all group">
                  <CardHeader className="p-5">
                    <CardTitle className="text-xl font-black group-hover:text-primary transition-colors flex items-center justify-between">
                      {f.title}
                      <Check className="h-5 w-5 text-emerald-500" />
                    </CardTitle>
                    <CardDescription className="text-base">{f.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h2 className="text-3xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
              <Bot className="text-primary" /> Creative AI Filters
            </h2>
            <div className="grid gap-4">
              {[
                { title: "AI Art Generator", desc: "Transform your photos into various artistic styles instantly." },
                { title: "AI Baby Generator", desc: "Analyzes photos to generate a realistic image of a potential baby.", icon: Baby },
                { title: "Hairstyle Feature", desc: "Experiment with different hairstyles and colors using AI." },
                { title: "Aging & Gender Swap", desc: "Visualize yourself at different ages or as a different gender.", icon: Clock }
              ].map((f, i) => (
                <Card key={i} className="rounded-2xl border-primary/10 hover:border-primary/30 transition-all group">
                  <CardHeader className="p-5">
                    <CardTitle className="text-xl font-black group-hover:text-primary transition-colors flex items-center justify-between">
                      {f.title}
                      <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                    </CardTitle>
                    <CardDescription className="text-base">{f.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        <Card className="rounded-[2.5rem] border-primary/20 bg-primary/5 p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <ShieldCheck className="w-64 h-64" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Exclusive Mod <span className="text-primary italic">Benefits</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "VIP Unlocked", icon: UserCheck },
                { title: "Unlimited Pro Cards", icon: Layers },
                { title: "Ad-Free Workflow", icon: ShieldCheck },
                { title: "No Watermark", icon: Eraser }
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-4 bg-background/50 p-6 rounded-2xl border border-primary/10">
                  <b.icon className="h-8 w-8 text-primary" />
                  <span className="font-black uppercase tracking-tight leading-none">{b.title}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  );
}
