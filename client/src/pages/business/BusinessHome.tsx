import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Briefcase, Shield, Download, CheckCircle, Star, Users, 
  MessageSquare, Clock, Bot, BarChart3, Tags, Smartphone,
  ArrowRight, Zap, Globe, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { Footer } from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const features = [
  {
    icon: Bot,
    title: "Auto Reply",
    description: "Set up automatic responses for when you're away or busy"
  },
  {
    icon: Tags,
    title: "Customer Labels",
    description: "Organize contacts with custom labels and categories"
  },
  {
    icon: BarChart3,
    title: "Message Statistics",
    description: "Track message delivery, read rates, and response times"
  },
  {
    icon: Clock,
    title: "Scheduled Messages",
    description: "Schedule messages to be sent at specific times"
  },
  {
    icon: MessageSquare,
    title: "Quick Replies",
    description: "Save and reuse frequently sent messages"
  },
  {
    icon: Globe,
    title: "Catalog Support",
    description: "Showcase your products and services directly in chat"
  }
];

const stats = [
  { value: "5M+", label: "Business Users" },
  { value: "4.9/5", label: "User Rating" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" }
];

export default function BusinessHome() {
  return (
    <div className="min-h-screen bg-background">
      <BusinessNavbar />
      
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <Badge className="mb-6 bg-blue-500/10 text-blue-500 border-blue-500/20">
              <Shield className="w-3 h-3 mr-1" />
              100% Secure - No Bank/Location Data Access
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AA Business <span className="text-blue-500 italic">WhatsApp</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              The ultimate WhatsApp mod for businesses. Manage customers, automate responses, and grow your business with advanced features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/aa-business/download">
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8" data-testid="button-download-business">
                  <Download className="w-5 h-5 mr-2" />
                  Download APK V2.0
                </Button>
              </Link>
              <a href="https://t.me/AaMods" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-blue-500/30 hover:bg-blue-500/10 text-lg px-8" data-testid="button-telegram-business">
                  Join Telegram
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="border-blue-500/20 bg-blue-500/5">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Business <span className="text-blue-500">Features</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your business communications professionally
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-blue-500/10 hover:border-blue-500/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-blue-500">AA Business</span>?
              </h2>
              <div className="space-y-4">
                {[
                  "All official WhatsApp Business features included",
                  "Advanced privacy controls for business data",
                  "Anti-ban v2.0 protection technology",
                  "Custom themes and UI personalization",
                  "Dual accounts support on same device",
                  "Regular updates with new features"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link href="/aa-business/features">
                  <Button variant="outline" className="border-blue-500/30 hover:bg-blue-500/10">
                    View All Features
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl bg-background/50 backdrop-blur border border-blue-500/20 flex items-center justify-center">
                  <Briefcase className="w-32 h-32 text-blue-500/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join millions of businesses using AA Business WhatsApp for professional communication.
            </p>
            <Link href="/aa-business/download">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-12">
                <Download className="w-5 h-5 mr-2" />
                Download Free
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
