import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Zap, X, Clock, ShieldCheck, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AdDownloadButtonProps {
  downloadUrl: string;
}

export function AdDownloadButton({ downloadUrl }: AdDownloadButtonProps) {
  const [clickCount, setClickCount] = useState(0);
  const [showAd, setShowAd] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const handleClick = () => {
    if (clickCount === 0) {
      setClickCount(1);
      setShowAd(true);
      setCountdown(5);
      
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (clickCount === 1 && countdown === 0) {
      window.open(downloadUrl, "_blank");
    }
  };

  const closeAd = () => {
    if (countdown === 0) {
      setShowAd(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {!showAd ? (
          <motion.div
            key="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <button
              onClick={handleClick}
              className="relative group overflow-hidden px-10 py-6 rounded-2xl bg-primary text-primary-foreground font-black text-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] hover:-translate-y-1 active:scale-95 transition-all duration-500 w-full border border-white/20 uppercase tracking-tighter"
              data-testid="button-download-main"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Zap className="w-8 h-8 fill-current animate-pulse" />
                Download APK V2.0
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-primary to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 -skew-y-3 translate-y-[-10%]" />
            </button>
            <p className="text-center mt-4 text-xs text-muted-foreground uppercase tracking-[0.3em] font-bold opacity-50">
              Verified Secure • Anti-Ban v2.0 • 100% Clean
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="ad-overlay"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="glass-card p-8 rounded-[2rem] border border-primary/30 bg-background/95 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            
            <div className="text-center space-y-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground uppercase tracking-widest">Sponsored</span>
                {countdown === 0 ? (
                  <button
                    onClick={closeAd}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    data-testid="button-close-ad"
                  >
                    <X className="w-5 h-5 text-muted-foreground" />
                  </button>
                ) : (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-bold">{countdown}s</span>
                  </div>
                )}
              </div>

              <div className="py-8 px-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">AAWhatsApp V2.0</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  The most secure WhatsApp mod with Anti-Ban protection
                </p>
                <div className="flex flex-wrap justify-center gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                    No Location Access
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    Privacy Core
                  </span>
                </div>
              </div>

              <Button
                onClick={handleClick}
                disabled={countdown > 0}
                size="lg"
                className={`w-full py-6 text-lg font-bold ${
                  countdown > 0 
                    ? "opacity-50 cursor-not-allowed" 
                    : "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30"
                }`}
                data-testid="button-download-final"
              >
                {countdown > 0 ? (
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Wait {countdown} seconds...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    Download Now - MediaFire
                  </span>
                )}
              </Button>

              <p className="text-[10px] text-muted-foreground opacity-50">
                Clicking download will open MediaFire in a new tab
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
