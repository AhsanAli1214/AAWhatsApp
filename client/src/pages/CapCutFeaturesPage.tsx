import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import {
  BadgeCheck,
  Bot,
  Check,
  Cpu,
  Download,
  FileVideo,
  Globe,
  Languages,
  Layers,
  Lock,
  ShieldCheck,
  Sparkles,
  Wand2,
  Zap,
} from "lucide-react";
import { APP_VERSIONS } from "@/config/appConfig";
import { Footer } from "@/components/Footer";

const HERO_IMAGE_URL = "https://i.postimg.cc/HsPkz8Hy/Gemini-Generated-Image-qb1oceqb1oceqb1o.png";

const highlights = [
  "No internet connection error",
  "All templates unlocked and working",
  "AI tools fully enabled",
  "No watermark on export",
  "Business creator mode enabled",
  "No forced login",
  "No Play Store verification",
  "No regional restrictions",
];

const aiFeatures = [
  "AI Background Removal",
  "AI Auto Captions",
  "AI Text-to-Speech",
  "AI Scene Detection",
  "AI Smart Cut",
  "Motion Tracking",
  "Auto-Reframe",
  "AI Relight & Audio Enhancement",
];

const proTools = [
  "Keyframe animation support",
  "Advanced timeline tools",
  "Multi-layer overlay workflow",
  "Pro filters and cinematic effects",
  "Premium transitions and text assets",
  "Color tools (HSL, curves, style controls)",
  "Template-first fast workflow",
  "Business creator mode presets",
];

const technicalRows = [
  ["App Name", "CapCut Pro MOD APK"],
  ["Version", `${APP_VERSIONS.capcutPro} (Latest Stable)`],
  ["Developer", "Bytedance (Mod by AA Mods)"],
  ["Author", "Ahsan Ali (AA Mods)"],
  ["Category", "Video Editing Apps / MOD APK"],
  ["Android Required", "Android 6.0+"],
  ["CPU Architecture", "armeabi-v7a, arm64-v8a"],
  ["Root Required", "No"],
  ["License", "Free (MOD)"],
];

const installSteps = [
  "Download CapCut Pro MOD APK by AA Mods",
  "Go to Settings → Security",
  "Enable Install from Unknown Sources",
  "Install the APK file",
  "Open CapCut Pro",
  "Enjoy all premium features unlocked",
];

const faq = [
  {
    q: "Can I use AI tools without getting internet connection errors?",
    a: "Yes. This stable build is optimized to keep core AI workflows usable without frequent server-related errors that appear in many other modified builds.",
  },
  {
    q: "Are premium templates unlocked and usable?",
    a: "Yes. Trending and premium templates are unlocked, with improved compatibility across regions and fewer template loading issues.",
  },
  {
    q: "Will exported videos include a watermark?",
    a: "No. Exports are watermark-free, giving you cleaner output for social media, client drafts, and business content.",
  },
  {
    q: "Does CapCut Pro MOD work on low-end Android devices?",
    a: "Yes. The package is cleaned and optimized to improve performance on both low-end and high-end Android phones, depending on project complexity.",
  },
  {
    q: "Do I need to log in or verify with Play Store before using it?",
    a: "No. This build is configured to reduce forced login and verification prompts so you can start editing quickly after installation.",
  },
  {
    q: "Which Android version is required?",
    a: "Android 6.0 or higher is recommended. For the best editing experience, use a device with enough free storage and RAM for video rendering.",
  },
  {
    q: "How do I update safely when a new version is released?",
    a: "Download the latest version from the official AA Mods download page, back up important projects, then install the new APK over your current version.",
  },
  {
    q: "Is this the official CapCut app from ByteDance?",
    a: "No. This is a modified build by AA Mods. It is not an official Play Store release from ByteDance.",
  },
];

