import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, CheckCircle2, Shield, Zap, Sparkles, Video, Crown, Cpu, Layers } from "lucide-react";
import { Link } from "wouter";
import { APP_VERSIONS, APP_UPDATE_DATES, APP_BASE_VERSIONS } from "@/config/appConfig";
import { Helmet } from "react-helmet";

export default function CapCutProPage() {
  const features = [
    { icon: Sparkles, title: "AI Features", description: "AI Background Removal, Auto Captions, and Smart Cut working 100%." },
    { icon: Video, title: "Premium Templates", description: "Access all trending and VIP templates without network errors." },
    { icon: Crown, title: "No Watermark", description: "Professional export in 4K & 60FPS without any branding." },
    { icon: Shield, title: "Stable & Secure", description: "Security notice removed, regional locks bypassed, and optimized for speed." },
    { icon: Cpu, title: "Device Optimized", description: "Support for armeabi-v7a and arm64-v8a architectures." },
    { icon: Layers, title: "Business Mode", description: "Advanced creator tools and professional workflow unlocked." },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>CapCut Pro MOD APK - All Premium Features Unlocked | AA Mods</title>
        <meta name="description" content="Download CapCut Pro MOD APK by AA Mods. All premium features unlocked, AI tools working, 4K export, no watermark, and stable performance. Developed by Ahsan Ali." />
      </Helmet>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">By Ahsan Ali (AA Mods)</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            CapCut Pro MOD APK
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            The ultimate unlocked video editing experience. Stable, watermark-free, and all AI features fully functional.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/capcut-pro/download">
              <Button size="lg" className="h-12 px-8">
                <Download className="mr-2 h-5 w-5" /> Download Latest Stable
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover-elevate">
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground uppercase font-bold mb-1">Version</p>
                <p className="font-mono">{APP_VERSIONS.capcutPro}</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground uppercase font-bold mb-1">Base</p>
                <p className="font-mono">{APP_BASE_VERSIONS.capcutPro}</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground uppercase font-bold mb-1">Android</p>
                <p className="font-mono">6.0+</p>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground uppercase font-bold mb-1">Updated</p>
                <p className="font-mono">{APP_UPDATE_DATES.capcutPro.short}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose CapCut Pro by AA Mods?</h2>
          <p className="mb-4">
            Ahsan Ali (AA Mods) focuses on stability and real-world performance. Unlike standard mods, this version is engineered to bypass server-side checks for templates and AI features.
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none p-0">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-500" /> Fully offline-capable</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-500" /> Server-safe edits</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-500" /> No forced login required</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-green-500" /> Regional restrictions bypassed</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
