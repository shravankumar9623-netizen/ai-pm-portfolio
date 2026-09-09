# Day 16 — User Stories and Acceptance Criteria

## Objective

Translate user value into testable behaviour without prescribing unnecessary implementation.

## Worked story

As a faculty reviewer, I want to see the source question beside an AI-generated explanation so that I can verify alignment before approval.

Acceptance criteria:

- The source identifier and generated draft are displayed together.
- The reviewer can edit, approve or reject.
- Rejection requires a categorized reason.
- Approval records reviewer and timestamp.
- Publishing is unavailable before approval.
- Missing sources produce a clear error rather than a draft.

## Edge cases

Handle duplicate source IDs, unsupported files, empty solutions, interrupted saves and stale drafts. Non-functional criteria include accessibility, auditability and response-time expectations appropriate to the workflow.

## Exercise and answer

Weak request: “Build an AI quality button.” Better story: “As a reviewer, I want to flag the reason a draft is unacceptable so that the team can distinguish source, generation and presentation failures.” Acceptance covers allowed reasons, optional comments, event logging and retry behaviour.

## Interview questions and answers

Stories describe value; acceptance criteria define observable completion. Edge cases are not automatically separate stories. Technical constraints belong in requirements when they affect quality. A story may be split by workflow or risk. “As a system” is usually a requirement, not a user story.

## Reflection

Good acceptance criteria create a shared contract among product, design, engineering and QA.
