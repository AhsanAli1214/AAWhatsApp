import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "wouter";

type AdConfig = {
  key: string;
  width: number;
  height: number;
};

const MOBILE_AD: AdConfig = {
  key: "ca232c50e76b4c8c0b1b2672f20c3059",
  width: 320,
  height: 50,
};

const DESKTOP_AD: AdConfig = {
  key: "38c697dc814ac8c20cf9aa46d6f3337d",
  width: 728,
  height: 90,
};

const DESKTOP_BREAKPOINT = 1024;
const AD_REFRESH_RETRY_MS = 3500;
const AD_VISIBILITY_POLL_MS = 400;
const AD_VISIBILITY_MAX_POLLS = 20;

function getIsDesktop() {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= DESKTOP_BREAKPOINT;
}

function hasRenderableAdFrame(slot: HTMLDivElement) {
  const adFrame = slot.querySelector("iframe");
  if (!adFrame) return false;

  const src = adFrame.getAttribute("src") ?? "";
  const { width, height } = adFrame.getBoundingClientRect();

  return src !== "about:blank" || (width > 0 && height > 0);
}

function injectAd(slot: HTMLDivElement, adConfig: AdConfig) {
  slot.innerHTML = "";

  const optionsScript = document.createElement("script");
  optionsScript.text = `window.atOptions = { key: '${adConfig.key}', format: 'iframe', height: ${adConfig.height}, width: ${adConfig.width}, params: {} };`;

  const invokeScript = document.createElement("script");
  invokeScript.src = `https://www.highperformanceformat.com/${adConfig.key}/invoke.js`;
  invokeScript.async = true;

  slot.appendChild(optionsScript);
  slot.appendChild(invokeScript);
}

export function GlobalAdBanner() {
  const [pathname] = useLocation();
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);
  const [isAdVisible, setIsAdVisible] = useState(false);
  const [showFallbackBanner, setShowFallbackBanner] = useState(false);
  const adContainerRef = useRef<HTMLDivElement | null>(null);

  const adConfig = useMemo(() => {
    return isDesktop ? DESKTOP_AD : MOBILE_AD;
  }, [isDesktop]);

  useEffect(() => {
    const onResize = () => setIsDesktop(getIsDesktop());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const slot = adContainerRef.current;
    if (!slot) return;

    setIsAdVisible(false);
    setShowFallbackBanner(false);
    injectAd(slot, adConfig);

    const syncVisibility = () => {
      const visible = hasRenderableAdFrame(slot);
      setIsAdVisible(visible);
      if (visible) {
        setShowFallbackBanner(false);
      }
      return visible;
    };

    const observer = new MutationObserver(() => {
      syncVisibility();
    });

    observer.observe(slot, { childList: true, subtree: true, attributes: true });

    let pollCount = 0;
    const pollTimer = window.setInterval(() => {
      const isVisibleNow = syncVisibility();
      pollCount += 1;

      if (isVisibleNow || pollCount >= AD_VISIBILITY_MAX_POLLS) {
        window.clearInterval(pollTimer);
      }
    }, AD_VISIBILITY_POLL_MS);

    const retryTimer = window.setTimeout(() => {
      if (!hasRenderableAdFrame(slot)) {
        injectAd(slot, adConfig);
      }
    }, AD_REFRESH_RETRY_MS);

    const fallbackTimer = window.setTimeout(() => {
      if (!hasRenderableAdFrame(slot)) {
        setShowFallbackBanner(true);
      }
    }, AD_REFRESH_RETRY_MS + 2500);

    return () => {
      window.clearTimeout(retryTimer);
      window.clearTimeout(fallbackTimer);
      window.clearInterval(pollTimer);
      observer.disconnect();
      slot.innerHTML = "";
      setIsAdVisible(false);
      setShowFallbackBanner(false);
    };
  }, [adConfig, pathname]);

  const hasVisibleBanner = isAdVisible || showFallbackBanner;

  return (
    <div
      className="sticky bottom-0 z-30 mt-4 flex justify-center px-2 safe-area-pb"
      aria-label="Advertisement"
      aria-hidden={!hasVisibleBanner}
    >
      <div
        className="mb-2 rounded-md border border-white/10 bg-black/40 p-1 shadow-lg backdrop-blur-sm transition-opacity duration-300"
        style={{
          width: adConfig.width + 8,
          maxWidth: "100%",
          opacity: hasVisibleBanner ? 1 : 0,
          pointerEvents: "auto",
        }}
      >
        <div
          ref={adContainerRef}
          style={{
            width: adConfig.width,
            height: adConfig.height,
            maxWidth: "100%",
            margin: "0 auto",
            display: isAdVisible ? "block" : "none",
          }}
        />

        {showFallbackBanner && !isAdVisible ? (
          <a
            href="/aa-whatsapp/download"
            className="flex items-center justify-between gap-3 rounded-sm bg-gradient-to-r from-primary/20 to-emerald-400/20 px-3 text-xs text-foreground no-underline"
            style={{ width: adConfig.width, height: adConfig.height, maxWidth: "100%", margin: "0 auto" }}
          >
            <span className="font-semibold">Sponsored: Download AA WhatsApp Latest Version</span>
            <span className="rounded bg-primary px-2 py-1 text-[10px] font-bold uppercase text-primary-foreground">Open</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
