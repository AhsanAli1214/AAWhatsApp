import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bug, Mail, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { api } from "@shared/routes";

export default function ContactUs() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm();
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/report-bug", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send report");

      toast({
        title: "Report Submitted!",
        description: "Thank you for helping us improve AAWhatsApp. Our team will investigate this issue.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Could not send report. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-2xl">
      <Card className="border-none shadow-xl bg-gradient-to-br from-background to-primary/5">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-red-500 rounded-2xl text-white shadow-lg shadow-red-500/20">
              <Bug className="w-10 h-10" />
            </div>
          </div>
          <CardTitle className="text-4xl font-extrabold tracking-tight">Report a Bug</CardTitle>
          <p className="text-muted-foreground mt-3 text-lg">
            Found an error or bug in AAWhatsApp? Report it here to help us fix it.
          </p>
        </CardHeader>
        <CardContent className="pt-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">
                Bug Type
              </label>
              <Input 
                placeholder="e.g. App Crash, UI Glitch, Anti-Ban Issue" 
                {...register("type", { required: true })} 
                className="bg-background/50 border-primary/10 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">
                Email Address
              </label>
              <Input 
                type="email" 
                placeholder="your@email.com" 
                {...register("email", { required: true })} 
                className="bg-background/50 border-primary/10 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none">
                Bug Details
              </label>
              <Textarea 
                placeholder="Please describe the steps to reproduce the bug..." 
                className="min-h-[150px] bg-background/50 border-primary/10 focus:border-primary resize-none"
                {...register("message", { required: true })}
              />
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform"
            >
              <Send className="mr-2 h-5 w-5" /> {isSubmitting ? "Submitting..." : "Submit Report"}
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>bugs@aawhatsapp.com</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
