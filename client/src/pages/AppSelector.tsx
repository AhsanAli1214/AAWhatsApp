import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Briefcase,
  Shield,
  Download,
  Sparkles,
  Users,
  Building2,
  Video,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { APP_VERSIONS } from "@/config/appConfig";

import { Helmet } from "react-helmet";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AppSelector() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>
          Download AAWhatsApp, AA Business & CapCut Pro APK (Official 2026)
        </title>
        <meta
          name="description"
          content={`Official AA Mods hub. Choose AAWhatsApp ${APP_VERSIONS.aaWhatsApp}, AA Business ${APP_VERSIONS.aaBusiness}, or CapCut Pro for the best experience. Both feature Anti-Ban v1.0 and Privacy Core™ technology.`}
        />
        <meta
          name="keywords"
          content="AA Mods collection, download AAWhatsApp, download AA Business, WhatsApp mod selector, secure WhatsApp mods, best WhatsApp mods 2026, anti-ban WhatsApp apk, official WhatsApp mod hub"
        />
        <meta
          property="og:title"
          content="AA Mods Collection - Official AAWhatsApp & AA Business"
        />
        <meta
          property="og:description"
          content="Select the world's most secure WhatsApp modifications. Anti-Ban protected and Privacy Core™ enabled."
        />
        <meta
          property="og:image"
          content="https://aa-mods.vercel.app/favicon.png"
        />
        <link rel="canonical" href="https://aa-mods.vercel.app/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "AA Mods Official",
            url: "https://aa-mods.vercel.app/",
            description:
              "Premium collection of secure WhatsApp modifications including AAWhatsApp and AA Business.",
          })}
        </script>
      </Helmet>
      <Navigation />

      <section className="pt-8 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex flex-col items-center mb-16">
              <img
                src="/favicon.png"
                alt="AA Mods Logo"
                className="w-48 h-48 md:w-56 md:h-56 mt-[30px] mb-[30px] object-contain group-hover:scale-110 transition-transform duration-500"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                width="224"
                height="224"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/favicon.png";
                }}
              />
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">
                  Choose Your WhatsApp Experience
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AA Mods <span className="text-primary italic">Collection</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Select the perfect application for your needs. From
                communication to creative editing - we've got you covered.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 group overflow-visible">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 group-hover:scale-110 transition-transform">
                    <img
                      src="https://i.postimg.cc/N0p0fsf1/81ddf498-7efe-4101-83b1-101a77abf065.jpg"
                      alt="AAWhatsApp Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">AAWhatsApp</h2>
                  <p className="text-muted-foreground mb-6">
                    The world's most secure WhatsApp mod for personal use.
                    Perfect for everyday messaging with maximum privacy.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-sm">Anti-Ban v1.0 Protection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-sm">10M+ Active Users</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5 text-primary" />
                      <span className="text-sm">Free Download</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link href="/aa-whatsapp">
                      <Button
                        className="w-full bg-primary hover:bg-primary/90"
                        size="lg"
                        data-testid="button-aa-whatsapp"
                      >
                        <MessageSquare className="w-5 h-5 mr-2" />
                        Explore AAWhatsApp
                      </Button>
                    </Link>
                    <Link href="/aa-whatsapp/download">
                      <Button
                        variant="outline"
                        className="w-full"
                        size="lg"
                        data-testid="button-aa-whatsapp-download"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download {APP_VERSIONS.aaWhatsApp}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 group overflow-visible">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 group-hover:scale-110 transition-transform">
                    <img
                      src="https://i.postimg.cc/zGq5LsQX/Cap_Cut_Pro.png"
                      alt="CapCut Pro Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">CapCut Pro</h2>
                  <p className="text-muted-foreground mb-6">
                    Professional video editing unlocked. No watermarks, full AI
                    tools, and premium templates for creators.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="text-sm">AI Features Unlocked</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm">No Watermark Export</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-primary" />
                      <span className="text-sm">Stable Mod (Ahsan Ali)</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link href="/capcut-pro">
                      <Button
                        className="w-full bg-primary hover:bg-primary/90"
                        size="lg"
                        data-testid="button-capcut-pro"
                      >
                        <Video className="w-5 h-5 mr-2" />
                        Explore CapCut Pro
                      </Button>
                    </Link>
                    <Link href="/capcut-pro/download">
                      <Button
                        variant="outline"
                        className="w-full"
                        size="lg"
                        data-testid="button-capcut-pro-download"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download {APP_VERSIONS.capcutPro}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full border-2 border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 group overflow-visible">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 group-hover:scale-110 transition-transform">
                    <img
                      src="https://i.postimg.cc/59vMs9dS/a8abc6a4_b6d9_4453_8a6a_08ffa7ad85d7.jpg"
                      alt="AA Business WhatsApp Icon"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-3">
                    AA Business WhatsApp
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Professional WhatsApp mod for businesses. Manage customers,
                    automate responses, and grow your business.
                  </p>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-blue-500" />
                      <span className="text-sm">Business Features</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-blue-500" />
                      <span className="text-sm">Anti-Ban v1.0 Protection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Download className="w-5 h-5 text-blue-500" />
                      <span className="text-sm">Free Download</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <Link href="/aa-business">
                      <Button
                        className="w-full bg-blue-500 hover:bg-blue-600"
                        size="lg"
                        data-testid="button-aa-business"
                      >
                        <Briefcase className="w-5 h-5 mr-2" />
                        Explore AA Business
                      </Button>
                    </Link>
                    <Link href="/aa-business/download">
                      <Button
                        variant="outline"
                        className="w-full border-blue-500/30 hover:bg-blue-500/10"
                        size="lg"
                        data-testid="button-aa-business-download"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download {APP_VERSIONS.aaBusiness}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground">
              Our apps feature exclusive Privacy Core™ technology - 100% secure
              with no access to your personal data.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
