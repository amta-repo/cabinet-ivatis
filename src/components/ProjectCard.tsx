import { motion } from "framer-motion";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  location: string;
  index: number;
  description?: string;
}

export function ProjectCard({
  image,
  title,
  category,
  location,
  index,
  description,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      viewport={{ once: true }}
      className="group bg-card sm:rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border-y sm:border border-border -mx-4 sm:mx-0 w-screen sm:w-auto"
    >
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider bg-primary/10 text-primary rounded-full mb-3">
          {category}
        </span>
        <h3 className="font-heading font-bold text-lg text-card-foreground mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">{location}</p>
        {description && (
          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  );
}
