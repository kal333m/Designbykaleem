"use client";

import { motion } from "framer-motion";
import { useContactModal } from "@/components/ContactModal";
import { DesignAnimation } from "@/components/DesignAnimation";
import { SquiggleLink } from "@/components/SquiggleLink";

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
  const openContact = useContactModal();

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
        className="max-w-6xl mx-auto w-full pt-16 grid lg:grid-cols-2 gap-12 items-center"
      >
        <div className="max-w-2xl">
        <motion.div variants={item} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-border bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          Kaleem Ali
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
          I design B2B and AI products: the high-stakes, unglamorous kind
          where getting it wrong costs someone a workday. Most AI tools
          still look like the model designed them. Mine don&apos;t.
        </motion.p>

        <motion.p variants={item} className="mt-10 text-lg">
          Take a look at{" "}
          <SquiggleLink as="a" href="#work" delay={1.3} variant={0}>
            the work
          </SquiggleLink>
          , or just{" "}
          <SquiggleLink as="button" onClick={openContact} delay={1.5} variant={1}>
            say hello
          </SquiggleLink>
          .
        </motion.p>
        </div>

        <motion.div variants={item}>
          <DesignAnimation />
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
