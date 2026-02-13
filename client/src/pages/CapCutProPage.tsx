import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  CheckCircle2, 
  Shield, 
  Zap, 
  Sparkles, 
  Video, 
  Crown, 
  Cpu, 
  Layers, 
  Play, 
  Maximize, 
  Settings2,
  Lock,
  Smartphone,
  Check,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { Link } from "wouter";
import { APP_VERSIONS } from "@/config/appConfig";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function CapCutProPage() {
  const canonicalUrl = "https://aa-mods.vercel.app/capcut-pro";
  const mainFeatures = [
    { 
      icon: Sparkles, 
      title: "AI Power Unlocked", 
      description: "AI Background Removal (Chroma Key), Auto Captions, Smart Cut, and AI Text-to-Speech fully functional without network errors.",
      details: ["No Green Screen Required", "100+ AI Voices", "Smart Object Tracking"]
    },
    { 
      icon: Video, 
      title: "Full Asset Library", 
      description: "Access 10,000+ Premium templates, VIP transitions, cinematic filters, and trending audio without any restrictions.",
      details: ["VIP Transitions", "4K Stock Footage", "Exclusive Lottie Files"]
    },
    { 
      icon: Crown, 
      title: "Watermark-Free Pro", 
      description: "Export your projects in stunning 4K 60FPS with HDR support and absolutely no CapCut branding or end screens.",
      details: ["4K 60FPS Support", "HDR Color Space", "Zero Branding"]
    }
  ];

  const HERO_IMAGE_URL = "https://i.postimg.cc/HsPkz8Hy/Gemini-Generated-Image-qb1oceqb1oceqb1o.png";

  const techSpecs = [
    { icon: Smartphone, label: "OS Required", value: "Android 6.0+" },
    { icon: Cpu, label: "Architecture", value: "armeabi-v7a, arm64-v8a" },
    { icon: Settings2, label: "Status", value: "Stable Mod (AA)" },
    { icon: Lock, label: "Security", value: "Verified Safe" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Helmet>
        <title>CapCut Pro MOD APK {APP_VERSIONS.capcutPro} (Official Stable) - All Features Unlocked | AA Mods</title>
        <meta name="description" content={`Download CapCut Pro MOD APK ${APP_VERSIONS.capcutPro} by Ahsan Ali. Fully unlocked AI tools, premium templates, 4K export, no watermark, and no internet error. The best professional video editor.`} />
        <meta name="keywords" content="CapCut Pro MOD APK, download CapCut Pro, CapCut unlocked, CapCut no watermark, CapCut AI features working, best video editor mod, Ahsan Ali mods, AA Mods CapCut" />
        <meta property="og:title" content="CapCut Pro MOD APK - Ultimate Video Editing Suite" />
        <meta property="og:image" content={HERO_IMAGE_URL} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:description" content="CapCut Pro MOD APK by AA Mods with unlocked premium features, AI tools, templates, and no-watermark export." />
        <meta name="twitter:title" content="CapCut Pro MOD APK (Stable, No Watermark) | AA Mods" />
        <meta name="twitter:description" content="Fully unlocked CapCut Pro MOD APK by AA Mods with working AI tools and smooth 4K exports." />
        <meta name="twitter:image" content={HERO_IMAGE_URL} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="preconnect" href="https://i.postimg.cc" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.postimg.cc" />
        <link rel="preload" as="image" href={HERO_IMAGE_URL} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-4 py-1 text-primary border-primary/50 bg-primary/10 font-black uppercase tracking-widest">
              Developed by Ahsan Ali (AA Mods)
            </Badge>
            <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none uppercase">
              CapCut <span className="text-primary italic">Pro</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
              Experience the world's most stable, fully unlocked CapCut Mod. No internet errors, no broken AI—just pure professional power.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={HERO_IMAGE_URL}>
                <Button size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                  <Download className="mr-3 h-6 w-6" /> Download Latest Stable
                </Button>
              </Link>
              <Link href="/capcut-pro/features">
                <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl text-lg font-bold border-primary/20 hover:bg-primary/5">
                   Explore Full Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Feature Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase">
              Why <span className="text-primary italic">AA Mods</span> Edition?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Most CapCut mods fail because they break AI features or show "Network Error" on templates. Ahsan Ali's CapCut Pro is engineered differently to ensure every single button works.
            </p>
            <div className="space-y-4">
              {[
                "Fully Offline-Capable Editing",
                "Server-Safe Template Loading",
                "No Forced Login or Verification",
                "Regional Restrictions Fully Bypassed"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full -z-10" />
            <img 
              src={HERO_IMAGE_URL} 
              alt="CapCut Pro Interface" 
              className="rounded-[2.5rem] shadow-2xl border border-primary/20 scale-105"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="1200"
              height="800"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-20 tracking-tight uppercase">
            Premium <span className="text-primary italic">Command</span> Suite
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mainFeatures.map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2.5rem] bg-background border border-border hover:border-primary/40 transition-all hover-elevate h-full flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase">{feature.title}</h3>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed font-medium">{feature.description}</p>
                <div className="space-y-3">
                  {feature.details.map((detail, j) => (
                    <div key={j} className="flex items-center gap-3 text-sm font-bold text-foreground/70">
                      <Check className="h-4 w-4 text-primary" />
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Specs Table */}
      <section className="py-24 container mx-auto px-4 max-w-4xl">
        <Card className="rounded-[3rem] border-white/5 bg-primary/5 overflow-hidden">
          <CardHeader className="text-center pb-8 border-b border-white/5">
            <CardTitle className="text-3xl font-black uppercase tracking-widest italic">Core Integration Status</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {techSpecs.map((spec, i) => (
                <div key={i} className="p-8 text-center space-y-3">
                  <spec.icon className="h-8 w-8 mx-auto text-primary opacity-60" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-1">{spec.label}</p>
                    <p className="text-lg font-black font-mono">{spec.value}</p>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-[10px] font-bold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> ACTIVE
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="py-8 container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6">
            <h3 className="text-xl font-black mb-2 flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /> Trusted Stable Build</h3>
            <p className="text-sm text-muted-foreground mb-4">Cleaned resources, smooth template loading, and reliable AI workflow designed for real creators.</p>
            <Link href="/capcut-pro/features" className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">See full features <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="rounded-3xl border border-border bg-secondary/30 p-6">
            <h3 className="text-xl font-black mb-2">Ready to install now?</h3>
            <p className="text-sm text-muted-foreground mb-4">Use the one-button 2-step secure download flow on the official CapCut download page.</p>
            <Link href="/capcut-pro/download" className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline">Open download page <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 text-center container mx-auto px-4">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Ready to <span className="text-primary italic">Create?</span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">
            Join thousands of professional creators using AA Mods CapCut Pro to dominate social media. No limits. No watermark. No excuses.
          </p>
          <Link href="/capcut-pro/download">
            <Button size="lg" className="h-20 px-16 rounded-[2rem] text-2xl font-black shadow-2xl shadow-primary/30 hover:scale-105 transition-transform uppercase tracking-widest">
              <Download className="mr-4 h-8 w-8" /> Deploy Now
            </Button>
          </Link>
          <p className="text-[10px] uppercase font-black tracking-widest opacity-40">AA Mods by Ahsan Ali • 2026 Stable Protocol</p>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
