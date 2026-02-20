import { Helmet } from "react-helmet";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DirectDownloadButton } from "@/components/DirectDownloadButton";
import { APP_UPDATE_DATES, APP_VERSIONS, YOUTUBE_MUSIC_CONFIG } from "@/config/appConfig";
import { SECURE_DOWNLOAD_ASSETS } from "@shared/downloadAssets";
import {
  Download,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Cpu,
  Smartphone,
  Wrench,
  UserCircle2,
} from "lucide-react";

const faqItems = [
  { q: "Is YouTube Music Premium MOD APK safe?", a: "Yes, when downloaded from our official website and verified links." },
  { q: "Do I need root access?", a: "No. This guide is fully non-root." },
  { q: "Do I need separate 32-bit and 64-bit APKs?", a: "No. This release is a single universal APK that works on both 32-bit and 64-bit devices." },
  { q: "Login stuck on Checking info?", a: "Disable VPN/custom DNS, clear AA Mods Services storage/cache, reboot, and reinstall AA Mods Services first." },
  { q: "How do I update?", a: "Download the latest universal APK here and install it over the current version." },
];

export default function YouTubeMusicInstallPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>How to Install YouTube Music Premium MOD APK & FAQ | Safe Guide</title>
        <meta
          name="description"
          content="Step-by-step installation guide for YouTube Music Premium MOD APK with AA Mods Services. Universal APK supports both 32-bit and 64-bit Android devices."
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/youtube-music-mod/install" />
      </Helmet>

      <main className="pt-20 md:pt-24 pb-28 lg:pb-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl space-y-8">
          <section className="text-center space-y-4">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/30 uppercase tracking-[0.12em] font-bold">Install Guide + FAQ</Badge>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">Safe Installation Guide (Universal APK)</h1>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Install order is simple: enable unknown sources, install AA Mods Services first, then install one universal YouTube Music MOD APK that supports both 32-bit and 64-bit devices.
            </p>
            <p className="text-sm text-muted-foreground">
              Latest: <span className="font-bold text-red-300">{APP_VERSIONS.youtubeMusic}</span> • Updated: {APP_UPDATE_DATES.youtubeMusic.display}
            </p>
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm font-semibold text-red-300 max-w-4xl mx-auto">
              <AlertTriangle className="w-4 h-4 inline mr-2" />
              Important: AA Mods Services is required for sign-in. Install it first to avoid login conflicts.
            </div>
          </section>

          <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: ShieldCheck, label: "Security", value: "Verified Build" },
              { icon: Cpu, label: "Architecture", value: "Universal APK" },
              { icon: Smartphone, label: "Compatibility", value: "32-bit + 64-bit" },
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
              <CardContent className="text-sm text-muted-foreground leading-relaxed">
                Android Settings → Security/Apps → Install unknown apps → allow installation for your browser or file manager.
              </CardContent>
            </Card>

            <Card className="border-red-500/25">
              <CardHeader><CardTitle>Step 2: Install AA Mods Services (Required First)</CardTitle></CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>AA Mods Services provides stable sign-in compatibility for this MOD app.</p>
                <a
                  href={YOUTUBE_MUSIC_CONFIG.aaModsServicesDownloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-download-btn [--download-glow:#ef4444] [--download-border:#fca5a5] [--download-text:#ffffff] inline-flex w-full max-w-3xl min-h-[62px] md:min-h-[82px] items-center justify-between gap-3 md:gap-4 px-4 md:px-6 py-2.5 md:py-3"
                >
                  <div className="text-left">
                    <p className="font-bold leading-tight">Download AA Mods Services APK</p>
                    <p className="text-[11px] uppercase tracking-[0.12em] opacity-80">Required package • Step 1</p>
                  </div>
                  <Badge className="bg-white/20 text-white font-black px-2.5 py-1 shrink-0">Direct</Badge>
                </a>
              </CardContent>
            </Card>

            <Card className="border-red-500/25">
              <CardHeader><CardTitle>Step 3: Install YouTube Music MOD (Single Universal APK)</CardTitle></CardHeader>
              <CardContent className="space-y-4 text-sm text-muted-foreground">
                <p>No separate arm64/armeabi selection is needed for this release.</p>
                <DirectDownloadButton
                  asset={SECURE_DOWNLOAD_ASSETS.youtubeMusicMain}
                  buttonClassName="neon-download-btn [--download-glow:#ef4444] [--download-border:#fca5a5] [--download-text:#ffffff] w-full max-w-3xl min-h-[62px] md:min-h-[82px] px-4 md:px-6 py-2.5 md:py-3"
                  ariaLabel="Download YouTube Music MOD APK"
                >
                  <div className="w-full flex items-center justify-between gap-3 md:gap-4">
                    <div className="text-left">
                      <p className="font-bold leading-tight">Download YouTube Music MOD {APP_VERSIONS.youtubeMusic}</p>
                      <p className="text-[11px] uppercase tracking-[0.12em] opacity-80">Universal APK • Step 2</p>
                    </div>
                    <Badge className="bg-white/20 text-white font-black px-2.5 py-1 shrink-0">Direct</Badge>
                  </div>
                </DirectDownloadButton>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-red-400" /> 32-bit supported</span>
                  <span className="opacity-50">•</span>
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-red-400" /> 64-bit supported</span>
                  <span className="opacity-50">•</span>
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-red-400" /> No root required</span>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="grid md:grid-cols-3 gap-3">
            {[
              { t: "Audio Quality", d: "High-quality streaming and offline playback options unlocked for richer sound." },
              { t: "No Root Needed", d: "Install directly on standard Android devices without any system modifications." },
              { t: "Smooth Daily Use", d: "Optimized flow with ad-free playback, background play, and unlimited skips." },
            ].map((item) => (
              <Card key={item.t} className="border-red-500/20 bg-red-500/5">
                <CardHeader><CardTitle className="text-base">{item.t}</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-muted-foreground">{item.d}</p></CardContent>
              </Card>
            ))}
          </section>

          <section id="youtube-music-faq" className="space-y-3 scroll-mt-24">
            <h2 className="text-2xl font-bold">FAQ & Troubleshooting</h2>
            <div className="space-y-3">
              {faqItems.map((item) => (
                <Card key={item.q} className="border-red-500/20">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2"><Wrench className="w-4 h-4 text-red-400" />Q: {item.q}</CardTitle>
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
