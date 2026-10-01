\# Day 61 — Figma Agent Workspace



\## Objective



Design an interface that makes an AI agent's execution understandable to the user.



\---



\# Frame



Size:



1440 × 900 px



Name:



Agent Workspace



\---



\# Reference Wireframe



┌──────────────────────────────────────────────────────────────────────┐

│ AGENT WORKSPACE                                      ● RUNNING       │

│ Research Intelligence Agent                         Task #A102       │

├───────────────────────┬─────────────────────────────┬────────────────┤

│ USER GOAL             │ AGENT EXECUTION             │ TASK STATUS    │

│                       │                             │                │

│ Research AI-based     │ 1. Understand request ✓    │ Goal           │

│ assessment methods    │ 2. Search papers ✓          │ ✓              │

│                       │ 3. Evaluate relevance ✓     │ Search         │

│ \[ View Request ]      │ 4. Identify gaps ●          │ ✓              │

│                       │ 5. Search again             │ Comparison     │

│                       │ 6. Prepare briefing         │ ●              │

│                       │                             │ Human Review   │

│                       │                             │ ○              │

├───────────────────────┴─────────────────────────────┴────────────────┤

│ TOOL / ACTION LOG                                                     │

│ Search → Retrieved 24 papers → Re-ranked 8 → Gap detected → Search  │

│ again → 5 papers selected                                            │

├──────────────────────────────────────────────────────────────────────┤

│ HUMAN CHECKPOINT                                                      │

│ Agent requires approval before final briefing                         │

│                              \[Review Evidence] \[Approve]              │

└──────────────────────────────────────────────────────────────────────┘



\---



\# 1. Header



Height:



80 px



Content:



\- Agent Workspace

\- Agent name

\- Task ID

\- Status



Example:



Agent Workspace

Research Intelligence Agent

Task #A102

● RUNNING



\---



\# 2. Left Panel



Width:



300 px



Title:



USER GOAL



Content:



Research AI-based assessment methods.



Include:



\- Goal summary

\- User request

\- View Request button



\---



\# 3. Center Panel



Width:



700 px



Title:



AGENT EXECUTION



Create vertical execution timeline.



Steps:



1\. Understand request ✓

2\. Search papers ✓

3\. Evaluate relevance ✓

4\. Identify gaps ●

5\. Search again

6\. Prepare briefing



States:



\- Completed

\- Running

\- Pending



\---



\# 4. Right Panel



Width:



300 px



Title:



TASK STATUS



Cards:



Goal — Completed

Search — Completed

Comparison — Running

Human Review — Pending



\---



\# 5. Tool / Action Log



Place at bottom.



Title:



TOOL / ACTION LOG



Example:



Search

→ Retrieved 24 papers

→ Re-ranked 8

→ Gap detected

→ Search again

→ 5 papers selected



Purpose:



Show what the agent actually did.



\---



\# 6. Human Checkpoint



Create a dedicated section.



Title:



HUMAN CHECKPOINT



Text:



Agent requires approval before final briefing.



Buttons:



\[Review Evidence]



\[Approve]



\---



\# 7. Visual Design Principles



Use:



\- Clean enterprise UI

\- Generous whitespace

\- Clear hierarchy

\- Simple status indicators

\- Minimal icons

\- Consistent spacing

\- Professional typography



Avoid:



\- Crowded interface

\- Excessive cards

\- Decorative AI graphics

\- Robot illustrations

\- Fake analytics

\- Unnecessary animations



\---



\# 8. Product Skill Being Practiced



This design demonstrates:



Goal

→ Agent

→ Tools

→ Actions

→ State

→ Human Checkpoint

→ Outcome



The interface should communicate agent behavior, not simply present another chatbot.



\---



\# 9. Figma Deliverable



Create:



\### Frame 1

Agent Workspace — 1440 × 900



\### Required sections



1\. Header

2\. User Goal

3\. Agent Execution

4\. Task Status

5\. Tool / Action Log

6\. Human Checkpoint



\---



\# 10. Final Design Principle



> Users should understand what the agent is doing, what it has done, what it is about to do, and when they need to intervene.

