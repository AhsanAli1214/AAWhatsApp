import { Link, useLocation } from "wouter";
import { 
  Home, 
  DownloadCloud, 
  Rss, 
  LifeBuoy, 
  Layers, 
  Sparkles 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav() {
  const [location] = useLocation();
  const isBusiness = location.startsWith("/aa-business");

  const navItems = [
    { href: "/", icon: Layers, label: "Apps" },
    { href: isBusiness ? "/aa-business" : "/aa-whatsapp", icon: Home, label: "Home" },
    { href: isBusiness ? "/aa-business/features" : "/aa-whatsapp/features", icon: Sparkles, label: "Features" },
    { href: isBusiness ? "/aa-business/download" : "/aa-whatsapp/download", icon: DownloadCloud, label: "Get Mod" },
    { href: isBusiness ? "/aa-business/blog" : "/aa-whatsapp/blog", icon: Rss, label: "Updates" },
    { href: isBusiness ? "/aa-business/faq" : "/aa-whatsapp/faq", icon: LifeBuoy, label: "Support" },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] pb-safe">
      {/* Background container with ultra-premium blur and border */}
      <div className="relative border-t border-white/5 bg-background/40 backdrop-blur-[32px] px-1 pt-2 pb-3 shadow-[0_-20px_60px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-white/10">
        <nav className="flex items-center justify-around max-w-lg mx-auto h-14">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            const themeColor = isBusiness ? "blue-500" : "primary";
            
            return (
              <Link key={item.href} href={item.href}>
                <div className={`relative flex flex-col items-center justify-center min-w-[56px] h-full transition-all duration-500 active:scale-90 ${
                  isActive ? `text-${themeColor}` : "text-muted-foreground/40"
                }`}>
                  <div className="flex flex-col items-center group">
                    <div className={`relative p-1 transition-all duration-500 ${isActive ? 'scale-110 -translate-y-1' : 'group-hover:-translate-y-0.5'}`}>
                      <Icon className={`w-5 h-5 transition-all duration-500 ${isActive ? 'drop-shadow-[0_0_8px_currentColor]' : ''}`} />
                    </div>
                    <span className={`text-[8px] font-bold uppercase tracking-[0.15em] mt-0.5 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                      {item.label}
                    </span>
                    
                    {/* Fluid active indicator */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          layoutId="activeTabIndicator"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          className={`absolute -bottom-1 w-4 h-0.5 rounded-full ${isBusiness ? 'bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,1)]' : 'bg-primary shadow-[0_0_12px_rgba(16,185,129,1)]'}`}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
