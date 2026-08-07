---
title: Workflow
sidebar_label: Workflow
sidebar_position: 4
---

:::note **Documentation notes:**

- Document type: Workflow
- Target audience: IT Management, developers, technicians
- Tools: Markdown, VS Code, Docusaurus, GitHub, Draw.io
- Focus: Visual design and structured writing

:::

# Workflow: Git and Docusaurus Publishing

## Purpose

This workflow describes the standard process for creating, reviewing, and publishing documentation using Docusaurus, Git, and GitHub.

## Workflow Overview

```text
Start
   │
   ▼
Pull latest changes
(git pull)
   │
   ▼
Start local environment
(npm start)
   │
   ▼
Edit documentation
(Markdown)
   │
   ▼
Preview locally
(localhost:3000)
   │
   ▼
Run build validation
(npm run build)
   │
   ▼
Build successful?
   │
 ┌─┴─────────────┐
 │               │
 │ Yes           │ No
 ▼               ▼
Commit changes   Fix errors
(git commit)     (Broken links,
 │               formatting,
 ▼               build issues)
Push changes
(git push)
 │
 ▼
GitHub Actions
(Build & Deploy)
 │
 ▼
Deployment successful?
 │
 ┌─┴─────────────┐
 │               │
 │ Yes           │ No
 ▼               ▼
GitHub Pages     Review build log
updated          Fix issue
 │               │
 └──────┬────────┘
        ▼
       Finish
```





