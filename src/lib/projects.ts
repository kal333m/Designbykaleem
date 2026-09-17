export type ClientType = "B2B" | "B2C";
export type Platform = "Web" | "Mobile";

// Starter set based on your own project mix — add/remove freely as real projects come in.
export const domainOptions = [
  "AI",
  "Enterprise",
  "Cybersecurity",
  "Fintech",
] as const;
export type Domain = (typeof domainOptions)[number];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  clientType: ClientType;
  platform: Platform;
  domains: Domain[];
  year: string;
  role: string;
  cover: {
    from: string;
    to: string;
  };
  overview: string;
  process: string;
  outcome: string;
  liveUrl?: string;
};

// Placeholder set — swap `cover` gradients for real images (public/projects/<slug>/cover.jpg)
// and replace copy once case studies are rewritten.
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    tagline: "A one-line pitch goes here.",
    clientType: "B2B",
    platform: "Web",
    domains: ["AI", "Enterprise"],
    year: "2024",
    role: "Product Designer",
    cover: { from: "#2b2d42", to: "#4a4e69" },
    overview: "Placeholder overview — replace with the real problem statement.",
    process: "Placeholder process notes — replace with real process detail.",
    outcome: "Placeholder outcome — replace with the real measurable result.",
  },
  {
    slug: "project-two",
    title: "Project Two",
    tagline: "A one-line pitch goes here.",
    clientType: "B2C",
    platform: "Mobile",
    domains: ["Fintech"],
    year: "2024",
    role: "Product Designer",
    cover: { from: "#6a4c93", to: "#b298dc" },
    overview: "Placeholder overview — replace with the real problem statement.",
    process: "Placeholder process notes — replace with real process detail.",
    outcome: "Placeholder outcome — replace with the real measurable result.",
  },
  {
    slug: "project-three",
    title: "Project Three",
    tagline: "A one-line pitch goes here.",
    clientType: "B2B",
    platform: "Mobile",
    domains: ["Cybersecurity", "Enterprise"],
    year: "2023",
    role: "Product Designer",
    cover: { from: "#1b4332", to: "#40916c" },
    overview: "Placeholder overview — replace with the real problem statement.",
    process: "Placeholder process notes — replace with real process detail.",
    outcome: "Placeholder outcome — replace with the real measurable result.",
  },
  {
    slug: "project-four",
    title: "Project Four",
    tagline: "A one-line pitch goes here.",
    clientType: "B2C",
    platform: "Web",
    domains: ["AI"],
    year: "2023",
    role: "Product Designer",
    cover: { from: "#7f5539", to: "#b08968" },
    overview: "Placeholder overview — replace with the real problem statement.",
    process: "Placeholder process notes — replace with real process detail.",
    outcome: "Placeholder outcome — replace with the real measurable result.",
  },
];
