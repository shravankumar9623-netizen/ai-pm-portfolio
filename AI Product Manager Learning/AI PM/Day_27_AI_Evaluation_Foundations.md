# Day 27 — AI Evaluation Foundations

## Objective

Build an evaluation system tied to user decisions.

## Evaluation design

Create representative and difficult examples, define a rubric, establish human graders, record model/prompt versions and compare against a baseline. Evaluate correctness, groundedness, completeness, clarity and safety separately.

## Simulated exercise

**Simulated learning data — created for PM practice.** Fifty outputs receive rubric pass rates: correctness 88%, groundedness 84%, completeness 90%, clarity 94% and safety 98%. Eight outputs fail groundedness; five of those were still rated clear.

## Analysis and decision

Do not use clarity as a proxy for truth. Investigate groundedness failures and block unreviewed release. Continue a supervised pilot if reviewers can reliably detect and correct failures.

## Thresholds

Release thresholds depend on consequence. Track severe failure count, inter-rater agreement, reviewer acceptance, latency and cost alongside rubric scores.

## Interview questions and answers

Offline evaluation compares controlled examples. Online evaluation measures real workflow outcomes. A golden set is curated and versioned. LLM-as-judge requires calibration. Aggregate scores must not hide severe cases.

## Reflection

Evaluation turns subjective output quality into a decision process while preserving uncertainty and failure visibility.
