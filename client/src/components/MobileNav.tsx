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

type NavItem = {
  href: string;
  icon: any;
  label: string;
  hash?: boolean;
};

function NavTab({ item, isActive, isBusiness }: { item: NavItem; isActive: boolean; isBusiness: boolean }) {
  const Icon = item.icon;

  const content = (
    <div
      className={`relative flex flex-col items-center justify-center min-w-[56px] h-full transition-all duration-500 active:scale-90 ${
        isActive ? "text-primary" : "text-muted-foreground/40"
      }`}
    >
      <div className="flex flex-col items-center group">
        <div
          className={`relative p-1 transition-all duration-500 ${
            isActive ? "scale-110 -translate-y-1" : "group-hover:-translate-y-0.5"
          }`}
        >
          <Icon className={`w-5 h-5 transition-all duration-500 ${isActive ? "drop-shadow-[0_0_8px_currentColor]" : ""}`} />
        </div>
        <span
          className={`text-[8px] font-bold uppercase tracking-[0.15em] mt-0.5 transition-all duration-500 ${
            isActive ? "opacity-100" : "opacity-40"
          }`}
        >
          {item.label}
        </span>

        <AnimatePresence>
          {isActive && (
            <motion.div
              layoutId="activeTabIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`absolute -bottom-1 w-4 h-0.5 rounded-full ${
                isBusiness
                  ? "bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,1)]"
                  : "bg-primary shadow-[0_0_12px_rgba(16,185,129,1)]"
              }`}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );

  if (item.hash) {
    return (
      <a href={item.href}>
        {content}
      </a>
    );
  }

  return <Link href={item.href}>{content}</Link>;
}

export function MobileNav() {
  const [location] = useLocation();
  const isBusiness = location.startsWith("/aa-business");
  const isCapCut = location.startsWith("/capcut-pro");

  const navItems: NavItem[] = isCapCut
    ? [
        { href: "/", icon: Layers, label: "Apps" },
        { href: "/capcut-pro", icon: Home, label: "Home" },
        { href: "/capcut-pro/features", icon: Sparkles, label: "Features" },
        { href: "/capcut-pro/download", icon: DownloadCloud, label: "Download" },
        { href: "/capcut-pro/features#capcut-faq", icon: LifeBuoy, label: "FAQ", hash: true },
      ]
    : [
        { href: "/", icon: Layers, label: "Apps" },
        { href: isBusiness ? "/aa-business" : "/aa-whatsapp", icon: Home, label: "Home" },
        { href: isBusiness ? "/aa-business/features" : "/aa-whatsapp/features", icon: Sparkles, label: "Features" },
        { href: isBusiness ? "/aa-business/download" : "/aa-whatsapp/download", icon: DownloadCloud, label: "Get Mod" },
        { href: isBusiness ? "/aa-business/blog" : "/aa-whatsapp/blog", icon: Rss, label: "Updates" },
        { href: isBusiness ? "/aa-business/faq" : "/aa-whatsapp/faq", icon: LifeBuoy, label: "Support" },
      ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] pb-safe">
      <div
        className={`relative border-t border-white/5 px-1 pt-2 pb-3 shadow-[0_-20px_60px_rgba(0,0,0,0.6)] ring-1 ring-inset ring-white/10 ${
          isCapCut
            ? "bg-background/95 supports-[backdrop-filter]:bg-background/85 supports-[backdrop-filter]:backdrop-blur-xl"
            : "bg-background/40 backdrop-blur-[32px]"
        }`}
      >
        <nav className="flex items-center justify-around max-w-lg mx-auto h-14">
          {navItems.map((item) => {
            const isActive = item.hash ? location === item.href.split("#")[0] : location === item.href;
            return <NavTab key={item.href} item={item} isActive={isActive} isBusiness={isBusiness} />;
          })}
        </nav>
      </div>
    </div>
  );
}
