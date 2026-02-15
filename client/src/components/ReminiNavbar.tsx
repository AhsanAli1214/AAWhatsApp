import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Sparkles, Info, Download, HelpCircle, LayoutGrid, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReminiNavbar() {
  const [location] = useLocation();

  const navItems = [
    { name: "Home", href: "/remini-mod", icon: Sparkles },
    { name: "Features", href: "/remini-mod/features", icon: Zap },
    { name: "Download", href: "/remini-mod/download", icon: Download },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/remini-mod">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 rounded-lg bg-[#FF0000] flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-black tracking-tighter uppercase text-xl">
              Remini <span className="text-[#FF0000]">Mod</span>
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-2 text-sm font-bold uppercase tracking-widest cursor-pointer transition-colors hover:text-[#FF0000] ${
                  location === item.href ? "text-[#FF0000]" : "text-muted-foreground"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.name}
              </div>
            </Link>
          ))}
          <Link href="/">
            <Button variant="ghost" size="sm" className="font-bold uppercase tracking-widest">
              <LayoutGrid className="w-4 h-4 mr-2" />
              Apps
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
