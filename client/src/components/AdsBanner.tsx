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

    script.onload = () => {
      // Check if the script actually created content or if it's an error frame
      setTimeout(() => {
        const hasContent = adContainerRef.current && adContainerRef.current.innerHTML.length > 100;
        setHasAd(!!hasContent);
      }, 1000);
    };
    script.onerror = () => setHasAd(false);

    adContainerRef.current.appendChild(script);
    
    // Default to false and let onload/setTimeout enable it if successful
    setHasAd(false); 
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
