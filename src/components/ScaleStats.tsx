import type { StatItem } from "@/lib/projects";

export function ScaleStats({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-border bg-surface p-5">
          <p className="text-2xl font-semibold tracking-tight">{s.value}</p>
          <p className="text-xs text-muted mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
