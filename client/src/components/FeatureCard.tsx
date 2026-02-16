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
      className="group relative p-6 rounded-2xl glass-card hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 premium-glow"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700" />
      
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-lg shadow-primary/5">
          <Icon className="w-7 h-7" />
        </div>
        
        <h3 className="text-2xl font-bold mb-3 font-display text-foreground group-hover:text-primary transition-colors tracking-tight">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed text-base">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
