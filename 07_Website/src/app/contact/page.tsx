import Link from "next/link";

export default function Contact() {
  return (
    <div className="shell">
      <header className="page-head"><p className="eyebrow">Contact</p><h1>Let’s build useful AI products.</h1><p className="lede">I’m interested in AI Product Management opportunities, product conversations, and work that improves how people learn and solve problems.</p><div className="actions"><Link className="button" href="https://github.com/shravankumar9623-netizen">View GitHub</Link><Link className="button secondary" href="/case-studies">Review my work</Link></div></header>
      <section className="section copy"><h2>A note on contact details</h2><p>Email and LinkedIn details are not published until verified. GitHub is the currently verified public contact channel for this portfolio.</p></section>
    </div>
  );
}
