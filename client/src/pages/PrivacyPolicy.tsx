import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Lock, Eye, ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

export default function PrivacyPolicy() {
  const [, setLocation] = useLocation();
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Helmet>
        <title>Privacy Policy - AA Mods</title>
        <meta
          name="description"
          content="Read the AA Mods privacy policy to understand how we protect your data, handle support requests, and secure your account information."
        />
        <meta
          name="keywords"
          content="AA Mods privacy policy, AA WhatsApp privacy, data protection, secure WhatsApp mod, user data safety"
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/privacy" />
      </Helmet>
      <div className="mb-8">
        <Button 
          variant="ghost" 
          onClick={() => setLocation("/")}
          className="hover:bg-primary/10 gap-2 text-muted-foreground hover:text-primary"
          data-testid="button-back-home"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Button>
      </div>
      <Card className="border-none shadow-lg">
        <CardHeader className="text-center pb-8 border-b">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">
              <ShieldCheck className="w-12 h-12" />
            </div>
          </div>
          <CardTitle className="text-4xl font-bold">Privacy Policy</CardTitle>
          <p className="text-muted-foreground mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent className="pt-8 space-y-8">
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <Eye className="w-5 h-5 text-primary" />
              <h2>Information We Collect</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We collect information that you provide directly to us when you subscribe to our newsletter, 
              download our application, or contact us. This may include your email address and usage statistics 
              to improve our services.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <Lock className="w-5 h-5 text-primary" />
              <h2>How We Protect Your Data</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We implement a variety of security measures to maintain the safety of your personal information. 
              Your data is stored behind secured networks and is only accessible by a limited number of persons 
              who have special access rights to such systems.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <h2>Your Choices</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              You can choose to opt-out of our communications at any time by clicking the unsubscribe link in 
              any email we send you. You may also contact us to request the deletion of your personal information.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
