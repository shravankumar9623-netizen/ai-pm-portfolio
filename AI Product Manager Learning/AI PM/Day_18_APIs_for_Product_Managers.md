# Day 18 — APIs for Product Managers

## Objective

Understand contracts, failure modes and product implications of service integration.

## Concept

An API exposes operations through inputs, authentication, responses and error semantics. PM decisions include sync versus async processing, retry behaviour, rate limits, idempotency, observability and privacy.

## Workflow example

`POST /drafts` validates an approved source and returns a job ID. `GET /drafts/{id}` returns queued, processing, review-ready or failed. `POST /drafts/{id}/decision` records approve, reject or edit. Idempotency prevents duplicate generation when a request is retried.

## Supplied failure exercise

At 500 requests, 430 succeed, 30 time out, 25 receive rate-limit responses and 15 fail source validation. Success is 86%; timeouts 6%; rate limits 5%; validation failures 3%.

## PM decision

Do not simply raise client retries. Add async status, bounded exponential backoff for retryable failures and explicit correction for validation failures. Track failure class and user recovery.

## Security

Minimize payload data, protect credentials server-side, authorize each resource and avoid logging sensitive source content.

## Interview questions and answers

Explain REST contracts, status codes, idempotency, webhooks, rate limits and how API reliability affects user experience.

## Reflection

Technical fluency lets a PM design recovery and measurement instead of treating integrations as invisible plumbing.
