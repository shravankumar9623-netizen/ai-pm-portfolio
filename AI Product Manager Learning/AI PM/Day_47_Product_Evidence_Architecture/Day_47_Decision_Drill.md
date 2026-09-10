# Day 47 - Decision Drill

## Scenario

A portfolio reviewer asks for a stronger flagship headline. The proposed headline is:

> Reduced AI video production time from 120 to 65 minutes while maintaining more than 90 percent accuracy and achieving 78 percent reviewer acceptance.

The repository contains those values in Day 43-46 exercises. It also contains a PRD, a proposed RAG architecture, an evaluation framework, product-decision notes, and an instrumentation plan. It does not contain implementation source, a production time study, evaluation run logs, a validated user sample, or deployment proof for the flagship.

The decision is whether to publish the headline to make the portfolio more competitive.

## Evidence analysis

| Component | Available source | Status | Decision implication |
|---|---|---|---|
| 120-to-65-minute change | Day 43-46 exercise scenario | **SIMULATED** | Cannot be presented as an observed outcome. |
| More than 90 percent accuracy | Simulated exercise values and conceptual targets | **SIMULATED / CONCEPTUAL** | No versioned dataset, rubric execution, or run log supports a result. |
| 78 percent acceptance | Simulated instrumentation exercise | **SIMULATED** | No event data or reviewer denominator exists. |
| Faculty-first workflow | Executive summary and case-study documents | **REAL documentation** | Can be described as a product design decision. |
| Source grounding and RAG | Architecture document | **CONCEPTUAL** | Can be described as proposed architecture, not implementation. |
| Human approval | Repeated design requirement across product documents | **REAL documentation / CONCEPTUAL workflow** | Can be explained as a deliberate control. |
| Evaluation framework | Evaluation document | **REAL documentation** | Can be presented as designed evaluation practice, not completed results. |
| Production deployment | No inspectable proof in the evidence set | **UNVERIFIED** | Must not be claimed. |

## Decision criteria

1. **Truth:** Can a reviewer reproduce or inspect the evidence behind each verb and number?
2. **Provenance:** Is the measurement source, denominator, period, and method known?
3. **Category clarity:** Is learning evidence being confused with product evidence?
4. **Reputation risk:** Would later disclosure change the reviewer's interpretation?
5. **Decision value:** Can the portfolio still demonstrate strong PM judgment without the unsupported result?
6. **Recoverability:** What evidence would be required to revisit the claim later?

## Decision

**Do not publish the proposed performance headline.**

Remove the figures from achievement-oriented website, resume, public professional posts, and recruiter-facing summary copy. Retain them only inside clearly labelled learning analysis using this exact disclosure:

> Simulated learning data - created for PM practice.

Use the following evidence-safe public statement instead:

> Designed and documented a faculty-first AI video workflow with source grounding, human approval, evaluation criteria, and product instrumentation. The current portfolio demonstrates product architecture and decision quality; implementation and production outcomes are not yet verified.

## Rationale

The rejected headline compresses four different claims into one sentence: workflow improvement, AI quality, reviewer behaviour, and deployment context. None has the evidence required for a real outcome. Publishing it would trade short-term impressiveness for long-term credibility.

The replacement is narrower but stronger. It is supported by inspectable documentation and highlights AI PM judgment: grounding, human control, evaluation, and instrumentation. It also tells a reviewer exactly where the evidence boundary sits.

## Product and AI trade-offs

### Persuasiveness versus evidence integrity

Numbers attract attention, but unsupported numbers are not product evidence. A transparent design decision is more defensible than a fabricated outcome.

### Automation versus academic control

The proposed workflow keeps a faculty reviewer responsible for approval. This reduces end-to-end automation but supports accountability and trust in educational content.

### Model quality versus user outcome

Even a genuine accuracy score would not establish product value. The evidence chain must connect output quality to reviewer acceptance, correction effort, approved-output time, and repeat workflow use.

### Measurement versus confidentiality

Future telemetry should capture necessary decision events and timings without collecting unnecessary academic content or reviewer identity.

## Evidence plan to unlock a future outcome claim

1. Define a dated manual baseline with task boundaries, sample rules, and exclusions.
2. Produce an inspectable, sanitized implementation or reproducible demonstration.
3. Freeze a versioned evaluation set and scoring rubric.
4. Record model, prompt, retrieval configuration, latency, and cost for every run.
5. Measure reviewer accept, edit, regenerate, reject, and approval events.
6. Report median and distribution for time per approved output, not only generation time.
7. Document severe failures and rework, not only averages.
8. Obtain permission for any public user, workflow, or operational statement.
9. Publish only results whose denominator, period, provenance, and limitations remain attached.

## Model answer

I would reject the proposed headline. The repository shows that the numbers came from a simulated learning scenario, while the flagship currently has documented product design rather than verified implementation or production measurement. I would publish the supported decision story: I designed a source-grounded, faculty-reviewed workflow and defined how to evaluate quality, reviewer behaviour, cost, and approved-output time. To unlock a real performance claim, I would first establish a manual baseline, run a versioned evaluation on an inspectable implementation, capture reviewer decisions, and retain the measurement provenance. This protects credibility while still demonstrating how I make AI product decisions.

## Interview-ready takeaway

The senior PM decision was not to make the claim more impressive. It was to make the evidence boundary visible, preserve trust, and define the next experiment that could legitimately change the claim.
