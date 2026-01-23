import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { 
  AlertTriangle, 
  Send, 
  CheckCircle2, 
  ArrowLeft, 
  Mail, 
  MessageSquare, 
  ShieldCheck, 
  Clock,
  ExternalLink,
  Info
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Navigation } from "@/components/Navigation";
import { apiRequest } from "@/lib/queryClient";

const reportSchema = z.object({
  type: z.string().min(1, "Please select an issue type"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Description must be at least 10 characters"),
});

type ReportFormValues = z.infer<typeof reportSchema>;

export default function Support() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ReportFormValues>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      type: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: ReportFormValues) => {
    try {
      await apiRequest("POST", "/api/report-bug", values);
      setIsSubmitted(true);
      toast({
        title: "Report Sent",
        description: "Thank you! Our technical team has been notified.",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Could not send report. Please try again or use Telegram.",
      });
    }
  };

  const supportCards = [
    {
      icon: ShieldCheck,
      title: "Privacy Protocol",
      description: "Our surgically rebuilt security layer",
      link: "#",
      action: "Learn More",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      icon: Info,
      title: "Version History",
      description: "Track the latest Anti-Ban updates",
      link: "#",
      action: "View Logs",
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Clock,
      title: "Auto-Permissions",
      description: "How we strip risky file access",
      link: "#",
      action: "Read Technicals",
      color: "text-amber-500",
      bg: "bg-amber-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-start justify-between gap-12">
            
            {/* Left Column: Info & Links */}
            <div className="w-full md:w-1/3 space-y-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/">
                  <Button variant="ghost" className="hover:bg-white/5 gap-2 pl-0 hover:pl-2 transition-all no-default-hover-elevate">
                    <ArrowLeft className="w-4 h-4" /> Back to Home
                  </Button>
                </Link>
                <a href="https://t.me/AA_ModsOfficial" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="gap-2 border-primary/30 text-primary hover:bg-primary/10 no-default-hover-elevate">
                    <Send className="w-4 h-4" />
                    Join Telegram Updates
                  </Button>
                </a>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl font-bold font-display tracking-tight">Help & <br /><span className="text-primary">AA Mods Support</span></h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Have questions about AA Mods products? Our team is here to help you get the most out of your experience.
                </p>
              </div>

              <div className="grid gap-4">
                {supportCards.map((card, idx) => (
                  <Card key={idx} className="bg-white/5 border-white/10 hover-elevate transition-all overflow-visible">
                    <CardHeader className="flex flex-row items-center gap-4 space-y-0 p-4">
                      <div className={`p-2 rounded-xl ${card.bg}`}>
                        <card.icon className={`w-5 h-5 ${card.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-sm font-semibold truncate">{card.title}</CardTitle>
                        <CardDescription className="text-xs truncate">{card.description}</CardDescription>
                      </div>
                      <Button variant="ghost" size="icon" className="shrink-0" asChild>
                        <a href={card.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 flex gap-3">
                <Info className="w-5 h-5 text-primary shrink-0" />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Before reporting a bug, please ensure you are running the latest version of AAWhatsApp APK.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="w-full md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card/30 backdrop-blur-xl p-8 md:p-12 border border-white/5 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
              >
                {/* Visual Polish */}
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-12">
                            <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center shrink-0">
                              <AlertTriangle className="w-8 h-8 text-destructive" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h2 className="text-3xl font-black font-display tracking-tight text-white">Technical Support</h2>
                                <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">Version V 2.0</span>
                                </div>
                              </div>
                              <p className="text-muted-foreground font-medium">Detailed feedback directly impacts development priority.</p>
                            </div>
                          </div>

                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-8">
                          <div className="grid md:grid-cols-2 gap-8">
                            <FormField
                              control={form.control}
                              name="type"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[10px] uppercase tracking-[0.2em] font-black text-primary mb-3 block">Category</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="bg-white/[0.03] border-white/10 h-16 rounded-2xl focus:ring-primary/30 transition-all hover:bg-white/[0.06] text-base font-medium">
                                        <SelectValue placeholder="What's the issue?" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-[#0a0a0a] border-white/10 rounded-2xl p-2 shadow-2xl">
                                      <SelectItem value="Download Issue" className="rounded-xl py-3 cursor-pointer">Download Issue</SelectItem>
                                      <SelectItem value="Installation Error" className="rounded-xl py-3 cursor-pointer">Installation Error</SelectItem>
                                      <SelectItem value="App Crash" className="rounded-xl py-3 cursor-pointer">App Crash</SelectItem>
                                      <SelectItem value="Privacy Bug" className="rounded-xl py-3 cursor-pointer">Privacy Bug</SelectItem>
                                      <SelectItem value="Other" className="rounded-xl py-3 cursor-pointer">Other</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-[10px] uppercase tracking-[0.2em] font-black text-primary mb-3 block">Your Email</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="support@aamods.com" 
                                      className="bg-white/[0.03] border-white/10 h-16 rounded-2xl focus:ring-primary/30 transition-all hover:bg-white/[0.06] text-base font-medium"
                                      {...field} 
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-[10px] uppercase tracking-[0.2em] font-black text-primary mb-3 block">Issue Description</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Please provide steps to reproduce the issue..." 
                                    className="bg-white/[0.03] border-white/10 min-h-[220px] rounded-3xl p-6 resize-none focus:ring-primary/30 transition-all hover:bg-white/[0.06] text-base leading-relaxed font-medium"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button 
                            type="submit" 
                            className="w-full h-18 bg-primary hover:bg-primary/90 text-white font-black text-xl rounded-2xl shadow-2xl shadow-primary/20 transition-all active:scale-[0.98] group flex items-center justify-center gap-4"
                            disabled={form.formState.isSubmitting}
                          >
                            {form.formState.isSubmitting ? (
                              <>
                                <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>INITIALIZING ENVOY...</span>
                              </>
                            ) : (
                              <>
                                <span>TRANSMIT REPORT</span>
                                <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              </>
                            )}
                          </Button>
                        </form>
                      </Form>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-28 h-28 bg-primary/20 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 relative">
                        <CheckCircle2 className="w-14 h-14 text-primary" />
                        <motion.div 
                          className="absolute inset-0 border-2 border-primary rounded-[2.5rem]"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1.2, opacity: 0 }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </div>
                      <h2 className="text-4xl font-black mb-4 font-display text-white">Transmission Successful</h2>
                      <p className="text-muted-foreground mb-12 text-lg max-w-sm mx-auto font-medium">
                        Your report has been encrypted and successfully delivered to our development queue.
                      </p>
                      <Link href="/">
                        <Button variant="outline" className="rounded-2xl px-12 h-16 border-white/10 hover:bg-white/5 text-lg font-bold transition-all">
                          Return to Terminal
                        </Button>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

