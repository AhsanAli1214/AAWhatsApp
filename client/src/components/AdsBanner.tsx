import { useEffect, useRef } from "react";

export function AdsBanner() {
  const adContainerRef = useRef<HTMLDivElement>(null);

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
