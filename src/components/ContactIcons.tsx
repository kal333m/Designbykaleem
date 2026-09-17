export const contactIcons: Record<string, React.ReactNode> = {
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
