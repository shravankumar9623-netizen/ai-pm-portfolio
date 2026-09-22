\# Day 55 — Agent Threat Model



\## Agent Attack Surface



An agent's attack surface increases with:



\- Tools

\- Permissions

\- Data access

\- External integrations

\- Memory

\- Autonomous actions



\## Example



Simple chatbot:

Limited tools

→ Smaller attack surface



Agent:

Data + Tools + Memory + Actions

→ Larger attack surface



\## Threat



Untrusted content attempts to influence agent behavior.



\## Security Questions



1\. What can the agent access?

2\. What can the agent change?

3\. What can the agent send?

4\. Which actions require approval?

5\. What happens if the agent is manipulated?

6\. How quickly can the system detect the problem?

7\. Can the agent be stopped?



\## Blast Radius



Blast radius represents the potential impact if an agent is compromised.



Low permission:

Lower blast radius



Broad permissions:

Higher blast radius



\## PM Principle



Minimize permissions and minimize blast radius.

