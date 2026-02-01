import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/useTranslation";
import { BackToTop } from "@/components/BackToTop";
import ScrollToTop from "@/components/ScrollToTop";

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
      
      <Route path="/about" component={About} />
      <Route path="/comparison" component={Comparison} />
      <Route path="/aa-whatsapp-apk" component={AAWhatsAppPage} />
      <Route path="/aa-business-whatsapp" component={AABusinessWhatsAppPage} />
      <Route path="/business-download" component={BusinessDownloadPage} />
      <Route path="/faq" component={FAQ} />
      <Route path="/download" component={DownloadPage} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/support" component={Support} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <ScrollToTop />
          <Router />
          <BackToTop />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
