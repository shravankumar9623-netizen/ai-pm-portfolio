# Day 31 — AI Launch and Operations

## Objective

Prepare an AI capability for controlled operation after deployment.

## Readiness checklist

- Versioned model, prompt and retrieval configuration
- Evaluation gate and known limitations
- Feature flag and rollback
- User-visible failure recovery
- Quality, latency, cost and safety monitoring
- Incident severity and owner
- Data retention and access policy
- Support guide and change log

## Simulated incident drill

**Simulated learning data — created for PM practice.** Acceptance falls from 78% to 59% after an index refresh; latency and model version are unchanged. Retrieval miss rate rises from 8% to 24%.

## Decision

Stop expansion, restore the prior index, preserve affected traces and investigate ingestion/versioning. Do not change the model prompt because evidence isolates retrieval as the likely failure stage.

## Rollout

Start with internal users, then a small cohort, then staged percentages. Expansion requires stable quality and no critical incidents. Publish limitations and maintain the manual path.

## Interview questions and answers

Operational readiness includes rollback. Drift can occur in data or behaviour. SLOs define expected reliability. Incidents require containment and learning. Monitoring should connect technical signals to user outcomes.

## Reflection

Shipping creates an operating responsibility. AI PM ownership continues through failures, cost changes and model updates.
