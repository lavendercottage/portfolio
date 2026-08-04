---
title: Getting started with Docusaurus
sidebar_position: 2
---


# Getting Started with Docusaurus for Technical Writers

## Getting Started

### **Step 1 – Create a GitHub account (if you don't already have one)**

Go to GitHub and sign in.

If you already have an account, just log in.

### **Step 2 – Create a new repository**

1. Click **“New repository**.”
2. Give it a suitable name 

my-documents

or

docusaurus-learning

1. Select **"Public"** (the easiest option to start with).
2. Check the box for " **Add a README**."
3. Click " **Create repository**."

You now have an empty project.

### **Step 3 – Open Codespaces**

Now comes the fun part.

On the repository page:

Click the green button:

Code

Select the

Codespaces

Then click

Create codespace on main

Wait about a minute.

What opens looks almost exactly like Visual Studio Code.

### **Step 4 – Open the terminal**

At the bottom, you’ll find a Terminal.

If it’s not visible:

Terminal

→ New Terminal

Now you’re ready.

### **Step 5 – Create Docusaurus**

Type the following command:

npx create-docusaurus@latest my-website classic

Press Enter.

The first time you run this, packages will be downloaded.

This may take a few minutes.

### **Step 6 – Open the project**

Once the installation is complete:

cd my-website

### **Step 7 – Start the website**

Type:

npm start

After a few seconds, a message similar to the following will appear:

Server running...

or

Local: http://localhost:3000

### **Step 8 – Open the website**

In Codespaces, a dialog box usually appears:

Open in Browser

or

Open Preview

Click on it.

Now you'll see Docusaurus's first landing page.

🎉 Done!

### **What you see now**

On the left are the files.

Example:

docs/

blog/

src/

static/

The most important thing right now is:

docs/

This is where the documentation is located.

### **Try changing something**

Open:

docs/intro.md

Change the heading.

Example:

# My First Documentation

Save.

The site updates automatically.

That’s one of the major advantages of Docusaurus.

### **You don’t need to understand this just yet**

Ignore for now:

- React
- TypeScript
- JavaScript
- npm packages
- plugins
- build process

You can get a long way without touching any of this.

## **Lessons - plan**

I think you’ll learn the fastest if we treat this like a mini-course. We’ll focus on documentation, not programming.

**Lesson 1:** Create the website (what we’re doing now)

**Lesson 2:** Understanding the folder structure

**Lesson 3:** Writing documentation in Markdown

**Lesson 4:** Building menus and navigation

**Lesson 5:** Images, tables, and code examples

**Lesson 6:** Publishing to GitHub Pages

**Lesson 7:** Version Control and Docs-as-Code

This way, you’ll learn Docusaurus from a technical writer’s perspective, which aligns very well with your experience with Confluence, Markdown, and information architecture. I think it will feel much more logical than many developer-oriented guides.

Since you want to use the result as **a portfolio**, I think we should build something that looks like a real work sample, not a practice website.

A recruiter or manager for technical writers usually wants to see three things:

- Can the person structure information?
- Can the person write clear documentation?
- Can the person use modern tools (Git, Docs-as-Code, GitHub)?

You don’t need to show that you can write code.

## **What We’re Building**

Instead of a project called “my-website,” we’d create a project with a professional name, such as:

- technical-writing-portfolio
- docs-portfolio
- knowledge-base-demo

Then we’ll publish it via GitHub Pages so you’ll get a web address like:

