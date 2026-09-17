import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-20 flex flex-col gap-12">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Let&apos;s work together.
            </h2>
            <p className="text-muted mt-2 max-w-md">
              Have a project in mind, or just want to say hi? I&apos;d love
              to hear from you.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-85 transition-opacity"
          >
            Get in touch →
          </Link>
        </div>
        <p className="text-xs text-muted pt-8 border-t border-border">
          © {new Date().getFullYear()} Kaleem Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
