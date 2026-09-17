import type { Metadata } from "next";
import Link from "next/link";
import { contactLinks } from "@/lib/contact";
import { contactIcons } from "@/components/ContactIcons";

export const metadata: Metadata = {
  title: "Contact — Kaleem Ali",
  description: "Get in touch with Kaleem Ali.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 sm:px-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="hero-blob-a absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full blur-[110px] opacity-50"
          style={{ background: "var(--blob-a)" }}
        />
        <div
          className="hero-blob-b absolute top-10 right-[-6rem] h-[26rem] w-[26rem] rounded-full blur-[110px] opacity-40"
          style={{ background: "var(--blob-b)" }}
        />
        <div className="grain-overlay absolute inset-0" />
      </div>

      <div className="max-w-6xl mx-auto w-full py-16 sm:py-20">
        <Link
          href="/"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          ← Back
        </Link>

        <div className="max-w-2xl mt-16 sm:mt-20">
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Let&apos;s talk.
          </h1>
          <p className="mt-5 text-lg text-muted leading-relaxed">
            Reach out however&apos;s easiest — I read everything and reply
            quickly.
          </p>

          <div className="mt-12 flex flex-col gap-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface px-5 py-4 hover:border-accent transition-colors"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted group-hover:text-accent group-hover:border-accent transition-colors">
                  {contactIcons[link.label]}
                </span>
                <span className="flex flex-col">
                  <span className="text-base font-medium">{link.label}</span>
                  <span className="text-sm text-muted">{link.value}</span>
                </span>
                <span className="ml-auto text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
