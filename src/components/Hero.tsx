"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 sm:px-10"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="hero-blob-a absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full blur-[110px] opacity-60"
          style={{ background: "var(--blob-a)" }}
        />
        <div
          className="hero-blob-b absolute top-10 right-[-6rem] h-[26rem] w-[26rem] rounded-full blur-[110px] opacity-50"
          style={{ background: "var(--blob-b)" }}
        />
        <div
          className="hero-blob-c absolute bottom-[-10rem] left-1/3 h-[24rem] w-[24rem] rounded-full blur-[110px] opacity-40"
          style={{ background: "var(--blob-c)" }}
        />
        <div className="grain-overlay absolute inset-0" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto w-full pt-16"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-border bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for new projects
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          Kaleem
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-3 text-2xl sm:text-3xl font-medium text-muted tracking-tight"
        >
          Engineer <span className="text-foreground">→</span> Designer.
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 text-lg text-muted leading-relaxed max-w-xl"
        >
          I design B2B and AI products — the high-stakes, unglamorous kind
          where getting it wrong costs someone a workday. Most AI tools
          still look like the model designed them. Mine don&apos;t.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex items-center gap-5">
          <a
            href="#work"
            className="rounded-[var(--radius-pill)] bg-foreground text-background px-6 py-3 text-sm font-medium hover:opacity-85 transition-opacity"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Say hello →
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted tracking-wide">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-5 rounded-full border border-border flex justify-center pt-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-muted" />
        </motion.span>
      </motion.div>
    </section>
  );
}
