"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function DesignAnimation() {
  const [showDesign, setShowDesign] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setShowDesign((v) => !v), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative hidden lg:flex w-full max-w-sm aspect-[4/5] rounded-[var(--radius-card)] border border-border bg-surface overflow-hidden shadow-sm mx-auto">
      <div className="absolute top-0 inset-x-0 h-9 flex items-center gap-1.5 px-4 border-b border-border">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
      </div>

      <div className="absolute inset-0 pt-9 flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          {showDesign ? (
            <motion.div
              key="design"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center w-full"
            >
              <div className="relative">
                <div className="flex h-12 w-40 items-center justify-center rounded-full bg-accent text-white text-sm font-medium">
                  Get Started
                </div>

                {/* width annotation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="absolute left-0 right-0 top-full mt-2.5 flex flex-col items-center gap-1"
                >
                  <div className="flex w-full items-center">
                    <span className="h-1.5 w-px bg-accent/50" />
                    <span className="flex-1 border-t border-dashed border-accent/50" />
                    <span className="h-1.5 w-px bg-accent/50" />
                  </div>
                  <span className="text-[9px] text-muted font-mono">160px</span>
                </motion.div>

                {/* height annotation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="absolute top-0 bottom-0 left-full ml-3 flex items-center gap-1.5"
                >
                  <div className="flex h-full flex-col items-center">
                    <span className="h-px w-1.5 bg-accent/50" />
                    <span className="flex-1 border-l border-dashed border-accent/50" />
                    <span className="h-px w-1.5 bg-accent/50" />
                  </div>
                  <span className="text-[9px] text-muted font-mono">48px</span>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full rounded-xl bg-[#1e1e1e] p-4 font-mono text-[11px] leading-relaxed text-left overflow-hidden text-[#d4d4d4]"
            >
              <div>
                <span style={{ color: "#ff8a80" }}>function</span>{" "}
                <span style={{ color: "#82aaff" }}>Button</span>() {"{"}
              </div>
              <div className="pl-3">return (</div>
              <div className="pl-6">
                <span style={{ color: "#c3e88d" }}>&lt;button</span>{" "}
                <span style={{ color: "#ffcb6b" }}>className</span>=
                <span style={{ color: "#c3e88d" }}>&quot;btn&quot;</span>&gt;
              </div>
              <div className="pl-9">Get Started</div>
              <div className="pl-6">
                <span style={{ color: "#c3e88d" }}>&lt;/button&gt;</span>
              </div>
              <div className="pl-3">);</div>
              <div>{"}"}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
