import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { 
  Download, 
  ShieldCheck, 
  Zap, 
  Settings, 
  Info, 
  CheckCircle2, 
  FileText, 
  Smartphone,
  ShieldAlert,
  Clock,
  ArrowDown
} from "lucide-react";
import { DownloadTunnel } from "@/components/DownloadTunnel";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { useTranslation } from "@/hooks/useTranslation";

export default function DownloadPage() {
  const { t } = useTranslation();

  const installSteps = [
    {
      title: "Download APK",
      desc: "Click the secure download button below to start fetching the AAWhatsApp APK file.",
      icon: Download
    },
    {
      title: "Enable Unknown Sources",
      desc: "Go to Settings > Security > Unknown Sources and toggle it ON to allow mod installation.",
      icon: Settings
    },
    {
      title: "Install Package",
      desc: "Locate the downloaded file in your 'Downloads' folder and tap it to begin installation.",
      icon: Smartphone
    },
    {
      title: "Verify & Enjoy",
      desc: "Open the app, verify your phone number via SMS, and start using the secure mods.",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Helmet>
        <title>Download AAWhatsApp APK v2.0 (Official) - Anti-Ban 2026</title>
        <meta name="description" content="Official AAWhatsApp APK Download Page. Get the latest v2.0 version with Anti-Ban features, zero invasive permissions, and high-speed secure download." />
      </Helmet>

      <Navigation />

      <main className="pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Header Section */}
          <section className="text-center space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black tracking-tighter"
            >
              Download <span className="text-primary italic">AAWhatsApp</span> Official
            </motion.h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              You are about to download the world's most secure WhatsApp mod. 
              Version 2.0.26 with enhanced Anti-Ban protection.
            </p>
          </section>

          {/* Version Info Card */}
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
                  { label: "Version", value: "v2.0.26 (Official)" },
                  { label: "Base Version", value: "2.25.x.x" },
                  { label: "File Size", value: "68 MB" },
                  { label: "Developer", value: "AA Mods" },
                  { label: "Last Updated", value: "Jan 2026" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-white/5 pb-2">
                    <span className="text-muted-foreground text-sm font-medium">{item.label}</span>
                    <span className="text-foreground font-bold">{item.value}</span>
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
                This APK has been scanned against 60+ antivirus engines and verified as 100% clean. 
                No location trackers, no media harvesters.
              </p>
              <div className="flex justify-center gap-3 pt-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest border border-emerald-500/20">Clean</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">Anti-Ban</span>
                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-black uppercase tracking-widest border border-blue-500/20">v2.0</span>
              </div>
            </motion.div>
          </section>

          {/* Main Download Section */}
          <section className="glass-card p-10 md:p-16 rounded-[3rem] border border-primary/20 text-center space-y-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 opacity-50 -z-10" />
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black">Ready to Start?</h2>
              <p className="text-muted-foreground">The download link is synchronized with your device security protocol.</p>
            </div>
            
            <DownloadTunnel onComplete={() => {
              window.location.href = "https://www.mediafire.com/file/o6r60v20v6r60v2/AAWhatsApp_v2.0_Secure.apk/file";
            }} />
            
            <div className="pt-4 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground opacity-60">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Est. Download Time: 10s</span>
              <span className="flex items-center gap-1"><ArrowDown className="w-4 h-4" /> Verified Direct Link</span>
            </div>

            {/* Additional Ad Unit */}
            <div className="pt-8">
              <AdPlaceholder format="rectangle" className="my-0" />
            </div>
          </section>

          <AdPlaceholder format="leaderboard" />

          {/* Installation Guide */}
          <section className="space-y-10">
            <h2 className="text-3xl md:text-5xl font-black text-center tracking-tighter">Installation Guide</h2>
            <div className="mb-10">
              <AdPlaceholder format="leaderboard" />
            </div>
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
                    <h3 className="font-bold text-xl mb-2">{i + 1}. {step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <div className="max-w-[320px] mx-auto my-12">
            <AdPlaceholder format="mobile" />
          </div>

          {/* Why AAWhatsApp */}
          <section className="bg-primary/5 rounded-[3rem] p-10 md:p-16 space-y-8 border border-primary/10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Why Choose AAWhatsApp Over Others?</h2>
            <div className="mb-8">
              <AdPlaceholder format="leaderboard" />
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  While mods like GBWhatsApp are feature-rich, they often compromise user privacy by demanding access to location and media storage. AAWhatsApp is the first "Permission-Clean" alternative.
                </p>
                <ul className="space-y-3">
                  {[
                    "Zero invasive location tracking",
                    "No 'All Files Access' required",
                    "Optimized for 2026 Anti-Ban servers",
                    "Clean, minimalist UI with premium mods"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="p-8 bg-background/40 backdrop-blur-xl border border-destructive/20 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-destructive font-bold text-xs uppercase tracking-widest">
                    <ShieldAlert className="w-4 h-4" /> Security Alert
                  </div>
                  <p className="text-sm italic opacity-80">
                    "Other mods have been reported to harvest user bank data via broad storage permissions. AAWhatsApp surgically removes this risk."
                  </p>
                </div>
              </div>
            </div>
          </section>

          <AdPlaceholder format="rectangle" />
        </div>
      </main>
    </div>
  );
}
