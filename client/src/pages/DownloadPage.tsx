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
  Clock,
  HardDrive,
  Info,
  Smartphone,
  Settings,
  ArrowDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { DownloadTunnel } from "@/components/DownloadTunnel";

const versionInfo = {
  version: "V 2.0.26",
  date: "January 24, 2026",
  size: "118 MB",
  android: "5.0+",
  status: "Verified Safe",
  base: "2.25.36.72"
};

export default function DownloadPage() {
  const [, setLocation] = useLocation();

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
        <title>Download AA WhatsApp APK {versionInfo.version} | Official Secure Link</title>
        <meta name="description" content={`Download the latest AA WhatsApp APK ${versionInfo.version}. 100% Secure, Anti-Ban v2.0, and No Invasive Permissions.`} />
      </Helmet>

      <Navigation />

      <main className="relative z-10 pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-8">
          <Button 
            variant="ghost" 
            onClick={() => setLocation("/aa-whatsapp-apk")}
            className="hover:bg-primary/10 gap-2 text-muted-foreground hover:text-primary"
            data-testid="button-back-info"
          >
            <ArrowLeft className="w-4 h-4" /> Back to App Info
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header Section */}
          <section className="text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black tracking-tighter"
            >
              Download <span className="text-primary italic">AAWhatsApp</span>{" "}
              Official
            </motion.h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              You are about to download the world's most secure WhatsApp mod.
              Version {versionInfo.version} with enhanced Anti-Ban protection.
            </p>
          </section>

          {/* Version Info Grid */}
          <section className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 rounded-[2rem] border border-white/5 space-y-6"
            >
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Info className="w-6 h-6 text-primary" />
                Version Information
              </h3>
              <div className="space-y-4">
                {[
                  { label: "App Name", value: "AAWhatsApp APK" },
                  { label: "Version", value: versionInfo.version },
                  { label: "Base Version", value: versionInfo.base },
                  { label: "File Size", value: versionInfo.size },
                  { label: "Developer", value: "AA Mods" },
                  { label: "Last Updated", value: versionInfo.date },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between border-b border-white/5 pb-2"
                  >
                    <span className="text-muted-foreground text-sm font-medium">
                      {item.label}
                    </span>
                    <span className="text-foreground font-bold">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-8 rounded-[2rem] border border-white/5 space-y-6 flex flex-col justify-center text-center"
            >
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Safety Guarantee</h3>
              <p className="text-muted-foreground leading-relaxed">
                This APK has been scanned against 60+ antivirus engines and
                verified as 100% clean. No location trackers, no media
                harvesters.
              </p>
              <div className="flex justify-center gap-3 pt-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">
                  Clean
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                  Anti-Ban
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">
                  v2.0
                </span>
              </div>
            </motion.div>
          </section>

          {/* Main Download Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12 rounded-[3rem] border border-primary/20 bg-primary/5 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <ShieldCheck className="w-4 h-4" />
              Secure Download Mainframe
            </div>

            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">
              Ready to Download?
            </h2>

            <div className="mb-10">
              <DownloadTunnel
                onComplete={() => {
                  window.location.href = "https://www.mediafire.com/file/uuw00r0kdjuns97/AAWhatsApp_V2.0.apk/file";
                }}
              />
            </div>

            <div className="pt-4 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground opacity-60">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" /> Est. Download Time: 10s
              </span>
              <span className="flex items-center gap-1">
                <ArrowDown className="w-4 h-4" /> Verified Direct Link
              </span>
            </div>
          </motion.div>

          <AdPlaceholder format="leaderboard" />

          {/* Installation Guide */}
          <section className="space-y-10">
            <h2 className="text-3xl md:text-5xl font-black text-center tracking-tighter">
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
                  className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 flex gap-6 group"
                >
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      {i + 1}. {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Version Changelog */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Info className="w-8 h-8 text-primary" />
              What's New in {versionInfo.version}
            </h2>
            <div className="grid gap-4">
              {[
                "New Anti-Ban v2.0 script for 2026 security protocols.",
                "Surgically removed 5 more invasive Android permissions.",
                "Enhanced Privacy Core™ encryption layer.",
                "Fixed media download issues on Android 14+.",
                "Improved dark mode contrast for AMOLED screens."
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <AdPlaceholder format="rectangle" />

          {/* Installation Safety */}
          <section className="p-8 rounded-[2.5rem] bg-destructive/5 border border-destructive/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-destructive">
              <ShieldAlert className="w-6 h-6" />
              Safety Verification
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              AAWhatsApp is scanned daily by multiple security engines. Unlike other mods that demand "All Files Access", AAWhatsApp runs on a minimal permission footprint. Your banking apps and private files remain 100% isolated and safe.
            </p>
          </section>

          <div className="text-center pt-10 border-t border-white/5">
            <p className="text-xs text-muted-foreground uppercase tracking-widest opacity-40">
              AA Mods | Build ID: PRO-7729-SEC
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
