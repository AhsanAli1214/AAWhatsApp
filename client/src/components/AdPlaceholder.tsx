import { motion } from "framer-motion";
import { AdsBanner } from "./AdsBanner";

interface AdPlaceholderProps {
  format?: "rectangle" | "leaderboard" | "mobile";
  className?: string;
}

/**
 * AdPlaceholder - Redirects to AdsBanner for consistent ad display
 */
export function AdPlaceholder({
  format = "rectangle",
  className = "",
}: AdPlaceholderProps) {
  return (
    <div className={className}>
      <AdsBanner />
    </div>
  );
}
