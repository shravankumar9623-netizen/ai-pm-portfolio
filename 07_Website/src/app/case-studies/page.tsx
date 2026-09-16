import type { Metadata } from "next";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = { title: "Case Studies", description: "Evidence-labeled AI products covering discovery, strategy, workflow design, AI decisions, evaluation, analytics, implementation, and trade-offs." };

const caseSections = [
  ["Problem", "Educational video production is a multi-step faculty workflow involving source selection, extraction, solution work, narration, rendering, review, correction, and approval."],
  ["Users", "Faculty are the primary quality owners; managers evaluate the workflow and teammates contribute testing and feedback."],
  ["Product strategy", "Reduce avoidable production effort while protecting academic trust, reviewability, and accountable final approval."],
  ["Workflow", "Source/question paper → AI processing → extraction → solution matching or generation → video generation → faculty review → final output."],
  ["AI decision", "Use AI within bounded workflow stages, with source grounding, structured outputs, quality gates, and human review rather than unconstrained end-to-end automation."],
  ["Implementation contribution", "I initiated the product; owned the problem, requirements, workflow, UX/UI, AI/model decisions, testing, evaluation, and validation; and wrote or modified code using Claude and Codex assistance."],
  ["Evaluation", "Evaluate grounding, usefulness, correction effort, failure patterns, latency, and cost together, then use faculty review to decide whether output can become final."],
  ["Trade-off", "The workflow accepts more review effort than full automation in exchange for control, accountability, and academic trust."],
  ["Evidence boundary", "Application source and product/design artifacts support implementation and contribution. Adoption, model performance, business impact, and historical timing or volume estimates are not presented as verified outcomes."],
  ["Learning", "Human-in-the-loop is not a fallback in trust-sensitive work; it is part of the product architecture and operating model."],
];

export default function CaseStudies() {
  return (
    <div className="shell">
      <header className="page-head split-head">
        <div><p className="eyebrow">Case studies</p><p className="section-index">Evidence before claims</p></div>
        <div><h1>Product work framed around decisions—not feature lists.</h1><p className="lede">Each project distinguishes implementation, personal ownership, and outcomes so the work remains credible and interview-defensible.</p></div>
      </header>

      <section className="section flagship-detail" id="video-solution">
        <aside className="case-nav" aria-label="Flagship case study sections">
          <p className="eyebrow">Flagship</p><h2>AI Video Solution Generator</h2>
          <EvidenceBadge label="Verified implementation" />
          <nav>{caseSections.map(([label]) => <a key={label} href={`#${label.toLowerCase().replaceAll(" ", "-")}`}>{label}</a>)}</nav>
        </aside>
        <div className="case-content">
          <div className="case-opening"><p className="micro-label">Core product thesis</p><p className="big-statement">The goal is not maximum generation. It is a reliable path from approved source to reviewable output.</p><div className="truth-note"><strong>Evidence boundary</strong><p>The application and the product/design work are supported by local evidence and confirmed ownership. No unvalidated adoption, quality, productivity, or business-impact number is used.</p></div></div>
          {caseSections.map(([label, text], index) => (
            <details className="case-accordion" id={label.toLowerCase().replaceAll(" ", "-")} key={label} open={index < 2}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span><h3>{label}</h3><i aria-hidden="true">+</i></summary>
              <div><p>{text}</p>{label === "AI decision" && <div className="decision-panel"><span>WHY I CHOSE THIS</span><strong>Academic quality needs source grounding, visible control, and an accountable reviewer.</strong><span>TRADE-OFF</span><strong>Less automation; more reviewability, correction control, and trust.</strong></div>}</div>
            </details>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head"><div><p className="eyebrow">Selected work</p><p className="section-index">02 / Product portfolio</p></div><div><h2>Four products, clearly scoped.</h2><p className="section-intro">The priority reflects portfolio value, not inflated claims.</p></div></div>
        <div className="showcase-list">
          {projects.map((project, index) => (
            <article key={project.title} id={project.title.toLowerCase().replaceAll(" ", "-")}>
              <span className="showcase-number">{String(index + 1).padStart(2, "0")}</span>
              <div><p className="micro-label">{project.category}</p><h3>{project.title}</h3><p><strong>{project.role}</strong> · {project.users}</p><p>{project.problem}</p></div>
              <div><EvidenceBadge label={project.evidence} /><p><strong>Decision:</strong> {project.decision}</p><p><strong>Contribution:</strong> {project.contribution}</p><p><strong>Workflow:</strong> {project.workflow}</p><small>{project.note}</small></div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
