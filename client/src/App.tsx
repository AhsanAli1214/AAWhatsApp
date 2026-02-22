import { Route, Switch } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Home from "@/pages/Home";
import AppDetails from "@/pages/AppDetails";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import SiteFooter from "@/components/SiteFooter";
import TelegramChatWidget from "@/components/TelegramChatWidget";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/app/:slug" component={AppDetails} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/:rest*" component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Helmet>
            <title>AA Mods - Download Premium WhatsApp Mods & Android Apps</title>
            <meta name="description" content="Download the latest AA WhatsApp Mods, CapCut Pro, Remini Mod, and more. Secure, fast, and always updated premium Android applications." />
            <meta name="keywords" content="AA WhatsApp, WhatsApp Mods, Android Apps, Premium APK, CapCut Pro, Remini Mod, YouTube Premium Mod" />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#059669" />
            <meta property="og:title" content="AA Mods - Premium WhatsApp & Android Modifications" />
            <meta property="og:description" content="The ultimate destination for secure and powerful Android app modifications." />
            <meta property="og:site_name" content="AA Mods" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://aa-mods.vercel.app" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="AA Mods - Premium Android Mods" />
            <meta name="twitter:description" content="Secure, fast, and updated premium Android applications." />
            <meta name="copyright" content="AA Mods" />
            <meta name="author" content="AA Mods Team" />
            <link rel="canonical" href="https://aa-mods.vercel.app" />
            <meta property="og:image" content="https://i.postimg.cc/0NRdTr3r/generated_image_6bb6c336_9b07_4a65_b01b_92ba8e39c556_modified.png" />
            <meta property="og:image:secure_url" content="https://i.postimg.cc/0NRdTr3r/generated_image_6bb6c336_9b07_4a65_b01b_92ba8e39c556_modified.png" />
            <meta property="og:image:type" content="image/png" />
            <meta name="twitter:image" content="https://i.postimg.cc/0NRdTr3r/generated_image_6bb6c336_9b07_4a65_b01b_92ba8e39c556_modified.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="dns-prefetch" href="https://i.postimg.cc" />
          </Helmet>
          <div className="flex min-h-screen flex-col bg-slate-50">
            <div className="flex-1">
              <Router />
            </div>
            <SiteFooter />
          </div>
          <TelegramChatWidget />
          <Analytics />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
