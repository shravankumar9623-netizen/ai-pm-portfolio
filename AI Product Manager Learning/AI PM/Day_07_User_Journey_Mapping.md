# Day 07 — User Journey Mapping

## Objective

Map a workflow across user actions, system responses, emotions, evidence and failure points.

## Journey

For result-deck creation:

| Stage | User action | Risk | Product response |
|---|---|---|---|
| Prepare | Select export | Wrong source/version | Show filename and detected schema |
| Configure | Choose cohort and subject | Incorrect filter | Preview included records |
| Validate | Confirm mappings and rules | Silent interpretation | Require explicit absence/max-mark rules |
| Generate | Create deck | Layout or calculation error | Validate data and slide bounds |
| Review | Inspect output | Missed anomaly | Keep slides editable and show summary |
| Share | Present/export | Confidentiality exposure | Keep processing local |

## PM decision

Prioritize validation moments before generation. The journey shows that speed without confidence would shift effort into review and correction.

## Exercise and answer

Given a video workflow with upload, parsing, script generation, rendering and faculty approval, place human checkpoints after parsing ambiguity and before publishing. Track failure reasons at each transition rather than one overall completion rate.

## Figma task

Create a six-frame low-fidelity flow with upload, mapping, preview, generation, review and export. Each frame must show its primary decision and error state. This is a documented exercise; no public prototype is claimed.

## Interview practice

Explain how journeys differ from funnels, how backstage systems are represented, where evidence belongs, how failure states affect scope and which step is the moment of value.

## Takeaway

A journey map becomes useful when it exposes decisions, handoffs and risk—not when it only illustrates a happy path.
