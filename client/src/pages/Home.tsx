import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Palette,
  Ghost,
  MessageSquare,
  Lock,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ShieldCheck,
  ShieldAlert,
  Database,
  AlertTriangle,
  Send,
  Download,
} from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "@/hooks/useTranslation";
import { AdBlockDetector } from "@/components/AdBlockDetector";

import heroImage from "@/assets/security-hero.png";
import privacyImage from "@/assets/privacy-feature.png";
import themesImage from "@assets/generated_images/creative_visual_showing_multiple_whatsapp_theme_styles_for_aawhatsapp..png";
import mediaImage from "@/assets/media-feature.png";
import securityComparisonImage from "@assets/Gemini_Generated_Image_leenipleenipleen_(1)_1768930872554.png";
import securityImage from "@assets/Gemini_Generated_Image_q9qqs4q9qqs4q9qq_(1)_1768930866856.png";
import comparisonImage from "@assets/generated_images/clean_comparison_illustration_showing_aawhatsapp_vs_other_mods..png";
import ctaImage from "@assets/generated_images/call-to-action_image_for_downloading_aawhatsapp_apk..png";
import logoImg from "@/assets/logo.png";
import { AdPlaceholder } from "@/components/AdPlaceholder";

const ShieldCheckIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <AdBlockDetector />
      <Helmet>
        <title>AA WhatsApp APK Download V2.0 (2026 Official) – Best Anti-Ban Mod</title>
        <link rel="preload" as="image" href={heroImage} fetchPriority="high" />
        <meta
          name="description"
          content="Download Official AA WhatsApp APK V2.0 (2026). Secure Anti-Ban v2.0, Zero-Permission privacy, and 4000+ themes. The #1 alternative to GB WhatsApp and FM WhatsApp for Android."
        />
        <meta
          name="keywords"
          content="AA WhatsApp, AA WhatsApp APK, Download AA WhatsApp, AA WhatsApp V2.0, AA WhatsApp Official, Secure WhatsApp Mod, Anti-Ban WhatsApp 2026, AA Mods, WhatsApp Mod Pro, WhatsApp Privacy Mod, Best WhatsApp Mod 2026"
        />
        <meta
          property="og:title"
          content="AA WhatsApp Download V2.0 (2026) – Official & Secure Anti-Ban Mod"
        />
        <meta
          property="og:description"
          content="Get the latest AA WhatsApp APK V2.0. Featuring Anti-Ban v2.0 and Zero-Permission Privacy Core. The safest WhatsApp mod choice for 2026."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://aa-mods.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AA WhatsApp",
              "operatingSystem": "Android",
              "applicationCategory": "CommunicationApplication",
              "softwareVersion": "2.0",
              "fileSize": "118 MB",
              "genre": "Messaging",
              "inLanguage": "en",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "102456"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="fixed inset-0 hero-gradient pointer-events-none z-0" />
      <Navigation />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex flex-col items-center lg:items-start gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-pulse">
                <ShieldCheck className="w-4 h-4" />
                100% Secure: No Bank/Location Data Access
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-black font-display leading-[1.1] mb-8 tracking-tighter"
            >
              AAWhatsApp APK <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary text-glow italic">
                {t("hero_title")}
              </span>
            </motion.h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t("hero_subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/download" className="w-full sm:w-auto">
                <button className="relative group overflow-hidden px-10 py-6 rounded-2xl bg-primary text-primary-foreground font-black text-xl shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] hover:-translate-y-1 active:scale-95 transition-all duration-500 w-full border border-white/20 uppercase tracking-tight flex items-center justify-center gap-3" data-testid="button-download-hero">
                  <Download className="w-7 h-7" />
                  <span className="relative z-10">Continue to Download</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-primary to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 -skew-y-3 translate-y-[-10%]" />
                </button>
              </Link>
              <a
                href="https://t.me/AA_ModsOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="px-10 py-5 rounded-2xl bg-secondary/50 backdrop-blur-sm border border-white/10 hover:border-primary/30 hover:bg-secondary/80 text-foreground font-semibold text-lg transition-all w-full flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Join Telegram
                </button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 mx-auto max-w-lg">
              <img
                src={heroImage}
                alt="AAWhatsApp Interface V2.0 - Secure Messaging with Anti-Ban v2.0"
                title="Official AAWhatsApp Secure Interface"
                className="w-full h-auto rounded-[2rem] shadow-2xl shadow-primary/20 border border-primary/20"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="1200"
                height="675"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
        <AdPlaceholder format="mobile" />
        <div className="flex justify-center mt-20">
          <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
        </div>
      </section>

      {/* Version Protocol Section */}
      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-[3rem] -z-10 group-hover:bg-primary/10 transition-colors duration-700" />
            <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-white/5 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-scan" />

              <div className="flex-1 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.3em]">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  System Protocol Active
                </div>
                <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter leading-none">
                  AAWhatsApp{" "}
                  <span className="text-primary text-glow italic">V 2.0</span>
                </h2>
                <p className="text-muted-foreground text-lg font-medium max-w-xl leading-relaxed">
                  The latest iteration of AAWhatsApp is now synchronized. Built
                  on a hardened codebase with zero-access privacy protocols.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  {[
                    { label: "Update", value: "23/01/26" },
                    { label: "Stability", value: "99.9%" },
                    { label: "Status", value: "Verified" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col items-center lg:items-start min-w-[120px]"
                    >
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">
                        {stat.label}
                      </span>
                      <span className="text-sm font-black text-primary font-mono">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />

              <div className="shrink-0 flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-[2.5rem] bg-primary/10 flex items-center justify-center border border-primary/20 shadow-2xl shadow-primary/10">
                    <Database className="w-14 h-14 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black font-mono text-white mb-1 tracking-tight">
                    V 2.0
                  </p>
                  <p className="text-xs font-bold text-primary uppercase tracking-[0.2em] opacity-70">
                    Current Mainframe Version
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container px-4 relative z-10 mb-16">
        <AdPlaceholder format="leaderboard" className="py-8" />
      </div>

      {/* Detailed Info Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Why AAWhatsApp is the <span className="text-primary">Best Choice</span> in 2026
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                While other mods like GBWhatsApp and FMWhatsApp continue to request invasive permissions, AAWhatsApp has been rebuilt from the ground up. Our focus is 100% on user privacy and high-speed performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Enhanced Media Sharing</h4>
                    <p className="text-muted-foreground">Share up to 2GB of files without any compression. Your photos and videos stay in HD.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Anti-Ban Protection</h4>
                    <p className="text-muted-foreground">Advanced scripts that bypass the latest security checks, ensuring your account remains safe.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={mediaImage} 
                alt="AAWhatsApp High-Speed Media Sharing - Send 2GB Files in HD" 
                title="Advanced Media Delivery System"
                className="rounded-3xl shadow-2xl border border-primary/20 w-full"
                loading="lazy"
                width="800"
                height="800"
              />
              <div className="absolute -bottom-6 -right-6 p-6 bg-background border border-primary/30 rounded-2xl shadow-xl hidden md:block">
                <p className="text-primary font-bold text-xl">HD Media Sharing</p>
                <p className="text-sm text-muted-foreground">Up to 2GB Files</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Another Info Section with Image */}
      <section className="py-24 bg-primary/5">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, order: 2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:order-2 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Ultimate <span className="text-primary">Theme Customization</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Tired of the same old green interface? AAWhatsApp offers over 4000+ custom themes and deep UI customization options that let you change every pixel of your app.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Custom Fonts', 'DND Mode', 'Message Scheduler', 'Auto Reply', 'Hide Online Status', 'Blue Ticks Control'].map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-foreground font-medium">
                    <Zap className="w-4 h-4 text-primary" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link href="/download">
                <Button size="lg" className="rounded-full px-8 text-lg font-bold">
                  Try Custom Themes Now
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30, order: 1 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <img 
                src={themesImage} 
                alt="AAWhatsApp Theme Engine - 4000+ Custom Styles and Layouts" 
                title="Visual Customization Hub"
                className="rounded-3xl shadow-2xl border border-primary/20 w-full"
                loading="lazy"
                width="800"
                height="800"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Deep-Dive Section */}
      <section className="py-24 relative z-10 bg-secondary/20">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Privacy That <span className="text-primary">Stays Invisible</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AAWhatsApp is engineered with a proprietary anonymity layer. From hiding your "Last Seen" to disabling blue ticks selectively, you control exactly how you appear to the world.
              </p>
              <div className="grid gap-4">
                <div className="p-5 rounded-2xl bg-background border border-white/5 flex gap-4">
                  <Ghost className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Incognito Mode</h4>
                    <p className="text-sm text-muted-foreground">View statuses and read messages without leaving a trace.</p>
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-background border border-white/5 flex gap-4">
                  <Lock className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Anti-Delete Messages</h4>
                    <p className="text-sm text-muted-foreground">Read messages and view stories even after they've been deleted by the sender.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <img 
                src={privacyImage} 
                alt="AAWhatsApp Advanced Privacy Controls - Ghost Mode and Anti-Delete" 
                title="Elite Privacy Command Center"
                className="rounded-3xl shadow-2xl border border-primary/20 w-full max-md mx-auto"
                loading="lazy"
                width="600"
                height="600"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Anti-Ban Tech Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-black">
                <ShieldCheckIcon className="w-4 h-4" />
                Anti-Ban V2.0 Certified
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                Hardened <span className="text-primary italic">Anti-Ban</span> Infrastructure
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our proprietary Anti-Ban v2.0 script is updated daily to synchronize with official WhatsApp security patches. This ensures your account remains 100% stable without the risk of temporary bans or suspensions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                  <h4 className="text-primary font-black mb-1">0.1%</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Ban Rate 2026</p>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                  <h4 className="text-primary font-black mb-1">Daily</h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Security Updates</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src={securityImage} 
                alt="AAWhatsApp Anti-Ban Technology - Secure Account Protection" 
                title="Advanced Account Shield"
                className="rounded-3xl shadow-2xl border border-primary/20 w-full"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Performance Benchmarks Section */}
      <section className="py-24 bg-primary/5 border-y border-white/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Engineered for <span className="text-primary">Global Speed</span></h2>
            <p className="text-xl text-muted-foreground">AAWhatsApp is optimized to run smoothly even on older Android devices, providing a lightning-fast experience regardless of your hardware.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src={securityComparisonImage} 
                alt="AAWhatsApp Performance Benchmarks - Fast and Lightweight" 
                className="rounded-3xl shadow-2xl border border-white/10"
                loading="lazy"
              />
            </motion.div>
            <div className="space-y-6">
              {[
                { title: "40% Faster Startup", desc: "Optimized binary entry points for near-instant app opening." },
                { title: "Zero Background Lag", desc: "Background processes are stripped to save RAM and battery life." },
                { title: "Compressed UI Assets", desc: "Visual elements are optimized for low-bandwidth environments." }
              ].map((perf, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-background/50 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{perf.title}</h4>
                    <p className="text-sm text-muted-foreground">{perf.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section (Existing) */}
      <section
        id="privacy-core"
        className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-primary/5"
      >
        <AdPlaceholder format="mobile" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
        <div className="container px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-bold uppercase tracking-widest shadow-lg shadow-primary/10">
                  <Zap className="w-4 h-4 fill-current" />
                  The Exclusive Edge
                </div>
                <h2 className="text-5xl md:text-7xl font-bold font-display leading-[1.05] tracking-tight">
                  The Original{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 text-glow">
                    Privacy Core™
                  </span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                  AAWhatsApp by AA Mods is the world's first and only{" "}
                  <span className="text-foreground font-bold italic border-b-2 border-primary/30">
                    Permission-Clean
                  </span>{" "}
                  WhatsApp mod. We've surgically rebuilt the security layer to
                  ensure your private life stays private, making it the most
                  secure mod available in 2026.
                </p>

                <div className="grid gap-6">
                  {[
                    {
                      title: "Zero-Trace Protocol",
                      desc: "Your metadata is invisible. No caching, no external logging, no digital footprint left behind.",
                      icon: Ghost as any,
                      color: "from-emerald-500/20 to-primary/10",
                    },
                    {
                      title: "Hardened Encryption v3",
                      desc: "Military-grade 256-bit encryption for every byte of data. Even we can't see your conversations.",
                      icon: ShieldCheck as any,
                      color: "from-primary/20 to-emerald-500/10",
                    },
                    {
                      title: "Auto-Permission Stripper",
                      desc: "Our engine automatically neutralizes 45+ invasive Android permissions that other mods exploit.",
                      icon: XCircle as any,
                      color: "from-emerald-500/20 to-primary/10",
                    },
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.2 }}
                      className="flex gap-6 p-6 rounded-[2rem] bg-background/40 backdrop-blur-md border border-primary/10 hover:border-primary/40 transition-all duration-500 group cursor-default"
                    >
                      <div
                        className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <feature.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-base leading-snug">
                          {feature.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="flex-1 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "backOut" }}
                className="relative z-10"
              >
                <div className="mb-8 text-center space-y-3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/15 border border-destructive/30 text-destructive text-sm font-bold uppercase tracking-widest shadow-lg shadow-destructive/10">
                    <XCircle className="w-4 h-4" />
                    INVASIVE PERMISSIONS BLOCKED
                  </div>
                  <h3 className="text-3xl font-bold font-display leading-tight">
                    No <span className="text-destructive">"All Files Access"</span> Required
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-md mx-auto">
                    Unlike GBWhatsApp and FMWhatsApp, we surgically removed the
                    code that demands access to your private storage.
                  </p>
                </div>
                <div className="aspect-square rounded-[4rem] bg-gradient-to-br from-primary/20 via-emerald-900/40 to-background border border-primary/30 backdrop-blur-3xl flex items-center justify-center p-16 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
                  <ShieldCheck className="w-full h-full text-primary opacity-10 absolute animate-pulse" />
                  <div className="relative z-10">
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="w-32 h-32 bg-primary rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(16,185,129,0.4)] border border-white/20"
                    >
                      <Lock className="w-16 h-16 text-primary-foreground" />
                    </motion.div>
                    <h3 className="text-4xl font-bold mb-3 tracking-tighter">
                      Privacy Verified
                    </h3>
                    <p className="text-primary font-mono text-sm tracking-[0.3em] font-bold">
                      100% CLEAN CODEBASE
                    </p>
                  </div>
                </div>
                <AdPlaceholder format="mobile" />
                <motion.div
                  animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-6 -right-6 bg-background/60 backdrop-blur-xl border border-primary/40 px-6 py-3 rounded-2xl shadow-2xl z-20"
                >
                  <div className="flex items-center gap-3 text-primary font-black text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    BANK DATA: SECURED
                  </div>
                </motion.div>
                <motion.div
                  animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -bottom-10 -left-6 bg-background/60 backdrop-blur-xl border border-primary/40 px-6 py-3 rounded-2xl shadow-2xl z-20"
                >
                  <div className="flex items-center gap-3 text-primary font-black text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    LOCATION: NULLIFIED
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section id="privacy-power" className="py-24 bg-primary/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background/40 backdrop-blur-xl border border-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="w-32 h-32 text-primary" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                  <ShieldCheck className="w-4 h-4" />
                  Premium Security Architecture
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight leading-tight">
                  All the Power of GBWhatsApp, <br />
                  <span className="text-primary">Zero Privacy Risk.</span>
                </h2>

                <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                  Most WhatsApp mods harvest your data.{" "}
                  <span className="text-foreground font-semibold">
                    AAWhatsApp is different.
                  </span>{" "}
                  We've surgically removed data-collection protocols while
                  keeping 100% of the advanced features you love.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  {[
                    {
                      title: "Clean Permissions",
                      desc: "Bank accounts, personal files, and real-time location access have been completely stripped from the code.",
                      icon: ShieldAlert as any,
                    },
                    {
                      title: "Zero Data Harvesting",
                      desc: "Unlike other mods, your messages, contacts, and metadata never leave your device.",
                      icon: Lock as any,
                    },
                    {
                      title: "GB Features Intact",
                      desc: "Enjoy full customization, anti-delete, and mass messaging without compromising your identity.",
                      icon: Zap as any,
                    },
                    {
                      title: "Encrypted Core",
                      desc: "Built on a secure foundation that prioritizes your digital safety above all else.",
                      icon: Database as any,
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/download">
                  <Button size="lg" className="rounded-full px-8 text-lg font-bold">
                    Start Secure Download
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Premium <span className="text-primary">Protocol</span> Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Unlock the full potential of WhatsApp with our advanced feature set,
              designed for the ultimate user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <FeatureCard
              title={t("feature_anti_ban_title")}
              description={t("feature_anti_ban_desc")}
              icon={Shield}
            />
            <FeatureCard
              title={t("feature_privacy_title")}
              description={t("feature_privacy_desc")}
              icon={Lock}
            />
            <FeatureCard
              title={t("feature_themes_title")}
              description={t("feature_themes_desc")}
              icon={Palette}
            />
            <FeatureCard
              title={t("feature_ghost_title")}
              description={t("feature_ghost_desc")}
              icon={Ghost}
            />
            <FeatureCard
              title={t("feature_media_title")}
              description={t("feature_media_desc")}
              icon={MessageSquare}
            />
            <FeatureCard
              title={t("feature_speed_title")}
              description={t("feature_speed_desc")}
              icon={Zap}
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/20 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <img
                src={comparisonImage}
                alt="AA WhatsApp Security Comparison"
                className="w-full h-auto rounded-3xl shadow-2xl"
                loading="lazy"
              />
            </div>
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight">
                The Most Secure <br />
                <span className="text-primary">WhatsApp Mod</span> Ever Built
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We've analyzed every popular WhatsApp mod and fixed their security
                flaws. AAWhatsApp is the result of thousands of hours of development
                focused solely on user protection.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "No Hidden Trackers",
                  "Encrypted Databases",
                  "Regular Safety Audits",
                  "Verified APK Signature",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 justify-center lg:justify-start">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative glass-card rounded-[3rem] p-12 md:p-20 overflow-hidden border border-white/10 text-center space-y-8">
            <h2 className="text-4xl md:text-7xl font-black font-display tracking-tight leading-none">
              Ready to Upgrade Your <br />
              <span className="text-primary text-glow italic italic">Experience?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
              Join millions of users worldwide who trust AAWhatsApp for their
              daily communication. Secure, fast, and completely free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/download" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full px-12 py-8 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-2xl shadow-2xl shadow-primary/20 transition-all group/btn" data-testid="button-download-bottom">
                    Download APK
                    <Download className="w-6 h-6 ml-3 group-hover/btn:translate-y-1 transition-transform" />
                  </Button>
                </Link>
              <a
                href="https://t.me/AA_ModsOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="lg" className="w-full px-12 py-8 rounded-2xl border-white/10 hover:border-primary/30 font-bold text-xl transition-all">
                  Join Community
                </Button>
              </a>
            </div>
            <div className="pt-8 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">Verified Clean</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="text-sm font-bold uppercase tracking-widest">v2.0 Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border/50 relative z-10 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="AA Mods"
                className="w-16 h-16 object-contain"
              />
              <span className="text-xl font-bold font-display tracking-tight text-foreground/80">
                AA Mods
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="/support" className="hover:text-primary transition-colors">Support</Link>
              <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            </div>
            <div className="text-sm text-muted-foreground font-mono">
              © 2026 AA Mods. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
