"use client";

import { motion } from "framer-motion";

const nodes = [
  { key: "skills", label: "Skills", x: 70, y: 40 },
  { key: "memory", label: "Memory", x: 330, y: 40 },
  { key: "prompts", label: "Prompts", x: 70, y: 160 },
  { key: "knowledge", label: "Knowledge", x: 330, y: 160 },
];

const CENTER = { x: 200, y: 100 };
const CYCLE = 4.4;

export function AtlasIllustration() {
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-[var(--radius-card)] border border-border bg-surface overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-9 flex items-center gap-1.5 px-4 border-b border-border z-10 bg-surface">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>

      <svg viewBox="0 0 400 200" className="absolute inset-0 top-9 w-full h-[calc(100%-2.25rem)]">
        {nodes.map((n) => (
          <line
            key={n.key}
            x1={n.x}
            y1={n.y}
            x2={CENTER.x}
            y2={CENTER.y}
            stroke="var(--border)"
            strokeWidth="1.5"
          />
        ))}

        <motion.circle
          cx={CENTER.x}
          cy={CENTER.y}
          r="24"
          fill="var(--background)"
          stroke="var(--accent)"
          strokeWidth="2"
          animate={{ scale: [1, 1, 1.1, 1, 1, 1.1, 1, 1, 1.1, 1, 1, 1.1, 1] }}
          transition={{
            duration: CYCLE,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.16, 0.2, 0.24, 0.41, 0.45, 0.49, 0.66, 0.7, 0.74, 0.91, 0.95, 1],
          }}
          style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
        />
        <circle cx={CENTER.x} cy={CENTER.y} r="4.5" fill="var(--accent)" />

        {nodes.map((n, i) => {
          const delay = (i * CYCLE) / nodes.length;
          return (
            <g key={n.key}>
              <circle cx={n.x} cy={n.y} r="12" fill="var(--background)" stroke="var(--border)" strokeWidth="2" />
              <motion.circle
                r="4"
                fill="var(--accent)"
                initial={{ cx: n.x, cy: n.y, opacity: 0 }}
                animate={{
                  cx: [n.x, n.x, CENTER.x, CENTER.x],
                  cy: [n.y, n.y, CENTER.y, CENTER.y],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: CYCLE,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.02, 0.22, 0.26],
                }}
              />
            </g>
          );
        })}
      </svg>

      <div className="absolute inset-x-0 top-9 h-[calc(100%-2.25rem)] pointer-events-none">
        {nodes.map((n) => (
          <span
            key={n.key}
            className="absolute text-[11px] font-medium text-muted -translate-x-1/2"
            style={{
              left: `${(n.x / 400) * 100}%`,
              top: `${(n.y / 200) * 100}%`,
              transform: `translate(-50%, ${n.y < CENTER.y ? "-140%" : "40%"})`,
            }}
          >
            {n.label}
          </span>
        ))}
      </div>
    </div>
  );
}
