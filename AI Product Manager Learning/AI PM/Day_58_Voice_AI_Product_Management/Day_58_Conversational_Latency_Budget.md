\# Day 58 — Conversational Latency Budget



\## Definition



Conversational Latency Budget is the total amount of time the Voice AI product can spend processing a conversational turn before the experience begins to feel slow.



\## End-to-End Journey



User stops speaking

↓

Turn Detection

↓

Model Reasoning

↓

Tool Execution

↓

Response Generation

↓

First Useful Audio



\## Important Distinction



Model Latency ≠ User-Perceived Latency



The model may respond quickly while the overall product still feels slow because of:



\- turn detection

\- backend APIs

\- tool execution

\- response generation

\- audio startup



\## Example



| Stage | Example |

|---|---:|

| Turn Detection | 200 ms |

| Model Reasoning | 500 ms |

| Tool Call | 800 ms |

| Response Generation | 300 ms |

| Audio Startup | 200 ms |

| Total | 2.0 sec |



\## PM Question



Where is the user actually waiting?



\## Key Metric



Time to First Useful Audio



\## Product Principle



Optimize the complete conversational experience rather than one technical component.



\## Failure



User finishes speaking and waits several seconds without feedback.



\## Recovery



Use an appropriate acknowledgement when a longer backend action is required.



Example:



"I'm checking that now."



\## PM Decision



Before changing the model, identify which stage contributes most to perceived waiting.

