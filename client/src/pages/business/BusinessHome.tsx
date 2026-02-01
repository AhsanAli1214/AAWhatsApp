import { Helmet } from "react-helmet";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Briefcase,
  Shield,
  Download,
  CheckCircle2,
  Star,
  Users,
  MessageSquare,
  Clock,
  Bot,
  BarChart3,
  Tags,
  Smartphone,
  ArrowRight,
  Zap,
  Globe,
  Lock,
  ChevronDown,
  Database,
  ShieldCheck,
  Send,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { Footer } from "@/components/Footer";
import { AdsBanner } from "@/components/AdsBanner";

import heroImage from "@/assets/business-hero.png";
import analyticsImage from "@/assets/business-analytics.png";
import automationImage from "@/assets/business-automation.png";
import securityImage from "@/assets/security-hero.png";
import privacyImage from "@/assets/privacy-feature.png";
import businessPerson from "@/assets/business-person.jpg";
import businessBg from "@/assets/business-bg.jpg";

function AdsBanner() { return null; }

export default function BusinessHome() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-blue-500/30">
      <Helmet>
  {
    icon: Bot,
    title: "Auto Reply",
    description: "Set up automatic responses for when you're away or busy",
  },
  {
    icon: Tags,
    title: "Customer Labels",
    description: "Organize contacts with custom labels and categories",
  },
  {
    icon: BarChart3,
    title: "Message Statistics",
    description: "Track message delivery, read rates, and response times",
  },
  {
    icon: Clock,
    title: "Scheduled Messages",
    description: "Schedule messages to be sent at specific times",
  },
  {
    icon: MessageSquare,
    title: "Quick Replies",
    description: "Save and reuse frequently sent messages",
  },
  {
    icon: Globe,
    title: "Catalog Support",
    description: "Showcase your products and services directly in chat",
  },
];

