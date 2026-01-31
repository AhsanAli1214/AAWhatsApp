import { Link } from "wouter";
import { Send } from "lucide-react";
import { AdsBanner } from "./AdsBanner";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border/50 relative z-10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <AdsBanner />
        </div>
        <div className="flex flex-col items-center mb-12">
          <Link href="/">
            <div className="flex flex-col items-center gap-3 cursor-pointer group">
              <img
                src="/favicon.png"
                alt="AA Mods"
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://i.postimg.cc/mrqq6LxP/favicon.png";
                }}
              />
              <span className="font-black text-2xl tracking-tighter uppercase">
                AA Mods
              </span>
            </div>
          </Link>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-6" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/aa-whatsapp"
                  className="hover:text-primary transition-colors"
                >
                  AAWhatsApp
                </Link>
              </li>
              <li>
                <Link
                  href="/aa-business"
                  className="hover:text-blue-500 transition-colors"
                >
                  AA Business
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="hover:text-primary transition-colors"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-primary transition-colors"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://t.me/AaMods"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>AA Mods {new Date().getFullYear()}. All rights reserved.</p>
          <p className="mt-2 text-xs">
            AAWhatsApp is not affiliated with WhatsApp Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
