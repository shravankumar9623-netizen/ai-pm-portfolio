# Day 43 — Baseline

## Scenario

Measure the complete manual workflow before testing assistance: source review, outline, script creation, visual preparation, checking and final correction.

**Simulated learning data — created for PM practice.** Ten comparable tasks have median total time of 120 minutes, median script time of 35 minutes, median editing time of 20 minutes, three rework cycles and 94% rubric accuracy.

## Analysis

The baseline must use the same task definitions, quality rubric and completion boundary as the variant. Excluding review from the AI-assisted condition would create an invalid comparison.

## Decision

Use median time because small samples and difficult tasks can skew the mean. Segment future results by task complexity and subject. Preserve accuracy as a guardrail.

## Expected answer

The baseline is not “zero AI usage.” It is the current end-to-end user outcome measured under comparable conditions.
