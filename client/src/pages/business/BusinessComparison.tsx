import { motion } from "framer-motion";
import { Link } from "wouter";
import { CheckCircle, XCircle, Download, Shield, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BusinessNavbar } from "@/components/BusinessNavbar";
import { Footer } from "@/components/Footer";

const comparisonData = [
  { feature: "Bulk Messaging", aaBusiness: true, official: false, gbBusiness: true, fmBusiness: false },
  { feature: "Auto Reply", aaBusiness: true, official: true, gbBusiness: true, fmBusiness: false },
  { feature: "Customer Labels", aaBusiness: true, official: true, gbBusiness: true, fmBusiness: true },
  { feature: "Message Statistics", aaBusiness: true, official: false, gbBusiness: false, fmBusiness: false },
  { feature: "Scheduled Messages", aaBusiness: true, official: false, gbBusiness: true, fmBusiness: true },
  { feature: "Quick Replies", aaBusiness: true, official: true, gbBusiness: true, fmBusiness: true },
  { feature: "Product Catalog", aaBusiness: true, official: true, gbBusiness: true, fmBusiness: true },
  { feature: "Hide Online Status", aaBusiness: true, official: false, gbBusiness: true, fmBusiness: true },
  { feature: "Hide Blue Ticks", aaBusiness: true, official: false, gbBusiness: true, fmBusiness: true },
  { feature: "Custom Themes", aaBusiness: true, official: false, gbBusiness: true, fmBusiness: true },
  { feature: "App Lock", aaBusiness: true, official: false, gbBusiness: true, fmBusiness: true },
  { feature: "Anti-Ban v1.0", aaBusiness: true, official: false, gbBusiness: false, fmBusiness: false },
  { feature: "Privacy Core", aaBusiness: true, official: false, gbBusiness: false, fmBusiness: false },
  { feature: "No Root Required", aaBusiness: true, official: true, gbBusiness: true, fmBusiness: true },
  { feature: "Regular Updates", aaBusiness: true, official: true, gbBusiness: true, fmBusiness: true },
  { feature: "Dual Account Support", aaBusiness: true, official: false, gbBusiness: true, fmBusiness: true }
];

const apps = [
  { name: "AA Business", color: "text-blue-500", bg: "bg-blue-500" },
  { name: "Official WA Business", color: "text-green-500", bg: "bg-green-500" },
  { name: "GB Business", color: "text-orange-500", bg: "bg-orange-500" },
  { name: "FM Business", color: "text-purple-500", bg: "bg-purple-500" }
];

export default function BusinessComparison() {
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
            <Badge className="mb-6 bg-blue-500/10 text-blue-500 border-blue-500/20">
              Feature Comparison
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AA Business vs <span className="text-blue-500">Competitors</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how AA Business WhatsApp compares to other business WhatsApp modifications and the official app.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="overflow-x-auto mb-12"
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  {apps.map((app, index) => (
                    <th key={index} className={`text-center p-4 font-semibold ${app.color}`}>
                      {app.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="p-4">{row.feature}</td>
                    <td className="text-center p-4">
                      {row.aaBusiness ? (
                        <CheckCircle className="w-5 h-5 text-blue-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      {row.official ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      {row.gbBusiness ? (
                        <CheckCircle className="w-5 h-5 text-orange-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                    <td className="text-center p-4">
                      {row.fmBusiness ? (
                        <CheckCircle className="w-5 h-5 text-purple-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-blue-500/20 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-500" />
                    Why Choose AA Business?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "Exclusive Anti-Ban v1.0 technology",
                    "Privacy Core - no data collection",
                    "Advanced message statistics",
                    "Professional customer management",
                    "Regular security updates",
                    "Active community support"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                      <span>{item}</span>
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
              <Card className="border-blue-500/20 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    Security Advantage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    AA Business WhatsApp is the only business mod with our exclusive Privacy Core technology. While other mods may access your device data, AA Business is completely permission-clean.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>No access to bank apps</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>No location tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      <span>No file system access</span>
                    </div>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Switch?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join millions of businesses that trust AA Business WhatsApp for secure communication.
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
