const cases = [
  ["Flagship · Product design", "AI Video Solution Generator", "A faculty-first product definition covering discovery, strategy, PRD, source-grounded architecture, evaluation, instrumentation, and human approval. Implementation source and production outcomes are not included in this public repository."],
  ["Secondary · Evidence-safe profile", "NGMC CheckIn / Workforce Operations", "A role-aware full-stack workspace spanning attendance, timers, projects, approvals, reporting, and productivity views. The portfolio omits private operational details and unverified adoption."],
  ["Supporting · Working code", "Leaderboard Generator", "A local Python workflow that transforms marks spreadsheets into editable PowerPoint result decks with ranking, tie handling, analytics, presets, and edge-case validation."],
  ["Potential · Evidence pending", "QPG Tagging Automation", "A described taxonomy-constrained, human-approved tagging workflow. Source code was not located, so implementation and productivity claims remain unverified."],
];

export default function CaseStudies() {
  return <div className="shell"><header className="page-head"><p className="eyebrow">Case studies</p><h1>Product work, classified by evidence.</h1><p className="lede">One flagship, one secondary case, one supporting implementation, and one evidence-pending project.</p></header><section className="section">{cases.map(([type, title, text], index) => <article className="case" key={title}><span className="case-number">0{index + 1}</span><div><p className="eyebrow">{type}</p><h2>{title}</h2><p className="lede">{text}</p></div></article>)}</section><section className="section copy"><h2>Evidence standard</h2><p>REAL means a capability is supported by accessible code or documentation; it does not automatically prove adoption or business impact. Simulated learning data is labeled and never presented as a professional result.</p></section></div>;
}
