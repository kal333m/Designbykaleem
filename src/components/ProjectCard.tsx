"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { KanbanGlyph, AtlasGlyph, ProcureGlyph, GuardianGlyph, JourneyGlyph } from "@/components/ProjectGlyphs";

const glyphs = {
  kanban: KanbanGlyph,
  atlas: AtlasGlyph,
  procure: ProcureGlyph,
  guardian: GuardianGlyph,
  journey: JourneyGlyph,
};

export function ProjectCard({ project }: { project: Project }) {
  const Glyph = project.thumbnailGlyph ? glyphs[project.thumbnailGlyph] : null;

  return (
    <Link href={`/projects/${project.slug}`} className="block h-full">
      <motion.div
        layout
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ y: -4 }}
        className="group h-full flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-surface border border-border"
      >
        <div
          className="relative aspect-[4/3] w-full shrink-0 overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]"
          style={{
            background: `linear-gradient(135deg, ${project.cover.from}, ${project.cover.to})`,
          }}
        >
          {Glyph && <Glyph />}
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="text-xs font-medium text-muted rounded-[var(--radius-pill)] border border-border px-2.5 py-0.5">
              {project.clientType}
            </span>
            <span className="text-xs font-medium text-muted rounded-[var(--radius-pill)] border border-border px-2.5 py-0.5">
              {project.platform}
            </span>
            {project.domains.map((d) => (
              <span
                key={d}
                className="text-xs font-medium text-accent rounded-[var(--radius-pill)] border border-border px-2.5 py-0.5"
              >
                {d}
              </span>
            ))}
          </div>
          <h3 className="text-lg font-semibold tracking-tight truncate">{project.title}</h3>
          <p className="text-sm text-muted mt-1 line-clamp-2">{project.tagline}</p>
        </div>
      </motion.div>
    </Link>
  );
}
