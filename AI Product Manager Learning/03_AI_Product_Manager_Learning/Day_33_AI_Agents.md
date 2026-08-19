\# Day 33 - MCP (Model Context Protocol)



\## What is MCP?



Model Context Protocol (MCP) is a standard that allows AI models to communicate with external tools.



Instead of giving an AI model only a prompt, MCP allows the model to access:



\- Databases

\- APIs

\- Documents

\- Files

\- Development environments

\- Third-party applications



\---



\## Traditional AI Workflow



User → Prompt → LLM → Response



Example:



Question:

"How many students completed the course?"



The AI cannot access the database.



\---



\## MCP Workflow



User → LLM → MCP → Database → LLM → Response



Example:



Question:

"How many students completed the course?"



The AI calls the database through MCP.



The database returns:



1,250 students.



The AI generates the answer.



\---



\## MCP Components



\### Host



The application using AI.



Examples:



\- Cursor

\- Claude

\- ChatGPT



\---



\### Client



The AI model.



Examples:



\- GPT

\- Claude

\- Gemini



\---



\### Server



The external system.



Examples:



\- GitHub

\- PostgreSQL

\- Notion



\---



\## MCP in Your AI Educational Video Generator



Potential MCP integrations:



\- Question Bank

\- Solution Repository

\- Gemini API

\- ElevenLabs

\- Faculty Feedback

\- Learning Analytics



\---



\## Product Management Insight



MCP reduces hallucinations.



Instead of generating information from memory, the model retrieves real information from external systems.



This improves:



\- Accuracy

\- Reliability

\- Context awareness

