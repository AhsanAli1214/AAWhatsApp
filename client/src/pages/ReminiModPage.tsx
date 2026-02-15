import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  CheckCircle2, 
  Shield, 
  Zap, 
  Sparkles, 
  Image as ImageIcon, 
  History,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import { APP_VERSIONS, APP_UPDATE_DATES } from "@/config/appConfig";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ReminiModPage() {
  const canonicalUrl = "https://aa-mods.vercel.app/remini-mod";
  const HERO_IMAGE_URL = "https://i.postimg.cc/W4hMbDm9/image-1771089734969956.png";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <title>Remini Mod APK {APP_VERSIONS.reminiMod} Download (100% Working, Premium Unlocked)</title>
        <meta name="description" content={`Download the latest Remini Mod APK ${APP_VERSIONS.reminiMod}. Our secure, virus-scanned mod transforms old photos into HD masterpieces with all premium features unlocked, no ads, and no watermarks.`} />
        <meta name="keywords" content="Remini Mod APK, Remini Pro APK, Remini Mod APK download, safe Remini mod, 100% working mod, AI photo enhancer, video enhancement, premium unlocked, free photo editor, unblur photos, photo restoration, Remini Mod APK latest version, AA Mods" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Remini Mod APK v[Latest Version] Download (100% Working, Premium Unlocked) | AA Mods" />
        <meta property="og:description" content="Download the latest, community-tested Remini Mod APK for free. Secure, virus-scanned mod with all premium features unlocked." />
        <meta property="og:image" content={HERO_IMAGE_URL} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Remini Mod APK - Ultimate AI Photo Enhancer | AA Mods" />
        <meta name="twitter:description" content="Transform old photos into HD masterpieces with all premium features unlocked." />
        <meta name="twitter:image" content={HERO_IMAGE_URL} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Remini Mod APK",
            "applicationCategory": "MultimediaApplication",
            "operatingSystem": "Android",
            "softwareVersion": APP_VERSIONS.reminiMod,
            "offers": { 
              "@type": "Offer", 
              "price": "0", 
              "priceCurrency": "USD" 
            },
            "author": {
              "@type": "Person",
              "name": "Ahsan Ali"
            }
          })}
        </script>
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
                "item": canonicalUrl
              }
            ]
          })}
        </script>
      </Helmet>

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-1 text-primary border-primary/50 bg-primary/10 font-black uppercase tracking-widest">
              Verified by AA Mods
            </Badge>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none uppercase">
              Remini <span className="text-primary italic">Mod</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Transform your blurry, old photos into stunning HD masterpieces with the world's most powerful AI enhancer.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/remini-mod/download">
                <Button size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold">
                  <Download className="mr-3 h-6 w-6" /> Download Remini Mod
                </Button>
              </Link>
              <Link href="/remini-mod/features">
                <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold">
                   Explore All Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase">
              Unlock Your <span className="text-primary italic">Memories</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Tired of blurry or pixelated photos? Remini Mod APK uses advanced AI to restore every detail, making your old memories look brand new.
            </p>
            <div className="space-y-4">
              {["Premium/VIP Unlocked", "Unlimited Pro Cards", "No Ads & No Watermarks", "100% Working Build"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <img src={HERO_IMAGE_URL} alt="Remini Mod Interface" className="rounded-[2.5rem] shadow-2xl border border-primary/20" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
