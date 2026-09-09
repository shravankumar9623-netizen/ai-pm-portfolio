export const capabilities = [
  ["AI Product Strategy", "Connect AI capabilities to a user problem, product outcome, and operating model.", "AI Video Solution Generator strategy and PRD"],
  ["Product Discovery", "Frame workflows, users, pain points, assumptions, and opportunities before building.", "Customer discovery and journey artifacts"],
  ["Experimentation", "Define hypotheses, baselines, signals, and decision rules before interpreting results.", "Experiment design learning artifacts"],
  ["AI Evaluation", "Evaluate quality in context, including usefulness, failure modes, cost, latency, and trust.", "Evaluation framework and decision drills"],
  ["Product Analytics", "Instrument the workflow to see acceptance, rework, completion, and outcome signals.", "Analytics and instrumentation artifacts"],
  ["Workflow Automation", "Remove repetitive work while preserving useful control and exception handling.", "Leaderboard Generator implementation"],
  ["Human-in-the-Loop", "Keep accountable review where quality, context, or trust makes full automation unsafe.", "Faculty-first review workflow design"],
  ["Technical Product Management", "Translate product intent across data, APIs, interfaces, permissions, and delivery.", "Python and TypeScript product code"],
];

export const projects = [
  { category: "Flagship AI product", title: "AI Video Solution Generator", problem: "Make educational content generation reviewable and grounded in approved source material.", decision: "Design human approval into the workflow instead of treating it as an exception.", evidence: "Documented product design" as const, note: "Implementation and production outcomes are not claimed." },
  { category: "Internal product", title: "Workforce Operations Platform", problem: "Bring attendance, work tracking, approvals, and reporting into one role-aware workspace.", decision: "Use permissions and workflow states to support operational accountability.", evidence: "Verified implementation" as const, note: "Public details are intentionally limited; adoption is not claimed." },
  { category: "Automation", title: "Leaderboard Generator", problem: "Turn structured results data into consistent, editable presentation outputs.", decision: "Automate ranking and deck creation while keeping the output editable.", evidence: "Verified implementation" as const, note: "Code supports the capability; business impact is not claimed." },
  { category: "Evidence pending", title: "Question Tagging Automation", problem: "Reduce repetitive taxonomy tagging while protecting classification control.", decision: "Constrain suggestions to an approved taxonomy and require explicit write approval.", evidence: "Evidence pending" as const, note: "Source and productivity outcomes are not verified in this repository." },
];

export const principles = [
  ["01", "Start with the user problem", "AI is a means. The workflow and outcome define whether it is useful."],
  ["02", "Make outcomes measurable", "Define the signal, baseline, and decision rule before calling an experiment successful."],
  ["03", "Treat AI quality as product quality", "Evaluate usefulness and failure modes—not model performance alone."],
  ["04", "Keep humans where trust matters", "Use review and control points deliberately, with clear ownership."],
  ["05", "Instrument the workflow", "Acceptance, rework, latency, cost, and completion reveal where value is created or lost."],
  ["06", "Scale from evidence", "Use observed behavior and explicit trade-offs to decide what to improve next."],
];
