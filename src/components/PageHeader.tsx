import { motion } from "framer-motion";
import defaultBg from "@/assets/header-apropos.jpg";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage?: string;
}

/**
 * Reusable hero/header for inner pages with image background and dark overlay.
 */
export function PageHeader({ eyebrow, title, description, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backgroundImage ?? defaultBg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-construction-charcoal/90 via-construction-charcoal/75 to-construction-charcoal/55" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <p className="text-primary font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
            {title}
          </h1>
          {description && (
            <p className="text-white/85 text-lg leading-relaxed">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
