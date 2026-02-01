import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  Menu,
  X,
  Download,
  AlertTriangle,
  Send,
  Home,
  Info,
  Scale,
  BookOpen,
  HelpCircle,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AdsBanner } from "@/components/AdsBanner";

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
    { name: "Business", href: "/aa-business-whatsapp", icon: Shield },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Support", href: "/support", icon: AlertTriangle },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/">
              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                  <img
                    src="/favicon.png"
                    alt="AA Mods"
                    className="relative w-12 h-12 object-contain rounded-xl drop-shadow-[0_0_8px_rgba(16,185,129,0.5)] group-hover:scale-110 transition-transform duration-300"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://i.postimg.cc/mrqq6LxP/favicon.png";
                    }}
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black font-display tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-none">
                    AA Mods
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80 leading-none mt-1">
                    Official
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6 mr-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href ?? "#"}>
                  <span
                    className={`text-sm font-medium transition-colors cursor-pointer ${location === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                  >
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
              <Button
                size="icon"
                variant="ghost"
                className="text-muted-foreground"
              >
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
                <div
                  className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
                >
                  <div
                    className={`p-2 rounded-xl transition-all ${isActive ? "bg-primary/10 scale-110 shadow-[0_0_15px_rgba(16,185,129,0.2)]" : ""}`}
                  >
                    <Icon
                      className={`w-5 h-5 ${isActive ? "stroke-[2.5px]" : "stroke-[2px]"}`}
                    />
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
            <div
              className={`p-2 rounded-xl transition-all ${mobileOpen ? "bg-primary/10 scale-110" : ""}`}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
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
            <p className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-8 text-center">
              Main Navigation
            </p>
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
            <AdsBanner />
            <a
              href="https://t.me/AA_ModsOfficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full h-16 rounded-2xl bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center gap-3">
                <Send className="w-6 h-6" /> Join Telegram
              </Button>
            </a>
            <Link href="/support">
              <Button
                variant="outline"
                className="w-full h-16 rounded-2xl border-destructive/30 text-destructive font-bold text-xl"
              >
                <AlertTriangle className="w-6 h-6 mr-3" /> Report Bug
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
