import type { Flow } from "@/lib/projects";

export function FlowDiagram({ title, steps }: Flow) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h3 className="text-sm font-medium text-muted mb-5">{title}</h3>
      <div className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <div key={step.label} className="flex flex-col">
            <div className="rounded-xl border border-border bg-background px-4 py-3">
              <p className="text-sm font-medium">{step.label}</p>
              <p className="text-xs text-muted mt-0.5">{step.detail}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-1">
                <span className="text-muted text-sm">&#8595;</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
