# Day 32 — AI Product Metric Trees

## Objective

Connect user value, model quality, system health and economics in one decision model.

## Metric tree

Candidate North Star: approved useful outputs completed by returning teams each week.

Inputs include valid submissions, generated drafts, review completion and repeat use. Quality measures include correctness, groundedness, acceptance and material edits. System guardrails include latency, reliability and safety failures. Economic guardrails include inference, review and rework cost per approved output.

## Simulated exercise

**Simulated learning data — created for PM practice.** During one period, 250 drafts yield 195 approvals, 42 material edits and 13 rejections. Acceptance is 78%; material edits are 16.8%; rejection is 5.2%. Total operating cost is ₹500, so cost per approved output is ₹2.56.

Next period produces 220 approvals from 300 drafts at ₹720. Approval count rises, but acceptance falls to 73.3% and cost per approval rises to ₹3.27.

## PM decision

Do not declare success from approval volume alone. Diagnose segment and model changes; hold rollout if the quality/cost deterioration exceeds agreed guardrails.

## Interview questions and answers

A metric tree expresses drivers. A North Star represents value. Model scores are not business outcomes. Cost must be measured per successful outcome. Guardrails make optimization accountable.

## Reflection

AI product measurement must explain whether more usage creates more value or merely more generation and review work.
