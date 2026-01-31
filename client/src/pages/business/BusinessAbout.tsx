import { motion } from "framer-motion";
import {
  Briefcase,
  Shield,
  Users,
  Award,
  CheckCircle,
  Target,
  Heart,
  Zap,
  Globe,
  Lock,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { Footer } from "@/components/Footer";
import { AdsBanner } from "@/components/AdsBanner";

const values = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "Your business data is protected with enterprise-grade encryption and privacy controls.",
  },
  {
    icon: Target,
    title: "Business Focused",
    description:
      "Features designed specifically for business communication and customer management.",
  },
  {
    icon: Heart,
    title: "User Experience",
    description:
      "Intuitive interface that makes business communication effortless.",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Optimized for speed and reliability, even with high message volumes.",
  },
];

const timeline = [
  {
    year: "2022",
    title: "AA Business Launched",
    description: "Initial release with core business features",
  },
  {
    year: "2023",
    title: "Auto Reply System",
    description: "Introduced automated response capabilities",
  },
  {
    year: "2024",
    title: "Analytics Dashboard",
    description: "Added message statistics and insights",
  },
  {
    year: "2026",
    title: "V1.0 Enterprise Release",
    description: "Official stable release with Anti-Ban v1.0 and CRM tools",
  },
];

export default function BusinessAbout() {
  return (
    <div className="min-h-screen bg-background">
      <BusinessNavbar />

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-blue-500">AA Business</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AA Business WhatsApp is a professional-grade WhatsApp modification
              designed specifically for businesses and entrepreneurs who need
              more from their messaging platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                We believe every business deserves access to professional
                communication tools without compromising on privacy or security.
                AA Business WhatsApp empowers small and medium businesses to
                compete with enterprise-level communication capabilities.
              </p>
              <p className="text-muted-foreground">
                Our team of dedicated developers works tirelessly to bring you
                the latest features while maintaining the highest standards of
                security and reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "5M+", label: "Business Users" },
                { value: "50+", label: "Countries" },
                { value: "99.9%", label: "Uptime" },
                { value: "4.9", label: "Rating" },
              ].map((stat, index) => (
                <Card key={index} className="border-blue-500/20">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-500 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          <AdsBanner />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-blue-500/10 hover:border-blue-500/30 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-blue-500" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <AdsBanner />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Journey
            </h2>
            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                      {item.year}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-blue-500/20 mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
