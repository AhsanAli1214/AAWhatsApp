import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Send, ArrowLeft, MessageCircle } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";

export default function Support() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 relative overflow-hidden">
      <Helmet>
        <title>Support - AA Mods | Join Telegram for Help</title>
        <meta name="description" content="Need help with AAWhatsApp? Join our official Telegram channel to report bugs and get support from the AA Mods team." />
      </Helmet>
      <div className="fixed inset-0 hero-gradient opacity-40 pointer-events-none z-0" />
      <div className="fixed top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-50" />
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/">
              <Button variant="ghost" className="hover:bg-primary/10 gap-2 mb-8 text-muted-foreground hover:text-primary" data-testid="button-back-home">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Button>
            </Link>

            <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <MessageCircle className="w-12 h-12 text-primary" />
            </div>

            <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-6">
              Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary">Support</span>?
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-lg mx-auto leading-relaxed">
              For any bugs, errors, or issues with AAWhatsApp, please join our official Telegram channel. Our team is ready to help you!
            </p>

            <a 
              href="https://t.me/AA_ModsOfficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="h-16 px-10 text-lg font-bold rounded-2xl bg-[#0088cc] hover:bg-[#0077b5] gap-3 shadow-2xl shadow-[#0088cc]/30"
                data-testid="button-join-telegram"
              >
                <SiTelegram className="w-6 h-6" />
                Join Telegram to Report Errors
                <Send className="w-5 h-5" />
              </Button>
            </a>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-16 p-6 rounded-3xl bg-primary/5 border border-primary/10 text-left max-w-md mx-auto"
            >
              <h4 className="font-bold text-sm text-primary uppercase tracking-widest mb-3">Why Telegram?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Faster response times from our support team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Get instant updates on bug fixes and new versions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Connect with the AA Mods community</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
