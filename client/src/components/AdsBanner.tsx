import { useEffect, useRef, useState } from "react";

export function AdsBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const [hasAd, setHasAd] = useState(false);

  useEffect(() => {
    if (!adContainerRef.current) return;

    // Clear the container
    adContainerRef.current.innerHTML = "";

    // Create a new script element exactly as provided in the snippet
    const s = document.createElement('script');
    
    // The script snippet uses document.scripts[document.scripts.length - 1]
    // Since we're injecting it dynamically, we need to ensure it's appended to our container
    // and that the environment is handled carefully.
    
    // We'll wrap the script logic into a string and execute it
    // or set the attributes directly on the script element.
    
    s.src = "//flippantaside.com/b.X/V-sNdnGelY0uYAWVcS/UePmr9MuLZKUulBkKP/TEYx3ANnjXE/5wNzzZEgt-NQjSc/2gMeTlkZ3/MNgO";
    s.async = true;
    s.referrerPolicy = 'no-referrer-when-downgrade';
    (s as any).settings = {};

    // Ad content detection logic - specifically looking for elements HilltopAds typically injects
    const checkContent = () => {
      if (!adContainerRef.current) return;
      
      // Look for iframes, specific div IDs, or substantial HTML changes
      const hasVisibleContent = adContainerRef.current.querySelectorAll('iframe, ins, a, img, video, div:not(:empty)').length > 0;
      
      if (hasVisibleContent) {
        setHasAd(true);
      }
    };

    s.onload = () => {
      // HilltopAds can be slow, checking multiple times
      setTimeout(checkContent, 1000);
      setTimeout(checkContent, 3000);
      setTimeout(checkContent, 5000);
      setTimeout(checkContent, 8000);
    };

    adContainerRef.current.appendChild(s);
  }, []);

  return (
    <div 
      className={`w-full max-w-[728px] mx-auto flex justify-center items-center my-8 transition-opacity duration-500 overflow-hidden ${!hasAd ? 'h-0 opacity-0' : 'min-h-[90px] opacity-100'}`}
    >
      <div 
        ref={adContainerRef}
        className="w-full flex justify-center items-center"
      >
      </div>
    </div>
  );
}
