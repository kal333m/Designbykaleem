"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects, type ClientType, type Platform } from "@/lib/projects";
import { FilterBar } from "@/components/FilterBar";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectGrid() {
  const [clientType, setClientType] = useState<ClientType | "All">("All");
  const [platform, setPlatform] = useState<Platform | "All">("All");

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (clientType === "All" || p.clientType === clientType) &&
          (platform === "All" || p.platform === platform)
      ),
    [clientType, platform]
  );

  return (
    <div className="flex flex-col gap-10">
      <FilterBar
        clientType={clientType}
        platform={platform}
        onClientTypeChange={setClientType}
        onPlatformChange={setPlatform}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </AnimatePresence>
      </div>
      {filtered.length === 0 && (
        <p className="text-muted text-sm">No projects match these filters yet.</p>
      )}
    </div>
  );
}
