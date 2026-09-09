import type { Metadata } from "next";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = { title: "Case Studies", description: "Evidence-labeled AI product and workflow automation case studies covering strategy, decisions, evaluation, analytics, and trade-offs." };

const caseSections = [
  ["Problem", "Faculty-facing educational content creation involves source selection, generation, review, correction, and approval—not a single prompt."],
  ["User", "The documented primary user is a faculty member who needs control over academic quality and final approval."],
  ["Insight", "Generation speed alone is not sufficient. Grounding, edit burden, traceability, and reviewer confidence shape product usefulness."],
  ["Product decision", "Use approved source material and make human review a first-class workflow state before output is finalized."],
  ["AI workflow", "Source input → grounded generation → structured artifact → faculty review → revise or approve."],
  ["Evaluation", "Assess groundedness, usefulness, correction effort, failure patterns, latency, and cost as connected product signals."],
  ["Trade-off", "The design accepts less end-to-end automation to preserve accountable review and academic control."],
  ["Learning", "Human-in-the-loop is not merely a safety fallback; in trust-sensitive work, it can be the product architecture."],
];

export default function CaseStudies() {
  return (
    <div className="shell">
      <header className="page-head split-head">
        <div><p className="eyebrow">Case studies</p><p className="section-index">Evidence before claims</p></div>
        <div><h1>Product work framed around decisions—not feature lists.</h1><p className="lede">Each project is labeled by the evidence available. Working code demonstrates capability; it does not automatically prove adoption or impact.</p></div>
      </header>

      <section className="section flagship-detail" id="video-solution">
        <aside className="case-nav" aria-label="Flagship case study sections">
          <p className="eyebrow">Flagship</p><h2>AI Video Solution Generator</h2>
          <EvidenceBadge label="Documented product design" />
          <nav>{caseSections.map(([label]) => <a key={label} href={"#" + label.toLowerCase().replaceAll(" ", "-")}>{label}</a>)}</nav>
        </aside>
        <div className="case-content">
          <div className="case-opening"><p className="micro-label">Core product thesis</p><p className="big-statement">The right goal is not maximum generation. It is a reliable path from approved source to reviewable output.</p><div className="truth-note"><strong>Evidence boundary</strong><p>This is a documentation-led product case. Implementation source, customer adoption, model performance, and production outcomes are not evidenced in this public repository.</p></div></div>
          {caseSections.map(([label, text], index) => (
            <details className="case-accordion" id={label.toLowerCase().replaceAll(" ", "-")} key={label} open={index < 2}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3><i aria-hidden="true">+</i></summary>
              <div><p>{text}</p>{label === "Product decision" && <div className="decision-panel"><span>WHY I CHOSE THIS</span><strong>Academic trust requires visible control over what becomes final.</strong><span>TRADE-OFF</span><strong>More review effort; greater accountability and correction control.</strong></div>}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head"><div><p className="eyebrow">Selected work</p><p className="section-index">02 / Portfolio</p></div><div><h2>One portfolio, multiple levels of evidence.</h2><p className="section-intro">The labels below prevent conceptual work from being mistaken for shipped product outcomes.</p></div></div>
        <div className="showcase-list">
          {projects.map((project, index) => (
            <article key={project.title}>
              <span className="showcase-number">{String(index + 1).padStart(2, "0")}</span>
              <div><p className="micro-label">{project.category}</p><h3>{project.title}</h3><p>{project.problem}</p></div>
              <div><EvidenceBadge label={project.evidence} /><p><strong>Decision:</strong> {project.decision}</p><small>{project.note}</small></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
