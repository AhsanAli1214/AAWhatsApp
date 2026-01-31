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

    // Initial state set to true to allow script to load, 
    // but the container will collapse if script fails via onload/onerror
    setHasAd(true); 
  }, []);

  return (
    <div 
      ref={adContainerRef}
      className={`w-full max-w-[728px] mx-auto flex justify-center items-center my-4 min-h-0 bg-transparent overflow-hidden ${!hasAd ? 'hidden' : ''}`}
      id="flippantaside-banner-container"
    >
    </div>
  );
}
