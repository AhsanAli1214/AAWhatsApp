import { Link, useLocation } from "wouter";
import { Send, Shield, Zap, Lock } from "lucide-react";

export function Footer() {
  const [location] = useLocation();
  const isBusiness = location.startsWith("/aa-business");

  return (
    <footer className={`py-4 md:py-6 border-t border-border/30 relative z-10 bg-background/40 backdrop-blur-md overflow-hidden ${isBusiness ? 'selection:bg-blue-600/30' : ''}`}>
      {/* Decorative background elements */}
      <div className={`absolute top-0 left-1/4 w-60 h-60 rounded-full blur-[60px] -z-10 ${isBusiness ? 'bg-blue-600/5' : 'bg-primary/5'}`} />
      <div className={`absolute bottom-0 right-1/4 w-60 h-60 rounded-full blur-[60px] -z-10 ${isBusiness ? 'bg-blue-400/5' : 'bg-emerald-400/5'}`} />
      
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-4 gap-y-4 md:gap-8 mb-4 md:mb-6">
          
          {/* Brand & Mission */}
          <div className="col-span-2 lg:col-span-5 space-y-2 md:space-y-3">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer group">
                <img
                  src="https://i.postimg.cc/mrqq6LxP/favicon.png"
                  alt="AA Mods"
                  className="w-6 h-6 object-contain group-hover:rotate-12 transition-transform duration-500"
                />
                <div className="flex flex-col">
                  <span className="font-black text-sm tracking-tighter uppercase leading-none">
                    AA Mods
                  </span>
                  <span className="text-[6px] text-muted-foreground uppercase tracking-[0.2em] font-bold mt-0.5">
                    Premium WhatsApp Mods
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-[10px] text-muted-foreground leading-snug max-w-xs">
              The world's most secure modifications. Focused on privacy and unrivaled user experience.
            </p>
          </div>

          {/* Product Links */}
          <div className="col-span-1 lg:col-span-2 space-y-2">
            <h4 className="font-bold text-[8px] uppercase tracking-widest text-foreground/60">Products</h4>
            <ul className="space-y-1 text-[10px]">
              <li>
                <Link href="/aa-whatsapp" className="text-muted-foreground transition-colors flex items-center gap-1 hover:text-foreground">
                  <Zap className="w-2.5 h-2.5 text-primary/60" />
                  AAWhatsApp
                </Link>
              </li>
              <li>
                <Link href="/aa-business" className="text-muted-foreground transition-colors flex items-center gap-1 hover:text-foreground">
                  <Shield className="w-2.5 h-2.5 text-blue-500/60" />
                  AA Business
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2 space-y-2">
            <h4 className="font-bold text-[8px] uppercase tracking-widest text-foreground/60">Resources</h4>
            <ul className="space-y-1 text-[10px]">
              <li>
                <Link href={isBusiness ? "/aa-business/blog" : "/aa-whatsapp/blog"} className="text-muted-foreground transition-colors hover:text-foreground">Updates</Link>
              </li>
              <li>
                <Link href={isBusiness ? "/aa-business/faq" : "/aa-whatsapp/faq"} className="text-muted-foreground transition-colors hover:text-foreground">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="col-span-2 lg:col-span-3 flex flex-row lg:flex-col gap-2 pt-2 lg:pt-0">
            <a 
              href="https://t.me/AaMods" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-[9px] font-bold hover:opacity-90 transition-all ${isBusiness ? 'bg-blue-600 text-white' : 'bg-primary text-primary-foreground'}`}
            >
              <Send className="w-3 h-3" />
              Telegram
            </a>
            <button 
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).OneSignalDeferred) {
                  (window as any).OneSignalDeferred.push(async function(OneSignal: any) {
                    const notifications = OneSignal.Notifications || OneSignal.notifications;
                    if (notifications && typeof notifications.requestPermission === 'function') {
                      await notifications.requestPermission();
                    } else {
                      await OneSignal.showNativePrompt();
                    }
                  });
                }
              }}
              className="flex-1 flex items-center justify-center gap-1.5 bg-muted border border-border/50 py-1.5 rounded-md text-[9px] font-bold hover:bg-muted/80 transition-all active:scale-95"
            >
              <Lock className={`w-3 h-3 ${isBusiness ? 'text-blue-500' : 'text-primary'}`} />
              Push
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-3 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-[9px] text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} AA Mods. Professional R&D.
          </p>
          
          <div className="flex items-center gap-4 text-[8px] font-bold uppercase tracking-widest">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-2 text-center">
          <p className="text-[7px] text-muted-foreground/30 max-w-md mx-auto italic leading-tight uppercase tracking-tighter">
            Independent Research. Not affiliated with Meta or WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
}
