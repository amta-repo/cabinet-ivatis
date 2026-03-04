import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card border border-border/50 rounded-lg p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-medium"
    >
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      <h3 className="font-display text-2xl mb-3 text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>

      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}
