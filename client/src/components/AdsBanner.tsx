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
    // Updated script source with correct protocol and path
    script.src = "https://flippantaside.com/bjXGV.szdlG/lt0pY/WFcH/QePmF9mumZBU/lzkYPMT_Y/3/N-jKEu5aN/zHEjt/NnjSc/2DMeTCke3RMdgZ";
    script.referrerPolicy = "no-referrer-when-downgrade";
    
    // Pass settings if needed
    (script as any).settings = {};

    script.onload = () => {
      setHasAd(true);
    };
    
    script.onerror = () => {
      console.warn("Ad script failed to load");
      setHasAd(false);
    };

    adContainerRef.current.appendChild(script);

    // Some ad scripts might inject content without firing onload reliably on the script tag itself
    const timer = setTimeout(() => {
      // Check if any new elements were added to the container (like an iframe or div)
      if (adContainerRef.current && adContainerRef.current.children.length > 2) {
        setHasAd(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`w-full max-w-[728px] mx-auto my-8 transition-all duration-500 ${!hasAd ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}
    >
      <div 
        ref={adContainerRef}
        className="flex flex-col justify-center items-center min-h-[90px] bg-muted/5 rounded-2xl border border-primary/10 shadow-lg overflow-hidden"
        id="flippantaside-banner-container"
      >
        <div className="w-full text-center py-2 border-b border-white/5 bg-white/5">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-black opacity-70">Sponsor Verified</span>
        </div>
        <div className="flex-1 flex justify-center items-center p-4 w-full min-h-[90px]">
          {/* Ad script will inject content here */}
          <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] opacity-40 animate-pulse">
            Loading Secure Advertisement...
          </div>
        </div>
      </div>
    </div>
  );
}
