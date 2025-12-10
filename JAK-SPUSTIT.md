# 🚀 Jak spustit projekt lokálně - Jednoduchý návod

## Krok 1: Nainstalujte Node.js

### Co je Node.js?
Node.js je program, který potřebujete pro spuštění tohoto webu. Je to jako instalace aplikace.

### Jak nainstalovat (macOS):

**Možnost A: Stáhnout z webu (NEJEDNODUŠŠÍ)**
1. Otevřete prohlížeč a jděte na: **https://nodejs.org/**
2. Uvidíte dvě tlačítka - klikněte na **LTS** (dlouhodobá podpora)
3. Stáhne se soubor `.pkg` - otevřete ho
4. Postupujte podle instalačního průvodce (klikněte "Pokračovat", "Souhlasím", "Instalovat")
5. Hotovo! ✅

**Možnost B: Přes Homebrew (pokud ho máte)**
```bash
brew install node
```

### Ověření, že to funguje:
Otevřete **Terminál** (najdete ho v Aplikacích → Utility → Terminál) a zadejte:
```bash
node --version
```
Mělo by se zobrazit něco jako: `v20.x.x` nebo `v18.x.x`

Pak zadejte:
```bash
npm --version
```
Mělo by se zobrazit něco jako: `10.x.x` nebo `9.x.x`

**Pokud vidíte čísla = funguje to! ✅**

---

## Krok 2: Otevřete projekt v Terminálu

1. Otevřete **Terminál** (Aplikace → Utility → Terminál)
2. Zadejte tento příkaz (změňte cestu, pokud máte projekt jinde):
```bash
cd /Users/admin/Documents/glk
```
3. Stiskněte Enter

**Tip:** Můžete také:
- Otevřít Finder
- Najít složku `glk`
- Kliknout pravým tlačítkem na složku
- Vybrat "Nová služba Terminálu" (pokud máte tuto možnost)

---

## Krok 3: Nainstalujte závislosti

V Terminálu (kde jste v adresáři projektu) zadejte:
```bash
npm install
```

**Co se stane:**
- Stáhnou se všechny potřebné soubory (může to trvat 1-3 minuty)
- Uvidíte spoustu textu - to je normální
- Na konci by mělo být: `added XXX packages`

**Pokud se objeví chyba:**
- Zkontrolujte, že máte nainstalovaný Node.js (Krok 1)
- Zkuste to znovu

---

## Krok 4: Spusťte web

V Terminálu zadejte:
```bash
npm run dev
```

**Co se stane:**
- Začne se spouštět vývojový server
- Po chvíli uvidíte něco jako:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

## Krok 5: Otevřete web v prohlížeči

1. Otevřete jakýkoliv prohlížeč (Safari, Chrome, Firefox...)
2. Do adresního řádku zadejte:
```
http://localhost:5173
```
3. Stiskněte Enter

**Měli byste vidět web Golfového klubu Líšnice! 🎉**

---

## Co dál?

### Web běží lokálně
- Web běží na vašem počítači
- Změny v kódu se automaticky projeví (obnovte stránku)
- **Nenechávejte Terminál zavřený** - pokud ho zavřete, web se zastaví

### Zastavení webu
- V Terminálu stiskněte: `Ctrl + C` (nebo `Cmd + C` na Mac)
- Web se zastaví

### Znovu spuštění
- Kdykoliv můžete znovu spustit: `npm run dev`

---

## Řešení problémů

### "command not found: node"
- Node.js není nainstalovaný → vraťte se na Krok 1
- Nebo restartujte Terminál po instalaci Node.js

### "command not found: npm"
- Stejné jako výše - nainstalujte Node.js

### "npm install" selže
- Zkontrolujte internetové připojení
- Zkuste znovu: `npm install`
- Pokud to nefunguje, smažte složku `node_modules` a zkuste znovu

### Port 5173 je obsazený
- Zavřete jiné aplikace, které mohou používat tento port
- Nebo změňte port v `vite.config.ts`

### Web se nenačte
- Zkontrolujte, že Terminál stále běží a zobrazuje "ready"
- Zkuste jiný prohlížeč
- Zkuste: `http://127.0.0.1:5173` místo `localhost`

---

## Rychlý přehled příkazů

```bash
# Ověření instalace
node --version
npm --version

# Přejít do složky projektu
cd /Users/admin/Documents/glk

# Nainstalovat závislosti (jen jednou)
npm install

# Spustit web
npm run dev

# Zastavit web
Ctrl + C (nebo Cmd + C na Mac)
```

---

## Potřebujete pomoc?

Pokud něco nefunguje:
1. Zkontrolujte, že máte nainstalovaný Node.js
2. Zkontrolujte, že jste v správné složce (`cd /Users/admin/Documents/glk`)
3. Zkuste smazat `node_modules` a spustit `npm install` znovu
4. Zkontrolujte chybové hlášky v Terminálu

**Hodně štěstí! 🍀**

