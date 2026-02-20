import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { APP_VERSIONS } from "@/config/appConfig";
import {
  Download,
  ShieldCheck,
  Music2,
  Headphones,
  SkipForward,
  PlayCircle,
  CheckCircle2,
  Cpu,
  Smartphone,
  Lock,
  History,
  AudioLines,
  Gauge,
  WifiOff,
  Sparkles,
  Layers,
  Library,
} from "lucide-react";

const YOUTUBE_MUSIC_ICON_URL = "https://i.postimg.cc/y6wzMTBm/cropped-circle-image-(3).png";

const highlights = [
  { icon: ShieldCheck, label: "100% ad-free listening" },
  { icon: PlayCircle, label: "True background playback" },
  { icon: Download, label: "Offline downloads unlocked" },
  { icon: Headphones, label: "Hi-Fi quality streaming" },
  { icon: SkipForward, label: "Unlimited skips" },
  { icon: Lock, label: "No root required" },
];

const proPillars = [
  {
    icon: AudioLines,
    title: "Premium Listening Quality",
    body: "Unlock richer sound detail with high-bitrate streaming and download options designed for quality headphones and speakers.",
  },
  {
    icon: WifiOff,
    title: "Always-Available Offline Mode",
    body: "Keep your playlists available during travel, unstable networks, and low-data scenarios without interruptions.",
  },
  {
    icon: Gauge,
    title: "Performance-Optimized Build",
    body: "Cleaner runtime and reduced overhead help deliver smoother scrolling, faster navigation, and responsive playback.",
  },
];

const detailedUseCases = [
  {
    icon: Library,
    title: "Massive Personal Library",
    body: "Build and manage your music collection with full premium playback controls unlocked by default.",
  },
  {
    icon: Layers,
    title: "Multitasking Daily Workflow",
    body: "Listen while using social apps, maps, messaging, or browsing without the music stopping in background.",
  },
  {
    icon: Sparkles,
    title: "Cleaner, Premium UI Experience",
    body: "Fewer distractions and less visual noise provide a focused interface for discovering and enjoying music.",
  },
];

export default function YouTubeMusicModPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>YouTube Music Premium MOD APK v8.20.52 (Latest Stable) – 100% Free Download</title>
        <meta
          name="description"
          content="Download the latest stable YouTube Music Premium MOD APK for free. Universal APK for both 32-bit and 64-bit Android with ad-free music, background playback, offline downloads, Hi-Fi audio, and unlimited skips."
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/youtube-music-mod" />
      </Helmet>

      <main className="pt-20 md:pt-24 pb-28 lg:pb-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl space-y-10">
          <section className="text-center space-y-5">
            <img
              src={YOUTUBE_MUSIC_ICON_URL}
              alt="YouTube Music MOD"
              className="w-20 h-20 md:w-24 md:h-24 mx-auto object-contain drop-shadow-[0_0_22px_rgba(239,68,68,0.35)]"
            />
            <Badge className="bg-red-500/10 text-red-400 border-red-500/30 uppercase tracking-[0.12em] font-bold">
              Latest Stable • {APP_VERSIONS.youtubeMusic}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">
              Unlock the Ultimate Music Experience with YouTube Music Premium MOD APK
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-5xl mx-auto">
              Enjoy every song, playlist, and music video without ads, subscriptions, or playback limits. This build unlocks core premium
              capabilities such as uninterrupted background listening, offline access, and high-quality audio in one universal package.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/youtube-music-mod/install">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 w-full sm:w-auto px-8">
                  <Download className="mr-2 h-4 w-4" /> Download Latest MOD
                </Button>
              </Link>
              <Link href="/youtube-music-mod/features">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-500/40 text-red-300 hover:bg-red-500/10 w-full sm:w-auto px-8"
                >
                  <Music2 className="mr-2 h-4 w-4" /> View Full Features
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground max-w-4xl mx-auto">
              Last updated February 2026 • Android 8.0+ • Universal APK • File size may vary by device.
            </p>
          </section>

          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {highlights.map((item) => (
              <Card key={item.label} className="border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent">
                <CardContent className="p-4 flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-red-400 shrink-0" />
                  <p className="font-semibold text-sm">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { label: "Last Updated", value: "February 20, 2026", icon: History },
              { label: "Requirements", value: "Android 8.0+", icon: Smartphone },
              { label: "Compatibility", value: "Universal (32/64-bit)", icon: Cpu },
              { label: "License", value: "100% Free", icon: CheckCircle2 },
            ].map((item) => (
              <Card key={item.label} className="border-red-500/15 bg-secondary/20">
                <CardContent className="p-4 text-center">
                  <item.icon className="w-5 h-5 text-red-400 mx-auto mb-2" />
                  <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground font-bold">{item.label}</p>
                  <p className="font-black text-sm mt-1">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="grid md:grid-cols-3 gap-4">
            {proPillars.map((item) => (
              <Card key={item.title} className="border-red-500/20 bg-red-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <item.icon className="w-5 h-5 text-red-400" /> {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </section>



          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">What You Actually Unlock in Daily Listening</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: PlayCircle, t: "Zero Interruptions", d: "No ad breaks during playlists, radios, or album sessions." },
                { icon: Headphones, t: "Higher Audio Detail", d: "Richer sound stage, cleaner vocals, and improved dynamic consistency." },
                { icon: Download, t: "Reliable Offline Access", d: "Save songs before trips and low-network routes for uninterrupted playback." },
                { icon: ShieldCheck, t: "Cleaner Runtime", d: "Less visual clutter and fewer non-essential interruptions while using the app." },
              ].map((item) => (
                <Card key={item.t} className="border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2"><item.icon className="w-4 h-4 text-red-400" /> {item.t}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-sm text-muted-foreground">{item.d}</p></CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Power User Highlights</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: Layers, t: "Multitasking Friendly", d: "Continue music while messaging, maps navigation, social browsing, and productivity tasks." },
                { icon: Gauge, t: "Stable Session Flow", d: "Designed for long listening sessions with predictable playback behavior and clean controls." },
                { icon: Sparkles, t: "Premium UX Feel", d: "Balanced visual polish + practical controls for users who stream heavily every day." },
              ].map((item) => (
                <Card key={item.t} className="border-red-500/20 bg-red-500/5">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2"><item.icon className="w-4 h-4 text-red-400" /> {item.t}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p></CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Why This Build Feels Better in Real Daily Use</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This release is designed for users who stream for hours every day and want stability, quality, and comfort. Instead of only
              unlocking features, it improves the full listening workflow: quicker playback start, cleaner interface behavior, fewer
              interruptions, and flexible listening modes for both active and background sessions.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {detailedUseCases.map((item) => (
                <Card key={item.title} className="border-red-500/20">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-red-400" /> {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.body}</p>
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
