---
title: About Docs-as-code
sidebar_position: 1
---

![The workflow](./dac-wf.png)

Docs-as-code is a method where documentation is written and managed in the same way that developers manage their code. It means using simple text files (such as Markdown), storing and collaborating in a version control system (such as Git), and automating the publishing process.

## **How it works**

- You write in Markdown (instead of Word or similar tools)
- You use an editor, such as VS Code
- The files are stored in a Git repository
- You build the site using a static site generator, such as Docusaurus
- The site is published using a service such as GitHub Pages
- You collaborate with colleagues and developers through a standard publishing workflow

## **Important advantages with this method**

- **Consistent and reusable content** – Content can be structured, reused, and maintained more easily.
- **Better version control** – Changes are tracked, making it easy to see what changed and when.
- **Documentation becomes part of the workflow** – Documentation becomes part of the development process instead of a separate activity.

## Using Static site generators

A static site generator works differently from a traditional WYSIWYG editor. Instead of a drag-and-drop editor and modules to build the page, you write structured content in Markdown and use CSS to control the overall layout, styling, and visual appearance. 

This separates the content from the design, making it easier to keep documentation consistent and updated over time. Content can also be reused, tracked in version control, and reviewed as part of a structured workflow. 

The result is a more efficient and flexible way of creating and maintaining technical documentation.

See **Learnings**, where you can read more about how I arrived at the tools I chose. [Learnings](./05-learnings.md)

Keen on trying for yourself? Here's my hands-on-guide: [Gettings started with Docusaurus](./02-gettingstartedguide.md).

## **VS Code makes Markdown feel like a walk in the park**

- VS Code is the perfect tool för learning Markdown.
- In VS Code, you are forced to write the actual Markdown code using your keyboard. This helps you quickly build the basics into muscle memory.
- In the VS Code preview, you can see the final result as you work.

![Preview i VS Code](./vscode-preview.png)

## In collaboration with developers and technicians

One of the main strengths of GitHub and Docs-as-Code is that documentation can be developed in the same environment and using similar workflows as source code. This makes collaboration between technical writers, developers and technicians easier and more transparent.

Instead of sending documents back and forth by email or using separate review processes, everyone can work with the same files, the same version history, and the same workflow.

### Gemensamma granskningar (Pull Requests)

När en dokumentationsändring är klar kan den skickas in som en **Pull Request (PR)** för granskning. En utvecklare eller teknisk expert kan läggas till som **Reviewer** och lämna kommentarer direkt på specifika rader i Markdown-filen.

Det gör det enkelt att:

* kontrollera att tekniska detaljer är korrekta
* ställa frågor direkt där något behöver förtydligas
* föreslå förbättringar utan att ändra originaltexten
* följa hela diskussionen kopplad till en specifik ändring

När alla synpunkter är hanterade kan ändringen godkännas och publiceras.

### En gemensam källa för information

Med ett Docs-as-Code-arbetsflöde blir dokumentationen en del av utvecklingsprocessen. När en funktion förändras i en produkt kan utvecklare och tekniska skribenter samarbeta kring uppdateringen av dokumentationen på samma plats.

Det minskar risken att dokumentation blir inaktuell och skapar en naturlig koppling mellan produktutveckling och användarinformation.

### Versionshistorik och spårbarhet

Eftersom alla ändringar sparas i Git finns det alltid en historik över:

* vad som ändrades
* vem som gjorde ändringen
* när ändringen gjordes
* varför beslutet togs

Det gör det enklare att underhålla större dokumentationsmängder och att förstå hur innehållet har utvecklats över tid.

För en Technical Writer innebär detta att man inte bara producerar dokumentation, man blir även en aktiv del av teamets arbetsflöde.

