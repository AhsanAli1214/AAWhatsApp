import { Route, Switch } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet } from "react-helmet";
import Home from "@/pages/Home";
import AppDetails from "@/pages/AppDetails";
import TermsOfService from "@/pages/TermsOfService";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import SiteFooter from "@/components/SiteFooter";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/app/:slug" component={AppDetails} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/:rest*" component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Helmet>
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#059669" />
          <meta property="og:site_name" content="AA Mods" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="copyright" content="AA Mods" />
          <meta name="author" content="AA Mods Team" />
          <link rel="preconnect" href="https://i.postimg.cc" />
          <link rel="dns-prefetch" href="https://i.postimg.cc" />
        </Helmet>
        <div className="flex min-h-screen flex-col bg-slate-50">
          <div className="flex-1">
            <Router />
          </div>
          <SiteFooter />
        </div>
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
