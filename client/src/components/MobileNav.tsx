import { Link, useLocation } from "wouter";
import { Home, Download, BookOpen, HelpCircle, LayoutGrid, Briefcase } from "lucide-react";

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
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[60] px-4 pb-4 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <nav className="flex items-center justify-around p-2 bg-background/80 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            const activeColor = isBusiness ? "text-blue-500" : "text-primary";
            
            return (
              <Link key={item.href} href={item.href}>
                <div className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all active:scale-95 ${
                  item.highlight 
                    ? `${isBusiness ? 'bg-blue-600 shadow-blue-500/20' : 'bg-primary shadow-primary/20'} text-white shadow-lg -translate-y-4 scale-110 mb-[-1rem]` 
                    : isActive ? `${activeColor} bg-white/5` : "text-muted-foreground hover:text-foreground"
                }`}>
                  <Icon className={`${item.highlight ? 'w-6 h-6' : 'w-5 h-5'}`} />
                  {!item.highlight && <span className="text-[10px] font-bold uppercase tracking-tighter">{item.label}</span>}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
