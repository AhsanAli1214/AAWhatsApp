import { useEffect, useRef, useState } from "react";

export function AdsBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const [hasAd, setHasAd] = useState(false);

  useEffect(() => {
    if (!adContainerRef.current) return;

    // Clear the container
    adContainerRef.current.innerHTML = "";

    // Load the specific flippantaside script requested by the user
    // This is the SAME script as in index.html, but injected here to target this container
    const src = "//flippantaside.com/b/XbVns.djGElt0tY/WFcw/FeYmS9fuBZzUplkkpPlT/YH3/NOjbECyIMPjWYjtJNxj/cc2KMgTMIByAN-wc";

    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.referrerPolicy = "no-referrer-when-downgrade";
    (script as any).settings = {};
    adContainerRef.current.appendChild(script);

    // Ad content detection logic
    const checkContent = () => {
      if (!adContainerRef.current) return;
      
      const hasVisibleContent = adContainerRef.current.querySelectorAll('iframe, ins, a, img, video, div:not(:empty)').length > 0;
      const innerHTML = adContainerRef.current.innerHTML;
      
      if (hasVisibleContent || innerHTML.length > 100) {
        setHasAd(true);
      }
    };

    // Check multiple times as ads can load asynchronously
    const intervals = [500, 1500, 3000, 6000, 10000];
    intervals.forEach(ms => setTimeout(checkContent, ms));

    return () => {
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div 
      className={`w-full max-w-[728px] mx-auto flex justify-center items-center my-8 transition-opacity duration-700 overflow-hidden ${!hasAd ? 'min-h-[90px]' : 'min-h-[90px] opacity-100'}`}
    >
      <div 
        ref={adContainerRef}
        className="w-full flex justify-center items-center"
      >
      </div>
    </div>
  );
}
