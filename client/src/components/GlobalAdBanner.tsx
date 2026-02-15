import { useEffect, useMemo, useRef, useState } from "react";

const MOBILE_AD = {
  key: "ca232c50e76b4c8c0b1b2672f20c3059",
  width: 320,
  height: 50,
};

const DESKTOP_AD = {
  key: "38c697dc814ac8c20cf9aa46d6f3337d",
  width: 728,
  height: 90,
};

const DESKTOP_BREAKPOINT = 1024;

function getIsDesktop() {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= DESKTOP_BREAKPOINT;
}

export function GlobalAdBanner() {
  const [isDesktop, setIsDesktop] = useState(getIsDesktop);
  const adSlotRef = useRef<HTMLDivElement | null>(null);

  const adConfig = useMemo(() => {
    return isDesktop ? DESKTOP_AD : MOBILE_AD;
  }, [isDesktop]);

  useEffect(() => {
    const onResize = () => setIsDesktop(getIsDesktop());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const slot = adSlotRef.current;
    if (!slot) return;

    slot.innerHTML = "";

    const optionsScript = document.createElement("script");
    optionsScript.type = "text/javascript";
    optionsScript.text = `atOptions = { key: '${adConfig.key}', format: 'iframe', height: ${adConfig.height}, width: ${adConfig.width}, params: {} };`;

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src = `https://www.highperformanceformat.com/${adConfig.key}/invoke.js`;
    invokeScript.async = true;

    slot.appendChild(optionsScript);
    slot.appendChild(invokeScript);

    return () => {
      slot.innerHTML = "";
    };
  }, [adConfig]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--global-ad-banner-space",
      `${adConfig.height + 20}px`,
    );

    return () => {
      document.documentElement.style.setProperty("--global-ad-banner-space", "0px");
    };
  }, [adConfig.height]);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex justify-center px-2 safe-area-pb pointer-events-none" aria-label="Advertisement">
      <div
        className="pointer-events-auto mb-2 rounded-md border border-white/10 bg-black/40 p-1 shadow-lg backdrop-blur-sm"
        style={{ width: adConfig.width + 8, maxWidth: "100%" }}
      >
        <div
          ref={adSlotRef}
          style={{
            width: adConfig.width,
            height: adConfig.height,
            maxWidth: "100%",
            margin: "0 auto",
            overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
}
