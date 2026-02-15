import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Shield, 
  CheckCircle2, 
  History, 
  AlertTriangle, 
  Settings, 
  Smartphone, 
  Trash2, 
  Lock,
  ChevronRight,
  ShieldCheck,
  Zap
} from "lucide-react";
import { 
  APP_VERSIONS, 
  APP_DIRECT_DOWNLOAD_LINKS, 
  APP_UPDATE_DATES, 
  APP_BASE_VERSIONS 
} from "@/config/appConfig";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import reminiLogo from "@assets/download_1771149808669.png";

export default function ReminiDownloadPage() {
  const canonicalUrl = "https://aa-mods.vercel.app/remini-mod/download";
  const [downloadStep, setDownloadStep] = useState<0 | 1>(0);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (downloadStep === 0) {
      e.preventDefault();
      setDownloadStep(1);
      window.open("https://ahsanali.short.gy/remini-ad-redirect", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#8B0000]/30">
      <Helmet>
        <title>Download Remini Mod APK {APP_VERSIONS.reminiMod} (Premium Unlocked) Safe Guide</title>
        <meta name="description" content="Safely download and install our community-tested Remini Mod APK. 100% working premium features, ad-free experience, and step-by-step installation guide." />
        <meta name="keywords" content="Remini Mod APK download, install Remini Mod APK, safe APK download, modded APK risks, App not installed error, Remini troubleshooting, Android installation guide, community support, AA Mods" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Download & Install Remini Mod APK | AA Mods" />
        <meta property="og:description" content="Official, safe download link for Remini Mod APK with premium features unlocked." />
        <meta property="og:type" content="website" />
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
                "name": "Download",
                "item": canonicalUrl
              }
            ]
          })}
        </script>
      </Helmet>

      <Navigation />

      <div className="container mx-auto px-4 pt-32 max-w-5xl">
        <div className="text-center mb-14">
          <img src={reminiLogo} alt="Remini Logo" className="w-24 h-24 mx-auto mb-8 rounded-3xl shadow-xl border-4 border-[#FF0000]/20" />
          <Badge className="mb-6 px-4 py-1 bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/20 uppercase tracking-widest font-black">
            Official AA Mods Repository
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter uppercase leading-none text-foreground">
            Download Remini <span className="text-[#FF0000] italic">Mod</span> APK
          </h1>
          <p className="text-muted-foreground text-xl font-bold flex items-center justify-center gap-2">
            <span className="text-foreground">Version {APP_VERSIONS.reminiMod}</span>
            <span className="opacity-20">•</span>
            <span>{APP_UPDATE_DATES.reminiMod.display}</span>
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <Card className="rounded-[2.5rem] border-[#FF0000]/20 bg-[#FF0000]/5 p-8 border-4 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <CardContent className="p-0 text-center relative z-10">
              <Button
                asChild
                size="lg"
                className="w-full min-h-[120px] text-3xl md:text-5xl font-black rounded-[2rem] shadow-2xl shadow-[#FF0000]/30 transition-all active:scale-[0.98] bg-[#FF0000] hover:bg-[#8B0000] border-4 border-white/20"
              >
                <a href={APP_DIRECT_DOWNLOAD_LINKS.reminiMod} target="_blank" rel="noopener noreferrer" onClick={handleDownloadClick}>
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <Download className="h-16 w-16 animate-bounce" />
                    <div className="text-left leading-none">
                      <span className="block uppercase tracking-tighter">{downloadStep === 0 ? "1. VERIFY LINK" : "2. START DOWNLOAD"}</span>
                      <span className="text-xs font-black opacity-80 uppercase tracking-[0.3em] mt-3 block italic text-white/90">Premium Cloud Server #1</span>
                    </div>
                  </div>
                </a>
              </Button>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">
                <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-500" /> Virus Scanned</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Community Approved</span>
                <span className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#FF0000]" /> High Speed</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="rounded-[2rem] bg-secondary/20 border-white/5 overflow-hidden">
            <CardHeader className="bg-[#FF0000]/5 border-b border-[#FF0000]/10">
              <CardTitle className="flex items-center gap-2 uppercase tracking-tight font-black text-foreground">
                <History className="h-5 w-5 text-[#FF0000]" /> Package Information
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 p-6">
              {[
                { l: "Base Version", v: APP_BASE_VERSIONS.reminiMod },
                { l: "Mod Version", v: APP_VERSIONS.reminiMod },
                { l: "Architecture", v: "arm64-v8a" },
                { l: "File Size", v: "145 MB" },
                { l: "Requirement", v: "Android 6.0+" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-xl bg-background/40 border border-white/5">
                  <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">{item.l}</span>
                  <span className="font-bold text-foreground text-sm">{item.v}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] bg-emerald-500/5 border-emerald-500/20 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 uppercase tracking-tight font-black text-emerald-500"><ShieldCheck className="h-5 w-5" /> Safety Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-foreground p-6">
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-background/40 border border-emerald-500/10">
                <Smartphone className="h-8 w-8 text-emerald-500 shrink-0" />
                <div>
                  <h4 className="font-black text-sm uppercase tracking-tight mb-1">Device Tested</h4>
                  <p className="text-xs font-medium text-muted-foreground leading-relaxed">Verified on Pixel 8, Samsung S24 Series, and OnePlus 12. 100% stable performance.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-4 rounded-2xl bg-background/40 border border-emerald-500/10">
                <Lock className="h-8 w-8 text-emerald-500 shrink-0" />
                <div>
                  <h4 className="font-black text-sm uppercase tracking-tight mb-1">Encrypted Payload</h4>
                  <p className="text-xs font-medium text-muted-foreground leading-relaxed">Secure server-to-device encrypted connection ensured for all APK transfers.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="pb-24">
          <h2 className="text-4xl font-black mb-10 tracking-tighter uppercase text-center text-foreground">Step-By-Step <span className="text-[#FF0000] italic">Installation</span> Guide</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Step 1", icon: Trash2, title: "Uninstall Original", desc: "You must uninstall any version of Remini from the Play Store. Modded APKs have different signatures and will conflict, causing 'App not installed' errors." },
              { t: "Step 2", icon: Settings, title: "Enable Sources", desc: "Go to Settings > Security and enable 'Install unknown apps' for your browser or file manager. Disable this immediately after installation." },
              { t: "Step 3", icon: Download, title: "Download & Install", desc: "Download the Mod APK from our secure link. Open your file manager, navigate to 'Downloads', tap the APK, and select 'Install'." }
            ].map((step, i) => (
              <Card key={i} className="rounded-3xl border-[#FF0000]/10 bg-muted/30 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#FF0000]/20 group-hover:bg-[#FF0000] transition-colors" />
                <CardHeader>
                  <Badge className="w-fit mb-4 bg-[#FF0000] text-white border-none font-black uppercase tracking-widest text-[10px]">{step.t}</Badge>
                  <CardTitle className="text-xl font-black uppercase tracking-tight flex items-center gap-2 text-foreground">
                    <step.icon className="h-6 w-6 text-[#FF0000]" /> {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm font-medium leading-relaxed">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Card className="rounded-[2.5rem] bg-red-500/5 border-red-500/20 mb-24 p-10 border-2">
          <CardHeader className="text-center">
            <AlertTriangle className="h-16 w-16 text-[#FF0000] mx-auto mb-6 animate-pulse" />
            <CardTitle className="text-4xl font-black uppercase tracking-tighter text-[#FF0000]">Troubleshooting & Support</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-10 mt-6">
            <div className="space-y-4">
              <h4 className="font-black uppercase tracking-tight text-xl text-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000] text-sm">Q</span>
                'App Not Installed'?
              </h4>
              <p className="text-muted-foreground font-medium leading-relaxed">This is almost always due to an existing official installation. You must uninstall the original Remini app completely, clear system cache, and ensure 1GB+ free space before trying again.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-black uppercase tracking-tight text-xl text-foreground flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000] text-sm">Q</span>
                Server-Side Features?
              </h4>
              <p className="text-muted-foreground italic font-medium leading-relaxed">Note: Remini processes some filters on their own servers. Our mod unlocks all premium UI, Pro Cards, and unlimited usage, but specific AI-generation filters may vary based on server availability.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}