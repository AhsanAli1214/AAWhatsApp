import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  Lock,
  Palette,
  Download,
  CheckCircle2,
  XCircle,
  FileText,
  Users,
  ArrowRight,
  Info,
} from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import heroImage from "@assets/generated_images/modern_professional_blog_hero_image_for_aawhatsapp_mod..png";
import featuresImage from "@assets/generated_images/smartphone_mockup_displaying_aawhatsapp_media_sharing_features..png";
import privacyImage from "@assets/generated_images/futuristic_illustration_of_privacy_features_for_aawhatsapp..png";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Helmet>
        <title>About AA WhatsApp - Official Safety & Security Features 2026</title>
        <meta
          name="description"
          content="Discover why AA WhatsApp is the world's most secure WhatsApp mod. Explore our Privacy Core™ technology, Anti-Ban v2.0 protocols, and commitment to user safety."
        />
        <meta
          name="keywords"
          content="About AA WhatsApp, AA WhatsApp safety, secure WhatsApp features, AA Mods mission, anti-ban technology explained"
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/aa-whatsapp/about" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "About AA WhatsApp",
            "description": "In-depth look at AA WhatsApp features and security protocols.",
            "publisher": {
              "@type": "Organization",
              "name": "AA Mods"
            }
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="pt-32 pb-20 overflow-hidden">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-1 space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
                <Info className="w-4 h-4" />
                Who We Are
              </div>
              <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight leading-[1.1]">
                About{" "}
                <span className="text-primary text-glow">AA WhatsApp</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                AA WhatsApp is a powerful modified version of the official
                WhatsApp designed for users who want more features, enhanced
                privacy, and customization options.
              </p>
              <p className="text-base text-muted-foreground/80 leading-relaxed">
                Unlike the official app, AA WhatsApp provides unlimited media
                sharing, advanced privacy controls, and personalized themes,
                making it one of the most popular WhatsApp mods in 2026. Whether
                you want to hide your online status, protect chats, or send
                large files without limits, AA WhatsApp has you covered.
              </p>
              <div className="grid grid-cols-2 gap-4 py-4">
                <div className="p-4 rounded-2xl bg-secondary/30 border border-white/5">
                  <h4 className="font-bold text-primary">50M+</h4>
                  <p className="text-xs text-muted-foreground">Active Users</p>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/30 border border-white/5">
                  <h4 className="font-bold text-primary">2026</h4>
                  <p className="text-xs text-muted-foreground">Latest Update</p>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="/download">
                  <Button
                    size="lg"
                    className="rounded-xl px-6 h-12 text-lg font-bold shadow-md shadow-primary/15"
                  >
                    Download Now <Download className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 relative"
            >
              <img
                src={heroImage}
                alt="About AA WhatsApp"
                className="rounded-[3rem] shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-10 -left-10 bg-background/80 backdrop-blur-xl border border-primary/20 p-8 rounded-[2.5rem] shadow-2xl hidden md:block">
                <p className="text-primary font-black text-4xl mb-1">#1</p>
                <p className="text-muted-foreground font-bold">Mod of 2026</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-secondary/10 py-24 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                Why Choose <span className="text-primary">AA WhatsApp?</span>
              </h2>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                Choosing AA WhatsApp over the official WhatsApp or other mods
                comes with many advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Advanced Privacy",
                  desc: "Hide online status, blue ticks, typing indicator. Control profile visibility and anti-delete messages.",
                  icon: Lock,
                  color:
                    "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
                },
                {
                  title: "Unlimited Media",
                  desc: "Send videos up to 700MB+, share high-res images without compression, and send 30+ images at once.",
                  icon: Zap,
                  color: "bg-primary/10 text-primary border-primary/20",
                },
                {
                  title: "Customization",
                  desc: "Personalize with custom themes, fonts, chat bubbles, and colors. Unique UI tailored to your style.",
                  icon: Palette,
                  color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
                },
                {
                  title: "Enhanced Security",
                  desc: "In-app chat lock (PIN/Fingerprint). Anti-ban technology ensures your account is safer than most mods.",
                  icon: ShieldCheck,
                  color:
                    "bg-purple-500/10 text-purple-500 border-purple-500/20",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-[2.5rem] border border-white/5 hover:border-primary/30 transition-all group"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${feature.color} group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                AA WhatsApp vs <span className="text-primary">Official</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                While the official WhatsApp is reliable, it has limitations that
                AA WhatsApp solves.
              </p>
            </div>

            <div className="glass-card rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
              <Table>
                <TableHeader className="bg-secondary/50">
                  <TableRow className="border-white/10">
                    <TableHead className="py-6 px-8 text-xl font-bold">
                      Feature
                    </TableHead>
                    <TableHead className="py-6 px-8 text-xl font-bold text-center">
                      AA WhatsApp
                    </TableHead>
                    <TableHead className="py-6 px-8 text-xl font-bold text-center">
                      Official WhatsApp
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      f: "Privacy Controls",
                      aa: true,
                      off: false,
                      label: "Advanced",
                    },
                    {
                      f: "Media Sharing",
                      aa: true,
                      off: false,
                      label: "Unlimited",
                    },
                    {
                      f: "Themes & Customization",
                      aa: true,
                      off: false,
                      label: "Yes",
                    },
                    {
                      f: "Anti-Delete Messages",
                      aa: true,
                      off: false,
                      label: "Yes",
                    },
                    { f: "In-App Lock", aa: true, off: false, label: "Yes" },
                  ].map((row, i) => (
                    <TableRow
                      key={i}
                      className="border-white/5 hover:bg-white/[0.02] transition-colors"
                    >
                      <TableCell className="py-6 px-8 font-bold text-lg">
                        {row.f}
                      </TableCell>
                      <TableCell className="py-6 px-8 text-center">
                        <div className="flex flex-col items-center gap-1">
                          <CheckCircle2 className="w-7 h-7 text-primary" />
                          <span className="text-xs font-black text-primary uppercase">
                            {row.label}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="py-6 px-8 text-center opacity-40">
                        <div className="flex flex-col items-center gap-1">
                          <XCircle className="w-7 h-7 text-muted-foreground" />
                          <span className="text-xs font-black uppercase">
                            Limited/No
                          </span>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-24 bg-primary/5 relative">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-4xl md:text-6xl font-black tracking-tight">
                  Safety of{" "}
                  <span className="text-primary text-glow">AA WhatsApp</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    AA WhatsApp is safe when downloaded from trusted websites
                    and when you avoid third-party cracked APKs.
                  </p>
                  <div className="grid gap-4">
                    {[
                      "End-to-End Encryption preserved",
                      "Anti-ban technology v1.0 included",
                      "Regular security patches & updates",
                      "Privacy Core™ blocks invasive trackers",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-background/40 border border-white/5"
                      >
                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                        <span className="font-bold text-lg">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-bold">
                    Pro Tip: Always backup your chats before installing or
                    updating AA WhatsApp.
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
                  src={privacyImage}
                  alt="AA WhatsApp Safety"
                  className="rounded-[3rem] shadow-2xl border border-white/10"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Who Should Use */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tight">
              Who Should Use <span className="text-primary">AA WhatsApp?</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  t: "Privacy Seekers",
                  d: "Want more control than official app.",
                  i: Lock,
                },
                {
                  t: "Style Enthusiasts",
                  d: "Love to customize themes & UI.",
                  i: Palette,
                },
                {
                  t: "Media Heavy Users",
                  d: "Need to send large files & 100+ images.",
                  i: Zap,
                },
                {
                  t: "Safety First Users",
                  d: "Want anti-ban mod with security.",
                  i: ShieldCheck,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-[2rem] bg-secondary/20 border border-white/5 flex flex-col items-center"
                >
                  <item.i className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{item.t}</h3>
                  <p className="text-muted-foreground text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 container mx-auto px-4">
          <div className="glass-card rounded-[4rem] p-12 md:p-20 text-center border border-primary/30 relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-emerald-900/20">
            <div className="relative z-10 max-w-3xl mx-auto space-y-10">
              <h2 className="text-4xl md:text-7xl font-black font-display tracking-tight leading-none">
                Get the{" "}
                <span className="text-primary text-glow">Latest Version</span>{" "}
                2026
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Stay updated for bug fixes, security patches, and the fastest
                performance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link href="/download" className="w-full sm:w-auto">
                  <button className="px-12 py-6 rounded-3xl bg-primary text-primary-foreground font-black text-2xl shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] hover:-translate-y-1 transition-all w-full flex items-center justify-center gap-4 group">
                    Download Now{" "}
                    <ArrowRight className="group-hover:translate-x-2 transition-transform w-8 h-8" />
                  </button>
                </Link>
                <Link href="/faq" className="w-full sm:w-auto">
                  <button className="px-12 py-6 rounded-3xl bg-secondary/50 backdrop-blur-sm border border-white/10 hover:border-primary/30 text-foreground font-bold text-xl transition-all w-full h-full">
                    Read FAQs
                  </button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground uppercase tracking-[0.3em] font-black">
                Official AA Mods Release • 100% Secure
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
