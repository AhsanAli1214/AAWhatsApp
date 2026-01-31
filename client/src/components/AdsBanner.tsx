import { useEffect, useRef, useState } from "react";

export function AdsBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const [hasAd, setHasAd] = useState(false);

  useEffect(() => {
    if (!adContainerRef.current) return;

    // Clean up existing scripts and children
    const container = adContainerRef.current;
    const existingScript = container.querySelector('script');
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://flippantaside.com/bjXGV.szdlG/lt0pY/WFcH/QePmF9mumZBU/lzkYPMT_Y/3/N-jKEu5aN/zHEjt/NnjSc/2DMeTCke3RMdgZ";
    script.referrerPolicy = "no-referrer-when-downgrade";
    (script as any).settings = {};

    script.onload = () => setHasAd(true);
    script.onerror = () => {
      console.warn("Ad script failed to load");
      setHasAd(false);
    };

    container.appendChild(script);

    // Global style to ensure injected ads stay within their container
    const styleId = "ads-container-fix-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        #flippantaside-banner-container * {
          max-width: 100% !important;
          position: relative !important;
          top: auto !important;
          left: auto !important;
          right: auto !important;
          bottom: auto !important;
          transform: none !important;
        }
        #flippantaside-banner-container iframe, 
        #flippantaside-banner-container img, 
        #flippantaside-banner-container a {
          display: block !important;
          margin: 0 auto !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Monitor for significant content changes
    const observer = new MutationObserver((mutations) => {
      const hasMeaningfulContent = mutations.some(mutation => 
        Array.from(mutation.addedNodes).some(node => 
          (node instanceof Element && (node.tagName === 'IFRAME' || node.tagName === 'IMG' || node.tagName === 'A')) ||
          (node instanceof Element && node.querySelectorAll('iframe, img, a').length > 0)
        )
      );
      if (hasMeaningfulContent) setHasAd(true);
    });

    observer.observe(container, { childList: true, subtree: true });

    const fallbackTimer = setTimeout(() => {
      // Check if container has grown or has standard ad elements
      if (container.scrollHeight > 100 || container.querySelector('iframe, img, a')) {
        setHasAd(true);
      }
    }, 4000);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div 
      className={`w-full max-w-[728px] mx-auto my-4 transition-all duration-700 ease-in-out relative z-10 ${!hasAd ? 'opacity-0 max-h-0 overflow-hidden m-0' : 'opacity-100 max-h-[1000px]'}`}
    >
      <div 
        ref={adContainerRef}
        className="flex flex-col justify-center items-center w-full bg-muted/5 rounded-2xl border border-primary/10 shadow-xl overflow-hidden relative"
        id="flippantaside-banner-container"
      >
        <div className="w-full text-center py-2 border-b border-white/5 bg-white/5 rounded-t-2xl z-20 relative">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-black opacity-70">Sponsor Verified</span>
        </div>
        <div className={`flex-1 flex justify-center items-center p-4 w-full relative z-10 ${!hasAd ? 'min-h-[250px]' : 'min-h-[90px]'}`}>
          <div className={`${hasAd ? 'hidden' : 'flex'} absolute inset-0 flex-col items-center justify-center gap-3 text-[10px] text-muted-foreground uppercase tracking-[0.2em] opacity-40 animate-pulse z-0`}>
            <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
            <span>Establishing Secure Ad-Link...</span>
          </div>
          {/* Ad content will be injected here by the script */}
        </div>
      </div>
    </div>
  );
}
