# Day 47 - AI Evidence Chain

## Purpose

An AI feature becomes a product only when technical performance connects to user behaviour and a meaningful workflow outcome.

> AI performance -> user behaviour -> workflow outcome -> product value -> business outcome

Each arrow is a hypothesis until evidence supports it. A model score cannot substitute for evidence at later stages.

## Evidence layers

| Layer | Question | Example signal | Evidence needed |
|---|---|---|---|
| AI performance | Did the system produce a correct and grounded output? | correctness, groundedness, severe failures | versioned test set, rubric, scorer, run log |
| User behaviour | What did the reviewer do? | accept, edit, regenerate, reject, override | events and review disposition |
| Workflow outcome | Did the task become easier or more reliable? | approved-output time, rework, completion | baseline and controlled measurement |
| Product value | Did the user achieve the intended job better? | usable output, repeat use, confidence | qualitative and quantitative evidence |
| Business outcome | Did the product create authorized organizational value? | cost, capacity, retention, revenue | approved operating or commercial evidence |

## Flagship evidence chain

**Product:** AI Video Solution Generator

**User:** Faculty or subject-matter expert responsible for academic quality

**Workflow:** approved source -> extraction and retrieval -> generation -> faculty review -> revise or approve -> controlled output

| Chain step | Current evidence | Classification | Boundary |
|---|---|---|---|
| Product problem | Documents describe manual scripting, narration, annotation, and review effort. | **REAL documentation** | Raw interviews, counts, dates, and observation records are absent. |
| Proposed AI workflow | PRD, requirements, system flow, and RAG flow exist. | **CONCEPTUAL** | No implementation source is included. |
| Human review | Review and approval are explicit requirements. | **REAL documentation** | Actual reviewer behaviour is not measured. |
| Offline AI quality | Dimensions, targets, sample questions, and criteria exist. | **CONCEPTUAL evaluation design** | No versioned run log or validated result exists. |
| User behaviour | Acceptance, edit, regeneration, rejection, and override are proposed signals. | **CONCEPTUAL instrumentation** | No production event stream exists. |
| Workflow outcome | Time and volume comparisons appear in Day 43-46. | **SIMULATED** | They are not production measurements. |
| Product value | Reduced repetitive effort with academic control is intended. | **CONCEPTUAL hypothesis** | User validation and repeat use are missing. |
| Business outcome | No validated outcome is available. | **UNVERIFIED** | Do not claim cost, capacity, adoption, or commercial impact. |

## Minimum credible evaluation chain

### 1. Version the system

Record model, prompt, retrieval configuration, source version, generation parameters, and date. Without versioning, the decision cannot be reproduced.

### 2. Define representative cases

Use cases covering common subjects, diagrams, ambiguous questions, missing context, OCR failure, unsupported claims, and out-of-distribution inputs. The repository has sample questions and expected concepts, but not a complete executed golden-set record.

### 3. Score product-relevant dimensions

- answer correctness;
- source groundedness;
- completeness and instructional clarity;
- unsafe or unsupported output;
- narration and annotation quality;
- reviewer correction effort;
- latency and total cost.

### 4. Add a severe-failure gate

A clear but ungrounded explanation can create more risk than an obvious failure. Release criteria need a maximum severe-failure rate, not only an average score.

### 5. Connect quality to reviewer behaviour

Instrument generation completion, review start, accept, edit, regenerate, reject, human override, and approval. Each event needs system version, content category, timestamp, privacy-safe reviewer identifier, failure reason, latency, and cost. Do not copy raw educational content into analytics unnecessarily.

### 6. Measure the complete workflow

The denominator should be an approved output, not a generated output:

- cost per approved output;
- median time from source upload to approval;
- first-pass acceptance;
- edit minutes per approved output;
- regenerations per approved output;
- severe failures per evaluated item.

## Worked simulated analysis

**Simulated learning data - created for PM practice.**

Day 45 describes higher generation volume while acceptance falls from 70% to 55%, regeneration doubles, editing time rises, and content accuracy declines. The numbers do not prove a real product problem, but they support a valid reasoning exercise.

Generation grew faster than accepted output. That could reflect weaker first-pass quality, a harder content mix, changed reviewer standards, instrumentation error, or a different cohort.

### Decision

Do not scale generation or replace the model based on one metric. Run a controlled, versioned comparison and segment by subject, input quality, reviewer, and failure type.

Adopt the proposed model only if it improves:

1. groundedness and severe-failure rate;
2. first-pass acceptance or correction burden;
3. time or rework per approved output;
4. latency and total cost within workflow limits;
5. safety and quality across content segments.

If model quality improves but user behaviour does not, investigate the workflow and evaluation validity before paying the cost premium.

## Evidence acquisition plan

| Gap | Required artifact | Why it matters |
|---|---|---|
| Discovery evidence | approved, de-identified notes or observation records | separates a documented problem from validated evidence |
| Baseline | dated manual-workflow measurement protocol | makes improvement measurable |
| Implementation | source, architecture run, or sanitized demonstration | verifies the workflow exists |
| Evaluation | versioned dataset, rubric, grader agreement, results | supports model decisions |
| Behaviour | event taxonomy and review events | connects AI output to human action |
| Outcome | approved-output time, rework, repeat use, failures | demonstrates product value |
| Permission | approval for public artifacts and claims | protects confidential users and operations |

## AI-specific trade-offs

**Quality versus latency:** Higher quality may justify slower asynchronous generation, but not if delay prevents the intended workflow.

**Automation versus control:** Human review reduces automation but creates accountability where academic trust matters.

**Grounding versus coverage:** Strict grounding can reduce unsupported claims but increase refusals when source material is incomplete.

**Measurement versus privacy:** Capture decision signals without collecting unnecessary academic content or reviewer identity.

## Interview-ready takeaway

> I evaluate an AI product as a chain. I start with versioned output quality, connect it to acceptance and correction behaviour, measure the workflow per approved output, and only then discuss product or business value. If a link is simulated or missing, I label it and design the next evidence-producing step.
