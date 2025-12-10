# Jak spustit projekt lokálně

> **💡 Pro úplné začátečníky:** Podívejte se na soubor `JAK-SPUSTIT.md` - tam je vše vysvětleno krok za krokem!

## 1. Instalace Node.js

### Možnost A: Homebrew (doporučeno pro macOS)
```bash
# Nainstalujte Homebrew, pokud ho nemáte:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Nainstalujte Node.js:
brew install node
```

### Možnost B: Stáhnout z webu
1. Jděte na https://nodejs.org/
2. Stáhněte LTS verzi pro macOS
3. Spusťte instalační soubor

### Ověření instalace
```bash
node --version  # Mělo by zobrazit např. v20.x.x
npm --version   # Mělo by zobrazit např. 10.x.x
```

## 2. Instalace závislostí projektu

V adresáři projektu spusťte:
```bash
cd /Users/admin/Documents/glk
npm install
```

Tento příkaz nainstaluje všechny potřebné balíčky (React, TypeScript, Tailwind CSS, atd.)

## 3. Spuštění vývojového serveru

```bash
npm run dev
```

Po spuštění uvidíte v terminálu něco jako:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Otevřete prohlížeč a jděte na **http://localhost:5173/**

## 4. Další užitečné příkazy

```bash
# Build pro produkci
npm run build

# Preview produkční buildu
npm run preview

# Kontrola kódu (linting)
npm run lint
```

## Řešení problémů

### Pokud npm install selže:
- Zkuste smazat `node_modules` a `package-lock.json` a spustit znovu
- Zkontrolujte, že máte nejnovější verzi Node.js (LTS)

### Pokud se projekt nespustí:
- Zkontrolujte, že jste v správném adresáři (`/Users/admin/Documents/glk`)
- Zkuste smazat `node_modules` a spustit `npm install` znovu

