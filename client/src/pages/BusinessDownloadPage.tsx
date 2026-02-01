import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import {
  Download,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowLeft,
  Smartphone,
  Settings,
  Package,
  Star,
  Users,
  Shield,
  Sparkles,
  Send,
  Lock as LockIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Footer } from "@/components/Footer";

const versionInfo = {
  version: "V 1.0",
  date: "January 31, 2026",
  size: "125 MB",
  android: "5.0+",
  status: "Verified Safe",
  base: "2.25.29.77",
  packageName: "com.aa.business",
  developer: "AA Mods Official",
};

const stats = [
  { label: "Business Installs", value: "50K+", icon: Download },
  { label: "Enterprise Users", value: "20K+", icon: Users },
  { label: "Trust Rating", value: "4.9/5", icon: Star },
  { label: "Uptime", value: "99.9%", icon: Zap },
];

export default function BusinessDownloadPage() {
  const [, setLocation] = useLocation();
  const [downloadCount, setDownloadCount] = useState(54281);

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount((prev) => prev + Math.floor(Math.random() * 2) + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const installSteps = [
    {
      title: "Download Business APK",
      desc: "Click the secure download button to fetch the AA Business WhatsApp package.",
      icon: Download,
    },
    {
      title: "Enable Unknown Sources",
      desc: "Allow installation from unknown sources in your device security settings.",
      icon: Settings,
    },
    {
      title: "Restore or Setup",
      desc: "Use our migration tool to move your business chats or setup a new account.",
      icon: Smartphone,
    },
    {
      title: "Scale Your Business",
      desc: "Start using bulk broadcasting and automated tools securely.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-amber-500/30">
      <Helmet>
        <title>Download AA Business WhatsApp V1.0 APK (Official) – Secure Anti-Ban 2026</title>
        <meta name="description" content="Official AA Business WhatsApp V1.0 (Base 2.25.29.77). Enterprise-grade security, Bulk Broadcasting, and Smart Analytics. The safest choice for business messaging." />
        <meta name="keywords" content="AA Business WhatsApp, Download AA Business, Business WhatsApp Mod, Secure WA Business, Anti-Ban Business WhatsApp, Enterprise WhatsApp APK, AA Mods Business" />
        <link rel="canonical" href="https://aa-mods.vercel.app/aa-business-whatsapp/download" />
      </Helmet>

      <Navigation />

      <main className="relative z-10 pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-8">
          <Button
            variant="ghost"
            onClick={() => setLocation("/aa-business-whatsapp")}
            className="hover:bg-amber-500/10 gap-2 text-muted-foreground hover:text-amber-500"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Business Info
          </Button>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          <section className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-bold"
            >
              <Sparkles className="w-4 h-4" />
              Business Deployment Page
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black tracking-tighter"
            >
              Download{" "}
              <span className="text-amber-500 italic">AA Business</span>
              <br />
              <span className="text-2xl md:text-4xl text-muted-foreground font-medium">
                Version {versionInfo.version} | Stable Release
              </span>
            </motion.h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Secure your enterprise communication with the world's most stable
              Business mod.
              <span className="text-amber-500 font-bold">
                {" "}
                {downloadCount.toLocaleString()}+ businesses
              </span>{" "}
              deployed.
            </p>
          </section>

          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-6 rounded-2xl border border-white/5 text-center"
              >
                <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </section>

          <section className="glass-card p-8 md:p-12 rounded-[3rem] border border-amber-500/20 bg-amber-500/5 relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />
            <ShieldCheck className="w-32 h-32 text-amber-500 mx-auto mb-8 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]" />

            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-white">
              Secure Enterprise Deployment
            </h2>
            <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
              Deployment package verified and scanned. Secure your trade secrets
              with AA Business.
            </p>

            <div className="flex flex-col items-center gap-6 mb-12">
              <Button
                onClick={() => window.open("https://ahsanali.short.gy/aa-wa-pro", "_blank")}
                className="w-full max-w-md h-auto py-6 rounded-2xl bg-amber-500 hover:bg-amber-600 text-black font-black text-2xl shadow-xl shadow-amber-500/20"
              >
                <Download className="w-8 h-8 mr-3" />
                Deploy AA Business v1.0
              </Button>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">
                100% Secure Enterprise Mirror
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm font-bold">
              <div className="flex items-center justify-center gap-2 text-amber-500">
                <ShieldCheck className="w-5 h-5" /> Anti-Ban Shield
              </div>
              <div className="flex items-center justify-center gap-2 text-amber-500">
                <LockIcon className="w-5 h-5" /> Privacy Core™
              </div>
              <div className="flex items-center justify-center gap-2 text-amber-500">
                <Zap className="w-5 h-5" /> CRM Tools
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-[2rem] border border-white/5 space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2 text-white">
                <Package className="w-6 h-6 text-amber-500" />
                Enterprise Package
              </h3>
              <div className="space-y-4">
                {[
                  { label: "App Name", value: "AA Business WhatsApp" },
                  { label: "Version", value: versionInfo.version },
                  { label: "Base Version", value: versionInfo.base },
                  { label: "File Size", value: versionInfo.size },
                  { label: "Package Name", value: versionInfo.packageName },
                  { label: "Security", value: "512-bit AES" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-white/5 pb-3"
                  >
                    <span className="text-muted-foreground text-sm">
                      {item.label}
                    </span>
                    <span className="text-foreground font-bold text-sm text-white">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-amber-500">
              <Shield className="w-6 h-6" />
              Business Safety Information
            </h2>
            

            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Specifically hardened for high-activity business accounts.
                Verified 100% clean and safe for corporate use.
              </p>
            </div>
          </section>

          <section className="text-center space-y-6 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
            <h3 className="text-xl font-bold text-white">
              Need an Alternative Download Link?
            </h3>
            <p className="text-muted-foreground">
              If the main download isn't working, try our backup servers or join
              our Telegram for direct links.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://ahsanali.short.gy/aa-wa-pro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="gap-2 border-amber-500/30 hover:bg-amber-500/10 text-white"
                >
                  <Download className="w-4 h-4" />
                  MediaFire Mirror
                </Button>
              </a>
              <a
                href="https://t.me/AA_ModsOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="gap-2 border-amber-500/30 hover:bg-amber-500/10 text-white"
                >
                  <Send className="w-4 h-4" />
                  Telegram Channel
                </Button>
              </a>
            </div>
          </section>

          <div className="text-center pt-10 border-t border-white/5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest opacity-40">
              AA Mods | Version {versionInfo.version} | Build ID: BIZ-2026-SEC
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
