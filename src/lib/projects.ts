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

export type ChartPoint = { label: string; value: number };

export type ImpactChart = {
  title: string;
  unit?: string;
  illustrative?: boolean;
  points: ChartPoint[];
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  clientType: ClientType;
  platform: Platform;
  domains: Domain[];
  year: string;
  role: string;
  team?: string;
  timeframe?: string;
  tools?: string[];
  cover: {
    from: string;
    to: string;
  };
  // Case study body — same 8-section structure for every project.
  overview: string;
  businessContext: string;
  problemStatement: string;
  process: string;
  solution: string;
  outcome: string;
  metrics?: ImpactChart[];
  reflection?: string;
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
    team: "1 designer, 2 engineers, 1 PM",
    timeframe: "3 months",
    tools: ["Figma", "React"],
    cover: { from: "#2b2d42", to: "#4a4e69" },
    overview: "Placeholder overview: replace with the real one-paragraph summary of what this project is and why it mattered.",
    businessContext: "Placeholder business context: what business problem or opportunity triggered this work.",
    problemStatement: "Placeholder problem statement: the specific user or product problem being solved.",
    process: "Placeholder process notes: key research, insight, and iteration highlights.",
    solution: "Placeholder solution description: what was designed and the key decisions behind it.",
    outcome: "Placeholder outcome: the qualitative result of shipping this.",
    metrics: [
      {
        title: "Placeholder metric",
        unit: "%",
        illustrative: true,
        points: [
          { label: "Before", value: 32 },
          { label: "After", value: 78 },
        ],
      },
    ],
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
    team: "1 designer, 3 engineers",
    timeframe: "2 months",
    tools: ["Figma"],
    cover: { from: "#6a4c93", to: "#b298dc" },
    overview: "Placeholder overview: replace with the real one-paragraph summary of what this project is and why it mattered.",
    businessContext: "Placeholder business context: what business problem or opportunity triggered this work.",
    problemStatement: "Placeholder problem statement: the specific user or product problem being solved.",
    process: "Placeholder process notes: key research, insight, and iteration highlights.",
    solution: "Placeholder solution description: what was designed and the key decisions behind it.",
    outcome: "Placeholder outcome: the qualitative result of shipping this.",
    metrics: [
      {
        title: "Placeholder metric",
        unit: "%",
        illustrative: true,
        points: [
          { label: "Before", value: 41 },
          { label: "After", value: 69 },
        ],
      },
    ],
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
    team: "1 designer, 2 engineers, 1 PM",
    timeframe: "4 months",
    tools: ["Figma", "React Native"],
    cover: { from: "#1b4332", to: "#40916c" },
    overview: "Placeholder overview: replace with the real one-paragraph summary of what this project is and why it mattered.",
    businessContext: "Placeholder business context: what business problem or opportunity triggered this work.",
    problemStatement: "Placeholder problem statement: the specific user or product problem being solved.",
    process: "Placeholder process notes: key research, insight, and iteration highlights.",
    solution: "Placeholder solution description: what was designed and the key decisions behind it.",
    outcome: "Placeholder outcome: the qualitative result of shipping this.",
    metrics: [
      {
        title: "Placeholder metric",
        unit: "%",
        illustrative: true,
        points: [
          { label: "Before", value: 55 },
          { label: "After", value: 21 },
        ],
      },
    ],
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
    team: "1 designer, 1 engineer",
    timeframe: "6 weeks",
    tools: ["Figma"],
    cover: { from: "#7f5539", to: "#b08968" },
    overview: "Placeholder overview: replace with the real one-paragraph summary of what this project is and why it mattered.",
    businessContext: "Placeholder business context: what business problem or opportunity triggered this work.",
    problemStatement: "Placeholder problem statement: the specific user or product problem being solved.",
    process: "Placeholder process notes: key research, insight, and iteration highlights.",
    solution: "Placeholder solution description: what was designed and the key decisions behind it.",
    outcome: "Placeholder outcome: the qualitative result of shipping this.",
    metrics: [
      {
        title: "Placeholder metric",
        unit: "%",
        illustrative: true,
        points: [
          { label: "Before", value: 12 },
          { label: "After", value: 47 },
        ],
      },
    ],
  },
];
