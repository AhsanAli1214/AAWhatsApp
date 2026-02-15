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
  ArrowRight,
  ShieldAlert,
  Users,
  Star
} from "lucide-react";
import { Link } from "wouter";
import { APP_VERSIONS, APP_UPDATE_DATES } from "@/config/appConfig";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

import { Navigation } from "@/components/Navigation";
import reminiLogo from "@assets/download_1771149808669.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function ReminiModPage() {
  const canonicalUrl = "https://aa-mods.vercel.app/remini-mod";
  const HERO_IMAGE_URL = "https://i.postimg.cc/W4hMbDm9/image-1771089734969956.png";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#8B0000]/30">
      <Helmet>
        <title>Remini Mod APK {APP_VERSIONS.reminiMod} Download (100% Working, Premium Unlocked)</title>
        <meta name="description" content={`Download the latest, community-tested Remini Mod APK for free. Our secure, virus-scanned mod transforms old photos into HD masterpieces with all premium features unlocked, no ads, and no watermarks.`} />
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

      <Navigation />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="w-32 h-32 mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FF0000]/20">
              <img src={reminiLogo} alt="Remini Mod Logo" className="w-full h-full object-cover" />
            </div>
            <Badge variant="outline" className="mb-6 px-4 py-1 text-[#FF0000] border-[#FF0000]/50 bg-[#FF0000]/10 font-black uppercase tracking-widest">
              AA Mods Verified
            </Badge>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none uppercase">
              Remini <span className="text-[#FF0000] italic">Mod</span> APK
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-medium">
              Unlock Your Memories with the 100% Working Remini Mod APK. Transform old, blurry photos into HD masterpieces.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/remini-mod/download">
                <Button size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold shadow-xl shadow-[#FF0000]/20 bg-[#FF0000] hover:bg-[#8B0000]">
                  <Download className="mr-3 h-6 w-6" /> Download Remini Mod
                </Button>
              </Link>
              <Link href="/remini-mod/features">
                <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold backdrop-blur-sm border-[#FF0000]/30 hover:bg-[#FF0000]/10">
                   Explore All Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Badge className="mb-4 bg-[#FF0000]/20 text-[#FF0000] border-none">Our Commitment</Badge>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase leading-none">
                Why Choose <span className="text-[#FF0000] italic">AA Mods</span>?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#FF0000]/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-6 w-6 text-[#FF0000]" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-1 uppercase tracking-tight">Safety First</h3>
                    <p className="text-muted-foreground">Our files are scanned with multiple top-tier antivirus engines before being listed. We are the safest source.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#FF0000]/10 flex items-center justify-center shrink-0">
                    <Zap className="h-6 w-6 text-[#FF0000]" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-1 uppercase tracking-tight">100% Working</h3>
                    <p className="text-muted-foreground">Tested by us and our community to ensure features like unlimited Pro Cards function as advertised.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-12 w-12 rounded-xl bg-[#FF0000]/10 flex items-center justify-center shrink-0">
                    <Users className="h-6 w-6 text-[#FF0000]" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl mb-1 uppercase tracking-tight">Community Driven</h3>
                    <p className="text-muted-foreground">Join a community that values quality and trust. Get real-time updates and active support.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="absolute -inset-4 bg-[#FF0000]/20 blur-3xl rounded-full opacity-50 -z-10" />
              <img src={HERO_IMAGE_URL} alt="Remini Mod AI Enhancement" className="rounded-[2.5rem] shadow-2xl border border-[#FF0000]/20 relative" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tight uppercase text-[#FF0000]">Key Benefits</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Premium/VIP Unlocked", desc: "Access all pro tools and unlimited enhancements without any cost.", icon: Star },
            { title: "No Ads, No Watermarks", desc: "Enjoy a seamless experience and export creations without branding.", icon: Shield },
            { title: "Advanced AI Tech", desc: "Utilize sophisticated artificial intelligence to detect and fix imperfections.", icon: Sparkles }
          ].map((benefit, i) => (
            <Card key={i} className="rounded-3xl border-[#FF0000]/10 bg-muted/50 hover:bg-muted transition-colors border-2">
              <CardHeader className="items-center pb-2">
                <benefit.icon className="h-12 w-12 text-[#FF0000] mb-4" />
                <CardTitle className="font-black text-2xl uppercase tracking-tight">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
