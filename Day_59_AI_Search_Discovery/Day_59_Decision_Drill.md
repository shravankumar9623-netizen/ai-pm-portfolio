\# Day 59 — AI Search Decision Drill



\## Scenario



AI Search produces excellent answers.



However, users complain:



"The search feels slow."



\---



\# Weak PM Response



"We need a better LLM."



Why this is weak:



The LLM may not be the actual bottleneck.



\---



\# Strong PM Analysis



Decompose the complete pipeline:



Query Processing

↓

Retrieval

↓

Reranking

↓

Context Construction

↓

LLM Generation

↓

Citation Generation



Measure latency at every stage.



\---



\# Investigation Questions



1\. What is total time-to-useful-answer?

2\. Which stage contributes the most latency?

3\. Is retrieval slow?

4\. Is reranking expensive?

5\. Is context too large?

6\. Is model generation slow?

7\. Are citations adding latency?

8\. Does latency vary by query type?



\---



\# PM Decision



Only after identifying the bottleneck should we decide whether to:



\- Optimize retrieval

\- Reduce reranking cost

\- Reduce context size

\- Cache common queries

\- Stream generation

\- Change model

\- Change architecture



\---



\# Interview Answer



"Before changing the model, I would instrument the end-to-end search pipeline and identify which stage contributes most to time-to-useful-answer. I would then optimize the highest-impact bottleneck while monitoring answer quality and task completion."



\---



\# Key Lesson



Diagnose before optimizing.



Do not treat every AI product problem as a model problem.

