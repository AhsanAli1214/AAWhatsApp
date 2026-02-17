import type { ComponentType } from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Ban,
  Music2,
  PictureInPicture2,
  Download,
  Gauge,
  SkipForward,
  ThumbsDown,
  SunMoon,
  Shield,
  Cpu,
  Code2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

type FeatureItem = {
  title: string;
  body: string;
  icon: ComponentType<{ className?: string }>;
};

const coreFeatures: FeatureItem[] = [
  {
    title: "Ad-Free Experience",
    body: "Blocks pre-roll, mid-roll, and banner ads for fully uninterrupted playback.",
    icon: Ban,
  },
  {
    title: "Background & Screen-Off Playback",
    body: "Keep audio running while using other apps or when the screen is off.",
    icon: Music2,
  },
  {
    title: "Picture-in-Picture (PiP)",
    body: "Use a floating player for multitasking with quick playback controls.",
    icon: PictureInPicture2,
  },
  {
    title: "Offline Downloads",
    body: "Save content locally for travel, low-data usage, and no-network situations.",
    icon: Download,
  },
];

const modEnhancements: FeatureItem[] = [
  {
    title: "1080p Premium Enhanced Bitrate",
    body: "Unlocks higher-bitrate 1080p streams (often around 13–14 Mbps) for clearer details and fewer artifacts.",
    icon: Gauge,
  },
  {
    title: "SponsorBlock Integration",
    body: "Automatically skips sponsor segments, intros, and outros using a community timestamp database.",
    icon: SkipForward,
  },
  {
    title: "Return YouTube Dislike",
    body: "Restores dislike visibility through open-source Return YouTube Dislike API integration.",
    icon: ThumbsDown,
  },
  {
    title: "Swipe Controls (Brightness & Volume)",
    body: "Gesture-based controls let you adjust brightness and volume in-player without interruption.",
    icon: SunMoon,
  },
  {
    title: "AMOLED Theme & UI Customization",
    body: "Use deep black theme options and cleaner player layout behavior for comfort and style.",
    icon: Sparkles,
  },
  {
    title: "Privacy & Performance Optimization",
    body: "Reduces bloat and strips unnecessary tracking hooks for smoother, cleaner runtime behavior.",
    icon: Shield,
  },
];


const useCases = [
  { title: "Music & Podcasts", body: "Background playback + no ads make long listening sessions smooth and uninterrupted.", icon: Music2 },
  { title: "Study & Learning", body: "Use offline downloads and PiP to study while switching between notes and apps.", icon: Download },
  { title: "Creators & Analysts", body: "RYD visibility and SponsorBlock context improve research and content analysis.", icon: ThumbsDown },
];

const technicalHighlights = [
  "Patch-based workflow avoids distributing full proprietary binaries directly.",
  "Feature behavior is enabled through controlled logic-level modifications.",
  "AA Mods Services provides stable companion authentication handling.",
  "No root required for standard installation and daily usage.",
];

export default function YouTubePremiumFeaturesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>
          Features of YouTube Premium MOD APK | Ad-Block, SponsorBlock, RYD, Enhanced Bitrate
        </title>
        <meta
          name="description"
          content="Explore the best features of YouTube Premium MOD APK including ad-block, SponsorBlock, Return YouTube Dislike, enhanced 1080p bitrate, offline downloads, privacy optimizations, and project history from Vanced to ReVanced-inspired methods."
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/youtube-premium-mod/features" />
      </Helmet>

      <main className="pt-20 md:pt-24 pb-28 lg:pb-20 px-3 sm:px-4">
        <div className="container mx-auto max-w-6xl space-y-9">
          <section className="text-center space-y-4">
            <Badge className="bg-red-500/10 text-red-400 border-red-500/30 uppercase tracking-[0.14em] font-bold">
              Complete Feature Breakdown
            </Badge>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">
              A Deep Dive into the Features of YouTube Premium MOD APK
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              This build combines premium YouTube behavior with advanced community enhancements. The goal is simple: cleaner playback, better control, stronger privacy, and smoother daily use.
            </p>
          </section>

          <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: Ban, label: "Ad Experience", value: "Fully Removed" },
              { icon: Gauge, label: "Quality", value: "Enhanced 1080p" },
              { icon: Shield, label: "Privacy", value: "Optimized" },
              { icon: Cpu, label: "Install", value: "No Root" },
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

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">Core Premium Features (Unlocked)</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {coreFeatures.map((item) => (
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
            <h2 className="text-2xl font-bold">Exclusive MOD Enhancements</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {modEnhancements.map((item) => (
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
            <h2 className="text-2xl font-bold">Best Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {useCases.map((item) => (
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
            <h2 className="text-2xl font-bold">Technical Highlights</h2>
            <Card className="border-border/70">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-red-400" />
                  How This Build Is Structured
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {technicalHighlights.map((note) => (
                  <p key={note} className="text-sm text-muted-foreground flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                    <span>{note}</span>
                  </p>
                ))}
              </CardContent>
            </Card>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold">A Tale of Two Projects: Vanced and ReVanced</h2>
            <Card>
              <CardContent className="pt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  YouTube Vanced made premium-style enhancements popular by distributing pre-modified packages, but the project ended in 2022 after legal pressure.
                </p>
                <p>
                  ReVanced moved the ecosystem toward patching workflows where users apply feature patches to official app builds. This approach is more transparent and community-maintainable.
                </p>
                <p>
                  Our implementation follows that modern direction with emphasis on reliable updates, practical feature value, and cleaner privacy defaults.
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
