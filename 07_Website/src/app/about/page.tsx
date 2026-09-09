import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About", description: "How Shravan Kumar approaches AI product strategy, discovery, evaluation, analytics, and technical collaboration." };

export default function About() {
  return (
    <div className="shell">
      <header className="page-head split-head">
        <div><p className="eyebrow">About</p><p className="section-index">Product · AI · Operations</p></div>
        <div><h1>I turn complex workflows into product decisions teams can execute.</h1><p className="lede">I’m an AI-focused product and operations professional with more than six years of stated experience across product/operations, program delivery, and EdTech.</p></div>
      </header>
      <section className="section about-intro">
        <p className="pull-quote">My work sits between the user problem, the AI system, and the operating reality around both.</p>
        <div className="body-copy"><p>I focus on translating customer and operational problems into measurable workflows, explicit decisions, and safe uses of AI. That means asking what must be true before building, where human judgment matters, and which signals should determine the next iteration.</p><p>The portfolio intentionally distinguishes working implementations from documented product designs and learning scenarios. Evidence integrity matters more than a larger list of claims.</p></div>
      </section>
      <section className="section">
        <div className="section-head"><div><p className="eyebrow">My approach</p><p className="section-index">01 / Operating principles</p></div><h2>Clear decisions at every layer.</h2></div>
        <div className="approach-grid">
          {[
            ["User", "Start with the job, pain, context, and constraints—not the technology."],
            ["Product", "Define the outcome, MVP, trade-offs, instrumentation, and decision rules."],
            ["AI", "Design grounding, evaluation, failure handling, and human control as product features."],
            ["Delivery", "Translate intent across workflows, interfaces, data, permissions, and engineering constraints."],
          ].map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>
      <section className="section">
        <div className="section-head"><div><p className="eyebrow">Selected experience</p><p className="section-index">02 / Evidence</p></div><h2>Product thinking supported by practical delivery.</h2></div>
        <div className="experience-list">
          <article><p className="micro-label">Flagship product design</p><h3>AI Video Solution Generator</h3><p>Strategy, requirements, source-grounded architecture, human review, evaluation, and analytics. Public materials do not claim implementation or production results.</p></article>
          <article><p className="micro-label">Working product evidence</p><h3>Operational and automation products</h3><p>A role-aware workforce operations platform and a Python analytics-to-presentation workflow demonstrate technical collaboration and execution. Public summaries omit private data and unsupported impact.</p></article>
        </div>
      </section>
      <section className="section direction-panel"><div><p className="eyebrow">Current direction</p><h2>Deepening AI evaluation, experimentation, analytics, and case-study storytelling.</h2></div><Link className="button" href="/case-studies">See the work <span aria-hidden="true">→</span></Link></section>
    </div>
  );
}
