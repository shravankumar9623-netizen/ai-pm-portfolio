# Day 19 — AI Product Fundamentals

## Objective

Identify when probabilistic systems create value and when deterministic logic is safer.

## Decision framework

Use AI where inputs are ambiguous, outputs benefit from pattern recognition and errors can be detected or recovered. Use rules for official taxonomies, arithmetic, permissions and hard policy constraints.

## Worked scenario

Question tagging has a fixed approved taxonomy. A model may rank candidate tags, but it must select only permitted values. A human previews the proposal and explicitly writes accepted tags. This separates probabilistic suggestion from deterministic validation and persistence.

## Exercise and answer

Tasks: calculate rank, summarize feedback, authorize access and classify a question. Use deterministic code for rank and authorization; consider AI for summarization and classification with evaluation and review.

## Product risks

Measure false acceptance, reviewer effort, coverage, latency and cost. Plan fallbacks for model outage and low confidence. Never define success as model accuracy alone if users still redo the work.

## Interview questions and answers

AI is justified by the problem, not novelty. Model metrics differ from product outcomes. Human review can be targeted by risk. Constraints reduce the output space. Fallbacks preserve the core job.

## Reflection

An AI product is a sociotechnical workflow. The model is one component among data, interface, policy, operations and human judgement.
