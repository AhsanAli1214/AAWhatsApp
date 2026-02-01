import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Menu,
  X,
  Download,
  Send,
  Globe,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/aa-whatsapp", label: "Home" },
  { href: "/aa-whatsapp/about", label: "About" },
  { href: "/aa-whatsapp/features", label: "Features" },
  { href: "/aa-whatsapp/comparison", label: "Comparison" },
  { href: "/aa-whatsapp/blog", label: "Blog" },
  { href: "/aa-whatsapp/faq", label: "FAQ" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/favicon.png"
              alt="AA Mods"
              className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://i.postimg.cc/mrqq6LxP/favicon.png";
              }}
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight">AA Mods</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                WhatsApp Mod
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location === link.href ? "text-primary" : ""}
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
                  <Link
                    href="/aa-whatsapp"
                    className="flex items-center gap-2 w-full text-primary"
                  >
                    <MessageSquare className="w-4 h-4" />
                    AAWhatsApp
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/aa-business"
                    className="flex items-center gap-2 w-full"
                  >
                    <Briefcase className="w-4 h-4" />
                    AA Business
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="https://t.me/AaMods"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">
                <Send className="w-4 h-4 mr-2" />
                Telegram
              </Button>
            </a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
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
                    className={`w-full justify-start ${location === link.href ? "text-primary" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <hr className="my-2 border-border" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
