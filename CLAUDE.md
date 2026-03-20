# CLAUDE.md — Pokedex App

## Project Overview

A Pokemon battle strategy tool and encyclopedia with a Japanese interface. Pure vanilla JavaScript SPA (no frameworks, no build step, no npm dependencies). Supports Gen 1–9 Pokemon with damage calculation, type charts, stat comparison, and a Pokedex browser.

## Repository Structure

```
pokedex-app/
├── index.html          # Single-page HTML (all 5 pages/sections)
├── app.js              # Main application logic, routing, UI rendering
├── style.css           # All styles, CSS variables, responsive design
├── data/
│   ├── pokemon-data.js # Pokemon DB, type chart, natures, type mappings
│   ├── moves-data.js   # Moves DB and items DB with stat modifiers
│   └── damage-calc.js  # Gen 9 damage calculation engine
└── README.md
```

## Architecture

- **Client-side SPA** with manual routing via `navigateTo(pageId)`
- **No build process** — files are served directly to the browser
- **No package.json or npm dependencies** — zero runtime deps
- **Data layer** lives in `/data` as plain JS objects loaded via `<script>` tags
- **Sprites** fetched from PokeAPI GitHub CDN (`raw.githubusercontent.com/PokeAPI/sprites/...`)

### Pages (5 sections in index.html)

| Page ID | Description |
|---------|-------------|
| `page-home` | Landing page with tool cards |
| `page-damage-calc` | Damage calculator (attacker/defender/result) |
| `page-pokedex` | Pokemon grid browser with detail modal |
| `page-type-chart` | 18×18 type effectiveness matrix |
| `page-stats-compare` | Side-by-side base stat comparison |

## Key Data Structures

### `POKEMON_DB` (pokemon-data.js)
```js
{ id: { name, nameEn, types: [], stats: { hp, atk, def, spa, spd, spe }, abilities: [], hiddenAbility, weight, moves: [] } }
```

### `MOVES_DB` (moves-data.js)
```js
{ "技名": { type, category: "物理|特殊|変化", power, accuracy, pp, effect } }
```

### `ITEMS` (moves-data.js)
Objects with modifier properties: `atkMod`, `spaMod`, `defMod`, `spdMod`, `speMod`, `typeMod`, `typeModType`.

### `TYPE_CHART` (pokemon-data.js)
18×18 matrix of effectiveness multipliers. `ALL_TYPES` array for type names (Japanese). `TYPE_EN` maps Japanese type names to English for CSS class usage.

### `NATURES` (pokemon-data.js)
25 natures with `plus`/`minus` stat keys for 1.1×/0.9× modifiers.

## Code Conventions

### Naming
- **Functions**: camelCase — `initDamageCalc()`, `renderPokedexGrid()`, `calculateDamage()`
- **Function prefixes**: `init*` (page setup), `render*` (DOM rendering), `update*` (state changes), `populate*` (dropdown filling), `calculate*` / `calc*` (math)
- **Stats**: abbreviated as `hp`, `atk`, `def`, `spa`, `spd`, `spe`
- **DOM IDs**: `atk-*` for attacker elements, `def-*` for defender elements
- **Game terms**: Japanese in UI and data keys; English for internal identifiers and CSS classes

### CSS
- CSS custom properties for theming (`--bg-primary`, `--text-primary`, etc.)
- Type colors via `.type-badge.type-{englishTypeName}` classes
- Responsive breakpoints using `max-width` media queries
- Transitions default to `0.2s ease`

### Patterns
- Page visibility controlled by toggling `.active` class on `.page` elements
- Event-driven: `addEventListener` throughout, real-time calculation on input change
- Lazy-loaded sprites: `loading="lazy"` on `<img>` tags
- Modal dialog for Pokedex detail views

## Damage Calculation Engine (damage-calc.js)

Core functions:
- `calcStat(base, iv, ev, level, natureMod)` — compute real stat
- `calcHP(base, iv, ev, level)` — HP uses a different formula
- `getNatureMod(nature, stat)` — returns 1.1, 0.9, or 1.0
- `getTypeEffectiveness(atkType, defTypes)` — lookup from TYPE_CHART
- `getSTAB(moveType, attackerTypes)` — 1.5× if type matches
- `calculateDamage(params)` — full Gen 9 calc with weather, terrain, items, screens, burn, crit, stat ranks

Supported modifiers: IV/EV, nature, weather (sun/rain/hail/sand), terrain (electric/grass/psychic/mist), stat ranks (−6 to +6), items, critical hits, burn, Reflect/Light Screen, random roll (85–100%).

## Development Workflow

### Running locally
Open `index.html` in a browser, or use any static file server:
```bash
python3 -m http.server 8000
# or
npx serve .
```

### No build, lint, or test commands
There is no `package.json`, no linter config, no test framework. Validate changes by opening the app in a browser.

### Adding a new Pokemon
1. Add entry to `POKEMON_DB` in `data/pokemon-data.js` with all required fields
2. Ensure move names referenced in `moves` array exist in `MOVES_DB`

### Adding a new move
Add entry to `MOVES_DB` in `data/moves-data.js` with `type`, `category`, `power`, `accuracy`, `pp`, `effect`.

### Adding a new item
Add entry to `ITEMS` in `data/moves-data.js` with appropriate modifier properties.

## External Resources

- **Sprites**: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png` (read-only CDN, no auth)
- **Font**: Google Fonts — Noto Sans JP

## Known Limitations

- Pokemon database contains ~30 entries (not all 1000+)
- No offline service worker
- No automated tests
- No accessibility attributes (aria labels, alt text)
- Interface is primarily in Japanese
