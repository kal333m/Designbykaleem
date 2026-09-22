"use client";

import { motion } from "framer-motion";

const columns = [
  { title: "Bid Assessment", color: "#60a5fa", card: "Kombit Renewal" },
  { title: "Manage Requirements", color: "#818cf8", card: "Energinet WAN" },
  { title: "Plan & Draft", color: "#c084fc", card: "Nordvik ICT-014" },
  { title: "Review & Finalize", color: "#4ade80", card: "Atlas Tender" },
];

const leftPositions = ["3%", "27.5%", "52%", "76.5%"];

export function KanbanIllustration() {
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-[var(--radius-card)] border border-border bg-surface overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-9 flex items-center gap-1.5 px-4 border-b border-border z-10 bg-surface">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>

      <div className="absolute inset-0 pt-14 sm:pt-16 px-6 sm:px-8 pb-6 flex gap-4">
        {columns.map((col) => (
          <div key={col.title} className="flex-1 flex flex-col gap-2.5">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="h-2 w-2 rounded-full shrink-0"
                style={{ background: col.color }}
              />
              <span className="text-[11px] font-medium text-muted truncate">
                {col.title}
              </span>
            </div>
            <div className="rounded-lg border border-border bg-background p-2.5">
              <div className="h-1.5 w-3/4 rounded-full bg-border mb-1.5" />
              <div className="h-1.5 w-1/2 rounded-full bg-border" />
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          left: [
            leftPositions[0],
            leftPositions[0],
            leftPositions[1],
            leftPositions[1],
            leftPositions[2],
            leftPositions[2],
            leftPositions[3],
            leftPositions[3],
            leftPositions[3],
            leftPositions[0],
            leftPositions[0],
          ],
          opacity: [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
          scale: 1,
        }}
        transition={{
          scale: { duration: 0.5, delay: 0.3 },
          left: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.15, 0.22, 0.37, 0.44, 0.59, 0.66, 0.8, 0.87, 0.88, 1],
          },
          opacity: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.15, 0.22, 0.37, 0.44, 0.59, 0.66, 0.8, 0.87, 0.88, 1],
          },
        }}
        className="absolute top-[86px] sm:top-[94px] w-[21%] rounded-lg border-2 bg-background p-2.5 shadow-sm"
        style={{ borderColor: "var(--accent)" }}
      >
        <div className="h-1.5 w-3/4 rounded-full mb-1.5" style={{ background: "var(--accent)" }} />
        <div className="h-1.5 w-1/2 rounded-full opacity-50" style={{ background: "var(--accent)" }} />
      </motion.div>
    </div>
  );
}
