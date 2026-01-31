import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Download, Send, AlertTriangle, Globe, Briefcase, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/aa-business", label: "Home" },
  { href: "/aa-business/about", label: "About" },
  { href: "/aa-business/features", label: "Features" },
  { href: "/aa-business/comparison", label: "Comparison" },
  { href: "/aa-business/blog", label: "Blog" },
  { href: "/aa-business/faq", label: "FAQ" },
];

export function BusinessNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 overflow-hidden">
                <img
                  src="/favicon.png"
                  alt="AA Business"
                  className="w-8 h-8 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] group-hover:scale-110 transition-transform duration-300"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/favicon.png';
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg leading-none tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">AA Business</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500/80 leading-none mt-1">Official Mod</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location === link.href ? "text-blue-500" : ""}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/aa-whatsapp" className="flex items-center gap-2 w-full">
                    <MessageSquare className="w-4 h-4" />
                    AAWhatsApp
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/aa-business" className="flex items-center gap-2 w-full text-blue-500">
                    <Briefcase className="w-4 h-4" />
                    AA Business
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="https://t.me/AaMods" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="border-blue-500/30">
                <Send className="w-4 h-4 mr-2" />
                Telegram
              </Button>
            </a>

            <Link href="/aa-business/download">
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${location === link.href ? "text-blue-500" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <hr className="my-2 border-border" />
              <Link href="/aa-business/download">
                <Button className="w-full bg-blue-500 hover:bg-blue-600" onClick={() => setIsOpen(false)}>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
