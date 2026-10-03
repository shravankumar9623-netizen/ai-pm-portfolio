export const capabilities = [
  ["AI Product Strategy", "Connect AI capabilities to a real user problem, product outcome, and operating model.", "AI Video Solution Generator strategy and requirements"],
  ["Product Discovery", "Map users, pain points, workflows, constraints, assumptions, and opportunities before building.", "Faculty and operations workflow discovery"],
  ["Experimentation", "Define hypotheses, baselines, signals, and decision rules before interpreting results.", "Experiment-design and validation artifacts"],
  ["AI Evaluation", "Evaluate usefulness, failure modes, grounding, review burden, cost, latency, and trust together.", "AI quality gates and evaluation frameworks"],
  ["Product Analytics", "Instrument acceptance, rework, completion, cost, latency, and outcome signals.", "Analytics and operational reporting workflows"],
  ["Workflow Automation", "Remove repetitive work while preserving control, exceptions, and editable outputs.", "Leaderboard and QPG implementations"],
  ["Human-in-the-Loop", "Keep accountable review where quality, context, or trust makes full automation unsafe.", "Faculty review and explicit write controls"],
  ["Technical Product Management", "Translate product intent across interfaces, data, APIs, permissions, AI services, and delivery.", "Hands-on Python and TypeScript products"],
];

export type EvidenceLabel =
  | "Verified implementation"
  | "Verified product/design"
  | "User-confirmed product"
  | "Conceptual framework";

