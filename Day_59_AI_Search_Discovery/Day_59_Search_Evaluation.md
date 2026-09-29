\# Day 59 — AI Search Evaluation



\## Evaluation Framework



AI Search should be evaluated at multiple layers.



\---



\# 1. Retrieval Evaluation



Questions:



\- Did we retrieve the correct information?

\- Did we retrieve enough relevant information?

\- Did the relevant result appear near the top?



Metrics:



\- Recall@K

\- Precision@K

\- NDCG

\- Retrieval relevance



\---



\# 2. Ranking Evaluation



Questions:



\- Are the best results appearing first?

\- Are irrelevant results being pushed down?

\- Does ranking reflect user intent?



Metrics:



\- NDCG

\- Top-K relevance

\- Search success



\---



\# 3. Generation Evaluation



Questions:



\- Is the answer correct?

\- Is it complete?

\- Is it understandable?

\- Is it grounded?



Metrics:



\- Answer accuracy

\- Groundedness

\- Citation correctness

\- Completeness

\- Hallucination rate



\---



\# 4. Product Evaluation



Questions:



\- Did the user find what they needed?

\- Did they reformulate the query?

\- Did they abandon the search?

\- Did they complete the intended task?



Metrics:



\- Search success rate

\- Query reformulation rate

\- Zero-result rate

\- Search abandonment

\- Time to useful answer

\- Task completion rate



\---



\# 5. Latency Evaluation



Break end-to-end latency into:



Query processing

\+

Retrieval

\+

Reranking

\+

Context construction

\+

Generation

\+

Citation generation



Measure each component.



\---



\# 6. AI PM Principle



If users complain that AI Search is slow, do not immediately conclude that the model is too slow.



First identify the actual bottleneck.



\---



\# 7. Quality vs Speed Trade-off



A change should be evaluated using both:



Quality impact

\+

Latency impact



A faster system that significantly reduces answer quality may not improve the product.



Similarly, a highly accurate system that is too slow may reduce task completion.



\---



\# 8. Product North Star



The ultimate objective is not:



"Highest retrieval score."



It is:



"Help the user complete the intended task successfully."

