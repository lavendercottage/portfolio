---
title: Gettings started with Docusaurus
sidebar_position: 2
---

# A Beginner's Guide to getting started with Docusaurus

## Introduction

This guide explains how to set up a Docusaurus documentation project using **GitHub** and **Visual Studio Code** on your local computer.

It is written for **technical writers and documentation specialists**, not software developers.

After completing this guide, you will be able to:

* Create a documentation project in GitHub
* Work locally in Visual Studio Code
* Preview changes before publishing
* Save your work with Git
* Publish updates automatically using GitHub Pages

## Types of documentation you can create

* User Guides and How to's
* Installation Guides
* Manuals
* Runbooks
* Knowledge Base Articles
* System Documentation
* Documentation Templates
* API documentation
* Summary and Read me-files
* Complete documentation websites
* and more...

## Prerequisites

Before you begin, make sure you have:

* A GitHub account See [Git workflow](./03-git-workflow.md)
* Visual Studio Code installed

## Do I need coding experience?

No.

But it helps to understand a little about:

- Markdown
- HTML
- CSS
- Using a terminal

You get in to it a bit quicker, that's all.

## Step 1 – Create a GitHub Repository

1. Sign in to GitHub.
2. Click **New Repository**.
3. Give the repository a name.
4. Select:
*   Public (recommended for a portfolio)
*   Add a README
5. Click **Create Repository**.

## Step 2 – Install Git

Git is required to download your project and keep it synchronized with GitHub.

### macOS

Open **Terminal** and type:

```bash
git --version
```

If Git is already installed, you'll see something like:

```text
git version 2.50.1
```

If Git is not installed, macOS will offer to install the **Xcode Command Line Tools**.

Accept the installation.

Verify the installation:

```bash
git --version
```

### Windows

Download Git from:

https://git-scm.com/downloads

Install using the default settings.

Verify:

```powershell
git --version
```

## Step 3 – Install Node.js

Docusaurus requires Node.js.

Download the **LTS version** from:

https://nodejs.org

Verify:

```bash
node --version
npm --version
```

Example:

```
node v24.x
npm 11.x
```

## Step 4 – Clone the Repository

Open **Visual Studio Code**.

Open a terminal.

Move to the folder where you want to store the project.

Example:

```bash
cd Documents
```

Clone the repository:

```bash
git clone https://github.com/USERNAME/documentation-portfolio.git
```

Replace:

```
USERNAME
```

with your GitHub username.


## Step 5 – Open the Project

Open the project in VS Code.

Either:

**File → Open Folder**

## Step 6 – Create a Docusaurus Site

Inside the cloned repository run:

```bash
npx create-docusaurus@latest . classic
```

Notice the dot (`.`).

It tells Docusaurus to install into the current repository.

## Step 7 – Install Dependencies

Run:

```bash
npm install
```

Some packages may display warnings.

This is normal.


## Step 8 – Start the Local Server

Run:

```bash
npm start
```

The first time, Docusaurus builds the site.

When finished you'll see:

```
Compiled successfully.
```

Your browser opens automatically.

If it doesn't:

```
http://localhost:3000
```

## Step 9 – Edit Your First Page

Open:

```
docs/intro.md
```

Change some text.

Save.

The browser refreshes automatically.

No manual reload is needed.


## Step 10 – Verify the Build

Before publishing:

```bash
npm run build
```

This checks for:

* broken links
* missing files
* Markdown errors
* MDX errors

Always fix build errors before pushing.


## Step 11 – Configure Git

The first time only.

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

These identify your commits.


## Step 12 – Save Your Changes

Check what has changed:

```bash
git status
```

Stage files:

```bash
git add .
```

Commit:

```bash
git commit -m "Updated introduction"
```

Push:

```bash
git push
```

GitHub Actions will automatically build the website.

---

## Daily Workflow

When starting work:

```bash
git pull
```

Start Docusaurus:

```bash
npm start
```

Edit files.

Before publishing:

```bash
npm run build
```

If successful:

```bash
git add .
git commit -m "Describe your changes"
git push
```

### Folder Structure

```
documentation-portfolio/

docs/
blog/
src/
static/
docusaurus.config.ts
sidebars.ts
package.json
```

---

Congratulations!

You should now have a professional Docs-as-Code environment running locally with GitHub, Visual Studio Code, and Docusaurus.