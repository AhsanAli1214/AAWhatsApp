import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

import logoImg from "@assets/icon_1768754567492.png";

export function Navigation() {
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
    { name: "About", to: "about" },
    { name: "Features", to: "features" },
    { name: "Comparison", to: "comparison" },
    { name: "FAQ", to: "faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-1 bg-primary/10 rounded-xl">
            <img src={logoImg} alt="AAWhatsApp Logo" className="w-9 h-9 rounded-lg shadow-lg shadow-primary/20" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">AAWhatsApp</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
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
          ))}
          <ScrollLink to="download" smooth={true} duration={500} offset={-100}>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              Download <Download className="w-4 h-4 ml-2" />
            </Button>
          </ScrollLink>
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
          {navLinks.map((link) => (
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
          ))}
          <ScrollLink 
            to="download" 
            smooth={true} 
            duration={500} 
            offset={-80}
            onClick={() => setMobileOpen(false)}
          >
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-12 rounded-xl">
              Download Now
            </Button>
          </ScrollLink>
        </div>
      )}
    </nav>
  );
}
