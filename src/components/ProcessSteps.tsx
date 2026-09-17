export function ProcessSteps({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2">
          <span className="rounded-[var(--radius-pill)] border border-border bg-surface px-3.5 py-1.5 text-sm font-medium">
            {step}
          </span>
          {i < steps.length - 1 && <span className="text-muted">&#8594;</span>}
        </div>
      ))}
    </div>
  );
}
