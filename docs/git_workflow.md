# Git workflow (feature branches + pull/merge requests)

This project uses a simple feature-branch workflow with code review.

## Branches
- `main` — stable branch, always runnable and deployable.
- `feature/<short-name>` — new features or improvements.
- `fix/<short-name>` — bug fixes.
- `docs/<short-name>` — documentation-only changes.

Branch naming rules:
- Use lowercase and hyphens: `feature/ui-fixes`, `feature/logging`.
- Keep names short but meaningful.

## Creating a feature branch
1. Update local `main`:
```bash
git checkout main
git pull origin main
```

2. Create a new branch:
```bash
git checkout -b feature/<short-name>
```

## Commit message convention
Format:
```txt
type(scope): short description
```

Types:
- `feat` — new feature
- `fix` — bug fix
- `docs` — documentation changes
- `test` — tests only
- `refactor` — refactoring without behavior change
- `chore` — tooling / configs

Examples:
```txt
feat(users): add pagination
fix(middleware): correct error handler filename
docs(git): add workflow instructions
```

Link commits to GitHub Issues:
Use `Fixes #<issue_number>` in the commit message (or PR/MR description).

Example:
```txt
fix(middleware): correct error handler filename (Fixes #3)
```

## Pushing changes to remote
```bash
git push -u origin feature/<short-name>
```

## Opening a Pull Request / Merge Request
- Target branch: `main`
- PR/MR title: short and clear, usually same as main commit message.
- Description should include:
  - What was changed
  - How to test
  - Related Issue number (e.g. `Fixes #3`)

## Code review checklist
- Code is readable (naming, formatting).
- No secrets committed (`.env` must not be committed).
- Tests added/updated (if applicable).
- Manual testing steps provided in PR description.

## Merging
- Prefer "Squash and merge" if the platform/team uses it.
- Ensure the feature branch is up to date before merging:
```bash
git checkout feature/<short-name>
git pull origin feature/<short-name>
git rebase origin/main
git push --force-with-lease
```

After merge:
```bash
git checkout main
git pull origin main
```

## Quick example flow
1) Create issue: "Add request logging"
2) `git checkout -b feature/logging`
3) Commit:
```txt
feat(logs): add request logging middleware (Fixes #12)
```
4) Push branch and open PR/MR to `main`
5) Review + merge
