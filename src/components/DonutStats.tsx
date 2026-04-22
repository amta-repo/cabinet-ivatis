import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface DonutStat {
  value: string;
  label: string;
  percent?: number;
}

interface DonutStatsProps {
  stats: DonutStat[];
}

// Vivid gradient palette — one per donut. Each entry: [start, end] HSL values.
const PALETTES: { from: string; to: string; text: string }[] = [
  { from: "hsl(45, 95%, 55%)", to: "hsl(28, 95%, 50%)", text: "hsl(32, 95%, 45%)" },   // yellow → orange
  { from: "hsl(15, 90%, 55%)", to: "hsl(0, 80%, 50%)", text: "hsl(5, 80%, 48%)" },     // orange → red
  { from: "hsl(210, 90%, 55%)", to: "hsl(225, 80%, 45%)", text: "hsl(215, 85%, 45%)" },// blue
  { from: "hsl(145, 70%, 45%)", to: "hsl(165, 75%, 38%)", text: "hsl(155, 75%, 35%)" },// green
];

function parseNum(value: string): { num: number; suffix: string } {
  const m = value.match(/^(\d+)(.*)$/);
  if (!m) return { num: 0, suffix: value };
  return { num: parseInt(m[1], 10), suffix: m[2] };
}

function DonutItem({ stat, delay, palette, gradId }: { stat: DonutStat; delay: number; palette: typeof PALETTES[number]; gradId: string }) {
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

  const radius = 50;
  const strokeWidth = 16; // thicker
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
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={palette.from} />
              <stop offset="100%" stopColor={palette.to} />
            </linearGradient>
          </defs>
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="hsl(var(--border))"
            strokeWidth={strokeWidth}
            fill="transparent"
            opacity="0.25"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke={`url(#${gradId})`}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 50ms linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-heading font-black text-lg md:text-xl"
            style={{ color: palette.text }}
          >
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
        <DonutItem
          key={s.label}
          stat={s}
          delay={i * 0.12}
          palette={PALETTES[i % PALETTES.length]}
          gradId={`donut-grad-${i}`}
        />
      ))}
    </div>
  );
}
