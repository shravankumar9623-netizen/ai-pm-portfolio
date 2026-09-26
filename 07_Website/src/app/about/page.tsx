import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About", description: "How Shravan Kumar leads AI product strategy, discovery, workflow design, evaluation, analytics, and delivery." };

export default function About() {
  return (
    <div className="shell">
      <header className="page-head split-head">
        <div><p className="eyebrow">About</p><p className="section-index">Product · AI · Execution</p></div>
        <div><h1>I turn complex workflows into AI products teams can use and trust.</h1><p className="lede">I’m Shravan Kumar, an AI Product Manager with 8+ years across product management, EdTech, content strategy, project execution, product operations, and AI-enabled workflow automation.</p></div>
      </header>
      <section className="section about-intro">
        <p className="pull-quote">My work sits between the user problem, the AI system, and the operating reality around both.</p>
        <div className="body-copy"><p>I draw on product management, content strategy, academic workflows, product operations, and project/program execution to define strategy and requirements, design workflows and interfaces, make AI/model decisions, and own evaluation and validation. I also contribute directly to implementation when it helps validate the product faster.</p><p>My public portfolio separates what is implemented, what I personally owned, and what outcomes remain unverified. Evidence integrity matters more than a larger list of claims.</p></div>
      </section>
      <section className="section">
        <div className="section-head"><div><p className="eyebrow">My approach</p><p className="section-index">01 / Operating principles</p></div><h2>Clear decisions at every layer.</h2></div>
        <div className="approach-grid">
          {[
            ["User", "Start with the job, pain, workflow, and constraints—not the technology."],
            ["Product", "Define the outcome, MVP, trade-offs, instrumentation, and decision rules."],
            ["AI", "Design grounding, evaluation, failure handling, and human control as product features."],
            ["Delivery", "Translate intent across interfaces, data, APIs, permissions, testing, and engineering constraints."],
          ].map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
      <section className="section">
        <div className="section-head"><div><p className="eyebrow">Selected experience</p><p className="section-index">02 / Product evidence</p></div><h2>Product ownership supported by hands-on delivery.</h2></div>
        <div className="experience-list">
          <article><p className="micro-label">Flagship AI product</p><h3>AI Video Solution Generator</h3><p>Initiated and led product discovery, requirements, workflow and UX, AI/model decisions, faculty review, evaluation, validation, and implementation contribution.</p></article>
          <article><p className="micro-label">Operational systems</p><h3>Workforce, tagging, and analytics products</h3><p>Role-aware workflows, controlled AI automation, local data processing, editable outputs, explicit permissions, and automated validation across three implementation-backed products.</p></article>
        </div>
      </section>
      <section className="section direction-panel"><div><p className="eyebrow">Current direction</p><h2>Building and improving AI products through evidence, evaluation, analytics, and iteration.</h2></div><Link className="button" href="/case-studies">See the work <span aria-hidden="true">→</span></Link></section>
    </div>
  );
}
