import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Resume", description: "M. Shravan Kumar — AI Product Manager with 8+ years across product management, EdTech, content strategy, execution, operations, and AI-enabled workflow automation." };

const products = [
  ["01", "AI Video Solution Generator", "Initiated and led discovery, requirements, workflow and UX, AI/model decisions, evaluation, validation, and implementation contribution."],
  ["02", "Workforce Operations Platform", "Initiated and defined a role-aware operational product; owned requirements, UI/UX, data interlinking, AI-related functionality, testing, and validation."],
  ["03", "QPG Tagging Automation", "Designed the workflow and UI/UX for controlled question ingestion, taxonomy tagging, video attachment, preview, dry-run, and explicit write approval."],
  ["04", "Leaderboard Generator", "Initiated, designed, and built a local Python/Streamlit analytics-to-PowerPoint product with correctness and layout validation."],
];

export default function Resume() {
  return (
    <div className="shell">
      <header className="page-head resume-head">
        <div><p className="eyebrow">Resume</p><h1>Product judgment. AI depth. Hands-on execution.</h1></div>
        <div className="resume-status"><span>MASTER RESUME</span><strong>Evidence-driven</strong><p>Unsupported impact numbers and confidential product details are intentionally excluded.</p><a className="button resume-download" href="/Resume_Master.pdf" download>Download PDF <span aria-hidden="true">↓</span></a></div>
      </header>
      <section className="resume-layout section">
        <aside><p className="micro-label">Profile</p><h2>Shravan Kumar</h2><p>AI Product Manager</p><div className="resume-meta"><span>Location</span><strong>New Delhi, India</strong><span>Focus</span><strong>AI products · Product strategy · Automation · Analytics · Evaluation</strong><span>Profiles</span><strong><a href="https://www.linkedin.com/in/m-shravan-kumar-5939a4198" target="_blank" rel="noreferrer">LinkedIn ↗</a> · <a href="https://github.com/shravankumar9623-netizen" target="_blank" rel="noreferrer">GitHub ↗</a></strong></div></aside>
        <div className="resume-body">
          <section><p className="eyebrow">Summary</p><h3>AI Product Manager with 8+ years across product management, EdTech, content strategy, project execution, product operations, and AI-enabled workflow automation.</h3><p>I translate user and business problems into strategy, requirements, workflows, user stories, acceptance criteria, execution plans, AI/model decisions, evaluation, analytics, testing, and delivery.</p></section>
          <section><p className="eyebrow">Core capabilities</p><div className="skill-cloud">{["AI Product Management", "Product management", "Product strategy", "Product discovery", "Product execution", "Product operations", "Project/program execution", "Content strategy", "EdTech", "Academic workflows", "Generative AI", "AI evaluation", "Product analytics", "Workflow automation"].map((skill) => <span key={skill}>{skill}</span>)}</div></section>
          <section><p className="eyebrow">Professional experience</p><h3>Product leadership across Physics Wallah, Unacademy, Yami Cosmo Services, and BYJU&apos;S.</h3><p>The downloadable master resume contains the chronology and evidence-safe role summaries without retaining historical metrics that still require validation.</p></section>
          <section><p className="eyebrow">Selected AI products</p>
            {products.map(([number, title, text]) => <div className="resume-project" key={title}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </section>
          <section><p className="eyebrow">Evidence policy</p><p>Implementation evidence, product/design evidence, and user-confirmed ownership are treated as separate claim types. Simulated learning data and unvalidated adoption or business metrics are not presented as professional outcomes.</p></section>
        </div>
      </section>
      <section className="section section-cta"><p>See how these capabilities become product decisions.</p><Link className="button" href="/case-studies">View case studies <span aria-hidden="true">→</span></Link></section>
    </div>
  );
}
