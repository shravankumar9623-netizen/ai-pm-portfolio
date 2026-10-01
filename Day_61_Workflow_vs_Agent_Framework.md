\# Day 61 — Workflow vs Agent Framework



\## 1. Purpose



This framework helps determine whether an AI product should use:



1\. A deterministic workflow

2\. A single agent

3\. A hybrid workflow + agent architecture



\---



\# 2. Deterministic Workflow



A workflow is appropriate when:



\- The process is predictable.

\- The steps are known.

\- Tool selection is predetermined.

\- Failure conditions are well understood.

\- Reliability is more important than flexibility.

\- The user journey follows a repeatable sequence.



\### Example



AI Video Solution Generator:



Upload

→ Extract

→ Match

→ Script

→ Narration

→ Render

→ Validate

→ Review



\---



\# 3. Agent



An agent becomes useful when:



\- The task varies significantly between users.

\- The AI needs to choose actions dynamically.

\- The AI needs to select different tools.

\- Intermediate results affect the next step.

\- The AI needs to recover or adapt.

\- The final path cannot be fully predetermined.



\### Example



Research Agent:



Understand goal

→ Search

→ Evaluate

→ Identify gaps

→ Search again

→ Compare

→ Synthesize

→ Produce briefing



\---



\# 4. Hybrid



A hybrid system combines deterministic control with targeted autonomy.



Example:



File Upload

↓

Deterministic Processing

↓

AI Agent

↓

Dynamic Decision

↓

Tool Execution

↓

Deterministic Validation

↓

Human Review

↓

Output



\---



\# 5. Decision Matrix



| Question | Workflow | Agent |

|---|---|---|

| Is the sequence predictable? | Strong fit | Weak need |

| Does tool selection vary? | Limited need | Strong fit |

| Do intermediate results change the next step? | Limited | Strong |

| Is high predictability required? | Strong | Requires guardrails |

| Is failure easy to recover from? | Not essential | Important |

| Is human approval required? | Easy to define | Must be explicit |

| Is task variability high? | Lower fit | Higher fit |

| Is cost tightly constrained? | Easier | Requires monitoring |



\---



\# 6. Product Decision Rule



Use:



\### Workflow when:

The path is known.



\### Agent when:

The path needs to be discovered dynamically.



\### Hybrid when:

Most of the process is predictable but some decisions require dynamic reasoning.



\---



\# 7. Example



\## User request



"Research AI-based assessment methods and prepare a briefing."



\### Workflow



Search

→ Retrieve

→ Summarize

→ Output



\### Agent



Understand objective

→ Build search strategy

→ Search

→ Evaluate relevance

→ Identify information gaps

→ Search again

→ Compare evidence

→ Synthesize

→ Prepare briefing



\---



\# 8. PM Questions Before Building an Agent



1\. What user problem requires autonomy?

2\. Which steps genuinely need dynamic decisions?

3\. Which steps can remain deterministic?

4\. What tools can the agent access?

5\. What happens if a tool fails?

6\. Can the agent recover?

7\. Where does human approval occur?

8\. How is task success evaluated?

9\. What is the expected latency?

10\. What is the cost per successful task?



\---



\# 9. Final Framework



USER PROBLEM

↓

TASK VARIABILITY

↓

DYNAMIC DECISION REQUIRED?

↓

YES → CONSIDER AGENT

NO → WORKFLOW MAY BE ENOUGH

↓

IF MIXED → HYBRID



\---



\## Core Principle



> Build the simplest architecture capable of reliably solving the user's problem.

