import { contactLinks } from "@/lib/contact";
import { contactIcons } from "@/components/ContactIcons";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border mt-10 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-20 flex flex-col gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Let&apos;s talk.
          </h2>
          <p className="text-muted mt-2 max-w-md">
            Have a project in mind, or just want to say hi? Reach out
            however&apos;s easiest.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4 hover:border-accent transition-colors"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-muted group-hover:text-accent group-hover:border-accent transition-colors">
                {contactIcons[link.label]}
              </span>
              <span className="flex flex-col min-w-0">
                <span className="text-sm font-medium">{link.label}</span>
                <span className="text-xs text-muted truncate">{link.value}</span>
              </span>
            </a>
          ))}
        </div>

        <p className="text-xs text-muted pt-8 border-t border-border">
          © {new Date().getFullYear()} Kaleem Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
