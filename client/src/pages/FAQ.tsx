import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { 
  HelpCircle, 
  ChevronDown, 
  ShieldCheck, 
  Zap, 
  Lock, 
  AlertTriangle,
  ArrowLeft,
  Download,
  CheckCircle2,
  RefreshCw,
  EyeOff,
  Files,
  Smartphone,
  Layout,
  UserCheck
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
      question: "What is AA WhatsApp?",
      answer: "AA WhatsApp is a modified version of the official WhatsApp that offers enhanced features, better privacy, and customization options. Unlike the official app, it allows users to hide online status, blue ticks, typing indicators, and send unlimited media without restrictions.",
      icon: Layout
    },
    {
      question: "Is AA WhatsApp Safe to Use?",
      answer: "Yes, AA WhatsApp is generally safe to use if downloaded from a trusted source. It comes with anti-ban technology, encrypted chats, and no malware. Avoid cracked or third-party APKs to ensure safety.",
      icon: ShieldCheck
    },
    {
      question: "How Do I Download the Latest Version of AA WhatsApp?",
      answer: "1. Backup your chats from official WhatsApp. 2. Enable Unknown Sources in your Android settings. 3. Download the latest AA WhatsApp APK from a trusted website. 4. Install the APK and verify your phone number. 5. Restore your chat backup.",
      icon: Download
    },
    {
      question: "How Do I Install AA WhatsApp Without Losing Chats?",
      answer: "1. Backup chats in official WhatsApp. 2. Install AA WhatsApp over the old version without uninstalling. 3. During setup, select Restore Backup to recover all chats.",
      icon: UserCheck
    },
    {
      question: "How Can I Update AA WhatsApp Without Losing Data?",
      answer: "1. Always download the latest official AA WhatsApp APK. 2. Backup your current chats. 3. Install the new APK directly over the old one. 4. Restore the backup when prompted.",
      icon: RefreshCw
    },
    {
      question: "Why Am I Getting 'App Not Installed' Error?",
      answer: "This usually happens due to conflicting WhatsApp versions, insufficient storage, or disabled 'Unknown Sources'. Fix: Delete old mods, enable unknown sources, and reinstall the latest APK.",
      icon: AlertTriangle
    },
    {
      question: "Can My Account Get Banned Using AA WhatsApp?",
      answer: "AA WhatsApp has anti-ban protection, but sending spam messages or violating WhatsApp policies can risk your account. Always use the latest version to minimize ban risks.",
      icon: Lock
    },
    {
      question: "How Do I Hide My Online Status in AA WhatsApp?",
      answer: "Go to Privacy Settings in AA WhatsApp and toggle options like Hide Online Status, Hide Blue Ticks, and Hide Typing. Your contacts won't see your online activity while using the app.",
      icon: EyeOff
    },
    {
      question: "Can I Send Larger Files and Media on AA WhatsApp?",
      answer: "Yes! AA WhatsApp allows sending videos up to 700 MB+, sharing high-resolution images without compression, and sending more than 30 images at once. This is a major upgrade from the official WhatsApp.",
      icon: Files
    },
    {
      question: "What Are the Best Features of AA WhatsApp?",
      answer: "Key features include anti-delete messages & statuses, custom themes and fonts, in-app chat lock (PIN, fingerprint, pattern), enhanced privacy controls, and high-quality media sharing without limits.",
      icon: Zap
    },
    {
      question: "Can I Use AA WhatsApp Alongside Official WhatsApp?",
      answer: "Yes, AA WhatsApp can be installed alongside the official WhatsApp using a different number. This way, you can enjoy both apps without losing chats or contacts.",
      icon: Smartphone
    },
    {
      question: "How Do I Fix 'Unable to Verify Number' Error in AA WhatsApp?",
      answer: "Check your network connection, clear the app cache, reinstall the latest AA WhatsApp APK, and ensure your phone number is correct and SMS is received.",
      icon: AlertTriangle
    },
    {
      question: "How Do I Restore Chats in AA WhatsApp?",
      answer: "Backup chats in official WhatsApp first. During AA WhatsApp installation, tap Restore Backup. All previous chats will appear in the app.",
      icon: RefreshCw
    },
    {
      question: "What's the Difference Between AA WhatsApp and Other Mods?",
      answer: "AA WhatsApp is best for privacy & anti-delete features. GB WhatsApp has more themes but is heavier, while FM WhatsApp is lightweight and smooth. AA WhatsApp combines security, privacy, and customization.",
      icon: CheckCircle2
    },
    {
      question: "How Often Should I Update AA WhatsApp?",
      answer: "Always use the latest version to get new features, bug fixes, and security patches. Check our website regularly for official updates.",
      icon: RefreshCw
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Helmet>
        <title>AA WhatsApp FAQ (2026) – Anti-Ban & Security Support Guide</title>
        <meta name="description" content="Official AA WhatsApp support page. Master Anti-Ban v2.0, fix common errors, learn installation steps, and explore privacy features in AA WhatsApp V2.0. The definitive support guide for 2026." />
        <meta name="keywords" content="AA WhatsApp support, AA WhatsApp help, fix whatsapp mod ban, install aa whatsapp, aa whatsapp official faq, whatsapp mod troubleshooting, AA WhatsApp guide 2026" />
        <link rel="canonical" href="https://aa-mods.vercel.app/faq" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      
      <Navigation />

      <main className="pt-32 pb-20 container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
            <HelpCircle className="w-4 h-4" />
            2026 Official Guide
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight">
            AA WhatsApp <span className="text-primary">Help Center</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Get expert support for the world's most secure WhatsApp mod. Master privacy, fix errors, and stay updated.
          </p>
        </motion.div>

        <div className="mb-12 p-8 rounded-[2.5rem] bg-primary/5 border border-primary/20 flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0 w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center">
            <ShieldCheck className="w-12 h-12 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Verified Safety Support</h3>
            <p className="text-muted-foreground leading-relaxed">Our support guides are updated daily to reflect the latest Anti-Ban v2.0 protocols. Rest assured that all solutions provided here are tested for security and stability.</p>
          </div>
        </div>

        <div className="grid gap-6">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${i}`}
                  className="border border-white/10 rounded-3xl px-8 bg-secondary/20 hover:bg-secondary/40 transition-all duration-300 overflow-hidden shadow-sm hover:shadow-primary/5 group"
                >
                  <AccordionTrigger className="text-left font-bold text-lg md:text-xl py-8 hover:no-underline group-data-[state=open]:text-primary transition-colors">
                    <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground">
                        <faq.icon className="w-6 h-6" />
                      </div>
                      <span className="flex-1">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8 pl-[68px]">
                    <div className="space-y-4 border-l-2 border-primary/20 pl-6">
                      {faq.answer.split('\n').map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Support Cards */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] bg-primary/5 border border-primary/10 space-y-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Zap className="w-32 h-32" />
            </div>
            <div className="w-16 h-16 rounded-[1.5rem] bg-primary/20 flex items-center justify-center text-primary">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold">Still have questions?</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Join our official Telegram community for real-time support, feature requests, and update alerts.</p>
            <a href="https://t.me/AA_ModsOfficial" target="_blank" rel="noopener noreferrer" className="block relative z-10">
              <Button className="w-full h-16 rounded-2xl font-black text-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all">
                Join Telegram Channel
              </Button>
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[3rem] bg-destructive/5 border border-destructive/10 space-y-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <AlertTriangle className="w-32 h-32" />
            </div>
            <div className="w-16 h-16 rounded-[1.5rem] bg-destructive/20 flex items-center justify-center text-destructive">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold">Found a bug?</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">Help us improve the most secure WhatsApp mod by reporting any technical issues directly to our dev team.</p>
            <Link href="/support" className="block relative z-10">
              <Button variant="outline" className="w-full h-16 rounded-2xl font-black text-xl border-destructive/30 text-destructive hover:bg-destructive/10 transition-all">
                Report Error Now
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="mt-20 text-center">
          <Link href="/">
            <Button variant="ghost" className="gap-3 text-muted-foreground hover:text-primary text-lg h-14 px-8 rounded-2xl">
              <ArrowLeft className="w-5 h-5" />
              Return to Homepage
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
