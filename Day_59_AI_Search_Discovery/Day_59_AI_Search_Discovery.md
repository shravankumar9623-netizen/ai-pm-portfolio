\# Day 59 — AI Search \& Discovery



Date: 29 September 2026



\## Theme



AI Search \& Discovery



\## Primary AI PM Skill



Understanding how AI-powered search converts a user query into relevant information, a grounded answer, and ultimately a useful user action.



\---



\# 1. What is AI Search?



AI Search combines traditional information retrieval with AI-based query understanding, ranking, reasoning, grounding, and answer generation.



A conventional search system may primarily return links or documents.



An AI search system can:



\- Understand the user's intent

\- Retrieve relevant information

\- Rank relevant information

\- Synthesize information

\- Generate an answer

\- Provide citations or sources

\- Help the user take an action



The important PM principle is:



> AI Search is a complete product experience, not simply an LLM feature.



\---



\# 2. Core AI Search Pipeline



USER QUERY

↓

QUERY UNDERSTANDING

↓

INTENT DETECTION

↓

RETRIEVAL

↓

RANKING

↓

RERANKING

↓

GROUNDING

↓

ANSWER GENERATION

↓

CITATIONS / SOURCES

↓

USER ACTION



Each stage solves a different problem.



\---



\# 3. Retrieval Quality vs Answer Quality



A search product can fail because:



1\. The wrong information was retrieved.

2\. The right information was retrieved but ranked poorly.

3\. The right information was retrieved but the answer was poorly generated.

4\. The answer was not properly grounded.

5\. The answer was correct but not useful for the user's task.



Therefore:



Retrieval Quality ≠ Answer Quality



A strong AI PM must identify the stage where the failure occurred.



\---



\# 4. Example — AI Video Solution Generator



User query:



"Class 11 Physics difficult angular momentum questions from rotational motion."



The system can interpret:



Class = 11

Subject = Physics

Chapter = Rotational Motion

Concept = Angular Momentum

Difficulty = Difficult

Content Type = Question + Solution



The system then retrieves relevant questions and solutions.



Potential ranking signals:



\- Concept match

\- Class match

\- Difficulty match

\- Question type

\- Solution availability

\- Content quality



The product can then allow the faculty member to:



Open Solution

→ Generate Video

→ Add to Assignment



\---



\# 5. AI PM Questions



When designing AI Search, ask:



\- What is the user's search intent?

\- What information should be retrieved?

\- What signals determine relevance?

\- How should results be ranked?

\- How do we verify grounding?

\- How do we measure answer quality?

\- How do we measure search success?

\- What happens when no relevant information exists?

\- How quickly should the user receive a useful answer?

\- What action should happen after the search?



\---



\# 6. Key Metrics



Retrieval:



\- Recall@K

\- Precision@K

\- NDCG

\- Retrieval relevance



Answer:



\- Answer accuracy

\- Groundedness

\- Citation correctness

\- Completeness

\- Hallucination rate



Product:



\- Search success rate

\- Search abandonment

\- Query reformulation rate

\- Zero-result rate

\- Time to useful answer

\- Task completion rate



\---



\# 7. PM Principle



Do not optimize an isolated AI metric.



Optimize the user's outcome.



The PM should understand the relationship:



AI Quality

\+

Search Quality

\+

UX

\+

Latency

\+

Trust

↓

User Outcome



\---



\# 8. Today's Learning Outcome



By the end of Day 59, I should be able to explain:



1\. How AI Search works.

2\. The difference between retrieval and generation.

3\. Why retrieval quality and answer quality are different.

4\. How to diagnose AI Search failures.

5\. Which metrics should be used at different pipeline stages.

6\. How to translate an AI Search problem into a product decision.



\---



\# 9. Coach Lesson



Search is a Product Decision, Not a Retrieval Feature.



A PM should not simply ask:



"Which model should we use?"



The stronger question is:



"Which part of the search experience is failing and what user outcome are we trying to improve?"

