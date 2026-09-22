\# Day 55 — Agent Permissions Framework



\## Least Privilege



Give the agent only the permissions required to perform its intended task.



\## Example



Required:

Read current project



Not required:

Read all projects



Required:

Generate script



Not required:

Delete project



Required:

Prepare video



Not automatically required:

Publish video



\## Permission States



\### ALLOWED



Agent can perform the action.



\### APPROVAL REQUIRED



Agent can prepare the action but needs human confirmation.



\### BLOCKED



Agent cannot perform the action.



\## AI Video Example



| Capability | Permission |

|---|---|

| Read current question | Allowed |

| Read solution | Allowed |

| Generate script | Allowed |

| Modify answer | Approval required |

| Publish video | Approval required |

| Delete source PDF | Blocked |

| Access API secrets | Blocked |



\## Core Principle



The model should not be the final authority on its own permissions.

