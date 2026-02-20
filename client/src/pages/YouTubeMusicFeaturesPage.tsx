import { Helmet } from "react-helmet";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Ban,
  PlayCircle,
  DownloadCloud,
  Headphones,
  SkipForward,
  Repeat,
  Palette,
  Shield,
  History,
  CheckCircle2,
  AudioLines,
  Workflow,
  Gauge,
  Sparkles,
  Lock,
  WifiOff,
} from "lucide-react";

const coreFeatures = [
  {
    icon: Ban,
    title: "Ad-Free Listening",
    points: [
      "No audio ads between tracks",
      "No forced video ads in video mode",
      "No banner/display ads in feed and library",
    ],
  },
  {
    icon: PlayCircle,
    title: "Background & Screen-Off Playback",
    points: [
      "Keep music running while multitasking",
      "Screen-off playback for battery saving",
      "Reliable playback continuity during app switching",
    ],
  },
  {
    icon: DownloadCloud,
    title: "Offline Downloads",
    points: [
      "Download tracks, albums, and playlists",
      "Manage storage and quality preferences",
      "Travel-ready listening with zero buffering",
    ],
  },
  {
    icon: Headphones,
    title: "High-Quality Audio",
    points: [
      "Unlocked higher bitrate options",
      "AAC/Opus codec support retained",
      "Better detail, balance, and stereo depth",
    ],
  },
  {
    icon: SkipForward,
    title: "Unlimited Skips",
    points: [
      "No skip caps on radio/discovery sessions",
      "Faster playlist curation and browsing",
      "Complete control over track navigation",
    ],
  },
  {
    icon: Repeat,
    title: "Audio/Video Toggle",
    points: [
      "Switch between audio and official video quickly",
      "Smooth transitions without jarring restarts",
      "Useful for both casual listening and visual sessions",
    ],
  },
  {
    icon: Palette,
    title: "UI & Theme Customization",
    points: [
      "OLED true-black mode",
      "Cleaner bottom navigation behavior",
      "Reduced visual clutter for focused usage",
    ],
  },
  {
    icon: Shield,
    title: "Privacy & Performance",
    points: [
      "Reduced tracking overhead",
      "Lean runtime behavior",
      "Smoother daily operation on mid-range devices",
    ],
  },
];

const advancedInsights = [
  {
    icon: Workflow,
    title: "Better Listening Workflow",
    body: "Built for practical day-long use: quick launch, smooth controls, and fewer interruptions while moving between apps.",
  },
  {
    icon: AudioLines,
    title: "Audio-Centric Optimization",
    body: "Focuses on stable playback pipelines and improved consistency in high-quality audio sessions.",
  },
  {
    icon: Gauge,
    title: "Balanced Performance",
    body: "Optimized to remain responsive on both older devices and newer phones without heavy overhead.",
  },
  {
    icon: WifiOff,
    title: "Offline Reliability",
    body: "Designed for users who frequently listen without data connectivity in commutes, travel, and low-network zones.",
  },
  {
    icon: Lock,
    title: "Privacy-Conscious Defaults",
    body: "Cleaner behavior and reduced background noise help users keep tighter control over their app environment.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience Layer",
    body: "Combines premium listening controls, modern visual polish, and practical quality-of-life enhancements.",
  },
];

export default function YouTubeMusicFeaturesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Features of YouTube Music Premium MOD APK | Ad-Free, Background Play, Offline & More</title>
        <meta
          name="description"
          content="Explore all features of YouTube Music Premium MOD APK: ad-free listening, background playback, high-quality audio, offline downloads, unlimited skips, UI customization, and privacy optimizations."
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/youtube-music-mod/features" />
      </Helmet>

      <main className="pt-20 md:pt-24 pb-28 lg:pb-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl space-y-8">
          <section className="text-center space-y-4">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/30 uppercase tracking-[0.12em] font-bold">
              Detailed Feature Breakdown
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">A Deep Dive into YouTube Music Premium MOD APK</h1>
            <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              This build is focused on complete listening freedom: ad-free playback, premium audio quality, reliable background operation,
              and cleaner user experience for heavy daily listeners.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-4">
            {coreFeatures.map((feature) => (
              <Card key={feature.title} className="border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <feature.icon className="w-5 h-5 text-red-400" /> {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {feature.points.map((point) => (
                    <p key={point} className="text-sm text-muted-foreground flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Advanced Benefits & Practical Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {advancedInsights.map((item) => (
                <Card key={item.title} className="border-red-500/20 bg-red-500/5">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-red-400" /> {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>



          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Technical Detail Layer</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: AudioLines,
                  t: "Audio Path Advantages",
                  points: [
                    "Higher bitrate options improve detail in vocals and instruments.",
                    "Better consistency across wired and Bluetooth listening sessions.",
                    "Useful for users who care about clarity beyond default free-tier quality.",
                  ],
                },
                {
                  icon: Workflow,
                  t: "Workflow Reliability",
                  points: [
                    "Background playback keeps sessions alive during app switching.",
                    "Offline mode reduces dependence on unstable mobile networks.",
                    "Combined controls reduce friction in long listening sessions.",
                  ],
                },
              ].map((item) => (
                <Card key={item.t} className="border-red-500/20">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2"><item.icon className="w-4 h-4 text-red-400" /> {item.t}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {item.points.map((point) => (
                      <p key={point} className="text-sm text-muted-foreground flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" /><span>{point}</span></p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Best For These Listener Profiles</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: WifiOff, t: "Commuters", d: "Need stable offline music and fewer interruptions in transit." },
                { icon: Headphones, t: "Audio Enthusiasts", d: "Prefer better bitrate quality and cleaner playback control." },
                { icon: Shield, t: "Privacy-Focused Users", d: "Want a more streamlined app behavior with less background noise." },
              ].map((item) => (
                <Card key={item.t} className="border-red-500/20 bg-red-500/5">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2"><item.icon className="w-4 h-4 text-red-400" /> {item.t}</CardTitle>
                  </CardHeader>
                  <CardContent><p className="text-sm text-muted-foreground">{item.d}</p></CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <History className="w-6 h-6 text-red-400" /> Project History (Vanced → ReVanced → Morphe)
            </h2>
            <Card className="border-red-500/20">
              <CardContent className="p-6 text-sm text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  <span className="font-semibold text-foreground">2018-2022 (Vanced era):</span> Vanced popularized ad-blocking and
                  background playback at scale before shutdown under legal pressure.
                </p>
                <p>
                  <span className="font-semibold text-foreground">2022-2025 (ReVanced era):</span> ReVanced shifted the ecosystem to a
                  patch-driven model that improved transparency and maintainability.
                </p>
                <p>
                  <span className="font-semibold text-foreground">2026+ (Morphe era):</span> Morphe emphasized streamlined patching,
                  usability, and stability-focused micro-adjustments.
                </p>
                <p>
                  <span className="font-semibold text-foreground">Current build philosophy:</span> This YT Music release combines proven
                  community patch logic with a cleaner, practical UX layer for modern Android usage.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
