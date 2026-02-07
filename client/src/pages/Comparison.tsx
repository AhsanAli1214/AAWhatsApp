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
import { Link, useLocation } from "wouter";
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
  const [location] = useLocation();
  const isBusiness = location.includes("type=business");
  const canonicalUrl = `https://aa-mods.vercel.app${location.split("?")[0]}`;
  
  const personalComparison = [
    { feature: "Hide Online Status", aa: "✅", gb: "✅", fm: "✅", off: "❌" },
    { feature: "Anti-Delete Messages", aa: "✅", gb: "✅", fm: "❌", off: "❌" },
    { feature: "Themes & Customization", aa: "✅ Full", gb: "✅ Many", fm: "✅ Many", off: "❌" },
    { feature: "Media Size Limit", aa: "✅ Large", gb: "✅ Medium", fm: "✅ Medium", off: "❌" },
    { feature: "In-App Chat Lock", aa: "✅", gb: "✅", fm: "❌", off: "❌" },
    { feature: "Anti-Ban Technology", aa: "✅ Advanced", gb: "✅ Moderate", fm: "✅ Basic", off: "❌" },
    { feature: "Updates Frequency", aa: "✅ Regular", gb: "✅ Regular", fm: "✅ Moderate", off: "✅ Regular" },
  ];

  const businessComparison = [
    { feature: "Bulk Broadcasting", aa: "✅ Unlimited", off: "❌ 256 Limit" },
    { feature: "Anti-Ban Shield", aa: "✅ Enterprise", off: "❌ Basic" },
    { feature: "Catalog Management", aa: "✅ Uncapped", off: "❌ Restricted" },
    { feature: "Privacy Core™", aa: "✅ Active", off: "❌ Telemetry Active" },
    { feature: "Auto Reply CRM", aa: "✅ Advanced", off: "✅ Basic" },
  ];

  const currentData = isBusiness ? businessComparison : personalComparison;
  const accentClass = isBusiness ? "text-amber-500" : "text-primary";
  const bgAccentClass = isBusiness ? "bg-amber-500/10 border-amber-500/20 text-amber-500" : "bg-primary/10 border-primary/20 text-primary";

  return (
    <div className={`min-h-screen bg-background text-foreground ${isBusiness ? "selection:bg-amber-500/30" : "selection:bg-primary/30"}`}>
      <Helmet>
        <title>{isBusiness ? "AA Business vs Official Comparison" : "AA WhatsApp Comparison 2026"}</title>
        <meta
          name="description"
          content={isBusiness
            ? "Compare AA Business WhatsApp with the official app. See enterprise features like bulk broadcasting, anti-ban, and analytics."
            : "Compare AA WhatsApp with official, GB, and FM WhatsApp. Review privacy, anti-ban, and customization differences for 2026."}
        />
        <meta
          name="keywords"
          content={isBusiness
            ? "AA Business comparison, WhatsApp Business mod vs official, enterprise WhatsApp features, Anti-Ban business WhatsApp"
            : "AA WhatsApp comparison, GB WhatsApp vs AA WhatsApp, FM WhatsApp vs AA WhatsApp, secure WhatsApp mod 2026"}
        />
        <meta
          property="og:title"
          content={isBusiness ? "AA Business vs Official WhatsApp Comparison" : "AA WhatsApp vs GB/FM WhatsApp Comparison"}
        />
        <meta
          property="og:description"
          content={isBusiness
            ? "See how AA Business outperforms official WhatsApp Business with enterprise-grade tools."
            : "See how AA WhatsApp compares to GB and FM WhatsApp across privacy, anti-ban, and features."}
        />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <Navigation />

      <main className="pt-32 pb-20 overflow-hidden">
        <section className="container mx-auto px-4 mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-bold uppercase tracking-widest ${bgAccentClass}`}>
              <Scale className="w-4 h-4" />
              {isBusiness ? "Business Protocol Comparison" : "2026 Comparison Guide"}
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-display tracking-tight leading-tight">
              Compare <span className={`${accentClass} text-glow`}>AA {isBusiness ? "Business" : "WhatsApp"}</span>
            </h1>
          </motion.div>
        </section>

        <section className="container mx-auto px-4 max-w-5xl">
          <div className="glass-card rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
            <Table>
              <TableHeader className="bg-secondary/50">
                <TableRow>
                  <TableHead className="py-6 px-8 text-lg font-bold">Feature</TableHead>
                  <TableHead className={`py-6 px-8 text-lg font-bold text-center ${accentClass}`}>AA {isBusiness ? "Business" : "WhatsApp"}</TableHead>
                  {!isBusiness && <TableHead className="py-6 px-8 text-lg font-bold text-center">GB WhatsApp</TableHead>}
                  {!isBusiness && <TableHead className="py-6 px-8 text-lg font-bold text-center">FM WhatsApp</TableHead>}
                  <TableHead className="py-6 px-8 text-lg font-bold text-center">Official</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.map((row, i) => (
                  <TableRow key={i} className="border-white/5 hover:bg-white/[0.02]">
                    <TableCell className="py-6 px-8 font-bold text-base">{row.feature}</TableCell>
                    <TableCell className={`py-6 px-8 text-center font-black ${accentClass}`}>{row.aa}</TableCell>
                    {!isBusiness && 'gb' in row && <TableCell className="py-6 px-8 text-center font-bold">{(row as any).gb}</TableCell>}
                    {!isBusiness && 'fm' in row && <TableCell className="py-6 px-8 text-center font-bold">{(row as any).fm}</TableCell>}
                    <TableCell className="py-6 px-8 text-center font-bold text-muted-foreground">{'off' in row ? (row as any).off : ''}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-black mb-12 text-center tracking-tight">Which Mod <span className={accentClass}>Should You Choose?</span></h2>
          <div className="grid gap-6">
            {[
              { t: isBusiness ? "AA Business" : "AA WhatsApp", d: isBusiness ? "Best for enterprise security and bulk tools." : "Best for privacy, features, and anti-ban protection.", color: isBusiness ? "border-amber-500/30 bg-amber-500/5" : "border-primary/30 bg-primary/5" },
              { t: "Official WhatsApp", d: "Ideal for safety and reliability, but limited features.", color: "border-white/10 bg-secondary/20" },
            ].map((item, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border ${item.color} flex flex-col md:flex-row md:items-center justify-between gap-6`}>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{item.t}</h3>
                  <p className="text-muted-foreground text-lg">{item.d}</p>
                </div>
                {item.t.includes("AA") && (
                  <Link href={isBusiness ? "/business-download" : "/download"}>
                    <Button size="lg" className={`rounded-2xl font-black h-14 px-8 ${isBusiness ? "bg-amber-500 text-black hover:bg-amber-600" : ""}`}>Download Now</Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
