# Day 39 — Product Metrics and North Star

## Objective

Design a metric system that connects recurring user value to funnel behaviour, AI quality, system reliability and cost.

## Metric architecture

Candidate North Star: **weekly approved explanations used by returning content teams**. It captures completed value better than generations or minutes in the tool. It remains a candidate until real workflow evidence confirms that approval and use represent value.

### Metric tree

- Inputs: valid uploads, generation completion, review starts, approval rate, returning teams.
- Output: approved explanations used in the workflow.
- Quality guardrails: correctness, groundedness, material-edit rate, rejection and false acceptance.
- System guardrails: p95 latency, job failure, recovery and availability.
- Economic guardrails: inference, storage and review cost per approved output.

## Simulated dataset

**Simulated learning data — created for PM practice.**

| Metric | Week 1 | Week 2 |
|---|---:|---:|
| Active teams | 20 | 24 |
| Valid uploads | 250 | 310 |
| Successful drafts | 225 | 285 |
| Review starts | 190 | 240 |
| Approved outputs | 150 | 174 |
| Returning teams | 12 | 15 |
| Material edits | 30 | 52 |
| Rejections | 10 | 24 |
| Total cost | ₹450 | ₹650 |
| Median latency | 7 s | 9 s |

## Calculations

Week 1 generation success: 225/250 = 90.0%. Review activation: 190/225 = 84.4%. Approval per review: 150/190 = 78.9%. Team retention proxy: 12/20 = 60.0%. Material-edit rate per reviewed item: 15.8%. Cost per approval: ₹3.00.

Week 2 generation success: 91.9%. Review activation: 84.2%. Approval per review: 72.5%. Retention proxy: 62.5%. Material-edit rate: 21.7%. Cost per approval: ₹3.74.

## PM conclusion

Approved volume and returning teams increased, but approval efficiency, edits, rejection, latency and unit cost deteriorated. Do not celebrate volume alone. Segment by model version, content type and source quality; inspect rejection reasons; pause broad expansion if quality guardrails were breached.

## AI decision drill

If a larger model improves rubric accuracy by two points but increases latency and cost while acceptance falls, run a controlled comparison. Include reviewer rework and false acceptance; do not choose solely from offline quality.

## Funnel and retention

The funnel is upload → valid input → draft → review → approval → repeat use. Activation is first successfully reviewed output. Retention is a team returning to complete another valuable workflow in a defined later period, not merely logging in.

## Interview questions and model answers

1. North Star represents recurring value; input metrics explain it.
2. Activation is the first credible value event.
3. Guardrails prevent harmful optimization.
4. AI quality must be paired with acceptance and rework.
5. Cost should be calculated per successful outcome.

## Reflection

The PM’s job is not to create a dashboard. It is to decide what a metric movement means, what uncertainty remains and what action follows.
