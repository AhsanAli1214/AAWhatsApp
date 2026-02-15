import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLocation } from "wouter";
import { FLOATING_POSTER_CONFIG } from "@/config/appConfig";

const POSTER_SESSION_KEY = "aa_mods_floating_poster_seen";

export function FloatingPoster() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    if (!FLOATING_POSTER_CONFIG.enabled || !FLOATING_POSTER_CONFIG.imageUrl) {
      return;
    }

    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = FLOATING_POSTER_CONFIG.imageUrl;
    document.head.appendChild(preloadLink);

    const imagePreload = new Image();
    imagePreload.decoding = "async";
    imagePreload.src = FLOATING_POSTER_CONFIG.imageUrl;

    return () => {
      if (preloadLink.parentNode) {
        preloadLink.parentNode.removeChild(preloadLink);
      }
    };
  }, []);

  useEffect(() => {
    const isAppSelectorPage = location === "/";

    if (!isAppSelectorPage || !FLOATING_POSTER_CONFIG.enabled || !FLOATING_POSTER_CONFIG.imageUrl) {
      setIsOpen(false);
      return;
    }

    const hasSeenPoster = window.sessionStorage.getItem(POSTER_SESSION_KEY) === "1";
    if (hasSeenPoster) {
      setIsOpen(false);
      return;
    }

    const openTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(POSTER_SESSION_KEY, "1");
      setIsOpen(true);
    }, 120);

    return () => window.clearTimeout(openTimer);
  }, [location]);

  if (!FLOATING_POSTER_CONFIG.enabled || !FLOATING_POSTER_CONFIG.imageUrl || location !== "/" || !isOpen) {
    return null;
  }

  const posterImage = (
    <img
      src={FLOATING_POSTER_CONFIG.imageUrl}
      alt={FLOATING_POSTER_CONFIG.alt}
      className="max-h-[72vh] w-full rounded-2xl object-contain sm:max-h-[78vh]"
      loading="eager"
      decoding="async"
      fetchPriority="high"
    />
  );

  return (
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/70 px-3 sm:px-4 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
      role="presentation"
    >
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="fixed right-4 top-4 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/70 text-white transition-colors hover:bg-black sm:right-6 sm:top-6 sm:h-9 sm:w-9"
        aria-label="Close poster"
      >
        <X className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>

      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl" onClick={(e) => e.stopPropagation()}>
        {posterImage}
      </div>
    </div>
  );
}
