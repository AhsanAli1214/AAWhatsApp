import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { AlertTriangle, Send, CheckCircle2, ArrowLeft } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <Link href="/">
            <Button variant="ghost" className="mb-8 hover:bg-white/5 gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12 border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-destructive/10 blur-[100px] rounded-full" />
            
            {!isSubmitted ? (
              <>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-destructive/10 rounded-2xl">
                    <AlertTriangle className="w-8 h-8 text-destructive" />
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold font-display tracking-tight">Support & Bug Report</h1>
                    <p className="text-muted-foreground">Found an error or need help? Contact us here.</p>
                  </div>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Issue Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-white/5 border-white/10 h-12 rounded-xl">
                                <SelectValue placeholder="Select issue category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-background border-white/10">
                              <SelectItem value="Download Issue">Download Issue</SelectItem>
                              <SelectItem value="Installation Error">Installation Error</SelectItem>
                              <SelectItem value="App Crash">App Crash</SelectItem>
                              <SelectItem value="Privacy Bug">Privacy Bug</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
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
                          <FormLabel>Your Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="support@example.com" 
                              className="bg-white/5 border-white/10 h-12 rounded-xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe the error in detail..." 
                              className="bg-white/5 border-white/10 min-h-[150px] rounded-xl resize-none"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full h-14 bg-destructive hover:bg-destructive/90 text-white font-bold text-lg rounded-xl shadow-lg shadow-destructive/20 transition-all group"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Submit Report <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </form>
                </Form>
              </>
            ) : (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Report Received</h2>
                <p className="text-muted-foreground mb-8 text-lg">
                  Thank you for your report. Our technical team will investigate this issue immediately.
                </p>
                <Link href="/">
                  <Button className="rounded-full px-8 h-12 bg-primary hover:bg-primary/90">
                    Return Home
                  </Button>
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
