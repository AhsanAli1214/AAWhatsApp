import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

export default function ContactUs() {
  const { register, handleSubmit, reset } = useForm();
  const { toast } = useToast();

  const onSubmit = (data: any) => {
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    reset();
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-2xl">
      <Card className="border-none shadow-xl bg-gradient-to-br from-background to-primary/5">
        <CardHeader className="text-center pb-8">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-primary rounded-2xl text-primary-foreground shadow-lg shadow-primary/20">
              <MessageSquare className="w-10 h-10" />
            </div>
          </div>
          <CardTitle className="text-4xl font-extrabold tracking-tight">Contact Us</CardTitle>
          <p className="text-muted-foreground mt-3 text-lg">
            Have questions? We'd love to hear from you.
          </p>
        </CardHeader>
        <CardContent className="pt-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Full Name
              </label>
              <Input 
                placeholder="John Doe" 
                {...register("name", { required: true })} 
                className="bg-background/50 border-primary/10 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email Address
              </label>
              <Input 
                type="email" 
                placeholder="john@example.com" 
                {...register("email", { required: true })} 
                className="bg-background/50 border-primary/10 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Your Message
              </label>
              <Textarea 
                placeholder="How can we help you?" 
                className="min-h-[150px] bg-background/50 border-primary/10 focus:border-primary resize-none"
                {...register("message", { required: true })}
              />
            </div>
            <Button type="submit" className="w-full h-12 text-lg font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
              <Send className="mr-2 h-5 w-5" /> Send Message
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>support@aawhatsapp.com</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
