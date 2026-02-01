import { useEffect, useRef } from "react";

/**
 * AdsBanner - Dynamic flippantaside banner component
 * Loads the specific ad script provided by the user.
 */
export function AdsBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!adContainerRef.current) return;

    // Clear previous content
    adContainerRef.current.innerHTML = "";

    // Create a specific container for the banner
    const innerContainer = document.createElement("div");
    innerContainer.className = "flippantaside-banner-container";
    innerContainer.style.minHeight = "90px";
    innerContainer.style.width = "100%";
    innerContainer.style.display = "flex";
    innerContainer.style.justifyContent = "center";
    innerContainer.style.alignItems = "center";
    adContainerRef.current.appendChild(innerContainer);

    // Implementation of the exact script logic provided by the user
    // (function(tyetyd){...})({})
    const script = document.createElement("script");
    script.async = true;
    script.src = "//flippantaside.com/b.X/V-sNdnGelY0uYAWVcS/UePmr9MuLZKUulBkKP/TEYx3ANnjXE/5wNzzZEgt-NQjSc/2gMeTlkZ3/MNgO";
    script.referrerPolicy = "no-referrer-when-downgrade";
    (script as any).settings = {};
    
    // Using parentNode.insertBefore(s, l) logic equivalent in a React ref
    adContainerRef.current.appendChild(script);

    return () => {
      if (adContainerRef.current) {
        adContainerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div 
      className="w-full flex justify-center items-center my-8 min-h-[90px] ads-banner-root bg-white/5 rounded-xl border border-white/10"
      style={{ display: 'flex', minHeight: '90px', width: '100%', overflow: 'visible' }}
    >
      <div 
        ref={adContainerRef}
        className="w-full flex justify-center items-center ads-banner-injection-point"
        style={{ minHeight: '90px', width: '100%', display: 'flex', justifyContent: 'center' }}
      >
      </div>
    </div>
  );
}
