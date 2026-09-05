PART 1 — 📚 PM CONCEPT

Product Evaluation



Before launching a product, a PM needs to answer:



Does this product actually solve the user's problem well enough?



For traditional software, this might involve:



Task completion

Conversion

Retention

Performance

Usability

Error rate



AI products add another layer:



The output itself can vary.



A traditional application might return:



Login successful



The same input usually produces the same predictable result.



An AI system might produce:



Output A

Output B

Output C



for similar prompts.



Therefore, AI products require systematic output evaluation.



PART 2 — 🤖 AI PM CONCEPT

What Is AI Evaluation?



AI evaluation is the systematic process of determining whether an AI system produces outputs that meet predefined quality, safety, reliability, and product requirements.



Think:



INPUT

&#x20; ↓

AI SYSTEM

&#x20; ↓

OUTPUT

&#x20; ↓

EVALUATION

&#x20; ↓

SCORE

&#x20; ↓

ANALYSIS

&#x20; ↓

PRODUCT DECISION



The key difference:



Traditional PM



"Are users using the feature?"



AI PM



"Are users using the feature AND is the AI producing acceptable outputs?"



1\. Evaluation Dataset



An evaluation dataset is a collection of representative inputs used to test an AI system.



For example, for your AI Educational Video Generator:



Input 1 → Class 8 Science chapter

Input 2 → Class 10 Mathematics topic

Input 3 → History lesson

Input 4 → Long PDF

Input 5 → Poorly formatted content

Input 6 → Ambiguous content

Input 7 → Content containing tables

Input 8 → Content with missing information



The dataset should represent realistic usage scenarios.



2\. Evaluation Case



Each evaluation case can contain:



Input

Expected behavior

Actual output

Evaluation criteria

Score

Error type

Notes



Example:



Input	Expected	Output	Score

Photosynthesis lesson	Accurate explanation	Mostly accurate	4/5

3\. Evaluation Criteria



The PM must define:



What does "good" mean?



For an AI educational content product:



Accuracy



Is the information factually correct?



Relevance



Does the output answer the actual task?



Completeness



Does it cover important information?



Groundedness



Is the response supported by the supplied source material?



Hallucination



Does the model introduce unsupported information?



Clarity



Can the intended user understand it?



Safety



Does the output create unacceptable risk?



4\. Groundedness vs Accuracy



This is an important AI-PM distinction.



Accuracy



Is the information correct?



Groundedness



Is the information supported by the provided source/context?



An answer could theoretically be factually correct but not grounded in the supplied source.



Example:



Source says:



"The Earth completes one orbit around the Sun in approximately 365 days."



AI generates:



"The Earth completes one orbit in approximately 365 days and has an elliptical orbit."



The second statement may be factually correct, but if the requirement is strict source-grounded generation, the additional claim may not be supported by the provided material.



For a source-based educational product, groundedness can therefore become a critical evaluation dimension.



5\. Hallucination



A hallucination occurs when an AI system generates information that is unsupported, fabricated, or otherwise unreliable.



Example:



Source material:



"Newton formulated the laws of motion."



AI output:



"Newton formulated the laws of motion in 1678 after conducting an experiment at Cambridge."



If the source does not support the latter details, those claims require investigation.



6\. Human Evaluation



Humans review AI outputs against a defined rubric.



Example:



Accuracy

1 = Completely incorrect

2 = Major errors

3 = Partially correct

4 = Mostly correct

5 = Fully correct



The important point:



Human evaluation should use a consistent rubric, not simply "I think this answer looks good."



7\. Automated Evaluation



Some properties can be evaluated automatically.



Examples:



Exact match

Classification accuracy

Structured-output validation

JSON schema compliance

Latency

Token usage

Cost

Error rate



Automated evaluation is useful because it can be:



Repeatable

Fast

Scalable



But it may not capture every aspect of human-perceived quality.



8\. LLM-as-a-Judge



Another approach is to use an LLM to evaluate another model's output.



Example:



Model A

&#x20;  ↓

generates answer

&#x20;  ↓

Model B

&#x20;  ↓

evaluates answer



The evaluator can score:



Relevance

Completeness

Style

Groundedness

Instruction following



But an AI PM must understand the limitation:



The evaluator can also be wrong or biased.



Therefore, LLM-as-a-judge should be validated against human judgments for important use cases.



9\. AI Evaluation Is Multi-Dimensional



A strong AI PM doesn't evaluate only "accuracy."



Think:



&#x20;                AI QUALITY

&#x20;                    │

&#x20;      ┌─────────────┼─────────────┐

&#x20;      ↓             ↓             ↓

&#x20;  QUALITY        SYSTEM         PRODUCT

&#x20;      │         PERFORMANCE       │

&#x20;      │             │             │

&#x20;Accuracy        Latency        Adoption

&#x20;Grounding       Reliability    Satisfaction

&#x20;Relevance       Cost           Task success

&#x20;Completeness    Failure rate    Retention

&#x20;      │

&#x20;      ↓

&#x20;    SAFETY

&#x20;      │

&#x20;Hallucination

&#x20;Privacy

&#x20;Harm

&#x20;Bias

PART 3 — 🎯 PM COACH LESSON

The Evaluation Trap



A junior PM may say:



"Our AI accuracy is 92%."



A stronger PM asks:



"92% on what dataset?"



Then:



"Who created the dataset?"



Then:



"What does accuracy mean here?"



Then:



"What is the distribution of difficult cases?"



Then:



"What happens to the remaining 8%?"



And finally:



"Is 92% actually good enough for this product?"



That last question is the PM question.



🧠 COACHING PRINCIPLE



An evaluation score is not a product decision.



The PM must connect:



Evaluation

&#x20;    ↓

Risk

&#x20;    ↓

User impact

&#x20;    ↓

Business impact

&#x20;    ↓

Launch threshold

&#x20;    ↓

Decision



For example:



Accuracy = 95%



Could be excellent for:



Brainstorming marketing headlines.



But potentially unacceptable for:



Medical diagnosis.



Therefore:



"Good enough" is determined by context, risk, and user expectations — not by a universal score.



This is a very important senior AI-PM concept.

