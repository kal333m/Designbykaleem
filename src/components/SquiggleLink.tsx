"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const paths = [
  "M1 6 C 12 2, 20 9, 30 5 C 40 1, 48 8, 58 5 C 68 2, 76 8, 86 5 C 91 3.5, 95 6, 99 4",
  "M1 5 C 10 8, 18 2, 28 6 C 38 9, 47 2, 57 6 C 67 9, 77 3, 87 6 C 92 7, 96 4, 99 6",
];

function Squiggle({ delay, variant = 0 }: { delay: number; variant?: number }) {
  return (
    <svg
      viewBox="0 0 100 10"
      preserveAspectRatio="none"
      className="absolute left-0 -bottom-1.5 w-full h-2.5 pointer-events-none"
      aria-hidden
    >
      <motion.path
        d={paths[variant]}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay, ease: [0.65, 0, 0.35, 1] }}
      />
    </svg>
  );
}

export function SquiggleLink({
  as: Tag,
  href,
  onClick,
  delay,
  variant = 0,
  children,
}: {
  as: "a" | "button";
  href?: string;
  onClick?: () => void;
  delay: number;
  variant?: number;
  children: ReactNode;
}) {
  const className =
    "relative inline-block font-medium text-foreground hover:text-accent transition-colors";

  return (
    <span className="relative inline-block">
      {Tag === "a" ? (
        <a href={href} className={className}>
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={className}>
          {children}
        </button>
      )}
      <Squiggle delay={delay} variant={variant} />
    </span>
  );
}
