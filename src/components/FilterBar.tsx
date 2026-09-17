"use client";

import clsx from "clsx";
import type { ClientType, Platform } from "@/lib/projects";

type Props = {
  clientType: ClientType | "All";
  platform: Platform | "All";
  onClientTypeChange: (value: ClientType | "All") => void;
  onPlatformChange: (value: Platform | "All") => void;
};

const clientTypes: (ClientType | "All")[] = ["All", "B2B", "B2C"];
const platforms: (Platform | "All")[] = ["All", "Web", "Mobile"];

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-[var(--radius-pill)] px-4 py-1.5 text-sm font-medium transition-colors duration-200",
        active
          ? "bg-foreground text-background"
          : "bg-surface text-muted hover:text-foreground border border-border"
      )}
    >
      {label}
    </button>
  );
}

export function FilterBar({
  clientType,
  platform,
  onClientTypeChange,
  onPlatformChange,
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-wide text-muted mr-1">Client</span>
        {clientTypes.map((value) => (
          <Pill
            key={value}
            label={value}
            active={clientType === value}
            onClick={() => onClientTypeChange(value)}
          />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs uppercase tracking-wide text-muted mr-1">Platform</span>
        {platforms.map((value) => (
          <Pill
            key={value}
            label={value}
            active={platform === value}
            onClick={() => onPlatformChange(value)}
          />
        ))}
      </div>
    </div>
  );
}
