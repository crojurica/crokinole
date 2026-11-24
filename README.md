# crokinole.hr

Web stranica udruge **Crokinole Hrvatska**. Izrađena u [Astru](https://astro.build) kao statična stranica: nema baze ni administracije na serveru, samo HTML, CSS i slike.

## Pokretanje na računalu

Potreban je Node.js 22 ili noviji.

```bash
npm install      # jednom, instalira alate
npm run dev      # lokalni pregled na http://localhost:4321
npm run build    # gotova stranica u mapi dist/
```

## Gdje je što

| Što | Gdje |
|---|---|
| Vijesti | `src/content/vijesti/` — svaka vijest je jedna `.md` datoteka |
| Kalendar događanja | `src/data/kalendar.ts` |
| Podaci o udruzi (e-mail, OIB, adresa) i izbornik | `src/data/site.ts` |
| Stranice | `src/pages/` |
| Zajednički izgled (zaglavlje, podnožje) | `src/layouts/Base.astro` |
| Boje, font, razmaci | `src/styles/global.css` |
| Logotipi, šahovnica, font Inter | `public/img/`, `public/fonts/` |

## Kako dodati vijest

U `src/content/vijesti/` napravi novu datoteku, npr. `2027-01-12-prva-vecer.md`:

```markdown
---
naslov: Prva liga večer je iza nas
datum: 2027-01-12
sazetak: Jedna rečenica koja se prikazuje na naslovnici i u popisu vijesti.
---

Tekst vijesti. **Podebljano**, [poveznica](/liga/), popisi s crticom...
```

Dok vijest nije spremna, dodaj `skica: true` i neće se objaviti.

## Vizualni identitet

Boje, font i logotipi preuzeti su iz sustava dizajna „Crokinole Hrvatska“. Logotipi se ne crtaju ponovo i ne mijenjaju — uvijek koristi gotove datoteke iz `public/img/`.

## Objava

Objava na Hetzner bit će dodana kad se zakupi domena crokinole.hr.
