import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Lock, Zap, ArrowRight, Loader2, CheckCircle2, ShieldAlert, Cpu, Network, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DownloadTunnel({ onComplete }: { onComplete: () => void }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState(0);

  const stages = [
    { text: "Initializing Secure Tunnel...", icon: Network },
    { text: "Encrypting Download Stream...", icon: Lock },
    { text: "Bypassing Server Constraints...", icon: Cpu },
    { text: "Finalizing Secure Package...", icon: FileCheck }
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
            }, 800);
            return 100;
          }
          // Dynamic progress speed
          const increment = prev > 85 ? 1 : 2;
          return Math.min(prev + increment, 100);
        });
      }, 60);

      const stageInterval = setInterval(() => {
        setStage((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
      }, 1500);

      return () => {
        clearInterval(interval);
        clearInterval(stageInterval);
      };
    }
  }, [isDownloading, onComplete]);

  const CurrentIcon = stages[stage].icon;

  return (
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {!isDownloading ? (
          <motion.div
            key="button"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <button
              onClick={() => setIsDownloading(true)}
              className="relative group overflow-hidden px-10 py-6 rounded-2xl bg-primary text-primary-foreground font-black text-2xl shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.7)] hover:-translate-y-1 active:scale-95 transition-all duration-500 w-full border border-white/20 uppercase tracking-tighter"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Zap className="w-8 h-8 fill-current animate-pulse" />
                Download Latest APK
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-primary to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Glossy overlay */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 -skew-y-3 translate-y-[-10%]" />
            </button>
            <p className="text-center mt-4 text-xs text-muted-foreground uppercase tracking-[0.3em] font-bold opacity-50">
              Verified Secure • Anti-Ban v1.0 • 100% Clean
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="tunnel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="glass-card p-10 rounded-[3rem] border border-primary/40 bg-primary/5 relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.15)]"
          >
            {/* Dynamic Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[80px] animate-pulse" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            </div>

            <div className="relative z-10 space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="p-3 rounded-2xl bg-primary/20 border border-primary/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                  >
                    <CurrentIcon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-black text-base uppercase tracking-widest text-white">System Sync</h4>
                    <motion.p 
                      key={stage}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-xs text-primary font-mono font-bold"
                    >
                      {stages[stage].text}
                    </motion.p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black font-mono text-primary drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                    {progress}%
                  </div>
                  <div className="text-[10px] text-muted-foreground uppercase font-black tracking-tighter opacity-50">Transfer Rate: 2.4GB/s</div>
                </div>
              </div>

              {/* Enhanced Progress Bar Container */}
              <div className="relative">
                <div className="h-6 bg-black/40 rounded-full overflow-hidden border border-white/10 shadow-inner p-1">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 via-primary to-emerald-400 rounded-full relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "linear" }}
                  >
                    {/* Glossy Streak */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                    {/* Scanner Effect */}
                    <motion.div 
                      animate={{ left: ["-100%", "200%"] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute top-0 h-full w-40 bg-gradient-to-r from-transparent via-white/40 to-transparent" 
                    />
                  </motion.div>
                </div>
                {/* Outer Glow */}
                <div 
                  className="absolute inset-0 rounded-full blur-md bg-primary/20 -z-10" 
                  style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Scan: CLEAN", icon: ShieldCheck, color: "text-emerald-500" },
                  { label: "Status: ENCRYPTED", icon: Lock, color: "text-primary" },
                  { label: "Safety: VERIFIED", icon: CheckCircle2, color: "text-emerald-500" },
                  { label: "Ban-Risk: ZERO", icon: ShieldAlert, color: "text-primary" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-3 hover:bg-white/[0.05] transition-colors group"
                  >
                    <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`} />
                    <span className="text-[10px] uppercase font-black tracking-widest opacity-80">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
