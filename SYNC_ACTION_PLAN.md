# Synchronization Action Plan

Audit date: 2026-08-19

These commands are a plan only. **None were executed.** Review the GitHub tree differences in `GITHUB_SYNC_REPORT.md` before running them. In particular, attaching the current local tree and pushing it may replace the repository's older top-level organization in a future commit.

## Recommended safe approach

The safest workflow is to clone the existing GitHub repository into a separate directory, copy or merge the intended local restructuring deliberately, review the diff, and only then commit. This avoids attaching an unrelated local directory to an existing history without first inspecting it.

### 1. Clone the remote into a separate comparison directory

```powershell
cd "C:\Users\ShravanKumar\Desktop\Shravan Kumar"
git clone "https://github.com/shravankumar9623-netizen/ai-pm-portfolio.git" "ai-pm-portfolio-synced"
git -C "C:\Users\ShravanKumar\Desktop\Shravan Kumar\ai-pm-portfolio-synced" status
git -C "C:\Users\ShravanKumar\Desktop\Shravan Kumar\ai-pm-portfolio-synced" log -20 --oneline
```

Copy or merge content only after manually deciding which local-only, remote-only, and modified paths should survive. No automatic copy command is supplied because the audit found materially different structures and a blanket copy could destroy intentional remote content.

## Alternative: attach the current folder to the existing GitHub history

Use this only after reviewing the separate clone.

### 2. Initialize Git

```powershell
cd "C:\Users\ShravanKumar\Desktop\Shravan Kumar\AI-PM-Portfolio"
git init
```

### 3. Configure the GitHub remote and inspect it

```powershell
git remote add origin "https://github.com/shravankumar9623-netizen/ai-pm-portfolio.git"
git fetch origin
git remote -v
git branch -r
git log --oneline --decorate -20 origin/main
```

### 4. Connect the local working tree to the remote branch

Because the current folder has no local commit graph, do not create an unrelated initial commit first. Create a local branch from the fetched remote history:

```powershell
git switch -c main --track origin/main
git status --short
```

If checkout refuses because remote files would overwrite local files, stop. Use the separate-clone workflow instead; do not force, reset, or clean this folder.

### 5. Review and commit intended local changes

```powershell
git status --short
git diff --stat
git diff
git add --all
git diff --cached --stat
git diff --cached
git commit -m "Restructure AI Product Management portfolio"
```

The `git add` and `git commit` commands change state and require explicit approval immediately before execution.

### 6. Verify synchronization before pushing

```powershell
git fetch origin
git status --short --branch
git rev-list --left-right --count origin/main...main
git log --oneline origin/main..main
git log --oneline main..origin/main
```

Expected immediately before a push: zero commits behind, one or more commits ahead.

### 7. Push to GitHub

```powershell
git push -u origin main
```

This changes the remote repository and requires explicit approval immediately before execution.

### 8. Verify GitHub synchronization

```powershell
git fetch origin
git status --short --branch
git rev-list --left-right --count origin/main...main
git diff --exit-code origin/main...main
git ls-remote origin refs/heads/main
```

Expected synchronized result: `0 0` from `rev-list`, no diff, and matching local/remote commit IDs.

## Vercel project creation and deployment

No Vercel project currently exists. A Git-integrated project can be created in the Vercel dashboard by importing:

`https://github.com/shravankumar9623-netizen/ai-pm-portfolio`

Select `main` as the production branch only after the repository contains a deployable application. The current repository has no `package.json`, Next.js configuration, or static `index.html`, so a meaningful deployment is not currently possible.

After a Vercel project exists and the Vercel CLI is installed/authenticated, inspect and link it:

```powershell
cd "C:\Users\ShravanKumar\Desktop\Shravan Kumar\AI-PM-Portfolio"
vercel link
vercel project inspect
vercel ls
```

To trigger a preview deployment:

```powershell
vercel deploy
```

To trigger production deployment:

```powershell
vercel deploy --prod
```

Deployment creates remote state and requires explicit approval immediately before execution.

Verify deployment success:

```powershell
vercel ls
vercel inspect <deployment-url-or-id>
vercel logs <deployment-url>
```

Success criteria: deployment state `READY`, expected production alias assigned, successful build output, and no runtime errors.
