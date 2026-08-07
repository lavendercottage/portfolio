---
title: Git workflow
sidebar_position: 3
---

# The GitHub concept for Technical writers

If you're new to GitHub, it can seem more technical than it really is. For a technical writer, you mainly need to understand a few basic concepts to work with Docusaurus.

### 1. Create a GitHub account

Create an account on GitHub and sign in.

### 2. Create a repository

A **repository (repo)** is where your Docusaurus project and documentation files are stored.

Give your repository a clear name, such as `my-documentation`.

### 3. Connect your project

Your Docusaurus project can be connected to the repository so that your Markdown files and other changes are stored and version-controlled in GitHub.

### 4. Make changes and commit

When you edit or add documentation, save your changes and create a **commit**. A commit is simply a saved version of your work with a short message describing what changed.

### 5. Push your changes

When you're ready, **push** your changes to GitHub. Your local project and the repository are then synchronised.

That's the basic workflow:

**Edit → Commit → Push → Publish**

You don't need to be a programmer to use GitHub. For a technical writer, the important thing is understanding how GitHub helps you manage, review, and track changes to documentation.

---

# Git & Docusaurus Workflow Steps

## 1. Synchronize

Pull the latest changes from the repository.

Output:

* Local repository is up to date.


## 2. Start Development Environment

Start the local Docusaurus server.

Output:

* Local preview available.


## 3. Create or Update Documentation

Modify Markdown files.

Typical activities:

* Write documentation
* Update navigation
* Add images
* Create new pages


## 4. Preview

Review the documentation in the browser.

Verify:

* Layout
* Navigation
* Links
* Images

## 5. Validate

Run a production build.

Purpose:

* Detect broken links
* Detect missing pages
* Detect build errors

## 6. Version Control

Commit the completed changes.

Use small, meaningful commits.

## 7. Publish

Push changes to GitHub.

GitHub Actions automatically:

* Builds the site
* Performs validation
* Deploys to GitHub Pages

## 8. Verify

Open GitHub Pages.

Confirm:

* New content is published
* Navigation works
* Links function correctly

## Best Practices

* Pull before starting work.
* Commit small changes frequently.
* Run a build before pushing.
* Review GitHub Actions after every push.
* Verify the published site.

