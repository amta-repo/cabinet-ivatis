import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionTitle({
  subtitle,
  title,
  description,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}
    >
      {subtitle && (
        <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
          {subtitle}
        </p>
      )}
      <h2
        className={`font-heading font-black text-3xl md:text-4xl lg:text-5xl mb-4 ${
          light ? "text-secondary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-secondary-foreground/70" : "text-muted-foreground"}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
