import { Link, useLocation } from "wouter";
import { Send, Shield, Zap, Lock, BookOpen, HelpCircle, LayoutGrid, Info } from "lucide-react";

export function Footer() {
  const [location] = useLocation();
  const isBusiness = location.startsWith("/aa-business");

  return (
    <footer className={`py-6 md:py-8 border-t border-border/30 relative z-10 bg-background/40 backdrop-blur-md overflow-hidden ${isBusiness ? 'selection:bg-blue-600/30' : ''}`}>
      {/* Decorative background elements */}
      <div className={`absolute top-0 left-1/4 w-64 h-64 rounded-full blur-[70px] -z-10 ${isBusiness ? 'bg-blue-600/5' : 'bg-primary/5'}`} />
      <div className={`absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[70px] -z-10 ${isBusiness ? 'bg-blue-400/5' : 'bg-emerald-400/5'}`} />
      
      <div className="container mx-auto px-4">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-6 md:gap-8 mb-6 md:mb-8">
          
          {/* Brand & Mission */}
          <div className="col-span-2 lg:col-span-4 space-y-3">
            <Link href="/">
              <div className="flex items-center gap-2.5 cursor-pointer group">
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
                    Premium WhatsApp Mods
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-[12px] text-muted-foreground leading-relaxed max-w-xs">
              The world's most secure modifications. Focused on privacy and unrivaled user experience for millions.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href="https://t.me/AA_ModsOfficial" target="_blank" rel="noopener noreferrer" className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center transition-all duration-300 group ${isBusiness ? 'hover:bg-blue-600 hover:text-white' : 'hover:bg-primary hover:text-primary-foreground'}`}>
                <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <div className="flex flex-col">
                <span className="text-xs font-bold leading-none">Official Channel</span>
                <span className="text-[8px] text-muted-foreground uppercase tracking-widest mt-0.5">Telegram Support</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-foreground/60">Products</h4>
            <ul className="space-y-2 text-[12px]">
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
              <li>
                <Link href="/" className="text-muted-foreground transition-colors flex items-center gap-2 hover:text-foreground">
                  <LayoutGrid className="w-3.5 h-3.5 text-muted-foreground/40" />
                  App Selector
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-foreground/60">Resources</h4>
            <ul className="space-y-2 text-[12px]">
              <li>
                <Link href={isBusiness ? "/aa-business/blog" : "/aa-whatsapp/blog"} className="text-muted-foreground transition-colors flex items-center gap-2 hover:text-foreground">
                  <BookOpen className="w-3.5 h-3.5 text-muted-foreground/40" />
                  Blog & News
                </Link>
              </li>
              <li>
                <Link href={isBusiness ? "/aa-business/faq" : "/aa-whatsapp/faq"} className="text-muted-foreground transition-colors flex items-center gap-2 hover:text-foreground">
                  <HelpCircle className="w-3.5 h-3.5 text-muted-foreground/40" />
                  Help Center
                </Link>
              </li>
              <li>
                <Link href={isBusiness ? "/aa-business/about" : "/aa-whatsapp/about"} className="text-muted-foreground transition-colors flex items-center gap-2 hover:text-foreground">
                  <Info className="w-3.5 h-3.5 text-muted-foreground/40" />
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="col-span-2 lg:col-span-4 space-y-3 pt-2 lg:pt-0">
            <h4 className="font-bold text-[10px] uppercase tracking-widest text-foreground/60">Stay Connected</h4>
            <div className="flex flex-row md:flex-col gap-2">
              <a 
                href="https://t.me/AA_ModsOfficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold hover:opacity-90 transition-all shadow-sm ${isBusiness ? 'bg-blue-600 text-white shadow-blue-500/10' : 'bg-primary text-primary-foreground shadow-primary/10'}`}
              >
                <Send className="w-4 h-4" />
                Join Telegram
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
                className="flex-1 flex items-center justify-center gap-2 bg-muted border border-border/50 py-2.5 rounded-lg text-xs font-bold hover:bg-muted/80 transition-all active:scale-95 shadow-sm"
              >
                <Lock className={`w-4 h-4 ${isBusiness ? 'text-blue-500' : 'text-primary'}`} />
                Push Alerts
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:items-start items-center">
            <p className="text-[11px] text-muted-foreground font-medium">
              &copy; {new Date().getFullYear()} AA Mods Research & Development.
            </p>
            <p className="text-[8px] text-muted-foreground/40 uppercase tracking-[0.2em] font-bold mt-1">
              Privacy • Security • Unrivaled Engineering
            </p>
          </div>
          
          <div className="flex items-center gap-5 text-[10px] font-bold uppercase tracking-widest">
            <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">Support</Link>
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-4 text-center">
          <p className="text-[8px] text-muted-foreground/30 max-w-lg mx-auto italic leading-tight uppercase tracking-tighter">
            Independent Research modification. Not affiliated with Meta Platforms or WhatsApp Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
