"use client";

import { motion } from "framer-motion";
import type { Distribution } from "@/lib/projects";

export function DistributionChart({ title, unit, source, items }: Distribution) {
  const max = Math.max(...items.map((i) => i.value), 1);

  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <div className="flex items-start justify-between gap-3 mb-6">
        <h3 className="text-sm font-medium">{title}</h3>
        {source && (
          <span className="shrink-0 text-[10px] text-muted rounded-full border border-border px-2 py-0.5 whitespace-nowrap">
            via {source}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col gap-1.5">
            <div className="flex items-baseline justify-between text-xs">
              <span className="font-medium">{item.label}</span>
              <span className="text-muted font-mono">
                {item.value.toLocaleString()}
                {unit}
              </span>
            </div>
            <div className="h-2 rounded-full bg-background overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${(item.value / max) * 100}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="h-full rounded-full bg-accent"
              />
            </div>
            {item.detail && (
              <span className="text-[11px] text-muted">{item.detail}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