[https://ditt-användarnamn.github.io/technical-writing-portfolio](https://xn--ditt-anvndarnamn-2nb.github.io/technical-writing-portfolio)

And the entire source code is available on GitHub, demonstrating that you can work using the Docs-as-Code approach.

## **What the portfolio should include**

I would organize it something like this:

Home

├── About Me

│

├── Documentation Samples

│     ├── User Guide

│     ├── Installation Guide

│     ├── Troubleshooting

│     ├── API Documentation

│     └── Release Notes

│

├── Information Architecture

│     ├── Content Strategy

│     ├── Taxonomy

│     └── Navigation Design

│

├── Docs-as-Code

│     ├── Git Workflow

│     ├── Markdown Examples

│     ├── Versioning

│     └── CI/CD

│

└── Portfolio Projects

It looks much more professional than a collection of loose documents.

## 

## **What really impresses**

Many technical writers only show PDFs or Word documents.

If, instead, you can show:

- a sleek documentation website,
- a GitHub repository with version history,
- well-written Markdown,
- well-thought-out information architecture,
- clear navigation,

you’ll demonstrate both your writing **skills** and your work **process**.

## **I have an idea that I think would be a great fit for you**

Since you have extensive experience in IT Service Management, knowledge management, and Confluence, we could turn your portfolio into **fictional product documentation**.

Imagine a fictional SaaS company with a realistic documentation portal. That way, you can create everything from scratch without being bound by confidentiality agreements or material from former employers.

It could include:

- user guides,
- administrator guides,
- API documentation,
- release notes,
- FAQs,
- troubleshooting guides,
- knowledge articles,
- information architecture,
- documentation principles.

This will be a cohesive portfolio that showcases a wide range of skills within a single project.

I actually think this is a better approach than compiling individual documents, since it shows that you can think like a technical writer responsible for an entire documentation solution—something many employers are looking for.

I envision us building **a real documentation portal in Docusaurus**, and at the same time, you’ll learn how to use the tool. Each lesson will result in something that actually becomes part of your portfolio.

Here’s how I’d structure it:

| **Lesson** | **What You’ll Learn** | **What Goes into Your Portfolio** |
| --- | --- | --- |
| 1 | Create a Docusaurus project in Codespaces | The Website |
| 2 | Folder Structure and Documents | Home + About Me |
| 3 | Markdown | First User Guide |
| 4 | Navigation and Sidebar | Professional Menu |
| 5 | Images, Tables, and Code Blocks | Sample documents |
| 6 | Version Control with Git | Commit history on GitHub |
| 7 | Publishing on GitHub Pages | Public Website |
| 8 | API documentation | A Complete Work Sample |
| 9 | Information architecture | Structure and Design Description |
| 10 | Fine-tuning | Finished Portfolio |

The great thing is that you **don’t build a practice site first and a portfolio later**. We build the portfolio from day one.

### **I also have an idea about how we can make it stand out**

Most portfolios look something like this:

Here’s my resume.

Here are some PDFs.

I think you can do something much better.

Imagine a recruiter opening your website and seeing:

**Technical Writing Portfolio**

*Documentation, Information Architecture, and Docs-as-Code*

Then they can click their way around just like in the documentation for a real product.

For example:

📄 **Getting Started**

📄 **User Guide**

📄 **Administrator Guide**

📄 **Knowledge Base**

📄 **Release Notes**

📄 **API Documentation**

📄 **Troubleshooting**

📄 **Style Guide**

📄 **About the Author**

That way, you’re not just showing that you can write—you’re showing that you can **build and manage a documentation portal**, which is exactly what many employers are looking for.

**An added benefit for you**

You already have experience with Confluence, information architecture, and IT Service Management. We can weave that naturally into your portfolio, for example through a section on documentation strategy or knowledge architecture. This gives you a profile that’s broader than that of a traditional technical writer.

**A goal to aim for**

I’d like us to build something that makes a recruiter think:

“This looks like the documentation for a real product.”

If we succeed in that, you won’t just have learned Docusaurus—you’ll also have a concrete portfolio piece that demonstrates:

- Docs-as-Code
- Git and GitHub
- Markdown
- Information architecture
- Technical documentation
- Documentation Design

And the best part is that everything is openly available on GitHub with a public website, so you can link to both **the GitHub repository** and the finished documentation portal in your resume and on LinkedIn. It’s a very powerful way to showcase your skills, even if you’re just starting out as a technical writer.

## Git add, commit, push—the routine

Absolutely! These are actually the three most important Git commands to understand. Think of them as three steps in the same process.

### 1. `git add` – “Select what to save”

Git doesn’t automatically track all changes. With ` `git add` `, you’re saying:

> **"I want these changes to be included in the next version."**
> 

Example:

```bash
git add docs/about.md
```

or, if you want to add all changes:

```bash
git add .
```

**Mnemonic:**

> **Add = select.**
> 

---

### 2. `git commit` – "Save a version"

Git now creates a new version (a **checkpoint**) of what you just selected with ` `git add``.

Example:

```bash
git commit -m "Add About page"
```

What you type after `-m` is a brief description of what you did.

**Mnemonic:**

> **Commit = save a version.**
> 

---

### 3. ``git push` ` – "Push to GitHub"

After a commit, the change is **only on your computer or in your Codespace**.

With ` `git push` `, you send it to GitHub.

Example:

```bash
git push
```

Now it’s there:

- as a backup
- accessible from other computers
- ready to be shared with others

**Mnemonic:**

> **Push = send to GitHub.**
> 

---

### A simple analogy

Imagine you’re writing a document.

**`git add`**

📑 You put the pages you want to save into a folder.

**`git commit`**

💾 You add the folder to the repository and give it a date and a tag.

**`git push`**

📤 You send a copy of the repository to a secure storage location (GitHub).

---

### The Most Common Workflow

You’ll use this over and over again:

```bash
git status
git add .
git commit -m "Beskrivning av ändringen"
git push
```

---

### One last tip

Many people confuse **“commit”** and **“push**,” but they’re not the same thing.

- **Commit** = saves changes locally in your Git repository.
- **Push** = sends the saved commits to GitHub.

You can actually make several commits throughout the day and then do **a single**  `**`git push`** ` when you’re done.

For your portfolio, I’d recommend ending each completed task with:

```bash
git status
git add .
git commit -m "Kort beskrivning"
git push
```

It’s a simple and professional routine that will work both in your own projects and if you later work on a team.

När du använder **Docusaurus** arbetar du mot en **utvecklingsserver**. Den är bara igång medan processen kör. Om du:

- stänger terminalen,
- stoppar Codespacet,
- eller Codespacet går i vila,

...så stängs utvecklingsservern av. Nästa gång behöver du starta den igen.

## Daglig rutin

### 🚀 När du börjar arbeta

1. Öppna Codespacet.
2. Öppna en terminal.
3. Kör:

```
npmstart
```

1. Vänta tills Docusaurus har startat.
2. Öppna sajten via **Ports → 🌐**.

### 📝 Arbeta

- Redigera dina Markdown-filer.
- Spara.
- Docusaurus uppdaterar sidan automatiskt.

### 🏁 När du är klar

1. `git status`
2. Om du är klar med en uppgift:
    - `git add .`
    - `git commit -m "Beskrivning"`
    - `git push`
3. Tryck `Ctrl + C` i terminalen för att stoppa Docusaurus (valfritt, eftersom Codespacet ändå stänger processen när det stoppas).