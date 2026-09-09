import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact", description: "Connect with Shravan Kumar and explore evidence-led AI Product Management work." };

export default function Contact() {
  return (
    <div className="shell">
      <header className="contact-hero">
        <p className="eyebrow">Contact</p>
        <h1>Have a product problem where AI, workflow, and trust intersect?</h1>
        <p className="lede">I’m interested in thoughtful product conversations about AI-enabled experiences, evaluation, analytics, and workflow automation.</p>
      </header>
      <section className="contact-grid section">
        <article className="contact-primary"><span className="contact-icon" aria-hidden="true">↗</span><p className="micro-label">Verified public channel</p><h2>GitHub</h2><p>Review the repository, product artifacts, and working implementation evidence.</p><Link className="button light-button" href="https://github.com/shravankumar9623-netizen">Open GitHub <span aria-hidden="true">↗</span></Link></article>
        <article className="contact-note"><p className="eyebrow">A deliberate contact surface</p><h3>Only verified public information belongs here.</h3><p>Email and LinkedIn are not published until their exact public details are confirmed. This avoids invented or private contact information.</p><Link className="text-link" href="/case-studies">Explore case studies <span aria-hidden="true">→</span></Link></article>
      </section>
    </div>
  );
}
