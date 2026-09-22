export type ClientType = "B2B" | "B2C";
export type Platform = "Web" | "Mobile";

// Starter set based on your own project mix, add or remove freely as real projects come in.
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
  source?: string;
  points: ChartPoint[];
};

export type DistributionItem = { label: string; value: number; detail?: string };
export type Distribution = {
  title: string;
  unit?: string;
  source?: string;
  items: DistributionItem[];
};

// The structured "how / what / when / why" breakdown of a problem.
// This is the artifact that shows diagnostic thinking rather than a vibe.
export type ProblemDiagnosis = {
  how: string;
  what: string;
  when: string;
  why: string;
};

export type FlowStep = { label: string; detail: string };
export type Flow = { title: string; steps: FlowStep[] };

export type ScreenBlock = {
  title: string;
  goal: string;
  decisions: string[];
  images: string[];
};

export type StatItem = { label: string; value: string };

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
  coverImage?: string;
  thumbnailGlyph?: "kanban";
  heroIllustration?: "kanban";

  // Case study body: same structure for every project. Every field past
  // this point is optional so a thin case study can render gracefully with
  // just the core sections while a fuller one can show its full thinking.
  overview: string;
  businessContext: string;
  problemStatement: string;
  problemDiagnosis?: ProblemDiagnosis;
  process: string;
  researchInsights?: string[];
  currentFlow?: Flow;
  processSteps?: string[];
  solution: string;
  proposedFlow?: Flow;
  screens?: ScreenBlock[];
  distributions?: Distribution[];
  outcome: string;
  metrics?: ImpactChart[];
  scaleStats?: StatItem[];
  reflection?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "b2b-bid-management",
    title: "B2B Bid Management",
    tagline:
      "Redesigning how bid teams navigate, tag, and act on tender requirements, from Kanban to compliance matrix, end to end.",
    clientType: "B2B",
    platform: "Web",
    domains: ["AI", "Enterprise"],
    year: "2026",
    role: "Senior Product Designer",
    team: "1 Product Designer, 1 Product Manager, 1 Front-End Engineer, 1 Backend Engineer",
    timeframe: "22 Dec 2025 to 4 Feb 2026 (6 weeks)",
    tools: ["Figma", "Claude", "Jira"],
    cover: { from: "#f97316", to: "#7c2d12" },
    thumbnailGlyph: "kanban",
    heroIllustration: "kanban",
    coverImage: "/projects/b2b-bid-management/hero-dashboard.webp",

    overview:
      "Pentimenti helps bid teams respond to complex tenders. I redesigned four connected systems, the Kanban pipeline, requirement tagging, the compliance matrix, and the template library, so that every step from pipeline visibility to final submission felt like one guided flow instead of four disconnected tools. I led research, information architecture, and prototyping through to handoff, working directly with a product manager and two engineers from problem framing to shipped product.",

    businessContext:
      "Without a coherent UX layer tying the proposal stages together, enterprise customers were underusing Pentimenti's core features. That showed up as lower retention and poor adoption of the compliance matrix and tagging systems, the two features that actually drive platform stickiness. When bid teams keep falling back to Excel, the product has an adoption problem, not just a usability one.",

    problemStatement:
      "Bid managers were losing context switching between the Kanban board, the requirements list, and the compliance matrix, with nothing tying the three together. Deadline visibility, tag coverage, and requirement status all existed somewhere in the product. None of it surfaced at the moment a bid manager actually needed it, which was under deadline pressure, when they needed to act fast.",
    problemDiagnosis: {
      how: "Bid managers lost context switching between the Kanban board, the requirements list, and the compliance matrix. Nothing tied the three together.",
      what: "Deadline visibility, tag coverage, and requirement status were buried in the product instead of surfaced at the moment they mattered.",
      when: "The cost showed up hardest under deadline pressure, exactly when teams needed to act fast.",
      why: "Pentimenti's own features went underused. Customers defaulted back to Excel instead.",
    },

    process:
      "I started with interviews with bid managers, then mapped the current system end to end to see exactly where it broke down before proposing anything new.",
    researchInsights: [
      "Cards on the Kanban board had no visible signal of urgency or health. Users couldn't prioritize from the board alone, so they opened every proposal individually, which broke their mental flow.",
      "Tags lived in a separate management panel and were mostly ignored. They only became meaningful once shown inline, inside the requirement row itself.",
      "Most enterprise customers wanted different templates entirely, since compliance rules and regulations differed by country.",
    ],
    currentFlow: {
      title: "How it worked before",
      steps: [
        { label: "Proposal created", detail: "No pipeline health signals" },
        { label: "Manual requirement import", detail: "Copy-pasted from tender PDFs" },
        { label: "Requirements table", detail: "Flat list, boolean fields only" },
        { label: "Tagging, in a separate panel", detail: "Disconnected from the requirement rows" },
        { label: "Compliance matrix", detail: "Static columns, unused by most teams" },
      ],
    },
    processSteps: ["Research", "AI Ideation", "Stakeholder Review", "Figma Polish", "Test"],

    solution:
      "The redesign touches four systems and ties them into one flow. The Kanban board now carries live signals, requirements are extracted by AI instead of copy-pasted, tags live inline in the row where they're actually used, and the compliance matrix became dynamic enough to support a template library instead of one rigid layout.",
    proposedFlow: {
      title: "What I changed it to",
      steps: [
        { label: "Kanban with live signals", detail: "Value, deadline, and group labels shown on the card" },
        { label: "AI requirement extraction", detail: "Auto-parsed straight from the tender documents" },
        { label: "Inline tag system", detail: "System and custom tags shown per row, not in a separate panel" },
        { label: "Dynamic compliance matrix", detail: "Template library with usage signals on every template" },
      ],
    },
    screens: [
      {
        title: "Kanban Dashboard View",
        goal: "A Kanban board that carries its own KPI cards, so a bid manager can read pipeline health without opening a single proposal.",
        decisions: [
          "KPI cards are built directly from live pipeline data, not a static summary.",
          "Split the proposal stage into 7 distinct stages instead of one general “proposal” card, so status is visible at a glance.",
        ],
        images: ["/projects/b2b-bid-management/kanban-dashboard.webp"],
      },
      {
        title: "Proposal Template: Choosing and Creation",
        goal: "Let a bid manager pick, edit, or build a tender template based on what a specific tender actually requires.",
        decisions: [
          "Templates carry usage counts and labels so teams reuse what already works instead of starting from a blank matrix every time.",
          "Custom columns are created with an explicit AI instruction field, so the extraction behavior for that column is defined once and reused everywhere.",
        ],
        images: [
          "/projects/b2b-bid-management/proposal-template-1.webp",
          "/projects/b2b-bid-management/proposal-template-2.webp",
          "/projects/b2b-bid-management/proposal-template-3.webp",
        ],
      },
      {
        title: "Requirements Matrix",
        goal: "One matrix that holds every requirement for a tender, however large, and stays usable at that scale.",
        decisions: [
          "Tags render inline in the row instead of a separate panel, the single biggest change bid managers asked for.",
          "Tested against a real tender with 1,108 requirements to confirm the table held up at scale, not just in a demo with a dozen rows.",
        ],
        images: ["/projects/b2b-bid-management/requirements-matrix.webp"],
      },
      {
        title: "Tag Management System",
        goal: "A tagging system with a fixed set of system tags plus room for teams to define their own.",
        decisions: [
          "System tags (Plan & Draft, Compliance, Evidence) are locked, so the taxonomy that drives reporting can't drift between teams.",
          "Custom tags stay open, with a lightweight creation flow, so teams can still adapt the system to how their own org actually works.",
        ],
        images: [
          "/projects/b2b-bid-management/tag-management-1.webp",
          "/projects/b2b-bid-management/tag-management-2.webp",
        ],
      },
      {
        title: "Stakeholder Summary",
        goal: "A generated, navigable summary of the compliance requirements a tender actually demands, organized by section instead of buried in a PDF.",
        decisions: [
          "The table of contents mirrors the tender's own structure, so stakeholders can jump straight to the section they own.",
          "Each requirement carries a status flag, so a reviewer can see what still needs action without reading the whole document.",
        ],
        images: ["/projects/b2b-bid-management/stakeholder-summary.webp"],
      },
    ],
    distributions: [
      {
        title: "Active proposals by stage",
        source: "Mixpanel",
        items: [
          { label: "Plan & Draft", value: 183, detail: "4.7B DKK in this stage" },
          { label: "Manage Requirements", value: 93, detail: "2.4M DKK in this stage" },
          { label: "Bid Assessment", value: 43, detail: "526.2K DKK in this stage" },
          { label: "Review & Finalize", value: 41 },
        ],
      },
      {
        title: "System tag coverage",
        source: "Mixpanel",
        items: [
          { label: "Plan & Draft", value: 1108, detail: "Requires a written response" },
          { label: "Compliance", value: 955, detail: "Yes or no confirmation only" },
          { label: "Evidence", value: 105, detail: "Document upload needed" },
        ],
      },
    ],

    outcome:
      "I redesigned four interconnected systems, the Kanban pipeline, requirement tagging, compliance matrix, and template library, to work as one coherent flow. Every decision was grounded in how bid teams actually think: by proposal health, not by feature. Tags moved inline. Templates moved to the surface. The Kanban board started telling a story, and the compliance matrix became something people actually used.",
    metrics: [
      {
        title: "Enterprise NPS",
        illustrative: false,
        source: "Feedback",
        points: [
          { label: "Before", value: 6.1 },
          { label: "After", value: 8.7 },
        ],
      },
      {
        title: "Compliance Matrix Usage",
        unit: "%",
        illustrative: false,
        source: "Mixpanel",
        points: [
          { label: "Before", value: 56 },
          { label: "After", value: 82 },
        ],
      },
      {
        title: "Task Drop-Off Rate",
        unit: "%",
        illustrative: false,
        source: "Mixpanel",
        points: [
          { label: "Before", value: 61 },
          { label: "After", value: 22 },
        ],
      },
    ],
    scaleStats: [
      { label: "Requirements tracked in one tender", value: "1,108" },
      { label: "Core systems redesigned", value: "4" },
      { label: "Total pipeline managed", value: "5B DKK" },
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
