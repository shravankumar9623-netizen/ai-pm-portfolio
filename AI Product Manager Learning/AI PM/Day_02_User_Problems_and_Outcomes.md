# Day 02 — User Problems and Outcomes

## Objective

Separate symptoms, root causes and desired outcomes.

## Practical analysis

Scenario: a faculty member says, “The dashboard is difficult.” Supplied observations: the user exports data, filters it manually, calculates ranks, then rebuilds a presentation. Errors occur when absent learners are treated as zero or excluded inconsistently.

The complaint is a symptom. The underlying jobs are interpreting the source schema, applying explicit attendance rules and producing an editable communication artifact. The desired outcome is confidence that the deck represents the selected cohort and marking rules correctly.

## Problem statement

Faculty preparing result reviews need a consistent way to transform variable spreadsheet exports into verified presentations because manual interpretation and formatting introduce avoidable effort and correctness risk.

## PM decision

Prioritize explicit input rules, preview and validation before visual polish. Guardrails are invalid-score detection, transparent absence treatment and review before export.

## Exercise and model answer

Data: 12 users request “faster export”; eight spend most time correcting column mappings, three wait for rendering and one cannot find the button.

Answer: do not optimize rendering first. Address mapping detection and confirmation because it affects the dominant delay. Track correction rate, completion time and invalid-output rate.

## AI decision drill

AI could suggest mappings, but deterministic validation must confirm allowed columns and value ranges. Confidence below an agreed threshold should require user selection.

## Interview practice

The five questions to ask are: who experiences the problem, what job is blocked, what evidence shows frequency, what consequence matters and what outcome would prove improvement?

## Takeaway

A useful problem statement names the user, job, obstacle and consequence without embedding a preferred feature.
