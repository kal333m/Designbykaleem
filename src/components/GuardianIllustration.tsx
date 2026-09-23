"use client";

import { motion } from "framer-motion";

const drops = [
  { x: 120, delay: 0 },
  { x: 165, delay: 0.7 },
  { x: 200, delay: 1.4 },
  { x: 235, delay: 0.35 },
  { x: 280, delay: 1.05 },
];

const DEFLECT_Y = 62;
const DROP_DURATION = 2.2;

const SHIELD_PATH =
  "M200,50 L235,62 L235,94 C235,116 220,130 200,140 C180,130 165,116 165,94 L165,62 Z";

export function GuardianIllustration() {
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-[var(--radius-card)] border border-border bg-surface overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-9 flex items-center gap-1.5 px-4 border-b border-border z-10 bg-surface">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>

      <svg viewBox="0 0 400 200" className="absolute inset-0 top-9 w-full h-[calc(100%-2.25rem)]">
        {drops.map((d, i) => (
          <motion.line
            key={i}
            x1={d.x}
            x2={d.x}
            y1={-12}
            y2={-2}
            stroke="var(--accent)"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: [0, DEFLECT_Y + 12, DEFLECT_Y + 12], opacity: [0, 1, 1, 0] }}
            transition={{
              y: { duration: DROP_DURATION, delay: d.delay, repeat: Infinity, ease: "easeIn", times: [0, 0.75, 1] },
              opacity: { duration: DROP_DURATION, delay: d.delay, repeat: Infinity, times: [0, 0.08, 0.75, 0.85] },
            }}
          />
        ))}

        {drops.map((d, i) => (
          <motion.circle
            key={`ripple-${i}`}
            cx={d.x}
            cy={DEFLECT_Y}
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.5"
            initial={{ r: 2, opacity: 0 }}
            animate={{ r: [2, 2, 14], opacity: [0, 0.7, 0] }}
            transition={{
              duration: DROP_DURATION,
              delay: d.delay,
              repeat: Infinity,
              ease: "easeOut",
              times: [0, 0.75, 0.95],
            }}
          />
        ))}

        <motion.path
          d={SHIELD_PATH}
          fill="var(--background)"
          stroke="var(--accent)"
          strokeWidth="2"
          strokeLinejoin="round"
          animate={{ scale: [1, 1.035, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "200px 95px" }}
        />
        <path
          d="M186,96 L197,107 L217,80"
          stroke="var(--accent)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      <div className="absolute inset-x-0 bottom-5 flex justify-center pointer-events-none">
        <span className="text-[11px] font-medium text-muted">Watching 24/7</span>
      </div>
    </div>
  );
}
