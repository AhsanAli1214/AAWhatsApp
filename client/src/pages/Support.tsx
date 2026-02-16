import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Send, ArrowLeft, MessageCircle } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";

export default function Support() {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 relative overflow-hidden">
      <Helmet>
        <title>Support - AA Mods | Report Bug & Error</title>
        <meta name="description" content="Need help with AAWhatsApp? Use our official bug reporting form or join our Telegram channel for direct support." />
        <meta
          name="keywords"
          content="AA WhatsApp support, AA Mods help, report bug AA WhatsApp, Telegram support, WhatsApp mod troubleshooting"
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/support" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="fixed inset-0 hero-gradient opacity-40 pointer-events-none z-0" />
      <div className="fixed top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-50" />
      <Navigation />
      
      <main className="relative z-10 pt-24 pb-14 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <Button 
                variant="ghost" 
                onClick={handleBack}
                className="hover:bg-primary/10 gap-2 mb-8 text-muted-foreground hover:text-primary" 
                data-testid="button-back-home"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Button>

              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>

              <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-6">
                Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary text-glow">Support</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Report any error or bug directly to our team via Telegram for the fastest response.
              </p>

              <div className="space-y-6">
                <a 
                  href="https://t.me/AA_ModsOfficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    variant="outline"
                    className="w-full h-16 px-6 text-lg font-bold rounded-2xl border-[#0088cc]/30 text-[#0088cc] hover:bg-[#0088cc]/10 gap-3"
                    data-testid="button-join-telegram"
                  >
                    <SiTelegram className="w-6 h-6" />
                    Join Telegram Support
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-[1.2] w-full"
            >
              <div className="glass-card rounded-[2.5rem] p-8 md:p-10 border border-white/5 shadow-2xl text-center">
                <div className="flex flex-col items-center gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center">
                    <SiTelegram className="w-10 h-10 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">Report Bug via Telegram</h2>
                  <p className="text-muted-foreground">
                    Our developers are most active on Telegram. Join our official channel to report errors, suggest features, or get help with installation.
                  </p>
                  <a 
                    href="https://t.me/AA_ModsOfficial" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl shadow-lg shadow-primary/20 transition-all">
                      Open Telegram Channel <Send className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    For faster resolution of errors or bugs, please contact us directly on Telegram.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
