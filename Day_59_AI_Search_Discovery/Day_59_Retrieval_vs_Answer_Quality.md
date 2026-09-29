\# Day 59 — Retrieval Quality vs Answer Quality



\## Core Concept



Retrieval Quality ≠ Answer Quality



An AI system can produce a fluent answer while using incorrect or irrelevant retrieved information.



Therefore, answer quality alone cannot tell us where the system failed.



\---



\# 1. Retrieval Failure



Example:



User:



"Explain angular momentum for Class 11."



Retrieved:



\- Linear momentum

\- Newton's laws

\- Projectile motion



The LLM may generate a grammatically correct response.



However, the system has already failed at retrieval.



\---



\# 2. Generation Failure



Example:



The system correctly retrieves:



\- Angular momentum definition

\- Conservation of angular momentum

\- Relevant Class 11 examples



But the generated answer is:



\- Too advanced

\- Incorrect

\- Incomplete

\- Poorly structured



The retrieval layer worked.



The generation layer failed.



\---



\# 3. Grounding Failure



Correct information may be retrieved but the final answer may introduce unsupported information.



Therefore, the PM should measure:



\- Groundedness

\- Citation correctness

\- Unsupported claims

\- Source-answer consistency



\---



\# 4. Diagnostic Framework



When an AI Search response is poor, investigate in this order:



1\. Was the query understood correctly?

2\. Was the correct intent identified?

3\. Was relevant information retrieved?

4\. Was relevant information ranked highly?

5\. Was the answer grounded in retrieved information?

6\. Was the final response generated correctly?

7\. Was the answer useful for the user's task?



\---



\# 5. PM Principle



Do not immediately replace the LLM.



First identify the failure layer.



Possible interventions:



Query problem

→ Improve query understanding



Retrieval problem

→ Improve indexing/retrieval



Ranking problem

→ Improve ranking signals



Grounding problem

→ Improve context and source controls



Generation problem

→ Improve prompting/model/configuration



UX problem

→ Improve presentation and interaction

