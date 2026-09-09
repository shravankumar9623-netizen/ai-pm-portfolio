# Leaderboard Generator

## Product profile

Leaderboard Generator is a local Python application that converts marks spreadsheets into editable PowerPoint result decks. The profile is based on accessible application code, tests and documentation; it makes no unsupported adoption or time-saving claim.

## User and problem

Faculty users need to transform variable spreadsheet exports into reliable presentations. Manual ranking, filtering, absence handling and slide formatting create repetitive work and correctness risk.

## Workflow

1. Upload XLSX, XLSM, XLS, CSV or TSV data.
2. Detect and confirm column mappings.
3. Select cohort, subjects, marks rules and presentation mode.
4. Calculate ranks, grades, distributions and comparisons.
5. Generate editable native PowerPoint tables and charts.
6. Run validation and review before sharing.

## Verified implementation

- Python, pandas, openpyxl, python-pptx and Streamlit
- Long- and wide-format spreadsheet handling
- Competition ranking for ties
- Explicit absent/not-taken handling
- Subject, batch, grade, distribution and movement analytics
- Configurable student, faculty, parent and focused presets
- Batch command-line processing
- Editable PowerPoint output rather than flattened screenshots
- Automated tests for malformed and edge-case inputs
- Layout audit for overflow

## Product decisions

Correctness rules are explicit instead of inferred silently. Sensitive support views are off by default in student-facing output. Local processing keeps student data off external services. Empty or inapplicable sections degrade gracefully.

## Evidence and limitations

Capabilities are REAL from code. No verified user-count, adoption, revenue or time-saving evidence was found. A public demonstration must use synthetic data and confirm permission to share branding.

## Portfolio role

**Supporting project.** Strong evidence of technical execution, analytics workflow design, edge-case thinking and privacy-aware product decisions.
