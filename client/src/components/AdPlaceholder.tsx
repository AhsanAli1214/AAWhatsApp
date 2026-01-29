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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`w-full overflow-hidden my-4 flex flex-col items-center justify-center relative ${className}`}
    >
      <div className="flex flex-col items-center gap-0.5">
        <span className="text-[8px] md:text-[9px] text-muted-foreground/30 uppercase tracking-[0.2em] font-medium leading-none">Ads</span>
        <a 
          href={adLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block hover:opacity-90 transition-opacity rounded-xl overflow-hidden border border-white/5 shadow-xl"
        >
          <img 
            src={adImage} 
            alt="Advertisement"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={{ 
              height: format === 'mobile' ? '50px' : 'auto',
              maxHeight: format === 'rectangle' ? '250px' : '90px',
              maxWidth: '100%',
              width: 'auto'
            }}
            className="object-contain bg-black/20"
          />
        </a>
      </div>
    </motion.div>
  );
}
