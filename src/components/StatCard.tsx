import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

export function StatCard({ value, label, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="font-display text-5xl md:text-6xl lg:text-7xl text-primary mb-2">
        {value}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
}
