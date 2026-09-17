\# Day 52 — Failure \& Recovery Matrix



| Incident | Detection | Immediate Action | Recovery | User Impact |

|---|---|---|---|---|

| Malformed JSON | Schema validation | Reject output | Retry/fallback | Delayed processing |

| Wrong TTS pronunciation | Pronunciation validation | Flag audio | Regenerate | Audio revision |

| Slow alignment | Latency monitoring | Detect threshold breach | Retry/queue | Longer processing |

| Rendering failure | Job status | Mark failed | Retry from checkpoint | Delayed video |

| Incorrect answer | Evaluation/human review | Stop release | Regenerate + review | Video not released |



\## Important



Automatic recovery should not be used when the recovered output may still be unsafe or incorrect.



Human review should be used when the business impact of incorrect output is high.

