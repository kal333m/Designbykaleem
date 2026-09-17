import Image from "next/image";
import type { ScreenBlock as ScreenBlockData } from "@/lib/projects";

export function ScreenBlock({ title, goal, decisions, images }: ScreenBlockData) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>

      <div className="flex flex-col gap-4">
        {images.map((src) => (
          <div
            key={src}
            className="rounded-2xl border border-border overflow-hidden bg-surface"
          >
            <Image
              src={src}
              alt={title}
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-border bg-surface p-5 flex flex-col gap-4">
        <div>
          <span className="text-xs font-semibold text-accent uppercase tracking-wide">
            Goal
          </span>
          <p className="text-sm leading-relaxed mt-1.5">{goal}</p>
        </div>
        <div>
          <span className="text-xs font-semibold text-accent uppercase tracking-wide">
            Design Decisions
          </span>
          <ul className="mt-1.5 flex flex-col gap-1.5">
            {decisions.map((d, i) => (
              <li key={i} className="text-sm leading-relaxed flex gap-2">
                <span className="text-muted">&#8226;</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
