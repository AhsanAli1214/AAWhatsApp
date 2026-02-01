import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

import heroImage from "@/assets/business-hero.png";
import analyticsImage from "@/assets/business-analytics.png";
import automationImage from "@/assets/business-automation.png";
import securityImage from "@/assets/security-hero.png";

const comparisonData = [
  { feature: "Bulk Messaging", official: false, gbBusiness: true },
  { feature: "Auto Reply", official: true, gbBusiness: true },
  { feature: "Broadcast Lists (1000+)", official: false, gbBusiness: true },
  { feature: "Business Analytics", official: false, gbBusiness: false },
  { feature: "Anti-Ban Protection", official: false, gbBusiness: true },
  { feature: "Privacy Core™", official: false, gbBusiness: false },
];

export default function BusinessHome() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-blue-500/30">
      <Helmet>
        <title>AA Business WhatsApp V1.0 - Professional Enterprise WhatsApp Mod 2026</title>
        <meta name="description" content="Official AA Business WhatsApp V1.0 (Base 2.25.29.77). The most secure enterprise WhatsApp mod for professional business management." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-48 pb-20 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-500 text-sm font-bold mb-6">
              Enterprise Grade - V 1.0
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tighter leading-tight">
              Scale Your <span className="text-blue-500">Business</span> with AI Automation
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              AA Business WhatsApp is the world's first enterprise-modded client featuring built-in analytics, bulk messaging, and Privacy Core™ security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-12 px-6 text-base font-bold rounded-xl">
                Download AA Business
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex-1"
          >
            <img 
              src={heroImage} 
              alt="AA Business Interface" 
              className="rounded-3xl shadow-2xl border border-blue-500/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-blue-500/5">
        <div className="container px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-blue-500/10 hover:border-blue-500/30 transition-all">
              <CardContent className="pt-8">
                <img src={automationImage} alt="Automation" className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">AI Automation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Smart auto-replies and message scheduling designed for high-volume customer interaction.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-blue-500/10 hover:border-blue-500/30 transition-all">
              <CardContent className="pt-8">
                <img src={analyticsImage} alt="Analytics" className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Business Insights</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track message delivery, read rates, and customer engagement directly in the app.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-blue-500/10 hover:border-blue-500/30 transition-all">
              <CardContent className="pt-8">
                <img src={securityImage} alt="Security" className="w-16 h-16 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Privacy Core™</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Enterprise-level encryption that keeps your business data and customer lists 100% private.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-32">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Why Choose <span className="text-blue-500">AA Business</span>?
              </h2>
              <p className="text-muted-foreground text-lg">
                The most advanced business tools for 2026
              </p>
            </div>
            <div className="overflow-x-auto rounded-3xl border border-blue-500/10 bg-blue-500/5">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-blue-500/10">
                    <th className="p-6 font-bold text-lg">Features</th>
                    <th className="p-6 font-bold text-lg text-blue-500">AA Business</th>
                    <th className="p-6 font-bold text-lg">Official</th>
                    <th className="p-6 font-bold text-lg">GB Business</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="border-b border-blue-500/10 last:border-0 hover:bg-blue-500/10 transition-colors">
                      <td className="p-6 font-medium">{row.feature}</td>
                      <td className="p-6"><CheckCircle2 className="w-6 h-6 text-blue-500" /></td>
                      <td className="p-6">{row.official ? <CheckCircle2 className="w-6 h-6 text-blue-500" /> : <XCircle className="w-6 h-6 text-muted-foreground" />}</td>
                      <td className="p-6">{row.gbBusiness ? <CheckCircle2 className="w-6 h-6 text-blue-500" /> : <XCircle className="w-6 h-6 text-muted-foreground" />}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
