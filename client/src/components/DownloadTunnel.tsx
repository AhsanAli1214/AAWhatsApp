import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Lock, Zap, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadTunnel({ onComplete }: { onComplete: () => void }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  const stages = [
    "Initializing Secure Tunnel...",
    "Encrypting Download Stream...",
    "Bypassing Server Constraints...",
    "Finalizing Secure Package..."
  ];

  useEffect(() => {
    if (isDownloading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setIsDownloading(false);
              onComplete();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      const stageInterval = setInterval(() => {
        setStage((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
      }, 1000);

      return () => {
        clearInterval(interval);
        clearInterval(stageInterval);
      };
    }
  }, [isDownloading, onComplete]);

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!isDownloading ? (
          <motion.div
            key="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setIsDownloading(true)}
              className="relative group overflow-hidden px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-bold text-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:-translate-y-1 active:scale-95 transition-all duration-300 w-full border border-primary/20"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Zap className="w-6 h-6 fill-current" />
                Download AAWhatsApp APK
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="tunnel"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="glass-card p-8 rounded-[2rem] border border-primary/30 bg-primary/5 relative overflow-hidden"
          >
            {/* Tunnel Animation Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-primary animate-pulse" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Lock className="w-5 h-5 text-primary animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest">Secure Tunnel</h4>
                    <p className="text-[10px] text-muted-foreground font-mono">{stages[stage]}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black font-mono text-primary">{progress}%</span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 p-1">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 to-primary rounded-full relative"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "linear" }}
                >
                  {/* Scanner Effect */}
                  <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-r from-transparent to-white/30 animate-scan" />
                </motion.div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-[10px] uppercase font-bold tracking-tighter">Scan: CLEAN</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                  <Loader2 className="w-4 h-4 text-primary animate-spin" />
                  <span className="text-[10px] uppercase font-bold tracking-tighter">AES-256 Enabled</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
