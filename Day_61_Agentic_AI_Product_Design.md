\# Day 61 — Agentic AI Product Design



\*\*Date:\*\* 01 October 2026  

\*\*Theme:\*\* Agentic AI Product Design



\---



\## 1. Day Objective



By the end of Day 61, I should be able to:



1\. Explain the difference between an AI workflow and an AI agent.

2\. Identify when agentic behavior is actually required.

3\. Decompose a user goal into tasks, decisions, tools, actions, and validation.

4\. Design human checkpoints and autonomy boundaries.

5\. Define metrics for agent task success.

6\. Explain workflow vs agent trade-offs in a PM interview.

7\. Design an agentic product experience in Figma.



\---



\# 2. Core AI PM Concept



\## Agentic Product Design



An agentic AI product allows an AI system to dynamically determine how to accomplish a goal using context, tools, intermediate decisions, and actions.



\### Basic AI experience



USER

↓

PROMPT

↓

LLM

↓

ANSWER



\### Workflow



USER

↓

STEP 1

↓

LLM

↓

STEP 2

↓

TOOL

↓

STEP 3

↓

OUTPUT



\### Agent



USER GOAL

↓

AGENT

↓

PLAN

↓

SELECT TOOL

↓

ACT

↓

OBSERVE

↓

DECIDE NEXT STEP

↓

COMPLETE / ESCALATE



\---



\# 3. Workflow vs Agent



| Dimension | Workflow | Agent |

|---|---|---|

| Path | Predefined | Dynamic |

| Steps | Known in advance | Can vary |

| Tool selection | Usually predefined | Can be dynamically selected |

| Predictability | Higher | Lower |

| Flexibility | Lower | Higher |

| Debugging | Easier | More complex |

| Cost control | Easier | Potentially harder |

| Best suited for | Repeatable processes | Variable tasks |

| Autonomy | Limited | Higher |



\---



\# 4. Core PM Principle



> Do not introduce an agent merely because an LLM is involved.



The product should use agentic behavior when dynamic decision-making creates meaningful user value.



\---



\# 5. Agentic Product Decision Framework



Before introducing an agent, ask:



\### 1. Is the task variable?



If users generally follow the same sequence, a workflow may be sufficient.



\### 2. Does the AI need to select tools dynamically?



If the same tool is always used, deterministic orchestration may be better.



\### 3. Does the AI need to react to intermediate results?



If yes, agentic behavior may become useful.



\### 4. Are failures recoverable?



If an incorrect action can create serious consequences, stronger controls are required.



\### 5. Is human approval required?



Define exactly where the human should remain in control.



\---



\# 6. AI Video Solution Generator Application



The AI Video Solution Generator can be viewed as a multi-stage AI workflow:



Upload

↓

Extract Questions

↓

Map Questions to Slides

↓

Match Solutions

↓

Generate Script

↓

Generate Narration

↓

Synchronize Annotation

↓

Render Video

↓

Validate

↓

Human Review

↓

Approve



Not every stage requires an agent.



Potential AI decision-making areas:



\- Understanding questions

\- Matching questions and solutions

\- Generating teaching scripts

\- Context-aware pronunciation

\- Annotation decisions

\- Quality validation

\- Recovery from certain failures



Potential deterministic areas:



\- File upload

\- Storage

\- Rendering pipeline

\- Database operations

\- Output packaging

\- Fixed validation thresholds



\---



\# 7. Hybrid Architecture



A practical AI product may combine:



DETERMINISTIC WORKFLOW

\+

TARGETED AGENTIC DECISION-MAKING

\+

HUMAN REVIEW



This can provide a balance between:



\- flexibility

\- reliability

\- cost

\- latency

\- control

\- explainability



\---



\# 8. Task-Level Success



For an agentic product, usage alone is not enough.



The important question is:



> Did the agent successfully complete the user's intended task?



Useful metrics include:



\- Task Completion Rate

\- Task Success Rate

\- Human Intervention Rate

\- Rework Rate

\- Tool Success Rate

\- Recovery Rate

\- Time to Completion

\- Cost per Successful Task

\- Escalation Rate

\- Repeat Usage



\---



\# 9. Day 61 Mental Model



USER GOAL

↓

TASK

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

OUTCOME



\---



\# 10. Key Takeaway



> Maximum autonomy does not automatically mean maximum product value.



A strong AI PM decides where autonomy creates measurable user value and where deterministic systems provide better reliability and control.

