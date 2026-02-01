import { Link, useLocation } from "wouter";
import { Home, Download, BookOpen, HelpCircle, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MobileNav() {
  const [location] = useLocation();
  const isBusiness = location.startsWith("/aa-business");

  const navItems = [
    { href: isBusiness ? "/aa-business" : "/aa-whatsapp", icon: Home, label: "Home" },
    { href: isBusiness ? "/aa-business/features" : "/aa-whatsapp/features", icon: LayoutGrid, label: "Features" },
    { href: isBusiness ? "/aa-business/download" : "/aa-whatsapp/download", icon: Download, label: "Download", highlight: true },
    { href: isBusiness ? "/aa-business/blog" : "/aa-whatsapp/blog", icon: BookOpen, label: "Blog" },
    { href: isBusiness ? "/aa-business/faq" : "/aa-whatsapp/faq", icon: HelpCircle, label: "FAQ" },
  ];

  return (
    <div className="lg:hidden fixed bottom-6 left-0 right-0 z-[60] px-6 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <nav className="flex items-center justify-around p-3 bg-background/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/5 relative overflow-hidden">
          {/* Animated background glow */}
          <div className={`absolute inset-0 opacity-10 blur-3xl -z-10 ${isBusiness ? 'bg-blue-500' : 'bg-primary'}`} />
          
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            const activeColor = isBusiness ? "text-blue-400" : "text-primary";
            
            return (
              <Link key={item.href} href={item.href}>
                <div className={`relative flex flex-col items-center gap-1.5 p-2 transition-all duration-300 active:scale-90 ${
                  item.highlight 
                    ? `w-14 h-14 rounded-full ${isBusiness ? 'bg-gradient-to-br from-blue-600 to-blue-400 shadow-blue-500/40' : 'bg-gradient-to-br from-primary to-emerald-400 shadow-primary/40'} text-white shadow-[0_10px_25px_-5px] -translate-y-8 scale-110 mb-[-2rem] flex items-center justify-center border-4 border-background ring-4 ring-black/20` 
                    : isActive ? `${activeColor}` : "text-muted-foreground/60 hover:text-foreground"
                }`}>
                  <Icon className={`${item.highlight ? 'w-7 h-7' : 'w-5 h-5'} ${isActive && !item.highlight ? 'animate-pulse' : ''}`} />
                  {!item.highlight && (
                    <span className={`text-[9px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                      {item.label}
                    </span>
                  )}
                  <AnimatePresence>
                    {isActive && !item.highlight && (
                      <motion.div 
                        layoutId="activeTab"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className={`absolute -bottom-1 w-1.5 h-1.5 rounded-full ${isBusiness ? 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]' : 'bg-primary shadow-[0_0_8px_rgba(16,185,129,0.8)]'}`}
                      />
                    )}
                  </AnimatePresence>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
