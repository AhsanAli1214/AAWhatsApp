import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Download, AlertTriangle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

import logoImg from "@assets/Gemini_Generated_Image_72b2nh72b2nh72b2_1769103369360.png";

import { Link } from "wouter";

import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Navigation() {
  const { t } = useTranslation();
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
    { name: t("nav_home"), href: "/" },
    { name: "About", to: "about" },
    { name: "AA APK", href: "/aa-whatsapp-apk" },
    { name: "Features", to: "features" },
    { name: "Comparison", to: "comparison" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", to: "faq" },
  ];

  return (
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
            {navLinks.map((link) =>
              link.to ? (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {link.name}
                </ScrollLink>
              ) : (
                <Link key={link.name} href={link.href ?? "#"}>
                  <span className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    {link.name}
                  </span>
                </Link>
              )
            )}
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

            <Link href="/support">
              <Button
                variant="outline"
                size="sm"
                className="border-destructive/30 text-destructive hover:bg-destructive/10 hover:border-destructive/50 transition-all rounded-full px-4"
              >
                <AlertTriangle className="w-4 h-4 mr-2" />
                Report Error/Bug
              </Button>
            </Link>

            <Link href="/download">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                Download <Download className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200 shadow-2xl">
          {navLinks.map((link) =>
            link.to ? (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="text-lg font-medium p-2 hover:bg-muted/50 rounded-lg cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ) : (
              <Link key={link.name} href={link.href ?? "#"}>
                <span
                  className="text-lg font-medium p-2 hover:bg-muted/50 rounded-lg cursor-pointer block"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.name}
                </span>
              </Link>
            ),
          )}

          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center justify-between p-2 bg-muted/50 rounded-lg">
              <span className="text-sm font-medium">Language / Idioma</span>
              <LanguageSwitcher />
            </div>
            <Link href="/aa-whatsapp-apk">
              <Button
                variant="outline"
                className="w-full border-primary/30 text-primary hover:bg-primary/10 h-12 rounded-xl"
                onClick={() => setMobileOpen(false)}
              >
                <Download className="w-5 h-5 mr-2" />
                AA WhatsApp APK
              </Button>
            </Link>

            <a
              href="https://t.me/AA_ModsOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="outline"
                className="w-full border-primary/30 text-primary hover:bg-primary/10 h-12 rounded-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Join Telegram Channel
              </Button>
            </a>

            <a
              href="https://t.me/AA_ModsOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="outline"
                className="w-full border-primary/30 text-primary hover:bg-primary/10 h-12 rounded-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Report Error/Bug
              </Button>
            </a>

            <Link href="/download" className="w-full">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-12 rounded-xl">
                Download Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
