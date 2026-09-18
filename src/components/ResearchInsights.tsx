export function ResearchInsights({ findings }: { findings: string[] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {findings.map((finding, i) => (
        <div
          key={i}
          className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-accent">
            <path
              d="M7.5 8.5C5.6 8.5 4 10.1 4 12s1.6 3.5 3.5 3.5c.3 0 .6 0 .9-.1C8 17.3 6.7 18.5 5 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5 8.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5c.3 0 .6 0 .9-.1-.4 1.9-1.7 3.1-3.4 3.6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-sm leading-relaxed text-muted">{finding}</p>
        </div>
      ))}
    </div>
  );
}
