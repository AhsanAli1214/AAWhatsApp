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
      <a 
        href={adLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block group transition-all duration-500"
      >
        <img 
          src={adImage} 
          alt="Verified Sponsor Advertisement"
          loading="eager"
          decoding="async"
          style={{ 
            height: format === 'mobile' ? '50px' : 'auto',
            maxHeight: format === 'rectangle' ? '250px' : '90px',
            maxWidth: '100%',
            width: 'auto'
          }}
          className="relative z-10 object-contain"
        />
      </a>
    </motion.div>
  );
}
