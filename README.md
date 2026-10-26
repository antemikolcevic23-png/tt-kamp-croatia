# TABLE TENNIS CAMP CROATIA – landing stranica

Statična jednostranična stranica (HTML + CSS + malo vanilla JS-a). Nema build koraka ni frameworka.

## Otvaranje
- Lokalno: dvoklik na `index.html` ili `python3 -m http.server 8000` u ovoj mapi, pa http://localhost:8000
- Hosting: uploadaj cijelu mapu (index.html, styles.css, script.js, assets/) na bilo koji statični hosting (GitHub Pages, Cloudflare Pages, Netlify).

## Struktura
- `index.html` – sadržaj (O kampu, Program, Termini, Cijene, Galerija, Kontakt)
- `styles.css` – dizajn, responsive, animacije (isključene uz `prefers-reduced-motion`)
- `script.js` – scroll reveal (IntersectionObserver), parallax hero, sticky CTA na mobitelu
- `assets/` – fotografije s Facebook stranice kampa

Svi gumbi „Prijavi se na kamp” otvaraju Google Apps Script obrazac u novom tabu.
Fontovi (Inter, Sora) učitavaju se s Google Fonts; bez interneta koristi se sistemski font.
