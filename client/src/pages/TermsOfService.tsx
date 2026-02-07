import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";

export default function TermsOfService() {
  const [, setLocation] = useLocation();
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <Helmet>
        <title>Terms of Service - AA Mods</title>
        <link rel="canonical" href="https://aa-mods.vercel.app/terms" />
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
              <FileText className="w-12 h-12" />
            </div>
          </div>
          <CardTitle className="text-4xl font-bold">Terms of Service</CardTitle>
          <p className="text-muted-foreground mt-2">Last updated: {new Date().toLocaleDateString()}</p>
        </CardHeader>
        <CardContent className="pt-8 space-y-8">
          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <CheckCircle className="w-5 h-5 text-primary" />
              <h2>Acceptance of Terms</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              By accessing or using our services, you agree to be bound by these Terms of Service. 
              If you do not agree to all the terms and conditions, you may not access or use the services.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <AlertCircle className="w-5 h-5 text-primary" />
              <h2>Use of License</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Permission is granted to temporarily download one copy of the materials for personal, 
              non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xl font-semibold">
              <FileText className="w-5 h-5 text-primary" />
              <h2>Disclaimer</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The materials on our website are provided on an 'as is' basis. We make no warranties, 
              expressed or implied, and hereby disclaim and negate all other warranties including, 
              without limitation, implied warranties or conditions of merchantability.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
