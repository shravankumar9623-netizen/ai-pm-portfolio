# Day 47 - Evidence Register

## Register purpose

This register translates portfolio statements into evidence-safe claims. It supplements the repository-wide evidence register at 02_Case_Studies/00_EVIDENCE_REGISTER.md; it does not replace it.

The governing rule is simple:

> The wording of a claim must never be stronger than its source.

## Classification standard

| Status | Meaning | Public-use rule |
|---|---|---|
| **REAL** | A repository artifact, implementation, test, or approved record can be inspected. | Describe only what the artifact directly proves. |
| **SIMULATED** | Data or analysis was created for learning practice. | Use only with the label: Simulated learning data - created for PM practice. |
| **CONCEPTUAL** | A proposed workflow, architecture, framework, or design exists without verified implementation. | Present as designed, proposed, or documented; never as shipped. |
| **UNVERIFIED** | A claim exists, but an inspectable source is not currently available. | Exclude from outcomes and achievements until proof is located. |
| **CONFIDENTIAL** | Evidence may exist but is restricted from public disclosure. | Use a sanitized description only when permission and factual support are clear. |

## Product claim register

| ID | Product claim | Status | Source | What the source proves | Permitted wording | Prohibited leap |
|---|---|---|---|---|---|---|
| D47-01 | The AI Video Solution Generator has a documented product definition. | **REAL** | 02_Case_Studies/AI_Educational_Video_Generator/01_Executive_Summary.md and SOURCE_MAP.md | A consolidated case-study narrative and source map exist. | Documented an education-focused AI video product concept and product requirements. | Built, launched, or adopted the product. |
| D47-02 | Faculty and subject-matter experts are the intended reviewers. | **REAL documentation** | 01_Executive_Summary.md and 03_Customer_Discovery.md | The intended-user definition is documented. | Designed the workflow around faculty review and academic accountability. | Completed faculty research or validated demand at scale. |
| D47-03 | The product proposes source-grounded retrieval and generation. | **CONCEPTUAL** | 10_System_and_RAG_Architecture.md | A proposed RAG architecture and source flow are documented. | Proposed a source-grounded generation architecture. | Implemented or production-tested RAG. |
| D47-04 | Human approval is a deliberate product control. | **REAL documentation / CONCEPTUAL workflow** | 01_Executive_Summary.md, 10_System_and_RAG_Architecture.md, Day 46 product decisions | Human review is consistently designed into the workflow. | Defined human approval as a required control before output release. | Proved that the control improved accuracy or trust. |
| D47-05 | The case study contains an AI evaluation framework. | **REAL documentation** | 11_AI_Evaluation_Framework.md | A proposed golden set, rubrics, criteria, and targets exist. | Designed an evaluation framework for groundedness, correctness, and reviewer acceptance. | Completed an evaluation run or met the targets. |
| D47-06 | Generation time changed from 120 to 65 minutes. | **SIMULATED** | Day 43-46 learning exercises | The numbers were used in a PM learning scenario. | Simulated learning data - created for PM practice. | Presenting the reduction as a real product result. |
| D47-07 | Accuracy was 94 then 91 percent, with 78 percent acceptance and regeneration signals. | **SIMULATED** | Day 43-46 learning exercises | The metrics support worked decision analysis only. | Analyzed a simulated quality-cost-acceptance trade-off. | Claiming observed model or user performance. |
| D47-08 | The AI Video Solution Generator is implemented or deployed. | **UNVERIFIED** | 14_Results_and_Learnings.md and repository review | The repository explicitly records the absence of implementation and production proof. | Implementation and deployment are not verified in the current evidence set. | Shipped, deployed, or used in production. |
| D47-09 | NGMC CheckIn contains attendance, timer, project, approval, role, and reporting workflows. | **REAL / CONFIDENTIAL** | NGMC source and README described in 02_Case_Studies/00_EVIDENCE_REGISTER.md | Inspectable local code supports these capabilities. | Built or contributed to a role-based workforce operations platform, using an approved sanitized description. | Naming restricted entities, users, data, adoption, or impact. |
| D47-10 | NGMC CheckIn contains AI-efficiency and cost-related views. | **REAL / CONFIDENTIAL** | NGMC source and evidence register | Inspectable UI or source supports the existence of those views. | Implemented product views for operational efficiency analysis, if public disclosure is approved. | Claiming the views caused savings or productivity gains. |
| D47-11 | Leaderboard Generator transforms marks into an editable presentation. | **REAL** | Leaderboard Generator source, README, and tests recorded in the global evidence register | Python implementation and tests support the transformation workflow. | Built a local Python workflow that converts marks into an editable presentation. | Claiming organizational adoption or time saved. |
| D47-12 | Leaderboard Generator implements ranking, ties, absence handling, and analytics rules. | **REAL** | Leaderboard Generator source and tests | Business rules are implemented and testable. | Implemented explicit ranking and exception-handling rules. | Claiming error reduction without a measured baseline. |
| D47-13 | Leaderboard processing is local. | **REAL** | Leaderboard README and implementation | The reviewed workflow runs locally. | Designed local processing to limit unnecessary data movement. | Claiming formal compliance or security certification. |
| D47-14 | QPG Tagging Automation constrains AI suggestions to an official taxonomy and requires a human write action. | **UNVERIFIED** | 02_Case_Studies/QPG_Tagging_Automation/EVIDENCE_STATUS.md | The claim is recorded, but its source package is not in the current evidence set. | Evidence-pending workflow description, kept out of achievement claims. | Presenting the controls as verified implementation. |
| D47-15 | QPG Tagging Automation reduces a one-to-two-minute task to 30-to-60 seconds. | **UNVERIFIED** | QPG evidence-status document | The timing statement exists without a reproducible measurement artifact. | Do not publish as an outcome until validated. | Using the range on a resume or as a proven productivity result. |
| D47-16 | The products form one integrated educational workflow ecosystem. | **CONCEPTUAL** | 02_Case_Studies/PRODUCT_ECOSYSTEM_MAP.md | A plausible relationship is mapped, but integration code is absent. | These products can be understood as related workflow opportunities. | Claiming a deployed integrated platform. |
| D47-17 | Days 43-46 demonstrate product reasoning about experiments, evaluation, instrumentation, and integration. | **REAL learning evidence** | Canonical learning files under AI Product Manager Learning/AI PM | Completed written reasoning and exercises are inspectable. | Demonstrated structured PM analysis through completed learning artifacts. | Converting exercises into professional product outcomes. |

