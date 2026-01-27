import { motion } from "framer-motion";
import { ShieldCheck, ShieldAlert, XCircle, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export function PermissionSimulator() {
  const permissions = [
    { name: "Real-time GPS Location", aa: false, gb: true },
    { name: "Read Media Files", aa: false, gb: true },
    { name: "Access Contacts in Background", aa: false, gb: true },
    { name: "Camera Usage in Background", aa: false, gb: true },
    { name: "Record Audio Without Consent", aa: false, gb: true },
  ];

  return (
    <Card className="glass-card p-6 md:p-10 rounded-[2.5rem] border border-primary/20 bg-primary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <ShieldCheck className="w-32 h-32 text-primary" />
      </div>

      <div className="relative z-10 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Permission Simulator</h2>
          <p className="text-muted-foreground">Compare the privacy protocols of AAWhatsApp vs. standard mods</p>
        </div>

        <div className="space-y-4">
          {permissions.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
            >
              <span className="font-medium text-sm md:text-base">{p.name}</span>
              
              <div className="flex items-center gap-2 justify-start md:justify-center">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground md:hidden">AA:</span>
                {!p.aa ? (
                  <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Clean
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-red-500 font-bold text-sm">
                    <ShieldAlert className="w-4 h-4" />
                    Invasive
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2 justify-start md:justify-end">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground md:hidden">GB:</span>
                {p.gb ? (
                  <div className="flex items-center gap-2 text-red-500/60 font-medium text-sm">
                    <XCircle className="w-4 h-4" />
                    Invasive
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-emerald-500/60 font-medium text-sm">
                    <CheckCircle2 className="w-4 h-4" />
                    Clean
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold">
          <div className="flex items-center gap-2 text-primary">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Privacy Core™ Active
          </div>
          <div className="text-muted-foreground">
            Protocol Version: 2.0 | Base: 2.25.36.73
          </div>
        </div>
      </div>
    </Card>
  );
}