const stats = [
  { value: "5M+", label: "Business Users" },
  { value: "4.9/5", label: "User Rating" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

const comparisonData = [
  {
    feature: "Auto Reply System",
    aaBusiness: true,
    official: true,
    gbBusiness: true,
  },
  {
    feature: "Anti-Ban Protection",
    aaBusiness: true,
    official: false,
    gbBusiness: false,
  },
  {
    feature: "Custom Themes",
    aaBusiness: true,
    official: false,
    gbBusiness: true,
  },
  {
    feature: "Message Scheduler",
    aaBusiness: true,
    official: false,
    gbBusiness: true,
  },
  {
    feature: "Privacy Core",
    aaBusiness: true,
    official: false,
    gbBusiness: false,
  },
  {
    feature: "No Bank Data Access",
    aaBusiness: true,
    official: true,
    gbBusiness: false,
  },
  {
    feature: "Dual Accounts",
    aaBusiness: true,
    official: false,
    gbBusiness: true,
  },
  {
    feature: "Regular Updates",
    aaBusiness: true,
    official: true,
    gbBusiness: false,
  },
];

export default function BusinessHome() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-blue-500/30">
      <Helmet>
        <title>
          AA Business WhatsApp APK Download V1.0 - Secure Alternative to Official Business 2026
        </title>
        <meta
          name="description"
          content="Download AA Business WhatsApp APK V1.0. The complete secure WhatsApp mod for businesses. Alternative to GB Business with enterprise tools, Anti-Ban v1.0, and Privacy Core™ security."
        />
        <meta
          name="keywords"
          content="AA Business WhatsApp, alternative to GB Business, complete secure whatsapp mod, Business WhatsApp Mod, WhatsApp Business APK, Auto Reply WhatsApp, AA Business Download, professional whatsapp mod"
        />
        <meta
          property="og:title"
          content="AA Business WhatsApp V1.0 - Secure Alternative to GB Business"
        />
        <meta
          property="og:description"
          content="The complete secure WhatsApp mod for businesses. A powerful alternative to GB Business with automation, analytics, and Anti-Ban v1.0."
        />
        <meta
          property="og:image"
          content="https://aa-mods.vercel.app/favicon.png"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://aa-mods.vercel.app/aa-business" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "AA Business WhatsApp",
            operatingSystem: "Android",
            applicationCategory: "BusinessApplication",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "52300",
            },
            offers: {
              "@type": "Offer",
              price: "0.00",
              priceCurrency: "USD",
            },
          })}
        </script>
      </Helmet>

      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none z-0" />
      <BusinessNavbar />

      <section className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 container mx-auto px-4 md:px-6">
        <div className="absolute inset-0 -z-20">
          <img
            src={businessBg}
            alt="Business Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex flex-col items-center lg:items-start gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-500 text-sm font-bold shadow-[0_0_15px_rgba(59,130,246,0.2)] animate-pulse">
                <ShieldCheck className="w-4 h-4" />
                100% Secure - No Bank/Location Data Access
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-black font-display leading-[1.1] mb-8 tracking-tighter"
            >
              The Complete <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 italic drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                Secure WhatsApp Mod
              </span>
            </motion.h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The ultimate WhatsApp mod for businesses. Manage customers,
              automate responses, and grow your business with advanced features.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/aa-business/download" className="w-full sm:w-auto">
                <button className="relative group overflow-hidden px-8 py-5 rounded-2xl bg-blue-500 text-white font-black text-lg shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all duration-500 w-full border border-white/20 uppercase tracking-tight flex items-center justify-center gap-3">
                  <Download className="w-6 h-6" />
                  Download APK V1.0
                </button>
              </Link>
              <a
                href="https://t.me/AaMods"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="relative group overflow-hidden px-8 py-5 rounded-2xl bg-transparent border-2 border-blue-500/50 text-blue-500 font-black text-lg hover:-translate-y-1 transition-all duration-500 w-full uppercase tracking-tight flex items-center justify-center gap-3 hover:bg-blue-500/10">
                  <Send className="w-6 h-6" />
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
            <div className="relative z-10 mx-auto max-w-xl">
              <img
                src={businessPerson}
                alt="AA Business WhatsApp Interface V1.0"
                className="w-full h-auto rounded-[2.5rem] shadow-2xl shadow-blue-500/20 border border-blue-500/20 scale-110"
                loading="eager"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] -z-10" />
          </motion.div>
        </div>
        <div className="mt-20">
          <AdsBanner />
        </div>
        <div className="flex justify-center mt-20">
          <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce" />
        </div>
      </section>

      <section className="py-12 relative z-10">
        <div className="container mx-auto px-4">
          <AdsBanner />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-[3rem] -z-10 group-hover:bg-blue-500/10 transition-colors duration-700" />
            <div className="glass-card rounded-[2.5rem] p-8 md:p-12 border border-blue-500/10 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

              <div className="flex-1 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-black uppercase tracking-[0.3em]">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Business Protocol Active
                </div>
                <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter leading-none">
                  AA Business{" "}
                  <span className="text-blue-500 italic">V 1.0</span>
                </h2>
                <p className="text-muted-foreground text-lg font-medium max-w-xl leading-relaxed">
                  The latest business-grade WhatsApp modification with
                  professional features for customer management and automated
                  communication.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                  {[
                    { label: "Update", value: "31/01/26" },
                    { label: "Base", value: "2.25.29.77" },
                    { label: "Status", value: "Verified" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 rounded-2xl bg-white/[0.03] border border-blue-500/10 flex flex-col items-center lg:items-start min-w-[120px]"
                    >
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-1">
                        {stat.label}
                      </span>
                      <span className="text-sm font-black text-blue-500 font-mono">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-px h-32 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent hidden lg:block" />

              <div className="shrink-0 flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-[2.5rem] bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-2xl shadow-blue-500/10">
                    <Briefcase className="w-14 h-14 text-blue-500" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-background border-2 border-blue-500 flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-black font-mono text-white mb-1 tracking-tight">
                    V 1.0
                  </p>
                  <p className="text-xs font-bold text-blue-500 uppercase tracking-[0.2em] opacity-70">
                    Business Edition
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container px-4 relative z-10 mb-16"></div>

      <section className="py-20 px-4 bg-blue-500/5">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Business <span className="text-blue-500">Features</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Everything you need to manage your business communications
              professionally
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-blue-500/10 hover:border-blue-500/30 transition-all hover:-translate-y-1 duration-300">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-blue-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <AdsBanner />
          </div>
        </div>
      </section>

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
                Smart <span className="text-blue-500">Analytics Dashboard</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Track every message, monitor delivery rates, and analyze
                response times. Get detailed insights into your business
                communication patterns.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Real-time Statistics</h4>
                    <p className="text-muted-foreground">
                      Monitor message delivery, read rates, and customer
                      engagement in real-time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Response Analytics</h4>
                    <p className="text-muted-foreground">
                      Track average response times and identify peak
                      communication hours.
                    </p>
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
                src={analyticsImage}
                alt="AA Business WhatsApp Analytics Dashboard"
                className="rounded-3xl shadow-2xl border border-blue-500/20 w-full"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 p-6 bg-background border border-blue-500/30 rounded-2xl shadow-xl hidden md:block">
                <p className="text-blue-500 font-bold text-xl">V1.0 Ready</p>
                <p className="text-sm text-muted-foreground">Base 2.25.29.77</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-2 space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Powerful <span className="text-blue-500">Automation</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Automate your business responses with smart auto-reply, message
                scheduling, and quick reply templates. Never miss a customer
                inquiry.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Auto Reply System",
                  "Message Scheduler",
                  "Quick Templates",
                  "Away Messages",
                  "Greeting Messages",
                  "Custom Triggers",
                ].map((feat) => (
                  <li
                    key={feat}
                    className="flex items-center gap-2 text-foreground font-medium"
                  >
                    <Zap className="w-4 h-4 text-blue-500" />
                    {feat}
                  </li>
                ))}
              </ul>
              <Link href="/aa-business/features">
                <Button
                  size="lg"
                  className="rounded-full px-8 text-lg font-bold bg-blue-500 hover:bg-blue-600"
                >
                  Explore Features
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
              <img
                src={automationImage}
                alt="AA Business WhatsApp Automation Features"
                className="rounded-3xl shadow-2xl border border-blue-500/20 w-full"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-black">
                <ShieldCheck className="w-4 h-4" />
                Anti-Ban V1.0 Certified
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                Enterprise-Grade{" "}
                <span className="text-blue-500 italic">Security</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our proprietary Anti-Ban v1.0 technology protects your business
                account. Combined with Privacy Core, your business data stays
                completely secure.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                  <h4 className="text-blue-500 font-black text-2xl mb-1">
                    0.1%
                  </h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    Ban Rate 2026
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                  <h4 className="text-blue-500 font-black text-2xl mb-1">
                    Daily
                  </h4>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">
                    Security Updates
                  </p>
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
                alt="AA Business WhatsApp Security Technology"
                className="rounded-3xl shadow-2xl border border-blue-500/20 w-full"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <AdsBanner />

      <section className="py-24 bg-blue-500/5">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              How We <span className="text-blue-500">Compare</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              See why AA Business WhatsApp is the best choice for your business
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-background rounded-2xl border border-blue-500/20 overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-4 bg-blue-500/10 font-bold text-sm">
                <div>Feature</div>
                <div className="text-center text-blue-500">AA Business</div>
                <div className="text-center">Official Business</div>
                <div className="text-center">GB Business</div>
              </div>
              {comparisonData.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 gap-4 p-4 border-t border-border/50"
                >
                  <div className="text-sm">{row.feature}</div>
                  <div className="flex justify-center">
                    {row.aaBusiness ? (
                      <CheckCircle2 className="text-blue-500 w-5 h-5" />
                    ) : (
                      <XCircle className="text-destructive w-5 h-5" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.official ? (
                      <CheckCircle2 className="text-blue-500 w-5 h-5" />
                    ) : (
                      <XCircle className="text-destructive w-5 h-5" />
                    )}
                  </div>
                  <div className="flex justify-center">
                    {row.gbBusiness ? (
                      <CheckCircle2 className="text-blue-500 w-5 h-5" />
                    ) : (
                      <XCircle className="text-destructive w-5 h-5" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">
              Ready to Scale Your{" "}
              <span className="text-blue-500 italic">Business?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of businesses already using AA Business WhatsApp to
              manage their customer relationships securely.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/aa-business/download" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="px-12 py-8 rounded-2xl bg-blue-500 hover:bg-blue-600 text-white font-black text-xl shadow-2xl shadow-blue-500/20"
                >
                  Download APK Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
