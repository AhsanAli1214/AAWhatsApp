import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
  Search,
  HelpCircle,
  ChevronRight,
  ShieldCheck
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
        <title>Download & Install Remini Mod APK (Safe Guide & Troubleshooting)</title>
        <meta name="description" content="Learn how to safely download and install our community-tested Remini Mod APK. Step-by-step guide, risks, and detailed troubleshooting." />
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
          <Card className="rounded-[2.5rem] border-[#FF0000]/20 bg-[#FF0000]/5 p-8 border-4">
            <CardContent className="p-0 text-center">
              <Button
                asChild
                size="lg"
                className="w-full min-h-28 text-3xl font-black rounded-[2rem] shadow-2xl shadow-[#FF0000]/30 transition-all hover:scale-[1.02] bg-[#FF0000] hover:bg-[#8B0000]"
              >
                <a href={APP_DIRECT_DOWNLOAD_LINKS.reminiMod} target="_blank" rel="noopener noreferrer" onClick={handleDownloadClick}>
                  <div className="flex items-center gap-6">
                    <Download className="h-12 w-12" />
                    <div className="text-left leading-none">
                      <span className="block uppercase tracking-tighter">{downloadStep === 0 ? "1. Verify Link" : "2. Start Download"}</span>
                      <span className="text-xs font-bold opacity-60 uppercase tracking-widest mt-2 block italic text-white/80">Premium Server #1</span>
                    </div>
                  </div>
                </a>
              </Button>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                <span className="flex items-center gap-1"><Shield className="h-4 w-4 text-emerald-500" /> Virus Scanned</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-emerald-500" /> Community Approved</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="rounded-[2rem] bg-secondary/20 border-white/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 uppercase tracking-tight font-black text-foreground"><History className="h-5 w-5 text-[#FF0000]" /> Package Info</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3">
              {[
                { l: "Base Version", v: APP_BASE_VERSIONS.reminiMod },
                { l: "Mod Version", v: APP_VERSIONS.reminiMod },
                { l: "Architecture", v: "arm64-v8a" },
                { l: "Requirement", v: "Android 6.0+" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-background/40">
                  <span className="text-xs text-muted-foreground uppercase font-black">{item.l}</span>
                  <span className="font-bold text-foreground">{item.v}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] bg-emerald-500/5 border-emerald-500/20 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 uppercase tracking-tight font-black text-emerald-500"><ShieldCheck className="h-5 w-5" /> Safety Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground">
              <div className="flex gap-4 items-start">
                <Smartphone className="h-6 w-6 text-emerald-500 shrink-0" />
                <p className="text-sm font-medium">Tested on Pixel 8 & Samsung S24 Series. No crashes reported.</p>
              </div>
              <div className="flex gap-4 items-start">
                <Lock className="h-6 w-6 text-emerald-500 shrink-0" />
                <p className="text-sm font-medium">Encrypted server connection ensured for all downloads.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="pb-24">
          <h2 className="text-4xl font-black mb-10 tracking-tighter uppercase text-center text-foreground">Installation <span className="text-[#FF0000] italic">Guide</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Step 1", icon: Trash2, title: "Uninstall Original", desc: "Remove any Play Store version to avoid signature conflicts." },
              { t: "Step 2", icon: Settings, title: "Unknown Sources", desc: "Enable 'Allow from this source' in your device settings." },
              { t: "Step 3", icon: Download, title: "Install APK", desc: "Open the downloaded file and tap install to complete." }
            ].map((step, i) => (
              <Card key={i} className="rounded-3xl border-[#FF0000]/10 bg-muted/30">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-[#FF0000] text-white border-none">{step.t}</Badge>
                  <CardTitle className="text-xl font-black uppercase tracking-tight flex items-center gap-2 text-foreground">
                    <step.icon className="h-5 w-5 text-[#FF0000]" /> {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm font-medium">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Card className="rounded-[2.5rem] bg-red-500/5 border-red-500/20 mb-24 p-8 border-2">
          <CardHeader className="text-center">
            <AlertTriangle className="h-12 w-12 text-[#FF0000] mx-auto mb-4" />
            <CardTitle className="text-3xl font-black uppercase tracking-tighter text-[#FF0000]">Troubleshooting FAQ</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="space-y-2">
              <h4 className="font-black uppercase tracking-tight text-lg text-foreground">'App Not Installed' Error?</h4>
              <p className="text-muted-foreground font-medium">This is 99% due to an existing official installation. Uninstall the Play Store version first, clear cache, and try again.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-black uppercase tracking-tight text-lg text-foreground">Server-Sided Features?</h4>
              <p className="text-muted-foreground italic font-medium">Note: Some AI processing is done on Remini's servers. Our mod unlocks all local premium UI and cards, but server-side filters may vary.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
