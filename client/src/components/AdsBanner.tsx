import { useEffect, useRef, useState } from "react";

export function AdsBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const [hasAd, setHasAd] = useState(false);

  useEffect(() => {
    if (!adContainerRef.current) return;

    // Clear the container
    adContainerRef.current.innerHTML = "";

    // Create a wrapper for the script because the original script 
    // uses document.scripts[document.scripts.length - 1] to find itself
    const script = document.createElement("script");
    script.async = true;
    script.src = "//flippantaside.com/b.X/V-sNdnGelY0uYAWVcS/UePmr9MuLZKUulBkKP/TEYx3ANnjXE/5wNzzZEgt-NQjSc/2gMeTlkZ3/MNgO";
    script.referrerPolicy = "no-referrer-when-downgrade";
    
    // Set settings
    (script as any).settings = {};

    // Ad content detection logic
    const checkContent = () => {
      if (!adContainerRef.current) return;
      
      const hasVisibleContent = adContainerRef.current.querySelectorAll('iframe, ins, a, img, div').length > 0;
      const innerHTML = adContainerRef.current.innerHTML;
      
      // If the script injected something substantial
      if (hasVisibleContent || innerHTML.length > 100) {
        setHasAd(true);
      }
    };

    script.onload = () => {
      setTimeout(checkContent, 1000);
      setTimeout(checkContent, 3000);
      setTimeout(checkContent, 5000);
    };

    adContainerRef.current.appendChild(script);
  }, []);

  return (
    <div 
      className={`w-full max-w-[728px] mx-auto flex justify-center items-center my-8 transition-opacity duration-500 ${!hasAd ? 'h-0 opacity-0 overflow-hidden' : 'min-h-[90px] opacity-100'}`}
    >
      <div 
        ref={adContainerRef}
        className="w-full flex justify-center items-center"
      >
      </div>
    </div>
  );
}
