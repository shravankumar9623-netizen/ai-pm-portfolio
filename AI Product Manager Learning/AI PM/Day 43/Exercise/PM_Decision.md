# Day 43 — PM Decision

## Results

**Simulated learning data — created for PM practice.**

| Metric | Manual | AI-assisted |
|---|---:|---:|
| Median production time | 120 min | 65 min |
| Script creation | 35 min | 10 min |
| Editing | 20 min | 25 min |
| Rework cycles | 3 | 2 |
| Human acceptance | Not applicable | 78% |
| Content accuracy | 94% | 91% |

## Analysis

Median total time improves by 55 minutes, or 45.8%. Script creation improves substantially, but editing increases by five minutes. Accuracy falls three percentage points, so the workflow cannot be judged on time alone. A 78% acceptance rate means more than one in five outputs still requires rejection or substantial intervention.

## Decision

**CHANGE AND CONTINUE THE CONTROLLED EXPERIMENT.** Do not roll out broadly.

Retain human approval, improve source grounding and analyze rejected or heavily edited outputs. Establish an explicit accuracy threshold and measure false acceptance. Repeat with more representative tasks and reviewers.

## Next test

Compare the current workflow against a source-linked variant. Primary metric: approved output completed within the quality threshold. Guardrails: false acceptance, major-edit rate, latency and total cost.

## PM takeaway

The simulated result is promising evidence for iteration, not proof of business impact or production performance.
