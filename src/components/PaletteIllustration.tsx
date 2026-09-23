"use client";

import { motion } from "framer-motion";

const SIZE = 26;
const HALF = SIZE / 2;

const colors = [
  "#e8dfd3",
  "#d9c7ae",
  "#c9a98d",
  "#b98f6f",
  "#8e6b52",
  "#a9b0a8",
  "#7c8d86",
  "#54606a",
  "#caa04c",
];

// Three real browsing structures the same nine colours get pushed through:
// a literal hue grid, a seasonal-palette ring, and Pearl's flat, uncategorised row.
const grid = [
  [130, 50], [200, 50], [270, 50],
  [130, 95], [200, 95], [270, 95],
  [130, 140], [200, 140], [270, 140],
];
const ring = [
  [200, 40], [235, 53], [254, 85],
  [248, 123], [219, 147], [181, 147],
  [152, 123], [146, 85], [165, 53],
];
const row = [
  [45, 95], [84, 95], [123, 95],
  [162, 95], [201, 95], [240, 95],
  [279, 95], [318, 95], [357, 95],
];

const CYCLE = 7.5;
const TIMES = [0, 0.28, 0.33, 0.61, 0.66, 0.94, 1];

function positions(index: number, axis: 0 | 1) {
  const a = grid[index][axis] - HALF;
  const b = ring[index][axis] - HALF;
  const c = row[index][axis] - HALF;
  return [a, a, b, b, c, c, a];
}

const captions = [
  { label: "Hue families", opacity: [1, 1, 0, 0, 0, 0, 1] },
  { label: "Seasonal palettes", opacity: [0, 0, 1, 1, 0, 0, 0] },
  { label: "No categories, just numbers", opacity: [0, 0, 0, 0, 1, 1, 0] },
];

export function PaletteIllustration() {
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-[var(--radius-card)] border border-border bg-surface overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-9 flex items-center gap-1.5 px-4 border-b border-border z-10 bg-surface">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>

      <svg viewBox="0 0 400 200" className="absolute inset-0 top-9 w-full h-[calc(100%-2.25rem)]">
        {colors.map((fill, i) => (
          <motion.rect
            key={i}
            width={SIZE}
            height={SIZE}
            rx="6"
            fill={fill}
            initial={{ x: grid[i][0] - HALF, y: grid[i][1] - HALF }}
            animate={{ x: positions(i, 0), y: positions(i, 1) }}
            transition={{ duration: CYCLE, repeat: Infinity, ease: "easeInOut", times: TIMES }}
          />
        ))}
      </svg>

      <div className="absolute inset-x-0 bottom-5 flex justify-center pointer-events-none">
        <div className="relative h-4 w-56">
          {captions.map((c) => (
            <motion.span
              key={c.label}
              className="absolute inset-0 text-center text-[11px] font-medium text-muted"
              initial={{ opacity: c.opacity[0] }}
              animate={{ opacity: c.opacity }}
              transition={{ duration: CYCLE, repeat: Infinity, ease: "easeInOut", times: TIMES }}
            >
              {c.label}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
