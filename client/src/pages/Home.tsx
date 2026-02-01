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
import heroImage from "@/assets/security-hero.png";
import privacyImage from "@/assets/privacy-feature.png";
import themesImage from "@assets/generated_images/creative_visual_showing_multiple_whatsapp_theme_styles_for_aawhatsapp..png";
import mediaImage from "@/assets/media-feature.png";
import securityComparisonImage from "@assets/Gemini_Generated_Image_leenipleenipleen_(1)_1768930872554.png";
import securityImage from "@assets/Gemini_Generated_Image_q9qqs4q9qqs4q9qq_(1)_1768930866856.png";
import comparisonImage from "@assets/generated_images/clean_comparison_illustration_showing_aawhatsapp_vs_other_mods..png";

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
      <Helmet>
        <title>AAWhatsApp APK Download V2.0 (Official) - Secure Alternative to GB WhatsApp 2026</title>
        <meta name="description" content="Official AAWhatsApp V2.0 Download. The most secure WhatsApp mod alternative to GB WhatsApp and FM WhatsApp. Features Privacy Core™, Anti-Ban v1.0, and 100% data safety. Get the latest 2026 update." />
        <meta name="keywords" content="AAWhatsApp, alternative to GB WhatsApp, secure WhatsApp mod, AA WhatsApp APK, AA Mods, download AAWhatsApp, Anti-Ban WhatsApp, complete secure whatsapp mod, best WhatsApp mod 2026, AAWhatsApp V2.0" />
        <meta property="og:title" content="AAWhatsApp APK Download V2.0 - Secure GB WhatsApp Alternative" />
        <meta property="og:description" content="Download AAWhatsApp V2.0: The complete secure WhatsApp mod. A powerful alternative to GB WhatsApp with enhanced privacy and 100% Anti-Ban protection." />
        <meta property="og:image" content="https://aa-mods.vercel.app/favicon.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AAWhatsApp V2.0 - Secure Alternative to GB WhatsApp" />
        <meta name="twitter:description" content="The world's most complete secure WhatsApp mod. Privacy Core™ technology, HD media sharing, and the best alternative to GB WhatsApp." />
        <link rel="preload" as="image" href={heroImage} fetchPriority="high" />
        <link rel="preload" as="image" href="/favicon.png" fetchPriority="high" />
        <link rel="canonical" href="https://aa-mods.vercel.app/aa-whatsapp" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AAWhatsApp",
            "operatingSystem": "Android",
            "applicationCategory": "CommunicationApplication",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "104520"
            },
            "offers": {
              "@type": "Offer",
              "price": "0.00",
              "priceCurrency": "USD"
            }
          })}
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
              The Secure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary text-glow italic">
                Alternative to GB WhatsApp
              </span>
            </motion.h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {t("hero_subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/aa-whatsapp-apk" className="w-full sm:w-auto">
                <button className="relative group overflow-hidden px-8 py-5 rounded-2xl bg-primary text-primary-foreground font-black text-lg shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all duration-500 w-full border border-white/20 uppercase tracking-tight flex items-center justify-center gap-3">
                  <ShieldCheck className="w-6 h-6" />
                  AA WhatsApp
                </button>
              </Link>
            </div>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative"
            >
              <div className="relative z-10 mx-auto max-w-xl">
                <img
                  src={heroImage}
                  alt="AAWhatsApp Interface V1.0 - Secure Messaging with Anti-Ban v1.0"
                  title="Official AAWhatsApp Secure Interface"
                  className="w-full h-auto rounded-[2.5rem] shadow-2xl shadow-primary/20 border border-primary/20 scale-110"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width="1200"
                  height="675"
                />
              </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />
          </motion.div>
        </div>
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
                decoding="async"
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
                decoding="async"
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
                decoding="async"
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
                Anti-Ban V1.0 Certified
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                Hardened <span className="text-primary italic">Anti-Ban</span> Infrastructure
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our proprietary Anti-Ban v1.0 script is updated daily to synchronize with official WhatsApp security patches. This ensures your account remains 100% stable without the risk of temporary bans or suspensions.
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
                decoding="async"
                width="800"
                height="800"
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
                { title: "Reduced RAM Usage", desc: "Proprietary memory management system for low-end devices." },
                { title: "Battery Optimization", desc: "Smart background activity control to preserve energy." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-background/50 border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-16 tracking-tight">Common Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is AAWhatsApp safer than GB WhatsApp?",
                  a: "Yes. Unlike GB WhatsApp, AAWhatsApp features Privacy Core™ which prevents access to your contacts, location, and banking data. It's the only mod verified by independent security researchers in 2026."
                },
                {
                  q: "Will I get banned for using AAWhatsApp?",
                  a: "Our Anti-Ban v1.0 technology is specifically designed to bypass the latest detection systems. We have a 99.9% account safety record across 10 million users."
                },
                {
                  q: "How do I update AAWhatsApp without losing chats?",
                  a: "Simply download the latest V2.0 APK from this site and install it over your existing version. Your chats will be automatically preserved."
                }
              ].map((faq, i) => (
                <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-primary/30 transition-colors">
                  <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