export const projects: Array<{
  category: string;
  title: string;
  role: string;
  users: string;
  problem: string;
  decision: string;
  evidence: EvidenceLabel;
  contribution: string;
  workflow: string;
  note: string;
  highlights: string[];
  sampleStatus: string;
  samples?: Array<{
    title: string;
    description: string;
    src: string;
    poster: string;
  }>;
}> = [
  {
    category: "Flagship AI product",
    title: "AI Video Solution Generator",
    role: "AI Product Manager",
    users: "Faculty and evaluators",
    problem: "Turn approved academic source material into reviewable video solutions without losing academic control.",
    decision: "Make source grounding, quality gates, and faculty approval first-class workflow states.",
    evidence: "Verified implementation",
    contribution: "Initiated the product; owned discovery, requirements, workflow, UX/UI, AI/model decisions, evaluation, and validation; contributed to implementation.",
    workflow: "Source/question paper → AI processing → extraction and solution work → video generation → faculty review → final output",
    note: "Implementation and ownership are supported. Adoption, model-performance, and business-impact metrics are not claimed.",
    highlights: ["7-stage AI workflow", "Human-in-the-loop review", "AI evaluation"],
    sampleStatus: "3 video samples available",
    samples: [
      {
        title: "Laws of Motion - Question 12",
        description: "Worked physics solution rendered through the educational video workflow.",
        src: "/samples/ai-video-solution/laws-of-motion-question-12.mp4",
        poster: "/samples/ai-video-solution/laws-of-motion-question-12.jpg",
      },
      {
        title: "Set Theory - Solution 02",
        description: "Subset problem presented as a structured, step-by-step video explanation.",
        src: "/samples/ai-video-solution/set-theory-solution-02.mp4",
        poster: "/samples/ai-video-solution/set-theory-solution-02.jpg",
      },
      {
        title: "Set Theory - Solution 03",
        description: "Counting problem presented as a structured, step-by-step video explanation.",
        src: "/samples/ai-video-solution/set-theory-solution-03.mp4",
        poster: "/samples/ai-video-solution/set-theory-solution-03.jpg",
      },
    ],
  },
  {
    category: "AI video sample",
    title: "Concept-Based AI Videos",
    role: "AI Product / Product Design",
    users: "Learners and educators",
    problem: "Use AI-generated visual storytelling to make educational concepts easier to understand.",
    decision: "Structure concept explanations as focused visual narratives while preserving content review before publication.",
    evidence: "User-confirmed product",
    contribution: "Designed the concept-to-video workflow and product presentation for AI-assisted educational explanations.",
    workflow: "Concept selection → explanation structure → visual generation → narration and assembly → content review",
    note: "The workflow is user-confirmed. No public sample, adoption, or outcome metric is currently claimed.",
    highlights: ["Generative AI", "Visual storytelling", "Educational concepts"],
    sampleStatus: "Video sample coming soon",
  },
  {
    category: "Operational product",
    title: "Workforce Operations Platform",
    role: "AI Product Manager",
    users: "Faculty, managers, and DTP users",
    problem: "Unify attendance, time, projects, approvals, reporting, and productivity workflows in one role-aware product.",
    decision: "Use explicit permissions, persistent workflow states, and auditability to support operational trust.",
    evidence: "Verified implementation",
    contribution: "Initiated and defined the product; owned requirements, workflow, UI/UX, data interlinking, AI-related functionality, testing, and validation; contributed to code.",
    workflow: "Authenticate → check in or plan work → track time and tasks → submit or approve → analyze and report",
    note: "Public details are sanitized. No user-count, adoption, cost-saving, or commercial outcome is claimed.",
    highlights: ["Role-based workflows", "Operations analytics", "Testing and validation"],
    sampleStatus: "Sanitized product screenshots coming soon",
  },
  {
    category: "Workflow automation",
    title: "QPG Tagging Automation",
    role: "AI Product Manager",
    users: "DTP and faculty users",
    problem: "Replace one-question-at-a-time ingestion, taxonomy tagging, and video attachment with a controlled bulk workflow.",
    decision: "Constrain AI proposals to approved taxonomy choices and require preview, dry-run, and explicit write approval.",
    evidence: "User-confirmed product",
    contribution: "Designed the complete workflow and UI/UX. Local source, packages, guides, and artifacts support implementation; real use and ownership are user-confirmed.",
    workflow: "DOCX/PDF or spreadsheet → parse and propose → validate and preview → dry run → human WRITE approval",
    note: "Exact dates and quantified productivity outcomes are not claimed. Sensitive questions, taxonomy data, credentials, and internal endpoints are excluded.",
    highlights: ["Controlled taxonomy", "Dry-run validation", "Human write approval"],
    sampleStatus: "Sanitized workflow sample coming soon",
  },
  {
    category: "Analytics automation",
    title: "Leaderboard Generator",
    role: "AI Product Manager",
    users: "Faculty and managers",
    problem: "Convert variable result spreadsheets into consistent, editable presentation outputs with explicit correctness rules.",
    decision: "Automate schema handling, ranking, analytics, and deck creation while keeping outputs editable and data local.",
    evidence: "Verified implementation",
    contribution: "Initiated, designed, and built the Python/Streamlit product, including the workflow, UI/UX, analytics rules, packaging, and validation.",
    workflow: "Spreadsheet → schema confirmation → filters and rules → analytics → editable PowerPoint → validation",
    note: "The implementation is verified. Student data, adoption, and time-saving outcomes are not published.",
    highlights: ["Python and Streamlit", "Ranking and tie handling", "Editable PowerPoint output"],
    sampleStatus: "Sanitized output sample coming soon",
  },
];

export const principles = [
  ["01", "Start with the user problem", "AI is a means. The workflow and outcome define whether it is useful."],
  ["02", "Make outcomes measurable", "Define the signal, baseline, and decision rule before calling an experiment successful."],
  ["03", "Treat AI quality as product quality", "Evaluate usefulness and failure modes—not model performance alone."],
  ["04", "Keep humans where trust matters", "Use review and control points deliberately, with clear ownership."],
  ["05", "Instrument the workflow", "Acceptance, rework, latency, cost, and completion reveal where value is created or lost."],
  ["06", "Scale from evidence", "Use observed behavior and explicit trade-offs to decide what to improve next."],
];
