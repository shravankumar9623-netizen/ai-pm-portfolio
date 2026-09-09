# Day 17 — Product Requirements Document

## Objective

Use a PRD to align decisions, scope and evidence rather than document every implementation detail.

## Mini-PRD: reviewable AI draft

Problem: reviewers need to verify generated explanations against approved sources. Goal: make source alignment and disposition explicit. Non-goals: autonomous publishing and open-web fact generation.

Users: faculty reviewer and content operator. Functional requirements include source-linked drafts, edit/approve/reject, categorized failure reasons and audit history. Non-functional requirements include role access, traceability, accessible controls and graceful failure.

AI requirements: retrieval must use approved sources; model and prompt version must be logged; unsupported evidence must not be presented as fact; low-confidence cases must be reviewable.

Metrics: review completion, acceptance without material edits, failure categories, latency and cost. Rollout: internal test, invited pilot, phased expansion. Dependencies: source quality, identity, event logging and evaluation rubric.

## Exercise and model answer

Add acceptance criteria for a missing source: block generation, identify the missing item, preserve the user’s other inputs and log a source-validation failure. Do not silently substitute another source.

## Interview questions and answers

A PRD records why, what and constraints. Non-goals protect focus. Requirements should be testable. AI requirements include data and evaluation. A PRD changes when evidence changes, with decisions documented.

## Reflection

The PRD is useful when a team can challenge assumptions and verify completion from it.
