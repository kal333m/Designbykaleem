"use client";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-foreground text-background text-sm font-semibold">
            K
          </span>
          <span className="text-sm font-medium tracking-tight">Kaleem</span>
        </a>
        <nav className="flex items-center gap-6">
          <a
            href="#work"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-sm rounded-[var(--radius-pill)] bg-foreground text-background px-4 py-1.5 font-medium hover:opacity-85 transition-opacity"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
