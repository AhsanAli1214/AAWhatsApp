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

    // Implementation of the exact script provided by the user
    const script = document.createElement("script");
    script.innerHTML = `
      (function(tyetyd){
        var d = document,
            s = d.createElement('script'),
            l = d.scripts[d.scripts.length - 1];
        s.settings = tyetyd || {};
        s.src = "//flippantaside.com/b.X/V-sNdnGelY0uYAWVcS/UePmr9MuLZKUulBkKP/TEYx3ANnjXE/5wNzzZEgt-NQjSc/2gMeTlkZ3/MNgO";
        s.async = true;
        s.referrerPolicy = 'no-referrer-when-downgrade';
        // In React environment, we insert it into our container
        var target = document.querySelector('.flippantaside-banner-container');
        if (target) {
          target.appendChild(s);
        } else {
          d.head.appendChild(s);
        }
      })({})
    `;
    
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
