import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Resume", description: "Evidence-safe professional profile for AI Product Management, product strategy, evaluation, analytics, and workflow automation." };

export default function Resume() {
  return (
    <div className="shell">
      <header className="page-head resume-head">
        <div><p className="eyebrow">Resume</p><h1>Product judgment. Technical fluency. Operational execution.</h1></div>
        <div className="resume-status"><span>PUBLIC PROFILE</span><strong>Evidence-safe</strong><p>This page excludes unverified chronology, private contact details, and unsupported metrics. No downloadable resume is published until those details are verified.</p></div>
      </header>
      <section className="resume-layout section">
        <aside><p className="micro-label">Profile</p><h2>Shravan Kumar</h2><p>AI-focused product and operations professional</p><div className="resume-meta"><span>Focus</span><strong>AI products · EdTech · Workflow systems</strong><span>Experience</span><strong>6+ years stated across product/operations, program delivery, and EdTech</strong></div></aside>
        <div className="resume-body">
          <section><p className="eyebrow">Summary</p><h3>Turning customer and operational problems into measurable product workflows and responsible uses of AI.</h3></section>
          <section><p className="eyebrow">Core capabilities</p><div className="skill-cloud">{["AI product strategy", "Product discovery", "PRDs", "Experimentation", "AI evaluation", "Product analytics", "Human-in-the-loop design", "Workflow automation", "Technical collaboration"].map((skill) => <span key={skill}>{skill}</span>)}</div></section>
          <section><p className="eyebrow">Selected product evidence</p>
            <div className="resume-project"><span>01</span><div><h3>AI Video Solution Generator</h3><p>Documented product design covering strategy, requirements, source grounding, human review, evaluation, instrumentation, and trade-offs. Implementation and production results are not claimed.</p></div></div>
            <div className="resume-project"><span>02</span><div><h3>Workforce Operations Platform</h3><p>Working role-aware product code spanning operational workflows, permissions, tracking, approvals, and reporting. Adoption and impact are not claimed.</p></div></div>
            <div className="resume-project"><span>03</span><div><h3>Leaderboard Generator</h3><p>Working Python automation that converts results data into editable presentation outputs with ranking, tie handling, and edge-case validation.</p></div></div>
          </section>
          <section><p className="eyebrow">Evidence policy</p><p>Portfolio claims are deliberately scoped to what documentation or accessible code can support. Simulated learning data is not presented as professional impact.</p></section>
        </div>
      </section>
      <section className="section section-cta"><p>See how these capabilities become product decisions.</p><Link className="button" href="/case-studies">View case studies <span aria-hidden="true">→</span></Link></section>
    </div>
  );
}
