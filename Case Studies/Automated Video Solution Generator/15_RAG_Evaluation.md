# RAG Evaluation Framework

## Product

Automated Video Solution Generator

## Objective

Evaluate whether semantic retrieval improves the accuracy, relevance, and quality of AI-generated educational video solutions.

---

# 1. Problem

Adding RAG to an AI product does not automatically improve output quality.

The system may retrieve irrelevant information, miss important context, or provide correct context but still generate an incorrect explanation.

Therefore, retrieval and generation must be evaluated separately.

---

# 2. Evaluation Architecture

Question
↓
Query Embedding
↓
Vector Search
↓
Retrieved Context
↓
Context Evaluation
↓
LLM Generation
↓
Answer Evaluation
↓
Faculty Review
↓
Product Outcome

---

# 3. Retrieval Metrics

## Precision

Measures how many retrieved results are actually relevant.

Precision = Relevant Retrieved Results / Total Retrieved Results

## Recall

Measures how much of the relevant information was successfully retrieved.

Recall = Relevant Retrieved Results / Total Relevant Results

## Recall@K

Measures whether relevant information appears within the top K retrieved results.

For this product, K should be selected based on the amount of context the generation pipeline can reliably process.

---

# 4. Context Metrics

## Context Relevance

Measures whether retrieved information is relevant to the question.

## Context Coverage

Measures whether the retrieved context contains the information required to answer the question.

---

# 5. Generation Metrics

## Answer Accuracy

Does the generated explanation correctly solve the question?

## Faithfulness

Is the generated answer supported by the retrieved context?

## Hallucination Rate

How often does the model introduce unsupported information?

## Pedagogical Quality

Does the explanation match the student's class level and learning requirement?

---

# 6. Human Evaluation

Faculty reviewers can evaluate:

- Answer correctness
- Explanation quality
- Conceptual clarity
- Diagram relevance
- Teaching quality
- Pronunciation
- Overall approval

---

# 7. Evaluation Dataset

Create a golden evaluation dataset containing:

- Query
- Expected relevant document IDs
- Subject
- Class
- Chapter
- Topic
- Expected answer
- Difficulty

---

# 8. Example

Query:

"How does force affect acceleration?"

Expected relevant context:

- Newton's Second Law
- Force
- Mass
- Acceleration

Retrieved results should be evaluated based on their relevance to this expected context.

---

# 9. Product Metrics

Primary metrics:

- Retrieval Recall@K
- Context Relevance
- Answer Accuracy
- Faithfulness
- Hallucination Rate
- Faculty Approval

Secondary metrics:

- Retrieval Latency
- End-to-End Latency
- Cost per Question

---

# 10. Product Hypothesis

If relevant educational context is retrieved before script generation, then AI-generated explanations should demonstrate higher accuracy, contextual relevance, and faculty approval than the baseline system without retrieval.

---

# 11. Experiment

Compare:

### Control

Question → LLM → Script

### Treatment

Question → Retrieval → Context → LLM → Script

Compare:

- Answer Accuracy
- Faithfulness
- Hallucination Rate
- Faculty Approval
- Latency
- Cost

---

# 12. PM Decision

RAG should only be adopted if measurable product quality improves enough to justify additional complexity, latency, and infrastructure cost.

Technology adoption should be driven by measurable user and business outcomes.
