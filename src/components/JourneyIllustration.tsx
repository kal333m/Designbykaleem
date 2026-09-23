"use client";

import { motion } from "framer-motion";

const waypoints = [
  { key: "discover", label: "Discover", x: 45, y: 140 },
  { key: "track", label: "Track", x: 150, y: 60 },
  { key: "connect", label: "Connect", x: 255, y: 140 },
  { key: "depart", label: "Depart", x: 355, y: 60 },
];

const CYCLE = 6;
const TRAVEL_END = 0.8;
const HOLD_END = 0.95;

function arriveTime(i: number) {
  return (i / (waypoints.length - 1)) * TRAVEL_END;
}

export function JourneyIllustration() {
  const xs = [...waypoints.map((w) => w.x), waypoints[waypoints.length - 1].x];
  const ys = [...waypoints.map((w) => w.y), waypoints[waypoints.length - 1].y];
  const travelTimes = [...waypoints.map((_, i) => arriveTime(i)), 1];

  return (
    <div className="relative w-full h-56 sm:h-64 rounded-[var(--radius-card)] border border-border bg-surface overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-9 flex items-center gap-1.5 px-4 border-b border-border z-10 bg-surface">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>

      <svg viewBox="0 0 400 200" className="absolute inset-0 top-9 w-full h-[calc(100%-2.25rem)]">
        <path
          d={`M${waypoints.map((w) => `${w.x},${w.y}`).join(" L")}`}
          stroke="var(--border)"
          strokeWidth="2"
          strokeDasharray="1 8"
          strokeLinecap="round"
          fill="none"
        />

        {waypoints.map((w, i) => {
          const arrive = arriveTime(i);
          const times = i === 0 ? [0, HOLD_END, 1] : [0, arrive - 0.03, arrive, HOLD_END, 1];
          const values3 = [1, 1, 0];
          const values5 = [0, 0, 1, 1, 0];

          return (
            <g key={w.key}>
              <circle cx={w.x} cy={w.y} r="13" fill="var(--background)" stroke="var(--border)" strokeWidth="2" />
              <motion.circle
                cx={w.x}
                cy={w.y}
                r="13"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: i === 0 ? values3 : values5,
                  opacity: i === 0 ? values3 : values5,
                }}
                transition={{ duration: CYCLE, repeat: Infinity, ease: "easeInOut", times }}
                style={{ transformOrigin: `${w.x}px ${w.y}px` }}
              />
              <motion.path
                d={`M${w.x - 4},${w.y} L${w.x + 1},${w.y + 5} L${w.x + 9},${w.y - 5}`}
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: i === 0 ? values3 : values5 }}
                transition={{ duration: CYCLE, repeat: Infinity, ease: "easeInOut", times }}
              />
            </g>
          );
        })}

        <motion.circle
          r="5"
          fill="var(--accent)"
          initial={{ cx: xs[0], cy: ys[0] }}
          animate={{ cx: xs, cy: ys }}
          transition={{ duration: CYCLE, repeat: Infinity, ease: "easeInOut", times: travelTimes }}
        />
      </svg>

      <div className="absolute inset-x-0 top-9 h-[calc(100%-2.25rem)] pointer-events-none">
        {waypoints.map((w) => (
          <span
            key={w.key}
            className="absolute text-[11px] font-medium text-muted -translate-x-1/2"
            style={{
              left: `${(w.x / 400) * 100}%`,
              top: `${(w.y / 200) * 100}%`,
              transform: `translate(-50%, ${w.y < 100 ? "-160%" : "45%"})`,
            }}
          >
            {w.label}
          </span>
        ))}
      </div>
    </div>
  );
}
