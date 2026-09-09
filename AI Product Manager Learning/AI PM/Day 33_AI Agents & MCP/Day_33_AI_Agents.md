# Day 33 — AI Agents

## Objective

Design bounded agents that use tools toward a goal while preserving product control.

An agent combines a model, instructions, context, tools and a loop that selects the next action. Use an agent when the path varies and judgement is useful. Prefer a deterministic workflow when the sequence, rules and safety boundary are known.

## Product scenario

In QPG tagging, a bounded agent could read an untagged question, inspect an official taxonomy and propose permitted tags. Validation must reject any output outside the taxonomy. The tool operates in dry-run mode until a human explicitly chooses WRITE.

## Decision

Keep reading and proposal tools available to the agent; keep persistence behind human approval. Log the question identifier, permitted options, proposal, user disposition and error class without exposing private question content publicly.

## Simulated exercise

**Simulated learning data — created for PM practice.** Of 100 proposed tags, 76 are accepted unchanged, 18 are corrected and six receive no proposal. Acceptance is 76%, correction 18% and coverage 94%. This supports iteration, not autonomous writing.

## Interview questions and answers

1. Agent versus workflow? An agent selects actions; a workflow follows encoded steps.
2. Main agent risk? Excessive permission and unpredictable action chains.
3. Why human approval? The write is consequential and easy to gate.
4. What should be measured? Coverage, acceptance, correction, latency, cost and unsafe actions.
5. When should an agent not be used? When deterministic rules solve the job reliably.

## Reflection

Useful autonomy is bounded by permissions, observability and recovery. Maximum autonomy is not the product goal.
