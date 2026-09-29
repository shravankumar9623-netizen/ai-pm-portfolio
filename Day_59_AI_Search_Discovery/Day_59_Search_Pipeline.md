\# Day 59 — AI Search Pipeline



\## Complete Pipeline



User Query

↓

Query Understanding

↓

Intent Detection

↓

Retrieval

↓

Ranking

↓

Reranking

↓

Grounding

↓

Answer Generation

↓

Citations

↓

User Action



\---



\# 1. Query Understanding



Purpose:



Convert the user's natural language into structured search requirements.



Example:



"Find difficult Class 11 rotational motion questions on angular momentum."



Structured representation:



Class: 11

Subject: Physics

Chapter: Rotational Motion

Concept: Angular Momentum

Difficulty: Difficult



\---



\# 2. Intent Detection



Determine what the user actually wants.



Possible intents:



\- Find information

\- Compare

\- Solve

\- Explain

\- Discover

\- Take an action



\---



\# 3. Retrieval



Find potentially relevant information.



Possible sources:



\- Question database

\- Solution database

\- Metadata

\- Concept tags

\- Documents

\- Knowledge base



\---



\# 4. Ranking



Determine which retrieved items should appear first.



Potential ranking signals:



\- Relevance

\- Class

\- Subject

\- Concept

\- Difficulty

\- Content quality

\- Recency

\- User context



\---



\# 5. Reranking



A second relevance stage can refine the initial results.



The goal is to improve the ordering of candidate results.



\---



\# 6. Grounding



Connect the generated response to retrieved evidence.



The system should avoid presenting unsupported claims as facts.



\---



\# 7. Answer Generation



The model transforms the retrieved context into a user-facing response.



Quality dimensions:



\- Accuracy

\- Relevance

\- Clarity

\- Completeness

\- Groundedness



\---



\# 8. Citations



Citations increase transparency and allow users to verify the source of information.



\---



\# 9. User Action



Search should lead to an outcome.



For the AI Video Solution Generator:



Search

→ Select question

→ Open solution

→ Generate video

→ Use content



\---



\# PM Mental Model



Do not think:



"Search = retrieval."



Think:



"Search = query understanding + retrieval + ranking + grounding + answer + action."

