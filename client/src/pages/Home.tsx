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

import heroImage from "@assets/generated_images/modern_professional_blog_hero_image_for_aawhatsapp_mod..png";
import privacyImage from "@assets/generated_images/futuristic_illustration_of_privacy_features_for_aawhatsapp..png";
import themesImage from "@assets/generated_images/creative_visual_showing_multiple_whatsapp_theme_styles_for_aawhatsapp..png";
import mediaImage from "@assets/generated_images/smartphone_mockup_displaying_aawhatsapp_media_sharing_features..png";
import securityComparisonImage from "@assets/Gemini_Generated_Image_leenipleenipleen_(1)_1768930872554.png";
import securityImage from "@assets/Gemini_Generated_Image_q9qqs4q9qqs4q9qq_(1)_1768930866856.png";
import comparisonImage from "@assets/generated_images/clean_comparison_illustration_showing_aawhatsapp_vs_other_mods..png";
import ctaImage from "@assets/generated_images/call-to-action_image_for_downloading_aawhatsapp_apk..png";
import logoImg from "@assets/Gemini_Generated_Image_72b2nh72b2nh72b2_1769103369360.png";

import { AdPlaceholder } from "@/components/AdPlaceholder";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Helmet>
        <title>AA Mods – Download AA WhatsApp APK | Secure WhatsApp Mod</title>
        <meta name="description" content="Download AA WhatsApp APK – a secure WhatsApp mod without location or media permissions. Best GB WhatsApp alternative. Fast, safe & anti-ban." />
        <meta name="keywords" content="AA WhatsApp APK, AA WhatsApp Download, AA WhatsApp Mod APK, AA Mods APK, WhatsApp Mod APK, GB WhatsApp Alternative, Secure WhatsApp Mod, Privacy WhatsApp Mod, WhatsApp Mod Without Location Permission" />
        <meta property="og:title" content="AA Mods – Download AA WhatsApp APK | Secure WhatsApp Mod" />
        <meta property="og:description" content="Download AA WhatsApp APK – a secure WhatsApp mod without location or media permissions. Best GB WhatsApp alternative. Fast, safe & anti-ban." />
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

            <h1 className="text-5xl lg:text-7xl font-bold font-display leading-[1.1] mb-6 tracking-tight">
              AAWhatsApp APK by AA Mods – <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary text-glow">
                100% Secure WhatsApp Mod
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Get all GBWhatsApp features with{" "}
              <span className="text-primary font-semibold">
                Zero Data Risk.
              </span>{" "}
              Unlike other mods, we never access your files, location, or bank
              accounts.
            </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <ScrollLink
                    to="download"
                    smooth={true}
                    offset={-100}
                    className="w-full sm:w-auto"
                  >
                    <button className="relative group overflow-hidden px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:-translate-y-1 active:scale-95 transition-all duration-300 w-full border border-primary/20">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Zap className="w-6 h-6 fill-current" />
                        Download AAWhatsApp APK
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </ScrollLink>
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
                <div className="mt-8 max-w-md">
                   <AdPlaceholder format="mobile" slot="hero_bottom" />
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
                alt="AAWhatsApp Interface"
                className="w-full h-auto rounded-[2rem] shadow-2xl shadow-primary/20"
                loading="eager"
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
      </section>

      <div className="container mx-auto px-4">
        <AdPlaceholder format="leaderboard" slot="home_top" />
      </div>

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

      <div className="container mx-auto px-4">
        <AdPlaceholder format="rectangle" slot="home_middle" />
      </div>

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

      {/* Features Grid */}
      <section id="features" className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Why AAWhatsApp is the Best WhatsApp Mod?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've packed the most requested features into a lightweight,
              stable package that keeps you safe and private.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Ghost}
              title="Privacy Suite"
              description="Hide online status, second ticks, and 'typing...' indicators. View deleted messages with anti-revoke and save statuses directly."
              delay={0.1}
            />
            <FeatureCard
              icon={Shield}
              title="Security & Anti-Ban"
              description="Advanced anti-ban engine reduces suspension risk. Built-in app lock (PIN/fingerprint) for app and individual chats."
              delay={0.2}
            />
            <FeatureCard
              icon={Palette}
              title="Full UI Control"
              description="1000s of themes, custom fonts, bubble styles, and animations. Dark/light modes and vibrant skins for a unique interface."
              delay={0.3}
            />
            <FeatureCard
              icon={Zap}
              title="Pro Media Sharing"
              description="Send 1GB+ videos and 100+ high-definition images at once with minimal compression. Perfect for large documents."
              delay={0.4}
            />
            <FeatureCard
              icon={MessageSquare}
              title="Business Assistant"
              description="Auto-reply for busy hours and message scheduling. DND mode to cut data for WhatsApp while staying connected on other apps."
              delay={0.5}
            />
            <FeatureCard
              icon={Lock}
              title="Group & Broadcast"
              description="High limits for pinned chats and group members (hundreds). Broadcast messages to unlimited contacts effortlessly."
              delay={0.6}
            />
          </div>
        </div>
      </section>

      {/* Detailed Info Sections */}
      <section id="about" className="py-24 relative z-10 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 tracking-tight">
                Superior Architecture,{" "}
                <span className="text-primary text-glow">Ultimate Freedom</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AAWhatsApp isn't just a mod; it's a statement. Engineered for
                those who refuse to settle for the standard app's limitations or
                other mods' privacy compromises.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="glass-card p-8 rounded-3xl border border-white/5 bg-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is to provide a messaging environment that respects
                your privacy and gives you total creative control. We believe
                you should be able to communicate without the artificial limits
                of the official app, whether that's sharing high-quality 1GB+
                videos or customizing every pixel of your chat interface.
              </p>
            </div>
            <div className="glass-card p-8 rounded-3xl border border-white/5 bg-secondary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Core Benefits
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>
                    Enhanced Stealth: Read messages and view statuses invisibly.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>
                    Uncompressed Media: Send photos and videos in full original
                    quality.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <span>
                    Superior Anti-Ban: Regularly updated engine to keep your
                    account safe.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
                Advanced Privacy Features
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <span className="text-foreground font-bold">
                    Hide Read Receipts & Status:
                  </span>{" "}
                  AAWhatsApp lets you hide your online status, second (blue)
                  ticks, and even the "typing..." and "recording..." indicators.
                  You get both global options (freeze last seen) and selective
                  privacy toggles for specific contacts.
                </p>
                <p>
                  <span className="text-foreground font-bold">
                    View Deleted Messages:
                  </span>{" "}
                  With the built-in anti-revoke feature, you can see messages
                  your friends delete. It also includes a game-changing status
                  downloader to save photos and videos directly.
                </p>
                <p>
                  <span className="text-foreground font-bold">
                    In-App Chat Lock:
                  </span>{" "}
                  Secure your app and individual chats with a built-in PIN or
                  fingerprint lock, adding an extra security layer without
                  third-party apps.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src={privacyImage}
                alt="Privacy Features"
                className="w-full h-auto rounded-3xl shadow-xl border border-white/5"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </motion.div>
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src={securityComparisonImage}
                alt="AAWhatsApp Security Advantage"
                className="w-full h-auto rounded-3xl shadow-xl border border-white/5"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
                Privacy First:{" "}
                <span className="text-primary">No Risky Permissions</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Unlike GBWhatsApp, FMWhatsApp, and other mods that force you
                  to grant
                  <span className="text-foreground font-bold">
                    {" "}
                    "Manage All Files"{" "}
                  </span>
                  permissions, AAWhatsApp respect your data.
                </p>
                <p>
                  Most mods won't even start without this dangerous permission,
                  which allows them to read, modify, and delete every file on
                  your phone.
                  <span className="text-primary font-bold">
                    {" "}
                    AAWhatsApp runs smoothly{" "}
                  </span>
                  without ever asking for this access.
                </p>
                <p>
                  Your photos, documents, and personal files remain private and
                  untouched. Security isn't just a feature; it's our foundation.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={securityImage}
                alt="Security & Anti-Ban"
                className="w-full h-auto rounded-3xl shadow-xl border border-white/5"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
                Chat & Messaging Tools
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  <span className="text-foreground font-bold">
                    Auto-Reply & Scheduler:
                  </span>{" "}
                  Set automated replies for orders or schedule messages for
                  birthdays and meetings. It works as a mini-business assistant
                  for your busy lifestyle.
                </p>
                <p>
                  <span className="text-foreground font-bold">
                    Do Not Disturb (DND):
                  </span>{" "}
                  Disable WhatsApp's internet connection only, allowing you to
                  use other apps without being disturbed by incoming messages.
                </p>
                <p>
                  <span className="text-foreground font-bold">
                    Broadcast & Group Tools:
                  </span>{" "}
                  Pin up to 100 chats, send broadcast messages to unlimited
                  contacts, and manage large group chats with hundreds of
                  members.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
                File & Media Sharing
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  AAWhatsApp matches or exceeds the highest limits in the mod
                  world. Send up to{" "}
                  <span className="text-primary font-bold">90 photos</span> or{" "}
                  <span className="text-primary font-bold">
                    1GB+ video clips
                  </span>{" "}
                  at once without the heavy compression found in the official
                  app.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Bulk Media: Send 100+ images in a single message.</li>
                  <li>
                    High-Quality: Shared files retain their original clarity and
                    resolution.
                  </li>
                  <li>
                    Status Download: Save friends' status updates and view "view
                    once" media even after it expires.
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={mediaImage}
                alt="Media Sharing"
                className="w-full h-auto rounded-3xl shadow-xl border border-white/5"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </motion.div>
          </div>

          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src={themesImage}
                alt="Customization & Themes"
                className="w-full h-auto rounded-3xl shadow-xl border border-white/5"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8">
                Customization & Themes
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Express yourself with a truly unique interface. AAWhatsApp
                  gives you access to thousands of themes from the built-in
                  store, plus deep customization for every element.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Store: Access 4000+ custom themes for free.</li>
                  <li>
                    Visual Control: Change fonts, bubble styles, and tick icons.
                  </li>
                  <li>
                    Aero Design: Experience a modern, fluid interface inspired
                    by Aero glass aesthetics.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              AAWhatsApp vs Others
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how AAWhatsApp stacks up against the official app and other
              popular mods in 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 font-bold text-primary">Feature</th>
                    <th className="py-4 font-bold">Official</th>
                    <th className="py-4 font-bold text-primary">AAWhatsApp</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-white/5">
                    <td className="py-4">Anti-Delete Messages</td>
                    <td className="py-4">No</td>
                    <td className="py-4 text-primary font-bold">Yes</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4">Hide Online Status</td>
                    <td className="py-4">Limited</td>
                    <td className="py-4 text-primary font-bold">Elite</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4">Video Limit</td>
                    <td className="py-4">16MB</td>
                    <td className="py-4 text-primary font-bold">1GB+</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4">Themes</td>
                    <td className="py-4">2</td>
                    <td className="py-4 text-primary font-bold">4000+</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4">Anti-Ban Engine</td>
                    <td className="py-4">N/A</td>
                    <td className="py-4 text-primary font-bold">v2.0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={comparisonImage}
                alt="Comparison Table Graphic"
                className="w-full h-auto rounded-3xl shadow-xl border border-white/5"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative z-10 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is AAWhatsApp safe to use?</AccordionTrigger>
                <AccordionContent>
                  Yes, AAWhatsApp is built on a secure codebase that prioritizes
                  user privacy. Our unique Privacy Core™ strips invasive
                  permissions that other mods exploit, making it one of the
                  safest unofficial WhatsApp mods available in 2026.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Will I get banned?</AccordionTrigger>
                <AccordionContent>
                  While no mod is 100% immune, AAWhatsApp includes an advanced
                  Anti-Ban v2.0 engine that is regularly updated to stay ahead
                  of official app detection. We recommend always using the
                  latest version for maximum safety.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How do I update AAWhatsApp?</AccordionTrigger>
                <AccordionContent>
                  You should regularly check our official website for the latest
                  APK version. To update, simply download the new APK and
                  install it over your current version. Your chats will remain
                  intact.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Can I use it alongside the official WhatsApp?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, AAWhatsApp uses a different package name, allowing you to
                  run it alongside the official app or other mods like
                  GBWhatsApp on the same device with a different phone number.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="download" className="py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass-card rounded-[3rem] p-8 md:p-16 border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-emerald-900/20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <img
                src={ctaImage}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 leading-tight">
                Ready to Upgrade Your <br />
                <span className="text-primary">WhatsApp Experience?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Join millions of users who trust AAWhatsApp for their daily
                communication. Safe, fast, and feature-packed.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <DownloadCard />
                <a
                  href="http://t.me/ahsan_tech_hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <button className="w-full h-full min-h-[64px] px-8 rounded-2xl bg-[#0088cc] hover:bg-[#0088cc]/90 text-white font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-[#0088cc]/40">
                    <Send className="w-6 h-6" />
                    Join Telegram
                  </button>
                </a>
              </div>

              <p className="mt-8 text-sm text-muted-foreground flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Verified safe by AAWhatsApp Security Team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="AA Mods"
                className="w-8 h-8 rounded-lg object-contain bg-background"
              />
              <span className="text-xl font-bold font-display tracking-tighter">
                AA Mods
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground font-medium">
              <a
                href="http://t.me/ahsan_tech_hub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                <Send className="w-3 h-3" /> Telegram Updates
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Bug Report
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              © 2026 AA Mods. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
