import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Zap, 
  Lock, 
  AlertTriangle,
  ArrowLeft
} from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const faqs = [
    {
      question: "Is AAWhatsApp safe to use in 2026?",
      answer: "Absolutely. AAWhatsApp is the only mod that has been surgically stripped of invasive permissions like 'All Files Access' and 'Location'. We use advanced anti-ban scripts and end-to-end encryption to ensure 100% safety."
    },
    {
      question: "Will I get banned for using AAWhatsApp?",
      answer: "No. Our latest V2.0 version includes an advanced Anti-Ban protocol that mimics the official WhatsApp behavior while bypassing restriction checks. Millions of users use it daily without issues."
    },
    {
      question: "How is AAWhatsApp different from GBWhatsApp or FMWhatsApp?",
      answer: "While GB and FM mods are packed with features, they often harvest user data through hidden permissions. AAWhatsApp (by AA Mods) provides the same premium features but with a 'Clean Codebase' guarantee—no bank data or location access required."
    },
    {
      question: "How do I update AAWhatsApp to the latest version?",
      answer: "To update, simply visit our official download page and download the latest APK. You don't need to uninstall the previous version; just install the new one over it to keep your chats."
    },
    {
      question: "Does AAWhatsApp support Google Drive backup?",
      answer: "Due to technical restrictions in WhatsApp mods, direct Google Drive backup is not supported. However, you can use our built-in 'Titanium Backup' feature to save your data locally or to any cloud storage."
    },
    {
      question: "Can I use two WhatsApp accounts on the same phone?",
      answer: "Yes! AAWhatsApp can be installed alongside the official WhatsApp, allowing you to run two different numbers on a single Android device seamlessly."
    },
    {
      question: "What are the key privacy features?",
      answer: "AAWhatsApp includes: Freeze Last Seen, Anti-Delete Messages, Anti-Delete Status, Hide Blue Ticks, and the exclusive 'Privacy Core' which blocks invasive system permissions."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Helmet>
        <title>FAQ - AAWhatsApp Official Support & Help Center</title>
        <meta name="description" content="Find answers to common questions about AAWhatsApp APK. Learn about security, anti-ban features, and how to install the latest version safely." />
      </Helmet>
      
      <Navigation />

      <main className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
            <HelpCircle className="w-4 h-4" />
            Help Center
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Everything you need to know about the world's most secure WhatsApp mod.
          </p>
        </motion.div>

        <div className="glass-card rounded-[2.5rem] p-6 md:p-12 border border-white/10 shadow-2xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`}
                className="border border-white/5 rounded-2xl px-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden"
              >
                <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Still need help?</h3>
            <p className="text-muted-foreground">Join our official Telegram community for real-time support and update alerts.</p>
            <a href="https://t.me/AA_ModsOfficial" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full rounded-xl py-6 font-bold text-lg">Join Telegram Channel</Button>
            </a>
          </div>
          <div className="p-8 rounded-3xl bg-destructive/5 border border-destructive/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-destructive/20 flex items-center justify-center text-destructive">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold">Found a bug?</h3>
            <p className="text-muted-foreground">Report any issues or suggest new features to our development team directly.</p>
            <Link href="/support">
              <Button variant="outline" className="w-full rounded-xl py-6 font-bold text-lg border-destructive/30 text-destructive hover:bg-destructive/10">Report Error</Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
