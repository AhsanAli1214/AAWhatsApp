import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  AlertTriangle,
  Download,
  ShieldCheck,
  Users,
  Trash2,
  Settings,
  FolderDown,
  Wifi,
  Bug,
  ImageDown,
  CheckCircle2,
} from "lucide-react";
import {
  APP_BASE_VERSIONS,
  APP_UPDATE_DATES,
  APP_VERSIONS,
  APP_FEATURES,
} from "@/config/appConfig";
import reminiLogo from "@assets/download_1771149808669.png";
import { SECURE_DOWNLOAD_ASSETS } from "@shared/downloadAssets";
import { DirectDownloadButton } from "@/components/DirectDownloadButton";

export default function ReminiDownloadPage() {
  const canonicalUrl = "https://aa-mods.vercel.app/remini-mod/download";
  const heroImageUrl = "https://i.postimg.cc/W4hMbDm9/image-1771089734969956.png";


  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[#8B0000]/30">
      <Helmet>
        <title>Download & Install Remini Mod APK (Safe Guide & Troubleshooting)</title>
        <meta
          name="description"
          content="Learn how to safely download and install our community-tested Remini Mod APK. This page provides a step-by-step guide, discusses risks, and offers detailed troubleshooting for common errors."
        />
        <meta
          name="keywords"
          content="Remini Mod APK download, install Remini Mod APK, safe APK download, modded APK risks, App not installed error, Remini troubleshooting, Android installation guide, community support"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Download & Install Remini Mod APK (Safe Guide)" />
        <meta property="og:description" content="Step-by-step Remini Mod APK install guide with troubleshooting, safety notes, and feature verification." />
        <meta property="og:image" content={heroImageUrl} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Remini Mod APK Download Guide" />
        <meta name="twitter:description" content="Safe install steps, known issues, and fixes for Remini Mod APK users." />
        <meta name="twitter:image" content={heroImageUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How to install Remini Mod APK",
            step: [
              {"@type": "HowToStep", name: "Uninstall official Remini app"},
              {"@type": "HowToStep", name: "Enable install from unknown sources"},
              {"@type": "HowToStep", name: "Install APK and grant required permissions"}
            ]
          })}
        </script>
      </Helmet>

      <Navigation />

      <div className="container mx-auto px-4 pt-28 pb-16 max-w-6xl">
        <div className="text-center mb-10">
          <img src={reminiLogo} alt="Remini" className="w-20 h-20 mx-auto mb-5 rounded-2xl border-2 border-[#FF0000]/20" />
          <Badge className="mb-4 bg-[#FF0000]/10 text-[#FF0000] border-[#FF0000]/20 uppercase tracking-[0.14em] font-black px-3 py-1 text-[11px]">
            Responsible Download Guide
          </Badge>
          <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight mb-3">
            Download & Install <span className="text-[#FF0000] italic">Remini Mod APK</span>
          </h1>
          <p className="text-muted-foreground text-base font-medium max-w-3xl mx-auto">
            This guide explains how to install the Remini Mod APK from AA Mods in a safer way, with full transparency about risks, compatibility, and known troubleshooting steps.
          </p>
        </div>

        <Card className="rounded-2xl border-[#FF0000]/20 bg-[#FF0000]/5 p-4 md:p-6 mb-8">
          <CardContent className="p-0">
            <div className="text-center mb-4">
              <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight mb-1">Direct Download</h2>
              <p className="text-sm text-muted-foreground font-medium">
                Click the button below to download the official APK package.
              </p>
            </div>

            <div className="flex justify-center">
              <DirectDownloadButton
                asset={SECURE_DOWNLOAD_ASSETS.reminiModMain}
                buttonClassName="neon-download-btn [--download-glow:#FF0000] [--download-border:#ff8a8a] [--download-text:#ffffff] w-full max-w-2xl min-h-[62px] md:min-h-[82px] px-4 md:px-5 py-2.5 md:py-3 text-sm md:text-base"
              >
                <div className="w-full flex items-center justify-between gap-2 md:gap-4">
                  <div className="flex items-center gap-2 md:gap-4 text-left min-w-0">
                  <Download className="h-5 w-5 md:h-6 md:w-6 shrink-0" />
                  <div className="min-w-0">
                    <span className="block leading-tight break-words">
                      Download Remini {APP_VERSIONS.reminiMod}
                    </span>
                    <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.14em] opacity-75 leading-tight">
                      Official package
                    </span>
                  </div>
                  </div>
                  <Badge className="bg-white/20 text-white font-black px-2.5 py-1 shrink-0">
                  Direct
                  </Badge>
                </div>
              </DirectDownloadButton>
            </div>

            <div className="text-center text-xs text-muted-foreground font-medium mt-4">
              Click the button to start APK download.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs font-semibold text-muted-foreground">
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-[#FF0000]" /> No login required</span>
              <span className="opacity-50">•</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-[#FF0000]" /> No VPN required</span>
              <span className="opacity-50">•</span>
              <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-[#FF0000]" /> No root required</span>
            </div>

            <div className="grid md:grid-cols-3 gap-3 mt-4 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
              <p>Version: {APP_VERSIONS.reminiMod}</p>
              <p>Base: {APP_BASE_VERSIONS.reminiMod}</p>
              <p>Updated: {APP_UPDATE_DATES.reminiMod.display}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-4">
              {APP_FEATURES.reminiMod.map((feature) => (
                <div key={feature} className="rounded-xl border border-[#FF0000]/20 bg-background/40 px-3 py-2 text-xs font-bold text-center">
                  {feature}
                </div>
              ))}
            </div>

          </CardContent>
        </Card>

        <Card className="rounded-3xl border-amber-500/30 bg-amber-500/5 mb-10">
          <CardHeader>
            <CardTitle className="text-xl font-black uppercase tracking-tight text-amber-600 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" /> Disclaimer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed">
              This is a modified app and is not affiliated with Bending Spoons (official Remini developer). Using modded APKs has security risks, may violate terms of service, and could raise legal/copyright concerns depending on your region.
            </p>
          </CardContent>
        </Card>


        <section className="mb-12">
          <Card className="rounded-3xl border-[#FF0000]/20 bg-[#FF0000]/5">
            <CardHeader>
              <CardTitle className="text-xl font-black uppercase tracking-tight text-[#FF0000] flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> Feature Highlights
              </CardTitle>
              <p className="text-sm text-muted-foreground font-medium">
                Live features synced from app config for Remini Mod {APP_VERSIONS.reminiMod}.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {APP_FEATURES.reminiMod.map((feature) => (
                  <div key={feature} className="rounded-xl border border-[#FF0000]/20 bg-background/50 p-3 text-sm font-bold flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#FF0000] mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <Card className="rounded-3xl border-[#FF0000]/20 bg-muted/20 mb-10">
          <CardHeader>
            <CardTitle className="text-xl font-black uppercase tracking-tight">Pre-Install Safety Checklist</CardTitle>
          </CardHeader>
          <CardContent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm font-medium">
            {[
              "Backup important media before installing",
              "Keep at least 1 GB free storage",
              "Disable unknown source access after setup",
              "Use only official AA Mods links"
            ].map((item) => (
              <div key={item} className="rounded-xl border border-[#FF0000]/15 bg-background/50 p-3 flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#FF0000] mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>


        <section className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: ShieldCheck, t: "Security Scanned", d: "Files are checked before listing using multi-engine scanning workflows." },
            { icon: Users, t: "Community Approved", d: "Users report functionality feedback so unstable builds can be flagged quickly." },
          ].map((item, idx) => (
            <Card key={idx} className="rounded-3xl border-[#FF0000]/15 bg-muted/20">
              <CardHeader>
                <CardTitle className="font-black uppercase tracking-tight text-base md:text-lg flex items-center gap-2">
                  <item.icon className="h-5 w-5 text-[#FF0000]" /> {item.t}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-medium">{item.d}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-5">Step-by-Step Installation Guide</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: Trash2,
                t: "Step 1: Uninstall Official App",
                d: "Remove the Play Store Remini first. Signature mismatch causes 'App not installed' errors.",
              },
              {
                icon: Settings,
                t: "Step 2: Enable Unknown Sources",
                d: "Settings > Security/Apps > Install unknown apps. Enable only for your browser or file manager.",
              },
              {
                icon: FolderDown,
                t: "Step 3: Install APK",
                d: "Open Downloads, tap APK, and install. For split builds, use SAI installer if required.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="rounded-3xl border-[#FF0000]/15">
                <CardHeader>
                  <CardTitle className="font-black uppercase tracking-tight text-base md:text-lg flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-[#FF0000]" /> {item.t}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-medium">{item.d}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3 font-semibold">
            Important: Disable unknown-source permission again after installation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-5">Troubleshooting & FAQ</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Bug,
                q: "'App not installed' / 'Error parsing package'",
                a: "Uninstall official Remini, free storage, re-download APK, and verify Android version compatibility.",
              },
              {
                icon: AlertTriangle,
                q: "App crashes or black screen",
                a: "Clear cache/data, restart device, and close heavy background apps before relaunching.",
              },
              {
                icon: Wifi,
                q: "Network error: 'Oops, something went wrong'",
                a: "Check internet stability, disable VPN, and retry later if Remini servers are overloaded.",
              },
              {
                icon: ImageDown,
                q: "Enhanced photos are not saving",
                a: "Grant storage/files permission and ensure there is enough free space on your phone.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="rounded-3xl border-[#FF0000]/15 bg-muted/20">
                <CardHeader>
                  <CardTitle className="font-black tracking-tight text-base md:text-lg flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-[#FF0000]" /> {item.q}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-medium">{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
