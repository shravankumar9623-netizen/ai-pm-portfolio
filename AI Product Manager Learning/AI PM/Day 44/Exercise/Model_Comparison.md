# Day 44 — Model Comparison

**Simulated learning data — created for PM practice.**

| Measure | Model A | Model B |
|---|---:|---:|
| Groundedness pass | 88% | 94% |
| Accuracy pass | 91% | 95% |
| Human acceptance | 74% | 81% |
| Major-edit rate | 17% | 10% |
| Median latency | 3.2 s | 6.8 s |
| Cost per output | ₹1.20 | ₹2.10 |

## Analysis

Model B leads quality and user acceptance but costs 75% more and is more than twice as slow. Model A may remain suitable for low-risk, easily verified tasks; Model B may justify its cost for difficult content if the quality difference persists on a representative set.

## Decision

Run a controlled routing pilot rather than choosing one model globally. Establish a difficulty classifier or deterministic content rules, log routing, and compare cost per approved output including review effort.

## Rollout recommendation

Maintain human approval. Roll back if either option breaches correctness, groundedness or false-acceptance thresholds. These results are practice data and cannot support a production or resume claim.

## PM takeaway

The important trade-off is total workflow value: quality and rework versus latency and cost—not model score in isolation.
