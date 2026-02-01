import { Link, useLocation } from "wouter";
import { Send, Shield, Zap, Lock, ExternalLink } from "lucide-react";

export function Footer() {
  const [location] = useLocation();
  const isBusiness = location.startsWith("/aa-business");

  return (
    <footer className={`py-6 md:py-8 border-t border-border/40 relative z-10 bg-background/50 backdrop-blur-md overflow-hidden ${isBusiness ? 'selection:bg-blue-600/30' : ''}`}>
      {/* Decorative background elements */}
      <div className={`absolute top-0 left-1/4 w-72 h-72 rounded-full blur-[80px] -z-10 ${isBusiness ? 'bg-blue-600/5' : 'bg-primary/5'}`} />
      <div className={`absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-[80px] -z-10 ${isBusiness ? 'bg-blue-400/5' : 'bg-emerald-400/5'}`} />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-3 md:space-y-4">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer group">
                <img
                  src="https://i.postimg.cc/mrqq6LxP/favicon.png"
                  alt="AA Mods"
                  className="w-8 h-8 object-contain group-hover:rotate-12 transition-transform duration-500"
                />
                <div className="flex flex-col">
                  <span className="font-black text-lg tracking-tighter uppercase leading-none">
                    AA Mods
                  </span>
                  <span className="text-[8px] text-muted-foreground uppercase tracking-[0.2em] font-bold mt-0.5">
                    Premium Solutions
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-[12px] text-muted-foreground leading-relaxed max-w-sm">
              The world's most secure and feature-rich WhatsApp modifications. Focused on privacy and unrivaled user experience.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://t.me/AaMods" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-all duration-300 group ${isBusiness ? 'hover:bg-blue-600 hover:text-white' : 'hover:bg-primary hover:text-primary-foreground'}`}>
                <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <div className="flex flex-col">
                <span className="text-xs font-bold leading-none">Join Channel</span>
                <span className="text-[8px] text-muted-foreground uppercase tracking-widest mt-0.5">Official Telegram</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 space-y-3 md:space-y-4">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-foreground/70">Products</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/aa-whatsapp" className="text-muted-foreground transition-colors flex items-center gap-2 hover:text-foreground">
                  <Zap className="w-3.5 h-3.5 text-primary/60" />
                  AAWhatsApp
                </Link>
              </li>
              <li>
                <Link href="/aa-business" className="text-muted-foreground transition-colors flex items-center gap-2 hover:text-foreground">
                  <Shield className="w-3.5 h-3.5 text-blue-500/60" />
                  AA Business
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3 md:space-y-4">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-foreground/70">Resources</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href={isBusiness ? "/aa-business/blog" : "/aa-whatsapp/blog"} className="text-muted-foreground transition-colors hover:text-foreground">Blog</Link>
              </li>
              <li>
                <Link href={isBusiness ? "/aa-business/faq" : "/aa-whatsapp/faq"} className="text-muted-foreground transition-colors hover:text-foreground">Support (FAQ)</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 space-y-3 md:space-y-4">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-foreground/70">Updates</h4>
            <div className="flex flex-col gap-2">
              <a 
                href="https://t.me/AaMods" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold hover:opacity-90 transition-all ${isBusiness ? 'bg-blue-600 text-white' : 'bg-primary text-primary-foreground'}`}
              >
                <Send className="w-4 h-4" />
                Telegram Channel
              </a>
              <button 
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).OneSignalDeferred) {
                    (window as any).OneSignalDeferred.push(async function(OneSignal: any) {
                      const notifications = OneSignal.Notifications || OneSignal.notifications;
                      if (notifications && typeof notifications.requestPermission === 'function') {
                        await notifications.requestPermission();
                      } else if (typeof OneSignal.showNativePrompt === 'function') {
                        await OneSignal.showNativePrompt();
                      } else {
                        console.error("OneSignal permission method not found", OneSignal);
                      }
                    });
                  }
                }}
                className="flex items-center justify-center gap-2 bg-muted border border-border py-2.5 rounded-lg text-xs font-bold hover:bg-muted/80 transition-all active:scale-95"
              >
                <Lock className={`w-4 h-4 ${isBusiness ? 'text-blue-500' : 'text-primary'}`} />
                Enable Push
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="flex flex-col md:items-start items-center">
            <p className="text-[11px] text-muted-foreground font-medium">
              &copy; {new Date().getFullYear()} AA Mods R&D.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">Help</Link>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-[9px] text-muted-foreground/40 max-w-2xl mx-auto italic leading-tight">
            AA Mods is an independent modification. Not affiliated with Meta or WhatsApp Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
