"use client";

import { useContactModal } from "@/components/ContactModal";
import { DesignAnimation } from "@/components/DesignAnimation";
import { SquiggleLink } from "@/components/SquiggleLink";

const rise = (i: number) => ({ "--i": i }) as React.CSSProperties;

export function Hero() {
  const openContact = useContactModal();

  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="hero-blob-a absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, var(--blob-a) 0%, transparent 68%)" }}
        />
        <div
          className="hero-blob-b absolute top-10 right-[-6rem] h-[26rem] w-[26rem] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, var(--blob-b) 0%, transparent 68%)" }}
        />
        <div
          className="hero-blob-c absolute bottom-[-10rem] left-1/3 h-[24rem] w-[24rem] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, var(--blob-c) 0%, transparent 68%)" }}
        />
        <div className="grain-overlay absolute inset-0" />
      </div>

      <div className="max-w-6xl mx-auto w-full pt-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
        <div className="hero-rise mb-6" style={rise(0)}>
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-border bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available
          </span>
        </div>

        <h1
          className="hero-rise text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]"
          style={rise(1)}
        >
          Kaleem Ali
        </h1>
        <p
          className="hero-rise mt-3 text-2xl sm:text-3xl font-medium text-muted tracking-tight"
          style={rise(2)}
        >
          Engineer <span className="text-foreground">→</span> Designer.
        </p>

        <p
          className="hero-slide mt-6 text-lg text-muted leading-relaxed max-w-xl"
          style={rise(3)}
        >
          I design B2B, SaaS, and AI products: the high-stakes, unglamorous kind
          where getting it wrong costs someone a workday. Most AI tools
          still look like the model designed them. Mine don&apos;t.
        </p>

        <p className="hero-rise mt-10 text-lg" style={rise(4)}>
          Take a look at{" "}
          <SquiggleLink as="a" href="#work" delay={1.3} variant={0}>
            the work
          </SquiggleLink>
          , or just{" "}
          <SquiggleLink as="button" onClick={openContact} delay={1.5} variant={1}>
            say hello
          </SquiggleLink>
          .
        </p>
        </div>

        <div className="hero-rise" style={rise(5)}>
          <DesignAnimation />
        </div>
      </div>

      <div
        className="hero-fade absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ animationDelay: "1.1s" }}
      >
        <span className="text-xs text-muted tracking-wide">Scroll</span>
        <span className="scroll-bob h-8 w-5 rounded-full border border-border flex justify-center pt-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-muted" />
        </span>
      </div>
    </section>
  );
}
