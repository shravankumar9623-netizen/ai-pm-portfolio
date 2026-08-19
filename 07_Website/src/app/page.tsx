import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="shell hero">
        <div>
          <p className="eyebrow">AI Product Manager · EdTech · GenAI</p>
          <h1>Building AI products around real human outcomes.</h1>
          <p className="lede">I’m Shravan Kumar, a product and operations professional translating customer problems into practical, measurable AI-enabled workflows.</p>
          <div className="actions">
            <Link className="button" href="/case-studies">Explore my work</Link>
            <Link className="button secondary" href="/about">About me</Link>
          </div>
        </div>
        <p className="hero-note">“Customers don’t buy AI. They buy outcomes.”<br /><br />Currently documenting a hands-on AI Product Management journey through Day 33.</p>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-head">
            <p className="eyebrow">What I bring</p>
            <h2>Product judgment grounded in delivery.</h2>
          </div>
          <div className="grid">
            <article className="card"><span className="tag">01 · Discover</span><h3>Customer-first framing</h3><p>Customer discovery, JTBD, personas, journey mapping, and sharp problem definition before solutioning.</p></article>
            <article className="card"><span className="tag">02 · Design</span><h3>AI product systems</h3><p>PRDs, RAG architecture, evaluation datasets, human review, experimentation, and measurable quality targets.</p></article>
            <article className="card"><span className="tag">03 · Deliver</span><h3>Cross-functional execution</h3><p>Six-plus years across product operations, program delivery, and education technology environments.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell case">
          <span className="case-number">Flagship case study</span>
          <div>
            <h2>AI Educational Video Generator</h2>
            <p className="lede">A faculty-first workflow that turns academic questions and solutions into reviewed scripts, narration, storyboards, annotations, and educational videos.</p>
            <div className="actions"><Link className="button" href="/case-studies">Read the case study</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
