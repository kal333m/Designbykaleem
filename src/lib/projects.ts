export type ClientType = "B2B" | "B2C";
export type Platform = "Web" | "Mobile";

// Starter set based on your own project mix, add or remove freely as real projects come in.
export const domainOptions = [
  "AI",
  "Enterprise",
  "Cybersecurity",
  "Fintech",
  "Education",
  "Retail",
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
  imageLabels?: string[];
  diagram?: "roleArchitecture";
  layout?: "phone" | "compare";
};

export type StatItem = { label: string; value: string };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  clientType: ClientType;
  platform: Platform[];
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
  thumbnailGlyph?: "kanban" | "atlas" | "procure" | "guardian" | "journey" | "palette";
  heroIllustration?: "kanban" | "atlas" | "procure" | "guardian" | "journey" | "palette";

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
    platform: ["Web"],
    domains: ["AI", "Enterprise"],
    year: "2026",
    role: "Senior Product Designer",
    team: "1 Product Designer, 1 Product Manager, 1 Front-End Engineer, 1 Backend Engineer",
    timeframe: "22 Dec 2025 to 4 Feb 2026 (6 weeks)",
    tools: ["Figma", "Claude", "Jira"],
    cover: { from: "#f97316", to: "#7c2d12" },
    thumbnailGlyph: "kanban",
    heroIllustration: "kanban",
    coverImage: "/projects/b2b-bid-management/hero-dashboard-v2.webp",

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
        images: ["/projects/b2b-bid-management/kanban-dashboard-v2.webp"],
      },
      {
        title: "Proposal Template: Choosing and Creation",
        goal: "Let a bid manager pick, edit, or build a tender template based on what a specific tender actually requires.",
        decisions: [
          "Templates carry usage counts and labels so teams reuse what already works instead of starting from a blank matrix every time.",
          "Custom columns are created with an explicit AI instruction field, so the extraction behavior for that column is defined once and reused everywhere.",
        ],
        images: [
          "/projects/b2b-bid-management/proposal-template-1-v2.webp",
          "/projects/b2b-bid-management/proposal-template-2-v2.webp",
          "/projects/b2b-bid-management/proposal-template-3-v2.webp",
        ],
      },
      {
        title: "Requirements Matrix",
        goal: "One matrix that holds every requirement for a tender, however large, and stays usable at that scale.",
        decisions: [
          "Tags render inline in the row instead of a separate panel, the single biggest change bid managers asked for.",
          "Tested against a real tender with 1,108 requirements to confirm the table held up at scale, not just in a demo with a dozen rows.",
        ],
        images: ["/projects/b2b-bid-management/requirements-matrix-v2.webp"],
      },
      {
        title: "Tag Management System",
        goal: "A tagging system with a fixed set of system tags plus room for teams to define their own.",
        decisions: [
          "System tags (Plan & Draft, Compliance, Evidence) are locked, so the taxonomy that drives reporting can't drift between teams.",
          "Custom tags stay open, with a lightweight creation flow, so teams can still adapt the system to how their own org actually works.",
        ],
        images: [
          "/projects/b2b-bid-management/tag-management-1-v2.webp",
          "/projects/b2b-bid-management/tag-management-2-v2.webp",
        ],
      },
      {
        title: "Stakeholder Summary",
        goal: "A generated, navigable summary of the compliance requirements a tender actually demands, organized by section instead of buried in a PDF.",
        decisions: [
          "The table of contents mirrors the tender's own structure, so stakeholders can jump straight to the section they own.",
          "Each requirement carries a status flag, so a reviewer can see what still needs action without reading the whole document.",
        ],
        images: ["/projects/b2b-bid-management/stakeholder-summary-v2.webp"],
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
    slug: "atlas-ai",
    title: "Atlas: Agentic AI for Bid Teams",
    tagline:
      "Designing the agentic memory layer that lets Atlas act on persistent context, skills, and shared team knowledge, instead of starting cold every session.",
    clientType: "B2B",
    platform: ["Web"],
    domains: ["AI", "Enterprise"],
    year: "2026",
    role: "Senior Product Designer",
    team: "1 Product Designer, 1 Product Manager, 1 Front-End Engineer, 1 AI Engineer",
    timeframe: "12 Jan 2026 to 8 Apr 2026 (12 weeks)",
    tools: ["Figma", "Claude Code", "Jira"],
    cover: { from: "#2997ff", to: "#1e1b4b" },
    thumbnailGlyph: "atlas",
    heroIllustration: "atlas",
    coverImage: "/projects/atlas-ai/atlas-landing.webp",

    overview:
      "Atlas is Pentimenti's in-house conversational AI for bid teams. I designed the agentic layer that lets it act on memory instead of just responding to prompts: skills that trigger automatically from natural language, prompts teams can save and share, and a knowledge base that grounds every answer in the organization's own documents. I led research, IA, and prototyping through to handoff, working directly with a product manager and an AI engineer from problem framing to shipped product.",

    businessContext:
      "Without persistent context, Atlas behaved like a generic LLM wrapper bolted onto the product. Output quality swung wildly between sessions and users, which made it impossible for teams to build repeatable workflows around it or trust it for compliance-critical tender work, the exact use case it was built for.",

    problemStatement:
      "Users repeatedly pasted the same brief, tone guidelines, and formatting rules into the chat before Atlas could be useful, because every session started as session one. Bid managers lost 20 to 40 minutes per tender just re-briefing the AI on things it should have already known.",
    problemDiagnosis: {
      how: "Every Atlas session opened blank, with no memory of team norms, tone, or formatting rules from previous work.",
      what: "Users manually re-pasted briefs, CV templates, and compliance guidelines before each chat, and re-explained team norms Atlas had already been told once.",
      when: "The cost repeated on every single tender, compounding across the team instead of ever being solved once.",
      why: "Without a shared organizational baseline, output quality depended entirely on which user was chatting and how much context they bothered to re-type.",
    },

    process:
      "I ran interviews with bid managers, then mapped how they actually used Atlas day to day to see exactly where context kept breaking, before proposing a system to carry it forward automatically.",
    researchInsights: [
      "Bid managers think in tasks, like reformat this CV, not features, like use the cv-reformatter skill. A skill's description field needed to match spoken trigger phrases exactly, not internal naming.",
      "Shared skills created invisible conflicts. Two users could activate contradictory formatting instructions without knowing it, so we added an active-count badge and a toggle with explicit conflict warnings.",
      "Memory surfacing was opaque. Users didn't know what Atlas remembered and couldn't trust or edit it, so a visible Memory panel became a top-voted feature request.",
      "Nordic enterprise buyers expected org-level governance, not personal settings. Group-based sharing with an admin override became a non-negotiable requirement for deal closure.",
    ],
    currentFlow: {
      title: "How it worked before",
      steps: [
        { label: "Opens new chat", detail: "No prior context carried over" },
        { label: "Manually pastes brief", detail: "Tone and format rules re-entered every time" },
        { label: "Re-explains team norms", detail: "CV template, proposal structure, language" },
        { label: "Generates output", detail: "Inconsistent quality across users" },
        { label: "Session ends, context lost", detail: "Cycle repeats on the next tender" },
      ],
    },
    processSteps: ["Research", "Claude Code Ideation", "Stakeholder Review", "Figma Polish", "Test"],

    solution:
      "The redesign layers several systems on top of Atlas so context persists instead of resetting every time. Skills encode organizational norms like CV formats and compliance rules, set once and triggered automatically when Atlas recognizes the moment is right. Prompts let teams save and share reusable instructions with @ syntax. Memory holds two scopes: a personal profile of how you like to work, and a Project-level memory scoped to a specific deal, with its own instructions and files, shared with the whole team on that deal instead of re-explained by whoever opens the chat. On top of that, Atlas can delegate to specialized sub-agents, a Past Proposal Agent for pattern-matching earlier bids, a Cisco Knowledge Agent for vendor-specific detail, instead of trying to answer everything itself. That delegation is what makes Atlas agentic rather than a chat window: it decides which skill to trigger, which memory to load, and which specialist to hand off to, on its own, instead of waiting to be told every time.",
    proposedFlow: {
      title: "What I changed it to",
      steps: [
        { label: "Opens new chat", detail: "Skills and Memory load automatically" },
        { label: "Atlas reads active skills", detail: "CV format, tone, and compliance rules pre-loaded" },
        { label: "User invokes a prompt with @", detail: "Reusable instructions, shared across the team" },
        { label: "Generates consistent output", detail: "Same quality regardless of user or session" },
        { label: "Session state saved to Memory", detail: "Context carries forward to the next tender" },
      ],
    },
    screens: [
      {
        title: "Atlas Landing Page",
        goal: "Give users a full picture of what Atlas can do the moment they open it, instead of a blank chat box.",
        decisions: [
          "Surfaced likely first questions based on the agent's own capabilities, so users don't have to guess what to ask.",
          "Kept key abilities and chat history on the left rail, following the conversational AI pattern users already know from other tools.",
        ],
        images: ["/projects/atlas-ai/atlas-landing.webp"],
      },
      {
        title: "Knowledge Base Cluster: Landing, Create Cluster and Upload",
        goal: "Give users a place to upload the documents Atlas should treat as ground truth.",
        decisions: [
          "Used a nested table structure for folders, so clusters stay organized as the document count grows.",
          "Kept cluster creation and file upload to two short steps each, since this is the setup step teams tend to skip if it feels heavy.",
        ],
        images: [
          "/projects/atlas-ai/clusters-overview.webp",
          "/projects/atlas-ai/create-cluster-modal.webp",
          "/projects/atlas-ai/upload-documents-modal.webp",
        ],
      },
      {
        title: "Skills in Atlas: Markdown View, Creation and Share",
        goal: "Let a user teach Atlas a standing instruction, like always build a six-slide deck to brand guidelines, once.",
        decisions: [
          "Used a plain markdown text view for the skill body, so what Atlas will actually do stays legible instead of hidden inside a form.",
          "Let users edit a skill mid-conversation, not just from a settings page, since that's when they actually notice it needs a fix.",
          "Kept manual skill creation as a short form, for the cases that start from a blank page rather than an existing chat.",
        ],
        images: [
          "/projects/atlas-ai/skill-detail-view.webp",
          "/projects/atlas-ai/create-skill-modal.webp",
          "/projects/atlas-ai/share-skill-modal.webp",
        ],
      },
      {
        title: "Prompt Library",
        goal: "Let users invoke a saved prompt with @, so wording that already works can be reused instead of rewritten.",
        decisions: [
          "Kept the library intentionally simple and brief, so scanning it stays faster than just retyping the prompt.",
          "Gave every user the option to save and share a prompt with the team, not just admins.",
        ],
        images: [
          "/projects/atlas-ai/prompt-detail-view.webp",
          "/projects/atlas-ai/share-prompt-modal.webp",
        ],
      },
      {
        title: "Memory: Personal Profile",
        goal: "Let a user see and trust exactly what Atlas remembers about them, instead of guessing at it.",
        decisions: [
          "Split memory into named sections, Role & Background, Preferences, Standing Instructions, instead of one freeform blob, so a user can scan what's stored in seconds.",
          "Made memory fully visible and editable in place, which directly answers the research finding that opaque memory was the top-voted complaint.",
        ],
        images: ["/projects/atlas-ai/memory-profile.webp"],
      },
      {
        title: "Projects: Shared Memory and Files",
        goal: "Give a deal team a shared memory scope, like Denmark Procurement, that sits above any one person's personal memory.",
        decisions: [
          "Kept Project Memory and Instructions pinned in a persistent side panel, so context never has to be re-explained mid conversation by whoever happens to open the chat.",
          "Capped and tracked Project Files explicitly, so Atlas is always grounded in a known, bounded set of documents instead of an open-ended pile of uploads.",
          "Separated Your chats from Shared with you, so private exploration and shared team work don't collide in one list.",
        ],
        images: ["/projects/atlas-ai/project-memory.webp"],
      },
      {
        title: "Sub-agents: Delegating to Specialists",
        goal: "Let Atlas call a specialized agent, like a Past Proposal Agent or a Cisco Knowledge Agent, instead of trying to answer everything itself.",
        decisions: [
          "Made every sub-agent an explicit toggle, off by default, so a user always knows exactly which specialist is active in a given chat.",
          "Kept each sub-agent's description to one plain-language line, since these get toggled quickly mid conversation, not studied like a settings page.",
          "This is the clearest expression of Atlas as agentic rather than conversational: it can hand off part of a request to another agent instead of answering everything itself.",
        ],
        images: [
          "/projects/atlas-ai/sub-agents-menu.webp",
          "/projects/atlas-ai/sub-agents-context-chip.webp",
        ],
      },
    ],

    outcome:
      "Skills adopted per team is already at 7.4 out of 15 in the library, weeks after rollout, and still climbing as more teams write their own. More importantly, the shape of an Atlas conversation changed: sessions start pre-loaded instead of from a blank page, and the agent acts on stored context instead of waiting to be re-briefed every time.",
    metrics: [
      {
        title: "Time spent re-establishing context per tender",
        unit: "min",
        illustrative: true,
        points: [
          { label: "Before (manual re-briefing)", value: 30 },
          { label: "After (Skills + Memory)", value: 0 },
        ],
      },
      {
        title: "Skills adopted per team vs. library size",
        illustrative: false,
        source: "Internal usage data",
        points: [
          { label: "Adopted (avg per team)", value: 7.4 },
          { label: "Available in library", value: 15 },
        ],
      },
    ],
    scaleStats: [
      { label: "Skills adopted per team (avg, early results)", value: "7.4 of 15" },
      { label: "Time reclaimed per tender", value: "20–40 min" },
      { label: "Core systems unified", value: "4" },
    ],
    reflection:
      "The core problem was never Atlas's capability, it was its memory. It was powerful but amnesiac, resetting its understanding of the team, their standards, and what good output looked like every single session. That's what made it a tool people tolerated instead of trusted. Skills, Prompts, and Memory gave Atlas the institutional memory it was missing, and that's the real definition of agentic here: Atlas now decides what to load and when, instead of waiting to be told.",
  },
  {
    slug: "procurement-erp",
    title: "B2B Procurement ERP",
    tagline:
      "Redesigning a legacy procurement ERP into role-based dashboards for finance, procurement, and vendors, cutting order processing time by 38%.",
    clientType: "B2B",
    platform: ["Web"],
    domains: ["Enterprise", "Fintech"],
    year: "2025",
    role: "Product Designer",
    team: "2 Product Designers, 1 Product Manager, 2 Developers",
    timeframe: "17 Apr 2025 to 4 Oct 2025 (24 weeks)",
    tools: ["Figma", "Notion", "Maze", "Replit"],
    cover: { from: "#10b981", to: "#134e2f" },
    thumbnailGlyph: "procure",
    heroIllustration: "procure",

    overview:
      "Arrocoat Surface Textures ran procurement on a legacy ERP that finance, procurement managers, and vendors all fought with differently. I led end-to-end design of the redesign, role-based dashboards for each of the three groups, real-time inventory sync, and automated compliance checks, replacing a single generic interface everyone had to work around.",

    businessContext:
      "Inefficient procurement workflows led to a 35 day delay in approvals, 20% reconciliation errors, and a 30% drop in vendor satisfaction, driving up operational cost and cutting process transparency.",

    problemStatement:
      "Users struggled to complete purchase and approval tasks because the ERP still relied on legacy, manual methods. That caused workflow delays and low adoption across teams, and the pain surfaced hardest during peak procurement cycles, when the ERP's lack of clear information and automation forced people back into manual workarounds.",
    problemDiagnosis: {
      how: "Users struggled to complete purchase and approval tasks because they were still using legacy, manual methods inside a modern ERP shell.",
      what: "That led to workflow delays and low adoption across finance, procurement, and vendor teams alike.",
      when: "The cost surfaced hardest during peak procurement cycles, exactly when teams could least afford it.",
      why: "The ERP lacked clear information and automation, which pushed people into manual workarounds it was supposed to replace.",
    },

    process:
      "I ran interviews with procurement managers, finance officers, and vendors, then audited the existing system and three competitors before proposing a role-based redesign.",
    researchInsights: [
      "PO creation caused form fatigue. Most fields on the request form were irrelevant to any given request, so the fix was smart defaults and progressive disclosure instead of one static form.",
      "Approval bottlenecks were common because the system gave no clear notification when a request needed action, so the fix paired mobile and email alerts directly to the approval step.",
      "Reporting was entirely manual. One finance officer described spending hours after the fact fixing errors in procurement reports, since nothing caught them upfront.",
      "A single PO could sit in approvals for over a week with no visibility into where in the chain it was stuck.",
      "Teams defaulted back to legacy manual methods anyway, because the existing digital workflow felt more complex to navigate than the paper process it was meant to replace.",
      "A competitive audit against Zoho, Tally, and Odoo confirmed the gap was structural: the existing ERP needed 6 or more manual approval steps against 3 to 5 elsewhere, with no real-time inventory sync at all.",
    ],
    currentFlow: {
      title: "How it worked before",
      steps: [
        { label: "User creates Purchase Request", detail: "Starting point, unchanged in the redesign" },
        { label: "Manual Approvals (multiple managers)", detail: "Routed by email, with no visibility into where a request was stuck" },
        { label: "Procurement Team Validation", detail: "Manually cross-checked against vendor and budget records" },
        { label: "Inventory Check (separate system, not real-time)", detail: "Required switching tools, and stock data could already be stale" },
        { label: "Finance Approval", detail: "A second manual review, largely duplicating procurement's checks" },
        { label: "Vendor Confirmation & Report (manual entry)", detail: "Report built by hand after the fact, slow and error-prone" },
      ],
    },
    processSteps: ["Research", "Iterate", "Design", "Test"],

    solution:
      "The redesign kept the same starting point, a purchase request, but replaced every manual handoff after it. Procurement and inventory now sync in real time over REST APIs. Finance validation runs on rule-based checks against vendor compliance, budget thresholds, and tax codes automatically, so finance only reviews the exceptions the system actually flags. Reporting became a live dashboard instead of a manual document. And each of the three roles, procurement manager, finance officer, vendor, got its own dashboard built around what that role actually does daily, instead of one generic interface everyone had to filter through.",
    proposedFlow: {
      title: "What I changed it to",
      steps: [
        { label: "User creates Purchase Request", detail: "Same starting point, everything downstream changes" },
        { label: "Procurement ↔ Inventory Sync", detail: "Integrated via MCP for efficient data exchange, with REST APIs exposed from both modules" },
        { label: "Procurement Team Validation", detail: "Checked against live, synced inventory instead of a separate, stale system" },
        { label: "Finance Auto-Validation", detail: "Rule-based API checks validate vendor compliance, budget thresholds, and tax codes automatically; finance only reviews flagged exceptions" },
        { label: "Vendor Confirmation", detail: "Same confirmation step, now feeding a connected reporting layer instead of a manual report" },
        { label: "Automated Reporting Dashboard", detail: "Live dashboard pulling from procurement and inventory data via API, tracking cycle time, vendor SLAs, and error rates" },
      ],
    },
    screens: [
      {
        title: "Finance Dashboard",
        goal: "Give the procurement and finance team visibility into budgets, approvals, and risk at a glance.",
        decisions: [
          "A role-based dashboard shows only finance-relevant data, budget, approvals, risks, vendors, so nothing else adds clutter.",
          "A budget utilization donut gives a quick visual read on spend percentage across departments.",
          "A monthly spend trends chart supports long-term financial oversight instead of static, backward-looking reports.",
          "A top vendors list ranks by reliability and spend, to guide sourcing decisions strategically.",
          "A compliance and risk alerts panel surfaces SLA breaches, duplicate invoices, and missing documentation early.",
        ],
        images: ["/projects/procurement-erp/finance-dashboard.webp"],
      },
      {
        title: "Procurement Hub",
        goal: "Give a procurement manager a central hub for managing requests, approvals, and vendor health.",
        decisions: [
          "KPI cards at the top, pending approvals, POs this month, spend YTD, give a workload snapshot without opening a single request.",
          "A visual approval workflow tracker shows exactly where a request is stuck, for transparency across the team.",
          "A pending approvals table supports multi-filter and inline actions, approve, reject, escalate, to speed up task completion.",
          "A vendor spotlight card surfaces reliability and spend insight to support strategic sourcing.",
          "An in-dashboard feedback widget closes the loop, capturing user sentiment without a separate survey tool.",
        ],
        images: ["/projects/procurement-erp/procurement-hub-v2.webp"],
      },
      {
        title: "Vendor Portal",
        goal: "Empower vendors to self-serve orders, invoices, and performance, instead of relying on procurement for every update.",
        decisions: [
          "Vendor-focused KPIs, revenue YTD, on-time delivery, quality rating, give vendors direct performance transparency.",
          "Clear status labels, In Production, Delivered, Ready to Ship, on every PO cut back-and-forth with procurement.",
          "Pending invoices are separated by state, Submitted, Approved, Processing, for payment clarity.",
          "Prominent action shortcuts, Submit Invoice, Ship, Update, point a vendor straight to their next step.",
        ],
        images: ["/projects/procurement-erp/vendor-portal.webp"],
      },
      {
        title: "Creating a Purchase Order",
        goal: "Simplify a complex, multi-approver process into clear, trustable steps.",
        decisions: [
          "A stepper breaks the request into digestible stages: Details, Items & Vendors, Compliance, Submit.",
          "A compliance checklist gives clear visual flags, preferred vendor, policy compliance, that build confidence before submitting.",
          "Quick tips and autosaved drafts sit in a side panel, reducing error and rework.",
          "An approval flow preview shows exactly who needs to approve and the expected SLA, setting clear expectations upfront.",
        ],
        images: [
          "/projects/procurement-erp/create-po-items.webp",
          "/projects/procurement-erp/create-po-review-submit.webp",
        ],
      },
      {
        title: "Spend Analytics",
        goal: "Track spending, budgets, vendors, and cost-saving opportunities in one place.",
        decisions: [
          "KPI summary cards, spend, budget utilization, active vendors, cost savings, enable a quick health check before digging into detail.",
          "A quarterly departmental spend chart makes it easy to spot high-spend or underutilized areas at a glance.",
          "A top vendors by spend list ranks by performance and risk, not just order volume.",
          "Cost-saving opportunity cards show potential savings, effort, and impact together, so prioritization doesn't need a separate spreadsheet.",
        ],
        images: ["/projects/procurement-erp/spend-analytics.webp"],
      },
      {
        title: "Invoice Management",
        goal: "Manage invoices, approvals, payments, and disputes from a single, searchable view.",
        decisions: [
          "A KPI header, total invoices, pending approval, overdue, gives instant operational status without opening the table.",
          "A recent activity feed keeps everyone aware of the latest invoice actions across the team.",
          "Color-coded status pills distinguish Approved, Pending, Overdue, and Disputed at a glance, reducing cognitive load.",
          "Inline action icons, approve, reject, view, shorten the decision-making loop directly from the table.",
        ],
        images: ["/projects/procurement-erp/invoice-management.webp"],
      },
      {
        title: "Role-Based Information Architecture",
        goal: "Give each role, procurement manager, finance officer, vendor, its own dashboard structure instead of one generic menu everyone has to filter through.",
        decisions: [
          "Each dashboard's IA mirrors that role's actual job: a vendor sees Orders and Invoices first, a finance officer sees Budget Allocation and Reports & Analytics first.",
          "Shared sections, like Invoices or Purchase Orders, stay in familiar top-level positions across roles, so switching context between dashboards doesn't mean relearning navigation.",
        ],
        images: [],
        diagram: "roleArchitecture",
      },
    ],
    distributions: [
      {
        title: "Procurement time by stage, before redesign",
        unit: "hrs",
        source: "Case study data",
        items: [
          { label: "Ticket Creation", value: 1.5 },
          { label: "Approval Cycle", value: 5.25 },
          { label: "PO Generation", value: 3.1 },
          { label: "Vendor Confirmation", value: 4.1 },
          { label: "Payment Processing", value: 4.4 },
        ],
      },
      {
        title: "Procurement time by stage, after redesign",
        unit: "hrs",
        source: "Case study data",
        items: [
          { label: "Ticket Creation", value: 1.0 },
          { label: "Approval Cycle", value: 3.2 },
          { label: "PO Generation", value: 1.05 },
          { label: "Vendor Confirmation", value: 2.0 },
          { label: "Payment Processing", value: 2.0 },
        ],
      },
    ],

    outcome:
      "The redesign cut order procurement time by 38% and strengthened SLA compliance across the board. Approval cycle time, the single biggest bottleneck in the old system, dropped from roughly 5.25 hours to 3.2 hours per request, and every stage from ticket creation to payment processing got faster once the process stopped depending on manual handoffs between disconnected tools.",
    metrics: [
      {
        title: "Approval Cycle Time",
        unit: "hrs",
        illustrative: false,
        source: "Case study results",
        points: [
          { label: "Before", value: 5.25 },
          { label: "After", value: 3.2 },
        ],
      },
    ],
    scaleStats: [
      { label: "Faster order processing", value: "38%" },
      { label: "Core decision points", value: "6 → 3" },
      { label: "New approval SLA", value: "24–48 hrs" },
    ],
    reflection:
      "This project reinforced that enterprise workflow design isn't about adding features, it's about removing friction between people who already agree on the goal. Role-based dashboards, real-time inventory sync, and automated compliance checks did more for adoption than any single new capability would have. What's next is layering in AI-driven insights and expanding mobile access, on a foundation that already trusts its own data.",
  },
  {
    slug: "bjak-coverage-guardian",
    title: "Insurance AI Coverage Guardian",
    tagline:
      "Designing an AI that steps in before a user picks a cheaper insurance plan that quietly drops the coverage they actually need.",
    clientType: "B2C",
    platform: ["Mobile"],
    domains: ["AI", "Fintech"],
    year: "2025",
    role: "Product Designer",
    team: "1 Product Designer, 1 Product Manager, 1 Front-End Engineer, 1 Backend Engineer",
    timeframe: "Jan 2025 to Feb 2025 (4 weeks)",
    tools: ["Figma", "Jira", "Notion", "Mixpanel"],
    cover: { from: "#0ea5e9", to: "#0c2d48" },
    thumbnailGlyph: "guardian",
    heroIllustration: "guardian",

    overview:
      "BJAK is an insurance comparison platform used by 6M+ people to shop for car and other insurance. This was a self-directed concept: an AI Coverage Guardian built into BJAK's existing comparison flow, one that learns basic risk context upfront, recommends a plan instead of just the cheapest one, and steps in with the real cost of a coverage gap before a user picks it. No new app, no new habit, just a smarter layer inside the flow people already use.",

    businessContext:
      "BJAK's comparison list is sorted by price by default, which is exactly what pushes people toward the cheapest plan on the panel, the one most likely to be missing coverage they'll need later. Since this lives inside an existing flow rather than a new product, it was also a plausible first step toward BJAK's own stated direction, an AI Finance Agent, without asking users to learn anything new.",

    problemStatement:
      "People pick the cheapest insurance plan without realizing they're dropping coverage they actually need, and it happens again at every renewal. Price is the variable comparison tools optimize for, and price is exactly what hides risk.",
    problemDiagnosis: {
      how: "Comparison lists sort by price by default, so the cheapest plan is also the most visible one, regardless of what it excludes.",
      what: "Users drop coverage, like flood protection, without realizing it, because the gap is buried behind a details link most people never open.",
      when: "The mistake repeats at every renewal, since nothing in the flow re-checks whether the cheap plan still makes sense a year later.",
      why: "Coverage gaps are invisible until a claim is denied, by which point the small premium saved is irrelevant next to the payout that never comes.",
    },

    process:
      "This began as a self-directed concept exploration: how could BJAK intervene, inside a flow its 6M+ users already use, at the exact moment someone chooses a cheaper plan over a safer one. I worked backward from that single moment to design the rest of the flow around it.",
    researchInsights: [
      "Price sorting is the default view in most comparison tools, and price is the variable that actively hides risk, so any fix had to work within that same sorted list, not replace it.",
      "A flagged coverage gap only changes behavior if it's shown in the same unit as the decision, money lost versus money saved, not an abstract risk score.",
      "Trust breaks the moment an AI recommendation feels unexplainable, so every recommendation needed a visible reason the user could open on request, not just accept or ignore.",
      "Coverage quietly erodes at renewal, not just at first purchase, so the intervention couldn't stop at checkout, it had to keep watching afterward.",
    ],
    currentFlow: {
      title: "How a comparison flow like this typically works",
      steps: [
        { label: "Plans sorted by price", detail: "The cheapest plan sits at the top by default" },
        { label: "User picks the cheapest option", detail: "Coverage details sit behind a link most people skip" },
        { label: "Policy purchased", detail: "No check for what the price actually excludes" },
        { label: "Renewal arrives", detail: "Same price-sorted list, same blind spot, repeats" },
      ],
    },
    processSteps: ["Problem Framing", "Concept Sketching", "AI Interaction Design", "Prototype"],

    solution:
      "The AI Coverage Guardian sits inside BJAK's existing comparison flow. It learns basic risk context upfront, like where a car is usually parked, and flags things like flood exposure before a single quote is even shown. It recommends a plan, not just the cheapest one, with a one-line reason why. If a user leans toward a plan missing key coverage, it steps in and shows the real cost of that gap next to the small price of closing it. Its reasoning is always visible on request, so it never feels like a black box. And it keeps watching after purchase, flagging better deals or price hikes before renewal, automatically, instead of leaving the user to notice on their own.",
    proposedFlow: {
      title: "How the AI Coverage Guardian works",
      steps: [
        { label: "User answers 2 quick questions", detail: "Location and usage, takes under 15 seconds" },
        { label: "AI checks flood risk & ranks plans", detail: "Cross-references open flood data and 16 policy documents behind the scenes" },
        { label: "User leans toward a cheaper plan", detail: "The exact moment price alone would normally decide it" },
        { label: "AI shows the trade-off", detail: "The concrete cost of the gap, not just a warning icon" },
        { label: "User confirms a plan", detail: "Coverage Guardian stays active, watching for renewal and price changes" },
      ],
    },
    screens: [
      {
        title: "Intake: Two Quick Questions",
        goal: "Get enough context to protect the user before they've even seen a single quote, without it feeling like a form.",
        decisions: [
          "Asks only two questions, parking location and usage, so the flow stays under 15 seconds before quotes even load.",
          "Surfaces real flood-event data for that exact postcode immediately, so the AI's involvement is visible from the very first screen, not hidden until later.",
        ],
        images: ["/projects/bjak-coverage-guardian/intakes.webp"],
        layout: "phone",
      },
      {
        title: "Comparison, with an AI Pick",
        goal: "Replace a list sorted by price alone with one that leads with the plan that actually matches the user's risk.",
        decisions: [
          "The AI pick sits above the sorted list with a match percentage and a one-line reason, not a vague \"recommended\" badge.",
          "The rest of the panel stays fully visible and price-sorted underneath, so the AI never removes the user's ability to just pick the cheapest plan if that's still what they want.",
        ],
        images: ["/projects/bjak-coverage-guardian/compare-ai-pick.webp"],
        layout: "phone",
      },
      {
        title: "The Intervention",
        goal: "Interrupt at the exact moment price would otherwise win, with the real cost of the gap, not a generic warning.",
        decisions: [
          "States the trade-off in the same unit as the decision, RM38,000 out of pocket versus RM45 a year, not an abstract risk score.",
          "Keeps \"keep this plan without flood cover\" as a real, equally-sized button, since the goal is an informed choice, not a forced one.",
        ],
        images: ["/projects/bjak-coverage-guardian/ai-intervention.webp"],
        layout: "phone",
      },
      {
        title: "How the AI Decided This",
        goal: "Make the recommendation explainable on request, so it never feels like a black box.",
        decisions: [
          "Shows the exact three sources behind the flag: postcode flood data, all 16 policy documents cross-checked, and the user's own stated usage.",
          "States plainly that AI decisions are never final and can be overridden, so trust doesn't depend on the AI being right every time.",
        ],
        images: ["/projects/bjak-coverage-guardian/how-ai-decides.webp"],
        layout: "phone",
      },
      {
        title: "Confirmation",
        goal: "Lock in exactly what was chosen and hand off to ongoing protection, not just a receipt.",
        decisions: [
          "Shows premium, coverage type, and flood status together in one plain summary, the three things the whole flow was building toward.",
          "Introduces Coverage Guardian's ongoing role, renewal reminders, auto-recompare, move or usage change detection, right at the moment trust is highest.",
        ],
        images: ["/projects/bjak-coverage-guardian/confirmation.webp"],
        layout: "phone",
      },
      {
        title: "Dashboard: Guardian Watching",
        goal: "Prove the AI's value didn't end at purchase, with something it already caught.",
        decisions: [
          "Leads with an active save (a lower-priced match found at renewal) instead of a static policy list, so the dashboard's first impression is value, not admin.",
          "Frames Guardian as always-on, \"watching 24/7\", rather than a one-time recommendation, matching the ongoing behavior the concept is built around.",
        ],
        images: ["/projects/bjak-coverage-guardian/dashboard.webp"],
        layout: "phone",
      },
    ],
    distributions: [
      {
        title: "Annual premiums shown in the comparison panel",
        unit: "RM/yr",
        source: "the concept design",
        items: [
          { label: "Pacific & Orient", value: 517, detail: "No flood cover" },
          { label: "Allianz", value: 767, detail: "No flood cover" },
          { label: "Zurich General", value: 797, detail: "No flood cover" },
          { label: "Etiqa Takaful (AI pick)", value: 812, detail: "Flood cover, matches usage" },
          { label: "Takaful Malaysia", value: 901, detail: "Flood cover" },
        ],
      },
    ],

    outcome:
      "This was a self-directed concept, not a shipped feature, so there's no live usage data behind it. The estimate below is my own modeled projection of what closing BJAK's coverage gap could look like, grounded in how directly the AI Coverage Guardian targets the exact moment, a price-sorted comparison, where underinsurance actually happens.",
    metrics: [
      {
        title: "Underinsurance at renewal (modeled estimate)",
        unit: "%",
        illustrative: true,
        points: [
          { label: "Price-sorted flow (typical)", value: 35 },
          { label: "With Coverage Guardian", value: 10 },
        ],
      },
    ],
    scaleStats: [
      { label: "BJAK users this flow could reach", value: "6M+" },
      { label: "Independent sources per recommendation", value: "3" },
      { label: "Policy documents cross-checked", value: "16" },
    ],
    reflection:
      "This was as much a product-thinking exercise as a UI one. The real design decision wasn't any single screen, it was choosing to intervene at the exact moment price would otherwise win, inside a flow people already trust, instead of asking BJAK's users to adopt something new. If I extended this, the next step would be validating the flood-data-trust assumption with real users before ever shipping a single screen.",
  },
  {
    slug: "study-abroad-hub",
    title: "AdmitKard: Study Abroad Retention Hub",
    tagline:
      "Designing a gamified, community-led hub that keeps students engaged through an 8+ month study-abroad journey instead of losing them to silence between milestones.",
    clientType: "B2C",
    platform: ["Mobile"],
    domains: ["Education"],
    year: "2024",
    role: "Product Designer",
    team: "1 Product Designer, 1 Product Manager, 1 Developer",
    timeframe: "Oct 2024 to Nov 2024 (3 weeks)",
    tools: ["Figma", "Jira", "Notion"],
    cover: { from: "#8b5cf6", to: "#2e1065" },
    thumbnailGlyph: "journey",
    heroIllustration: "journey",

    overview:
      "AdmitKard helps students apply to study abroad, a process that typically spans 8+ months of applications, visas, and waiting. I designed a centralised, gamified hub that replaces that silence with real-time updates, peer community, and a countdown to departure, so students stay engaged instead of disappearing between milestones.",

    businessContext:
      "Students disengage after submitting an application, since there's often a long gap before the next real step. That disengagement is a retention problem for AdmitKard directly: a student who stops opening the app is a student who stops trusting AdmitKard to get them there, and may drop out of the process entirely.",

    problemStatement:
      "Students applying to study abroad face a long, complex journey, often spanning 8+ months, managed across scattered emails, consultants, and platforms, with long gaps between steps and no easy way to connect with anyone going through the same thing.",
    problemDiagnosis: {
      how: "Application status, documents, and deadlines lived across email, consultant calls, and separate platforms, with no single place to track any of it.",
      what: "Students disengaged in the gaps between milestones, missed deadlines, and had no way to connect with peers or alumni for guidance.",
      when: "The risk was highest during the long wait after submission, when months could pass with no visible progress or reason to check back in.",
      why: "Every gap, in updates, in organisation, in peer support, in financial clarity, chipped away at the same thing: a student's confidence that the process was actually moving.",
    },

    process:
      "I mapped the full 8+ month journey against where students actually dropped off, then grouped the pain points into four systems worth designing, instead of four separate features bolted onto the existing app.",
    researchInsights: [
      "Students disengage right after submitting an application, since the process gives them nothing to do or check for months at a time.",
      "Application and visa status updates lived in email and consultant calls, so students had no single place to check where things actually stood.",
      "Deadlines, documents, and tasks were split across multiple platforms, which is exactly the kind of overhead that causes missed deadlines and wrong uploads.",
      "Students going through the same process had no easy way to find each other, leaving them to navigate visas, housing, and culture shock alone.",
      "Scholarship, cost-of-living, and career information existed somewhere, just not inside the one flow students were already using to track their application.",
    ],
    currentFlow: {
      title: "How it worked before",
      steps: [
        { label: "Application submitted", detail: "The last real interaction for months at a time" },
        { label: "Waits for updates by email or consultant", detail: "Delayed, inconsistent, and easy to miss" },
        { label: "Manages deadlines across platforms", detail: "No single source of truth for tasks or documents" },
        { label: "Prepares for departure alone", detail: "No easy way to find peers going through the same process" },
      ],
    },
    processSteps: ["Research", "Iterate", "Design", "Test"],

    solution:
      "The redesign centres on four systems that replace silence with momentum. Smart nudges send personalised content and real-time application updates, so there's always a reason to open the app. Live application and visa tracking replaces scattered emails with one visible timeline. An in-app community, built like a Q&A forum, lets students ask, answer, and upvote alongside peers and alumni headed to the same country or university. And a departure countdown widget turns the final stretch into daily, concrete prep tasks instead of anxious waiting.",
    proposedFlow: {
      title: "What I changed it to",
      steps: [
        { label: "Smart nudges keep the student engaged", detail: "Personalised content plus real-time updates instead of silence" },
        { label: "Application & visa status tracked live", detail: "One tracking timeline instead of scattered emails" },
        { label: "Connects in the in-app community", detail: "Ask, answer, and upvote with peers and alumni headed to the same place" },
        { label: "Countdown widget guides final prep", detail: "Daily tasks and reminders counting down to departure" },
      ],
    },
    screens: [
      {
        title: "Discover: Content Recommendations",
        goal: "Give students a reason to open the app between milestones, not just when something is due.",
        decisions: [
          "Personalised content recommendations, cultural, academic, financial, build a knowledge repository students can explore on their own schedule.",
          "View counts and save icons on each card borrow familiar social patterns, so exploring content feels like browsing, not homework.",
        ],
        images: ["/projects/study-abroad-hub/discover-feed.webp"],
        layout: "phone",
      },
      {
        title: "Article: Local, First-Hand Insight",
        goal: "Make preparation content feel like advice from someone who's been there, not a generic guide.",
        decisions: [
          "Articles are attributed to a named author, not the platform, so the tone reads as peer insight rather than official guidance.",
          "A full article opens straight from the nudge that started the flow, keeping the path from prompt to payoff short.",
        ],
        images: ["/projects/study-abroad-hub/article-detail.webp"],
        layout: "phone",
      },
      {
        title: "Track Application & Visa Status",
        goal: "Replace scattered emails and consultant calls with one visible source of truth.",
        decisions: [
          "An expected-decision date and status pill sit at the top, answering the one question every student has before anything else.",
          "A step-by-step tracking timeline shows exactly where the application is and what caused any delay, like a discrepancy flagged by the review team.",
          "Document requests carry their own countdown and a direct upload action, instead of a separate email to dig up later.",
        ],
        images: ["/projects/study-abroad-hub/track-application.webp"],
        layout: "phone",
      },
      {
        title: "In-App Community: Ask & Answer",
        goal: "Give students an easy way to find others going through the exact same process.",
        decisions: [
          "Questions surface with answer counts and recency, so students can judge activity before reading, not just after.",
          "A follow action sits on each person, not just each question, since the goal is ongoing peer connections, not a one-off answer.",
        ],
        images: ["/projects/study-abroad-hub/community-feed.webp"],
        layout: "phone",
      },
      {
        title: "Answer Thread: Upvoted Insight",
        goal: "Let the community itself sort trustworthy answers from noise.",
        decisions: [
          "Upvotes are shown at the answer level, not just the question, so the most credible response surfaces without a moderator.",
          "Anyone can answer directly in the thread, keeping first-hand insight inside the app instead of scattered across forums and group chats.",
        ],
        images: ["/projects/study-abroad-hub/answer-thread.webp"],
        layout: "phone",
      },
      {
        title: "Departure Countdown Widget",
        goal: "Keep momentum in the final stretch, when waiting turns into disengagement.",
        decisions: [
          "A live countdown reframes the wait before departure as a deadline to prepare for, not empty time.",
          "Each card carries one concrete next action, like a passport reminder or a financial document deadline, instead of generic advice.",
        ],
        images: ["/projects/study-abroad-hub/widget-cards.webp"],
      },
    ],
    distributions: [
      {
        title: "Article engagement shown in the discover feed",
        unit: " views",
        source: "the concept design",
        items: [
          { label: "London on a Budget", value: 789 },
          { label: "Discover Hidden Spots", value: 429 },
          { label: "Student Life in London", value: 312 },
          { label: "Cultural Immersion", value: 234 },
          { label: "Must-Visit Landmarks", value: 120 },
        ],
      },
    ],

    outcome:
      "This was designed end-to-end for AdmitKard's real application journey, but I don't have live retention numbers to report. The estimate below is my own modeled projection of what a centralised, gamified hub could do for engagement, grounded in exactly which disengagement point, the multi-month silence after submission, the redesign targets directly.",
    metrics: [
      {
        title: "Students still active by month 3 of the application (modeled estimate)",
        unit: "%",
        illustrative: true,
        points: [
          { label: "Typical scattered flow", value: 45 },
          { label: "With centralised hub", value: 78 },
        ],
      },
    ],
    scaleStats: [
      { label: "Typical application journey", value: "8+ months" },
      { label: "Core features designed", value: "4" },
      { label: "Pain points addressed", value: "5" },
    ],
    reflection:
      "The insight that shaped everything here was that students don't disengage because the process is hard, they disengage because it goes quiet. Nudges, live tracking, community, and a countdown widget are four different features, but they're all solving the same problem: giving a student a reason to open the app on the days nothing is officially due. If I extended this, the next step would be instrumenting actual engagement and retention, so the modeled estimate here could be replaced with something measured.",
  },
  {
    slug: "arrcoat-colour-explorer",
    title: "Arrcoat: Colour & Finish Explorer",
    tagline:
      "Turning a 200+ colour catalog spread across three different categorization schemes into one browsing tool that works the same on a showroom desktop and a phone on a site visit.",
    clientType: "B2C",
    platform: ["Web", "Mobile"],
    domains: ["Retail"],
    year: "2024",
    role: "Product Designer",
    team: "Solo project, design and front-end build",
    timeframe: "2024, full site design and build",
    tools: ["Figma"],
    cover: { from: "#d9a441", to: "#241a0d" },
    thumbnailGlyph: "palette",
    heroIllustration: "palette",
    liveUrl: "https://www.arrcoat.com/colours/",

    overview:
      "Arrcoat Surface makes eco-friendly lime plaster and surface finishes, sold across three product lines with over 200 colours between them. I designed and built their site end to end, and the hardest problem in it was the colour catalog itself: three product lines, three genuinely different ways of organising colour, and roughly ten separate finish products that each colour needed to connect to. I designed a single browsing tool that respects all three structures at once, and works the same on a desktop at a showroom as it does on a phone at a site visit.",

    businessContext:
      "For a surface-finish brand, colour and texture are the entire purchase decision, and most of that decision has always happened by touching a physical swatch in a showroom. Moving that browsing experience online at this scale, three product lines, over 200 colours, up to ten finish variations each, risked becoming either an overwhelming wall of colour or an oversimplified filter that lost the nuance real customers, homeowners and architects, actually needed.",

    problemStatement:
      "Arrcoat's three product lines each organise colour in a genuinely different way. Marbleised Lime Plaster's 72 colours group by literal hue family (Beige, Greys, Creams, Brown, Blues & Greens). Versatile Lime Plaster's 72 colours use seasonal colour-analysis palettes (Cool Summer, Soft Autumn, Light Spring, Dark Spring, Dark Winter, Dark Autumn), a convention borrowed from personal styling, not construction materials. Pearl's 65 colours have no categorisation at all, just sequential naming. On top of that, every one of those 209 colours only ships in a specific subset of Arrcoat's roughly ten finish products, so a colour choice and a finish choice always had to be made together, not as two separate lookups.",
    problemDiagnosis: {
      how: "Each product line already had its own real categorisation logic, hue families, seasonal palettes, or none at all, and every colour also needed to connect to whichever finish products actually carry it.",
      what: "A single filter system couldn't serve three different mental models at once without flattening two of them into a structure that didn't actually belong to them.",
      when: "The catalog mattered most away from a desk, architects and homeowners comparing finishes on a phone during a site visit or a trade event, not just browsing from a chair.",
      why: "For a surface-finish brand, the colour catalog is effectively the storefront. A catalog that's confusing to browse is a catalog that costs sales, directly.",
    },

    process:
      "Instead of designing one filter system and forcing all three product lines to fit it, I worked from how Arrcoat's own team already organised each line's colours, and translated that structure directly into the browsing experience: one tab per product line, each rendering its native categories instead of a shared one.",
    researchInsights: [
      "Marbleised Lime Plaster's colours already had a real, working hue-family grouping. Reusing it directly meant customers never had to learn a system Arrcoat hadn't already validated in its own swatch books.",
      "Versatile Lime Plaster's seasonal palette naming is a styling convention, not a construction one, so the category headings needed to read clearly as palettes on their own, with no extra explanation the format doesn't need.",
      "Pearl's 65 shades had no natural grouping. Forcing categories onto it would have meant inventing structure that didn't exist, so it stays a flat, browsable list instead.",
      "Colour and finish are chosen together, not separately, so every swatch detail view needed to show exactly which finish products that colour is actually available in, right where the colour itself is being decided.",
      "A meaningful share of real usage happens in the field, on a phone, comparing finishes on-site rather than at a desk, so the layout needed to hold up one-handed, not just at a comfortable desktop width.",
    ],
    currentFlow: {
      title: "How colour was chosen before",
      steps: [
        { label: "Flip through a printed swatch book or PDF", detail: "One product line at a time, with no way to search or compare" },
        { label: "Call or visit the showroom", detail: "To confirm which finish products a specific colour actually ships in" },
        { label: "See the real texture only in person", detail: "No way to preview how a colour looks across different finishes remotely" },
      ],
    },
    processSteps: ["Audit", "Structure", "Design", "Build"],

    solution:
      "The explorer is three tabs, one per product line, and each tab renders that line's own real category structure instead of one filter system stretched across all three: hue families for Marbleised, seasonal palettes for Versatile, a flat list for Pearl. Tapping any swatch opens a detail view that pairs the actual texture photo with a 'Products Available' list of the specific finishes that colour ships in, and picking a different finish re-renders the swatch photo itself, so customers see the real texture difference, not just a label. Add to Cart sits right there, so choosing a colour and a finish ends in one action. The whole thing was built responsively from the start, collapsing to a two-column grid and a stacked modal on mobile, since a real share of the actual use happens on-site, on a phone.",
    proposedFlow: {
      title: "What I designed instead",
      steps: [
        { label: "Pick a product line", detail: "Each tab keeps that line's own real category structure, not one forced system" },
        { label: "Browse by category, or scan the flat list", detail: "Hue families, seasonal palettes, or Pearl's flat, generic list, whichever the line actually uses" },
        { label: "Open a swatch to see it by finish", detail: "The texture photo itself updates for each finish product the colour ships in" },
        { label: "Add straight to cart", detail: "Colour and finish are chosen together, in one action" },
      ],
    },
    screens: [
      {
        title: "One Shell, Two Different Categorisation Logics",
        goal: "Let Marbleised and Versatile each browse using their own real category system, without customers noticing they're using two different structures.",
        decisions: [
          "Marbleised keeps its literal hue-family grouping (Beige, Greys, Creams, Brown, Blues & Greens), reusing a structure Arrcoat's own team had already validated instead of inventing a new one.",
          "Versatile's seasonal palette names (Cool Summer, Soft Autumn) are unusual for a construction-materials catalog, so they're presented as plain section headings, with no extra explanation the format doesn't need.",
          "Switching product-line tabs is instant and stateless, so moving between two different categorisation logics never feels like leaving one tool and entering another.",
        ],
        images: [
          "/projects/arrcoat-colour-explorer/marbleised-beige.webp",
          "/projects/arrcoat-colour-explorer/versatile-seasons.webp",
        ],
        imageLabels: ["Marbleised Lime Plaster, hue families", "Versatile Lime Plaster, seasonal palettes"],
      },
      {
        title: "The Swatch Itself Changes With the Finish",
        goal: "Show customers the real texture difference between finishes on the same colour, not just a text label.",
        decisions: [
          "Selecting a different finish in 'Products Available' re-renders the swatch photo to that finish's actual texture, so the visual difference between, say, Concrete and Travertine is seen directly, not described.",
          "Add to Cart stays anchored to the swatch view itself, so colour and finish are decided and actioned together instead of a separate product lookup afterward.",
        ],
        images: [
          "/projects/arrcoat-colour-explorer/swatch-concrete.webp",
          "/projects/arrcoat-colour-explorer/swatch-travertine.webp",
          "/projects/arrcoat-colour-explorer/swatch-smooth.webp",
        ],
        imageLabels: ["Concrete finish selected", "Travertine finish selected", "Smooth finish selected"],
        layout: "compare",
      },
      {
        title: "Responsive, From a Showroom Desktop to a Site-Visit Phone",
        goal: "Keep the same browsing logic intact when the screen shrinks to one hand, since a real share of use happens on-site.",
        decisions: [
          "Product-line tabs stack full-width on mobile instead of compressing into a cramped inline row.",
          "The swatch grid drops from six columns to two, keeping each swatch large enough to judge colour accurately on a small screen.",
          "The finish-picker modal restacks from side-by-side to vertical, texture photo on top, finish list below, so it works one-thumb, right down to the same texture-swap behaviour as desktop.",
        ],
        images: [
          "/projects/arrcoat-colour-explorer/mobile-browse.webp",
          "/projects/arrcoat-colour-explorer/mobile-swatch-concrete.webp",
          "/projects/arrcoat-colour-explorer/mobile-swatch-travertine.webp",
        ],
        imageLabels: ["Stacked tabs, two-column grid", "Concrete finish selected", "Travertine finish selected"],
        layout: "phone",
      },
    ],
    distributions: [
      {
        title: "Colours catalogued per product line",
        unit: " colours",
        source: "the live catalog at arrcoat.com",
        items: [
          { label: "Marbleised Lime Plaster", value: 72 },
          { label: "Versatile Lime Plaster", value: 72 },
          { label: "Pearl", value: 65 },
        ],
      },
    ],

    outcome:
      "This shipped as part of Arrcoat's live site, and I don't have analytics access to report hard engagement numbers from it. What I can report directly is qualitative: the catalog was demoed at trade events and used by the Arrcoat team with customers in person, and the consistent feedback was that the colour and finish combinations, over 200 colours across three genuinely different structures, finally felt easy to browse instead of overwhelming. Given the scale of the catalog it replaced a printed swatch book for, that reaction was the actual goal.",
    scaleStats: [
      { label: "Colours catalogued", value: "209" },
      { label: "Product lines organised", value: "3" },
      { label: "Finish products per colour", value: "Up to 10" },
      { label: "Platforms designed", value: "Web & Mobile" },
    ],
    reflection:
      "The real problem here was never 'how do we filter 200 colours,' it was that three product lines already had three legitimate, different ways of organising colour, and the honest answer was to keep all three rather than flatten them into one system for the sake of consistency. The texture swap on the swatch view came from the same instinct: colour and finish aren't really separate decisions, so the interface shouldn't treat them as one.",
  },
  {
    slug: "project-two",
    title: "Project Two",
    tagline: "A one-line pitch goes here.",
    clientType: "B2C",
    platform: ["Mobile"],
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
    platform: ["Mobile"],
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
    platform: ["Web"],
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
