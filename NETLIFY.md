# Nasazení na Netlify

## Rychlý návod

### Možnost 1: Přes Netlify Dashboard (nejjednodušší)

1. **Vytvořte účet na Netlify**
   - Jděte na https://www.netlify.com/
   - Přihlaste se (můžete použít GitHub, GitLab, nebo email)

2. **Připravte projekt v Gitu**
   ```bash
   # Pokud ještě nemáte git repozitář:
   git init
   git add .
   git commit -m "Initial commit"
   
   # Nahrajte na GitHub/GitLab/Bitbucket
   # (vytvořte nový repozitář na GitHubu a následujte instrukce)
   ```

3. **Deploy na Netlify**
   - Přihlaste se na https://app.netlify.com/
   - Klikněte na "Add new site" → "Import an existing project"
   - Připojte svůj Git repozitář
   - Netlify automaticky detekuje nastavení:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Klikněte na "Deploy site"

4. **Hotovo!**
   - Netlify vytvoří URL (např. `https://gkl-website.netlify.app`)
   - Každý push do main branch automaticky spustí nový deploy

### Možnost 2: Přes Netlify CLI

1. **Nainstalujte Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Přihlaste se**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   # První deploy
   netlify init
   
   # Nebo přímo deploy
   npm run build
   netlify deploy --prod
   ```

## Konfigurace

Projekt už má připravený `netlify.toml` s:
- ✅ Build command: `npm run build`
- ✅ Publish directory: `dist`
- ✅ Redirect rules pro React Router (SPA routing)
- ✅ Node.js verze 20

## Vlastní doména

1. V Netlify Dashboard jděte na "Domain settings"
2. Klikněte na "Add custom domain"
3. Zadejte svou doménu (např. `www.gkl.cz`)
4. Postupujte podle instrukcí pro DNS nastavení

## Environment Variables

Pokud budete potřebovat environment variables:
1. V Netlify Dashboard → Site settings → Environment variables
2. Přidejte potřebné proměnné (např. API keys)

## Continuous Deployment

Netlify automaticky:
- ✅ Detekuje změny v Git repozitáři
- ✅ Spustí build při každém push
- ✅ Deployne novou verzi
- ✅ Vytvoří preview deploy pro pull requesty

## Build Settings (automaticky detekováno)

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 20 (nastaveno v netlify.toml)

## Tipy

- **Preview Deploys:** Každý pull request dostane vlastní preview URL
- **Branch Deploys:** Můžete deployovat i jiné branchy než main
- **Build Logs:** Všechny build logy jsou dostupné v Netlify Dashboard
- **Analytics:** Můžete zapnout Netlify Analytics pro statistiky návštěvnosti

## Řešení problémů

### Build selže
- Zkontrolujte build logy v Netlify Dashboard
- Ověřte, že všechny závislosti jsou v `package.json`
- Zkuste build lokálně: `npm run build`

### Routing nefunguje
- `netlify.toml` už má redirect rules pro SPA routing
- Pokud stále nefunguje, zkontrolujte, že redirect je nastaven na status 200

### Pomalý build
- Netlify má cache pro `node_modules` - první build může být pomalejší
- Zkontrolujte, že nepřidáváte zbytečné soubory do buildu

