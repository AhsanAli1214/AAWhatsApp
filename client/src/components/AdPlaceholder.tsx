import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AdPlaceholderProps {
  format?: "rectangle" | "leaderboard" | "mobile";
  className?: string;
}

const AD_CONFIGS = {
  mobile: {
    key: "ca232c50e76b4c8c0b1b2672f20c3059",
    height: 50,
    width: 320,
  },
  leaderboard: {
    key: "38c697dc814ac8c20cf9aa46d6f3337d",
    height: 90,
    width: 728,
  },
  rectangle: {
    key: "8e14948758b8dd246fe40fe57195f5a9",
    height: 250,
    width: 300,
  },
};

/**
 * AdPlaceholder - Correctly integrates specific ad units using the provided keys.
 */
export function AdPlaceholder({ format = "rectangle", className = "" }: AdPlaceholderProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const config = AD_CONFIGS[format];

  useEffect(() => {
    if (!adRef.current || !config) return;

    // Clear previous ad if any
    adRef.current.innerHTML = "";

    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : '${config.key}',
        'format' : 'iframe',
        'height' : ${config.height},
        'width' : ${config.width},
        'params' : {}
      };
    `;

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = `//exasperatebubblyorthodox.com/${config.key}/invoke.js`;
    script2.async = true;
    script2.setAttribute("data-cfasync", "false");

    // Small delay to ensure container is ready and help with race conditions
    const timeoutId = setTimeout(() => {
      if (adRef.current) {
        adRef.current.appendChild(script1);
        adRef.current.appendChild(script2);
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [format, config.key, config.height, config.width]);

  const minHeight = `${config.height}px`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`w-full overflow-hidden my-4 flex items-center justify-center relative ${className}`}
      style={{ minHeight }}
    >
      <div 
        ref={adRef} 
        style={{ minHeight, width: `${config.width}px` }}
        className="flex items-center justify-center bg-white/[0.01] border border-white/5 rounded-xl overflow-hidden shadow-inner mx-auto"
      />
    </motion.div>
  );
}
