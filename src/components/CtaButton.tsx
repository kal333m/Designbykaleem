import type { ReactNode } from "react";

const base =
  "group inline-flex h-11 items-center gap-2.5 rounded-[var(--radius-pill)] text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

const styles = {
  primary: `${base} bg-foreground text-background pl-5 pr-1.5 shadow-sm hover:shadow-lg`,
  secondary: `${base} border border-border bg-surface/70 px-5 text-foreground hover:border-accent hover:text-accent`,
};

function ArrowDown() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="scroll-bob h-4 w-4" aria-hidden>
      <path
        d="M12 5v14M6 13l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatBubble() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
      aria-hidden
    >
      <path
        d="M5 4h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  variant: keyof typeof styles;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
};

export function CtaButton({ variant, href, onClick, children }: Props) {
  const content =
    variant === "primary" ? (
      <>
        {children}
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-background text-foreground transition-colors duration-300 group-hover:bg-accent group-hover:text-background">
          <ArrowDown />
        </span>
      </>
    ) : (
      <>
        {children}
        <ChatBubble />
      </>
    );

  if (href) {
    return (
      <a href={href} className={styles[variant]}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={styles[variant]}>
      {content}
    </button>
  );
}
