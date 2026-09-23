const swatchColors = [
  "#e8dfd3", "#d9c7ae", "#c9a98d", "#b98f6f", "#8e6b52", "#a9b0a8",
  "#7c8d86", "#54606a", "#caa04c", "#c99b7a", "#b7a68f", "#6e5a48",
];

function TabPills({ stacked }: { stacked: boolean }) {
  const tabs = ["Marbleised", "Versatile", "Pearl"];
  return (
    <div className={stacked ? "flex flex-col gap-1.5" : "flex gap-1.5"}>
      {tabs.map((t, i) => (
        <span
          key={t}
          className={`text-[10px] font-medium rounded-full px-2.5 py-1 text-center ${
            i === 0 ? "bg-accent text-background" : "border border-border text-muted"
          }`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function SwatchGrid({ cols, count }: { cols: number; count: number }) {
  return (
    <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }}>
      {swatchColors.slice(0, count).map((c, i) => (
        <div key={i} className="aspect-[4/3] rounded-md" style={{ background: c }} />
      ))}
    </div>
  );
}

function ModalPreview({ stacked }: { stacked: boolean }) {
  return (
    <div className={`rounded-lg border border-border bg-background p-2.5 flex ${stacked ? "flex-col gap-2" : "gap-2.5"}`}>
      <div
        className={stacked ? "h-14 w-full rounded-md shrink-0" : "h-14 w-14 shrink-0 rounded-md"}
        style={{ background: "#c9a98d" }}
      />
      <div className="flex flex-col gap-1.5 flex-1 justify-center">
        <span className="h-1.5 w-10 rounded-full bg-border" />
        <span className="h-1.5 w-16 rounded-full bg-border" />
        <span className="h-1.5 w-12 rounded-full bg-border" />
      </div>
    </div>
  );
}

function DeviceMock({
  label,
  stacked,
  cols,
  count,
}: {
  label: string;
  stacked: boolean;
  cols: number;
  count: number;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 flex flex-col gap-4">
      <div className="flex items-center gap-2.5">
        <span className="text-xs font-semibold text-accent uppercase tracking-wide">{label}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <TabPills stacked={stacked} />
      <SwatchGrid cols={cols} count={count} />
      <ModalPreview stacked={stacked} />
    </div>
  );
}

export function ResponsiveShowcase() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <DeviceMock label="Desktop" stacked={false} cols={6} count={12} />
      <DeviceMock label="Mobile" stacked={true} cols={2} count={8} />
    </div>
  );
}
