import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles,
  ShieldCheck,
  Zap,
  Bot,
  Baby,
  Clock,
  UserCheck,
  Layers,
  Eraser,
  Image as ImageIcon,
  Scan,
  Palette,
  Eye,
  Trash2,
  ShieldAlert,
  Scissors
} from "lucide-react";
import { Helmet } from "react-helmet";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import reminiLogo from "@assets/download_1771149808669.png";

export default function ReminiFeaturesPage() {
  const canonicalUrl = "https://aa-mods.vercel.app/remini-mod/features";
  const HERO_IMAGE_URL = "https://i.postimg.cc/W4hMbDm9/image-1771089734969956.png";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#8B0000]/30">
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

      <Navigation />

      <section className="pt-32 pb-12 container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          <img src={reminiLogo} alt="Remini Logo" className="w-20 h-20 mx-auto mb-6 rounded-2xl shadow-lg border-2 border-[#FF0000]/20" />
          <Badge className="mb-5 bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/20 uppercase tracking-widest font-black px-4 py-1">
            Verified & Tested Features
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase leading-none">
            In-Depth <span className="text-[#FF0000] italic">Features</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
            Remini Mod APK is packed with a diverse set of tools leveraging the power of artificial intelligence to restore and creatively transform your media.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl pb-24">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight flex items-center gap-3">
              <ImageIcon className="text-[#FF0000]" /> Core Restoration Tools
            </h2>
            <div className="grid gap-6">
              {[
                { title: "Photo & Video Restoration", desc: "Flagship feature that repairs old, pixelated, or damaged media by upscaling and adding pixels.", icon: Scan },
                { title: "Unblur & Sharpen", desc: "Intelligently removes motion blur and sharpens details for high-definition clarity.", icon: Eye },
                { title: "Auto Color & Colorize", desc: "Revives faded colors and can colorize historic black and white images automatically.", icon: Palette },
                { title: "Denoising", desc: "Effectively removes grain and noise from old photos for a smoother professional look.", icon: Layers },
                { title: "Face Enhancer", desc: "Portrait mode focus that clears blemishes, enhances details, and applies studio lighting.", icon: UserCheck },
                { title: "Object Removal", desc: "Advanced tools to modify, remove, or replace backgrounds and unwanted objects.", icon: Trash2 }
              ].map((f, i) => (
                <Card key={i} className="rounded-2xl border-[#FF0000]/10 hover:border-[#FF0000]/40 transition-all group border-2">
                  <CardHeader className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl font-black group-hover:text-[#FF0000] transition-colors leading-tight">
                        {f.title}
                      </CardTitle>
                      <f.icon className="h-6 w-6 text-[#FF0000]/40 group-hover:text-[#FF0000] transition-colors" />
                    </div>
                    <CardDescription className="text-muted-foreground font-medium">{f.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black mb-8 uppercase tracking-tight flex items-center gap-3">
              <Bot className="text-[#FF0000]" /> Creative AI Playground
            </h2>
            <div className="grid gap-6">
              {[
                { title: "AI Art Generator", desc: "Transform photos into stylized avatars or various artistic styles instantly.", icon: Sparkles },
                { title: "AI Baby Generator", desc: "Viral feature that analyzes photos to generate realistic potential baby images.", icon: Baby },
                { title: "Hairstyle Feature", desc: "Experiment with different hairstyles and colors using AI salon filters.", icon: Scissors },
                { title: "Aging Video Feature", desc: "High-resolution time-lapse or static image of how you might age.", icon: Clock },
                { title: "Wedding & Pregnant Filters", desc: "Visualize yourself in a wedding look or with a baby bump fun filters.", icon: Sparkles },
                { title: "Gender Swap", desc: "Alter facial structure and hairstyle to see a different side of yourself.", icon: Bot }
              ].map((f, i) => (
                <Card key={i} className="rounded-2xl border-[#FF0000]/10 hover:border-[#FF0000]/40 transition-all group border-2">
                  <CardHeader className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl font-black group-hover:text-[#FF0000] transition-colors leading-tight">
                        {f.title}
                      </CardTitle>
                      <f.icon className="h-6 w-6 text-[#FF0000]/40 group-hover:text-[#FF0000] transition-colors" />
                    </div>
                    <CardDescription className="text-muted-foreground font-medium">{f.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>

        <Card className="rounded-[3rem] border-[#FF0000]/20 bg-[#FF0000]/5 p-10 md:p-16 overflow-hidden relative border-4">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <ShieldCheck className="w-80 h-80 text-[#FF0000]" />
          </div>
          <div className="relative z-10">
            <Badge className="mb-6 bg-[#FF0000] text-white px-4 py-1 uppercase font-black">Premium Unlocked</Badge>
            <h2 className="text-5xl md:text-6xl font-black mb-10 uppercase tracking-tighter leading-none">Exclusive Mod <span className="text-[#FF0000] italic">Benefits</span></h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "VIP Unlocked", icon: UserCheck, desc: "All pro features free" },
                { title: "Unlimited Cards", icon: Layers, desc: "No daily processing limits" },
                { title: "Ad-Free", icon: ShieldCheck, desc: "Zero interruptions" },
                { title: "No Watermark", icon: Eraser, desc: "Clean HD exports" }
              ].map((b, i) => (
                <div key={i} className="flex flex-col gap-4 bg-background/80 backdrop-blur-sm p-8 rounded-3xl border border-[#FF0000]/10 shadow-xl">
                  <b.icon className="h-10 w-10 text-[#FF0000]" />
                  <div>
                    <span className="block font-black uppercase tracking-tight text-xl mb-1 leading-none">{b.title}</span>
                    <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{b.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 rounded-2xl bg-background/40 border border-[#FF0000]/20">
              <p className="text-sm font-bold text-muted-foreground flex items-center gap-2">
                <ShieldAlert className="h-4 w-4 text-[#FF0000]" />
                <span className="uppercase tracking-widest">Transparency Promise:</span>
                Some premium features are server-sided. We aim for 100% functionality but server processing may vary.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <Footer />
    </div>
  );
}