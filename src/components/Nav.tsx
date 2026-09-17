"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";
import { useContactModal } from "@/components/ContactModal";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const openContact = useContactModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled && "backdrop-blur-md bg-background/70 border-b border-border"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-foreground visited:text-foreground hover:text-accent transition-colors"
        >
          Kaleem Ali
        </a>
        <button
          onClick={openContact}
          className={clsx(
            "text-sm font-medium text-foreground hover:text-accent transition-all duration-300",
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          Say hello
        </button>
      </div>
    </header>
  );
}