## Use-by-channel decision

| Claim family | Resume | Portfolio | Public professional content | Interview |
|---|---|---|---|---|
| Inspectable implementation | Yes, with precise scope | Yes | Yes | Yes, explain personal contribution accurately |
| Product documentation | Yes, as designed or documented | Yes, with evidence label | Yes, if clearly framed | Yes, distinguish design from delivery |
| Simulated metrics | No as achievements | Yes, only inside a labelled learning analysis | Avoid as performance proof | Yes, if introduced as a simulated case |
| Unverified outcome | No | No outcome claim | No | Discuss only as an evidence gap |
| Confidential implementation | Sanitized and permission-dependent | Sanitized and permission-dependent | Usually omit | Use only within confidentiality boundaries |

## Worked claim review

### Candidate statement

Reduced AI video production time from 120 to 65 minutes while maintaining more than 90 percent accuracy.

### Decision

**REJECT for public outcome use.** The figures are simulated learning data. The current repository does not contain a production baseline, time-study protocol, versioned evaluation run, or approved outcome record.

### Evidence-safe replacement

Designed a faculty-first AI video product concept with source grounding, human approval, an evaluation framework, and workflow instrumentation; used explicitly simulated scenarios to practise quality, cost, and acceptance decisions.

This replacement remains useful because it states the product judgment that is supported without turning practice data into a result.

## Evidence gaps and next proof

| Priority | Gap | Minimum acceptable proof | Claim unlocked |
|---|---|---|---|
| P0 | Flagship implementation | sanitized source, reproducible demo, or approved technical artifact | implemented workflow |
| P0 | Flagship evaluation results | versioned set, rubric, run log, reviewer agreement, and result summary | observed AI quality |
| P1 | Manual-workflow baseline | dated protocol, sample definition, and measurement record | measured workflow change |
| P1 | User behaviour | acceptance, edit, regenerate, reject, and completion events with definitions | reviewer response to AI output |
| P1 | QPG source package | inspectable code, dry-run proof, taxonomy constraint proof, and synthetic test | verified implementation controls |
| P2 | Public permission | approved sanitized scope and media | stronger public presentation |

## Register maintenance rule

Every new claim must have an ID, source, classification, permitted wording, and prohibited inference before it reaches the website, resume, public README, or interview story bank. A new metric does not become REAL merely because it appears in a chart; its collection method and provenance must also be inspectable.

## Day 47 conclusion

The portfolio has credible evidence of implementation in the Leaderboard Generator and restricted operational software, strong documented product reasoning for the AI Video Solution Generator, and useful simulated learning analysis. Its central credibility risk is not lack of activity; it is allowing those evidence categories to blur. This register makes that boundary explicit.
