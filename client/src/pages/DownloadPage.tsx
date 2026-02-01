import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import {
  Download,
  ShieldCheck,
  Zap,
  ShieldAlert,
  CheckCircle2,
  ArrowLeft,
  Smartphone,
  Settings,
  Package,
  Star,
  Users,
  Shield,
  Sparkles,
  History,
  ExternalLink,
  Lock as LockIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";

const versionInfo = {
  version: "V 2.0",
  date: "January 27, 2026",
  size: "118 MB",
  android: "5.0+",
  status: "Verified Safe",
  base: "2.25.36.73",
  packageName: "com.gbwhatsapp",
  developer: "AA Mods Official",
};

const changelog = [
  {
    version: "V 2.0",
    date: "January 27, 2026",
    base: "2.25.36.73",
    isLatest: true,
    changes: [
      "New Anti-Ban v1.0 script for 2026 security protocols",
      "Surgically removed 5 more invasive Android permissions",
      "Enhanced Privacy Core technology",
      "Fixed media download issues on Android 14+",
      "Improved dark mode contrast for AMOLED screens",
      "Updated base to WhatsApp 2.25.36.73",
    ],
  },
  {
    version: "V 1.9",
    date: "December 15, 2025",
    base: "2.24.25.87",
    isLatest: false,
    changes: [
      "Privacy Dashboard with real-time monitoring",
      "Ghost Mode v2 with scheduled invisibility",
      "40% faster app startup performance",
      "New theme engine with 500+ themes",
      "Bug fixes for message scheduling",
    ],
  },
  {
    version: "V 1.8",
    date: "November 20, 2025",
    base: "2.24.20.76",
    isLatest: false,
    changes: [
      "Anti-Ban v1.5 improvements",
      "View deleted messages feature",
      "Custom fonts support",
      "Status downloader enhancement",
      "Memory optimization",
    ],
  },
];

const stats = [
  { label: "Total Downloads", value: "10M+", icon: Download },
  { label: "Active Users", value: "5M+", icon: Users },
  { label: "User Rating", value: "4.9/5", icon: Star },
  { label: "Uptime", value: "99.9%", icon: Zap },
];

export default function DownloadPage() {
  const [, setLocation] = useLocation();
  const [downloadCount, setDownloadCount] = useState(10247853);

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const installSteps = [
    {
      title: "Download APK",
      desc: "Click the secure download button below to start fetching the AAWhatsApp APK file.",
      icon: Download,
    },
    {
      title: "Enable Unknown Sources",
      desc: "Go to Settings > Security > Unknown Sources and toggle it ON to allow mod installation.",
      icon: Settings,
    },
    {
      title: "Install Package",
      desc: "Locate the downloaded file in your 'Downloads' folder and tap it to begin installation.",
      icon: Smartphone,
    },
    {
      title: "Verify & Enjoy",
      desc: "Open the app, verify your phone number via SMS, and start using the secure mods.",
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Helmet>
        <title>Download AAWhatsApp V2.0 APK (2026) – Official Secure Anti-Ban Link</title>
        <meta name="description" content="Direct download for AAWhatsApp V2.0. Featuring Anti-Ban v2.0, Privacy Core™ protection, and 100% security verification. The definitive WhatsApp mod choice for 2026." />
        <meta name="keywords" content="AA WhatsApp download, AAWhatsApp APK, AA WhatsApp V2.0, download AA WhatsApp, secure WhatsApp mod, anti-ban apk 2026, best whatsapp mod, AAWhatsApp V2.0 Download" />
        <link rel="canonical" href="https://aa-mods.vercel.app/download" />
        <meta property="og:title" content="Download AAWhatsApp V2.0 - Official Secure Link" />
        <meta property="og:description" content="Get the latest AAWhatsApp V2.0 with enhanced Anti-Ban and Privacy Core™ technology. 100% safe and verified." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "DownloadPage",
              "name": "AAWhatsApp Download",
              "description": "Official download page for AAWhatsApp V2.0 APK",
              "mainEntity": {
                "@type": "SoftwareApplication",
                "name": "AAWhatsApp",
                "softwareVersion": "2.0",
                "fileSize": "118MB",
                "operatingSystem": "Android"
              }
            }
          `}
        </script>
      </Helmet>

      <Navigation />

      <main className="relative z-10 pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto mb-8">
          <Button
            variant="ghost"
            onClick={() => setLocation("/aa-whatsapp")}
            className="hover:bg-primary/10 gap-2 text-muted-foreground hover:text-primary"
            data-testid="button-back-info"
          >
            <ArrowLeft className="w-4 h-4" /> Back to App Info
          </Button>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          <section className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold"
            >
              <Sparkles className="w-4 h-4" />
              Official Download Page
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[1] mb-8"
            >
              Download <span className="text-primary italic">AAWhatsApp</span>
              <br />
              <span className="text-2xl md:text-4xl text-muted-foreground font-medium">
                Version {versionInfo.version} | Base {versionInfo.base}
              </span>
            </motion.h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The world's most secure WhatsApp mod with Anti-Ban v1.0
              protection.
              <span className="text-primary font-bold">
                {" "}
                {downloadCount.toLocaleString()}+ downloads
              </span>{" "}
              and counting.
            </p>
          </section>

          {/* Live Stats */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/5 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-black text-white">{stat.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </section>

          {/* Main Download Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12 rounded-[3rem] border border-primary/20 bg-primary/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                <ShieldCheck className="w-4 h-4" />
                Secure Download Mainframe
              </div>

              <div className="mb-8 flex justify-center">
                <ShieldCheck className="w-32 h-32 text-primary drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
              </div>

              <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter">
                Ready to Download?
              </h2>

              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Click below to start your secure download. File verified and
                scanned by 60+ antivirus engines.
              </p>

              <div className="mb-10 w-full flex justify-center px-2">
                <a
                  href="https://www.mediafire.com/file/uuw00r0kdjuns97/AAWhatsApp_V2.0.apk/file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-md h-auto py-5 md:py-6 px-4 md:px-8 rounded-2xl bg-primary text-primary-foreground font-black text-lg md:text-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:-translate-y-1 active:scale-95 transition-all duration-500 uppercase tracking-tight flex items-center justify-center gap-2 md:gap-3 border border-white/20 text-center leading-tight overflow-hidden"
                >
                  <Download className="w-6 h-6" />
                  Download Now
                </a>
              </div>

              <div className="mb-12 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-center gap-8 text-sm font-bold">
                <div className="flex items-center gap-2 text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                  Anti-Ban v1.0
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <LockIcon className="w-5 h-5" />
                  Privacy Core™
                </div>
                <div className="flex items-center gap-2 text-amber-400">
                  <Zap className="w-5 h-5" />
                  No-Permission Tech
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                  <Package className="w-4 h-4" /> 118 MB
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                  <Smartphone className="w-4 h-4" /> Android{" "}
                  {versionInfo.android}
                </span>
                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5">
                  <Star className="w-4 h-4" /> {versionInfo.date}
                </span>
              </div>
            </div>
          </motion.section>

          {/* Version Info Cards */}
          <section className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 rounded-[2rem] border border-white/5 space-y-6"
            >
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Package className="w-6 h-6 text-primary" />
                Package Details
              </h3>
              <div className="space-y-4">
                {[
                  { label: "App Name", value: "AAWhatsApp APK" },
                  { label: "Version", value: versionInfo.version },
                  { label: "Base Version", value: versionInfo.base },
                  { label: "File Size", value: versionInfo.size },
                  { label: "Package Name", value: versionInfo.packageName },
                  { label: "Developer", value: versionInfo.developer },
                  { label: "Min Android", value: versionInfo.android },
                  { label: "Last Updated", value: versionInfo.date },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center border-b border-white/5 pb-3"
                  >
                    <span className="text-muted-foreground text-sm">
                      {item.label}
                    </span>
                    <span className="text-foreground font-bold text-sm">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 rounded-[2rem] border border-white/5 space-y-6 flex flex-col"
            >
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center">
                Safety Guarantee
              </h3>
              <p className="text-muted-foreground text-center leading-relaxed flex-1">
                This APK has been scanned against 60+ antivirus engines and
                verified as 100% clean. No location trackers, no media
                harvesters, no hidden malware.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20">
                  Virus-Free
                </span>
                <span className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                  Anti-Ban v1.0
                </span>
                <span className="px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold border border-blue-500/20">
                  Privacy Core
                </span>
                <span className="px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold border border-amber-500/20">
                  Verified
                </span>
              </div>
            </motion.div>
          </section>

          {/* Version History */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-black flex items-center gap-3">
              <History className="w-8 h-8 text-primary" />
              Version History
            </h2>
            <div className="space-y-6">
              {changelog.map((release, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl border ${release.isLatest ? "border-primary/30 bg-primary/5" : "border-white/5 bg-white/[0.02]"}`}
                >
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-xl font-black">{release.version}</h3>
                    {release.isLatest && (
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        LATEST
                      </span>
                    )}
                    <span className="text-sm text-muted-foreground">
                      {release.date} | Base: {release.base}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {release.changes.map((change, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Installation Guide */}
          <section className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-black text-center tracking-tighter">
              Installation Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {installSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 flex gap-6 group hover:border-primary/20 transition-colors"
                >
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      <span className="text-primary">{i + 1}.</span>{" "}
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Safety Section */}
          <section className="p-8 rounded-[2.5rem] bg-destructive/5 border border-destructive/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-destructive">
              <ShieldAlert className="w-6 h-6" />
              Important Safety Information
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                AAWhatsApp is scanned daily by multiple security engines. Unlike
                other mods that demand "All Files Access", AAWhatsApp runs on a
                minimal permission footprint. Your banking apps and private
                files remain 100% isolated and safe.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="text-xs px-3 py-1.5 rounded-full bg-background/50 border border-white/10">
                  No Location Access
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-background/50 border border-white/10">
                  No Media Harvesting
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-background/50 border border-white/10">
                  No Background Tracking
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-background/50 border border-white/10">
                  No Hidden Malware
                </span>
              </div>
            </div>
          </section>

          {/* Alternative Download */}
          <section className="text-center space-y-6 p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
            <h3 className="text-xl font-bold">
              Need an Alternative Download Link?
            </h3>
            <p className="text-muted-foreground">
              If the main download isn't working, try our backup servers or join
              our Telegram for direct links.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.mediafire.com/file/uuw00r0kdjuns97/AAWhatsApp_V2.0.apk/file"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="gap-2"
                  data-testid="button-mediafire-download"
                >
                  <ExternalLink className="w-4 h-4" />
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
                  className="gap-2"
                  data-testid="button-telegram-link"
                >
                  <ExternalLink className="w-4 h-4" />
                  Telegram Channel
                </Button>
              </a>
            </div>
          </section>

          <div className="text-center pt-10 border-t border-white/5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest opacity-40">
              AA Mods | Version {versionInfo.version} | Base {versionInfo.base}{" "}
              | Build ID: PRO-2026-SEC
            </p>
          </div>
        </div>
      </main>

      <footer className="py-12 border-t border-border/50 relative z-10 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.png"
                alt="AA Mods"
                className="w-16 h-16 object-contain"
              />
              <span className="text-xl font-bold font-display tracking-tight text-foreground/80">
                AA Mods
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/support"
                className="hover:text-primary transition-colors"
              >
                Support
              </Link>
              <Link
                href="/blog"
                className="hover:text-primary transition-colors"
              >
                Blog
              </Link>
            </div>
            <div className="text-sm text-muted-foreground font-mono">
              © 2026 AA Mods. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
