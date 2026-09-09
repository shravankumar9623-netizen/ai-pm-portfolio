# Day 33 — Model Context Protocol

## Objective

Understand MCP as a standard connection between an AI host and external tools or contextual resources.

MCP can expose tools, resources and prompts through a defined client-server protocol. It can reduce custom integration work, but it does not guarantee factuality, security or lower hallucination by itself. Product quality still depends on source authority, permissions, tool behaviour and evaluation.

## Flagship application

Potential servers could expose approved question-bank search, solution retrieval and feedback records. The host would decide when to request a resource or call a tool. Sensitive write operations should be narrowly scoped and require approval.

## Security decisions

- Use least-privilege tools and explicit authorization.
- Separate read and write capabilities.
- Validate tool inputs and outputs.
- Log tool identity, version, result and failure without leaking confidential content.
- Provide timeout, retry and manual fallback behaviour.

## Exercise and model answer

Scenario: an MCP server exposes `search_questions`, `get_solution` and `publish_video`. Give an early agent the first two tools. Withhold `publish_video` until identity, approval, audit and rollback are proven. MCP standardizes access; it does not decide product policy.

## Interview questions and answers

MCP separates hosts, clients and servers; resources provide context; tools perform actions; permission limits blast radius; and evaluation must include tool selection, argument correctness, result use and end-user outcome.

## Reflection

The PM decision is not simply whether to “use MCP.” It is which capability is exposed, to whom, with what evidence, control and fallback.
