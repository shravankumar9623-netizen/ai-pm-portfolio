# Day 43 — Experiment Metrics

## Metric set

Primary metric: proportion of tasks that reach approved output within the quality threshold.

Input metrics: valid source retrieval, draft completion and review completion. Quality guardrails: rubric accuracy, groundedness, false acceptance and material edits. Experience metrics: total time, review time and regeneration. System metrics: latency, failure and cost per approved output.

## Decision rationale

Approval alone can hide automation bias; accuracy alone can hide unusable output. The combined primary metric ensures both completion and quality. Failure categories explain what to improve.

## Expected answer

A successful experiment improves the approved outcome, not merely generation speed, while staying within quality, safety and economic guardrails.
