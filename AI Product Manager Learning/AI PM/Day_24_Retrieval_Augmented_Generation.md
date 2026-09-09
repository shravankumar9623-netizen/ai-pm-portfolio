# Day 24 — Retrieval-Augmented Generation

## Objective

Design a grounded generation pipeline and diagnose its failures.

## Pipeline

Ingest approved material, validate and chunk it, create embeddings, retrieve permitted candidates, assemble context, generate with citation requirements, evaluate and route to human review.

## Failure taxonomy

- Retrieval miss: correct evidence was absent.
- Ranking error: evidence existed but was below the cutoff.
- Context misuse: evidence was present but interpreted incorrectly.
- Unsupported generation: the answer added ungrounded detail.
- Source defect: approved material itself was incomplete.

## Exercise and answer

For 100 reviewed outputs, 18 fail: eight retrieval misses, four ranking errors, three context misuse cases, two unsupported additions and one source defect. Prioritize retrieval coverage because it represents 44.4% of failures. Preserve separate fixes; prompt changes alone will not solve missing evidence.

## PM decision

Launch only as a reviewed drafting workflow. Log retrieved source IDs, model version, disposition and failure class without exposing sensitive content unnecessarily.

## Interview questions and answers

RAG grounds generation in retrieved context. It does not eliminate hallucination. Evaluation separates retrieval from generation. Freshness and permissions are product requirements. Citations must point to actually used sources.

## Reflection

RAG quality is a chain. Diagnosing the wrong stage wastes engineering effort and hides product risk.
