\# Day 61 — Agent Task Decomposition



\## 1. Objective



Learn to convert a high-level user goal into:



\- Tasks

\- Subtasks

\- Decisions

\- Tools

\- Actions

\- Validation

\- Human checkpoints

\- Final outcomes



\---



\# 2. Task Decomposition Framework



USER GOAL

↓

DESIRED OUTCOME

↓

PRIMARY TASK

↓

SUBTASKS

↓

DECISIONS

↓

TOOLS

↓

ACTIONS

↓

VALIDATION

↓

HUMAN CHECKPOINT

↓

FINAL OUTCOME



\---



\# 3. Example — AI Academic Research Agent



\## User Goal



"Find the most relevant research papers about AI-based assessment, compare the approaches, and prepare a short briefing."



\---



\## Step 1 — Understand Goal



Agent identifies:



\- Research topic

\- Desired comparison

\- Expected output

\- Level of detail



\---



\## Step 2 — Create Search Strategy



Potential decisions:



\- Which keywords?

\- Which sources?

\- What date range?

\- What types of papers?



\---



\## Step 3 — Search



Tool:



\- Search engine

\- Research database



Output:



Collection of candidate papers.



\---



\## Step 4 — Evaluate Relevance



Agent evaluates:



\- Topic relevance

\- Method relevance

\- Research quality indicators

\- Fit with user's objective



\---



\## Step 5 — Identify Gaps



The agent asks:



> Is the available evidence sufficient?



If not:



Search again.



\---



\## Step 6 — Compare



Extract:



\- Approach

\- Data

\- Method

\- Strengths

\- Limitations

\- Outcomes



\---



\## Step 7 — Synthesize



Combine evidence into a structured briefing.



\---



\## Step 8 — Human Checkpoint



Human reviews:



\- Sources

\- Evidence

\- Conclusions

\- Final briefing



\---



\# 4. Decomposition Table



| Stage | Agent responsibility | Tool | Human checkpoint |

|---|---|---|---|

| Understand | Interpret request | LLM | No |

| Search | Generate queries | Search | No |

| Retrieve | Collect papers | Search/database | No |

| Evaluate | Assess relevance | LLM + metadata | No |

| Identify gaps | Decide whether more search is required | LLM | No |

| Compare | Extract dimensions | LLM | No |

| Synthesize | Combine evidence | LLM | Yes |

| Briefing | Produce final output | LLM | Yes |



\---



\# 5. AI Video Solution Generator Decomposition



\## User Goal



Create a high-quality educational solution video.



\### Task



Generate an approved video from source material.



\### Subtasks



1\. Upload source files

2\. Extract questions

3\. Map questions to slides

4\. Match solutions

5\. Generate teaching script

6\. Generate narration

7\. Synchronize narration and annotation

8\. Render video

9\. Validate quality

10\. Human review

11\. Approve

12\. Download



\---



\# 6. Decision Points



Potential dynamic decisions:



\- How should a question be explained?

\- Which solution evidence corresponds to the question?

\- What should the narration emphasize?

\- How should the explanation be structured?

\- How should pronunciation be handled?

\- Does the output meet quality thresholds?

\- Should a failed stage be retried?



\---



\# 7. Deterministic vs Dynamic



\## Deterministic



\- File upload

\- File storage

\- Rendering

\- Database operations

\- Output packaging

\- Fixed validation rules



\## Dynamic



\- Question understanding

\- Solution interpretation

\- Teaching explanation

\- Context-aware pronunciation

\- Certain quality assessments

\- Failure recovery



\---



\# 8. PM Insight



A high-level AI feature becomes much easier to design when decomposed into:



> Goal → Task → Decision → Tool → Action → Validation → Outcome



\---



\# 9. Exercise



For any AI product, ask:



1\. What is the user's goal?

2\. What task must be completed?

3\. What subtasks are involved?

4\. Which steps require AI reasoning?

5\. Which steps can be deterministic?

6\. Which tools are required?

7\. Where can the system fail?

8\. How can it recover?

9\. Where should humans intervene?

10\. What defines successful completion?



\---



\## Key Takeaway



> Agent design begins with task decomposition, not model selection.

