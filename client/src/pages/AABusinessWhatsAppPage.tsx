import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import {
  ShieldCheck,
  Zap,
  Download,
  Lock,
  CheckCircle2,
  ArrowLeft,
  Users,
  MessageSquare,
  BarChart3,
  Globe,
  PlusCircle,
  Shield,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { FAQSection } from "@/components/FAQSection";
import { useTranslation } from "@/hooks/useTranslation";

export default function AABusinessWhatsAppPage() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  const businessFAQ = [
    {
      question: "Will I lose my current business chats?",
      answer: "No, our migration tool moves your chat database safely. You can transition from official WA Business to AA Business without losing data."
    },
    {
      question: "Can I use this alongside the official WhatsApp?",
      answer: "Yes, the package name is distinct (com.aa.business), allowing you to run it alongside the official WhatsApp or standard AAWhatsApp."
    },
    {
      question: "Is it safe for sensitive client data?",
      answer: "Yes, we have disabled all cloud analytics and telemetry that standard WA uses. Your client data remains encrypted locally on your device."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-amber-500/30">
      <Helmet>
        <title>AA Business WhatsApp APK Download v1.0 | Official Secure Enterprise Mod 2026</title>
        <meta
          name="description"
          content="Official Download for AA Business WhatsApp V1.0. Most secure WhatsApp Business mod with Bulk Broadcasting, Anti-Ban Shield, and Zero-Access architecture. Best for professional privacy."
        />
        <meta
          name="keywords"
          content="AA Business WhatsApp, WhatsApp Business Mod 2026, Secure WA Business APK, Anti-Ban Business WhatsApp, AA Mods Business, WhatsApp Business Mod Anti-Ban, Secure Enterprise WhatsApp, Permission Clean WhatsApp Business"
        />
      </Helmet>

      <Navigation />

      <main className="relative z-10 pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-8">
          <Button 
            variant="ghost" 
            onClick={() => setLocation("/")}
            className="hover:bg-amber-500/10 gap-2 text-muted-foreground hover:text-amber-500"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-24"
        >
          {/* 1. Hero Section */}
          <section className="text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-mono text-xs font-bold uppercase tracking-widest"
            >
              <Shield className="w-3 h-3" /> Enterprise Protocol Active
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tighter leading-tight mb-4">
              AA Business WhatsApp – <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500 text-glow-amber">
                The Secure Fortress
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Run your business on a ghost protocol. Client data secured. Zero-access architecture. Business tools unlocked.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/business-download" className="w-full sm:w-auto">
                <Button size="lg" className="w-full px-6 py-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg shadow-lg shadow-amber-500/15 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download AA Business v1.0
                </Button>
              </Link>
              <a href="https://t.me/AA_ModsOfficial" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full px-6 py-6 rounded-xl border-amber-500/50 hover:bg-amber-500/10 text-amber-500 font-bold text-lg flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Join Telegram
                </Button>
              </a>
            </div>

            <div className="relative mt-16 group">
              <div className="absolute inset-0 bg-amber-500/10 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity" />
              <div className="relative glass-card border-amber-500/20 p-8 rounded-[2rem] aspect-video flex items-center justify-center overflow-hidden">
                 <img 
                   src="/client/public/images/business-hero-new.png" 
                   alt="AA Business Interface"
                   className="w-full h-full object-cover rounded-2xl"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.parentElement!.innerHTML = `<div class="flex flex-col items-center gap-4 text-amber-500/40">
                        <svg class="w-24 h-24 animate-pulse" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                        <span class="font-mono text-sm tracking-[0.5em] uppercase">Business Tools Interface v1.0</span>
                     </div>`;
                   }}
                 />
              </div>
            </div>
          </section>

          {/* 2. Key Features */}
          <section className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-black text-center tracking-tighter">
              Enterprise Grade Power
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Client Privacy Core",
                  desc: "Unlike standard WA Business, we strip tracking code. Your client lists and trade secrets never leave your device.",
                  icon: Lock,
                },
                {
                  title: "High-Volume Broadcasting",
                  desc: "Send bulk offers to unlimited clients without fear of bans. Our 'Warm-up' algorithm mimics human behavior.",
                  icon: Users,
                },
                {
                  title: "Automated CRM",
                  desc: "Advanced auto-replies, catalog management, and quick labels—all offline and encrypted.",
                  icon: MessageSquare,
                },
                {
                  title: "Anti-Ban Business Shield",
                  desc: "A specialized engine designed to protect high-activity business numbers from suspension.",
                  icon: ShieldCheck,
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className="p-8 bg-white/[0.02] rounded-3xl border border-white/5 hover:border-amber-500/30 transition-all group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <f.icon className="w-7 h-7 text-amber-500" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-white">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. The Business Protocol */}
          <section className="glass-card p-12 rounded-[3rem] border border-amber-500/20 bg-amber-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <BarChart3 className="w-32 h-32 text-amber-500" />
            </div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
              <Zap className="text-amber-500" />
              The Business Protocol
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { label: "Business API", value: "Decoupled", status: "Active" },
                 { label: "Encryption", value: "Commercial Grade 512-bit", status: "Secure" },
                 { label: "Permission Status", value: "Clean (Zero Harvesting)", status: "Verified" }
               ].map((spec, i) => (
                 <div key={i} className="space-y-2">
                    <p className="text-xs font-bold text-amber-500/60 uppercase tracking-widest">{spec.label}</p>
                    <p className="text-xl font-bold text-white">{spec.value}</p>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                       <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                       {spec.status}
                    </div>
                 </div>
               ))}
            </div>
          </section>

          {/* 4. Comparison Table */}
          <section className="space-y-10">
            <h2 className="text-3xl font-bold text-center">AA Business vs. Official WA Business</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-6 px-6 text-left font-black text-amber-500 uppercase tracking-widest text-xs">Comparison Feature</th>
                    <th className="py-6 px-6 text-left font-black text-amber-500 uppercase tracking-widest text-xs">AA Business</th>
                    <th className="py-6 px-6 text-left font-black text-white/40 uppercase tracking-widest text-xs">Official Business</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { f: "Anti-Delete Messages", aa: "Yes (Full Protocol)", off: "No" },
                    { f: "Broadcasting Limit", aa: "Unlimited", off: "256 Contacts" },
                    { f: "Catalog Limits", aa: "Uncapped", off: "Capped/Tiered" },
                    { f: "Data Harvesting", aa: "Zero (Privacy Core™)", off: "High (Cloud Logs)" },
                    { f: "Theme Customization", aa: "Full Branding Control", off: "None" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                      <td className="py-6 px-6 font-bold text-lg">{row.f}</td>
                      <td className="py-6 px-6 text-amber-500 font-black text-base italic">{row.aa}</td>
                      <td className="py-6 px-6 text-white/30">{row.off}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. Download Section */}
          <section className="py-20 relative">
            <div className="max-w-3xl mx-auto space-y-12">
               <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Deploy the <span className="text-amber-500">Fortress</span></h2>
                  <p className="text-xl text-muted-foreground">Download the AA Business WhatsApp Package.</p>
               </div>

               <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { name: "Fast Server (Primary)", type: "Direct Download", color: "amber", href: "/business-download" },
                    { name: "MediaFire (Mirror)", type: "Cloud Mirror", color: "white", href: "/business-download" }
                  ].map((mirror, i) => (
                    <div key={i} className={`p-8 rounded-[2.5rem] border ${mirror.color === 'amber' ? 'border-amber-500/20 bg-amber-500/5' : 'border-white/10 bg-white/5'} flex flex-col items-center text-center gap-6 group hover-elevate`}>
                       <div className={`p-4 rounded-2xl ${mirror.color === 'amber' ? 'bg-amber-500/10 text-amber-500' : 'bg-white/10 text-white'}`}>
                          <Download className="w-8 h-8" />
                       </div>
                       <div>
                          <h3 className="font-bold text-xl mb-1">{mirror.name}</h3>
                          <p className="text-xs text-muted-foreground uppercase tracking-widest">{mirror.type}</p>
                       </div>
                       <Link href={mirror.href} className="w-full">
                         <Button className={`w-full py-6 rounded-xl ${mirror.color === 'amber' ? 'bg-amber-500 hover:bg-amber-600 text-black' : 'bg-white/10 hover:bg-white/20'}`}>
                            Download Now
                         </Button>
                       </Link>
                    </div>
                  ))}
               </div>

               <div className="flex justify-center">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-bold">
                    <ShieldCheck className="w-5 h-5" />
                    Scanned: Safe for Corporate Use
                  </div>
               </div>
            </div>
          </section>

          {/* 6. FAQ Section */}
          <section className="space-y-12">
            <h2 className="text-3xl font-bold text-center tracking-tight">Business FAQ</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {businessFAQ.map((faq, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl border border-white/5">
                  <h3 className="font-bold text-lg mb-2 text-white">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Nav */}
          <section className="pt-20 border-t border-white/5 text-center space-y-8">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-amber-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-amber-500 transition-colors">Disclaimer</Link>
              <a href="https://t.me/AA_ModsOfficial" className="text-sm text-muted-foreground hover:text-amber-500 transition-colors">Join Telegram</a>
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest opacity-40">
              AA Mods by Ahsan Ali Wadani
            </p>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
