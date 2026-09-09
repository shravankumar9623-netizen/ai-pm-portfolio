# Day 30 — AI System Architecture for PMs

## Objective

Explain an AI product as components, data flows, boundaries and failure recovery.

## Reference architecture

The client submits approved content to an API. Validation checks format and permission. A job queue manages long-running processing. Retrieval selects approved sources. The model creates a structured draft. Evaluation and policy checks attach scores. A review interface records edits and disposition. An event pipeline supports monitoring. Approved output is exported; rejected output is retained according to policy.

## Product decisions

- Async jobs prevent request timeouts.
- Source IDs and model versions support traceability.
- Deterministic validation surrounds probabilistic generation.
- Role checks protect draft and approval actions.
- Fallback retains manual workflow when AI is unavailable.

## Exercise and answer

Failure: generation succeeds but event logging fails. Do not lose the draft or falsely report complete telemetry. Save the business transaction, queue an idempotent analytics retry and expose operational monitoring.

## Interview questions and answers

Queues handle variable long work. Idempotency prevents duplicate effects. Observability covers logs, metrics and traces. Authentication establishes identity; authorization controls actions. Architecture trade-offs should connect to user and business consequences.

## Reflection

A technical PM does not need to implement every service, but must understand how architecture choices change reliability, cost and experience.
