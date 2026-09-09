# Day 35 — Opportunity Mapping

## Objective

Use an Opportunity Solution Tree to connect a desired outcome to evidence-backed user needs, possible solutions and tests.

## Core concept

An opportunity is an unmet user need or friction—not a feature. The tree begins with one outcome, branches into opportunities observed in the workflow, then solution ideas and experiments. It prevents a team from treating the first attractive feature as the strategy.

## Worked example: AI Video Solution Generator

Desired outcome: help reviewers reach a trustworthy, publishable explanation through a controlled workflow. This is a product outcome; the portfolio does not contain validated production improvement data.

### Opportunity tree

| Opportunity | Evidence status | Solution ideas | First test |
|---|---|---|---|
| Source and draft are difficult to verify together | CONCEPTUAL; workflow documented | Side-by-side source view; cited solution steps | Prototype comprehension test |
| Repetitive drafting consumes reviewer attention | UNVERIFIED in production | Structured first draft; reusable templates | Baseline manual workflow and reviewed pilot |
| Failures are not categorized | Supported by evaluation design gap | Reject reasons; error taxonomy | Observe whether reviewers can label failures consistently |
| Full automation could publish incorrect content | Supported product risk | Approval gate; permission controls | Verify publishing is impossible before approval |
| Different subjects may require different handling | UNVERIFIED | Metadata routing; subject-specific rubrics | Compare representative subject examples |

## Prioritization

Prioritize side-by-side review and structured failure capture. They improve trust and create evidence for later AI decisions. Defer autonomous publishing because its downside is high and evaluation evidence is absent.

## Exercise

**Simulated learning data — created for PM practice.** Twelve pilot observations contain: seven source-alignment checks, six major wording edits, five requests for visible citations, three presentation-style requests and two requests for automatic publishing.

### Model answer

Cluster the first three signals under “reviewers cannot efficiently establish trustworthy alignment.” Treat presentation style as a secondary opportunity. Do not prioritize automatic publishing from two requests because it conflicts with the larger trust signal. Test a source-linked draft with edit and rejection controls. Primary measure: correct disposition and review completion. Guardrails: false acceptance and review time.

## AI decision drill

Use AI for draft generation and failure classification suggestions. Keep source validation, permission and final approval deterministic or human-controlled. Increase autonomy only after evaluation demonstrates stable performance on representative and adversarial cases.

## Interview questions and model answers

1. **Opportunity or solution?** “Reviewers cannot locate supporting evidence” is an opportunity; “add citations” is a solution.
2. **How do you choose a branch?** Combine frequency, severity, strategic fit, evidence confidence and learning value.
3. **Why map alternatives?** To avoid premature commitment and expose cheaper tests.
4. **What if evidence is weak?** Mark the uncertainty and run discovery before scoring precisely.
5. **How does AI change the tree?** It adds quality, safety, cost and human-control constraints—not an automatic solution branch.

## Reflection

The highest-value opportunity is not necessarily the loudest request. I should choose the branch that advances the desired outcome and reduces the most important uncertainty.
