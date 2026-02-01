import { Link, useLocation } from "wouter";
import { Send, Facebook, Twitter, Instagram, Shield, Zap, Lock, Mail, ExternalLink } from "lucide-react";

export function Footer() {
  const [location] = useLocation();
  const isBusiness = location.startsWith("/aa-business");
  const themeColor = isBusiness ? "blue-500" : "primary";

  return (
    <footer className={`py-16 border-t border-border/50 relative z-10 bg-background/80 backdrop-blur-md overflow-hidden ${isBusiness ? 'selection:bg-blue-500/30' : ''}`}>
      {/* Decorative background elements */}
      <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[100px] -z-10 ${isBusiness ? 'bg-blue-500/5' : 'bg-primary/5'}`} />
      <div className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[100px] -z-10 ${isBusiness ? 'bg-blue-600/5' : 'bg-blue-500/5'}`} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <img
                  src="https://i.postimg.cc/mrqq6LxP/favicon.png"
                  alt="AA Mods"
                  className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform duration-500"
                />
                <div className="flex flex-col">
                  <span className="font-black text-2xl tracking-tighter uppercase leading-none">
                    AA Mods
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold mt-1">
                    Premium WhatsApp Solutions
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              AA Mods provides the world's most secure and feature-rich WhatsApp modifications. Our focus on privacy, security, and user experience makes us the #1 choice for millions of users worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://t.me/AaMods" target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-all duration-300 group ${isBusiness ? 'hover:bg-blue-600 hover:text-white' : 'hover:bg-primary hover:text-primary-foreground'}`}>
                <Send className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <div className="flex flex-col">
                <span className="text-sm font-bold">Join Channel</span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Official Telegram</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-foreground/80">Products</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/aa-whatsapp" className={`text-muted-foreground transition-colors flex items-center gap-2 ${isBusiness ? 'hover:text-primary' : 'hover:text-primary'}`}>
                  <Zap className={`w-4 h-4 ${isBusiness ? 'text-primary/60' : 'text-primary/60'}`} />
                  AAWhatsApp
                </Link>
              </li>
              <li>
                <Link href="/aa-business" className={`text-muted-foreground transition-colors flex items-center gap-2 ${isBusiness ? 'hover:text-blue-500' : 'hover:text-blue-500'}`}>
                  <Shield className="w-4 h-4 text-blue-500/60" />
                  AA Business
                </Link>
              </li>
              <li>
                <Link href={isBusiness ? "/aa-business/download" : "/aa-whatsapp/download"} className={`text-muted-foreground transition-colors flex items-center gap-2 font-semibold ${isBusiness ? 'hover:text-blue-500' : 'hover:text-primary'}`}>
                  <ExternalLink className="w-4 h-4" />
                  Download Latest
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-foreground/80">Resources</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href={isBusiness ? "/aa-business/blog" : "/aa-whatsapp/blog"} className={`text-muted-foreground transition-colors ${isBusiness ? 'hover:text-blue-500' : 'hover:text-primary'}`}>
                  Insights & Blog
                </Link>
              </li>
              <li>
                <Link href={isBusiness ? "/aa-business/faq" : "/aa-whatsapp/faq"} className={`text-muted-foreground transition-colors ${isBusiness ? 'hover:text-blue-500' : 'hover:text-primary'}`}>
                  Help Center (FAQ)
                </Link>
              </li>
              <li>
                <Link href="/aa-whatsapp/comparison" className={`text-muted-foreground transition-colors ${isBusiness ? 'hover:text-blue-500' : 'hover:text-primary'}`}>
                  Comparison Matrix
                </Link>
              </li>
              <li>
                <Link href="/aa-whatsapp/features" className={`text-muted-foreground transition-colors ${isBusiness ? 'hover:text-blue-500' : 'hover:text-primary'}`}>
                  Feature Analysis
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-bold text-sm uppercase tracking-widest text-foreground/80">Stay Updated</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enable notifications via OneSignal or join our Telegram channel for the latest security patches and feature updates.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://t.me/AaMods" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-3 py-3 rounded-xl font-bold hover:opacity-90 transition-all shadow-lg ${isBusiness ? 'bg-blue-600 text-white shadow-blue-500/20' : 'bg-primary text-primary-foreground shadow-primary/20'}`}
              >
                <Send className="w-5 h-5" />
                Join Telegram Channel
              </a>
              <button 
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).OneSignalDeferred) {
                    (window as any).OneSignalDeferred.push(async function(OneSignal: any) {
                      const isPushSupported = OneSignal.notifications.isPushSupported();
                      if (isPushSupported) {
                        await OneSignal.notifications.requestPermission();
                      } else {
                        alert("Push notifications are not supported on this browser.");
                      }
                    });
                  }
                }}
                className="flex items-center justify-center gap-3 bg-muted border border-border py-3 rounded-xl font-bold hover:bg-muted/80 transition-all active:scale-95 shadow-inner"
              >
                <Lock className={`w-5 h-5 ${isBusiness ? 'text-blue-500' : 'text-primary'}`} />
                Enable Push Notifications
              </button>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase font-bold tracking-tighter justify-center">
              <Shield className={`w-3 h-3 ${isBusiness ? 'text-blue-500' : 'text-primary'}`} />
              Direct Developer Updates • Zero Spam
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:items-start items-center gap-1">
            <p className="text-sm text-muted-foreground font-medium">
              &copy; {new Date().getFullYear()} AA Mods Research & Development.
            </p>
            <p className="text-[10px] text-muted-foreground/60 uppercase tracking-widest font-bold">
              Precision Engineering • Maximum Privacy • Unrivaled Security
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
            <Link href="/aa-whatsapp/about" className={`text-muted-foreground transition-colors ${isBusiness ? 'hover:text-blue-500' : 'hover:text-primary'}`}>About</Link>
            <Link href="/privacy" className={`text-muted-foreground transition-colors ${isBusiness ? 'hover:text-blue-500' : 'hover:text-primary'}`}>Privacy</Link>
            <Link href="/terms" className={`text-muted-foreground transition-colors ${isBusiness ? 'hover:text-blue-500' : 'hover:text-primary'}`}>Terms</Link>
            <Link href="/support" className={`text-muted-foreground transition-colors ${isBusiness ? 'hover:text-blue-500' : 'hover:text-primary'}`}>Support</Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-[10px] text-muted-foreground/40 max-w-2xl mx-auto italic">
            Disclaimer: AA Mods is an independent modification of the WhatsApp application. We are not affiliated with, endorsed by, or associated with Meta, WhatsApp Inc., or any of their subsidiaries. WhatsApp is a registered trademark of Meta Platforms, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
