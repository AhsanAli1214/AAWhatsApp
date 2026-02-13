import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Shield, Zap, AlertTriangle, CheckCircle2 } from "lucide-react";
import { APP_VERSIONS, APP_DIRECT_DOWNLOAD_LINKS, APP_MIRROR_DOWNLOAD_LINKS } from "@/config/appConfig";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";

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
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>Download CapCut Pro MOD APK v13.0.0 | AA Mods</title>
        <meta name="description" content="Securely download CapCut Pro MOD APK by Ahsan Ali. Fast, stable, and fully unlocked video editing for Android." />
      </Helmet>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Download CapCut Pro</h1>
          <p className="text-muted-foreground">Version {APP_VERSIONS.capcutPro} Stable</p>
        </div>

        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Shield className="h-6 w-6 text-primary" />
              <CardTitle>Security Verified</CardTitle>
            </div>
            <CardDescription>
              This APK has been manually tested and verified by Ahsan Ali. No security warnings, no malware.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <div className="space-y-3">
               <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                 <CheckCircle2 className="h-4 w-4" /> VirusTotal Clean
               </div>
               <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                 <CheckCircle2 className="h-4 w-4" /> Play Protect Compatible
               </div>
               <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                 <CheckCircle2 className="h-4 w-4" /> Security Notice Removed
               </div>
             </div>
          </CardContent>
        </Card>

        {!downloadReady ? (
          <Card className="text-center py-12">
            <CardContent>
              <Zap className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
              <p className="text-lg font-medium mb-2">Preparing your secure download...</p>
              <p className="text-3xl font-bold text-primary">{countdown}s</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            <a href={APP_DIRECT_DOWNLOAD_LINKS.capcutPro} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full h-16 text-lg">
                <Download className="mr-2 h-6 w-6" /> Download From Server 1 (Fast)
              </Button>
            </a>
            <a href={APP_MIRROR_DOWNLOAD_LINKS.capcutPro} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full h-16 text-lg border-primary/20">
                <Download className="mr-2 h-6 w-6" /> Download From Server 2 (Mirror)
              </Button>
            </a>
          </div>
        )}

        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>By downloading, you agree to use this mod for educational purposes.</p>
          <p>Developer: Ahsan Ali (AA Mods)</p>
        </div>
      </div>
    </div>
  );
}
