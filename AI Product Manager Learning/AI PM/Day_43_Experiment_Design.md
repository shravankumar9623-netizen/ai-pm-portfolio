\# Day 43 — Experiment Design \& Baseline Measurement



\## Theme



Don't ask:



"Did the product work?"



Ask:



"What evidence would convince us that it worked?"



\---



\# 1. Product Experimentation



A product experiment is a structured method for testing an assumption and generating evidence for a product decision.



Basic flow:



Problem

↓

Assumption

↓

Hypothesis

↓

Experiment

↓

Measurement

↓

Result

↓

Decision



A strong PM does not simply build a feature and ask whether users liked it.



A PM defines:



\- What are we assuming?

\- What are we testing?

\- What evidence do we need?

\- What metric will tell us whether the experiment worked?

\- What will we do if the result is positive?

\- What will we do if the result is negative?



\---



\# 2. Assumption vs Hypothesis



\## Assumption



An assumption is something we currently believe but have not yet validated.



Example:



"Teachers spend significant time converting lesson content into video scripts."



The statement may be true, but it still needs evidence.



\## Hypothesis



A hypothesis converts an assumption into something testable and measurable.



Example:



"If teachers receive an AI-generated first-draft script from their existing lesson material, then script preparation time will decrease."



\### Key difference



Assumption:



"We believe X."



Hypothesis:



"We believe that changing X will cause measurable outcome Y."



\---



\# 3. Types of Product Assumptions



AI PMs should consider at least four important dimensions.



\## Desirability



Do users actually want the solution?



Example:



"Teachers want AI-generated educational videos."



\## Feasibility



Can we technically build the solution?



Example:



"The system can reliably convert source material into a structured video script."



\## Viability



Does the solution make business sense?



Example:



"The reduction in content-production time justifies the cost of running the AI system."



\## Usability



Can users effectively use the solution?



Example:



"Teachers can review and modify an AI-generated script without significant additional effort."



\---



\# 4. Baseline Measurement



A baseline describes the current state before introducing the proposed solution.



It answers:



"What happens today without our product or feature?"



Example:



Current workflow:



Source material

↓

Understand content

↓

Write script

↓

Plan visuals

↓

Review/edit

↓

Prepare for publishing



If the current workflow takes 120 minutes, that becomes the baseline.



Without a baseline, a PM cannot credibly claim improvement.



Example:



Before:

120 minutes



After:

65 minutes



Improvement:



55 minutes saved per output.



Approximate reduction:



46%.



The numbers above are simulated exercise data and must not be represented as real product results.



\---



\# 5. Primary Metric



The primary metric is the main measure used to determine whether the experiment achieved its objective.



For the AI Educational Video Generator:



Primary metric:



Median time required to produce one publishable educational video.



Why median?



Because individual tasks may have unusually high or low completion times.



Median can provide a more robust representation of typical task performance.



\---



\# 6. Secondary Metrics



Secondary metrics provide additional context.



Possible metrics:



\- Script creation time

\- Editing time

\- Rework cycles

\- User satisfaction

\- Human acceptance

\- Completion rate



These should support the primary metric rather than replace it.



\---



\# 7. Guardrail Metrics



Guardrails prevent optimization of one metric from damaging another important dimension.



Example:



Production time:



120 min → 40 min



Looks positive.



But suppose:



Accuracy:



94% → 80%



Then the product may have become faster while becoming less reliable.



Possible AI-product guardrails:



\- Content accuracy

\- Hallucination rate

\- Groundedness

\- Human acceptance

\- Rework rate

\- Safety failures

\- Error rate



\---



\# 8. Decision Rules



Decision rules should ideally be defined before looking at the results.



\## Continue



Continue when the experiment demonstrates meaningful improvement without unacceptable deterioration in quality or safety.



\## Change



Change the solution when the primary metric improves but important secondary or guardrail metrics deteriorate.



\## Stop



Stop when the solution does not produce meaningful improvement or introduces unacceptable quality, safety, reliability, or business problems.



\---



\# 9. AI PM Experimentation



AI products require more than traditional product metrics.



A useful framework is:



USER VALUE

\+

AI QUALITY

\+

SYSTEM PERFORMANCE

\+

BUSINESS VALUE

\+

SAFETY



\## User Value



\- Time saved

\- Task completion

\- Satisfaction

\- Acceptance



\## AI Quality



\- Accuracy

\- Groundedness

\- Hallucination rate

\- Completeness



\## System Performance



\- Latency

\- Failure rate

\- Reliability

\- Cost per generation



\## Business Value



\- Adoption

\- Retention

\- Conversion

\- Cost efficiency



\## Safety



\- Harmful outputs

\- Privacy issues

\- Bias

\- Unsafe recommendations

\- Human-review requirements



\---



\# 10. Experiment Design Framework



A strong experiment should specify:



\## Problem



What problem are we trying to improve?



\## Assumption



What do we currently believe?



\## Hypothesis



What measurable change do we expect?



\## Participants



Who will participate?



\## Control



What is the existing workflow?



\## Treatment



What new workflow or feature are we testing?



\## Task



What will participants actually do?



\## Primary Metric



What single metric determines the main outcome?



\## Secondary Metrics



What additional measures provide context?



\## Guardrails



What must not deteriorate?



\## Decision Rule



What result leads to:



\- Continue

\- Change

\- Stop



\---



\# 11. PM Coaching Lesson



A weak PM says:



"I think this feature will help users."



A stronger PM says:



"I believe this feature will reduce the user's problem."



An effective PM says:



"Here is the assumption, here is how we will test it, here is the metric, here is the threshold, and here is the product decision we will make for each possible outcome."



The strongest PM thinking is not:



"How do I prove my idea is correct?"



It is:



"What evidence could prove my idea wrong?"



That mindset reduces confirmation bias and improves product decisions.



\---



\# 12. Interview Lesson



If asked:



"How would you validate an AI feature?"



A strong structure is:



1\. Define the user problem.

2\. Identify the riskiest assumption.

3\. Convert it into a measurable hypothesis.

4\. Establish the baseline.

5\. Define the experiment.

6\. Select a primary metric.

7\. Add secondary and guardrail metrics.

8\. Define decision rules before seeing the result.

9\. Analyze the outcome.

10\. Decide whether to continue, change, or stop.



\---



\# 13. Key Takeaway



Experimentation is not about proving that the product works.



It is about reducing uncertainty.



The PM's job is to convert:



Assumptions

↓

into hypotheses

↓

into measurable experiments

↓

into evidence

↓

into product decisions.

