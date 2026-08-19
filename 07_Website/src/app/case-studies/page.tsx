const stages = [
  ["Discovery", "Problem framing, customer discovery, personas, JTBD, and the educator production journey."],
  ["Strategy", "Product vision, differentiation, competitive analysis, MVP scope, and prioritization."],
  ["Definition", "A complete PRD, user stories, acceptance criteria, functional requirements, and review workflow."],
  ["AI system", "RAG and system architecture, evaluation framework, golden-dataset thinking, and human oversight."],
  ["Delivery", "Experimentation plan, roadmap, go-to-market thinking, risks, and evidence traceability."],
];

export default function CaseStudies() {
  return (
    <div className="shell">
      <header className="page-head"><p className="eyebrow">Case studies</p><h1>AI Educational Video Generator</h1><p className="lede">An education-specific, faculty-first production workflow—not a generic video generator.</p></header>
      <section className="section">
        <div className="section-head"><p className="eyebrow">The opportunity</p><p className="lede">Educators and academic teams currently move through fragmented manual steps to prepare solutions, scripts, narration, annotations, and rendered videos. The proposed experience unifies that flow while keeping review and control with the educator.</p></div>
        {stages.map(([title, description], index) => <article className="case" key={title}><span className="case-number">0{index + 1}</span><div><h2>{title}</h2><p className="lede">{description}</p></div></article>)}
      </section>
      <section className="section copy"><h2>Evidence standard</h2><p>This portfolio does not claim completed experiments or validated commercial outcomes where evidence is not yet available. Numerical outcomes remain targets or hypotheses until tested.</p></section>
    </div>
  );
}
