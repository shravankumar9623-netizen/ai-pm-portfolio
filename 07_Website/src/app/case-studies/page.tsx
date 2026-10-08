import type { Metadata } from "next";
import Image from "next/image";
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

      <nav className="project-directory" aria-label="Project directory">
        <div><p className="eyebrow">Project directory</p><p>Choose a product to review its problem, my role, product decisions, and available evidence.</p></div>
        <ol>
          {projects.map((project, index) => (
            <li key={project.title}>
              <a href={`#${project.title.toLowerCase().replaceAll(" ", "-")}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{project.title}</strong>
                <small>{project.category}</small>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section className="section">
        <div className="section-head">
          <div><p className="eyebrow">Selected work</p><p className="section-index">01 / Product portfolio</p></div>
          <div><h2>Real product work, clearly scoped.</h2><p className="section-intro">Each project shows the product problem, my role, the work completed, and the current sample status without unsupported outcome claims.</p></div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card${project.samples || project.images ? " project-card-with-samples" : ""}`} id={project.title.toLowerCase().replaceAll(" ", "-")} key={project.title}>
              <div><p className="micro-label">{project.category}</p><EvidenceBadge label={project.evidence} /></div>
              <h3>{project.title}</h3>
              <p>{project.problem}</p>
              <p className="project-role"><strong>Role:</strong> {project.role}</p>
              <ul className="project-tags" aria-label={`${project.title} highlights`}>
                {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
              <div className="decision-mini"><span>What I built or designed</span><strong>{project.contribution}</strong></div>
              {project.samples ? (
                <div className="sample-gallery" aria-label={`${project.title} video samples`}>
                  {project.samples.map((sample) => (
                    <figure className="sample-item" key={sample.src}>
                      <video controls preload="metadata" playsInline poster={sample.poster} aria-label={`${sample.title} video sample`}>
                        <source src={sample.src} type="video/mp4" />
                        Your browser does not support embedded MP4 video.
                      </video>
                      <figcaption><strong>{sample.title}</strong><span>{sample.description}</span></figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
              {project.images ? (
                <div className="image-gallery" aria-label={`${project.title} product screenshots`}>
                  {project.images.map((sample) => (
                    <figure className="image-item" key={sample.src}>
                      <div className="image-frame">
                        <Image src={sample.src} alt={sample.alt} width={sample.width} height={sample.height} sizes="(max-width: 720px) 100vw, 1120px" />
                      </div>
                      <figcaption><strong>{sample.title}</strong><span>{sample.description}</span></figcaption>
                    </figure>
                  ))}
                </div>
              ) : null}
              {!project.samples && !project.images ? <p className="sample-status">{project.sampleStatus}</p> : null}
              <small>{project.note}</small>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
