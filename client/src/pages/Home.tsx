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
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { FeatureCard } from "@/components/FeatureCard";
import { DownloadCard } from "@/components/DownloadCard";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "wouter";
import { useTranslation } from "@/hooks/useTranslation";
import { DownloadTunnel } from "@/components/DownloadTunnel";
import { AdBlockDetector } from "@/components/AdBlockDetector";
import { AdPlaceholder } from "@/components/AdPlaceholder";

import heroImage from "@assets/generated_images/modern_professional_blog_hero_image_for_aawhatsapp_mod..png";
import privacyImage from "@assets/generated_images/futuristic_illustration_of_privacy_features_for_aawhatsapp..png";
import themesImage from "@assets/generated_images/creative_visual_showing_multiple_whatsapp_theme_styles_for_aawhatsapp..png";
import mediaImage from "@assets/generated_images/smartphone_mockup_displaying_aawhatsapp_media_sharing_features..png";
import securityComparisonImage from "@assets/Gemini_Generated_Image_leenipleenipleen_(1)_1768930872554.png";
import securityImage from "@assets/Gemini_Generated_Image_q9qqs4q9qqs4q9qq_(1)_1768930866856.png";
import comparisonImage from "@assets/generated_images/clean_comparison_illustration_showing_aawhatsapp_vs_other_mods..png";
import ctaImage from "@assets/generated_images/call-to-action_image_for_downloading_aawhatsapp_apk..png";
import logoImg from "@assets/Gemini_Generated_Image_72b2nh72b2nh72b2_1769103369360.png";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <AdBlockDetector />
      <Helmet>
        <title>AA Mods – Download AA WhatsApp APK 2026 | #1 Secure WhatsApp Mod</title>
        <link rel="preload" as="image" href={heroImage} fetchPriority="high" />
        <meta
          name="description"
          content="Download AA WhatsApp APK 2026 – the world's only secure WhatsApp mod without location or media permissions. Best GB WhatsApp alternative. Fast, safe & anti-ban v2.0."
        />
        <meta
          name="keywords"
          content="AA WhatsApp APK, AA WhatsApp Download, AA WhatsApp Mod APK, AA Mods APK, AA WhatsApp Latest Version, AA WhatsApp Official, AA WhatsApp Anti-Ban, WhatsApp Mod APK, GB WhatsApp Alternative, Secure WhatsApp Mod, Privacy WhatsApp Mod, WhatsApp Mod Without Location Permission, YOWhatsApp Download, FMWhatsApp APK, WhatsApp Plus 2026, Anti-Ban WhatsApp 2026, whatsapp mod 2026 download, safe whatsapp mod apk"
        />
        <meta
          property="og:title"
          content="AA Mods – Download AA WhatsApp APK 2026 | Secure & Private"
        />
        <meta
          property="og:description"
          content="Download AA WhatsApp APK 2026 – the world's only secure WhatsApp mod without location or media permissions. 100% safe & anti-ban."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-sm font-bold mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)] animate-pulse">
              <ShieldCheck className="w-4 h-4" />
              100% Secure: No Bank/Location Data Access
            </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-black font-display leading-[1.1] mb-8 tracking-tighter"
              >
                AAWhatsApp APK <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary text-glow italic">
                  {t('hero_title')}
                </span>
              </motion.h1>

              <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t('hero_subtitle')}
              </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <DownloadTunnel onComplete={() => window.location.href = "/aa-whatsapp-apk"} />
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
            <AdPlaceholder format="mobile" />
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
                alt="AAWhatsApp Interface"
                className="w-full h-auto rounded-[2rem] shadow-2xl shadow-primary/20"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width="1200"
                height="800"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>

        <div className="flex justify-center mt-20">
          <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
        </div>
        <AdPlaceholder format="leaderboard" className="mt-12" />
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

      {/* The Privacy Core - Unique Selling Point */}
      <section
        id="privacy-core"
        className="py-32 relative overflow-hidden bg-gradient-to-b from-background to-primary/5"
      >
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
                      whileInView={{ opacity: 1, y: 0 }}
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
                    No{" "}
                    <span className="text-destructive">"All Files Access"</span>{" "}
                    Required
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
                  <Button size="lg" className="shrink-0" asChild>
                    <a href="#download">Get Secure Download</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="compare" className="py-24 container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight leading-none">
              AAWhatsApp <br />
              <span className="text-primary italic">vs. The Rest</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Why settle for dangerous mods that steal your data? AAWhatsApp by AA Mods provides a 100% "Permission-Clean" infrastructure while keeping 100% of the advanced features.
            </p>
            <div className="space-y-4">
              {[
                "No bank account data collection protocols.",
                "Zero location tracking or GPS metadata harvesting.",
                "Privacy Core™ technology for 100% secure messaging.",
                "Fast, anti-ban, and optimized for Android 14+."
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
             <div className="glass-card rounded-[2rem] p-8 border border-primary/20 shadow-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />
                <img 
                  src={comparisonImage} 
                  alt="AAWhatsApp vs Other Mods" 
                  className="relative z-10 w-full h-auto rounded-xl"
                  loading="lazy"
                />
             </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 relative z-10">
        <div className="container mx-auto px-4 text-center space-y-12">
           <div className="max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Ready to <span className="text-primary">Upgrade?</span></h2>
              <p className="text-xl text-muted-foreground">Download the world's most secure WhatsApp mod today. Zero invasive permissions, 100% anti-ban.</p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <DownloadCard />
             <div className="glass-card rounded-[2rem] p-10 flex flex-col items-center justify-center border border-white/5 bg-white/[0.02]">
                <Send className="w-16 h-16 text-primary mb-6 animate-pulse" />
                <h3 className="text-2xl font-bold mb-4">Official Community</h3>
                <p className="text-muted-foreground mb-8">Join 50k+ users in our official Telegram for real-time updates and support.</p>
                <Button size="lg" variant="secondary" className="w-full h-14 text-lg font-bold rounded-xl" asChild>
                  <a href="https://t.me/AA_ModsOfficial" target="_blank" rel="noopener noreferrer">Join Official Telegram</a>
                </Button>
             </div>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-primary/5 relative z-10">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-black text-center mb-16 tracking-tighter uppercase">Frequently <span className="text-primary">Asked</span> Questions</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              {
                q: "Is AA WhatsApp really safe?",
                a: "Yes. AA WhatsApp is the world's first 'Permission-Clean' mod. We have surgically removed the code that requests location, bank, and invasive media access found in other mods."
              },
              {
                q: "Does it have anti-ban protection?",
                a: "Absolutely. Version 2.0 includes the latest hardened anti-ban script that masks your client as an official version during server-side verification."
              },
              {
                q: "How is it different from GB WhatsApp?",
                a: "AA WhatsApp provides all the features of GB WhatsApp but with a massive security upgrade. We prioritize your privacy by blocking 45+ invasive Android permissions."
              },
              {
                q: "Who is the developer of AA WhatsApp?",
                a: "AA WhatsApp is developed and maintained by the official AA Mods team led by Ahsan Ali Wadani."
              }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 bg-background/50 rounded-2xl px-6 overflow-hidden">
                <AccordionTrigger className="text-lg font-bold hover:no-underline py-6 tracking-tight">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
            <div className="flex flex-col items-center md:items-start gap-4">
               <div className="flex items-center gap-2">
                 <img src={logoImg} alt="AA Mods Logo" className="w-10 h-10 rounded-lg shadow-glow" />
                 <span className="text-2xl font-black tracking-tighter">AA MODS</span>
               </div>
               <p className="text-muted-foreground text-center md:text-left max-w-xs">Building the future of secure communication, one mod at a time.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-12">
               <div className="flex flex-col items-center md:items-start gap-4">
                 <span className="font-black text-xs uppercase tracking-[0.2em] text-primary">Navigate</span>
                 <ScrollLink to="privacy-core" smooth className="text-muted-foreground hover:text-primary cursor-pointer transition-colors font-medium">Privacy Core</ScrollLink>
                 <ScrollLink to="compare" smooth className="text-muted-foreground hover:text-primary cursor-pointer transition-colors font-medium">Comparison</ScrollLink>
                 <ScrollLink to="download" smooth className="text-muted-foreground hover:text-primary cursor-pointer transition-colors font-medium">Download</ScrollLink>
               </div>
               <div className="flex flex-col items-center md:items-start gap-4">
                 <span className="font-black text-xs uppercase tracking-[0.2em] text-primary">Legal</span>
                 <Link href="/privacy" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors font-medium">Privacy Policy</Link>
                 <Link href="/terms" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors font-medium">Disclaimer</Link>
                 <a href="https://t.me/AA_ModsOfficial" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors font-medium">Telegram</a>
               </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-center space-y-2">
            <p className="text-sm text-muted-foreground font-medium italic opacity-60">AA Mods official website © 2026</p>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black opacity-30">Security Hardened Infrastructure by AA Mods Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
