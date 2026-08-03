
# Om Docs-as-code
Docs-as-code är en metod där man skriver och hanterar dokumentation på samma sätt som mjukvaruutvecklare hanterar sin källkod. Det innebär i korthet att man använder enkla textfiler (som Markdown), lagrar dem i versionshantering (som Git) och automatiserar publiceringen.

---

## Hur det fungerar i praktiken
- Skriva i klartext: Du använder enkla format som Markdown i stället för tunga ordbehandlare som Microsoft Word. Texten sparas i filer med filändelsen .md.
- Lagra tillsammans med koden: Dokumentationen sparas i samma system (exempelvis GitHub eller GitLab) som själva programvaran.
- Granska som kod: Innan en ändring sparas permanent får en kollega kontrollera texten (en så kallad pull request eller granskning), precis som när man godkänner ny programmeringskod.
- Automatisk publicering: När ändringen godkänns omvandlas textfilerna automatiskt till en snygg webbsida via ett publiceringsverktyg.

### Varför man använder metoden

- Hålls aktuell: Eftersom dokumentationen ligger nära koden är det lättare att uppdatera den samtidigt som produkten ändras.
- Full historik: Du kan se exakt vem som har ändrat vad, när det gjordes, och ångra misstag (tack vare Git).
- Bättre samarbete: Utvecklare och tekniska skribenter arbetar i samma verktyg och följer samma fasta rutiner.

## Den perfekta kompromissen   

Skriv i VS Code, publicera i GitBook.
Det är detta som är den stora styrkan med Docs-as-Code och Git Sync. Du öppnar VS Code på din dator och skriver dina .md-filer i Split View. Du använder dina favorit-extensions för att kontrollera stavning och struktur. När du är klar gör du en git push av dina filer till GitHub.GitBook suger automatiskt upp dina Markdown-filer från GitHub och förvandlar dem till den färdiga webbplatsen för dina kunder. Du använder alltså VS Code som ditt skrivverktyg, och GitBook enbart som din publika tryckpress.

## Detta är varför Docs-as-Code-filosofin är så populär 

