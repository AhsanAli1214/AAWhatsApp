import { Link, useLocation } from "wouter";
import { Send, Shield, Zap, Lock, BookOpen, HelpCircle, LayoutGrid, Info, Video, Sparkles, ArrowUpRight } from "lucide-react";

const PRODUCT_LINKS = [
  { href: "/aa-whatsapp", label: "AA WhatsApp", icon: Zap, iconClass: "text-primary/70" },
  { href: "/aa-business", label: "AA Business", icon: Shield, iconClass: "text-blue-500/70" },
  { href: "/capcut-pro", label: "CapCut Pro", icon: Video, iconClass: "text-red-500/70" },
  { href: "/remini-mod", label: "Remini Mod", icon: Sparkles, iconClass: "text-primary/70" },
  { href: "/", label: "App Selector", icon: LayoutGrid, iconClass: "text-muted-foreground/50" },
] as const;

export function Footer() {
  const [location] = useLocation();
  const isBusiness = location.startsWith("/aa-business");
  const isRemini = location.startsWith("/remini-mod");

  const accentClasses = isBusiness
    ? {
        glowOne: "bg-blue-600/10",
        glowTwo: "bg-cyan-500/10",
        primaryBtn: "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20",
        panelBorder: "border-blue-500/20",
      }
    : isRemini
      ? {
          glowOne: "bg-red-600/10",
          glowTwo: "bg-rose-400/10",
          primaryBtn: "bg-[#FF0000] hover:bg-[#e40000] text-white shadow-[#FF0000]/20",
          panelBorder: "border-red-500/20",
        }
      : {
          glowOne: "bg-primary/10",
          glowTwo: "bg-emerald-400/10",
          primaryBtn: "bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary/20",
          panelBorder: "border-primary/20",
        };

  return (
    <footer className="relative z-10 mt-10 overflow-hidden border-t border-border/40 bg-background/70 backdrop-blur-xl">
      <div className={`pointer-events-none absolute -top-20 left-1/4 h-44 w-44 rounded-full blur-[90px] ${accentClasses.glowOne}`} />
      <div className={`pointer-events-none absolute -bottom-24 right-1/4 h-44 w-44 rounded-full blur-[90px] ${accentClasses.glowTwo}`} />

      <div className="container mx-auto px-4 py-7 md:py-9">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className={`rounded-2xl border bg-card/60 p-4 md:p-5 lg:col-span-4 ${accentClasses.panelBorder}`}>
            <Link href="/">
              <div className="group inline-flex cursor-pointer items-center gap-3">
                <img
                  src="/favicon.png"
                  alt="AA Mods"
                  className="h-10 w-10 object-contain transition-transform duration-500 group-hover:rotate-6"
                  loading="lazy"
                  decoding="async"
                  width="40"
                  height="40"
                />
                <div>
                  <p className="text-lg md:text-xl font-black uppercase tracking-tight">AA Mods</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Premium Apps Platform</p>
                </div>
              </div>
            </Link>

            <p className="mt-3 max-w-sm text-xs md:text-sm leading-relaxed text-muted-foreground">
              Secure and performance-optimized modified apps with clear update tracking, stable builds, and community support.
            </p>

            <div className="mt-3.5 flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <Shield className="h-4 w-4" />
              Verified releases • Security-focused workflows
            </div>

            <a
              href="https://t.me/AA_ModsOfficial"
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs md:text-sm font-bold shadow-lg transition-all ${accentClasses.primaryBtn}`}
            >
              <Send className="h-4 w-4" />
              Join Telegram
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-2xl border border-border/40 bg-card/50 p-4 md:p-5 lg:col-span-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div>
                <h4 className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-foreground/70">Products</h4>
                <ul className="space-y-2 text-xs md:text-sm">
                  {PRODUCT_LINKS.map(({ href, label, icon: Icon, iconClass }) => (
                    <li key={href}>
                      <Link href={href} className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                        <Icon className={`h-4 w-4 transition-transform group-hover:scale-110 ${iconClass}`} />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-foreground/70">Resources</h4>
                <ul className="space-y-2 text-xs md:text-sm">
                  <li>
                    <Link href={isBusiness ? "/aa-business/blog" : "/aa-whatsapp/blog"} className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                      <BookOpen className="h-4 w-4 text-muted-foreground/60" />
                      Blog & News
                    </Link>
                  </li>
                  <li>
                    <Link href={isBusiness ? "/aa-business/faq" : "/aa-whatsapp/faq"} className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                      <HelpCircle className="h-4 w-4 text-muted-foreground/60" />
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href={isBusiness ? "/aa-business/about" : "/aa-whatsapp/about"} className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
                      <Info className="h-4 w-4 text-muted-foreground/60" />
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-foreground/70">Company</h4>
                <ul className="space-y-2 text-xs md:text-sm">
                  <li><Link href="/sitemap" className="text-muted-foreground transition-colors hover:text-foreground">Sitemap</Link></li>
                  <li><Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">Terms of Service</Link></li>
                  <li><Link href="/support" className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"><Lock className="h-4 w-4 text-muted-foreground/60" />Support</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center justify-between gap-2 border-t border-border/40 pt-4 md:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} AA Mods Research & Development. All rights reserved.</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70">Privacy • Security • Stability</p>
        </div>

        <p className="mt-2 text-center text-[9px] md:text-[10px] text-muted-foreground/50">
          Independent modification research platform. Not affiliated with Meta Platforms, WhatsApp Inc., CapCut, or Bending Spoons.
        </p>
      </div>
    </footer>
  );
}
