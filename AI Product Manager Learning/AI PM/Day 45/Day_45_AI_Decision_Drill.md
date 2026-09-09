# Day 45 — AI Product Decision Drill



## Product



AI Video Solution Generator



## Situation



The product is generating significantly more video solutions, but some AI quality and user-effort signals have moved in the wrong direction.



### Current Signals



| Metric | Week 1 | Week 2 | Change |

|---|---:|---:|---:|

| Active Users | 1,000 | 1,200 | +20% |

| Videos Generated | 520 | 720 | +38.5% |

| Videos Accepted | 364 | 396 | +8.8% |

| Acceptance Rate | 70% | 55% | -15 pp |

| Avg. Regeneration/User | 1.2 | 2.4 | +100% |

| Avg. Editing Time | 12 min | 21 min | +75% |

| AI Generation Cost/Video | $0.08 | $0.11 | +37.5% |

| Content Accuracy | 94% | 91% | -3 pp |



---



# Decision Scenario



The engineering team proposes an AI model improvement.



### Current Model



- Accuracy: 91%

- Lower cost

- Lower latency



### Proposed Model



- Accuracy: 95%

- Generation cost: +40%

- Latency: +2 seconds



The team asks:



> "Should we move to the more accurate model?"



---



# My PM Decision



## Decision



Do not immediately roll out the new model to 100% of users.



Run a controlled experiment first.



---



# Why?



The current data shows:



- Generation volume is increasing.

- Acceptance rate is decreasing.

- Regeneration has doubled.

- Editing time has increased by 75%.

- Content accuracy has decreased from 94% to 91%.

- Generation cost has already increased from $0.08 to $0.11.



This suggests that improving first-pass AI quality could potentially create more product value.



However, the model should not be selected based on accuracy alone.



---



# Key Questions Before Making the Final Decision



### 1. Does higher accuracy improve user outcomes?



Measure:



- Acceptance rate

- Regeneration rate

- Editing time

- Rejection rate



### 2. Does the higher-quality model reduce rework?



If regeneration and editing decrease significantly, the additional model cost may be justified.



### 3. Is the additional latency acceptable?



An additional 2 seconds may be insignificant for some workflows but important for others.



### 4. Does the additional cost create sufficient value?



Compare:



Additional AI cost



vs.



Time saved + reduced rework + increased acceptance + increased published content.



### 5. Does the improvement work across subjects?



Check whether model improvement benefits:



- Physics

- Chemistry

- Maths

- Biology

- English

- Other subjects



---



# Proposed Experiment



Run an A/B test.



### Control



Current model



### Treatment



New model



Track:



- Accuracy

- Groundedness

- Acceptance rate

- Regeneration rate

- Editing time

- Rejection rate

- Latency

- Cost per accepted solution

- Published solutions



---



# Success Criteria



The new model should not be considered successful simply because:



> Accuracy increases from 91% → 95%.



It should demonstrate meaningful improvement in product outcomes.



Example decision rule:



### Continue



If:



- Accuracy improves

- Acceptance rate improves

- Regeneration decreases

- Editing time decreases

- Cost per accepted solution remains acceptable

- Latency remains within the acceptable user threshold



### Modify



If:



- Quality improves

- But cost or latency increases significantly

- Or user behaviour does not improve proportionally



### Stop



If:



- Accuracy improves

- But acceptance does not improve

- Rework remains high

- Cost increases substantially

- User experience becomes worse



---



# AI PM Principle



## Optimize for product outcomes, not model metrics.



A better model is not automatically a better product.



The PM must connect:



AI Quality

↓

User Behaviour

↓

Workflow Efficiency

↓

Product Value

↓

Business Impact



---



# Final PM Statement



"If the new model improves accuracy but does not improve acceptance, reduce rework, or create meaningful user value, I would not justify the additional cost simply because the benchmark score is higher.



I would first run a controlled experiment and evaluate the model based on product-level outcomes."



---



# Key Learning



AI Product Managers need to balance:



- Quality

- User experience

- Cost

- Latency

- Reliability

- Safety

- Business value



The best technical model is not always the best product decision.



The best product decision is the one that creates the most meaningful value for the user within the product's constraints.

