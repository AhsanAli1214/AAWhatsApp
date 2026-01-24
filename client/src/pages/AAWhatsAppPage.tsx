import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ShieldCheck, Zap, Download, Lock, ShieldAlert, Ghost, Info, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";

export default function AAWhatsAppPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Helmet>
        <title>AA WhatsApp APK Download Latest Version (Anti-Ban & Secure)</title>
        <meta name="description" content="Download AA WhatsApp APK latest version. A secure WhatsApp mod with no location or media permissions. Best and safe GB WhatsApp alternative." />
      </Helmet>
      
      <Navigation />

      <main className="relative z-10 pt-32 pb-20 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight">
              AA WhatsApp APK – Secure WhatsApp Mod <br/>
              <span className="text-primary">(Latest Version)</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AA WhatsApp is a next-generation WhatsApp mod designed for users who value privacy and security. 
              Unlike GB WhatsApp, AA WhatsApp does NOT require location access or unnecessary media permissions.
            </p>
            <div className="flex justify-center gap-4">
               <Button size="lg" className="rounded-2xl px-8 h-16 text-lg font-bold">
                 Download Latest APK
               </Button>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-[2rem] border border-white/5">
              <h2 className="text-2xl font-bold mb-6">AA WhatsApp Features</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><ShieldCheck className="text-primary w-5 h-5"/> ✔ No Location Permission Required</li>
                <li className="flex items-center gap-3"><Lock className="text-primary w-5 h-5"/> ✔ No Media Storage Access</li>
                <li className="flex items-center gap-3"><Zap className="text-primary w-5 h-5"/> ✔ Anti-Ban Technology</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="text-primary w-5 h-5"/> ✔ GB WhatsApp Features</li>
                <li className="flex items-center gap-3"><ShieldAlert className="text-primary w-5 h-5"/> ✔ Privacy-Focused Mod</li>
              </ul>
            </div>
            <div className="glass-card p-8 rounded-[2rem] border border-white/5">
              <h2 className="text-2xl font-bold mb-6">Security Comparison</h2>
              <p className="text-muted-foreground mb-4">Why AA WhatsApp is safer than GB WhatsApp:</p>
              <div className="space-y-4 text-sm">
                <div className="p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <strong>AA WhatsApp:</strong> Zero access to bank details or location data.
                </div>
                <div className="p-4 bg-destructive/5 rounded-xl border border-destructive/20 text-destructive">
                  <strong>Standard Mods:</strong> Often request invasive "All Files Access".
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="grid gap-6">
              {[
                { q: "Is AA WhatsApp Safe?", a: "Yes, AA WhatsApp is built on a permission-clean codebase that strips invasive tracking." },
                { q: "Does it have Anti-Ban?", a: "Our latest V 2.0 includes advanced anti-ban protocols to keep your account secure." }
              ].map((faq, i) => (
                <div key={i} className="p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                  <h3 className="font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
