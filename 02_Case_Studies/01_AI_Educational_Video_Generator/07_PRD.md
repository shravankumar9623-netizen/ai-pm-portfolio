# Product Requirements Document

## Product

The official product name is **AI Educational Video Generator**. [Source: U01]

## Problem Statement

Faculty and teachers spend substantial time creating educational video solutions through multiple disconnected and manual production steps. [Source: S01, S06, S13, S16]

## Objective

The product objective is to reduce manual production effort through AI-assisted extraction, script generation, narration, annotation, storyboarding, rendering, review, and export. [Source: S04, S06, S07]

## Users

The intended users are teachers, faculty, subject-matter experts, academic operations teams, schools, coaching institutes, EdTech companies, and independent educators. [Source: S01, S04, S06, S16]

## Functional Requirements

- Users can authenticate and be assigned roles. [Source: S07, S13]
- Users can create projects and upload question and solution PDFs. [Source: S07, S13]
- The system can extract questions and generate scripts, narration, annotations, and storyboards. [Source: S07]
- Users can preview a video and export an MP4. [Source: S07]
- The system can display processing status and completion notifications. [Source: S07]
- An administrator can approve requests. [Source: S13]

## Non-Functional and AI Requirements

- Password reset completes within two seconds. [Target] [Source: S13]
- Upload completes within two seconds. [Target] [Source: S13]
- Question extraction completes within two minutes. [Target] [Source: S13]
- Solution matching completes within five minutes. [Target] [Source: S13]
- Script generation completes within ten seconds. [Target] [Source: S13]
- Narration generation completes within ten seconds. [Target] [Source: S13]

The sources contain conflicting end-to-end expectations of under five minutes and under ten minutes, so a final service-level objective remains unresolved. [Source: S01, S08, S16]

## Out of Scope and Dependencies

The source artifacts do not define release-level exclusions, dependency owners, data-retention rules, accessibility requirements, or legal constraints. [Source: S06, S07, S13]

