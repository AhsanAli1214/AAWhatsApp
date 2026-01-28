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
  Users,
  BarChart3,
  Globe,
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

// New assets
import globalMap from "@/assets/global-map.png";
import performanceChart from "@/assets/performance-benchmarks.png";
import communityImg from "@/assets/community-group.png";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <AdBlockDetector />
      <Helmet>
        <title>AA WhatsApp Download V2.0 (2026 Official) – Anti-Ban & Secure WhatsApp Mod</title>
        <link rel="preload" as="image" href={heroImage} fetchPriority="high" />
        <meta
          name="description"
          content="Download Official AA WhatsApp APK V2.0 (2026). Features Anti-Ban v2.0, Privacy Core™, and No-Permission technology. The best secure alternative to GB WhatsApp and FM WhatsApp."
        />
        <meta
          name="keywords"
          content="AA WhatsApp, AA WhatsApp APK, AA WhatsApp Download, AA WhatsApp V2.0, AA WhatsApp Official, Secure WhatsApp Mod, Anti-Ban WhatsApp 2026, AA Mods, WhatsApp Mod Pro, GB WhatsApp, FM WhatsApp"
        />
        <meta
          property="og:title"
          content="AA WhatsApp Download V2.0 (2026) – Official & Secure Anti-Ban Mod"
        />
        <meta
          property="og:description"
          content="Download the latest AA WhatsApp APK V2.0. 100% Secure, Anti-Ban v2.0, and Zero-Permission Privacy. The best WhatsApp mod in 2026."
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
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "102456"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
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
            <div className="flex flex-col items-center lg:items-start mb-8">
              <motion.img 
                src={logoImg} 
                alt="AA Mods Official Logo" 
                className="w-56 h-56 object-contain drop-shadow-[0_0_40px_rgba(16,185,129,0.4)] mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-pulse mb-6">
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
                  Continue to Download
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
                alt="AAWhatsApp Interface - Secure and Encrypted Messaging v2.0"
                title="AAWhatsApp Secure Mainframe Interface"
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

      {/* Global Impact Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider">
                <Globe className="w-4 h-4" />
                Global Security Network
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter leading-[1.1]">
                Trusted by Millions <br />
                <span className="text-primary italic text-glow">Worldwide</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AAWhatsApp serves as the primary communication hub for over 10 million users who prioritize security above all else. Our global server infrastructure ensures lightning-fast delivery while maintaining absolute anonymity.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-black text-primary font-mono">10M+</p>
                  <p className="text-muted-foreground font-bold uppercase text-xs tracking-widest">Active Users</p>
                </div>
                <div>
                  <p className="text-4xl font-black text-primary font-mono">150+</p>
                  <p className="text-muted-foreground font-bold uppercase text-xs tracking-widest">Countries</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src={globalMap} 
                alt="Global map showing AA WhatsApp secure connection points" 
                className="w-full h-auto rounded-[3rem] shadow-2xl border border-primary/20"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-24 bg-secondary/20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider">
                <BarChart3 className="w-4 h-4" />
                Speed Optimization
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter leading-[1.1]">
                Engineered for <br />
                <span className="text-primary italic text-glow">High Speed</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our proprietary delivery engine is 40% faster than official WhatsApp. We've optimized the binary execution layer to handle thousands of messages per second with zero lag.
              </p>
              <ul className="space-y-4">
                {[
                  "40% Faster Message Delivery",
                  "Instant Media Processing",
                  "Ultra-Low Latency Calls",
                  "Zero Background Data Waste"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-bold">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src={performanceChart} 
                alt="Performance benchmark chart showing AA WhatsApp speed advantages" 
                className="w-full h-auto rounded-[3rem] shadow-2xl border border-primary/20"
                loading="lazy"
              />
            </motion.div>
          </div>
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
              {/* Background scanning line */}
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

      {/* Community Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="flex-1 space-y-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src={communityImg} 
                alt="Diverse group of professional AA WhatsApp users" 
                className="w-full h-auto rounded-[3rem] shadow-2xl border border-primary/20"
                loading="lazy"
              />
            </motion.div>
            <motion.div 
              className="flex-1 space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                Global Community
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter leading-[1.1]">
                Join the <br />
                <span className="text-primary italic text-glow">Revolution</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with professional users who demand more from their communication apps. Our community is built on mutual respect, privacy, and technical excellence.
              </p>
              <div className="flex justify-center lg:justify-start">
                <a
                  href="https://t.me/AA_ModsOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-black text-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
                >
                  <Send className="w-6 h-6" />
                  Join Our Telegram Group
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Info Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-black uppercase tracking-widest mb-8"
          >
            <ShieldCheck className="w-5 h-5" />
            Safety Verified by 60+ Engines
          </motion.div>
          <img 
            src="/src/assets/safety-verified.png" 
            alt="Safety Verified Certificate" 
            className="mx-auto h-40 w-auto drop-shadow-[0_0_30px_rgba(16,185,129,0.4)] mb-8"
          />
          <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter">
            Total Privacy <span className="text-primary italic">Guaranteed</span>
          </h2>
        </div>
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
              
              <div className="p-6 rounded-2xl bg-secondary/30 border border-white/5 mb-8">
                <img src="/src/assets/security-analysis.png" alt="AA WhatsApp Security Analysis" className="w-full h-auto rounded-xl shadow-lg border border-primary/20" />
                <p className="mt-4 text-sm text-muted-foreground italic text-center">Real-time deep packet inspection and Anti-Ban v2.0 monitoring interface.</p>
              </div>

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
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Ghost Mode Pro</h4>
                    <p className="text-muted-foreground">Hide your online status, second tick, and blue ticks with surgical precision per contact.</p>
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
                className="rounded-3xl shadow-2xl border border-primary/20 w-full max-w-md mx-auto"
                loading="lazy"
                width="600"
                height="600"
              />
            </motion.div>
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
                      icon: Ghost,
                      color: "from-emerald-500/20 to-primary/10",
                    },
                    {
                      title: "Hardened Encryption v3",
                      desc: "Military-grade 256-bit encryption for every byte of data. Even we can't see your conversations.",
                      icon: ShieldCheck,
                      color: "from-primary/20 to-emerald-500/10",
                    },
                    {
                      title: "Auto-Permission Stripper",
                      desc: "Our engine automatically neutralizes 45+ invasive Android permissions that other mods exploit.",
                      icon: XCircle,
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
                        className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br \${feature.color} flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
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
                {/* Status Badges with higher gloss */}
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
                      icon: ShieldAlert,
                    },
                    {
                      title: "Zero Data Harvesting",
                      desc: "Unlike other mods, your messages, contacts, and metadata never leave your device.",
                      icon: Lock,
                    },
                    {
                      title: "GB Features Intact",
                      desc: "Enjoy full customization, anti-delete, and mass messaging without compromising your identity.",
                      icon: Zap,
                    },
                    {
                      title: "Encrypted Core",
                      desc: "Built on a secure foundation that prioritizes your digital safety above all else.",
                      icon: Database,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover-elevate transition-all"
                    >
                      <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 flex flex-col md:flex-row items-center gap-6">
                  <div className="text-center md:text-left flex-1">
                    <p className="text-primary font-bold text-lg mb-1">
                      Total Privacy Guaranteed
                    </p>
                    <p className="text-sm text-muted-foreground">
                      AAWhatsApp is the only mod that puts your bank details and
                      location data beyond reach.
                    </p>
                  </div>
                  <Link href="/download">
                    <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 font-bold whitespace-nowrap">
                      Download Secured APK
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Grid */}
      <section id="features" className="py-32 relative z-10 bg-background">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter mb-6">
              Advanced Security <span className="text-primary italic">Matrix</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore the surgical security enhancements that make AAWhatsApp the safest choice for secure communication in 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Stealth Protocol"
              description="Surgical removal of location and contact-harvesting scripts found in traditional mods."
              icon={Ghost}
            />
            <FeatureCard
              title="Encrypted Vault"
              description="End-to-end encryption layer that hardens your database against local extraction attempts."
              icon={Lock}
            />
            <FeatureCard
              title="Anonymity Core"
              description="Spoof your device ID and metadata to prevent tracking by third-party analytics."
              icon={Shield}
            />
          </div>
        </div>
      </section>

      {/* Visual Comparison Section */}
      <section className="py-32 bg-primary/5 relative overflow-hidden">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <img
                src={comparisonImage}
                alt="AAWhatsApp vs Other Mods Security Analysis"
                className="w-full h-auto rounded-[3rem] shadow-2xl border border-primary/20"
                loading="lazy"
              />
            </motion.div>
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter">
                The <span className="text-primary italic">Difference</span>
              </h2>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-background border border-primary/20 shadow-xl">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                    AAWhatsApp (Official)
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-muted-foreground font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Zero Data Harvesting
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      No Location Permissions
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Bank-Grade Encryption
                    </li>
                  </ul>
                </div>
                <div className="p-6 rounded-2xl bg-background/50 border border-destructive/20 opacity-70">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <ShieldAlert className="w-8 h-8 text-destructive" />
                    Standard Mods
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-muted-foreground/60">
                      <XCircle className="w-5 h-5 text-destructive" />
                      Constant Permission Requests
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground/60">
                      <XCircle className="w-5 h-5 text-destructive" />
                      Hidden Background Analytics
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground/60">
                      <XCircle className="w-5 h-5 text-destructive" />
                      Location Data Access
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative z-10 overflow-hidden">
        <div className="container px-4">
          <div className="glass-card rounded-[3rem] p-12 md:p-24 border border-primary/20 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 -z-10" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto space-y-10"
            >
              <h2 className="text-5xl md:text-8xl font-black font-display tracking-tighter leading-none mb-4">
                SECURE YOUR <br />
                <span className="text-primary italic text-glow">COMMUNICATION</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
                Join 10M+ users who have already switched to the world's most secure WhatsApp mod. Experience privacy without compromise.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/download" className="w-full sm:w-auto">
                  <Button size="lg" className="h-20 px-12 rounded-2xl bg-primary text-primary-foreground font-black text-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:-translate-y-1 active:scale-95 w-full uppercase flex items-center justify-center gap-4">
                    <Download className="w-8 h-8" />
                    Download Official V2.0
                  </Button>
                </Link>
                <Link href="/blog" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="h-20 px-12 rounded-2xl border-2 border-primary/30 hover:bg-primary/5 font-bold text-xl w-full">
                    Read Safety Guides
                  </Button>
                </Link>
              </div>
              <p className="text-muted-foreground font-mono text-sm tracking-[0.2em] font-bold uppercase opacity-60">
                Compatible with all Android devices • Anti-Ban v2.0
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-20 border-t border-white/5 bg-black/40 backdrop-blur-xl relative z-10">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex items-center gap-3">
                <motion.img 
                  src={logoImg} 
                  alt="AA Mods Logo" 
                  className="w-16 h-16 object-contain"
                />
                <span className="text-3xl font-black font-display tracking-tighter">AA MODS</span>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Dedicated to providing the most secure communication tools for the modern age. AA Mods stands for privacy, security, and user empowerment.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-bold font-display tracking-tight text-white">Platform</h4>
              <ul className="space-y-4">
                <li><Link href="/download" className="text-muted-foreground hover:text-primary transition-colors text-lg">Download V2.0</Link></li>
                <li><Link href="/aa-whatsapp-features" className="text-muted-foreground hover:text-primary transition-colors text-lg">Features</Link></li>
                <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-lg">Blog & Guides</Link></li>
                <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-lg">FAQ</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-bold font-display tracking-tight text-white">Legal</h4>
              <ul className="space-y-4">
                <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-lg">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-lg">Terms of Service</Link></li>
                <li><Link href="/dmca" className="text-muted-foreground hover:text-primary transition-colors text-lg">DMCA</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-lg">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-muted-foreground font-medium text-lg">
              &copy; {new Date().getFullYear()} AA Mods (AA WhatsApp). All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="https://t.me/AA_ModsOfficial" className="text-muted-foreground hover:text-primary transition-colors font-bold text-lg">Telegram</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-bold text-lg">Twitter</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-bold text-lg">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}