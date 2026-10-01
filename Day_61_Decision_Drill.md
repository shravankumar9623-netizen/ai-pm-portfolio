\# Day 61 — Decision Drill



\## Scenario



The product team proposes converting the existing AI Video Solution Generator into a fully autonomous agent.



The proposed system would:



Read input

→ Decide workflow

→ Choose tools

→ Generate script

→ Generate narration

→ Render

→ Evaluate

→ Retry automatically

→ Publish



\---



\# PM Question



Should we immediately approve the agentic architecture?



\---



\# Model Answer



No.



The first step should be decomposition and architecture comparison.



Evaluate:



1\. Which stages are deterministic?

2\. Which stages require dynamic reasoning?

3\. Which decisions actually benefit from autonomy?

4\. Which failures are recoverable?

5\. Which actions require human approval?

6\. What additional latency does the agent introduce?

7\. What additional cost does it introduce?

8\. How will success be evaluated?

9\. What happens when the agent chooses the wrong tool?

10\. Can the system safely recover?



\---



\# Architecture Comparison



\## Option A — Deterministic Workflow



Upload

→ Extract

→ Match

→ Script

→ Narration

→ Render

→ Validate

→ Review



Advantages:



\- Predictable

\- Easier to debug

\- Easier to evaluate

\- Better control



Limitations:



\- Less flexible

\- Harder to adapt to unusual cases



\---



\## Option B — Fully Agentic



Goal

→ Agent decides everything



Advantages:



\- Flexible

\- Dynamic



Limitations:



\- More difficult to control

\- Potentially higher cost

\- More difficult evaluation

\- More unpredictable



\---



\## Option C — Hybrid



Deterministic workflow

\+

Targeted agentic decisions

\+

Validation

\+

Human review



This option should be evaluated where dynamic decision-making provides clear user value.



\---



\# PM Decision Framework



Use:



USER PROBLEM

↓

TASK VARIABILITY

↓

DYNAMIC DECISION REQUIRED?

↓

RECOVERABLE FAILURE?

↓

RISK LEVEL

↓

HUMAN CHECKPOINT

↓

ARCHITECTURE



\---



\# Interview Version



If asked:



"Would you make this AI product agentic?"



Answer:



> I would not make it fully agentic by default. I would first map the workflow and identify where dynamic decisions create user value. Predictable stages should remain deterministic where possible, while agentic behavior can be introduced for variable reasoning or tool selection. I would then validate the design against task success, intervention rate, latency, cost and failure recovery.



\---



\# Key Lesson



> Do not confuse technical autonomy with product value.

