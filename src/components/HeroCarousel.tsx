import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface HeroCarouselProps {
  images: { src: string; alt: string }[];
  intervalMs?: number;
}

/**
 * Slow cross-dissolve background carousel.
 * Each image fades over ~3s and stays for ~7s — subtle, hard to notice.
 */
export function HeroCarousel({ images, intervalMs = 7000 }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-r from-construction-charcoal/85 via-construction-charcoal/70 to-construction-charcoal/40" />
    </div>
  );
}
