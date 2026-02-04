import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { BookOpen, Download, HelpCircle, Info, ShieldCheck, Zap, ArrowRight, MessageSquare, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

export default function HTMLSitemap() {
  const sections = [
    {
      title: "Main Pages",
      links: [
        { label: "Home", href: "/", icon: Zap },
        { label: "About Us", href: "/about", icon: Info },
        { label: "FAQ Support", href: "/faq", icon: HelpCircle },
        { label: "Contact Support", href: "/support", icon: MessageSquare },
      ]
    },
    {
      title: "AA WhatsApp (Personal)",
      links: [
        { label: "App Info", href: "/aa-whatsapp", icon: ShieldCheck },
        { label: "Download Page", href: "/aa-whatsapp/download", icon: Download },
        { label: "Security Blog", href: "/blog", icon: BookOpen },
      ]
    },
    {
      title: "AA Business WhatsApp",
      links: [
        { label: "Enterprise Info", href: "/aa-business", icon: Briefcase },
        { label: "Business Download", href: "/aa-business/download", icon: Download },
      ]
    },
    {
      title: "Legal & Privacy",
      links: [
        { label: "Privacy Policy", href: "/privacy", icon: ShieldCheck },
        { label: "Terms of Service", href: "/terms", icon: Info },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Helmet>
        <title>Sitemap - AA WhatsApp Official (2026)</title>
        <meta name="description" content="Complete directory of all pages on the AA Mods website. Easily navigate to downloads, security guides, and support." />
        <link rel="canonical" href="https://aa-mods.vercel.app/sitemap" />
      </Helmet>

      <Navigation />

      <main className="pt-32 pb-20 container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4">Website <span className="text-primary">Sitemap</span></h1>
          <p className="text-muted-foreground text-xl">A complete directory of all secure content and downloads.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-[2rem] border border-white/5"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link href={link.href}>
                      <span className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group cursor-pointer">
                        <link.icon className="w-5 h-5 opacity-50 group-hover:opacity-100" />
                        <span className="text-lg font-medium">{link.label}</span>
                        <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
