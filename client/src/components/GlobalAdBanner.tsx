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

function getIsDesktop() {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= DESKTOP_BREAKPOINT;
}

function hasRenderableAdFrame(slot: HTMLDivElement) {
  const adFrame = slot.querySelector("iframe");
  if (!adFrame) return false;

  const src = adFrame.getAttribute("src") ?? "";
  return src !== "about:blank";
}

export function GlobalAdBanner() {
  const [pathname] = useLocation();
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);
  const [isAdVisible, setIsAdVisible] = useState(false);
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
    slot.innerHTML = "";

    const optionsScript = document.createElement("script");
    optionsScript.text = `window.atOptions = { key: '${adConfig.key}', format: 'iframe', height: ${adConfig.height}, width: ${adConfig.width}, params: {} };`;

    const invokeScript = document.createElement("script");
    invokeScript.src = `https://www.highperformanceformat.com/${adConfig.key}/invoke.js`;
    invokeScript.async = true;

    slot.appendChild(optionsScript);
    slot.appendChild(invokeScript);

    const syncVisibility = () => setIsAdVisible(hasRenderableAdFrame(slot));

    const observer = new MutationObserver(syncVisibility);
    observer.observe(slot, { childList: true, subtree: true, attributes: true });

    const retryTimer = window.setTimeout(() => {
      if (slot.childElementCount === 0 || !hasRenderableAdFrame(slot)) {
        slot.innerHTML = "";
        slot.appendChild(optionsScript.cloneNode(true));
        slot.appendChild(invokeScript.cloneNode(true));
      }
    }, AD_REFRESH_RETRY_MS);

    const visibleTimer = window.setTimeout(syncVisibility, 1000);

    return () => {
      window.clearTimeout(retryTimer);
      window.clearTimeout(visibleTimer);
      observer.disconnect();
      slot.innerHTML = "";
      setIsAdVisible(false);
    };
  }, [adConfig, pathname]);

  useEffect(() => {
    const bannerSpace = isAdVisible ? `${adConfig.height + 20}px` : "0px";
    document.documentElement.style.setProperty("--global-ad-banner-space", bannerSpace);

    return () => {
      document.documentElement.style.setProperty("--global-ad-banner-space", "0px");
    };
  }, [adConfig.height, isAdVisible]);

  if (!isAdVisible) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center px-2 safe-area-pb pointer-events-none" aria-hidden="true">
        <div
          ref={adContainerRef}
          style={{ width: adConfig.width, height: adConfig.height, maxWidth: "100%", margin: "0 auto", opacity: 0 }}
        />
      </div>
    );
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex justify-center px-2 safe-area-pb pointer-events-none"
      aria-label="Advertisement"
    >
      <div
        className="pointer-events-auto mb-2 rounded-md border border-white/10 bg-black/40 p-1 shadow-lg backdrop-blur-sm"
        style={{ width: adConfig.width + 8, maxWidth: "100%" }}
      >
        <div
          ref={adContainerRef}
          style={{ width: adConfig.width, height: adConfig.height, maxWidth: "100%", margin: "0 auto" }}
        />
      </div>
    </div>
  );
}
