import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ShieldCheck, Zap, Download, Lock, ShieldAlert, Ghost, Info, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "wouter";

import { AdPlaceholder } from "@/components/AdPlaceholder";

export default function AAWhatsAppPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Helmet>
        <title>AA WhatsApp APK Download Latest Version (Anti-Ban & Secure)</title>
        <meta name="description" content="Download AA WhatsApp APK latest version. A secure WhatsApp mod with no location or media permissions. Best and safe GB WhatsApp alternative." />
        <meta name="keywords" content="AA WhatsApp APK, AA WhatsApp Download, AA WhatsApp Mod APK, AA Mods APK, WhatsApp Mod APK, GB WhatsApp Alternative, Secure WhatsApp Mod, Privacy WhatsApp Mod" />
      </Helmet>
      
      <Navigation />

      <main className="relative z-10 pt-32 pb-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-16"
        >
          {/* H1 Header */}
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-7xl font-black font-display tracking-tighter leading-none">
              AA WhatsApp APK – <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary text-glow">
                Secure WhatsApp Mod
              </span>
              <br/>
              <span className="text-2xl md:text-4xl text-muted-foreground font-medium block mt-4">
                (Latest Version V 2.0)
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              AA WhatsApp is a next-generation WhatsApp mod designed for users who value privacy and security. 
              Unlike GB WhatsApp, AA WhatsApp does NOT require location access or unnecessary media permissions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
               <ScrollLink to="download" smooth={true} offset={-100}>
                 <Button size="lg" className="rounded-2xl px-10 h-18 text-xl font-black shadow-2xl shadow-primary/20 w-full sm:w-auto">
                   <Download className="w-6 h-6 mr-2" />
                   Download APK Now
                 </Button>
               </ScrollLink>
            </div>

            <AdPlaceholder format="leaderboard" slot="apk_top" className="max-w-3xl mx-auto" />
          </section>

          {/* Intro Text */}
          <section className="glass-card p-10 rounded-[2.5rem] border border-white/5 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">What Is AA WhatsApp?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AA WhatsApp is a next-generation WhatsApp mod designed for users who value privacy and security. 
              Unlike GB WhatsApp, AA WhatsApp does NOT require location access or unnecessary media permissions.
              It provides a seamless experience with all the advanced features you expect from a high-quality mod, 
              while maintaining a "Permission-Clean" infrastructure.
            </p>
          </section>

          {/* New Sections from SEO Guide */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold">AA WhatsApp Privacy & Permissions Explained</h2>
            <p className="text-muted-foreground leading-relaxed">
              The core philosophy of AA WhatsApp by AA Mods is "Minimum Access, Maximum Feature." We have surgically 
              stripped the code responsible for background location data harvesting and unauthorized media access. 
              This makes it the first truly privacy-friendly WhatsApp mod on the market.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  No Location Access
                </h3>
                <p className="text-sm text-muted-foreground">Unlike other mods, we don't track your GPS coordinates.</p>
              </div>
              <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  No Media Harvesting
                </h3>
                <p className="text-sm text-muted-foreground">Your private photos and videos stay strictly on your device.</p>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold">AA WhatsApp Anti-Ban Protection</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our V 2.0 release includes the latest anti-ban script that works in 2026. This technology masks your 
              modded client as an official version during server-side verification, drastically reducing the risk 
              of temporary or permanent account suspensions.
            </p>
          </section>

          <section className="space-y-8" id="how-to-download">
            <h2 className="text-3xl font-bold">How to Download & Install AA WhatsApp APK</h2>
            <div className="space-y-4">
              {[
                "Click the 'Download APK' button at the top of this page.",
                "Wait for the server to synchronize your secure download link.",
                "Enable 'Unknown Sources' in your Android security settings.",
                "Install the APK and verify your number as usual.",
                "Enjoy the safest WhatsApp mod experience available."
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-center p-4 bg-white/[0.02] rounded-xl border border-white/5">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary">{i+1}</div>
                  <p className="text-muted-foreground font-medium">{step}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SEO Optimized Features */}
          <section className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-center tracking-tighter">AA WhatsApp Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "No Location Permission", desc: "Your real-time coordinates are never tracked or requested.", icon: Ghost },
                { title: "No Media Access", desc: "No invasive 'All Files Access' required to run the app.", icon: XCircle },
                { title: "Anti-Ban Technology", desc: "Advanced protocols to prevent account suspensions.", icon: Zap },
                { title: "GB Features Included", desc: "Anti-delete messages, status downloader, and more.", icon: CheckCircle2 },
                { title: "Lightweight & Fast", desc: "Optimized for speed with minimal background battery usage.", icon: Zap },
                { title: "Privacy-First", desc: "Built by AA Mods with a security-hardened codebase.", icon: ShieldCheck }
              ].map((f, i) => (
                <div key={i} className="p-6 bg-white/[0.02] rounded-2xl border border-white/5 hover:border-primary/20 transition-all group">
                   <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                     <f.icon className="w-6 h-6 text-primary" />
                   </div>
                   <h3 className="font-bold text-lg mb-2">✔ {f.title}</h3>
                   <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Safter than GB Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center py-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">Why AA WhatsApp is Safer Than GB WhatsApp</h2>
              <p className="text-muted-foreground leading-relaxed">
                Most standard WhatsApp mods like GBWhatsApp and FMWhatsApp often include hidden data-collection modules 
                that request "All Files Access" or background location tracking. AA WhatsApp surgically removes these 
                invasive permissions while retaining the premium customization features.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                  <span><strong>AA WhatsApp:</strong> 100% Permission-Clean infrastructure.</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                  <span><strong>Data Sovereignty:</strong> Messages stay on your device only.</span>
                </li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-[2rem] border border-primary/20 bg-primary/5 text-center">
              <ShieldCheck className="w-20 h-20 text-primary mx-auto mb-6 opacity-40" />
              <h3 className="text-xl font-bold mb-2">Privacy Core Active</h3>
              <p className="text-sm text-muted-foreground">Version V 2.0 Security Protocols Enabled</p>
            </div>
          </section>

          {/* Comparison */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">AA WhatsApp vs GB WhatsApp Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 px-6 text-left font-black text-primary uppercase tracking-widest text-xs">Feature</th>
                    <th className="py-4 px-6 text-left font-black text-primary uppercase tracking-widest text-xs">AA WhatsApp</th>
                    <th className="py-4 px-6 text-left font-black text-primary uppercase tracking-widest text-xs">GB WhatsApp</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    { f: "Location Permission", aa: "Not Required", gb: "Mandatory" },
                    { f: "Media Access", aa: "Zero Invasive Access", gb: "Full Disk Access" },
                    { f: "Anti-Ban", aa: "V 2.0 Enhanced", gb: "Standard" },
                    { f: "Privacy", aa: "Security Focused", gb: "Feature Focused" }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-bold">{row.f}</td>
                      <td className="py-4 px-6 text-primary font-medium">{row.aa}</td>
                      <td className="py-4 px-6 opacity-60">{row.gb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Footer Navigation */}
          <section className="pt-20 border-t border-white/5 text-center space-y-8">
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link>
              <a href="https://t.me/AA_ModsOfficial" className="text-sm text-muted-foreground hover:text-primary transition-colors">Join Telegram</a>
            </div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest opacity-40">
              AA Mods is not affiliated with WhatsApp Inc. All mods are for research purposes.
            </p>
          </section>
        </motion.div>
      </main>
    </div>
  );
}

// Add missing icon for the loop
const XCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
);
