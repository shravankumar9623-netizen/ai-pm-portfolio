# Day 38 — Product Requirements and PRD

## Objective

Translate a prioritized opportunity into unambiguous, testable product behaviour.

## MVP capability

AI-assisted, source-grounded educational script drafting with faculty review.

### Functional requirements

- Accept an approved question and solution source.
- Validate source identity before generation.
- Display source and draft together.
- Allow edit, reject and approve.
- Require a categorized reason for rejection.
- Prevent publishing before approval.
- Record model, prompt, source and reviewer decision versions.

### Non-functional and AI requirements

The workflow must protect access, preserve user input after recoverable failure, support keyboard navigation and log auditable decisions. Generated claims must remain grounded in approved material. Unsupported inputs must fail clearly. Latency and cost must be observable; evaluation must cover correctness, groundedness, clarity, safety and human acceptance.

### Non-goals

Autonomous publication, open-web generation, replacing subject experts and claiming learner-outcome improvement.

## Exercise and model answer

Vague requirement: “The AI should be accurate.” Improved requirement: “On the versioned evaluation set, every release must meet the agreed correctness and groundedness thresholds, contain no unresolved severe safety failure and remain subject to faculty approval.”

## Interview questions and answers

Good requirements are necessary, clear, testable and traceable. Functional requirements describe behaviour; non-functional requirements describe constraints. AI requirements cover evidence, uncertainty and evaluation. Non-goals protect scope. Acceptance criteria define observable completion.

## Reflection

The previously vague requirement was “generate high-quality scripts.” It now needs a rubric, threshold, source constraint, failure behaviour and reviewer decision.
