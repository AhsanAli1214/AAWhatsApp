import { Switch, Route, Router as WouterRouter } from "wouter";
import { Suspense, lazy, useEffect } from "react";
import ReactGA from "react-ga4";
import { Analytics } from "@vercel/analytics/react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/useTranslation";
import { BackToTop } from "@/components/BackToTop";
import ScrollToTop from "@/components/ScrollToTop";
import { AdBlockDetector } from "@/components/AdBlockDetector";
import { Helmet } from "react-helmet";
import { PageTransition } from "@/components/PageTransition";
import { TapFeedback } from "@/components/TapFeedback";
import { AppSplash } from "@/components/AppSplash";
import { Skeleton } from "@/components/ui/skeleton";

const Home = lazy(() => import("@/pages/Home"));
const AppSelector = lazy(() => import("@/pages/AppSelector"));
const AAWhatsAppPage = lazy(() => import("@/pages/AAWhatsAppPage"));
const AABusinessWhatsAppPage = lazy(() => import("@/pages/AABusinessWhatsAppPage"));
const BusinessDownloadPage = lazy(() => import("@/pages/BusinessDownloadPage"));
const About = lazy(() => import("@/pages/About"));
const Comparison = lazy(() => import("@/pages/Comparison"));
const FAQ = lazy(() => import("@/pages/FAQ"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const Support = lazy(() => import("@/pages/Support"));
const DownloadPage = lazy(() => import("@/pages/DownloadPage"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const NotFound = lazy(() => import("@/pages/not-found"));

const BusinessHome = lazy(() => import("@/pages/business/BusinessHome"));
const BusinessAbout = lazy(() => import("@/pages/business/BusinessAbout"));
const BusinessFeatures = lazy(() => import("@/pages/business/BusinessFeatures"));
const BusinessDownload = lazy(() => import("@/pages/business/BusinessDownload"));
const BusinessComparison = lazy(() => import("@/pages/business/BusinessComparison"));
const BusinessFAQ = lazy(() => import("@/pages/business/BusinessFAQ"));
const BusinessBlog = lazy(() => import("@/pages/business/BusinessBlog"));

const Sitemap = lazy(() => import("@/pages/Sitemap"));

function PageLoader() {
  return (
    <div className="container mx-auto p-8 space-y-4">
      <Skeleton className="h-12 w-[250px]" />
      <Skeleton className="h-[200px] w-full" />
      <Skeleton className="h-[200px] w-full" />
    </div>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
  );
}

import { Navigation } from "@/components/Navigation";

function App() {
  useEffect(() => {
    // Initialize Google Analytics 4
    // Replace with your actual Measurement ID
    ReactGA.initialize("G-339VLBF7PM");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Helmet>
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#0f172a" />
            <meta property="og:site_name" content="AA Mods" />
            <meta
              property="og:image"
              content="https://aa-mods.vercel.app/images/whatsapp-realtime-hero.jpg"
            />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@aa_mods" />
            <meta name="twitter:creator" content="@aa_mods" />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "AA Mods",
                url: "https://aa-mods.vercel.app",
                logo: "https://i.postimg.cc/yYtyRHRZ/cropped_circle_image.png",
                sameAs: ["https://t.me/AA_ModsOfficial"],
              })}
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "AA Mods Official",
                url: "https://aa-mods.vercel.app",
                potentialAction: {
                  "@type": "SearchAction",
                  target:
                    "https://aa-mods.vercel.app/blog?query={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              })}
            </script>
          </Helmet>
          <AppSplash />
          <TapFeedback />
          <ScrollToTop />
          <AdBlockDetector />
          <Navigation />
          <PageTransition>
            <Router />
          </PageTransition>
          <BackToTop />
          <Analytics />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
