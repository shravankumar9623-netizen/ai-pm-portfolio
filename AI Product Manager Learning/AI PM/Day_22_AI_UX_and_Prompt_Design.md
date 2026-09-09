# Day 22 — AI UX and Prompt Design

## Objective

Design interfaces that communicate capability, uncertainty and user control.

## UX principles

- Set expectations before generation.
- Show the source and scope of the output.
- Support edit, regenerate, reject and undo.
- Explain recoverable errors.
- Avoid false precision in confidence.
- Preserve user work during failure.

## Prompt design

Specify role, task, allowed evidence, output schema and refusal behaviour. Keep official taxonomy options explicit. Treat the prompt as versioned product logic with tests, not private magic text.

## Exercise and answer

An interface shows only a “Generate” button and replaces the user’s draft. Redesign it with input confirmation, source preview, progress state, generated draft beside original, change history and explicit write/approve action.

## PM decision

Choose preview-before-write for question tagging. Even if one-click automation is faster, reversibility and taxonomy correctness are higher-priority guardrails.

## Interview questions and answers

AI UX differs through uncertainty. Regeneration is both a control and a failure signal. Confidence must be calibrated. Explanations should support decisions. Prompt changes require regression evaluation.

## Reflection

Trust comes from predictable boundaries and recovery—not from making AI appear certain.
