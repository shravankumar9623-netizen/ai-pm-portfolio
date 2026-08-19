# System and RAG Architecture

## System Flow

The documented components are faculty upload, PDF parser, OCR engine, LLM script generator, narration engine, annotation engine, video renderer, review dashboard, and export service. \[Source: S08]

The intended architectural principle is that components operate independently and communicate through defined interfaces. \[Source: S08]

## RAG Flow

The RAG pipeline receives a question, retrieves relevant context, generates a script, validates the output, generates narration, and renders the video. \[Source: S09]

The documented retrieval sources are board guidelines, previous faculty scripts, subject rules, diagram standards, and curriculum metadata. \[Source: S09]

The expected benefits are reduced hallucinations, improved consistency, more accurate explanations, and improved personalization. \[Hypothesis] \[Source: S09]

## Architecture Targets

|Metric|Classification|Source|
|-|-|-|
|End-to-end processing below five minutes|\[Target]|S08|
|Narration accuracy above 98%|\[Target]|S08, S10|
|Rendering success rate above 99%|\[Target]|S08|
|Annotation delay below 100 ms|\[Target]|S10, S11|

The source artifacts do not specify cloud provider, model hosting, data stores, interfaces, threat model, capacity model, or recovery design. \[Source: S08, S09]

## Day 31 Practical RAG Integration



\### Objective



Improve script generation through retrieval.



\### Problem



The LLM currently generates scripts without retrieving historical educational content.



\### Solution



Use Retrieval-Augmented Generation.



\### Data Sources



\- Question PDF

\- Solution PDF

\- Faculty explanations

\- Previous scripts

\- OCR output



\### Embedding Pipeline



Question PDF

↓



Chunking

↓



Embeddings

↓



Vector Database

↓



Retriever

↓



LLM

↓



Script Generation



\### Vector Database



Recommended:



\- FAISS (local)

\- ChromaDB (simple)

\- Pinecone (cloud)



\### Experiment



Compare:



\- Without RAG

\- With RAG



Metrics:



\- Script quality

\- Hallucination rate

\- Response time

