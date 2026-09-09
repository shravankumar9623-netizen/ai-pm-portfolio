# Day 28 — Human-in-the-Loop AI

## Objective

Place human judgement where it changes risk, quality or learning.

## Review design

Humans can approve every output, review low-confidence cases, sample outputs or handle escalations. The right model depends on consequence, model maturity, review capacity and reversibility.

## Scenario

Official taxonomy tagging is constrained but consequential. The model proposes only allowed tags; the interface shows source and rationale; the faculty member edits or accepts; nothing is persisted until WRITE. Rejections become evaluation data.

## Exercise and answer

Volumes are 1,000 low-risk drafts per week, reviewer capacity is 300, and historical simulated acceptance is 78%. Use full review during the pilot. After calibrated evidence, consider risk-based routing while sampling accepted low-risk output. Do not remove review merely to meet volume.

## Metrics

Measure acceptance, material edits, false acceptance, review time, reviewer agreement and escalation. High acceptance may reflect automation bias, so audit samples independently.

## Interview questions and answers

Human-in-the-loop is a control and learning channel. Review design is risk-based. Automation bias can inflate acceptance. Feedback needs structured labels. Human effort is part of AI economics.

## Reflection

The goal is not maximum automation. It is reliable user value with accountable decisions.
