# Test Coverage Analysis

## Current State

**Test coverage: 0%** — The codebase has no test files, no test framework, and no testing infrastructure.

### Source Files

| File | Lines | Purpose |
|------|-------|---------|
| `app.js` | 763 | UI logic, SPA navigation, page rendering |
| `data/damage-calc.js` | 267 | Damage calculation engine (Gen 9) |
| `data/pokemon-data.js` | 414 | Pokemon DB, type chart, natures |
| `data/moves-data.js` | 277 | Moves DB, items DB |

---

## Recommended Testing Priorities

### Priority 1 — Damage Calculation Engine (`data/damage-calc.js`)

This is the most critical and complex module. Incorrect calculations directly mislead users building competitive teams.

**Functions to test:**

#### `calcStat(baseStat, iv, ev, level, natureMod)`
- Standard stat calculation (e.g., Pikachu Lv50, 31 IV, 252 EV, +nature)
- Zero EV / zero IV edge cases
- Nature modifiers (1.0, 1.1, 0.9)
- Level 1 and level 100 boundaries

#### `calcHP(baseHP, iv, ev, level)`
- Normal HP calculation
- Shedinja special case (baseHP === 1 → always returns 1)
- Min/max IV and EV combinations

#### `getNatureMod(nature, stat)`
- Boosted stat (+10%)
- Reduced stat (-10%)
- Neutral stat (no change)
- Neutral natures (e.g., まじめ) that have no up/down

#### `getTypeEffectiveness(moveType, defTypes)`
- Super effective (2x)
- Not very effective (0.5x)
- Immune (0x, e.g., Normal → Ghost)
- Dual-type multiplication (e.g., Ground → Fire/Steel = 4x)
- Dual-type mixed effectiveness (e.g., Fire → Grass/Water)

#### `getSTAB(moveType, attackerTypes)`
- STAB match (1.5x)
- No STAB match (1.0x)
- Dual-type attacker with STAB on second type

#### `calculateDamage(params)` — The core function
- Basic physical and special damage
- Status moves return zero damage
- Zero-power moves return special message
- Invalid Pokemon/move returns null
- Weather modifiers (Sun boosts Fire, Rain boosts Water, each weakens the other)
- Terrain modifiers (Electric/Grassy/Psychic terrain)
- Critical hit (1.5x, ignores negative rank, ignores walls)
- Burn halves physical damage (but not on crit)
- Reflect/Light Screen halving (physical/special respectively, not on crit)
- Item modifiers (attacker and defender items, type-boosting items)
- Rank modifiers (+1 through +6, -1 through -6)
- STAB + type effectiveness combined
- Guaranteed KO count calculation
- Damage range (min at 85%, max at 100%)
- Minimum damage floor (always at least 1)

#### `calcSpeedStat()`, `calcHPStat()`, `calcAllStats()`
- Invalid Pokemon ID returns 0/null
- Rank modifiers on speed
- Item modifiers on speed (e.g., Choice Scarf)

---

### Priority 2 — Type Chart Correctness (`data/pokemon-data.js`)

The `TYPE_CHART` is a hand-coded 18×18 matrix. Any single typo breaks calculations silently.

**Tests to add:**
- Verify all 18 types exist as keys
- Verify known matchups: Fire→Grass=2, Water→Fire=2, Ground→Electric=2, Normal→Ghost=0
- Verify symmetry expectations (e.g., if Fire→Ice=2, Ice should not also be 2→Fire)
- Verify every cell is one of: 0, 0.5, 1, 2
- Verify all 324 (18×18) entries are present

---

### Priority 3 — Data Integrity (`data/pokemon-data.js`, `data/moves-data.js`)

These databases are manually maintained. Errors here propagate everywhere.

**Tests to add:**
- Every Pokemon has required fields: `name`, `nameEn`, `types`, `stats` (all 6), `abilities`, `moves`
- Every Pokemon's types are valid types from `ALL_TYPES`
- Every Pokemon's moves exist in `MOVES_DB`
- Every move has required fields: `type`, `category`, `power`, `accuracy`, `pp`
- Move categories are one of: `物理`, `特殊`, `変化`
- Move types are valid types from `ALL_TYPES`
- All natures have valid `up`/`down` stat keys (or are neutral)
- All items have required modifier fields

---

### Priority 4 — Utility Functions (`app.js`)

**Functions to test:**

#### `getPokemonIdByName(name)`
- Lookup by Japanese name
- Lookup by English name
- Non-existent name returns null

#### `getSortedPokemonList()`
- Returns array sorted by Pokedex number
- Each entry has id, name, types, stats

#### `getStatColor(value)`
- Boundary values: 59, 60, 79, 80, 99, 100, 119, 120, 149, 150
- Returns correct hex color for each range

#### `getStatBarClass(statKey)`
- Valid stat keys return correct CSS class
- Invalid key returns empty string

---

### Priority 5 — Integration Tests

**Scenarios to validate:**
- Full damage calculation: Charizard Flamethrower → Venusaur (resisted, STAB, special)
- Full damage calculation: Garchomp Earthquake → Pikachu (super effective, STAB, physical)
- Speed comparison with items and natures
- Type effectiveness through dual-type defenders

---

## Setup Recommendations

Since this is a vanilla JS project with no package manager:

1. **Initialize npm**: `npm init -y`
2. **Install Vitest** (lightweight, no config needed): `npm install -D vitest`
3. **Convert data files to ES modules** or use a setup that loads them as globals
4. **Add test script**: `"test": "vitest run"`, `"test:watch": "vitest"`, `"test:coverage": "vitest run --coverage"`

### Suggested File Structure

```
tests/
  damage-calc.test.js      — Priority 1
  type-chart.test.js       — Priority 2
  data-integrity.test.js   — Priority 3
  utils.test.js            — Priority 4
  integration.test.js      — Priority 5
```

---

## Estimated Impact

| Priority | Area | Risk if Untested |
|----------|------|-----------------|
| 1 | Damage calculator | Users get wrong damage numbers, bad team-building decisions |
| 2 | Type chart | Silent incorrect matchups, wrong effectiveness displayed |
| 3 | Data integrity | Missing fields cause runtime crashes, wrong Pokemon info |
| 4 | Utility functions | Broken lookups, wrong UI rendering |
| 5 | Integration | Combinations of correct parts producing wrong results |
