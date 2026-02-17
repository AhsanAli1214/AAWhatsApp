import { Helmet } from "react-helmet";
import { YOUTUBE_PREMIUM_CONFIG } from "@/config/appConfig";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  Download,
  Smartphone,
  UserCircle2,
  AlertTriangle,
  CheckCircle2,
  Wrench,
} from "lucide-react";

const faqItems = [
  {
    q: "Is YouTube Premium MOD APK safe to use?",
    a: "Yes, when downloaded from our official website. The app is prepared using a patch-based process with privacy and stability optimizations, then signed with an independent certificate.",
  },
  {
    q: "Do I need to pick arm64-v8a or armeabi-v7a?",
    a: "No. This release is provided as one universal APK, so you only need to install a single YouTube Premium MOD package.",
  },
  {
    q: "Do I need root access?",
    a: "No. This installation flow is for non-root devices.",
  },
  {
    q: "How do I update?",
    a: "Download the latest universal APK from this website and install it over your current version.",
  },
  {
    q: "Login is stuck or failing. What should I do?",
    a: "Clear AA Mods Services cache/storage, disable VPN or custom DNS, reboot, then reinstall AA Mods Services first and YouTube Premium MOD second.",
  },
];

export default function YouTubePremiumInstallPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>How to Install YouTube Premium MOD APK & FAQ | Safe & Easy Guide</title>
        <meta
          name="description"
          content="A step-by-step guide on how to install YouTube Premium MOD APK correctly. Install AA Mods Services first, then install the universal YouTube MOD APK."
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/youtube-premium-mod/install" />
      </Helmet>

      <main className="pt-20 md:pt-24 pb-28 lg:pb-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl space-y-8">
          <section className="space-y-4 text-center">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/30 uppercase tracking-[0.12em] font-bold">
              YouTube Installation Guide
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">Installation Guide & Frequently Asked Questions</h1>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Follow these steps exactly for the best result. You must install AA Mods Services first, then install YouTube Premium MOD APK.
            </p>
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm font-semibold text-red-300 max-w-4xl mx-auto">
              <AlertTriangle className="w-4 h-4 inline mr-2" />
              Important: AA Mods Services is mandatory and must be installed first. Without it, login and account sync can fail.
            </div>
          </section>

          <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: ShieldCheck, label: "Security", value: "Verified Build" },
              { icon: Smartphone, label: "Package", value: "Universal APK" },
              { icon: Download, label: "Flow", value: "2-Step Install" },
              { icon: UserCircle2, label: "Login", value: "AA Mods Services" },
            ].map((item) => (
              <Card key={item.label} className="border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent">
                <CardContent className="p-4 text-center">
                  <item.icon className="w-5 h-5 mx-auto mb-2 text-red-400" />
                  <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground font-bold">{item.label}</p>
                  <p className="text-sm font-extrabold mt-1">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="space-y-4">
            <Card className="border-red-500/25">
              <CardHeader><CardTitle>Step 1: Enable Unknown Sources</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Open Android Settings, find Install unknown apps, select your browser/file manager, and allow installation from that source.</p>
              </CardContent>
            </Card>

            <Card className="border-red-500/25">
              <CardHeader><CardTitle>Step 2: Download & Install AA Mods Services (Required First)</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>AA Mods Services provides compatibility for Google sign-in on the MOD app.</p>
                <p>Install this first before installing YouTube Premium MOD.</p>
                <a href={YOUTUBE_PREMIUM_CONFIG.aaModsServicesDownloadLink} target="_blank" rel="noopener noreferrer">
                  <Button className="mt-2 bg-gradient-to-r from-red-500 via-rose-500 to-orange-400 text-white font-extrabold shadow-lg shadow-red-500/40 hover:opacity-95">
                    DOWNLOAD AA MODS SERVICES APK (STEP 1)
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="border-red-500/25">
              <CardHeader><CardTitle>Step 3: Download & Install YouTube Premium MOD (Universal APK)</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>This build is a universal APK. There are no separate CPU variants for this release.</p>
                <p>After AA Mods Services is installed, install this YouTube package normally.</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <a href={YOUTUBE_PREMIUM_CONFIG.youtubeApkDownloadLink} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-gradient-to-r from-red-500 via-rose-500 to-orange-400 text-white font-extrabold shadow-lg shadow-red-500/30 hover:opacity-95">
                      DOWNLOAD YOUTUBE PREMIUM MOD APK (STEP 2)
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-500/25">
              <CardHeader><CardTitle>Step 4: Sign In (Optional)</CardTitle></CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>Open YouTube Premium MOD APK, tap profile, choose Sign in, and complete authentication through AA Mods Services.</p>
              </CardContent>
            </Card>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Quick Install Order Checklist</h2>
            {[
              "Install AA Mods Services first.",
              "Install the single universal YouTube Premium MOD APK.",
              "Open app and sign in through AA Mods Services.",
            ].map((item) => (
              <p key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </p>
            ))}
          </section>

          <section id="youtube-faq" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold">FAQ & Troubleshooting</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <Card key={item.q} className="border-red-500/20">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-red-400" />
                      Q: {item.q}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">A: {item.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
