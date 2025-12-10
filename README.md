# Golfový klub Líšnice - Moderní web

Moderní, elegantní webová stránka pro Golfový klub Líšnice vytvořená s React, TypeScript a Tailwind CSS.

## Technologie

- **React 18+** s TypeScript
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router v6** - Routing a vícejazyčnost
- **Google Fonts** - Playfair Display, Lora, Inter

## Funkce

- ✅ Vícejazyčnost (Čeština, Angličtina, Němčina)
- ✅ Responzivní design (mobile-first)
- ✅ Moderní UI komponenty
- ✅ Scroll animace
- ✅ Kompletní struktura stránek:
  - Homepage
  - O klubu (s timeline a galerií)
  - Hřiště (s detaily a parametry)
  - Členství (s pricing table a FAQ)
  - Tee Times (s kalendářem a rezervací)
  - Turnaje (s kalendářem a výsledky)
  - Služby
  - Kontakt (s formulářem a mapou)

## Instalace

```bash
npm install
```

## Konfigurace počasí

Pro zobrazení předpovědi počasí na homepage je potřeba nastavit API klíč od OpenWeatherMap:

1. Zaregistrujte se zdarma na https://openweathermap.org/api
2. Získejte API klíč v sekci "API keys" ve vašem účtu
3. Vytvořte soubor `.env` v root adresáři projektu
4. Přidejte do `.env`:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
5. Restartujte dev server (`npm run dev`)

**Poznámka:** Bez API klíče se widget počasí nezobrazí (není to chyba, je to očekávané chování).

## Vývoj

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Nasazení na Netlify

Projekt je připraven pro nasazení na Netlify. Podrobné instrukce najdete v souboru [NETLIFY.md](./NETLIFY.md).

**Rychlý postup:**
1. Vytvořte účet na https://www.netlify.com/
2. Připojte Git repozitář (GitHub/GitLab/Bitbucket)
3. Netlify automaticky detekuje nastavení a nasadí projekt
4. Hotovo! 🎉

**Konfigurace:**
- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing: Nastaveno v `netlify.toml`

## Struktura projektu

```
src/
├── components/       # Znovupoužitelné komponenty
│   ├── layout/       # Header, Footer, Navigation
│   ├── ui/           # Button, Card, Section, etc.
│   └── sections/     # Hero, etc.
├── pages/            # Stránky aplikace
├── data/             # Mock data
├── i18n/             # Vícejazyčnost
├── hooks/            # Custom hooks
├── styles/           # Globální styly
└── App.tsx           # Hlavní komponenta
```

## Design System

### Barvy
- Primární: Tmavě zelená (#1B4332, #2D6A4F, #52B788)
- Sekundární: Zlatavá (#D4AF37, #C5A572)
- Neutrální: Krémová béžová (#F8F6F1, #EDE7DC), Tmavá (#2C2C2C)

### Typografie
- H1, H2: Playfair Display
- H3, H4: Lora
- Body: Inter

## Poznámky

- Všechna data jsou mock data připravená pro budoucí backend integraci
- Obrázky jsou placeholdery - lze později nahradit skutečnými fotografiemi
- Starý web v "Starý web www.gkl.cz/" slouží pouze jako reference

## License

© 2024 Golfový klub Líšnice

