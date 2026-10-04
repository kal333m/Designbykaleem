export type ClientType = "B2B" | "B2C";
export type Platform = "Web" | "Mobile";

// Kept separate from projects.ts so client components can use the filter
// options without bundling every case study's long-form content.
export const domainOptions = [
  "AI",
  "SaaS",
  "Enterprise",
  "Fintech",
  "Education",
  "Retail",
] as const;
export type Domain = (typeof domainOptions)[number];
