---
title: Getting started with Docusaurus
sidebar_position: 2
---

# Getting Started with Docusaurus for Technical Writers


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

### **Folder structure**

On the left are the files.

Example:

docs/

blog/

src/

static/

The most important thing right now is:

docs/

This is where the documentation is located.

### **Editing**

Open:

docs/intro.md

Change the heading.

Example:

**My First Documentation**

Save.

The site updates automatically.

That’s one of the major advantages of Docusaurus.

