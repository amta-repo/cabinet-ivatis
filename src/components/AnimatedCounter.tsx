import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  label: string;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

export function AnimatedCounter({ value, label, className = "", valueClassName = "", labelClassName = "" }: AnimatedCounterProps) {
  const { num, suffix } = parseValue(value);
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, num]);

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <p className={`font-heading font-black text-3xl md:text-4xl ${valueClassName}`}>
        {count}{suffix}
      </p>
      <p className={`text-sm mt-2 font-medium ${labelClassName}`}>
        {label}
      </p>
    </div>
  );
}
