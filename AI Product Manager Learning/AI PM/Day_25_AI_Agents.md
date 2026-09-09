# Day 25 — AI Agents

## Objective

Distinguish agentic workflows from ordinary automation and define safe boundaries.

An agent uses a model to select actions or tools toward a goal. A deterministic workflow follows predefined steps. Agents are useful when the path varies; workflows are safer when sequence and policy are known.

## Scenario

For question tagging, an agent can inspect untagged questions and propose taxonomy choices. It must not invent categories or write changes automatically. Tool permissions are limited to reading questions and returning allowed identifiers; persistence requires explicit human action.

## Exercise and answer

Agent actions: read PDF, extract questions, search taxonomy, suggest tags, write database. Restrict the first four to a dry run and require human approval before the write tool. Log proposals, selected options and errors. Provide a non-AI spreadsheet-import path.

## PM decision

Prefer a bounded agent for ambiguous classification and deterministic code for validation and bulk writes. Measure suggestion coverage, acceptance, corrections, latency and cost.

## Interview questions and answers

Agents select actions; workflows encode them. Tool permissions define blast radius. Human approval fits consequential steps. Observability records traces and outcomes. An agent is unnecessary when rules solve the job reliably.

## Reflection

Agent autonomy is a product decision about risk and recovery, not a maturity badge.
