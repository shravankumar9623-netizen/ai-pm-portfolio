# Day 03 — Personas and Jobs to Be Done

## Objective

Build evidence-aware user models without inventing demographic detail.

## Concept

A persona summarizes relevant behaviour, goals and constraints. A Job to Be Done describes the progress a user seeks in a situation. Neither is a fictional biography.

## Supplied scenario

Three roles interact with an educational content workflow:

- Faculty reviewer: wants accurate solutions and control before publishing.
- Content operator: wants predictable batch processing and clear exception handling.
- Learner: wants understandable, synchronized explanations.

## Worked analysis

The primary persona for an authoring MVP is the faculty reviewer because approval determines whether output can be used. The operator is an important secondary user. The learner is the outcome beneficiary but may not operate the tool.

Primary job: “When a question and approved solution are available, help me produce and verify a clear explanation without rebuilding every production step.”

## PM decision

Design the approval workflow around the faculty reviewer while instrumenting operator rework and learner-facing quality separately. Do not combine their needs into one generic “education user.”

## Exercise and answer

Given requests for bulk upload, editable scripts, theme selection and automatic publishing, prioritize editable scripts and review status first. They address trust and control; automatic publishing increases risk before evaluation is mature.

## Interview practice

Strong answers distinguish user, buyer and beneficiary; explain when a persona is unsupported; use behaviours rather than stereotypes; identify the main job; and update personas when evidence changes.

## Reflection

Personas are decision tools. If they do not change prioritization or workflow design, they are decoration.
