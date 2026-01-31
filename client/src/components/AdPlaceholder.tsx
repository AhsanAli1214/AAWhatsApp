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
      className={`w-full overflow-hidden my-8 flex flex-col items-center justify-center relative ${className}`}
    >
      <div className="hilltop-banner-container min-h-[90px] w-full flex justify-center">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(fze){
              var d = document,
                  s = d.createElement('script'),
                  l = d.scripts[d.scripts.length - 1];
              s.settings = fze || {};
              s.src = "\\/\\/flippantaside.com\\/bjXGV.szdlG\\/lt0pY\\/WFcH\\/QePmF9mumZBU\\/lzkYPMT_Y\\/3\\/N-jKEu5aN\\/zHEjt\\/NnjSc\\/2DMeTCke3RMdgZ";
              s.async = true;
              s.referrerPolicy = 'no-referrer-when-downgrade';
              l.parentNode.insertBefore(s, l);
              })({})
            `,
          }}
        />
      </div>
    </motion.div>
  );
}
