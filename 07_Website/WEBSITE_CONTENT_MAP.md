# Website Content Map

The case-study documents are the source of truth. Website pages should present concise recruiter-facing summaries and link to the canonical artifacts.

| Website page | Primary source | Recruiter-facing content |
|---|---|---|
| Home | Root `README.md` | Positioning, flagship preview, core capabilities, primary calls to action |
| About | `01_Profile/Source_Artifacts/About_Me.md` | Short professional narrative and product philosophy |
| Case Studies | `02_Case_Studies/` | Project cards with problem, role, approach, and evidence status |
| Flagship Case Study | `02_Case_Studies/01_AI_Educational_Video_Generator/` | Executive summary, selected artifacts, architecture, evaluation, and learnings |
| Product Artifacts | `03_PRDs/` and `04_AI_PM_Frameworks/` | Selected PRDs and frameworks |
| Writing | `08_Writing/` | Learning notes and published articles |
| Resume | `06_Career/Resume/Master_Resume.md` | View and download entry point |
| Certifications | `09_Certifications/` | Credential cards and verification links when available |
| Contact | Verified profile data | Email, LinkedIn, GitHub, and location only after verification |

## Content Rules

- Do not duplicate complete case-study documents in website content.
- Do not present targets or hypotheses as validated outcomes.
- Use short summaries with links to canonical evidence.
- Publish only verified contact, career, credential, and result claims.
- Keep source content in Markdown or MDX so the repository remains the content system of record.

## Proposed Content Files

The `content/` directory is reserved for page-level Markdown or MDX summaries such as `Home`, `About`, `Projects`, and `Contact`. These files should be authored only after final copy approval.
