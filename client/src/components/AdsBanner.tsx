import { useEffect, useRef, useState } from "react";

export function AdsBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);
  const [hasAd, setHasAd] = useState(false);

  useEffect(() => {
    if (!adContainerRef.current) return;

    // Clear the container
    adContainerRef.current.innerHTML = "";

    // The script provided for VAST
    const script = document.createElement("script");
    script.async = true;
    script.src = "//flippantaside.com/b.XKVJsudjGNlk0MYbWdcN/MeTmi9NuAZDUel-kjP_TiYh3SNdj/E/yQMGjqYitnN/jqcr2IMPTvI/ykN_wd";
    script.referrerPolicy = "no-referrer-when-downgrade";
    
    // HilltopAds / Flippantaside dynamic settings
    (script as any).settings = {};

    // Ad content detection logic
    const checkContent = () => {
      if (!adContainerRef.current) return;
      
      // Look for iframes, specific div IDs, or substantial HTML changes
      const hasVisibleContent = adContainerRef.current.querySelectorAll('iframe, ins, a, img, video, div:not(:empty)').length > 0;
      const innerHTML = adContainerRef.current.innerHTML;
      
      // If we see anything injected, we show the container.
      if (hasVisibleContent || innerHTML.length > 50) {
        setHasAd(true);
      }
    };

    script.onload = () => {
      // Check multiple times as ads can load asynchronously
      const intervals = [500, 1500, 3000, 6000, 10000];
      intervals.forEach(ms => setTimeout(checkContent, ms));
    };

    // Append to container
    adContainerRef.current.appendChild(script);
    
    return () => {
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div 
      className={`w-full max-w-[728px] mx-auto flex justify-center items-center my-8 transition-opacity duration-700 overflow-hidden ${!hasAd ? 'h-0 opacity-0' : 'min-h-[90px] opacity-100'}`}
    >
      <div 
        ref={adContainerRef}
        className="w-full flex justify-center items-center"
      >
      </div>
    </div>
  );
}
