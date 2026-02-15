import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, CheckCircle2, History } from "lucide-react";
import { APP_VERSIONS, APP_DIRECT_DOWNLOAD_LINKS, APP_UPDATE_DATES, APP_BASE_VERSIONS } from "@/config/appConfig";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { motion } from "framer-motion";
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
            Official Download Link
          </Badge>
          <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase">
            Download Remini <span className="text-primary italic">Mod</span> APK
          </h1>
          <p className="text-muted-foreground text-lg font-medium">
            Version {APP_VERSIONS.reminiMod} • {APP_UPDATE_DATES.reminiMod.display}
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Card className="rounded-[2rem] border-primary/20 bg-primary/5 p-6">
            <CardContent className="p-0 text-center">
              <Button
                asChild
                size="lg"
                className="w-full min-h-24 text-2xl font-black rounded-[1.7rem] shadow-2xl"
              >
                <a href={APP_DIRECT_DOWNLOAD_LINKS.reminiMod} target="_blank" rel="noopener noreferrer" onClick={handleDownloadClick}>
                  <div className="flex items-center gap-4">
                    <Download className="h-10 w-10" />
                    <div className="text-left">
                      <span className="block">{downloadStep === 0 ? "Step 1: Verify Download" : "Step 2: Start Download"}</span>
                      <span className="text-xs opacity-70">Official AA Mods Package</span>
                    </div>
                  </div>
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        <Card className="rounded-[2rem] bg-secondary/20 mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><History className="h-5 w-5 text-primary" /> Package Details</CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-white/5">
              <p className="text-xs text-muted-foreground uppercase font-bold">Base Version</p>
              <p className="font-bold">{APP_BASE_VERSIONS.reminiMod}</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5">
              <p className="text-xs text-muted-foreground uppercase font-bold">Mod Version</p>
              <p className="font-bold">{APP_VERSIONS.reminiMod}</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5">
              <p className="text-xs text-muted-foreground uppercase font-bold">Safety Status</p>
              <p className="font-bold text-emerald-500 flex items-center gap-1"><Shield className="h-4 w-4" /> 100% Clean</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5">
              <p className="text-xs text-muted-foreground uppercase font-bold">Ads Status</p>
              <p className="font-bold text-emerald-500">Fully Removed</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
}
