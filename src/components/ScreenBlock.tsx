import Image from "next/image";
import type { ScreenBlock as ScreenBlockData } from "@/lib/projects";
import { RoleArchitecture } from "@/components/RoleArchitecture";

const diagrams = {
  roleArchitecture: RoleArchitecture,
};

export function ScreenBlock({ title, goal, decisions, images, diagram, layout }: ScreenBlockData) {
  const Diagram = diagram ? diagrams[diagram] : null;
  const isPhone = layout === "phone";

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-lg font-semibold tracking-tight">{title}</h3>

      {Diagram ? (
        <Diagram />
      ) : (
        <div
          className={
            isPhone
              ? "flex flex-wrap justify-center gap-4"
              : "flex flex-col gap-4"
          }
        >
          {images.map((src) => (
            <div
              key={src}
              className={
                isPhone
                  ? "w-full max-w-[280px] rounded-2xl border border-border overflow-hidden bg-surface"
                  : "rounded-2xl border border-border overflow-hidden bg-surface"
              }
            >
              <Image
                src={src}
                alt={title}
                width={isPhone ? 900 : 1600}
                height={isPhone ? 1954 : 900}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}

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
