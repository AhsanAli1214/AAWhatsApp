import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { APP_UPDATE_DATES, APP_VERSIONS } from "@/config/appConfig";
import {
  CheckCircle2,
  Download,
  Ban,
  Music2,
  Gauge,
  SkipForward,
  ThumbsDown,
  Shield,
  Sparkles,
  ShieldCheck,
  Cpu,
  Clock3,
  Workflow,
  Layers,
  UserCircle2,
  WifiOff,
  BadgeCheck,
  PictureInPicture2,
  SlidersHorizontal,
  Rocket,
  ListChecks,
} from "lucide-react";

const YOUTUBE_LOGO_URL = "https://i.postimg.cc/4y3bZ6cj/download-1-removebg-preview.png";

const features = [
  { icon: Ban, label: "Absolutely ad-free playback" },
  { icon: Music2, label: "Background + screen-off playback" },
  { icon: Gauge, label: "Enhanced 1080p bitrate option" },
  { icon: SkipForward, label: "SponsorBlock integration" },
  { icon: ThumbsDown, label: "Return YouTube Dislike support" },
  { icon: Sparkles, label: "AMOLED theme + UI customization" },
  { icon: Shield, label: "Privacy + performance optimization" },
  { icon: Download, label: "Offline video downloads" },
];

const detailCards = [
  {
    icon: ShieldCheck,
    title: "Built for Reliability",
    body: "Based on stable patch workflows inspired by modern community methods for smoother long-term use.",
  },
  {
    icon: Cpu,
    title: "Universal APK Release",
    body: "One package for users—no architecture confusion. Install AA Mods Services first, then install YouTube MOD.",
  },
  {
    icon: Workflow,
    title: "Better Daily Workflow",
    body: "PiP, background playback, SponsorBlock, and swipe controls combine into a cleaner everyday viewing experience.",
  },
  {
    icon: Clock3,
    title: "Fast Setup",
    body: "Simple install flow with no root required and direct access to updated builds from the official page.",
  },
];

const workflowSteps = [
  {
    icon: BadgeCheck,
    title: "Step 1 — Install AA Mods Services",
    body: "AA Mods Services is required for stable sign-in compatibility and should always be installed first.",
  },
  {
    icon: Download,
    title: "Step 2 — Install Universal YouTube APK",
    body: "Install the single universal package directly with no arm64/armeabi variant selection needed.",
  },
  {
    icon: UserCircle2,
    title: "Step 3 — Sign In and Sync",
    body: "Sign in through AA Mods Services to restore subscriptions, playlists, and watch history.",
  },
];

const buildInsights = [
  {
    icon: Layers,
    title: "What This Build Includes",
    points: [
      "Premium playback capabilities unlocked",
      "Community enhancement stack (SponsorBlock + RYD)",
      "Cleaned runtime with reduced non-essential components",
    ],
  },
  {
    icon: UserCircle2,
    title: "Who This Is Best For",
    points: [
      "Users who want ad-free YouTube without monthly fees",
      "Learners and listeners using background play all day",
      "Power users who prefer quality controls and cleaner UI",
    ],
  },
  {
    icon: WifiOff,
    title: "Offline & Daily Utility",
    points: [
      "Save videos for travel and low-data situations",
      "Continue playback while multitasking on other apps",
      "Keep a smoother viewing flow with fewer interruptions",
    ],
  },
];

const advancedHighlights = [
  {
    icon: PictureInPicture2,
    title: "Productivity Multitasking",
    body: "Combine PiP and background play for uninterrupted learning, music, and daily multitasking.",
  },
  {
    icon: SlidersHorizontal,
    title: "Control-Oriented Playback",
    body: "Use SponsorBlock, swipe gestures, and quality tuning for a tighter and more professional viewing flow.",
  },
  {
    icon: Rocket,
    title: "Optimized Daily Use",
    body: "Lean behavior and practical patching strategy focus on stable performance in real everyday sessions.",
  },
];

