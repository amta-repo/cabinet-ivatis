import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
  slug?: string;
  image?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  index,
  slug,
  image,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-border flex flex-col"
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        <h3 className="font-heading font-bold text-xl text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{description}</p>

        {slug && (
          <Link
            to={`/services/${slug}`}
            className="inline-flex items-center gap-2 text-primary font-heading font-semibold text-sm hover:gap-3 transition-all"
          >
            En Savoir Plus
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
