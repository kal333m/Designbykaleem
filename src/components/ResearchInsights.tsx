export function ResearchInsights({ findings }: { findings: string[] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {findings.map((finding, i) => (
        <div
          key={i}
          className="rounded-2xl border border-border bg-surface p-5 border-l-2 border-l-accent"
        >
          <p className="text-sm leading-relaxed text-muted">{finding}</p>
        </div>
      ))}
    </div>
  );
}
