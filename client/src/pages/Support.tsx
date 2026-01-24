import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Send, ArrowLeft, MessageCircle, AlertTriangle, User, Mail, FileText } from "lucide-react";
import { SiTelegram } from "react-icons/si";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Support() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/report-bug", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Report Submitted",
          description: "Thank you for your feedback. Our team will review it shortly.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send report. Please try joining Telegram for direct support.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 relative overflow-hidden">
      <Helmet>
        <title>Support - AA Mods | Report Bug & Error</title>
        <meta name="description" content="Need help with AAWhatsApp? Use our official bug reporting form or join our Telegram channel for direct support." />
      </Helmet>
      <div className="fixed inset-0 hero-gradient opacity-40 pointer-events-none z-0" />
      <div className="fixed top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent z-50" />
      <Navigation />
      
      <main className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <Link href="/">
                <Button variant="ghost" className="hover:bg-primary/10 gap-2 mb-8 text-muted-foreground hover:text-primary" data-testid="button-back-home">
                  <ArrowLeft className="w-4 h-4" /> Back to Home
                </Button>
              </Link>

              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>

              <h1 className="text-4xl md:text-5xl font-black font-display tracking-tight mb-6">
                Direct <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-400 to-primary text-glow">Support</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Found a bug or experiencing an error? Report it directly to our engineers using the form or join our community on Telegram.
              </p>

              <div className="space-y-6">
                <a 
                  href="http://t.me/ahsan_tech_hub" 
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

                <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                  <h4 className="font-bold text-sm text-primary uppercase tracking-widest mb-4">Why Telegram?</h4>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>Instant technical assistance from AA Mods team</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                      <span>Early access to beta fixes and updates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-[1.2] w-full"
            >
              <div className="glass-card rounded-[2.5rem] p-8 md:p-10 border border-white/5 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Report a Bug</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground ml-1 flex items-center gap-2">
                        <User className="w-3 h-3" /> Your Name
                      </label>
                      <Input 
                        placeholder="Ahsan"
                        required
                        className="bg-white/[0.03] border-white/10 h-12 rounded-xl focus:border-primary/50 transition-all"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground ml-1 flex items-center gap-2">
                        <Mail className="w-3 h-3" /> Email Address
                      </label>
                      <Input 
                        type="email"
                        placeholder="ahsan@example.com"
                        required
                        className="bg-white/[0.03] border-white/10 h-12 rounded-xl focus:border-primary/50 transition-all"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground ml-1 flex items-center gap-2">
                      <FileText className="w-3 h-3" /> Subject
                    </label>
                    <Input 
                      placeholder="e.g. Installation Error"
                      required
                      className="bg-white/[0.03] border-white/10 h-12 rounded-xl focus:border-primary/50 transition-all"
                      value={formData.subject}
                      onChange={e => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground ml-1 flex items-center gap-2">
                      <MessageCircle className="w-3 h-3" /> Description
                    </label>
                    <Textarea 
                      placeholder="Tell us exactly what happened..."
                      required
                      className="bg-white/[0.03] border-white/10 min-h-[150px] rounded-xl focus:border-primary/50 transition-all resize-none"
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20 transition-all"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Submit Report <Send className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
