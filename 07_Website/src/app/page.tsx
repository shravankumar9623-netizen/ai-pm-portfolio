import Link from "next/link";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { LifecycleExplorer } from "@/components/LifecycleExplorer";
import { capabilities, principles, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Shravan Kumar · AI Product Manager</p>
          <h1>Building AI products from real problems to <em>delivery.</em></h1>
          <p className="lede">Building AI products from real user problems to product strategy, AI workflows, evaluation and delivery.</p>
          <div className="actions">
            <Link className="button" href="/case-studies">View Case Studies <span aria-hidden="true">↗</span></Link>
            <Link className="button secondary" href="/resume">View Resume</Link>
          </div>
          <div className="public-links" aria-label="Professional profiles">
            <a href="https://www.linkedin.com/in/m-shravan-kumar-5939a4198" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="https://github.com/shravankumar9623-netizen" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="hero-system" aria-label="AI product operating system">
          <div className="system-top"><span>AI PRODUCT OPERATING SYSTEM</span><span className="status-dot">Evidence on</span></div>
          <ol>
            {["Discover the real workflow", "Define product outcomes", "Design AI + human control", "Build and validate", "Evaluate, measure, iterate"].map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
            ))}
          </ol>
          <div className="system-footer"><span>Product judgment</span><span>AI evaluation</span><span>Hands-on delivery</span></div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Areas of focus">
        <div className="shell signal-row"><span>Strategy</span><span>Discovery</span><span>AI workflows</span><span>Evaluation</span><span>Analytics</span><span>Automation</span></div>
      </section>

      <section className="section shell" id="capabilities">
        <div className="section-head">
          <div><p className="eyebrow">What I build</p><p className="section-index">01 / Capabilities</p></div>
          <div><h2>From ambiguous problem to measurable product system.</h2><p className="section-intro">A practical product toolkit for deciding where AI belongs, how it should behave, and what evidence should guide the next iteration.</p></div>
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
            <div><h2>AI product management is a loop, not a launch checklist.</h2><p className="section-intro">Select a stage to see the product question and the evidence represented in this portfolio.</p></div>
          </div>
          <LifecycleExplorer />
        </div>
      </section>

      <section className="section shell">
        <div className="section-head">
          <div><p className="eyebrow">Featured case study</p><p className="section-index">03 / Product judgment</p></div>
          <div><h2>AI Video Solution Generator</h2><p className="section-intro">A faculty-reviewed AI product that moves from approved academic source material to a generated, evaluated, and reviewable video solution.</p></div>
        </div>
        <article className="featured-case">
          <div className="featured-summary">
            <EvidenceBadge label="Verified implementation" />
            <p className="big-statement">Trust is designed into the workflow—not added after generation.</p>
            <p>I initiated the product and owned the workflow, discovery, UX/UI, product decisions, AI/model choices, evaluation, testing, and end-to-end validation. I also contributed directly to implementation; I do not claim sole authorship or unvalidated business impact.</p>
            <Link className="text-link" href="/case-studies#video-solution">Explore the product decisions <span aria-hidden="true">→</span></Link>
          </div>
          <div className="decision-flow" aria-label="Case study decision flow">
            {[
              ["Problem", "Educational video production is a multi-step workflow with quality and review constraints."],
              ["Product decision", "Ground generation in source material and preserve faculty approval before final output."],
              ["Implementation", "Connect extraction, solution work, narration, rendering, review, analytics, and quality gates."],
              ["Trade-off", "Accept more review effort in exchange for control, accountability, and academic trust."],
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
          <div><h2>Real products. Precise evidence boundaries.</h2><p className="section-intro">Implementation, ownership, and outcomes are different claims. This portfolio labels them accordingly.</p></div>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div><p className="micro-label">{project.category}</p><EvidenceBadge label={project.evidence} /></div>
              <h3>{project.title}</h3><p>{project.problem}</p>
              <p className="project-role"><strong>{project.role}</strong> · {project.users}</p>
              <div className="decision-mini"><span>Key decision</span><strong>{project.decision}</strong></div>
              <small>{project.note}</small>
            </article>
          ))}
        </div>
        <div className="section-cta"><p>See the full problem → decision → evidence view.</p><Link className="button" href="/case-studies">View all case studies <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="closing-section">
        <div className="shell closing-inner"><p className="eyebrow">Make AI useful</p><h2>Good AI products earn trust through outcomes, evidence, and iteration.</h2><div className="actions"><Link className="button light-button" href="/contact">Contact me <span aria-hidden="true">↗</span></Link><Link className="button ghost-button" href="/resume">View resume</Link></div></div>
      </section>
    </>
  );
}
