# Day 23 — Embeddings and Vector Search

## Objective

Understand semantic retrieval and its evaluation requirements.

Embeddings map content into vectors so semantic neighbours can be retrieved. Product choices include chunking, metadata filters, index freshness, top-k, similarity threshold and permissions.

## Worked example

For approved solution retrieval, chunk by question or logical solution step rather than arbitrary character length. Attach subject, chapter, version and access metadata. Filter before semantic ranking so material from the wrong syllabus cannot appear merely because it is similar.

## Simulated exercise

**Simulated learning data — created for PM practice.** Of 50 queries, the correct approved item appears in top-1 for 36, top-3 for 44 and top-5 for 47. Recall@1 is 72%, Recall@3 88% and Recall@5 94%.

## PM decision

Use top-3 for a reviewed pilot, display sources and investigate the six misses at top-3. Do not trade access control or syllabus correctness for recall.

## Interview questions and answers

Embeddings represent semantic similarity. Chunking changes retrieval units. Metadata filters enforce scope. Recall@k measures whether relevant content appears. Similarity does not prove factual correctness.

## Reflection

Vector search is a retrieval component; user value depends on source quality, permissions, ranking and downstream use.
