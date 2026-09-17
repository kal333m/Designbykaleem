"use client";

import { useContactModal } from "@/components/ContactModal";

export function Footer() {
  const openContact = useContactModal();

  return (
    <footer className="border-t border-border mt-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-lg font-medium tracking-tight">
            Let&apos;s work together.
          </p>
          <button
            onClick={openContact}
            className="text-sm text-muted hover:text-accent transition-colors mt-1"
          >
            Say hello →
          </button>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Kaleem Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
