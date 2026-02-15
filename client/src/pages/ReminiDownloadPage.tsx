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
  ChevronRight
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

export default function ReminiDownloadPage() {
  const canonicalUrl = "https://aa-mods.vercel.app/remini-mod/download";
  const [downloadStep, setDownloadStep] = useState<0 | 1>(0);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (downloadStep === 0) {
      e.preventDefault();
      setDownloadStep(1);
      window.open("https://otieu.com/4/10538189", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
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

      <div className="container mx-auto px-4 pt-32 max-w-5xl">
        <div className="text-center mb-14">
          <Badge className="mb-6 px-4 py-1 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-black">
            Official AA Mods Repository
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black mb-4 tracking-tighter uppercase leading-none">
            Download Remini <span className="text-primary italic">Mod</span> APK
          </h1>
          <p className="text-muted-foreground text-xl font-bold flex items-center justify-center gap-2">
            <span className="text-foreground">Version {APP_VERSIONS.reminiMod}</span>
            <span className="opacity-20">•</span>
            <span>{APP_UPDATE_DATES.reminiMod.display}</span>
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <Card className="rounded-[2.5rem] border-primary/20 bg-primary/5 p-8 border-4">
            <CardContent className="p-0 text-center">
              <Button
                asChild
                size="lg"
                className="w-full min-h-28 text-3xl font-black rounded-[2rem] shadow-2xl shadow-primary/30 transition-all hover:scale-[1.02]"
              >
                <a href={APP_DIRECT_DOWNLOAD_LINKS.reminiMod} target="_blank" rel="noopener noreferrer" onClick={handleDownloadClick}>
                  <div className="flex items-center gap-6">
                    <Download className="h-12 w-12" />
                    <div className="text-left leading-none">
                      <span className="block uppercase tracking-tighter">{downloadStep === 0 ? "1. Verify Link" : "2. Start Download"}</span>
                      <span className="text-xs font-bold opacity-60 uppercase tracking-widest mt-2 block">Secure MediaFire Server</span>
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
              <CardTitle className="flex items-center gap-2 uppercase tracking-tight font-black"><History className="h-5 w-5 text-primary" /> Package Info</CardTitle>
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
                  <span className="font-bold">{item.v}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] bg-emerald-500/5 border-emerald-500/20 border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 uppercase tracking-tight font-black text-emerald-500"><ShieldCheck className="h-5 w-5" /> Safety Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 items-start">
                <Smartphone className="h-6 w-6 text-emerald-500 shrink-0" />
                <p className="text-sm">Tested on Pixel 8 & Samsung S24 Series. No crashes reported.</p>
              </div>
              <div className="flex gap-4 items-start">
                <Lock className="h-6 w-6 text-emerald-500 shrink-0" />
                <p className="text-sm">Encrypted server connection ensured for all downloads.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="pb-24">
          <h2 className="text-4xl font-black mb-10 tracking-tighter uppercase text-center">Installation <span className="text-primary italic">Guide</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Step 1", icon: Trash2, title: "Uninstall Original", desc: "Remove any Play Store version to avoid signature conflicts." },
              { t: "Step 2", icon: Settings, title: "Unknown Sources", desc: "Enable 'Allow from this source' in your device settings." },
              { t: "Step 3", icon: Download, title: "Install APK", desc: "Open the downloaded file and tap install to complete." }
            ].map((step, i) => (
              <Card key={i} className="rounded-3xl border-primary/10 bg-muted/30">
                <CardHeader>
                  <Badge className="w-fit mb-2">{step.t}</Badge>
                  <CardTitle className="text-xl font-black uppercase tracking-tight flex items-center gap-2">
                    <step.icon className="h-5 w-5 text-primary" /> {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Card className="rounded-[2.5rem] bg-red-500/5 border-red-500/20 mb-24 p-8">
          <CardHeader className="text-center">
            <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <CardTitle className="text-3xl font-black uppercase tracking-tighter text-red-500">Troubleshooting FAQ</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="space-y-2">
              <h4 className="font-black uppercase tracking-tight text-lg">'App Not Installed' Error?</h4>
              <p className="text-muted-foreground">This is 99% due to an existing official installation. Uninstall the Play Store version first, clear cache, and try again.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-black uppercase tracking-tight text-lg">Server-Sided Features?</h4>
              <p className="text-muted-foreground italic">Note: Some AI processing is done on Remini's servers. Our mod unlocks all local premium UI and cards, but server-side filters may vary.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
