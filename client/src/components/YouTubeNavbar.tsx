import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Menu,
  X,
  Send,
  Globe,
  Video,
  MessageSquare,
  Briefcase,
  Sparkles,
  LayoutGrid,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/youtube-premium-mod", label: "Home" },
  { href: "/youtube-premium-mod/features", label: "Features & History" },
  { href: "/youtube-premium-mod/install", label: "Install & FAQ", primary: true },
];

const YOUTUBE_LOGO_URL = "https://i.postimg.cc/4y3bZ6cj/download-1-removebg-preview.png";

export function YouTubeNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 border-b border-red-500/20 bg-background/95 supports-[backdrop-filter]:bg-background/80 supports-[backdrop-filter]:backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src={YOUTUBE_LOGO_URL}
              alt="YouTube Premium MOD"
              className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:scale-110 transition-transform duration-500"
              loading="eager"
              decoding="async"
              width="48"
              height="48"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-tight group-hover:text-red-400 transition-colors">
                YouTube Premium MOD
              </span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                by AA Mods Services
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-muted-foreground hover:text-red-400"
              >
                <LayoutGrid className="w-4 h-4" />
                App Selector
              </Button>
            </Link>
            <div className="h-4 w-px bg-border mx-2" />
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className={location === link.href ? "text-red-400 font-bold" : ""}
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
                  <Link href="/aa-business" className="flex items-center gap-2 w-full">
                    <Briefcase className="w-4 h-4" />
                    AA Business
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/capcut-pro" className="flex items-center gap-2 w-full">
                    <Video className="w-4 h-4" />
                    CapCut Pro
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/remini-mod" className="flex items-center gap-2 w-full">
                    <Sparkles className="w-4 h-4" />
                    Remini Mod
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="https://t.me/AA_ModsOfficial" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="border-red-500/40 text-red-300 hover:bg-red-500/10">
                <Send className="w-4 h-4 mr-2" />
                Telegram
              </Button>
            </a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2 text-muted-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <LayoutGrid className="w-4 h-4" />
                  App Selector
                </Button>
              </Link>
              <hr className="my-2 border-border" />
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${location === link.href ? "text-red-400 font-bold" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
