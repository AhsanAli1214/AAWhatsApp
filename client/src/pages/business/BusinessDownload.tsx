import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Download, Shield, CheckCircle, Clock, Users, Star, 
  Smartphone, FileText, ArrowLeft, AlertTriangle, Zap,
  Package, Calendar, HardDrive, Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { Footer } from "@/components/Footer";
import { AdDownloadButton } from "@/components/AdDownloadButton";

const versionHistory = [
  {
    version: "V 2.0",
    date: "January 2026",
    changes: [
      "Anti-Ban v2.0 technology",
      "Enhanced auto-reply system",
      "New business analytics dashboard",
      "Improved catalog management",
      "Performance optimizations"
    ],
    current: true
  },
  {
    version: "V 1.9",
    date: "October 2025",
    changes: [
      "Customer label system",
      "Scheduled messages",
      "Quick replies feature",
      "Bug fixes"
    ],
    current: false
  },
  {
    version: "V 1.8",
    date: "July 2025",
    changes: [
      "Message statistics",
      "Theme customization",
      "Privacy controls",
      "Stability improvements"
    ],
    current: false
  }
];

const packageDetails = {
  name: "AA Business WhatsApp",
  version: "V 2.0",
  base: "2.25.36.73",
  size: "122 MB",
  android: "5.0+",
  developer: "AA Mods Team",
  updated: "January 2026"
};

const installSteps = [
  "Download the APK file from the button above",
  "Open your device Settings > Security",
  "Enable 'Install from Unknown Sources'",
  "Open the downloaded APK file",
  "Tap 'Install' and wait for completion",
  "Open the app and verify your number"
];

export default function BusinessDownload() {
  const [downloadCount, setDownloadCount] = useState(5247853);

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <BusinessNavbar />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link href="/aa-business">
            <Button variant="ghost" size="sm" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to AA Business
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <Badge className="mb-6 bg-blue-500/10 text-blue-500 border-blue-500/20">
              Official Download Page
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Download <span className="text-blue-500 italic">AA Business</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Version {packageDetails.version} | Base {packageDetails.base}
            </p>
            <p className="text-muted-foreground">
              Professional WhatsApp mod for businesses with Anti-Ban v2.0 protection.
            </p>
            <p className="text-blue-500 font-semibold mt-4">
              {downloadCount.toLocaleString()}+ downloads and counting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              { icon: Download, value: "5M+", label: "Total Downloads" },
              { icon: Users, value: "3M+", label: "Active Businesses" },
              { icon: Star, value: "4.9/5", label: "User Rating" },
              { icon: Zap, value: "99.9%", label: "Uptime" }
            ].map((stat, index) => (
              <Card key={index} className="border-blue-500/20 bg-blue-500/5">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-500">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-12"
          >
            <AdDownloadButton 
              downloadUrl="https://www.mediafire.com/file/aa-business-whatsapp/AABusinessWhatsApp_v2.0.apk"
              variant="business"
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-blue-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="w-5 h-5 text-blue-500" />
                    Package Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(packageDetails).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-blue-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    Safety Verification
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Verified by AA Mods Team",
                    "Anti-Ban v2.0 Protected",
                    "No Malware or Spyware",
                    "Privacy Core Technology",
                    "Regular Security Updates"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="border-blue-500/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-blue-500" />
                  Installation Guide
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {installSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-sm">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Version History</h2>
            <div className="space-y-4">
              {versionHistory.map((release, index) => (
                <Card key={index} className={release.current ? "border-blue-500" : "border-border"}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold">{release.version}</h3>
                        {release.current && (
                          <Badge className="bg-blue-500">Current</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{release.date}</span>
                      </div>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {release.changes.map((change, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          {change}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
