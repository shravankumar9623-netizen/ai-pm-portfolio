\# Day 58 — Turn-Taking Design



\## Definition



Turn-taking defines how the Voice AI system determines when the user has finished speaking and when the AI should begin or stop responding.



\## Text Interaction



User

↓

Send

↓

AI

↓

Response



\## Voice Interaction



User Speaks

↓

User Pauses

↓

AI Detects End

↓

AI Responds

↓

User Interrupts

↓

AI Stops

↓

New Turn



\## Key Product Decisions



\- When should the AI start speaking?

\- How long should the system wait after silence?

\- When should the AI stop?

\- How should interruptions work?

\- How quickly should the AI stop after a user interruption?

\- When should the AI ask for clarification?

\- How should conversational context be maintained?



\## Failure Example



User:



"Can you help me with my..."



AI:



"Sure, what can I do?"



Problem:

Premature turn detection.



\## Another Failure



User:



"Stop."



AI continues speaking.



Problem:

Poor interruption / barge-in handling.



\## PM Metrics



\- End-of-turn accuracy

\- Turn Success Rate

\- Barge-in Success

\- Interruption Response Time

\- Clarification Rate



\## Product Principle



Turn-taking is a UX decision, not only an engineering implementation detail.

