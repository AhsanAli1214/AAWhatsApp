import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, BarChart3, ShieldCheck, Zap, MessageSquare, Users, Globe, ArrowRight, Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";

const comparisonData = [
  { feature: "Bulk Messaging (10k+)", official: false, gbBusiness: true, aaBusiness: true },
  { feature: "AI Auto-Reply Bot", official: true, gbBusiness: true, aaBusiness: true },
  { feature: "Advanced CRM Analytics", official: false, gbBusiness: false, aaBusiness: true },
  { feature: "Privacy Core™ Stealth", official: false, gbBusiness: false, aaBusiness: true },
  { feature: "Anti-Ban Protection V2", official: false, gbBusiness: true, aaBusiness: true },
  { feature: "Multi-Agent Support", official: false, gbBusiness: false, aaBusiness: true },
];

const stats = [
  { label: "Active Businesses", value: "500K+" },
  { label: "Messages Sent", value: "1B+" },
  { label: "Uptime Security", value: "99.9%" },
  { label: "User Satisfaction", value: "4.9/5" },
];

export default function BusinessHome() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-blue-500/30">
      <Helmet>
        <title>AA Business WhatsApp V1.0 - Professional Enterprise WhatsApp Mod 2026</title>
        <meta name="description" content="Official AA Business WhatsApp V1.0 (Base 2.25.29.77). The most secure enterprise WhatsApp mod for professional business management." />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 container mx-auto px-4 overflow-hidden selection:bg-blue-500/30">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/2 left-0 -z-10 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -translate-x-1/2" />
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <Badge variant="outline" className="px-4 py-1 border-blue-500/30 text-blue-500 font-bold tracking-wider animate-pulse">
              ENTERPRISE EDITION V1.0 AVAILABLE NOW
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-[1.1] bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
              Elevate Your <span className="text-blue-500">Enterprise</span> Communication
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
              Transform customer engagement with the world's most powerful business mod. Built-in CRM, AI-driven automation, and military-grade Privacy Core™ security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 text-lg font-bold rounded-2xl shadow-lg shadow-blue-500/25 group">
                Download Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-bold rounded-2xl border-blue-500/20 hover:bg-blue-500/5">
                <Play className="mr-2 w-5 h-5 fill-current" />
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-border/50">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl font-black text-blue-500">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase font-bold tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-[40px] blur-3xl -z-10" />
            <img 
              src="/images/business-hero-new.png" 
              alt="AA Business Enterprise Interface" 
              className="rounded-[40px] shadow-2xl border-4 border-white/10 relative z-10 hover:scale-[1.02] transition-transform duration-700"
            />
            {/* Floating UI Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 bg-background/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-blue-500/20 z-20 hidden xl:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                  <BarChart3 className="text-green-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold">Conversion Rate</div>
                  <div className="text-xl font-black">+42.5%</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-border/50 bg-muted/30">
        <div className="container px-4">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-8">Trusted by industry leaders in 150+ countries</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
            <span className="text-2xl font-black">FORBES</span>
            <span className="text-2xl font-black">TECHCRUNCH</span>
            <span className="text-2xl font-black">WIRED</span>
            <span className="text-2xl font-black">THE VERGE</span>
          </div>
        </div>
      </section>

      {/* core features */}
      <section className="py-32 bg-gradient-to-b from-transparent to-blue-500/5">
        <div className="container px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Everything You Need To <span className="text-blue-500">Scale</span></h2>
            <p className="text-lg text-muted-foreground">Professional tools engineered for modern commerce and elite marketing teams.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background/50 backdrop-blur-sm border-blue-500/20 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-500 p-8 rounded-[32px] shadow-xl shadow-blue-500/5 group">
              <div className="w-16 h-16 bg-blue-500/15 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Zap className="text-blue-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Automation</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Deploy AI-powered chatbots that handle 80% of routine customer inquiries 24/7 without human intervention.
              </p>
              <img src="/images/business-automation-new.png" className="rounded-2xl w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt="Automation" />
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-blue-500/20 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-500 p-8 rounded-[32px] shadow-xl shadow-blue-500/5 group">
              <div className="w-16 h-16 bg-blue-500/15 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <BarChart3 className="text-blue-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-Time Analytics</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Comprehensive dashboards showing conversion rates, heatmaps, and campaign ROI directly inside the application.
              </p>
              <img src="/images/business-analytics-new.png" className="rounded-2xl w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt="Analytics" />
            </Card>

            <Card className="bg-background/50 backdrop-blur-sm border-blue-500/20 hover:border-blue-500/60 hover:-translate-y-2 transition-all duration-500 p-8 rounded-[32px] shadow-xl shadow-blue-500/5 group">
              <div className="w-16 h-16 bg-blue-500/15 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck className="text-blue-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Privacy Core™ Stealth</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                End-to-end encrypted mod with built-in VPN and anti-ban protection to keep your business data untouchable.
              </p>
              <img src="/images/business-security-new.jpg" className="rounded-2xl w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt="Security" />
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-32">
        <div className="container px-4">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Bulk Marketing <span className="text-blue-500">Mastery</span></h2>
                <p className="text-lg text-muted-foreground">Reach thousands of prospects instantly without the risk of being blocked.</p>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Users className="text-blue-500 w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">Smart Broadcast Lists</h4>
                    <p className="text-muted-foreground">Send messages to 10,000+ contacts simultaneously with personalized dynamic tags.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="text-blue-500 w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">Auto-CRM Integration</h4>
                    <p className="text-muted-foreground">Automatically log conversations into your existing sales pipeline for follow-ups.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Globe className="text-blue-500 w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold">Multi-Language Support</h4>
                    <p className="text-muted-foreground">Localize your auto-replies for a global customer base with built-in translation.</p>
                  </div>
                </div>
              </div>
              
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 text-lg font-bold rounded-2xl">
                Explore All Features
              </Button>
            </div>
            
            <div className="flex-1 bg-muted rounded-[40px] p-8 relative">
              <div className="absolute inset-0 bg-blue-500/5 blur-2xl -z-10" />
              <img src="/images/business-hero-new.png" className="rounded-[32px] shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700" alt="Features" />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20 space-y-4">
              <Badge className="bg-blue-500/10 text-blue-500 border-blue-500/20 px-4 py-1">THE BENCHMARK</Badge>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                Professional <span className="text-blue-500">Advantage</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Compare AA Business with industry standard solutions and see why professional teams are making the switch.
              </p>
            </div>
            
            <div className="overflow-x-auto rounded-[32px] border border-blue-500/20 bg-background shadow-2xl shadow-blue-500/10">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-blue-500/10 bg-blue-500/5">
                    <th className="p-8 font-black text-lg uppercase tracking-widest text-blue-900 dark:text-blue-100">Capabilities</th>
                    <th className="p-8 font-black text-lg text-blue-600 uppercase tracking-widest bg-blue-500/10">AA Business</th>
                    <th className="p-8 font-black text-lg uppercase tracking-widest opacity-50 text-center">Official App</th>
                    <th className="p-8 font-black text-lg uppercase tracking-widest opacity-50 text-center">GB Business</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-500/10">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="group hover:bg-blue-500/5 transition-colors">
                      <td className="p-8 font-bold text-lg group-hover:text-blue-600 transition-colors">{row.feature}</td>
                      <td className="p-8 bg-blue-500/5">
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-8 h-8 text-blue-600 fill-blue-500/20" />
                          <span className="text-sm font-black text-blue-600 uppercase">UNLOCKED</span>
                        </div>
                      </td>
                      <td className="p-8">
                        <div className="flex justify-center">
                          {row.official ? <CheckCircle2 className="w-6 h-6 text-blue-500/40" /> : <XCircle className="w-6 h-6 text-destructive/40" />}
                        </div>
                      </td>
                      <td className="p-8">
                        <div className="flex justify-center">
                          {row.gbBusiness ? <CheckCircle2 className="w-6 h-6 text-blue-500/40" /> : <XCircle className="w-6 h-6 text-destructive/40" />}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 container mx-auto px-4">
        <div className="bg-blue-600 rounded-[48px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/40">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">Ready to Dominate Your <span className="underline decoration-white/30">Market?</span></h2>
            <p className="text-xl text-blue-50/80 max-w-2xl mx-auto leading-relaxed">
              Join 500,000+ businesses already using AA Mods to revolutionize their customer experience. No hidden fees. Instant setup.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 h-16 px-12 text-xl font-black rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95">
                <Download className="mr-3 w-6 h-6" />
                Get AA Business Now
              </Button>
            </div>
            <p className="text-sm text-blue-100/60 font-medium">Compatible with Android 5.0+ • Base 2.25.29.77 • Anti-Ban Secured</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
