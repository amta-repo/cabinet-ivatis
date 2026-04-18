import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface DonutStat {
  value: string; // e.g. "15+", "200+", "100%"
  label: string;
  /** Percentage of donut to fill 0-100. Defaults to 100 for "+" suffix. */
  percent?: number;
}

interface DonutStatsProps {
  stats: DonutStat[];
}

function parseNum(value: string): { num: number; suffix: string } {
  const m = value.match(/^(\d+)(.*)$/);
  if (!m) return { num: 0, suffix: value };
  return { num: parseInt(m[1], 10), suffix: m[2] };
}

function DonutItem({ stat, delay }: { stat: DonutStat; delay: number }) {
  const { num, suffix } = parseNum(stat.value);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const target = stat.percent ?? (suffix === "%" ? num : 100);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const incNum = num / steps;
    const incProg = target / steps;
    let n = 0;
    let p = 0;
    const id = setInterval(() => {
      n += incNum;
      p += incProg;
      if (n >= num) {
        setCount(num);
        setProgress(target);
        clearInterval(id);
      } else {
        setCount(Math.floor(n));
        setProgress(p);
      }
    }, duration / steps);
    return () => clearInterval(id);
  }, [inView, num, target]);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative w-32 h-32 md:w-36 md:h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="hsl(var(--border))"
            strokeWidth="8"
            fill="transparent"
            opacity="0.3"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="hsl(var(--cta))"
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 50ms linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-heading font-black text-2xl md:text-3xl text-foreground">
            {count}
            {suffix}
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm md:text-base font-medium text-muted-foreground max-w-[10rem]">
        {stat.label}
      </p>
    </motion.div>
  );
}

export function DonutStats({ stats }: DonutStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
      {stats.map((s, i) => (
        <DonutItem key={s.label} stat={s} delay={i * 0.12} />
      ))}
    </div>
  );
}
