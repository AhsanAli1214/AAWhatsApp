import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/useTranslation";
import { BackToTop } from "@/components/BackToTop";
import ScrollToTop from "@/components/ScrollToTop";
import { AdBlockDetector } from "@/components/AdBlockDetector";
import { Helmet } from "react-helmet";
import { OfflineBanner } from "@/components/OfflineBanner";
import { PageTransition } from "@/components/PageTransition";
import { TapFeedback } from "@/components/TapFeedback";
import { AppSplash } from "@/components/AppSplash";

import Home from "@/pages/Home";
import AppSelector from "@/pages/AppSelector";
import AAWhatsAppPage from "@/pages/AAWhatsAppPage";
import AABusinessWhatsAppPage from "@/pages/AABusinessWhatsAppPage";
import BusinessDownloadPage from "@/pages/BusinessDownloadPage";
import About from "@/pages/About";
import Comparison from "@/pages/Comparison";
import FAQ from "@/pages/FAQ";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Support from "@/pages/Support";
import DownloadPage from "@/pages/DownloadPage";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import NotFound from "@/pages/not-found";

import BusinessHome from "@/pages/business/BusinessHome";
import BusinessAbout from "@/pages/business/BusinessAbout";
import BusinessFeatures from "@/pages/business/BusinessFeatures";
import BusinessDownload from "@/pages/business/BusinessDownload";
import BusinessComparison from "@/pages/business/BusinessComparison";
import BusinessFAQ from "@/pages/business/BusinessFAQ";
import BusinessBlog from "@/pages/business/BusinessBlog";

import Sitemap from "@/pages/Sitemap";

function Router() {
  return (
    <Switch>
      <Route path="/" component={AppSelector} />
      <Route path="/aa-whatsapp" component={Home} />
      <Route path="/aa-whatsapp/about" component={About} />
      <Route path="/aa-whatsapp/comparison" component={Comparison} />
      <Route path="/aa-whatsapp/features" component={AAWhatsAppPage} />
      <Route path="/aa-whatsapp/faq" component={FAQ} />
      <Route path="/aa-whatsapp/download" component={DownloadPage} />
      <Route path="/aa-whatsapp/blog" component={Blog} />
      <Route path="/aa-whatsapp/blog/:slug" component={BlogPost} />
      
      <Route path="/aa-business" component={BusinessHome} />
      <Route path="/aa-business/about" component={BusinessAbout} />
      <Route path="/aa-business/features" component={BusinessFeatures} />
      <Route path="/aa-business/download" component={BusinessDownload} />
      <Route path="/aa-business/comparison" component={BusinessComparison} />
      <Route path="/aa-business/faq" component={BusinessFAQ} />
      <Route path="/aa-business/blog" component={BusinessBlog} />
      
      <Route path="/aa-business-whatsapp" component={BusinessHome} />
      <Route path="/business-download" component={BusinessDownload} />
      <Route path="/faq" component={FAQ} />
      <Route path="/download" component={DownloadPage} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/support" component={Support} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/sitemap" component={Sitemap} />
      <Route path="/:rest*" component={Home} />
    </Switch>
  );
}

import { Navigation } from "@/components/Navigation";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Helmet>
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#0f172a" />
            <meta property="og:site_name" content="AA Mods" />
            <meta property="og:image" content="https://aa-mods.vercel.app/images/whatsapp-realtime-hero.jpg" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@aa_mods" />
            <meta name="twitter:creator" content="@aa_mods" />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "AA Mods",
                "url": "https://aa-mods.vercel.app",
                "logo": "https://i.postimg.cc/yYtyRHRZ/cropped_circle_image.png",
                "sameAs": [
                  "https://t.me/AA_ModsOfficial"
                ]
              })}
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "AA Mods Official",
                "url": "https://aa-mods.vercel.app",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://aa-mods.vercel.app/blog?query={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              })}
            </script>
          </Helmet>
          <AppSplash />
          <TapFeedback />
          <ScrollToTop />
          <AdBlockDetector />
          <OfflineBanner />
          <Navigation />
          <PageTransition>
            <Router />
          </PageTransition>
          <BackToTop />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
