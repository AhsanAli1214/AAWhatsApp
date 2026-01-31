import { useEffect, useRef } from "react";

export function AdsBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);

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

    adContainerRef.current.appendChild(script);
  }, []);

  return (
    <div 
      ref={adContainerRef}
      className="w-full max-w-[728px] mx-auto flex justify-center items-center my-4 min-h-[90px] bg-muted/5 rounded-lg border border-border/50 overflow-hidden"
      id="flippantaside-banner-container"
    >
      <div className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] opacity-40">
        Advertisement
      </div>
    </div>
  );
}
