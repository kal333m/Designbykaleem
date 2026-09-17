"use client";

import { motion } from "framer-motion";
import type { ImpactChart as ImpactChartData } from "@/lib/projects";

export function ImpactChart({ title, unit, illustrative, points }: ImpactChartData) {
  const max = Math.max(...points.map((p) => p.value), 1);

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-sm font-medium">{title}</h3>
        {illustrative && (
          <span className="text-[10px] text-muted rounded-full border border-border px-2 py-0.5">
            Illustrative data
          </span>
        )}
      </div>
      <div className="flex items-end gap-6 h-40">
        {points.map((p) => (
          <div
            key={p.label}
            className="flex-1 flex flex-col items-center gap-2 h-full justify-end"
          >
            <span className="text-xs text-muted font-mono">
              {p.value}
              {unit}
            </span>
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: `${(p.value / max) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full rounded-t-lg bg-accent"
            />
            <span className="text-[11px] text-muted">{p.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
