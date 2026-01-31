import { useEffect, useRef, useState } from "react";

export function AdsBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const [hasAd, setHasAd] = useState(false);

  useEffect(() => {
    if (!adContainerRef.current) return;

    // Remove any existing scripts in this container to avoid duplicates
    const existingScript = adContainerRef.current.querySelector('script');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "//flippantaside.com/bjXGV.szdlG/lt0pY/WFcH/QePmF9mumZBU/lzkYPMT_Y/3/N-jKEu5aN/zHEjt/NnjSc/2DMeTCke3RMdgZ";
    script.referrerPolicy = "no-referrer-when-downgrade";
    
    // Pass settings if needed
    (script as any).settings = {};

    script.onload = () => setHasAd(true);
    script.onerror = () => setHasAd(false);

    adContainerRef.current.appendChild(script);

    // Some ad scripts might inject content without firing onload reliably on the script tag itself
    // or might fail to load. We'll assume it's attempting to load.
    // To truly prevent "empty" containers if the ad fails to serve, 
    // we would need to monitor the DOM, but for now we ensure it's not visible
    // if the script doesn't at least start.
    setHasAd(true); 
  }, []);

  return (
    <div 
      ref={adContainerRef}
      className={`w-full max-w-[728px] mx-auto flex justify-center items-center my-4 min-h-[90px] bg-muted/5 rounded-lg border border-border/50 overflow-hidden ${!hasAd ? 'hidden' : ''}`}
      id="flippantaside-banner-container"
    >
      <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] opacity-40">
        Advertisement
      </div>
    </div>
  );
}
