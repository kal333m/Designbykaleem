"use client";

import { motion } from "framer-motion";

const stages = [
  { key: "ticket", label: "Ticket", x: 30 },
  { key: "approval", label: "Approval", x: 115 },
  { key: "po", label: "PO", x: 200 },
  { key: "vendor", label: "Vendor", x: 285 },
  { key: "payment", label: "Payment", x: 370 },
];

const Y = 90;
const DURATION = 5;

export function ProcurementIllustration() {
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-[var(--radius-card)] border border-border bg-surface overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-9 flex items-center gap-1.5 px-4 border-b border-border z-10 bg-surface">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>

      <svg viewBox="0 0 400 200" className="absolute inset-0 top-9 w-full h-[calc(100%-2.25rem)]">
        <line x1={stages[0].x} y1={Y} x2={stages[4].x} y2={Y} stroke="var(--border)" strokeWidth="1.5" />

        {stages.map((s, i) => {
          const arrive = (i / (stages.length - 1)) * DURATION;
          const t0 = arrive / DURATION;
          const t1 = Math.min(t0 + 0.02, 1);
          return (
            <g key={s.key}>
              <circle cx={s.x} cy={Y} r="12" fill="var(--background)" stroke="var(--border)" strokeWidth="2" />
              <motion.circle
                cx={s.x}
                cy={Y}
                r="12"
                fill="var(--accent)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 0, 1, 1, 0], opacity: [0, 0, 1, 1, 0] }}
                transition={{
                  duration: DURATION,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, t0, t1, 0.96, 1],
                }}
                style={{ transformOrigin: `${s.x}px ${Y}px` }}
              />
            </g>
          );
        })}

        <motion.circle
          r="5"
          fill="var(--accent)"
          initial={{ cx: stages[0].x, cy: Y }}
          animate={{ cx: stages.map((s) => s.x), cy: stages.map(() => Y) }}
          transition={{ duration: DURATION, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="absolute inset-x-0 top-9 h-[calc(100%-2.25rem)] pointer-events-none">
        {stages.map((s) => (
          <span
            key={s.key}
            className="absolute text-[11px] font-medium text-muted -translate-x-1/2"
            style={{
              left: `${(s.x / 400) * 100}%`,
              top: "62%",
              transform: "translateX(-50%)",
            }}
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}
