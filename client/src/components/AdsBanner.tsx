import { useEffect, useRef } from "react";

/**
 * AdsBanner - Dynamic flippantaside banner component
 * Loads the specific ad script requested by the user.
 */
export function AdsBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adContainerRef.current) return;

    // Clear previous content
    adContainerRef.current.innerHTML = "";

    // Create a target div for the script to find
    const target = document.createElement("div");
    target.className = "flippantaside-target-container";
    target.style.minHeight = "90px";
    target.style.width = "100%";
    adContainerRef.current.appendChild(target);

    // Load the script
    const script = document.createElement("script");
    script.async = true;
    script.src = "//flippantaside.com/b/XbVns.djGElt0tY/WFcw/FeYmS9fuBZzUplkkpPlT/YH3/NOjbECyIMPjWYjtJNxj/cc2KMgTMIByAN-wc";
    script.referrerPolicy = "no-referrer-when-downgrade";
    (script as any).settings = {};
    
    // Append script to the root container
    adContainerRef.current.appendChild(script);

    return () => {
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div 
      className="w-full flex justify-center items-center my-8 min-h-[90px] ads-banner-final-root bg-white/5 rounded-xl border border-white/10"
      style={{ display: 'flex', minHeight: '90px', width: '100%', overflow: 'visible' }}
    >
      <div 
        ref={adContainerRef}
        className="w-full flex justify-center items-center ads-banner-final-injection"
        style={{ minHeight: '90px', width: '100%', display: 'flex', justifyContent: 'center' }}
      >
      </div>
    </div>
  );
}
