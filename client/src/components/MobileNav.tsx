import { Link, useLocation } from "wouter";
import { Home, Download, BookOpen, HelpCircle, LayoutGrid, Info, Shield, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav() {
  const [location] = useLocation();
  const isBusiness = location.startsWith("/aa-business");

  const navItems = [
    { href: isBusiness ? "/aa-business" : "/aa-whatsapp", icon: Home, label: "Home" },
    { href: "/", icon: LayoutGrid, label: "Selector" },
    { href: isBusiness ? "/aa-business/download" : "/aa-whatsapp/download", icon: Download, label: "Get Mod", highlight: true },
    { href: isBusiness ? "/aa-business/blog" : "/aa-whatsapp/blog", icon: BookOpen, label: "Updates" },
    { href: isBusiness ? "/aa-business/faq" : "/aa-whatsapp/faq", icon: HelpCircle, label: "Support" },
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] pb-safe">
      {/* Background container with full blur and gradient border */}
      <div className="relative border-t border-white/10 bg-background/60 backdrop-blur-2xl px-2 pt-1 pb-3 shadow-[0_-10px_40px_rgba(0,0,0,0.4)] ring-1 ring-white/5">
        <nav className="flex items-center justify-around max-w-lg mx-auto h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            const themeColor = isBusiness ? "blue-500" : "primary";
            
            return (
              <Link key={item.href} href={item.href}>
                <div className={`relative flex flex-col items-center justify-center w-14 h-14 transition-all duration-300 active:scale-90 ${
                  isActive ? `text-${themeColor}` : "text-muted-foreground/50"
                }`}>
                  {item.highlight ? (
                    <div className="relative group">
                      {/* Outer glowing rings */}
                      <div className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 group-hover:blur-2xl opacity-50 ${isBusiness ? 'bg-blue-500' : 'bg-primary'}`} />
                      
                      {/* Main button */}
                      <div className={`relative w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-background/20 overflow-hidden ${
                        isBusiness 
                          ? 'bg-gradient-to-br from-blue-600 to-blue-400' 
                          : 'bg-gradient-to-br from-primary to-emerald-400'
                      }`}>
                        <Icon className="w-6 h-6 text-white" />
                        
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
                      </div>
                      
                      <span className={`absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase tracking-widest ${isActive ? (isBusiness ? 'text-blue-400' : 'text-primary') : 'text-muted-foreground/50'}`}>
                        {item.label}
                      </span>
                    </div>
                  ) : (
                    <>
                      <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? 'scale-110 -translate-y-0.5' : ''}`} />
                      <span className={`text-[9px] font-bold uppercase tracking-widest mt-1 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                        {item.label}
                      </span>
                      
                      {/* Active indicator dot */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div 
                            layoutId="activeTabGlow"
                            className={`absolute -top-1 w-1 h-1 rounded-full blur-[2px] ${isBusiness ? 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'bg-primary shadow-[0_0_8px_rgba(16,185,129,0.8)]'}`}
                          />
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
