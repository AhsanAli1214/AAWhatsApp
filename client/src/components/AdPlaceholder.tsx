import { motion } from "framer-motion";

interface AdPlaceholderProps {
  slot?: string;
  format?: "auto" | "rectangle" | "leaderboard" | "mobile";
  className?: string;
}

/**
 * AdPlaceholder - A flexible component for AdSense or other ad network placements.
 * For production, replace the placeholder div with the actual ad script/ins tag.
 */
export function AdPlaceholder({ slot, format = "auto", className = "" }: AdPlaceholderProps) {
  // Determine height based on format
  const minHeight = {
    auto: "min-h-[250px]",
    rectangle: "min-h-[250px]",
    leaderboard: "min-h-[90px]",
    mobile: "min-h-[50px]",
  }[format];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`w-full overflow-hidden my-8 flex items-center justify-center bg-white/[0.02] border border-white/5 rounded-2xl relative group ${minHeight} ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Actual Ad Script would go here */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="px-2 py-0.5 rounded text-[10px] font-black tracking-widest uppercase bg-primary/10 text-primary/50 border border-primary/10">
          Advertisement
        </div>
        {slot && (
          <div className="text-[10px] text-muted-foreground opacity-30 font-mono">
            Slot: {slot}
          </div>
        )}
      </div>

      {/* Background visual flair */}
      <div className="absolute top-0 right-0 p-2 opacity-[0.02] pointer-events-none">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
      </div>
    </motion.div>
  );
}
