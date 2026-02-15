import { Link, useLocation } from "wouter";
import { Sparkles, Download, LayoutGrid, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReminiNavbar() {
  const [location] = useLocation();

  const navItems = [
    { name: "Home", href: "/remini-mod", icon: Sparkles },
    { name: "Features", href: "/remini-mod/features", icon: Zap },
    { name: "Download", href: "/remini-mod/download", icon: Download },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#FF0000]/15 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-3 group">
          <img
            src="/favicon.png"
            alt="AA Mods"
            className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500"
            loading="eager"
            decoding="async"
            width="48"
            height="48"
          />
          <div>
            <p className="font-black tracking-tight uppercase text-lg leading-none">
              Remini <span className="text-[#FF0000]">Mod</span>
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#FF0000]/80">AA Mods Verified</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className={`px-4 h-10 rounded-xl flex items-center gap-2 text-xs font-black uppercase tracking-wider border transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#FF0000] text-white border-[#FF0000] shadow-lg shadow-[#ff0000]/25"
                      : "text-muted-foreground border-transparent hover:border-[#FF0000]/25 hover:text-[#FF0000] hover:bg-[#FF0000]/5"
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" size="sm" className="font-bold uppercase tracking-wider">
              <LayoutGrid className="w-4 h-4 mr-2" />
              Apps
            </Button>
          </Link>
          <Link href="/remini-mod/download">
            <Button size="sm" className="font-black uppercase tracking-wider bg-[#FF0000] hover:bg-[#c30000]">
              <ShieldCheck className="w-4 h-4 mr-2" />
              Get Verified APK
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
