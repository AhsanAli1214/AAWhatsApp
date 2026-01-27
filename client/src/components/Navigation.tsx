import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Download, AlertTriangle, Send, Home, Info, Scale, BookOpen, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import logoImg from "@assets/Gemini_Generated_Image_72b2nh72b2nh72b2_1769103369360.png";

import { Link, useLocation } from "wouter";

import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navigation() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav_home"), href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Comparison", href: "/comparison", icon: Scale },
    { name: "AA APK", href: "/aa-whatsapp-apk", icon: Download },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Support", href: "/support", icon: AlertTriangle },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="p-1 bg-primary/10 rounded-xl">
                  <img
                    src={logoImg}
                    alt="AA Mods Logo"
                    className="w-9 h-9 rounded-lg shadow-lg shadow-primary/20 object-contain bg-background"
                    loading="eager"
                    decoding="async"
                    width="36"
                    height="36"
                  />
                </div>
                <span className="text-xl font-bold font-display tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  AA Mods
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 mr-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href ?? "#"}>
                  <span className={`text-sm font-medium transition-colors cursor-pointer ${location === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <a
                href="https://t.me/AA_ModsOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/30 text-primary hover:bg-primary/10 transition-all rounded-full px-4"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Join Telegram
                </Button>
              </a>

              <Link href="/download">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                  Download <Download className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Top Right - Only Language and Support */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <Link href="/support">
              <Button size="icon" variant="ghost" className="text-muted-foreground">
                <AlertTriangle className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-white/5 px-6 py-3 safe-area-pb">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {navLinks.slice(0, 5).map((link) => {
            const Icon = link.icon;
            const isActive = location === link.href;
            return (
              <Link key={link.name} href={link.href}>
                <div className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`}>
                  <div className={`p-2 rounded-xl transition-all ${isActive ? "bg-primary/10 scale-110 shadow-[0_0_15px_rgba(16,185,129,0.2)]" : ""}`}>
                    <Icon className={`w-5 h-5 ${isActive ? "stroke-[2.5px]" : "stroke-[2px]"}`} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-tighter leading-none">
                    {link.name === "AA APK" ? "APK" : link.name}
                  </span>
                </div>
              </Link>
            );
          })}
          
          {/* More Menu Trigger */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex flex-col items-center gap-1.5 transition-all ${mobileOpen ? "text-primary" : "text-muted-foreground"}`}
          >
            <div className={`p-2 rounded-xl transition-all ${mobileOpen ? "bg-primary/10 scale-110" : ""}`}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-tighter leading-none">
              More
            </span>
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay */}
      {mobileOpen && (
        <div 
          className="md:hidden fixed inset-0 z-[45] bg-background/95 backdrop-blur-2xl animate-in fade-in duration-300 p-8 flex flex-col justify-center gap-8"
          onClick={() => setMobileOpen(false)}
        >
          <div className="space-y-6">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8 text-center">Main Navigation</p>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.name} href={link.href}>
                  <div className="flex items-center gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/20 group-hover:text-primary transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-display tracking-tight group-hover:text-primary transition-all">
                      {link.name}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="h-px bg-white/5 w-full" />

          <div className="grid grid-cols-1 gap-4">
            <a href="https://t.me/AA_ModsOfficial" target="_blank" rel="noopener noreferrer">
              <Button className="w-full h-16 rounded-2xl bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center gap-3">
                <Send className="w-6 h-6" /> Join Telegram
              </Button>
            </a>
            <Link href="/support">
              <Button variant="outline" className="w-full h-16 rounded-2xl border-destructive/30 text-destructive font-bold text-xl">
                <AlertTriangle className="w-6 h-6 mr-3" /> Report Bug
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
  );
}
