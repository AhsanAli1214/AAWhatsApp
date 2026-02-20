import { Route, Switch } from "wouter";
import { Analytics } from "@vercel/analytics/react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Helmet } from "react-helmet";
import Home from "@/pages/Home";
import AppDetails from "@/pages/AppDetails";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/app/:slug" component={AppDetails} />
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
        </Helmet>
        <Router />
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
