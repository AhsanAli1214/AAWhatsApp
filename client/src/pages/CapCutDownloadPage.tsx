import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Zap, AlertTriangle, CheckCircle2, Lock, Cpu, History } from "lucide-react";
import { APP_VERSIONS, APP_DIRECT_DOWNLOAD_LINKS, APP_MIRROR_DOWNLOAD_LINKS, APP_UPDATE_DATES, APP_BASE_VERSIONS } from "@/config/appConfig";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CapCutDownloadPage() {
  const [downloadReady, setDownloadReady] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setDownloadReady(true);
    }
  }, [countdown]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 pb-32">
      <Helmet>
        <title>Download CapCut Pro MOD APK {APP_VERSIONS.capcutPro} | AA Mods</title>
        <meta name="description" content={`Official download page for CapCut Pro MOD APK ${APP_VERSIONS.capcutPro}. Secure, fast servers, no watermarks, and all premium features unlocked by Ahsan Ali.`} />
      </Helmet>

      <div className="container mx-auto px-4 pt-32 max-w-4xl">
        <div className="text-center mb-16">
          <Badge className="mb-6 px-4 py-1 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-black">
            Secure Download Gateway
          </Badge>
          <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter uppercase">
            CapCut <span className="text-primary italic">Pro</span> {APP_VERSIONS.capcutPro}
          </h1>
          <p className="text-muted-foreground text-lg font-medium">Released: {APP_UPDATE_DATES.capcutPro.display}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Download Card */}
          <div className="lg:col-span-2 space-y-6">
            {!downloadReady ? (
              <Card className="rounded-[2.5rem] border-white/5 bg-primary/5 py-20 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan" />
                <CardContent>
                  <div className="relative inline-block mb-8">
                    <Zap className="h-20 w-20 text-primary animate-pulse" />
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                  </div>
                  <h3 className="text-2xl font-black mb-2 uppercase italic tracking-widest">Protocol Initializing</h3>
                  <p className="text-muted-foreground font-medium mb-6">Bypassing security checks and preparing secure servers...</p>
                  <div className="text-5xl font-black text-primary font-mono">{countdown}s</div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                  <a href={APP_DIRECT_DOWNLOAD_LINKS.capcutPro} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full h-24 text-2xl font-black rounded-[2rem] shadow-2xl shadow-primary/30 group">
                      <div className="flex items-center justify-between w-full px-4">
                        <div className="flex items-center gap-4">
                          <Download className="h-10 w-10 group-hover:bounce" />
                          <div className="text-left">
                            <span className="block">Deploy Server 1</span>
                            <span className="text-xs font-bold uppercase tracking-widest opacity-60">High-Speed CDN</span>
                          </div>
                        </div>
                        <Badge className="bg-white/20 text-white font-black">FAST</Badge>
                      </div>
                    </Button>
                  </a>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <a href={APP_MIRROR_DOWNLOAD_LINKS.capcutPro} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="w-full h-20 text-xl font-black rounded-[1.5rem] border-primary/20 hover:bg-primary/5">
                      <Download className="mr-3 h-6 w-6" /> Cloud Mirror (Server 2)
                    </Button>
                  </a>
                </motion.div>
              </div>
            )}

            {/* Version Info Table */}
            <Card className="rounded-[2rem] border-white/5 bg-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg font-black uppercase tracking-widest italic">
                  <History className="h-5 w-5 text-primary" /> Package Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">App Name</span>
                  <span className="font-black">CapCut Pro MOD</span>
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
          </div>

          {/* Side Panels */}
          <div className="space-y-6">
            <Card className="rounded-[2rem] border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base font-black uppercase tracking-widest">
                  <Shield className="h-5 w-5 text-primary" /> Safety Core
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "VirusTotal Scanned (Clean)",
                  "No Suspicious Permissions",
                  "Security Notice Removed",
                  "Play Protect Friendly"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="rounded-[2rem] border-white/5 bg-secondary/20 p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-black uppercase tracking-widest text-sm mb-2">Optimized Build</h4>
              <p className="text-xs text-muted-foreground font-medium">Resources cleaned and compressed for ultra-fast loading on both low and high-end devices.</p>
            </Card>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed font-medium">
            Important: Ensure "Install from Unknown Sources" is enabled in your Android settings before launching the APK. This is a modified version for educational and creative purposes.
          </p>
          <div className="h-px w-20 bg-primary/20 mx-auto" />
          <p className="text-[10px] uppercase font-black tracking-[0.2em] opacity-30">
            AA Mods by Ahsan Ali Wadani • Official Stable Release
          </p>
        </div>
      </div>
    </div>
  );
}
