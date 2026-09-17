"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useContactModal } from "@/components/ContactModal";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Nav() {
  const pathname = usePathname();
  const hasHero = pathname === "/";
  const [scrolled, setScrolled] = useState(!hasHero);
  const openContact = useContactModal();

  useEffect(() => {
    if (!hasHero) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasHero]);

  return (
    <header
      className={clsx(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        scrolled && "backdrop-blur-md bg-background/70 border-b border-border"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        <ThemeToggle />
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
