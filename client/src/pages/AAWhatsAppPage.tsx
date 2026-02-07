import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import {
  ShieldCheck,
  Zap,
  Download,
  Lock,
  ShieldAlert,
  Ghost,
  Info,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "wouter";
import { PermissionSimulator } from "@/components/PermissionSimulator";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

import { useTranslation } from "@/hooks/useTranslation";
import { APP_VERSION_LOWER, APP_VERSIONS } from "@/config/appConfig";
import whatsappHero from "@/assets/security-hero-new.png";

export default function AAWhatsAppPage() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Helmet>
        <title>AAWhatsApp {APP_VERSIONS.aaWhatsApp} APK Download - Secure WhatsApp Mod 2026</title>
        <meta name="description" content={`Official AAWhatsApp ${APP_VERSIONS.aaWhatsApp}. The most complete secure WhatsApp mod for 2026. Featuring Privacy Core, Anti-Ban ${APP_VERSION_LOWER.aaWhatsApp}, and advanced stealth features.`} />
        <meta
          name="keywords"
          content={`AAWhatsApp APK, secure WhatsApp mod, alternative to GB WhatsApp, Download AAWhatsApp, AA WhatsApp ${APP_VERSIONS.aaWhatsApp}, Privacy WhatsApp, Anti-Ban WhatsApp 2026, FM WhatsApp alternative, best WhatsApp mod 2026, custom themes WhatsApp`}
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/aa-whatsapp/features" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preload" as="image" href={whatsappHero} fetchPriority="high" />
        <meta name="robots" content="index, follow" />
        <meta name="rating" content="general" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AA WhatsApp",
              "operatingSystem": "Android",
              "applicationCategory": "CommunicationApplication",
              "softwareVersion": "${APP_VERSION_LOWER.aaWhatsApp.replace("v", "")}",
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


      <main className="relative z-10 pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-8">
          <Button 
            variant="ghost" 
            onClick={() => setLocation("/")}
            className="hover:bg-primary/10 gap-2 text-muted-foreground hover:text-primary"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-16"
        >
          {/* H1 Header */}
          <section className="text-center space-y-6">
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-black font-display tracking-tighter leading-[1.1] mb-6"
            >
              AA WhatsApp <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary text-glow italic">
                {t('hero_title')}
              </span>
            </motion.h1>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-bold uppercase tracking-widest animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Build 3.0.26 - Stable
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              {t('hero_subtitle')}
            </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="/download" className="w-full sm:w-auto">
              <Button size="lg" className="w-full px-8 py-6 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-lg shadow-primary/15 transition-all flex items-center justify-center gap-2" data-testid="link-download-apk">
                <Download className="w-5 h-5" />
                Go to Download Page
              </Button>
            </Link>
          </div>
          </section>

          {/* Intro Text */}
          <section className="glass-card p-6 md:p-8 rounded-[1.5rem] border border-white/5 space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              What Is AA WhatsApp?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              AA WhatsApp is a next-generation WhatsApp mod designed for users
              who value privacy and security. Unlike GB WhatsApp, AA WhatsApp
              does NOT require location access or unnecessary media permissions.
              It provides a seamless experience with all the advanced features
              you expect from a high-quality mod, while maintaining a
              "Permission-Clean" infrastructure.
            </p>
          </section>

          <PermissionSimulator />

          <div className="max-w-[300px] mx-auto my-12">
          </div>

          {/* New Sections from SEO Guide */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold">
              AA WhatsApp Privacy & Permissions Explained
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The core philosophy of AA WhatsApp by AA Mods is "Minimum Access,
              Maximum Feature." We have surgically stripped the code responsible
              for background location data harvesting and unauthorized media
              access. This makes it the first truly privacy-friendly WhatsApp
              mod on the market.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  No Location Access
                </h3>
                <p className="text-sm text-muted-foreground">
                  Unlike other mods, we don't track your GPS coordinates.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  No Media Harvesting
                </h3>
                <p className="text-sm text-muted-foreground">
                  Your private photos and videos stay strictly on your device.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold">
              AA WhatsApp Anti-Ban Protection
            </h2>
          </section>

          <div className="max-w-[320px] mx-auto my-12">
          </div>

          <section className="space-y-8" id="how-to-download">
            <h2 className="text-3xl font-bold">
              How to Download & Install AA WhatsApp APK
            </h2>
            <div className="space-y-4">
              {[
                "Click the 'Download APK' button at the top of this page.",
                "Wait for the server to synchronize your secure download link.",
                "Enable 'Unknown Sources' in your Android security settings.",
                "Install the APK and verify your number as usual.",
                "Enjoy the safest WhatsApp mod experience available.",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-center p-4 bg-white/[0.02] rounded-xl border border-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary">
                    {i + 1}
                  </div>
                  <p className="text-muted-foreground font-medium">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SEO Optimized Features */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-center tracking-tighter">
              AA WhatsApp Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "No Location Permission",
                  desc: "Your real-time coordinates are never tracked or requested.",
                  icon: Ghost,
                },
                {
                  title: "No Media Access",
                  desc: "No invasive 'All Files Access' required to run the app.",
                  icon: XCircle,
                },
                {
                  title: "Anti-Ban Technology",
                  desc: "Advanced protocols to prevent account suspensions.",
                  icon: Zap,
                },
                {
                  title: "GB Features Included",
                  desc: "Anti-delete messages, status downloader, and more.",
                  icon: CheckCircle2,
                },
                {
                  title: "Lightweight & Fast",
                  desc: "Optimized for speed with minimal background battery usage.",
                  icon: Zap,
                },
                {
                  title: "Privacy-First",
                  desc: "Built by AA Mods with a security-hardened codebase.",
                  icon: ShieldCheck,
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-primary/20 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">✔ {f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Safter than GB Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center py-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">
                Why AA WhatsApp is Safer Than GB WhatsApp
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Most standard WhatsApp mods like GBWhatsApp and FMWhatsApp often
                include hidden data-collection modules that request "All Files
                Access" or background location tracking. AA WhatsApp surgically
                removes these invasive permissions while retaining the premium
                customization features.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                  <span>
                    <strong>AA WhatsApp:</strong> 100% Permission-Clean
                    infrastructure.
                  </span>
                </li>
                <li className="flex gap-3 text-sm">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                  <span>
                    <strong>Data Sovereignty:</strong> Messages stay on your
                    device only.
                  </span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-[2rem] border border-primary/20 bg-primary/5 text-center">
              <ShieldCheck className="w-20 h-20 text-primary mx-auto mb-6 opacity-40" />
              <h3 className="text-xl font-bold mb-2">Privacy Core Active</h3>
              <p className="text-sm text-muted-foreground">
                Version V 3.0 Security Protocols Enabled
              </p>
            </div>
          </section>

          {/* Comparison */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">
              AA WhatsApp vs GB WhatsApp Comparison
            </h2>
            <div className="grid lg:grid-cols-1 gap-8 items-start">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="py-4 px-6 text-left font-black text-primary uppercase tracking-widest text-xs">
                        Feature
                      </th>
                      <th className="py-4 px-6 text-left font-black text-primary uppercase tracking-widest text-xs">
                        AA WhatsApp
                      </th>
                      <th className="py-4 px-6 text-left font-black text-primary uppercase tracking-widest text-xs">
                        GB WhatsApp
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {[
                      {
                        f: "Location Permission",
                        aa: "Not Required",
                        gb: "Mandatory",
                      },
                      {
                        f: "Media Access",
                        aa: "Zero Invasive Access",
                        gb: "Full Disk Access",
                      },
                      { label: "Privacy", value: "Security Focused", gb: "Feature Focused" },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="py-4 px-6 font-bold">{row.f}</td>
                        <td className="py-4 px-6 text-primary font-medium">
                          {row.aa}
                        </td>
                        <td className="py-4 px-6 opacity-60">{row.gb}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section id="download" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-[4rem] -z-10" />
            <div className="max-w-3xl mx-auto text-center space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                  Ready for the <span className="text-primary italic">Ultimate</span> Privacy?
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Join 100,000+ users who trust AA Mods for their secure communication. 
                  Zero permissions, maximum security.
                </p>
              </div>

              <div className="glass-card p-12 rounded-[3.5rem] border border-primary/20 relative group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-primary text-primary-foreground font-bold text-xs uppercase tracking-[0.3em] shadow-xl">
                  Latest Build V 3.0
                </div>
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  {[
                    { label: "Version", value: "V 3.0" },
                    { label: "Base", value: "2.25.36.73" },
                    { label: "File Size", value: "118 MB" },
                    { label: "Android", value: "5.0+" }
                  ].map((spec, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{spec.label}</p>
                      <p className="text-xl font-black text-white">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <Link href="/download" className="w-full">
                  <Button size="lg" className="w-full py-8 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-black text-2xl shadow-2xl shadow-primary/30 transition-all flex items-center justify-center gap-4">
                    <Download className="w-8 h-8" />
                    GO TO DOWNLOAD PAGE
                  </Button>
                </Link>
                <p className="mt-8 text-xs text-muted-foreground font-medium">
                  By downloading, you agree to our Terms of Service.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">Malware Scanned</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                  <Lock className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">Encrypted Direct Link</span>
                </div>
              </div>
            </div>
          </section>

          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-muted-foreground uppercase tracking-widest opacity-40 text-center">
              AA Mods | Version V 3.0 | Base 2.25.36.73 | Build ID: PRO-2026-SEC
            </p>
          </div>

          <FAQSection />
          <div className="max-w-4xl mx-auto">
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
