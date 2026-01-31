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
  Lock as LockIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { AdDownloadButton } from "@/components/AdDownloadButton";
import { useState, useEffect } from "react";

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
        <title>
          Download AA Business WhatsApp APK V1.0 (2026 Official) – Best WhatsApp
          Business Mod
        </title>
        <meta
          name="description"
          content="Official Download for AA Business WhatsApp V1.0. Enterprise-grade security, Bulk Broadcasting, and Anti-Ban protection. Secure your business chats now with the best WhatsApp Business mod."
        />
        <meta
          name="keywords"
          content="AA Business WhatsApp, Download AA Business WhatsApp, WhatsApp Business Mod, Secure WA Business APK, Anti-Ban Business WhatsApp, AA Mods Business, Best WhatsApp Business Mod 2026, WhatsApp Business Mod Anti-Ban, Secure Enterprise WhatsApp, Permission Clean WhatsApp Business"
        />
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
          <AdPlaceholder format="leaderboard" />

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
              <AdDownloadButton
                downloadUrl="https://www.mediafire.com/file/k1gea5lsn04vkad/AA+Business+WhatsApp+V1.0.apk/file"
                className="w-full max-w-md h-auto py-6 rounded-2xl bg-amber-500 hover:bg-amber-600 text-black font-black text-2xl shadow-xl shadow-amber-500/20"
              >
                <Download className="w-8 h-8 mr-3" />
                Deploy AA Business v1.0
              </AdDownloadButton>
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

            <div className="glass-card p-8 rounded-[2rem] border border-white/5 flex flex-col items-center text-center justify-center">
              <div className="w-20 h-20 bg-amber-500/10 rounded-3xl flex items-center justify-center mb-6">
                <Shield className="w-12 h-12 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Commercial Grade Safety
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Specifically hardened for high-activity business accounts.
                Verified 100% clean and safe for corporate use.
              </p>
            </div>
          </section>

          <AdPlaceholder format="leaderboard" />

          <section className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-black text-center tracking-tighter">
              Business Setup Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {installSteps.map((step, i) => (
                <div
                  key={i}
                  className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 flex gap-6 group hover:border-amber-500/20 transition-colors"
                >
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:bg-amber-500/20 transition-colors">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-white">
                      <span className="text-amber-500">{i + 1}.</span>{" "}
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
