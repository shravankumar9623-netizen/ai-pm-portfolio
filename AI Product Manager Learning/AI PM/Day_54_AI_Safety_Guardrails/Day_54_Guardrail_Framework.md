\# Day 54 — Guardrail Framework



\## Guardrail Architecture



Input

→ Validate

→ AI

→ Evaluate

→ Risk Classify

→ Allow / Review / Block

→ Action

→ Monitor



\## Input Guardrails



Validate:



\- File type

\- Input format

\- Malicious input

\- Sensitive information

\- Unsupported requests



\## Output Guardrails



Validate:



\- Accuracy

\- Schema

\- Safety

\- PII

\- Policy compliance

\- Source consistency



\## Action Guardrails



Control:



\- Tool access

\- Permissions

\- Data modification

\- External communication

\- Publishing

\- Destructive actions



\## Risk-Based Autonomy



LOW:

Automatic



MEDIUM:

Automatic + monitoring or optional review



HIGH:

Human approval



CRITICAL:

Block or mandatory approval



\## PM Principle



Safety should be designed into the workflow rather than added after launch.

