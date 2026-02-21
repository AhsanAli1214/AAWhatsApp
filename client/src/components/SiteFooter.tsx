import { APP_LOGO_URL } from "@/lib/branding";
import { Link } from "wouter";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white/95">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-5 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Go to AA Mods home" className="shrink-0">
            <img src={APP_LOGO_URL} alt="AA Mods Logo" fetchPriority="high" decoding="async" loading="eager" className="h-16 w-16 object-contain" />
          </Link>
          <div className="space-y-1">
            <p className="text-sm font-semibold text-slate-900">AA Mods Store</p>
            <p className="text-xs text-slate-500">Trusted app updates, verified releases, and secure download guidance.</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-600">
          <Link href="/terms-of-service" className="transition-colors hover:text-emerald-700">
            Terms of Service
          </Link>
          <Link href="/privacy-policy" className="transition-colors hover:text-emerald-700">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-100">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} AA Mods. All rights reserved.</p>
          <p>Use of this website is subject to our Terms of Service and Privacy Policy.</p>
        </div>
      </div>
    </footer>
  );
}
