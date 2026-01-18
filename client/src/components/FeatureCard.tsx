import { type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative p-6 rounded-3xl bg-secondary/40 border border-white/5 hover:bg-secondary/60 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-emerald-500/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-xl font-bold mb-2 font-display text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
