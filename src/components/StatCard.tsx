import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

export function StatCard({ value, label, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true }}
      className="text-center py-4"
    >
      <p className="font-heading font-black text-3xl md:text-4xl text-primary-foreground">
        {value}
      </p>
      <p className="text-primary-foreground/80 text-sm mt-1 font-medium">
        {label}
      </p>
    </motion.div>
  );
}
