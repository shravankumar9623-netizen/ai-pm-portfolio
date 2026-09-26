\# Day 58 — Voice AI Decision Drill



\## Scenario



A Voice AI customer-support agent has:



95% intent accuracy.



However, users complain:



"It feels slow."



\## PM Question



What should you investigate first?



\## Incorrect First Reaction



Immediately replace the model.



\## Better PM Approach



Break down the complete latency journey:



Turn Detection

↓

Reasoning

↓

Tool Call

↓

Tool Response

↓

Response Generation

↓

First Audio



\## Investigation



Identify where the largest amount of user-perceived waiting occurs.



\## Decision



Optimize the largest contributor first.



\## Principle



Don't optimize the model before diagnosing the experience.



\## Interview Answer



"I would first decompose end-to-end conversational latency rather than immediately replacing the model. I would measure turn detection, reasoning, tool execution, response generation and time to first audio to identify the actual bottleneck."

