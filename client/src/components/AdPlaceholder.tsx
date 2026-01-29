import { motion } from "framer-motion";
import adDownloadNowVertical from "@/assets/images/ad-download-now-vertical.png";
import adDownloadNowHorizontalRed from "@/assets/images/ad-download-now-horizontal-red.png";
import adDownloadNowHorizontalBlue from "@/assets/images/ad-download-now-horizontal-blue.png";
import adGooglePlay from "@/assets/images/ad-google-play.png";

interface AdPlaceholderProps {
  format?: "rectangle" | "leaderboard" | "mobile";
  className?: string;
}

const AD_IMAGES = {
  mobile: adGooglePlay,
  leaderboard: adDownloadNowHorizontalBlue,
  rectangle: adDownloadNowVertical,
};

const AD_CONFIGS = {
  mobile: { height: 50, width: 320 },
  leaderboard: { height: 90, width: 728 },
  rectangle: { height: 250, width: 300 },
};

/**
 * AdPlaceholder - Correctly integrates specific ad images with link.
 */
export function AdPlaceholder({ format = "rectangle", className = "" }: AdPlaceholderProps) {
  const config = AD_CONFIGS[format];
  const adImage = AD_IMAGES[format];
  const adLink = "https://otieu.com/4/10538188";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`w-full overflow-hidden my-8 flex flex-col items-center justify-center relative ${className}`}
    >
      <div className="flex flex-col items-center gap-2 w-full max-w-[728px]">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
          <span className="text-[9px] text-muted-foreground/60 uppercase tracking-[0.2em] font-black">Sponsor Verified</span>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>
        <a 
          href={adLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block group relative hover:scale-[1.02] transition-all duration-500 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black/40 backdrop-blur-sm p-1"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <img 
            src={adImage} 
            alt="Verified Sponsor Advertisement"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{ 
              height: format === 'mobile' ? '50px' : 'auto',
              maxHeight: format === 'rectangle' ? '250px' : '90px',
              maxWidth: '100%',
              width: 'auto'
            }}
            className="relative z-10 object-contain rounded-xl"
          />
        </a>
        <p className="text-[10px] text-muted-foreground/40 italic mt-2">Support our free platform by visiting our partners</p>
      </div>
    </motion.div>
  );
}
