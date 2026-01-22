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
                <a href="http://t.me/ahsan_tech_hub" target="_blank" rel="noopener noreferrer">
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
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="glass-card p-8 md:p-12 border border-white/10 rounded-[2rem] shadow-2xl relative overflow-hidden"
              >
                {/* Background Glows */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-destructive/10 rounded-2xl">
                          <AlertTriangle className="w-8 h-8 text-destructive" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold font-display tracking-tight">Report an Issue</h2>
                          <p className="text-sm text-muted-foreground">Technical feedback helps us improve.</p>
                        </div>
                      </div>

                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="type"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="text-xs uppercase tracking-wider font-bold opacity-70">Issue Type</FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="bg-white/5 border-white/10 h-14 rounded-2xl focus:ring-primary/20 transition-all">
                                        <SelectValue placeholder="Select category" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="bg-background/95 backdrop-blur-xl border-white/10 rounded-2xl p-2">
                                      <SelectItem value="Download Issue" className="rounded-xl">Download Issue</SelectItem>
                                      <SelectItem value="Installation Error" className="rounded-xl">Installation Error</SelectItem>
                                      <SelectItem value="App Crash" className="rounded-xl">App Crash</SelectItem>
                                      <SelectItem value="Privacy Bug" className="rounded-xl">Privacy Bug</SelectItem>
                                      <SelectItem value="Other" className="rounded-xl">Other</SelectItem>
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
                                  <FormLabel className="text-xs uppercase tracking-wider font-bold opacity-70">Your Email</FormLabel>
                                  <FormControl>
                                    <Input 
                                      placeholder="support@example.com" 
                                      className="bg-white/5 border-white/10 h-14 rounded-2xl focus:ring-primary/20 transition-all"
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
                                <FormLabel className="text-xs uppercase tracking-wider font-bold opacity-70">Message Details</FormLabel>
                                <FormControl>
                                  <Textarea 
                                    placeholder="Tell us what happened..." 
                                    className="bg-white/5 border-white/10 min-h-[180px] rounded-2xl p-4 resize-none focus:ring-primary/20 transition-all"
                                    {...field} 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button 
                            type="submit" 
                            className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-bold text-lg rounded-2xl shadow-xl shadow-primary/20 transition-all active-elevate-2 group"
                            disabled={form.formState.isSubmitting}
                          >
                            {form.formState.isSubmitting ? (
                              <span className="flex items-center gap-3">
                                <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                Processing...
                              </span>
                            ) : (
                              <span className="flex items-center gap-3">
                                Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              </span>
                            )}
                          </Button>
                        </form>
                      </Form>
                      
                      <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground bg-black/20 py-3 px-6 rounded-2xl w-fit mx-auto">
                        <ShieldCheck className="w-4 h-4 text-primary" />
                        <span>Encryption active: Your messages are sent securely via SSL</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-24 h-24 bg-primary/20 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-inner">
                        <CheckCircle2 className="w-12 h-12 text-primary" />
                      </div>
                      <h2 className="text-4xl font-bold mb-4 font-display">Report Received!</h2>
                      <p className="text-muted-foreground mb-12 text-lg max-w-sm mx-auto">
                        Thank you for helping us improve. Our technical team has been notified and will review your report.
                      </p>
                      <Link href="/">
                        <Button className="rounded-2xl px-12 h-14 bg-primary hover:bg-primary/90 text-lg font-bold shadow-xl shadow-primary/20">
                          Back to Homepage
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

