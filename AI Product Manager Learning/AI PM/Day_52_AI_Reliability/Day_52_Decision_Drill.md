\# Day 52 — Decision Drill



\## Scenario



AI Video pipeline:



Render success = 96%

Answer accuracy = 99%

Average processing time = 3 minutes

Cost/question = ₹4



After a model/provider change:



Render success = 89%

Answer accuracy = 99%

Processing time = 7 minutes

Cost/question = ₹6



\## PM Decision



Investigate reliability regression before adding new features.



\## Reasoning



1\. Detect regression.

2\. Identify affected component.

3\. Compare with baseline.

4\. Test fallback/routing.

5\. Validate quality.

6\. Monitor recovery.



\## Key Lesson



Do not make architecture decisions before understanding the failure.

