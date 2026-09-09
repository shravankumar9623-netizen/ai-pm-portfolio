# Day 13 — Product Metrics and Analytics

## Objective

Connect a product outcome to actionable measures.

Metrics form a system: the North Star represents recurring user value; input metrics explain movement; guardrails prevent local optimization from damaging quality, cost or trust. Vanity counts such as total generations are insufficient.

## Simulated exercise

**Simulated learning data — created for PM practice.**

In one week, 100 users started a draft, 82 generated output, 61 submitted it for review, 47 received approval and 18 returned the next week. Generation completion is 82%; review submission is 61%; approval among starters is 47%; next-week retention is 18%.

The largest observed loss is between generation and review submission: 21 users, or 25.6% of generators. Investigate confusing output, editing effort and unclear next actions before acquiring more traffic.

## PM decision

Use weekly approved artifacts from returning teams as the candidate North Star. Inputs are valid uploads, successful drafts and review submissions. Guardrails are rejection rate, material-edit rate, latency, cost and safety incidents.

## AI decision drill

If generation volume rises while acceptance falls, do not call the launch successful. Segment by model version and failure reason before deciding whether to roll back, refine prompts or improve source retrieval.

## Interview questions and answers

North Star measures value, not activity. Leading metrics predict outcomes; lagging metrics confirm them. Guardrails constrain harm. Funnels locate loss. Segmentation prevents averages from hiding failures.

## Reflection

Metrics become useful only when a threshold or pattern changes a product decision.
