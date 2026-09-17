"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects, type ClientType, type Domain, type Platform } from "@/lib/projects";
import { FilterBar } from "@/components/FilterBar";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectGrid() {
  const [search, setSearch] = useState("");
  const [clientType, setClientType] = useState<ClientType | "All">("All");
  const [platform, setPlatform] = useState<Platform | "All">("All");
  const [domains, setDomains] = useState<Domain[]>([]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((p) => {
      if (clientType !== "All" && p.clientType !== clientType) return false;
      if (platform !== "All" && p.platform !== platform) return false;
      if (domains.length > 0 && !p.domains.some((d) => domains.includes(d))) return false;
      if (query) {
        const haystack = [p.title, p.tagline, ...p.domains].join(" ").toLowerCase();
        if (!haystack.includes(query)) return false;
      }
      return true;
    });
  }, [search, clientType, platform, domains]);

  return (
    <div className="flex flex-col gap-10">
      <FilterBar
        search={search}
        onSearchChange={setSearch}
        clientType={clientType}
        onClientTypeChange={setClientType}
        platform={platform}
        onPlatformChange={setPlatform}
        domains={domains}
        onDomainsChange={setDomains}
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
