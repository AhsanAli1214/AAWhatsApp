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
  rectangle: adDownloadNowHorizontalBlue, // Changed from adDownloadNowVertical to adDownloadNowHorizontalBlue
};

const AD_CONFIGS = {
  mobile: { height: 50, width: 320 },
  leaderboard: { height: 90, width: 728 },
  rectangle: { height: 250, width: 300 },
};

/**
 * AdPlaceholder - Integrated with Hilltop banner script
 */
export function AdPlaceholder({
  format = "rectangle",
  className = "",
}: AdPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`w-full overflow-hidden my-8 flex flex-col items-center justify-center relative min-h-[100px] rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm ${className}`}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="hilltop-banner-container min-h-[90px] w-full flex justify-center items-center">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.hilltop) {
                hilltop('showAd', '10538188');
              }
            `,
          }}
        />
      </div>
    </motion.div>
  );
}