export default function YouTubePremiumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>YouTube Premium MOD APK (Latest Stable Version) - Free Download</title>
        <meta
          name="description"
          content="Download the latest stable version of YouTube Premium MOD APK for free. Enjoy an ad-free experience, background playback, SponsorBlock, Return YouTube Dislike, enhanced 1080p bitrate, and offline downloads. No root required."
        />
        <meta
          name="keywords"
          content="YouTube Premium MOD APK, YouTube mod download, ad free YouTube APK, SponsorBlock YouTube APK, Return YouTube Dislike mod, no root YouTube premium"
        />
        <meta property="og:title" content="YouTube Premium MOD APK - Latest Stable Version" />
        <meta
          property="og:description"
          content="Download YouTube Premium MOD APK with ad-free playback, SponsorBlock, Return YouTube Dislike, background play, and offline downloads."
        />
        <meta property="og:url" content="https://aa-mods.vercel.app/youtube-premium-mod" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://aa-mods.vercel.app/youtube-premium-mod" />
      </Helmet>

      <main className="pt-20 md:pt-24 pb-28 lg:pb-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl space-y-10">
          <section className="text-center space-y-5">
            <img
              src={YOUTUBE_LOGO_URL}
              alt="YouTube Premium MOD Logo"
              className="w-20 h-20 md:w-24 md:h-24 mx-auto object-contain"
              loading="eager"
              decoding="async"
              width="96"
              height="96"
            />
            <Badge className="bg-red-500/10 text-red-400 border-red-500/30 uppercase tracking-[0.12em] font-bold">
              Latest Stable Release
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">
              Unlock the Ultimate YouTube Experience with YouTube Premium MOD APK
            </h1>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
              Tired of interruptions and limitations on YouTube? Elevate your viewing with this feature-rich build inspired by Vanced and ReVanced. Enjoy premium-grade playback controls, smooth performance, enhanced privacy, and free access to the tools users care about most.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
              {[
                { title: "Ad Experience", value: "Completely Removed" },
                { title: "Playback", value: "Background + PiP" },
                { title: "Quality", value: "Enhanced 1080p" },
                { title: "Install", value: "No Root Required" },
              ].map((item) => (
                <Card key={item.title} className="border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent">
                  <CardContent className="p-4 text-center">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground font-bold">{item.title}</p>
                    <p className="text-sm font-extrabold mt-1">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl mx-auto w-full space-y-3 py-2 md:py-3">
              <div className="inline-flex items-center justify-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-red-300">
                <span>Version {APP_VERSIONS.youtubePremium}</span>
                <span className="opacity-60">•</span>
                <span>{APP_UPDATE_DATES.youtubePremium.short}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
                <Link href="/youtube-premium-mod/install" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto min-h-[62px] md:min-h-[78px] px-5 md:px-7 font-extrabold bg-gradient-to-r from-red-500 via-rose-500 to-orange-400 text-white shadow-lg shadow-red-500/40 hover:opacity-95"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    DOWNLOAD LATEST STABLE VERSION {APP_VERSIONS.youtubePremium}
                  </Button>
                </Link>
                <Link href="/youtube-premium-mod/features" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto min-h-[62px] md:min-h-[78px] px-5 md:px-7 font-bold border-red-500/40 text-red-400 hover:bg-red-500/10">
                    Explore Features & Changelog
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                Last Updated: {APP_UPDATE_DATES.youtubePremium.display} | Requirements: Android 5.1+
              </p>
              <p className="text-sm text-red-300">
                Install order: Step 1 AA Mods Services → Step 2 YouTube Premium MOD.
              </p>
            </div>
          </section>

          <section>
            <Card className="border-red-500/30">
              <CardHeader>
                <CardTitle className="text-red-400">Why Choose YouTube Premium MOD APK?</CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature.label} className="flex items-start gap-2">
                    <feature.icon className="w-4 h-4 mt-1 text-red-400 shrink-0" />
                    <p className="text-sm text-muted-foreground">{feature.label}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Professional Details & Advantages</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {detailCards.map((item) => (
                <Card key={item.title} className="border-red-500/20 hover:border-red-500/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-red-400" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Quick Setup Workflow</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {workflowSteps.map((step) => (
                <Card key={step.title} className="border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent hover:border-red-500/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <step.icon className="w-5 h-5 text-red-400" />
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">In-Depth Product Details</h2>
            <div className="grid lg:grid-cols-3 gap-4">
              {buildInsights.map((item) => (
                <Card key={item.title} className="border-red-500/20 hover:border-red-500/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-red-400" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {item.points.map((point) => (
                      <p key={point} className="text-sm text-muted-foreground flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Advanced Experience Highlights</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {advancedHighlights.map((item) => (
                <Card key={item.title} className="border-red-500/20 hover:border-red-500/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <item.icon className="w-5 h-5 text-red-400" />
                      {item.title}
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
            <h2 className="text-2xl font-bold">A Legacy of Community Enhancement</h2>
            <p className="text-muted-foreground leading-relaxed">
              The evolution from YouTube Vanced to ReVanced introduced a resilient patch-based model for improving the official app. Instead of redistributing Google binaries directly, patching applies controlled feature-level changes so users can keep premium capabilities, better privacy, and stable updates.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This release continues that user-first tradition with careful optimization, reduced bloat, and practical tools for real daily use.
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "No root required setup flow for fast onboarding.",
                "Universal APK package for simpler download decisions.",
                "AA Mods Services-first login flow for account stability.",
                "Dedicated features and install pages for guided setup.",
              ].map((line) => (
                <p key={line} className="text-sm text-muted-foreground flex items-start gap-2">
                  <ListChecks className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                  <span>{line}</span>
                </p>
              ))}
            </div>
            <div className="pt-2 md:pt-3 flex justify-center">
              <Link href="/youtube-premium-mod/install" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto min-h-[62px] md:min-h-[72px] px-6 md:px-8 font-extrabold bg-gradient-to-r from-red-500 via-rose-500 to-orange-400 text-white shadow-lg shadow-red-500/40 hover:opacity-95"
                >
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  DOWNLOAD {APP_VERSIONS.youtubePremium} NOW
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