Genom att använda VS Code och GitHub pratar du och utvecklarna exakt samma språk, på exakt samma plats. 
- VS Code är bättre för att lära sig Markdown.
- I GitBook döljs Markdown-koden bakom färdiga knappar och menyer. 
- I VS Code tvingas du skriva de faktiska tecknen (som #, ** och parenteser) med tangentbordet. Det gör att du snabbt nöter in grunderna i muskelminnet, vilket gör dig till en mer universell och flexibel teknisk skribent.

GitHub är mer effektivt när du jobbar nära utvecklare. När du jobbar direkt mot GitHub får du och utvecklarna ett unikt och tätt samarbete:
- Gemensamma granskningar: Du kan lägga till en utvecklare som "Reviewer" på din Pull Request i GitHub. Hen kan då lämna kommentarer direkt på specifika textrader i din Markdown-fil.
- Inga glömda uppdateringar: Om en utvecklare ändrar ett funktionsnamn i koden, kan hen i samma sekund öppna din Markdown-fil i VS Code, ändra ordet och skicka med det i sin kodleverans. 
- Dokumentationen och koden släpps samtidigt.
- Automatiskt flöde: GitBook blir bara slutstationen. Systemet ligger i bakgrunden och läser av er GitHub-mapp, bygger om webbplatsen och publicerar ändringarna helt utan att du behöver logga in i GitBook över huvud taget.

## Om slutanvändaren jobbar i Confluence

Slutanvändaren behöver aldrig se eller använda Git. De läser dokumentationen på en helt vanlig webbsida eller portal – och det går utmärkt att använda Confluence som den portalen. När du kombinerar Docs-as-code med Confluence fungerar det så här:
1. Arbetsflödet (Bakom kulisserna) Skribenten arbetar i Git och skriver i Markdown.Granskningen sker i Git-verktyget (t.ex. GitHub) tillsammans med utvecklarna.
2. Automatiseringen (Bryggan) När dokumentationen godkänns i Git aktiveras en automatisk funktion (ett skript eller en CI/CD-pipeline). Denna funktion tar texten från Git, gör om den och skickar den automatiskt till Confluence via Confluences programmeringsgränssnitt (API).
3. Slutanvändaren (I Confluence) Användaren söker, läser och navigerar i Confluence precis som vanligt. För dem ser det ut som en vanlig Confluence-sida, helt ovetande om att texten skapades i Git.

Varför gör man så? Denna lösning ger det bästa av två världar: Teknikerna får arbeta effektivt i sina kodverktyg, medan resten av företaget får en central och lättillgänglig plattform i Confluence.

## Verktyg man använder för att koppla ihop Git med Confluence

Här är de vanligaste verktygen och hur det automatiska flödet ser ut steg för steg. Verktyg som kopplar ihop Git och Confluence. För att skicka text från Git till Confluence används färdiga tillägg i ditt automatiseringssystem (CI/CD-system). 
De mest populära är:
- markdown-to-confluence: Ett populärt verktyg baserat på Node.js som översätter Markdown-filer till Confluences eget format och laddar upp dem via API.
- GitHub Actions för Confluence: Färdiga byggstenar på GitHub Marketplace (till exempel från Atlassian Marketplace) som gör att du kan publicera med några rader konfiguration.
- mkdocs-confluence: Ett tillägg för MkDocs (ett populärt Docs-as-code-verktyg) som exporterar sidor direkt till Confluence-instanser. 
 
  
## Det automatiska flödet (Steg för steg)

Här är den exakta kedjan av händelser från att en skribent sparar en ändring till att slutanvändaren ser den i Confluence:
- Skriva: Du uppdaterar en installationsguide i filen install.md på din dator med en vanlig textredigerare.
- Granska: Du skickar in ändringen till GitHub. En kollega läser igenom texten och klickar på "Godkänn".
- Publicera till Git: Ändringen slås ihop (mergas) med huvudbranschen (Master/Main) i Git.
- Pipelinen startar: GitHub upptäcker ändringen och startar automatiskt ett skript (en pipeline). Skriptet gör följande:
  1. Läser in din install.md.
  2. Loggar in i Confluence i bakgrunden med en säker API-nyckel.
  3. Hittar rätt sida i Confluence baserat på ett ID-nummer.
  4. Skriver över den gamla texten i Confluence med den nya Markdown-texten.
   
   Slutresultat: Confluence-sidan uppdateras på en bråkdel av en sekund. Slutanvändaren kan nu läsa den nya guiden.

  ## Manuellt till Confluence

  Det finns två enkla sätt att göra det manuellt utan att sätta upp några automatiska skript.
  
  **Alternativ 1:**

  Klistra in Markdown direkt (Enklast) Moderna Confluence (Cloud) har inbyggt stöd för Markdown. Du behöver inte ens växla till källkodsläge.
  - Kopiera: Markera och kopiera all text i din .md-fil (alltså råtexten med alla # och *).
  - Klistra in: Gå till din Confluence-sida, ställ dig i redigeringsläget och klistra in (Ctrl+V / Cmd+V).
  - Klart: Confluence känner automatiskt igen Markdown-formateringen och omvandlar direkt rubriker, listor och fetstil till snygg Confluence-text.
  
  **Alternativ 2:** 
  Använd Confluences Import-funktion. Om du har hela dokument (eller flera filer) kan du importera dem via Confluences inbyggda verktyg.
  - Klicka på Skapa (Create) för att göra en ny sida.
  - I verktygsfältet (eller via /-menyn) letar du efter Importera (Import).
  - Välj Markdown (eller Word om du har exporterat till det först).
  - Ladda upp filen så skapar Confluence sidan åt dig med rätt formatering.

  Tänk på detta vid manuell hantering:
  - Länkar: Interna länkar mellan olika .md-filer i Git slutar ofta att fungera och måste uppdateras manuellt i Confluence.
  - Bilder: Lokala bilder som ligger i din Git-mapp följer inte alltid med vid enkel kopiering, utan du kan behöva ladda upp bildfilerna på nytt i Confluence.
  
  ## Så får du bilder att fungera
  När du kopierar ren Markdown-text följer inte lokala bildfiler (som ligger på din dator) med. Du har två sätt att lösa detta på:
  
  Strategi A: 
  - Ladda upp bilden i Confluence först (Säkrast manuellt)
  - Skriv din text i Markdown men lämna en tom rad där bilden ska ligga.
  - Kopiera texten och klistra in den i Confluence.
  - Dra och släpp bildfilen från din dator direkt till rätt plats på Confluence-sidan.

  Strategi B: 
  - Använd webbadresser (URL) i din Markdown
  - Om dina bilder redan ligger uppladdade på en publik webbplats eller i ett öppet system, kan du länka direkt till dem i din Markdown-kod. Då ritas de ut direkt när du klistrar in texten i Confluence.

## Så får du interna länkar att fungera

I Docs-as-code länkar man vanligtvis mellan filer (t.ex. Läs mer i en annan Markdown-fil). Om du klistrar in det i Confluence kommer länken att gå till en fil som inte finns där, och den blir trasig. För att länkar ska fungera manuellt måste du använda webbadresser till Confluence-sidorna:

Steg-för-steg för fungerande länkar:
- Skapa de sidor du behöver i Confluence först (även om de är tomma).
- Kopiera webbadressen (URL:en) till den Confluence-sida du vill länka till.
- I din Markdown-kod i Git, länka direkt till den Confluence-adressen i stället för till filnamnet:

> För att installera,se vår [installationsguide](https://atlassian.net)

När du nu kopierar texten och klistrar in den i Confluence, kommer länken att klickas direkt till rätt Confluence-sida.

**Sammanfattande tips för smidig hantering**

- Använd Confluence Cloud: Om ni använder molnversionen av Confluence, så känner den direkt igen när du klistrar in en fullständig webblänk (som i exemplet ovan) och gör om den till en snygg, klickbar sidtitel automatiskt.
- Håll strukturen enkel: Undvik djupa undermappar för dina filer i Git om du ska flytta dem manuellt. Det gör det mycket lättare att hålla reda på vilka sidor som ska länkas ihop i Confluence.



# Mappstruktur i VS Code
**SE Markdown!**

mitt-api-projekt/
├── .git/                  # Dold mapp som sköter Git-historiken (skapas automatiskt)
├── openapi/               # Mapp för utvecklarens API-specifikationer
│   └── openapi.yaml       # Den råa API-koden från Swagger
├── docs/                  # Här bor all din Markdown-dokumentation
│   ├── SUMMARY.md         # GitBooks innehållsförteckning (viktig!)
│   ├── README.md          # Startsidan / Introduktionsguiden
│   ├── felkoder.md        # Sidan som förklarar globala felkoder
│   └── sektion-jobb/      # En undermapp för att gruppera specifika sidor
│       ├── introduktion.md
│       ├── skapa-jobb.md  # Sidan vi skapade tidigare (POST /jobs)
│       └── ta-bort-jobb.md
└── assets/                # Mapp för bilder, logotyper och diagram
    └── arkitektur.png


# Readme och Summary
## README.md (Startsidan)
I utvecklingsvärlden är README.md alltid den första filen som läses. GitBook tolkar automatiskt denna fil som dokumentationens välkomstsida eller "Kom igång"-guide.

1. Skriva en README.md (Startsidan)
I ett programvaruprojekt är README.md det absolut första en utvecklare ser när de öppnar kodarkivet på GitHub, eller när en kund landar på dokumentationssidan.

**Skribentens uppgift:** 

Utvecklare tenderar att skriva väldigt korta och kryptiska README-filer. Din uppgift som skribent är att förvandla den till en välkomnande dörr. 
Du ska svara på tre frågor direkt på förstasidan:
1. Vad är detta för projekt/produkt? (En kort, tydlig hisspitch på 2–3 meningar).
2. Hur kommer jag igång? (Snabblänkar till installation eller autentisering).
3. Var hittar jag resten av informationen? (Hänvisningar till API-referensen)



## SUMMARY.md (Innehållsförteckningen)
Detta är GitBooks hemliga vapen. 
Det är en vanlig Markdown-fil där du gör en punktlista med länkar till alla dina andra sidor. GitBook läser av denna lista och bygger automatiskt upp den klickbara vänstermenyn på din publika webbplats.

Att skriva och underhålla README.md och SUMMARY.md är två av de absolut viktigaste kärnuppgifterna för en teknisk skribent som arbetar i en Docs-as-Code-miljö.

Det är skribentens jobb att se till att dessa filer är pedagogiska, korrekta och logiskt strukturerade.

### Skriva och strukturera en SUMMARY.md (Navigationsmenyn)
Som vi nämnde tidigare är SUMMARY.md den fil som GitBook (och andra verktyg som MkDocs) använder för att bygga upp den klickbara sidomenyn på webbplatsen. 

**Skribentens uppgift:**

Här fungerar du som en informationsarkitekt. Det är du som bestämmer i vilken ordning användaren ska läsa dokumentationen. Om strukturen här är rörig kommer kunderna inte att hitta vad de söker, oavsett hur bra artiklarna är skrivna.

Hur du bygger upp den i VS Code:
- Du använder vanliga Markdown-listor (*) för att skapa länkar, och rubriker (# eller ##) för att dela upp menyvalen i logiska block.


## Varför utvecklare älskar när skribenter tar över dessa filer
När du tar ansvar för README.md och SUMMARY.md avlastar du utvecklingsteamet enormt mycket:
- De slipper fundera på hur webbplatsens struktur ska se ut.
- Du ser till att nya sidor faktiskt hamnar i menyn (det är supervanligt att utvecklare skapar en ny .md-sida men glömmer att länka till den i SUMMARY.md, vilket gör sidan osynlig för kunderna).

# VS Code for web på olika datorer #

I korthet: Du committar (pushar) dina VS-filer till ditt repository på GitHub (kan vara privat) och kan sedan hämta upp dem i VS Code på vilken dator som helst. Filerna "sparas" inte i molnet eller lokalt som i t ex Google docs utan det är GitHub som fungerar som ditt "moln".

Fördelen med att jobba med Markdown i VS Code är att du har en split view där du ser direkt hur koden renderas. Bra om man vill lära sig Markdown. Du kan även jobba direkt i Github men då har du kod och preview på olika flikar.

Du behöver: 
- Ett konto på github.com (kan sättas till Privat)
- vscode.dev
- Sätta upp en koppling mellan GitHub och VS via Source control i VS.

# GitBook #

**Varför Gitbook?**

Om målgruppen är extern (t ex externa kunder som ska läsa din dokumentation) som du inte vill släppa in i er interna IT-miljö, då är Gitbook rätt alternativ. 
Om målgruppen är intern och man redan jobbar med t ex Confluence/Sharepoint så är det bättre att sätta upp ett automatiskt flöde mellan Github och C/S. Skriv i VSCode och lagra i Github. 












  
  