export default function CapCutFeaturesPage() {
  const canonicalUrl = "https://aa-mods.vercel.app/capcut-pro/features";

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CapCut Pro MOD APK",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Android 6.0+",
    author: {
      "@type": "Person",
      name: "Ahsan Ali",
    },
    publisher: {
      "@type": "Organization",
      name: "AA Mods",
      url: "https://aa-mods.vercel.app",
    },
    softwareVersion: APP_VERSIONS.capcutPro,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>CapCut Pro MOD APK Features & About (No Watermark, AI Working) | AA Mods</title>
        <meta
          name="description"
          content="CapCut Pro MOD APK by AA Mods unlocks all premium features, AI tools, templates and watermark-free export. Stable, optimized, and fast."
        />
        <meta
          name="keywords"
          content="CapCut Pro MOD APK, CapCut Pro features, CapCut no watermark, CapCut AI tools unlocked, Ahsan Ali AA Mods"
        />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="preconnect" href="https://i.postimg.cc" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.postimg.cc" />
        <link rel="preload" as="image" href={HERO_IMAGE_URL} />
        <meta property="og:title" content="CapCut Pro MOD APK – Full Features & About" />
        <meta
          property="og:description"
          content="All premium features unlocked, AI tools working, templates unlocked, and no watermark export in a stable build by AA Mods."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={HERO_IMAGE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CapCut Pro MOD APK Features & About | AA Mods" />
        <meta
          name="twitter:description"
          content="Stable CapCut Pro MOD APK with premium tools, AI features, templates, and watermark-free export."
        />
        <meta name="twitter:image" content={HERO_IMAGE_URL} />
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
      </Helmet>

      <section className="pt-32 pb-12 container mx-auto px-4 max-w-6xl">
        <div className="text-center">
          <Badge className="mb-5 bg-primary/10 text-primary border-primary/20 uppercase tracking-widest font-black">
            Author & Developer: Ahsan Ali (AA Mods)
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            CapCut Pro MOD APK – All Premium Features Unlocked
          </h1>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto">
            The stable, professionally optimized CapCut Pro MOD experience with working AI tools, unlocked templates,
            and clean no-watermark export.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl pb-8">
        <div className="grid sm:grid-cols-3 gap-3 text-sm">
          <Link href="/capcut-pro/download" className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-3 font-bold hover:bg-primary/10 transition-colors">Download Page</Link>
          <a href="#technical-details" className="rounded-xl border border-border px-4 py-3 font-bold hover:bg-secondary/40 transition-colors">Technical Details</a>
          <a href="#capcut-faq" className="rounded-xl border border-border px-4 py-3 font-bold hover:bg-secondary/40 transition-colors">Read FAQ</a>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl pb-10">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <Card className="rounded-3xl bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-black">
                <Sparkles className="h-5 w-5 text-primary" /> Why AA Mods CapCut Pro?
              </CardTitle>
              <CardDescription>
                Built for creators who want stability over hype and smooth output in real projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-3 text-sm">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2 rounded-xl border border-primary/20 bg-background/60 p-3">
                  <Check className="h-4 w-4 text-emerald-500 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-3xl overflow-hidden border-primary/20">
            <img
              src={HERO_IMAGE_URL}
              alt="CapCut Pro MOD by AA Mods"
              className="w-full h-full object-cover min-h-[320px]"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width="1200"
              height="800"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl pb-14">
        <h2 className="text-3xl font-black mb-6">Complete Feature Breakdown (AA Mods Edition)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Bot className="h-5 w-5 text-primary" /> AI Features – 100% Working
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {aiFeatures.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Layers className="h-5 w-5 text-primary" /> Pro Editing Toolkit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {proTools.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <BadgeCheck className="h-3.5 w-3.5 text-primary" />
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <FileVideo className="h-5 w-5 text-primary" /> Export, Templates & Stability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />4K & 60FPS export support</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />No watermark on export</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />Trending templates unlocked</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />No network error message</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />Server-safe editing workflow</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />Faster loading and smooth UI</div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-6xl pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl font-black flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" /> Why Choose CapCut Pro MOD by AA Mods?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Stability over hype</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Clean code over risky patches</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Long-term usability</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" />Real creator needs focused</div>
              <div className="flex items-center gap-2"><Cpu className="h-4 w-4 text-primary" />Optimized for low and high-end devices</div>
              <div className="flex items-center gap-2"><Globe className="h-4 w-4 text-primary" />Multiple languages and broader accessibility</div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl font-black flex items-center gap-2">
                <Download className="h-5 w-5 text-primary" /> How to Install (Step-by-Step)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              {installSteps.map((item, index) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-secondary/40 p-3">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
              <div className="pt-1 text-xs text-muted-foreground">
                No login required • No VPN required • No internet required for templates & AI in core workflow.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="technical-details" className="container mx-auto px-4 max-w-6xl pb-14">
        <Card className="rounded-3xl bg-secondary/30">
          <CardHeader>
            <CardTitle className="text-2xl font-black">Technical Details</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-3 text-sm">
            {technicalRows.map(([spec, value]) => (
              <div key={spec} className="rounded-lg border border-border/50 bg-background/60 p-3">
                <span className="text-muted-foreground">{spec}:</span> {value}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="container mx-auto px-4 max-w-6xl pb-14">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Lock className="h-5 w-5 text-primary" />Safety Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />Security notice removed</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />No unnecessary permissions</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />No forced account login</div>
              <div className="text-xs text-muted-foreground pt-1">This MOD is not official. Use for educational and personal purposes.</div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Languages className="h-5 w-5 text-primary" />Performance Focus</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />Optimized and cleaned resources</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />Faster image and asset loading</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />Smooth editing and navigation flow</div>
              <div className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-primary" />Battery-conscious usage profile</div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg">Official Download Reminder</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <p>Always download from the official AA Mods pages to avoid fake or infected files.</p>
              <Link href="/capcut-pro/download">
                <Button className="w-full font-bold">
                  <Download className="mr-2 h-4 w-4" /> Open Official Download Page
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="capcut-faq" className="container mx-auto px-4 max-w-5xl pb-16">
        <h2 className="text-3xl font-black mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <Card key={item.q} className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-lg">{item.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{item.a}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 max-w-4xl text-center pb-10">
        <h3 className="text-2xl md:text-4xl font-black mb-4">Final Verdict – CapCut Pro MOD APK by AA Mods</h3>
        <p className="text-muted-foreground mb-8">
          If you want a powerful and stable CapCut Pro MOD APK experience, AA Mods by Ahsan Ali delivers reliable AI,
          unlocked premium tools, smooth templates, and watermark-free export.
        </p>
        <Link href="/capcut-pro/download">
          <Button size="lg" className="h-14 px-10 rounded-xl font-bold">
            <Download className="mr-2 h-5 w-5" /> Download CapCut Pro MOD {APP_VERSIONS.capcutPro}
          </Button>
        </Link>
      </section>
      <Footer />
    </div>
  );
}
