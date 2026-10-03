import type { Metadata } from "next";
import { EvidenceBadge } from "@/components/EvidenceBadge";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected AI products and workflow samples covering Generative AI, EdTech, operations, automation, analytics, and human review.",
};

export default function Projects() {
  return (
    <div className="shell">
      <header className="page-head split-head">
        <div><p className="eyebrow">Projects</p><p className="section-index">Products and samples</p></div>
        <div><h1>AI products shaped through workflow design, evidence, and execution.</h1><p className="lede">A concise view of what I initiated, designed, built, and validated. Public samples are added only after privacy review.</p></div>
      </header>

      <section className="section">
        <div className="section-head">
          <div><p className="eyebrow">Selected work</p><p className="section-index">01 / Product portfolio</p></div>
          <div><h2>Real product work, clearly scoped.</h2><p className="section-intro">Each project shows the product problem, my role, the work completed, and the current sample status without unsupported outcome claims.</p></div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" id={project.title.toLowerCase().replaceAll(" ", "-")} key={project.title}>
              <div><p className="micro-label">{project.category}</p><EvidenceBadge label={project.evidence} /></div>
              <h3>{project.title}</h3>
              <p>{project.problem}</p>
              <p className="project-role"><strong>Role:</strong> {project.role}</p>
              <ul className="project-tags" aria-label={`${project.title} highlights`}>
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="decision-mini"><span>What I built or designed</span><strong>{project.contribution}</strong></div>
              <p className="sample-status">{project.sampleStatus}</p>
              <small>{project.note}</small>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
