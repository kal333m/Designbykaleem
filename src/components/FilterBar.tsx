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

function Dropdown({
  label,
  active,
  children,
}: {
  label: string;
  active: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={clsx(
          "flex items-center gap-1.5 rounded-[var(--radius-pill)] border px-3.5 py-2.5 text-sm font-medium transition-colors whitespace-nowrap",
          open || active
            ? "border-foreground text-foreground"
            : "border-border text-muted hover:text-foreground"
        )}
      >
        {label}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className={clsx(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 z-30 mt-2 min-w-[190px] rounded-2xl border border-border bg-surface p-3 shadow-xl flex flex-col gap-1">
          {children}
        </div>
      )}
    </div>
  );
}

function Option({
  label,
  selected,
  onClick,
  checkbox,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  checkbox?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-sm text-left transition-colors",
        selected ? "text-foreground" : "text-muted hover:text-foreground"
      )}
    >
      {checkbox ? (
        <span
          className={clsx(
            "flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
            selected ? "bg-foreground border-foreground" : "border-border"
          )}
        >
          {selected && (
            <svg viewBox="0 0 24 24" fill="none" className="h-2.5 w-2.5">
              <path
                d="M5 12l5 5L20 7"
                stroke="var(--background)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      ) : (
        <span
          className={clsx(
            "h-1.5 w-1.5 shrink-0 rounded-full",
            selected ? "bg-foreground" : "bg-transparent"
          )}
        />
      )}
      {label}
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
      <div className="flex flex-wrap items-center gap-2.5">
        <div className="relative w-full sm:w-52">
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

        <Dropdown
          label={clientType === "All" ? "Client" : clientType}
          active={clientType !== "All"}
        >
          {clientTypes.map((opt) => (
            <Option
              key={opt}
              label={opt}
              selected={clientType === opt}
              onClick={() => onClientTypeChange(opt)}
            />
          ))}
        </Dropdown>

        <Dropdown
          label={platform === "All" ? "Platform" : platform}
          active={platform !== "All"}
        >
          {platforms.map((opt) => (
            <Option
              key={opt}
              label={opt}
              selected={platform === opt}
              onClick={() => onPlatformChange(opt)}
            />
          ))}
        </Dropdown>

        <Dropdown
          label={domains.length > 0 ? `Domain · ${domains.length}` : "Domain"}
          active={domains.length > 0}
        >
          {domainOptions.map((d) => (
            <Option
              key={d}
              label={d}
              selected={domains.includes(d)}
              onClick={() => toggleDomain(d)}
              checkbox
            />
          ))}
        </Dropdown>

        {activeCount > 0 && (
          <button
            onClick={clearAll}
            className="text-xs text-muted hover:text-accent transition-colors ml-1"
          >
            Clear all
          </button>
        )}
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
