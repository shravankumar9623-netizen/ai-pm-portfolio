import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact", description: "Connect with Shravan Kumar and explore evidence-led AI Product Management work." };

export default function Contact() {
  return (
    <div className="shell">
      <header className="contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Let’s talk about AI products, workflows, and evidence-led execution.</h1>
        <p className="lede">Connect through the verified public channels below or explore the product work first.</p>
      </header>
      <section className="contact-grid section">
        <article className="contact-primary"><span className="contact-icon" aria-hidden="true">↗</span><p className="micro-label">Professional profile</p><h2>LinkedIn</h2><p>Connect for product conversations about AI strategy, evaluation, analytics, automation, and end-to-end execution.</p><a className="button light-button" href="https://www.linkedin.com/in/m-shravan-kumar-5939a4198" target="_blank" rel="noreferrer">Open LinkedIn <span aria-hidden="true">↗</span></a></article>
        <article className="contact-note"><p className="eyebrow">Product evidence</p><h3>Review the work on GitHub.</h3><p>Explore the portfolio structure, evidence register, case studies, and implementation-backed product summaries.</p><a className="text-link" href="https://github.com/shravankumar9623-netizen" target="_blank" rel="noreferrer">Open GitHub <span aria-hidden="true">↗</span></a><br /><Link className="text-link" href="/case-studies">View case studies <span aria-hidden="true">→</span></Link></article>
      </section>
    </div>
  );
}
