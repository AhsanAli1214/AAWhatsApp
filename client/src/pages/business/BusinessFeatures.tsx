import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Bot,
  Tags,
  BarChart3,
  Clock,
  MessageSquare,
  Globe,
  Shield,
  Lock,
  Eye,
  EyeOff,
  Palette,
  Download,
  CheckCircle,
  Users,
  Smartphone,
  Bell,
  Image,
  FileText,
  Mic,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const businessFeatures = [
  {
    icon: Bot,
    title: "Auto Reply",
    description:
      "Set up automatic responses for when you're away, busy, or outside business hours. Create custom messages for different scenarios.",
    badge: "Popular",
  },
  {
    icon: Tags,
    title: "Customer Labels",
    description:
      "Organize your contacts with custom labels like 'New Lead', 'VIP Customer', 'Pending Payment', and more.",
    badge: null,
  },
  {
    icon: BarChart3,
    title: "Message Statistics",
    description:
      "Track delivery rates, read receipts, response times, and customer engagement metrics.",
    badge: "Pro",
  },
  {
    icon: Clock,
    title: "Scheduled Messages",
    description:
      "Plan and schedule messages to be sent at optimal times. Perfect for marketing campaigns.",
    badge: "Popular",
  },
  {
    icon: MessageSquare,
    title: "Quick Replies",
    description:
      "Save frequently used messages and send them with a single tap. Great for FAQs and common responses.",
    badge: null,
  },
  {
    icon: Globe,
    title: "Product Catalog",
    description:
      "Showcase your products and services directly in WhatsApp. Link to your online store.",
    badge: null,
  },
];

const privacyFeatures = [
  {
    icon: Eye,
    title: "Hide Online Status",
    description: "Appear offline while still using the app",
  },
  {
    icon: EyeOff,
    title: "Hide Blue Ticks",
    description: "Read messages without sending read receipts",
  },
  {
    icon: Lock,
    title: "App Lock",
    description: "Secure app with PIN, pattern, or fingerprint",
  },
  {
    icon: Shield,
    title: "Anti-Ban v1.0",
    description: "Advanced protection against account restrictions",
  },
];

const customizationFeatures = [
  "Custom themes and colors",
  "Unique chat bubbles",
  "Custom fonts",
  "Icon packs",
  "Notification styles",
  "Widget customization",
];

export default function BusinessFeatures() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>AA Business Features - Enterprise WhatsApp Tools 2026</title>
        <meta
          name="description"
          content="Explore AA Business WhatsApp features like automation, analytics, privacy controls, and anti-ban protection built for enterprise teams."
        />
        <meta
          name="keywords"
          content="AA Business features, WhatsApp Business mod tools, enterprise messaging features, AA Business automation, Anti-Ban business WhatsApp"
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/aa-business/features" />
      </Helmet>
      <BusinessNavbar />

      <section className="pt-24 pb-14 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-6 bg-blue-500/10 text-blue-500 border-blue-500/20">
              Powerful Features
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AA Business <span className="text-blue-500">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover all the powerful features that make AA Business WhatsApp
              the ultimate choice for professional communication.
            </p>
          </motion.div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">
              Business Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-blue-500/10 hover:border-blue-500/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                          <feature.icon className="w-6 h-6 text-blue-500" />
                        </div>
                        {feature.badge && (
                          <Badge
                            variant="secondary"
                            className="bg-blue-500/10 text-blue-500"
                          >
                            {feature.badge}
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">Privacy & Security</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {privacyFeatures.map((feature, index) => (
                  <Card key={index} className="border-blue-500/10">
                    <CardContent className="p-4 flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-blue-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{feature.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-6">Customization</h2>
              <Card className="border-blue-500/10">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {customizationFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl p-12"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Download AA Business WhatsApp now and transform your business
              communication.
            </p>
            <Link href="/aa-business/download">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
