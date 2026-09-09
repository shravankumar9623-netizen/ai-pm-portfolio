# Day 21 — LLM Fundamentals for Product Managers

## Objective

Understand the product implications of tokens, context, sampling and hallucination.

LLMs predict token sequences from context; they do not retrieve truth by default. Context windows limit what can be considered. Temperature affects variability, while prompts, system instructions, tools and retrieved evidence shape behaviour. Longer context increases cost and can introduce irrelevant information.

## Exercise

Three tasks are proposed: creative headline generation, policy-answer drafting and marks calculation. Use higher controlled variation for headlines, grounded low-variance drafting with citations and review for policy, and deterministic code for calculation.

## PM decision

For educational explanations, require approved-source grounding, structured output, model/version logging and reviewer control. Refuse unsupported claims instead of encouraging plausible completion.

## Evaluation

Assess correctness, groundedness, completeness, clarity and harmful fabrication. Product metrics include acceptance, edits and time-to-approved-output; system metrics include latency and token cost.

## Interview questions and answers

Tokens determine context and cost. Temperature changes sampling. Hallucination is unsupported plausible output. Prompting cannot guarantee factuality. Tools and retrieval extend capability but add failure modes.

## Reflection

LLM fluency means understanding uncertainty and system design, not pretending the model reasons like an accountable subject expert.
