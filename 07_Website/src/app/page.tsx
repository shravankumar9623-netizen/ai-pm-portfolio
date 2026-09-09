import Link from "next/link";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { LifecycleExplorer } from "@/components/LifecycleExplorer";
import { capabilities, principles, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">AI Product Manager / Product Manager</p>
          <h1>Building AI products people can <em>understand, trust, and use.</em></h1>
          <p className="lede">I connect product strategy, experimentation, AI evaluation, analytics, and technical execution to turn complex workflows into useful product experiences.</p>
          <div className="actions">
            <Link className="button" href="/case-studies">View Case Studies <span aria-hidden="true">↗</span></Link>
            <Link className="button secondary" href="/resume">View Resume</Link>
          </div>
        </div>
        <div className="hero-system" aria-label="Product operating system">
          <div className="system-top"><span>PRODUCT OPERATING SYSTEM</span><span className="status-dot">Evidence on</span></div>
          <ol>
            {["Discover the real workflow", "Define the outcome", "Design the control points", "Evaluate product + AI quality", "Measure, learn, iterate"].map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
            ))}
          </ol>
          <div className="system-footer"><span>Human judgment</span><span>Measurable signals</span><span>Technical delivery</span></div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Areas of focus">
        <div className="shell signal-row"><span>Strategy</span><span>Discovery</span><span>Evaluation</span><span>Analytics</span><span>Automation</span><span>Human-in-the-loop</span></div>
      </section>

      <section className="section shell" id="capabilities">
        <div className="section-head">
          <div><p className="eyebrow">What I build</p><p className="section-index">01 / Capabilities</p></div>
          <div><h2>From ambiguous problem to measurable product system.</h2><p className="section-intro">A practical toolkit for deciding where AI belongs, how it should behave, and what evidence should guide the next iteration.</p></div>
        </div>
        <div className="capability-grid">
          {capabilities.map(([title, text, evidence], index) => (
            <article className="capability-card" key={title}>
              <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3><p>{text}</p>
              <div className="evidence-line"><span>Evidence</span><strong>{evidence}</strong></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <div className="section-head light">
            <div><p className="eyebrow">How I work</p><p className="section-index">02 / Lifecycle</p></div>
            <div><h2>AI product management is a loop, not a launch checklist.</h2><p className="section-intro">Select a stage to see the product question and supporting portfolio evidence.</p></div>
          </div>
          <LifecycleExplorer />
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <div><p className="eyebrow">Featured case study</p><p className="section-index">03 / Product judgment</p></div>
          <div><h2>AI Video Solution Generator</h2><p className="section-intro">A faculty-first product design for turning approved academic material into reviewable educational video artifacts.</p></div>
        </div>
        <article className="featured-case">
          <div className="featured-summary">
            <EvidenceBadge label="Documented product design" />
            <p className="big-statement">Trust is designed into the workflow—not added after generation.</p>
            <p>Implementation source and production outcomes are not claimed. The value here is the documented product reasoning: source grounding, review gates, evaluation, instrumentation, and explicit trade-offs.</p>
            <Link className="text-link" href="/case-studies#video-solution">Explore the product decisions <span aria-hidden="true">→</span></Link>
          </div>
          <div className="decision-flow" aria-label="Case study decision flow">
            {[
              ["Problem", "Creating consistent educational video artifacts is a multi-step faculty workflow."],
              ["Product decision", "Ground generation in approved source material and preserve human approval."],
              ["Evaluate", "Assess usefulness, grounding, edit burden, cost, and latency together."],
              ["Trade-off", "More review effort in exchange for control, accountability, and trust."],
            ].map(([label, text]) => <div key={label}><span>{label}</span><p>{text}</p></div>)}
          </div>
        </article>
      </section>

      <section className="section shell">
        <div className="section-head">
          <div><p className="eyebrow">How I think</p><p className="section-index">04 / Principles</p></div>
          <div><h2>Product principles for responsible AI execution.</h2></div>
        </div>
        <div className="principles">
          {principles.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <div><p className="eyebrow">Selected work</p><p className="section-index">05 / Portfolio</p></div>
          <div><h2>Different evidence. Clearly labeled.</h2><p className="section-intro">Transparency is part of the product: verified implementations are separated from documented designs and evidence-pending work.</p></div>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div><p className="micro-label">{project.category}</p><EvidenceBadge label={project.evidence} /></div>
              <h3>{project.title}</h3><p>{project.problem}</p>
              <div className="decision-mini"><span>Key decision</span><strong>{project.decision}</strong></div>
              <small>{project.note}</small>
            </article>
          ))}
        </div>
        <div className="section-cta"><p>Want the full problem → decision → evidence view?</p><Link className="button" href="/case-studies">View all case studies <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="closing-section">
        <div className="shell closing-inner"><p className="eyebrow">Let’s make AI useful</p><h2>Good AI products earn trust through outcomes, evidence, and iteration.</h2><div className="actions"><Link className="button light-button" href="/contact">Contact me <span aria-hidden="true">↗</span></Link><Link className="button ghost-button" href="/about">How I work</Link></div></div>
      </section>
    </>
  );
}
