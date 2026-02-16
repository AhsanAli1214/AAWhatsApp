import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Download,
  Shield,
  CheckCircle,
  Clock,
  Users,
  Star,
  Smartphone,
  FileText,
  ArrowLeft,
  Zap,
  Package,
  Calendar,
  HardDrive,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { Footer } from "@/components/Footer";
import { APP_BASE_VERSIONS, APP_CHANGELOGS, APP_UPDATE_DATES, APP_VERSION_LOWER, APP_VERSIONS } from "@/config/appConfig";
import { SECURE_DOWNLOAD_ASSETS } from "@shared/downloadAssets";
import { DirectDownloadButton } from "@/components/DirectDownloadButton";

const parseChangelogLines = (changelog: string) =>
  changelog
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [rawTag, ...rest] = line.split(":");
      const tag = rawTag.trim().toLowerCase();
      const text = rest.length ? rest.join(":").trim() : line;
      if (tag === "new" || tag === "improved" || tag === "fixed") {
        return { type: tag, text };
      }
      return { type: null, text: line };
    });

const versionHistory = [
  {
    version: APP_VERSIONS.aaBusiness.replace("V", "V "),
    date: APP_UPDATE_DATES.aaBusiness.display,
    changes: parseChangelogLines(APP_CHANGELOGS.aaBusiness),
    current: true,
  },
];

const packageDetails = {
  name: "AA Business WhatsApp",
  version: "V 1.0",
  base: APP_BASE_VERSIONS.aaBusiness,
  size: "125 MB",
  android: "5.0+",
  developer: "AA Mods Team",
  updated: APP_UPDATE_DATES.aaBusiness.display,
};

const installSteps = [
  "Download the APK file from the button above",
  "Open your device Settings > Security",
  "Enable 'Install from Unknown Sources'",
  "Open the downloaded APK file",
  "Tap 'Install' and wait for completion",
  "Open the app and verify your number",
];

export default function BusinessDownload() {
  const [downloadCount, setDownloadCount] = useState(5247853);

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          Download AA Business WhatsApp {APP_VERSIONS.aaBusiness} APK (Official) – Secure Anti-Ban
          2026
        </title>
        <meta
          name="description"
          content={`Download AA Business WhatsApp ${APP_VERSIONS.aaBusiness} APK (Base ${APP_BASE_VERSIONS.aaBusiness}). Official safe download with Anti-Ban protection, Bulk Broadcasting, and Smart Analytics. Verified enterprise messaging for business users.`}
        />
        <meta
          name="keywords"
          content={`AA Business WhatsApp Download, Business WhatsApp APK Official, AA Business ${APP_VERSIONS.aaBusiness} Download, Enterprise WhatsApp Mod 2026, Secure Business WhatsApp Mod, download business whatsapp mod apk`}
        />
        <link
          rel="canonical"
          href="https://aa-mods.vercel.app/aa-business/download"
        />
        <link
          rel="alternate"
          href="https://aa-mods.vercel.app/aa-business/download"
          hrefLang="en"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "AA Business WhatsApp",
              "operatingSystem": "Android",
              "applicationCategory": "BusinessApplication",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "5247853"
              },
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
              },
              "softwareVersion": "1.0",
              "downloadUrl": "https://aa-mods.vercel.app/aa-business/download",
              "featureList": "Anti-Ban, Bulk Broadcasting, Business Analytics, Auto-Reply",
              "releaseDate": "${APP_UPDATE_DATES.aaBusiness.iso}"
            }
          `}
        </script>
      </Helmet>
      <BusinessNavbar />

      <section className="pt-24 pb-14 px-4">
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
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-black font-display tracking-tighter leading-[1] mb-8"
            >
              Enterprise <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-glow-blue italic">
                Download Portal
              </span>
            </motion.h1>
            <p className="text-xl text-muted-foreground mb-2">
              Version {packageDetails.version} | Base {packageDetails.base}
            </p>
            <p className="text-muted-foreground">
              Professional WhatsApp mod for businesses with Anti-Ban {APP_VERSION_LOWER.aaBusiness}
              protection.
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
              { icon: Zap, value: "99.9%", label: "Uptime" },
            ].map((stat, index) => (
              <Card key={index} className="border-blue-500/20 bg-blue-500/5">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-500">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center mb-12 gap-4"
          >
            <DirectDownloadButton
              asset={SECURE_DOWNLOAD_ASSETS.aaBusinessMain}
              buttonClassName="neon-download-btn neon-download-btn--blue relative group overflow-hidden px-12 py-6 text-2xl w-full max-w-md text-center"
            >
              <Download className="w-8 h-8" />
              Download AA Business
            </DirectDownloadButton>
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
                    <div
                      key={key}
                      className="flex justify-between py-2 border-b border-border last:border-0"
                    >
                      <span className="text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </span>
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
                    `Anti-Ban ${APP_VERSION_LOWER.aaBusiness} Protected`,
                    "No Malware or Spyware",
                    "Privacy Core Technology",
                    "Regular Security Updates",
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
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg"
                    >
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
            <h2 className="text-2xl font-bold mb-6 text-center">
              Version History
            </h2>
            <div className="space-y-4">
              {versionHistory.map((release, index) => (
                <Card
                  key={index}
                  className={
                    release.current ? "border-blue-500" : "border-border"
                  }
                >
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
                    <ul className="grid md:grid-cols-2 gap-3">
                      {release.changes.map((change, i) => {
                        const isObject = typeof change === "object";
                        const text = isObject ? change.text : change;
                        const type = isObject ? change.type : null;

                        return (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5" />
                            <div className="flex flex-wrap items-center gap-2">
                              {type === "new" && (
                                <span className="px-2 py-0.5 rounded text-[10px] font-black bg-blue-500/15 text-blue-400 border border-blue-500/20 uppercase tracking-wider">
                                  NEW
                                </span>
                              )}
                              {type === "improved" && (
                                <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                                  IMPROVED
                                </span>
                              )}
                              {type === "fixed" && (
                                <span className="px-2 py-0.5 rounded text-[10px] font-black bg-amber-500/15 text-amber-400 border border-amber-500/20 uppercase tracking-wider">
                                  FIXED
                                </span>
                              )}
                              <span>{text}</span>
                            </div>
                          </li>
                        );
                      })}
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
