---
title: Om Docs-as-code
sidebar_label: Om Docs as code med Docusaurus
---

# **Om Docs-as-code**

Docs-as-code är en metod där man skriver och hanterar dokumentation på samma sätt som mjukvaruutvecklare hanterar sin källkod. Det innebär i korthet att man använder enkla textfiler (som Markdown), lagrar dem i versionshantering (som Git) och automatiserar publiceringen.


## **Hur det fungerar i praktiken**

- Skriva i klartext: Du använder enkla format som Markdown i stället för tunga ordbehandlare som Microsoft Word. Texten sparas i filer med filändelsen .md.
- Lagra tillsammans med koden: Dokumentationen sparas i samma system (exempelvis GitHub eller GitLab) som själva programvaran.
- Granska som kod: Innan en ändring sparas permanent får en kollega kontrollera texten (en så kallad pull request eller granskning), precis som när man godkänner ny programmeringskod.
- Automatisk publicering: När ändringen godkänns omvandlas textfilerna automatiskt till en snygg webbsida via ett publiceringsverktyg.

## **Varför man använder metoden**

- Hålls aktuell: Eftersom dokumentationen ligger nära koden är det lättare att uppdatera den samtidigt som produkten ändras.
- Full historik: Du kan se exakt vem som har ändrat vad, när det gjordes, och ångra misstag (tack vare Git).
- Bättre samarbete: Utvecklare och tekniska skribenter arbetar i samma verktyg och följer samma fasta rutiner.

## **Den perfekta kompromissen**

Skriv i VS Code, publicera i GitBook. Det är detta som är den stora styrkan med Docs-as-Code och Git Sync. Du öppnar VS Code på din dator och skriver dina .md-filer i Split View. Du använder dina favorit-extensions för att kontrollera stavning och struktur. När du är klar gör du en git push av dina filer till GitHub.GitBook suger automatiskt upp dina Markdown-filer från GitHub och förvandlar dem till den färdiga webbplatsen för dina kunder. Du använder alltså VS Code som ditt skrivverktyg, och GitBook enbart som din publika tryckpress.

## **Detta är varför Docs-as-Code-filosofin är så populär**

Genom att använda VS Code och GitHub pratar du och utvecklarna exakt samma språk, på exakt samma plats.

- VS Code är bättre för att lära sig Markdown.
- I GitBook döljs Markdown-koden bakom färdiga knappar och menyer.
- I VS Code tvingas du skriva de faktiska tecknen (som #, ** och parenteser) med tangentbordet. Det gör att du snabbt nöter in grunderna i muskelminnet, vilket gör dig till en mer universell och flexibel teknisk skribent.

GitHub är mer effektivt när du jobbar nära utvecklare. När du jobbar direkt mot GitHub får du och utvecklarna ett unikt och tätt samarbete:

- Gemensamma granskningar: Du kan lägga till en utvecklare som "Reviewer" på din Pull Request i GitHub. Hen kan då lämna kommentarer direkt på specifika textrader i din Markdown-fil.
- Inga glömda uppdateringar: Om en utvecklare ändrar ett funktionsnamn i koden, kan hen i samma sekund öppna din Markdown-fil i VS Code, ändra ordet och skicka med det i sin kodleverans.
- Dokumentationen och koden släpps samtidigt.
- Automatiskt flöde: GitBook blir bara slutstationen. Systemet ligger i bakgrunden och läser av er GitHub-mapp, bygger om webbplatsen och publicerar ändringarna helt utan att du behöver logga in i GitBook över huvud taget.