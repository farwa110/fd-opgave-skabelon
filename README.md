```
 Om Projektet
Dette projekt er udviklet med Astro, hvor jeg har fokuseret på at skabe en responsiv, moderne og performant weboplevelse. Jeg har anvendt de nyeste CSS-teknikker for at sikre en skalerbar og fleksibel UI.

✨ CSS-Teknikker Bruges
Jeg har implementeret flere avancerede stylingmetoder i projektet:

🧩 CSS Nesting – For mere struktureret og overskuelig styling.
📏 Clamp() for Fluid Typography – Sikrer, at typografien skalerer dynamisk afhængigt af skærmstørrelsen.
📦 Container Queries – Gør komponenter mere uafhængige ved at tilpasse dem baseret på deres container frem for viewport.
🎨 Global CSS Variables – Defineret i global.css for farver, corner radius og spacing, hvilket gør designet mere ensartet og lettere at vedligeholde.

# Stylesheets:
I min global css har jeg lavet variabler til spacing,text-size, farver og corner radius.
![global i css.](/src/assets/images/screenshots/colors.png)
<img width="410" alt="colors" src="https://github.com/user-attachments/assets/fea0e98d-479c-4a7e-8fe7-92ea00a866e8" />


I min mystyles.css har jeg min headings , p og data-themes ,som jeg har lavet [data-themes] med bestemt farver palete som jeg nemt skift med dark, medium, pop themes.
For at skabe sektioner med skiftende farvetemaer—hvor tekstfarve og baggrundsfarve bytter plads—har jeg anvendt data-theme-attributten. Denne attribut angiver, hvilket farvetema en sektion skal følge, og når temaet ændres, opdateres mine custom CSS properties automatisk. Dette gør det nemt at styre farveskift uden at skulle overskrive styles manuelt.
![mystyles i css.](/src/assets/images/screenshots/datatheme.png)
<img width="630" alt="datatheme" src="https://github.com/user-attachments/assets/9694c229-a3c4-44b7-8c53-fdc160303e7d" />


I min layout.css har jeg min layout styles hvor jeg har skrevet min grid med 3 coloner , 3 rækker .
![layout i css.](/src/assets/images/screenshots/layout.png)
<img width="470" alt="layout" src="https://github.com/user-attachments/assets/c27f346e-eee7-4e7a-945a-5c25696668d3" />


#Brug af Cascade layers: ![layout i css.](/src/assets/images/screenshots/layers.png)
<img width="350" alt="layers" src="https://github.com/user-attachments/assets/a3cd66e5-8116-4bb9-aedc-3f50767599b5" />


📂 Struktur og Sidemoduler (#Pages)
Jeg har opdelt projektet i flere sider (pages), hvor jeg importerer komponenter for at holde koden organiseret og genanvendelig.

 Komponent-baseret Arkitektur
For at forbedre readability og genbrug har jeg skabt små komponenter, som jeg importerer i større parent-komponenter. Dette gør det lettere at vedligeholde og skalerere projektet.

Eksempel: Jeg har oprettet en Button.astro/card.astro eller teamcard.astro, som jeg genbruger på tværs af projektet ved at importere den i andre komponenter, hvor en knap er nødvendig.
![button komponent.](/src/assets/images/screenshots/btn.png)
<img width="421" alt="btn" src="https://github.com/user-attachments/assets/a0fac643-ee89-4657-bda9-d0f19c859645" />

Samme tilgang er brugt til Tagline.astro og AboutHero.astro, som er importeret på flere sider (pages/team.astro, pages/about.astro og pages/casestudy.astro).
<img width="527" alt="abouthero" src="https://github.com/user-attachments/assets/f128b8cc-7a0f-49d8-82d3-7978de4ae39b" />

💡 Effektivitet: Da disse sider har samme layout, men forskellige billeder, har jeg valgt at importere billeder direkte på hver enkelt side. På denne måde genbruger jeg koden, mens jeg varierer indholdet—hvilket både optimerer kodebasen og reducerer gentagelser.



#Brug af Containerqueries for responsivtitet:
I dette projekt har jeg brugt container queries for at gøre komponenterne mere fleksible og uafhængige af viewportens størrelse.

I sektionen med teamList.astro (li) har jeg defineret hvert kort som en container:
<img width="405" alt="teamlist" src="https://github.com/user-attachments/assets/f5045aa1-58d2-4173-87b4-1d049e700e46" />

<img width="398" alt="card" src="https://github.com/user-attachments/assets/16c99012-343a-4946-982c-16d9b502eaf1" />

<img width="254" alt="hero" src="https://github.com/user-attachments/assets/1c83612a-149a-411d-ade9-8255c8885046" />

Dette betyder, at styling af indholdet i kortene kan tilpasses baseret på kortets bredde i stedet for hele skærmens størrelse.





```
