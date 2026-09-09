# Day 29 — AI Product Economics

## Objective

Evaluate quality, latency and cost as one product system.

## Simulated comparison

**Simulated learning data — created for PM practice.**

| Option | Accepted outputs | Cost/output | Median latency | Major-edit rate |
|---|---:|---:|---:|---:|
| Model A | 72% | ₹1.20 | 3.0 s | 18% |
| Model B | 79% | ₹2.10 | 6.5 s | 11% |
| Routed A/B | 77% | ₹1.55 | 4.2 s | 13% |

## Analysis

Model B has the best quality but costs 75% more than A and is slower. Routing simple cases to A and difficult cases to B may capture much of the quality improvement if difficulty can be identified reliably.

## PM decision

Pilot routing with a fixed evaluation set and quality guardrail. Include reviewer time in total cost. Do not optimize token cost while ignoring rework.

## Unit economics

Cost per approved output includes inference, retrieval, storage, retries, human review and failed generations. Product value must exceed total cost at the intended scale.

## Interview questions and answers

AI COGS varies with tokens and models. Latency affects completion. Rework is a hidden cost. Routing is useful when tasks differ. Economics must be segmented by successful user outcome.

## Reflection

The cheapest generation can be the most expensive workflow if users repeatedly correct it.
