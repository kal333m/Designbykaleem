"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contactLinks } from "@/lib/contact";

const ContactModalContext = createContext<(() => void) | null>(null);

export function useContactModal() {
  const open = useContext(ContactModalContext);
  if (!open) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return open;
}

const icons: Record<string, React.ReactNode> = {
  Email: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8" cy="8.5" r="1.25" fill="currentColor" />
      <path d="M8 11.5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 17.5v-3.5c0-1.5 1-2.5 2.25-2.5S16.5 12.5 16.5 14v3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 11.5v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Phone: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M6.5 4h2.2l1 4-2 1.2a11 11 0 0 0 5.1 5.1l1.2-2 4 1v2.2c0 1-.9 1.8-1.9 1.6a15 15 0 0 1-11.4-11.2C4.5 4.9 5.4 4 6.5 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

function ContactModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-[var(--radius-card)] border border-border bg-surface p-7 shadow-xl"
          >
            <div className="flex items-start justify-between mb-5">
              <div>
                <h2 className="text-lg font-semibold tracking-tight">Let&apos;s talk</h2>
                <p className="text-sm text-muted mt-0.5">Pick whatever&apos;s easiest.</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="h-7 w-7 flex items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-background transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-3.5 rounded-2xl border border-border px-4 py-3 hover:border-accent transition-colors"
                >
                  <span className="text-muted group-hover:text-accent transition-colors">
                    {icons[link.label]}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium">{link.label}</span>
                    <span className="text-xs text-muted">{link.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ContactModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <ContactModalContext.Provider value={handleOpen}>
      {children}
      <ContactModal open={open} onClose={handleClose} />
    </ContactModalContext.Provider>
  );
}
