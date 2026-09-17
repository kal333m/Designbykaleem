export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border mt-10"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="text-lg font-medium tracking-tight">
            Let&apos;s work together.
          </p>
          <p className="text-sm text-muted mt-1">
            Reach out — details coming soon.
          </p>
        </div>
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Kaleem. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
