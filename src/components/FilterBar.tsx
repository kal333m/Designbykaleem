"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  domainOptions,
  type ClientType,
  type Domain,
  type Platform,
} from "@/lib/projects";

type Props = {
  search: string;
  onSearchChange: (v: string) => void;
  clientType: ClientType | "All";
  onClientTypeChange: (v: ClientType | "All") => void;
  platform: Platform | "All";
  onPlatformChange: (v: Platform | "All") => void;
  domains: Domain[];
  onDomainsChange: (v: Domain[]) => void;
};

const clientTypes: (ClientType | "All")[] = ["All", "B2B", "B2C"];
const platforms: (Platform | "All")[] = ["All", "Web", "Mobile"];

function SegmentedGroup<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: T[];
  onChange: (v: T) => void;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-muted mb-2">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={clsx(
              "rounded-[var(--radius-pill)] px-3.5 py-1.5 text-sm font-medium transition-colors",
              value === opt
                ? "bg-foreground text-background"
                : "border border-border text-muted hover:text-foreground"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

function Chip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <button
      onClick={onRemove}
      className="flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-border px-3 py-1 text-xs font-medium text-muted hover:text-foreground hover:border-foreground transition-colors"
    >
      {label}
      <span aria-hidden>✕</span>
    </button>
  );
}

export function FilterBar({
  search,
  onSearchChange,
  clientType,
  onClientTypeChange,
  platform,
  onPlatformChange,
  domains,
  onDomainsChange,
}: Props) {
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!panelOpen) return;
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setPanelOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [panelOpen]);

  const activeCount =
    (clientType !== "All" ? 1 : 0) + (platform !== "All" ? 1 : 0) + domains.length;

  const toggleDomain = (d: Domain) => {
    onDomainsChange(
      domains.includes(d) ? domains.filter((x) => x !== d) : [...domains, d]
    );
  };

  const clearAll = () => {
    onClientTypeChange("All");
    onPlatformChange("All");
    onDomainsChange([]);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[220px]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search projects"
            className="w-full rounded-[var(--radius-pill)] border border-border bg-surface pl-10 pr-4 py-2.5 text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        <div className="relative" ref={panelRef}>
          <button
            onClick={() => setPanelOpen((v) => !v)}
            className={clsx(
              "flex items-center gap-2 rounded-[var(--radius-pill)] border px-4 py-2.5 text-sm font-medium transition-colors",
              panelOpen || activeCount > 0
                ? "border-foreground text-foreground"
                : "border-border text-muted hover:text-foreground"
            )}
          >
            Filters
            {activeCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-background text-xs">
                {activeCount}
              </span>
            )}
          </button>

          {panelOpen && (
            <div className="absolute right-0 z-30 mt-2 w-72 rounded-2xl border border-border bg-surface p-5 shadow-xl flex flex-col gap-5">
              <SegmentedGroup
                label="Client"
                value={clientType}
                options={clientTypes}
                onChange={onClientTypeChange}
              />
              <SegmentedGroup
                label="Platform"
                value={platform}
                options={platforms}
                onChange={onPlatformChange}
              />
              <div>
                <p className="text-xs uppercase tracking-wide text-muted mb-2">Domain</p>
                <div className="flex flex-wrap gap-2">
                  {domainOptions.map((d) => (
                    <button
                      key={d}
                      onClick={() => toggleDomain(d)}
                      className={clsx(
                        "rounded-[var(--radius-pill)] px-3.5 py-1.5 text-sm font-medium transition-colors",
                        domains.includes(d)
                          ? "bg-foreground text-background"
                          : "border border-border text-muted hover:text-foreground"
                      )}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
              {activeCount > 0 && (
                <button
                  onClick={clearAll}
                  className="text-xs text-muted hover:text-accent transition-colors self-start"
                >
                  Clear all
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {activeCount > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {clientType !== "All" && (
            <Chip label={clientType} onRemove={() => onClientTypeChange("All")} />
          )}
          {platform !== "All" && (
            <Chip label={platform} onRemove={() => onPlatformChange("All")} />
          )}
          {domains.map((d) => (
            <Chip key={d} label={d} onRemove={() => toggleDomain(d)} />
          ))}
        </div>
      )}
    </div>
  );
}
