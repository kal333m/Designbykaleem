import type { ProblemDiagnosis as ProblemDiagnosisData } from "@/lib/projects";

const rows: { key: keyof ProblemDiagnosisData; label: string }[] = [
  { key: "how", label: "How" },
  { key: "what", label: "What" },
  { key: "when", label: "When" },
  { key: "why", label: "Why" },
];

export function ProblemDiagnosis({ diagnosis }: { diagnosis: ProblemDiagnosisData }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {rows.map(({ key, label }) => (
        <div key={key} className="rounded-2xl border border-border bg-surface p-5">
          <span className="text-xs font-semibold text-accent uppercase tracking-wide">
            {label}
          </span>
          <p className="text-sm leading-relaxed mt-2">{diagnosis[key]}</p>
        </div>
      ))}
    </div>
  );
}
