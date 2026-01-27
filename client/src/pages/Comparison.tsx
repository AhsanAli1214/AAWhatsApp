import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  XCircle,
  Scale,
  ArrowRight,
  Info,
  Smartphone,
  Shield,
  Layout,
  Download
} from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

export default function Comparison() {
  const allModsComparison = [
    { feature: "Hide Online Status", aa: "✅", gb: "✅", fm: "✅", off: "❌" },
    { feature: "Anti-Delete Messages", aa: "✅", gb: "✅", fm: "❌", off: "❌" },
    { feature: "Themes & Customization", aa: "✅ Full", gb: "✅ Many", fm: "✅ Many", off: "❌" },
    { feature: "Media Size Limit", aa: "✅ Large", gb: "✅ Medium", fm: "✅ Medium", off: "❌" },
    { feature: "In-App Chat Lock", aa: "✅", gb: "✅", fm: "❌", off: "❌" },
    { feature: "Anti-Ban Technology", aa: "✅ Advanced", gb: "✅ Moderate", fm: "✅ Basic", off: "❌" },
    { feature: "Updates Frequency", aa: "✅ Regular", gb: "✅ Regular", fm: "✅ Moderate", off: "✅ Regular" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Helmet>
        <title>AA WhatsApp Comparison 2026 – GB WhatsApp, FM WhatsApp & Official WhatsApp</title>
        <meta name="description" content="Compare AA WhatsApp with GB WhatsApp, FM WhatsApp, and the official WhatsApp. Discover features, privacy, security, and which mod is best in 2026." />
        <meta name="keywords" content="WhatsApp mod comparison 2026, AA WhatsApp vs GB WhatsApp, best WhatsApp mod, AA WhatsApp vs FM WhatsApp, WhatsApp mod features" />
      </Helmet>
      
      <Navigation />

      <main className="pt-32 pb-20 overflow-hidden">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
              <Scale className="w-4 h-4" />
              2026 Comparison Guide
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight leading-tight">
              Compare <span className="text-primary text-glow">AA WhatsApp</span> with Others
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
              In 2026, users are looking for extra privacy and features that the official WhatsApp doesn't provide. This guide helps you choose the best mod for your needs.
            </p>
          </motion.div>
        </section>

        {/* Comparison Tables Section */}
        <section className="container mx-auto px-4 space-y-32 mb-32">
          {/* AA vs Official */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black tracking-tight flex items-center gap-3">
                <Smartphone className="text-primary w-8 h-8" /> AA vs Official
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AA WhatsApp provides more privacy, customization, and media freedom than the official WhatsApp, making it the best alternative in 2026.
              </p>
              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden">
                <Table>
                  <TableHeader className="bg-secondary/50">
                    <TableRow className="border-white/10">
                      <TableHead className="font-bold">Feature</TableHead>
                      <TableHead className="font-bold text-primary">AA WhatsApp</TableHead>
                      <TableHead className="font-bold">Official</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { f: "Privacy Controls", aa: "✅ Advanced", off: "❌ Limited" },
                      { f: "Themes", aa: "✅ Full", off: "❌ No" },
                      { f: "Media Sharing", aa: "✅ Unlimited", off: "❌ Limited" },
                      { f: "Anti-Delete", aa: "✅ Yes", off: "❌ No" },
                      { f: "In-App Lock", aa: "✅ Yes", off: "❌ No" },
                    ].map((row, i) => (
                      <TableRow key={i} className="border-white/5">
                        <TableCell className="font-bold">{row.f}</TableCell>
                        <TableCell className="text-primary font-bold">{row.aa}</TableCell>
                        <TableCell className="text-muted-foreground">{row.off}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="bg-primary/5 rounded-[3rem] p-12 border border-primary/10 flex flex-col justify-center h-full">
              <h3 className="text-3xl font-bold mb-4">The Verdict</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                If you want maximum control, privacy, and customization, AA WhatsApp is the perfect choice for 2026.
              </p>
            </div>
          </div>

          {/* AA vs GB */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2 space-y-6">
              <h2 className="text-4xl font-black tracking-tight flex items-center gap-3">
                <Layout className="text-primary w-8 h-8" /> AA vs GB WhatsApp
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Both are great mods, but AA WhatsApp is more stable, secure, and lightweight, making it the preferred choice for privacy-conscious users.
              </p>
              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden">
                <Table>
                  <TableHeader className="bg-secondary/50">
                    <TableRow className="border-white/10">
                      <TableHead className="font-bold">Feature</TableHead>
                      <TableHead className="font-bold text-primary">AA WhatsApp</TableHead>
                      <TableHead className="font-bold">GB WhatsApp</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { f: "Privacy", aa: "✅ Advanced", gb: "✅ Good" },
                      { f: "Themes", aa: "✅ Full", gb: "✅ Many" },
                      { f: "Media Sharing", aa: "✅ Unlimited", gb: "✅ Limited Video" },
                      { f: "Anti-Ban", aa: "✅ Advanced", gb: "❌ Issues" },
                      { f: "Performance", aa: "✅ Smooth", gb: "❌ Heavier" },
                    ].map((row, i) => (
                      <TableRow key={i} className="border-white/5">
                        <TableCell className="font-bold">{row.f}</TableCell>
                        <TableCell className="text-primary font-bold">{row.aa}</TableCell>
                        <TableCell className="text-muted-foreground">{row.gb}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="lg:order-1 bg-primary/5 rounded-[3rem] p-12 border border-primary/10 flex flex-col justify-center h-full">
              <h3 className="text-3xl font-bold mb-4">The Verdict</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                AA WhatsApp wins on stability and performance. It's built for those who value speed and minimal app footprint.
              </p>
            </div>
          </div>

          {/* AA vs FM */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-black tracking-tight flex items-center gap-3">
                <Shield className="text-primary w-8 h-8" /> AA vs FM WhatsApp
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AA WhatsApp is more privacy-focused and feature-rich than FM WhatsApp, while FM WhatsApp is ideal for basic modding.
              </p>
              <div className="glass-card rounded-3xl border border-white/10 overflow-hidden">
                <Table>
                  <TableHeader className="bg-secondary/50">
                    <TableRow className="border-white/10">
                      <TableHead className="font-bold">Feature</TableHead>
                      <TableHead className="font-bold text-primary">AA WhatsApp</TableHead>
                      <TableHead className="font-bold">FM WhatsApp</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      { f: "Privacy", aa: "✅ Full Control", fm: "✅ Moderate" },
                      { f: "Customization", aa: "✅ Unlimited", fm: "✅ Many" },
                      { f: "Media", aa: "✅ Large Files", fm: "✅ Good" },
                      { f: "Anti-Ban", aa: "✅ Advanced", fm: "✅ Basic" },
                      { f: "Performance", aa: "✅ Smooth", fm: "✅ Light" },
                    ].map((row, i) => (
                      <TableRow key={i} className="border-white/5">
                        <TableCell className="font-bold">{row.f}</TableCell>
                        <TableCell className="text-primary font-bold">{row.aa}</TableCell>
                        <TableCell className="text-muted-foreground">{row.fm}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
            <div className="bg-primary/5 rounded-[3rem] p-12 border border-primary/10 flex flex-col justify-center h-full">
              <h3 className="text-3xl font-bold mb-4">The Verdict</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Choose AA WhatsApp for premium privacy features. FM WhatsApp is a solid choice if you need the absolute minimum set of features.
              </p>
            </div>
          </div>
        </section>

        {/* Master Comparison Table */}
        <section className="bg-secondary/10 py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Master <span className="text-primary">Comparison</span></h2>
              <p className="text-muted-foreground text-xl">The ultimate feature-by-feature breakdown of all top WhatsApp mods for 2026.</p>
            </div>

            <div className="glass-card rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
              <Table>
                <TableHeader className="bg-secondary/50">
                  <TableRow className="border-white/10">
                    <TableHead className="py-6 px-8 text-lg font-bold">Feature</TableHead>
                    <TableHead className="py-6 px-8 text-lg font-bold text-primary text-center">AA WhatsApp</TableHead>
                    <TableHead className="py-6 px-8 text-lg font-bold text-center">GB WhatsApp</TableHead>
                    <TableHead className="py-6 px-8 text-lg font-bold text-center">FM WhatsApp</TableHead>
                    <TableHead className="py-6 px-8 text-lg font-bold text-center">Official</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {allModsComparison.map((row, i) => (
                    <TableRow key={i} className="border-white/5 hover:bg-white/[0.02]">
                      <TableCell className="py-6 px-8 font-bold text-base">{row.feature}</TableCell>
                      <TableCell className="py-6 px-8 text-center text-primary font-black">{row.aa}</TableCell>
                      <TableCell className="py-6 px-8 text-center font-bold">{row.gb}</TableCell>
                      <TableCell className="py-6 px-8 text-center font-bold">{row.fm}</TableCell>
                      <TableCell className="py-6 px-8 text-center font-bold text-muted-foreground">{row.off}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Decision Guide */}
        <section className="py-24 container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black mb-12 text-center tracking-tight">Which Mod <span className="text-primary">Should You Choose?</span></h2>
          <div className="grid gap-6">
            {[
              { t: "AA WhatsApp", d: "Best for privacy, features, and anti-ban protection.", color: "border-primary/30 bg-primary/5" },
              { t: "GB WhatsApp", d: "Great for themes and extra features, slightly heavier.", color: "border-white/10 bg-secondary/20" },
              { t: "FM WhatsApp", d: "Best for lightweight use, moderate privacy.", color: "border-white/10 bg-secondary/20" },
              { t: "Official WhatsApp", d: "Ideal for safety and reliability, but limited features.", color: "border-white/10 bg-secondary/20" },
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border ${item.color} flex flex-col md:flex-row md:items-center justify-between gap-6`}>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{item.t}</h3>
                  <p className="text-muted-foreground text-lg">{item.d}</p>
                </div>
                {item.t === "AA WhatsApp" && (
                  <Link href="/download">
                    <Button size="lg" className="rounded-2xl font-black h-14 px-8">Download Now</Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-4xl font-black mb-12 text-center tracking-tight">Comparison <span className="text-primary">FAQs</span></h2>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "Can I install multiple WhatsApp mods together?", a: "Yes, you can install AA WhatsApp alongside GB or FM WhatsApp using different phone numbers. This allows you to use multiple mods safely." },
                { q: "Is AA WhatsApp better than GB WhatsApp?", a: "Yes, AA WhatsApp is more stable, secure, and privacy-focused while GB WhatsApp has more themes but slightly heavier performance." },
                { q: "Will my account get banned using AA WhatsApp?", a: "Using the latest version of AA WhatsApp with anti-ban technology reduces the risk. Avoid spam or policy violations." },
                { q: "Can I send large files on all WhatsApp mods?", a: "AA WhatsApp allows unlimited media sharing, FM WhatsApp is slightly limited, and official WhatsApp has size restrictions." },
                { q: "Which WhatsApp mod is best for customization?", a: "AA WhatsApp and GB WhatsApp both allow full customization, but AA WhatsApp is lighter and more stable." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-white/10 bg-background/50 rounded-2xl px-6">
                  <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-primary">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 text-center px-4">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              Switch to <span className="text-primary text-glow">AA WhatsApp</span> Today
            </h2>
            <p className="text-xl text-muted-foreground">The most stable and private WhatsApp mod of 2026 is just one click away.</p>
            <Link href="/download">
              <Button size="lg" className="rounded-[2rem] px-12 h-20 text-2xl font-black shadow-2xl shadow-primary/30">
                Download Latest v2.0 <Download className="ml-3 w-8 h-8" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
