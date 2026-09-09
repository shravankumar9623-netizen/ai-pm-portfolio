"use client";

import { useState } from "react";

const stages = [
  { name: "Discover", detail: "Understand the user, workflow, constraints, and evidence before selecting a solution.", artifact: "Customer discovery · Journey mapping" },
  { name: "Define", detail: "Turn evidence into a precise problem, outcome, assumptions, and boundaries.", artifact: "Problem framing · PRDs" },
  { name: "Prioritize", detail: "Compare value, risk, effort, confidence, and the cost of being wrong.", artifact: "Opportunity mapping · Prioritization" },
  { name: "Design", detail: "Shape the smallest trustworthy workflow, including human control points.", artifact: "MVP design · Human review" },
  { name: "Build", detail: "Collaborate across product and engineering to make the workflow operable.", artifact: "Automation · Technical execution" },
  { name: "Evaluate", detail: "Test product usefulness and AI quality against explicit criteria and baselines.", artifact: "AI evaluation · Experiment design" },
  { name: "Launch", detail: "Plan rollout, safeguards, ownership, and feedback loops before wider use.", artifact: "Rollout thinking · Risk controls" },
  { name: "Measure", detail: "Instrument behavior, acceptance, rework, cost, latency, and user outcomes.", artifact: "Product analytics · Telemetry" },
  { name: "Iterate", detail: "Use evidence to improve the product—not model metrics in isolation.", artifact: "Decision reviews · Learning loops" },
];

export function LifecycleExplorer() {
  const [active, setActive] = useState(0);
  const stage = stages[active];
  return (
    <div className="lifecycle-card">
      <div className="lifecycle-tabs" role="tablist" aria-label="AI product lifecycle">
        {stages.map((item, index) => (
          <button key={item.name} id={"stage-" + index} role="tab" aria-selected={active === index} aria-controls="lifecycle-panel" tabIndex={active === index ? 0 : -1} onClick={() => setActive(index)} onKeyDown={(event) => {
            if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
            event.preventDefault();
            const next = event.key === "ArrowRight" ? (index + 1) % stages.length : (index - 1 + stages.length) % stages.length;
            setActive(next);
            document.getElementById("stage-" + next)?.focus();
          }}>
            <span>{String(index + 1).padStart(2, "0")}</span>{item.name}
          </button>
        ))}
      </div>
      <div id="lifecycle-panel" className="lifecycle-panel" role="tabpanel" aria-labelledby={"stage-" + active}>
        <p className="micro-label">Stage {String(active + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}</p>
        <h3>{stage.name}</h3>
        <p>{stage.detail}</p>
        <span className="artifact-label">Evidence in portfolio</span>
        <strong>{stage.artifact}</strong>
      </div>
    </div>
  );
}
