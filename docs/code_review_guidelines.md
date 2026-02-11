# Code Review Guidelines

## Purpose
This document defines a lightweight and consistent code review process to improve code quality, maintainability, and team collaboration.

## When to request a review
Request a review when:
- a feature/fix is complete and tested locally
- the branch is pushed to the remote repository
- the PR description is filled in and linked to related issues
- documentation is updated (if required)

## How to request a review
1. Create a feature branch (e.g., `feature/...`, `fix/...`, `docs/...`)
2. Push changes and open a Pull Request (PR)
3. Fill in the PR template (Description, Testing steps, Linked Issues)
4. Add reviewers (at least 1)
5. Address review comments and update the PR

## What reviewers should check
### 1) Code correctness
- Does the code solve the problem described in the issue/PR?
- Are edge cases considered?
- Are error cases handled properly?

### 2) Code quality and readability
- Is the code easy to read and understand?
- Are names meaningful (variables, functions, files)?
- Is logic split into appropriate layers (routes/controllers/services/models)?
- Is there unnecessary duplication?

### 3) Tests
- Are existing tests updated when needed?
- Are new tests added for new behavior or bug fixes?
- Do tests pass locally and in CI (if configured)?
- Is the test coverage meaningful (not just “tests for the sake of tests”)?

### 4) Security and data handling
- No secrets committed (passwords, tokens, `.env`)
- Input validation is present for user-provided data
- SQL queries use parameterized placeholders (avoid SQL injection)
- Sensitive data is not logged (passwords, tokens)

### 5) Documentation
- API docs updated when endpoints change
- README updated when setup or behavior changes
- Comments are used only where they add clarity (avoid redundant comments)

## How to give feedback
Use clear, actionable comments:
- Prefer “why” + “how to improve”
- Be specific: point to a line/block and suggest a change
- Separate severity:
  - **Blocking**: must be fixed before merge
  - **Suggestion**: improvement, not required
  - **Question**: clarify intent or design

Examples:
- **Blocking:** “This query should use placeholders to avoid SQL injection.”
- **Suggestion:** “Consider extracting this into a helper function to reduce duplication.”
- **Question:** “Should this be handled in the service layer instead of the controller?”

## Review etiquette
- Assume good intent
- Keep tone professional
- Small PRs are easier to review than large PRs
- Reviewers should respond within a reasonable time (same day if possible)

## Merge rules
A PR can be merged when:
- requirements are met
- tests pass
- review feedback is addressed (or discussed and resolved)
- documentation is updated if needed
