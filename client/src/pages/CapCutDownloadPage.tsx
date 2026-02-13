import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, CheckCircle2, Cpu, History, ArrowRight, Sparkles } from "lucide-react";
import { APP_VERSIONS, APP_DIRECT_DOWNLOAD_LINKS, APP_UPDATE_DATES, APP_BASE_VERSIONS } from "@/config/appConfig";
import { Helmet } from "react-helmet";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

export default function CapCutDownloadPage() {
  const canonicalUrl = "https://aa-mods.vercel.app/capcut-pro/download";
  const [downloadStep, setDownloadStep] = useState<0 | 1>(0);

  const ctaLabel = useMemo(
    () =>
      downloadStep === 0
        ? "Step 1: Unlock Download"
        : `Step 2: Download CapCut Pro MOD ${APP_VERSIONS.capcutPro}`,
    [downloadStep],
  );

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (downloadStep === 0) {
      e.preventDefault();
      setDownloadStep(1);
      window.open("https://otieu.com/4/10538189", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 pb-32">
      <Helmet>
        <title>Download CapCut Pro MOD APK {APP_VERSIONS.capcutPro} | AA Mods</title>
        <meta
          name="description"
          content={`Official download page for CapCut Pro MOD APK ${APP_VERSIONS.capcutPro}. One secure button, 2-step unlock flow, no watermark export, and all premium features enabled.`}
        />
        <meta
          name="keywords"
          content="download capcut pro mod apk, capcut mod aa mods, capcut no watermark download, capcut ai tools working"
        />
        <meta property="og:title" content="Download CapCut Pro MOD APK | AA Mods" />
        <meta
          property="og:description"
          content="Secure one-button, 2-step download page for CapCut Pro MOD APK with stable optimized package."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://i.postimg.cc/HsPkz8Hy/Gemini-Generated-Image-qb1oceqb1oceqb1o.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Download CapCut Pro MOD APK | AA Mods" />
        <meta
          name="twitter:description"
          content="Fast and secure CapCut Pro MOD APK download with unlocked premium features and 2-step protection flow."
        />
        <meta name="twitter:image" content="https://i.postimg.cc/HsPkz8Hy/Gemini-Generated-Image-qb1oceqb1oceqb1o.png" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="container mx-auto px-4 pt-32 max-w-5xl">
        <div className="text-center mb-14">
          <Badge className="mb-6 px-4 py-1 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-black">
            Official CapCut Pro Download Gateway
          </Badge>
          <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase">
            Download CapCut <span className="text-primary italic">Pro</span> MOD APK
          </h1>
          <p className="text-muted-foreground text-lg font-medium">
            Latest stable by AA Mods • Updated: {APP_UPDATE_DATES.capcutPro.display}
          </p>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <Card className="rounded-[2rem] border-primary/20 bg-primary/5 p-4 md:p-6">
            <CardContent className="p-0">
              <div className="flex flex-col gap-4">
                <div className="text-center">
                  <h2 className="text-xl md:text-2xl font-black mb-1">Single Download Button • 2-Step Security Flow</h2>
                  <p className="text-sm text-muted-foreground">
                    Click once to unlock. Click again to start the official APK download.
                  </p>
                </div>

                <Button
                  asChild
                  size="lg"
                  className={`w-full min-h-24 md:min-h-28 text-base md:text-2xl font-black rounded-[1.7rem] shadow-2xl transition-all duration-300 px-3 md:px-4 py-4 ${downloadStep === 0 ? "shadow-primary/30" : "shadow-emerald-500/30 ring-2 ring-emerald-400/40"}`}
                >
                  <a
                    href={APP_DIRECT_DOWNLOAD_LINKS.capcutPro}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleDownloadClick}
                    className="w-full"
                  >
                    <div className="w-full flex items-center justify-between gap-2 md:gap-3">
                      <div className="flex items-center gap-2 md:gap-4 text-left min-w-0">
                        <Download className={`h-6 w-6 md:h-10 md:w-10 shrink-0 ${downloadStep === 1 ? "animate-bounce" : ""}`} />
                        <div className="min-w-0">
                          <span className="block leading-tight break-words">{ctaLabel}</span>
                          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.16em] opacity-75 leading-tight">
                            {downloadStep === 0 ? "Verification required" : "Official AA Mods package"}
                          </span>
                        </div>
                      </div>
                      <Badge className="bg-white/20 text-white font-black px-2.5 py-1 shrink-0">
                        {downloadStep === 0 ? "1/2" : "2/2"}
                      </Badge>
                    </div>
                  </a>
                </Button>

                <div className="text-center text-xs text-muted-foreground font-medium">
                  {downloadStep === 0
                    ? "First click opens verification tab. Return and click again for direct APK download."
                    : "Verified. Click the button now to start direct APK download."}
                </div>

                <div className="text-center text-xs text-muted-foreground/80 font-medium">
                  No login required • No VPN required • No root required
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <Card className="rounded-[2rem] border-white/5 bg-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-black uppercase tracking-widest italic">
                  <History className="h-5 w-5 text-primary" /> Package Intelligence
                </CardTitle>
                <CardDescription>
                  Verified release details for the current stable CapCut Pro MOD package.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">App Name</span>
                  <span className="font-black">CapCut Pro MOD APK</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Version</span>
                  <span className="font-mono font-bold">{APP_VERSIONS.capcutPro}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Base Version</span>
                  <span className="font-mono font-bold">{APP_BASE_VERSIONS.capcutPro}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Architecture</span>
                  <span className="font-mono font-bold">arm64-v8a, v7a</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Root Required</span>
                  <Badge variant="outline" className="text-emerald-500 border-emerald-500/30">NO</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-border/60 bg-background/60">
              <CardHeader>
                <CardTitle className="text-xl font-black">Quick Install Steps</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  "Download CapCut Pro MOD APK by AA Mods",
                  "Enable Install from Unknown Sources",
                  "Install APK file and open the app",
                  "Start editing with premium features unlocked",
                ].map((step, i) => (
                  <div key={step} className="rounded-xl border border-border/50 p-3 bg-secondary/30">
                    <span className="font-black text-primary mr-2">{i + 1}.</span>
                    {step}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="rounded-[2rem] border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-black uppercase tracking-widest">
                  <Shield className="h-5 w-5 text-primary" /> Safety Core
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Security notice removed",
                  "No suspicious permissions",
                  "No forced login required",
                  "Optimized for low/high-end devices",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/5 bg-secondary/20 p-7 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-black uppercase tracking-widest text-sm mb-2">Optimized Build</h4>
              <p className="text-xs text-muted-foreground font-medium">
                Cleaned resources and tuned performance for faster loading and smoother editing sessions.
              </p>
            </Card>

            <Card className="rounded-[2rem] border-primary/20 bg-primary/5 p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-black text-sm mb-1">Need full details before downloading?</h4>
                  <Link href="/capcut-pro/features" className="text-sm font-bold text-primary hover:underline inline-flex items-center gap-1">
                    Open Features & About <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed font-medium">
            Important: This is a modified application for educational and personal use. Always download from AA Mods official pages to avoid fake files.
          </p>
          <div className="h-px w-20 bg-primary/20 mx-auto" />
          <p className="text-[10px] uppercase font-black tracking-[0.2em] opacity-30">
            AA Mods by Ahsan Ali • Official Stable Release
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
