// ============================
// SPA Navigation
// ============================
function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(l => l.classList.remove('active'));

  const page = document.getElementById(`page-${pageId}`);
  if (page) page.classList.add('active');

  document.querySelectorAll(`[data-page="${pageId}"]`).forEach(l => l.classList.add('active'));

  // Close mobile nav
  document.getElementById('mobile-nav').classList.add('hidden');
  window.scrollTo(0, 0);
}

// Nav click handlers
document.querySelectorAll('[data-page]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo(link.dataset.page);
  });
});

// Mobile menu
document.getElementById('mobile-menu-btn').addEventListener('click', () => {
  document.getElementById('mobile-nav').classList.toggle('hidden');
});

// ============================
// Utility Functions
// ============================
const SPRITE_URL = (nameEn) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonSpriteId(nameEn)}.png`;

function getPokemonSpriteId(nameEn) {
  // Map special names to their PokeAPI IDs
  const idMap = {};
  for (const [id, poke] of Object.entries(POKEMON_DB)) {
    idMap[poke.nameEn] = id;
  }
  return idMap[nameEn] || '0';
}

function getPokemonIdByName(name) {
  for (const [id, poke] of Object.entries(POKEMON_DB)) {
    if (poke.name === name || poke.nameEn === name) return id;
  }
  return null;
}

function getSortedPokemonList() {
  return Object.entries(POKEMON_DB)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([id, poke]) => ({ id: Number(id), ...poke }));
}

function createTypeBadge(typeName) {
  const span = document.createElement('span');
  span.className = `type-badge type-${typeName}`;
  span.textContent = typeName;
  return span;
}

// Stat color based on value
function getStatColor(value) {
  if (value >= 150) return '#ef4444';
  if (value >= 120) return '#f97316';
  if (value >= 100) return '#eab308';
  if (value >= 80) return '#22c55e';
  if (value >= 60) return '#3b82f6';
  return '#6b7280';
}

function getStatBarClass(statKey) {
  const map = { hp: 'stat-bar-hp', atk: 'stat-bar-atk', def: 'stat-bar-def', spa: 'stat-bar-spa', spd: 'stat-bar-spd', spe: 'stat-bar-spe' };
  return map[statKey] || '';
}

const STAT_NAMES = { hp: 'HP', atk: 'こうげき', def: 'ぼうぎょ', spa: 'とくこう', spd: 'とくぼう', spe: 'すばやさ' };

// ============================
// Populate Selects
// ============================
function populatePokemonSelect(selectEl) {
  selectEl.innerHTML = '<option value="">-- 選択 --</option>';
  const list = getSortedPokemonList();
  list.forEach(p => {
    const opt = document.createElement('option');
    opt.value = p.id;
    opt.textContent = `#${String(p.id).padStart(3, '0')} ${p.name}`;
    selectEl.appendChild(opt);
  });
}

function populateNatureSelect(selectEl) {
  selectEl.innerHTML = '';
  for (const [name, data] of Object.entries(NATURES)) {
    const opt = document.createElement('option');
    opt.value = name;
    let label = name;
    if (data.up) {
      label += ` (${STAT_NAMES[data.up]}↑ ${STAT_NAMES[data.down]}↓)`;
    }
    opt.textContent = label;
    if (name === 'まじめ') opt.selected = true;
    selectEl.appendChild(opt);
  }
}

function populateItemSelect(selectEl) {
  selectEl.innerHTML = '';
  for (const name of Object.keys(ITEMS)) {
    const opt = document.createElement('option');
    opt.value = name;
    opt.textContent = name;
    selectEl.appendChild(opt);
  }
}

function populateTypeSelect(selectEl, includeNone = false) {
  if (includeNone) {
    const noneOpt = document.createElement('option');
    noneOpt.value = '';
    noneOpt.textContent = 'なし';
    selectEl.appendChild(noneOpt);
  }
  ALL_TYPES.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t;
    opt.textContent = t;
    selectEl.appendChild(opt);
  });
}

// ============================
// Damage Calculator Page
// ============================
function initDamageCalc() {
  const atkSelect = document.getElementById('atk-pokemon');
  const defSelect = document.getElementById('def-pokemon');
  populatePokemonSelect(atkSelect);
  populatePokemonSelect(defSelect);

  populateNatureSelect(document.getElementById('atk-nature'));
  populateNatureSelect(document.getElementById('def-nature'));
  populateItemSelect(document.getElementById('atk-item'));
  populateItemSelect(document.getElementById('def-item'));

  atkSelect.addEventListener('change', () => updateCalcSide('atk'));
  defSelect.addEventListener('change', () => updateCalcSide('def'));

  // EV/IV change listeners
  document.querySelectorAll('.atk-iv, .atk-ev').forEach(el => {
    el.addEventListener('input', () => updateCalcStats('atk'));
  });
  document.querySelectorAll('.def-iv, .def-ev').forEach(el => {
    el.addEventListener('input', () => updateCalcStats('def'));
  });

  document.getElementById('atk-nature').addEventListener('change', () => updateCalcStats('atk'));
  document.getElementById('def-nature').addEventListener('change', () => updateCalcStats('def'));
  document.getElementById('atk-level').addEventListener('input', () => updateCalcStats('atk'));
  document.getElementById('def-level').addEventListener('input', () => updateCalcStats('def'));

  document.getElementById('calc-btn').addEventListener('click', runDamageCalc);

  // Also calc on move change
  document.getElementById('atk-move').addEventListener('change', updateMoveInfo);

  // IV/EV preset buttons
  document.querySelectorAll('.iv-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const side = btn.dataset.side;
      const val = parseInt(btn.dataset.iv);
      document.querySelectorAll(`.${side}-iv`).forEach(el => { el.value = val; });
      updateCalcStats(side);
    });
  });
  document.querySelectorAll('.ev-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const side = btn.dataset.side;
      document.querySelectorAll(`.${side}-ev`).forEach(el => { el.value = 0; });
      updateCalcStats(side);
    });
  });
}

function updateCalcSide(side) {
  const pokemonId = document.getElementById(`${side}-pokemon`).value;
  if (!pokemonId) return;

  const pokemon = POKEMON_DB[pokemonId];
  if (!pokemon) return;

  // Sprite
  const spriteEl = document.getElementById(`${side}-sprite`);
  spriteEl.src = SPRITE_URL(pokemon.nameEn);
  spriteEl.alt = pokemon.name;

  // Types
  const typesEl = document.getElementById(`${side}-types`);
  typesEl.innerHTML = '';
  pokemon.types.forEach(t => typesEl.appendChild(createTypeBadge(t)));

  // Base stats
  ['hp','atk','def','spa','spd','spe'].forEach(s => {
    const el = document.getElementById(`${side}-base-${s}`);
    if (el) el.textContent = pokemon.stats[s];
  });

  // Moves (attacker only)
  if (side === 'atk') {
    const moveSelect = document.getElementById('atk-move');
    moveSelect.innerHTML = '<option value="">-- 技を選択 --</option>';
    if (pokemon.moves) {
      pokemon.moves.forEach(m => {
        const move = MOVES_DB[m];
        if (move) {
          const opt = document.createElement('option');
          opt.value = m;
          const catIcon = move.category === '物理' ? '⚔' : move.category === '特殊' ? '✦' : '◎';
          opt.textContent = `${m} [${move.type}] ${catIcon} ${move.power > 0 ? '威力' + move.power : ''}`;
          moveSelect.appendChild(opt);
        }
      });
    }
    updateMoveInfo();
  }

  updateCalcStats(side);
}

function updateCalcStats(side) {
  const pokemonId = document.getElementById(`${side}-pokemon`).value;
  if (!pokemonId) return;

  const pokemon = POKEMON_DB[pokemonId];
  if (!pokemon) return;

  const level = parseInt(document.getElementById(`${side}-level`).value) || 50;
  const nature = document.getElementById(`${side}-nature`).value;

  const iv = {};
  const ev = {};
  let evTotal = 0;

  ['hp','atk','def','spa','spd','spe'].forEach(s => {
    const ivEl = document.querySelector(`.${side}-iv[data-stat="${s}"]`);
    const evEl = document.querySelector(`.${side}-ev[data-stat="${s}"]`);
    iv[s] = parseInt(ivEl?.value) || 0;
    ev[s] = parseInt(evEl?.value) || 0;
    evTotal += ev[s];
  });

  document.getElementById(`${side}-ev-total`).textContent = evTotal;
  if (evTotal > 510) {
    document.getElementById(`${side}-ev-total`).style.color = '#dc2626';
  } else {
    document.getElementById(`${side}-ev-total`).style.color = '';
  }

  const realStats = calcAllStats(pokemonId, level, nature, iv, ev);
  if (realStats) {
    ['hp','atk','def','spa','spd','spe'].forEach(s => {
      const el = document.getElementById(`${side}-real-${s}`);
      if (el) el.textContent = realStats[s];
    });
  }
}

function updateMoveInfo() {
  const moveName = document.getElementById('atk-move').value;
  const infoBox = document.getElementById('move-info');
  if (!moveName || !MOVES_DB[moveName]) {
    infoBox.innerHTML = '<span style="color:#999">技を選択してください</span>';
    return;
  }
  const move = MOVES_DB[moveName];
  infoBox.innerHTML = `
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:4px;">
      <span class="type-badge type-${move.type}" style="font-size:0.7rem">${move.type}</span>
      <span class="move-cat cat-${move.category}" style="font-size:0.7rem;padding:2px 8px;border-radius:4px;color:white;font-weight:700">${move.category}</span>
    </div>
    <div style="font-size:0.8rem;color:#555">
      ${move.power > 0 ? `威力: <b>${move.power}</b> | ` : ''}命中: <b>${move.accuracy || '-'}</b> | PP: <b>${move.pp}</b>
      ${move.effect ? `<br>効果: ${move.effect}` : ''}
    </div>
  `;
}

function runDamageCalc() {
  const atkPokemonId = document.getElementById('atk-pokemon').value;
  const defPokemonId = document.getElementById('def-pokemon').value;
  const moveName = document.getElementById('atk-move').value;

  if (!atkPokemonId || !defPokemonId || !moveName) {
    document.getElementById('calc-result').innerHTML = '<div class="result-placeholder">攻撃側ポケモン、防御側ポケモン、技を選択してください</div>';
    return;
  }

  const atkIV = {}, atkEV = {}, defIV = {}, defEV = {};
  ['hp','atk','def','spa','spd','spe'].forEach(s => {
    atkIV[s] = parseInt(document.querySelector(`.atk-iv[data-stat="${s}"]`)?.value) || 0;
    atkEV[s] = parseInt(document.querySelector(`.atk-ev[data-stat="${s}"]`)?.value) || 0;
    defIV[s] = parseInt(document.querySelector(`.def-iv[data-stat="${s}"]`)?.value) || 0;
    defEV[s] = parseInt(document.querySelector(`.def-ev[data-stat="${s}"]`)?.value) || 0;
  });

  const result = calculateDamage({
    attackerPokemonId: atkPokemonId,
    defenderPokemonId: defPokemonId,
    moveName: moveName,
    attackerLevel: parseInt(document.getElementById('atk-level').value) || 50,
    defenderLevel: parseInt(document.getElementById('def-level').value) || 50,
    attackerNature: document.getElementById('atk-nature').value,
    defenderNature: document.getElementById('def-nature').value,
    attackerIV: atkIV,
    defenderIV: defIV,
    attackerEV: atkEV,
    defenderEV: defEV,
    attackerItem: document.getElementById('atk-item').value,
    defenderItem: document.getElementById('def-item').value,
    attackerRankAtk: parseInt(document.getElementById('atk-rank-atk').value),
    attackerRankSpa: parseInt(document.getElementById('atk-rank-spa').value),
    defenderRankDef: parseInt(document.getElementById('def-rank-def').value),
    defenderRankSpd: parseInt(document.getElementById('def-rank-spd').value),
    weather: document.getElementById('calc-weather').value,
    terrain: document.getElementById('calc-terrain').value,
    isCritical: document.getElementById('calc-critical').checked,
    isBurned: document.getElementById('calc-burn').checked,
    isReflect: document.getElementById('calc-reflect').checked,
    isLightScreen: document.getElementById('calc-lightscreen').checked
  });

  displayDamageResult(result, atkPokemonId, defPokemonId, moveName);
}

function displayDamageResult(result, atkId, defId, moveName) {
  const container = document.getElementById('calc-result');

  if (!result) {
    container.innerHTML = '<div class="result-placeholder">計算エラー</div>';
    return;
  }

  const attacker = POKEMON_DB[atkId];
  const defender = POKEMON_DB[defId];
  const move = MOVES_DB[moveName];

  let koClass = 'ko-high';
  let koText = `確${result.guaranteed}発`;
  if (result.guaranteed === 1) { koClass = 'ko-1'; koText = '確定1発'; }
  else if (result.guaranteed === 2) { koClass = 'ko-2'; koText = '確定2発'; }
  else if (result.guaranteed === 3) { koClass = 'ko-3'; koText = '確定3発'; }

  const barPercent = Math.min(result.maxPercent, 100);
  let barColor = '#22c55e';
  if (result.maxPercent >= 100) barColor = '#dc2626';
  else if (result.maxPercent >= 50) barColor = '#f97316';
  else if (result.maxPercent >= 30) barColor = '#eab308';

  container.innerHTML = `
    <div class="result-damage">
      <div style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:8px">
        ${attacker.name} の <b>${moveName}</b> → ${defender.name}
      </div>
      ${result.effectivenessText ? `<div class="effectiveness-text">${result.effectivenessText} (x${result.effectiveness})</div>` : ''}
      <div class="damage-numbers">${result.min} ~ ${result.max}</div>
      <div class="damage-percent">${result.minPercent}% ~ ${result.maxPercent}%</div>
      <div class="guaranteed-ko ${koClass}">${koText}</div>
      <div class="damage-bar">
        <div class="damage-bar-fill" style="width:${barPercent}%;background:${barColor}"></div>
      </div>
      <div class="result-details">
        HP実数値: ${result.defenderHP} | 攻撃実数値: ${result.attackStat} | 防御実数値: ${result.defenseStat}
      </div>
    </div>
  `;
}

// ============================
// Pokedex Page
// ============================
let activeTypeFilter = null;

function initPokedex() {
  renderPokedexGrid();
  initTypeFilter();

  document.getElementById('pokedex-search').addEventListener('input', filterPokedex);

  // Modal close
  const modal = document.getElementById('pokedex-modal');
  modal.querySelector('.modal-overlay').addEventListener('click', () => modal.classList.add('hidden'));
  modal.querySelector('.modal-close').addEventListener('click', () => modal.classList.add('hidden'));
}

function renderPokedexGrid() {
  const grid = document.getElementById('pokedex-grid');
  grid.innerHTML = '';
  const list = getSortedPokemonList();
  const searchQuery = (document.getElementById('pokedex-search')?.value || '').toLowerCase();

  list.forEach(poke => {
    // Filter
    if (searchQuery && !poke.name.includes(searchQuery) && !poke.nameEn.includes(searchQuery) && !String(poke.id).includes(searchQuery)) return;
    if (activeTypeFilter && !poke.types.includes(activeTypeFilter)) return;

    const card = document.createElement('div');
    card.className = 'poke-card';
    card.addEventListener('click', () => showPokedexDetail(poke.id));

    const total = Object.values(poke.stats).reduce((a, b) => a + b, 0);

    card.innerHTML = `
      <img src="${SPRITE_URL(poke.nameEn)}" alt="${poke.name}" loading="lazy">
      <span class="pokemon-number">#${String(poke.id).padStart(3, '0')}</span>
      <div class="pokemon-name-jp">${poke.name}</div>
      <div class="pokemon-name-en">${poke.nameEn}</div>
      <div class="card-types">
        ${poke.types.map(t => `<span class="type-badge type-${t}" style="font-size:0.65rem;padding:1px 8px">${t}</span>`).join('')}
      </div>
      <div class="mini-stats">
        <span>H${poke.stats.hp}</span>
        <span>A${poke.stats.atk}</span>
        <span>B${poke.stats.def}</span>
        <span>C${poke.stats.spa}</span>
        <span>D${poke.stats.spd}</span>
        <span>S${poke.stats.spe}</span>
        <span style="font-weight:900">計${total}</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function initTypeFilter() {
  const container = document.getElementById('type-filter');
  container.innerHTML = '';

  const allBtn = document.createElement('button');
  allBtn.className = 'type-filter-btn filter-all active';
  allBtn.textContent = 'すべて';
  allBtn.addEventListener('click', () => {
    activeTypeFilter = null;
    document.querySelectorAll('.type-filter-btn').forEach(b => b.classList.remove('active'));
    allBtn.classList.add('active');
    renderPokedexGrid();
  });
  container.appendChild(allBtn);

  ALL_TYPES.forEach(t => {
    const btn = document.createElement('button');
    btn.className = `type-filter-btn type-${t}`;
    btn.textContent = t;
    btn.addEventListener('click', () => {
      activeTypeFilter = t;
      document.querySelectorAll('.type-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPokedexGrid();
    });
    container.appendChild(btn);
  });
}

function filterPokedex() {
  renderPokedexGrid();
}

function showPokedexDetail(pokemonId) {
  const poke = POKEMON_DB[pokemonId];
  if (!poke) return;

  document.getElementById('modal-sprite').src = SPRITE_URL(poke.nameEn);
  document.getElementById('modal-name').textContent = poke.name;
  document.getElementById('modal-id').textContent = `#${String(pokemonId).padStart(3, '0')} ${poke.nameEn}`;

  const typesEl = document.getElementById('modal-types');
  typesEl.innerHTML = '';
  poke.types.forEach(t => typesEl.appendChild(createTypeBadge(t)));

  // Abilities
  const abilitiesEl = document.getElementById('modal-abilities');
  let abText = `特性: ${poke.abilities.join(' / ')}`;
  if (poke.hiddenAbility) abText += ` | <span class="hidden-ability">夢特性: ${poke.hiddenAbility}</span>`;
  abilitiesEl.innerHTML = abText;

  // Stats
  const statsEl = document.getElementById('modal-stats');
  statsEl.innerHTML = '';
  let total = 0;
  const statOrder = ['hp','atk','def','spa','spd','spe'];
  statOrder.forEach(key => {
    const val = poke.stats[key];
    total += val;
    const pct = Math.min(val / 255 * 100, 100);
    statsEl.innerHTML += `
      <div class="stat-row">
        <span class="stat-label">${STAT_NAMES[key]}</span>
        <span class="stat-value">${val}</span>
        <div class="stat-bar-bg">
          <div class="stat-bar-fill ${getStatBarClass(key)}" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  });
  document.getElementById('modal-stats-total').textContent = `合計: ${total}`;

  // Moves
  const movesEl = document.getElementById('modal-moves');
  movesEl.innerHTML = '';
  if (poke.moves) {
    poke.moves.forEach(mName => {
      const move = MOVES_DB[mName];
      if (!move) return;
      const typeColor = getTypeColorHex(move.type);
      movesEl.innerHTML += `
        <div class="move-chip">
          <span class="move-type-dot" style="background:${typeColor}"></span>
          <span class="move-name">${mName}</span>
          <span class="move-cat cat-${move.category}">${move.category}</span>
          <span class="move-power">${move.power > 0 ? move.power : '-'}</span>
        </div>
      `;
    });
  }

  document.getElementById('pokedex-modal').classList.remove('hidden');
}

function getTypeColorHex(typeName) {
  const colors = {
    "ノーマル": "#a8a878", "ほのお": "#f08030", "みず": "#6890f0", "でんき": "#f8d030",
    "くさ": "#78c850", "こおり": "#98d8d8", "かくとう": "#c03028", "どく": "#a040a0",
    "じめん": "#e0c068", "ひこう": "#a890f0", "エスパー": "#f85888", "むし": "#a8b820",
    "いわ": "#b8a038", "ゴースト": "#705898", "ドラゴン": "#7038f8", "あく": "#705848",
    "はがね": "#b8b8d0", "フェアリー": "#ee99ac"
  };
  return colors[typeName] || '#888';
}

// ============================
// Type Chart Page
// ============================
function initTypeChart() {
  renderTypeChartTable();
  initTypeChecker();
  initDefTypeChecker();
}

function renderTypeChartTable() {
  const table = document.getElementById('type-chart-table');
  let html = '<thead><tr><th style="min-width:50px">攻↓ 防→</th>';

  ALL_TYPES.forEach(t => {
    html += `<th class="type-header" style="background:${getTypeColorHex(t)}">${t}</th>`;
  });
  html += '</tr></thead><tbody>';

  ALL_TYPES.forEach(atkType => {
    html += `<tr><th class="type-header-row" style="background:${getTypeColorHex(atkType)}">${atkType}</th>`;
    ALL_TYPES.forEach(defType => {
      const eff = TYPE_CHART[atkType][defType];
      let cls = 'eff-1';
      let txt = '';
      if (eff === 2) { cls = 'eff-2'; txt = '2'; }
      else if (eff === 0.5) { cls = 'eff-0-5'; txt = '½'; }
      else if (eff === 0) { cls = 'eff-0'; txt = '0'; }
      else { txt = ''; }
      html += `<td class="${cls}">${txt}</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody>';
  table.innerHTML = html;
}

function initTypeChecker() {
  populateTypeSelect(document.getElementById('check-atk-type'));
  populateTypeSelect(document.getElementById('check-def-type1'));
  populateTypeSelect(document.getElementById('check-def-type2'), true);

  ['check-atk-type', 'check-def-type1', 'check-def-type2'].forEach(id => {
    document.getElementById(id).addEventListener('change', updateTypeCheck);
  });
  updateTypeCheck();
}

function updateTypeCheck() {
  const atkType = document.getElementById('check-atk-type').value;
  const defType1 = document.getElementById('check-def-type1').value;
  const defType2 = document.getElementById('check-def-type2').value;

  if (!atkType || !defType1) return;

  const defTypes = [defType1];
  if (defType2) defTypes.push(defType2);

  const eff = getTypeEffectiveness(atkType, defTypes);

  const resultEl = document.getElementById('type-check-result');
  let color = '#666';
  let text = '';
  if (eff === 0) { color = '#1f2937'; text = `効果なし (x0)`; }
  else if (eff >= 4) { color = '#16a34a'; text = `効果はばつぐんだ！ (x${eff})`; }
  else if (eff >= 2) { color = '#22c55e'; text = `効果はばつぐんだ！ (x${eff})`; }
  else if (eff < 1) { color = '#dc2626'; text = `効果はいまひとつ... (x${eff})`; }
  else { color = '#666'; text = `等倍 (x${eff})`; }

  resultEl.innerHTML = `<span style="color:${color}">${text}</span>`;
}

function initDefTypeChecker() {
  populateTypeSelect(document.getElementById('def-check-type1'));
  populateTypeSelect(document.getElementById('def-check-type2'), true);

  ['def-check-type1', 'def-check-type2'].forEach(id => {
    document.getElementById(id).addEventListener('change', updateDefTypeCheck);
  });
}

function updateDefTypeCheck() {
  const type1 = document.getElementById('def-check-type1').value;
  const type2 = document.getElementById('def-check-type2').value;
  if (!type1) return;

  const defTypes = [type1];
  if (type2) defTypes.push(type2);

  const resultEl = document.getElementById('def-type-result');
  resultEl.innerHTML = '';

  const groups = { weak: [], resist: [], immune: [], neutral: [] };

  ALL_TYPES.forEach(atkType => {
    const eff = getTypeEffectiveness(atkType, defTypes);
    const item = { type: atkType, eff };
    if (eff === 0) groups.immune.push(item);
    else if (eff > 1) groups.weak.push(item);
    else if (eff < 1) groups.resist.push(item);
    else groups.neutral.push(item);
  });

  // Weak
  groups.weak.forEach(item => {
    resultEl.innerHTML += `<div class="def-type-item weak"><span class="type-badge type-${item.type}" style="font-size:0.7rem;padding:1px 8px">${item.type}</span> x${item.eff}</div>`;
  });
  groups.resist.forEach(item => {
    resultEl.innerHTML += `<div class="def-type-item resist"><span class="type-badge type-${item.type}" style="font-size:0.7rem;padding:1px 8px">${item.type}</span> x${item.eff}</div>`;
  });
  groups.immune.forEach(item => {
    resultEl.innerHTML += `<div class="def-type-item immune"><span class="type-badge type-${item.type}" style="font-size:0.7rem;padding:1px 8px">${item.type}</span> 無効</div>`;
  });
}

// ============================
// Stats Compare Page
// ============================
let compareList = [];
const COMPARE_COLORS = ['#e63946','#457b9d','#2a9d8f','#e9c46a','#f4a261','#264653','#a855f7','#06b6d4'];

function initStatsCompare() {
  populatePokemonSelect(document.getElementById('compare-pokemon-select'));
  document.getElementById('compare-add-btn').addEventListener('click', addCompare);
  document.getElementById('compare-clear-btn').addEventListener('click', clearCompare);
}

function addCompare() {
  const select = document.getElementById('compare-pokemon-select');
  const id = select.value;
  if (!id) return;
  if (compareList.length >= 8) return;
  if (compareList.includes(id)) return;

  compareList.push(id);
  renderCompare();
}

function removeCompare(id) {
  compareList = compareList.filter(i => i !== id);
  renderCompare();
}

function clearCompare() {
  compareList = [];
  renderCompare();
}

function renderCompare() {
  const chartEl = document.getElementById('compare-chart');
  chartEl.innerHTML = '';

  if (compareList.length === 0) {
    chartEl.innerHTML = '<div style="text-align:center;color:#999;padding:40px">ポケモンを追加してください</div>';
    document.getElementById('compare-table-wrapper').innerHTML = '';
    return;
  }

  compareList.forEach((id, idx) => {
    const poke = POKEMON_DB[id];
    if (!poke) return;
    const total = Object.values(poke.stats).reduce((a, b) => a + b, 0);
    const color = COMPARE_COLORS[idx % COMPARE_COLORS.length];

    const row = document.createElement('div');
    row.className = 'compare-pokemon-row';
    row.innerHTML = `
      <img class="cp-sprite" src="${SPRITE_URL(poke.nameEn)}" alt="${poke.name}">
      <div class="cp-name" style="color:${color}">${poke.name}</div>
      <div class="cp-bars">
        ${['hp','atk','def','spa','spd','spe'].map(s => `
          <div class="cp-bar-cell">
            <div class="cp-bar-label">${STAT_NAMES[s]}</div>
            <div class="cp-bar-wrapper">
              <div class="cp-bar-fill" style="width:${poke.stats[s]/255*100}%;background:${color}"></div>
            </div>
            <div class="cp-bar-value">${poke.stats[s]}</div>
          </div>
        `).join('')}
      </div>
      <div class="cp-total">${total}</div>
      <button class="cp-remove" onclick="removeCompare('${id}')">&times;</button>
    `;
    chartEl.appendChild(row);
  });

  // Table
  renderCompareTable();
}

function renderCompareTable() {
  const wrapper = document.getElementById('compare-table-wrapper');
  if (compareList.length < 2) { wrapper.innerHTML = ''; return; }

  let html = '<table class="compare-table"><thead><tr><th>ポケモン</th>';
  ['hp','atk','def','spa','spd','spe'].forEach(s => {
    html += `<th>${STAT_NAMES[s]}</th>`;
  });
  html += '<th>合計</th></tr></thead><tbody>';

  // Find max per stat
  const maxStats = {};
  ['hp','atk','def','spa','spd','spe'].forEach(s => {
    maxStats[s] = Math.max(...compareList.map(id => POKEMON_DB[id]?.stats[s] || 0));
  });
  const maxTotal = Math.max(...compareList.map(id => {
    const p = POKEMON_DB[id];
    return p ? Object.values(p.stats).reduce((a,b) => a + b, 0) : 0;
  }));

  compareList.forEach(id => {
    const poke = POKEMON_DB[id];
    if (!poke) return;
    const total = Object.values(poke.stats).reduce((a, b) => a + b, 0);

    html += `<tr><td>${poke.name}</td>`;
    ['hp','atk','def','spa','spd','spe'].forEach(s => {
      const isMax = poke.stats[s] === maxStats[s] && compareList.length > 1;
      html += `<td class="${isMax ? 'stat-highest' : ''}">${poke.stats[s]}</td>`;
    });
    const isTotalMax = total === maxTotal && compareList.length > 1;
    html += `<td class="${isTotalMax ? 'stat-highest' : ''}">${total}</td></tr>`;
  });

  html += '</tbody></table>';
  wrapper.innerHTML = html;
}

// ============================
// IV Calculator Page
// ============================
function initIVCalc() {
  populatePokemonSelect(document.getElementById('iv-pokemon'));
  populateNatureSelect(document.getElementById('iv-nature'));

  document.getElementById('iv-pokemon').addEventListener('change', updateIVCalcSide);
  document.getElementById('iv-calc-btn').addEventListener('click', runIVCalc);
}

function updateIVCalcSide() {
  const pokemonId = document.getElementById('iv-pokemon').value;
  if (!pokemonId) return;

  const pokemon = POKEMON_DB[pokemonId];
  if (!pokemon) return;

  const spriteEl = document.getElementById('iv-sprite');
  spriteEl.src = SPRITE_URL(pokemon.nameEn);
  spriteEl.alt = pokemon.name;

  const typesEl = document.getElementById('iv-types');
  typesEl.innerHTML = '';
  pokemon.types.forEach(t => typesEl.appendChild(createTypeBadge(t)));

  ['hp','atk','def','spa','spd','spe'].forEach(s => {
    const el = document.getElementById(`iv-base-${s}`);
    if (el) el.textContent = pokemon.stats[s];
  });

  // Clear previous results
  ['hp','atk','def','spa','spd','spe'].forEach(s => {
    document.getElementById(`iv-result-${s}`).textContent = '-';
    document.getElementById(`iv-result-${s}`).className = 'iv-result-cell';
  });
  document.getElementById('iv-calc-summary').innerHTML = '';
}

function runIVCalc() {
  const pokemonId = document.getElementById('iv-pokemon').value;
  if (!pokemonId) {
    document.getElementById('iv-calc-summary').innerHTML = '<div class="iv-calc-error">ポケモンを選択してください</div>';
    return;
  }

  const pokemon = POKEMON_DB[pokemonId];
  if (!pokemon) return;

  const level = parseInt(document.getElementById('iv-level').value) || 50;
  const nature = document.getElementById('iv-nature').value;

  const stats = ['hp','atk','def','spa','spd','spe'];
  const results = {};
  let hasInput = false;

  stats.forEach(s => {
    const evEl = document.querySelector(`.iv-calc-ev[data-stat="${s}"]`);
    const realEl = document.querySelector(`.iv-calc-real[data-stat="${s}"]`);
    const resultEl = document.getElementById(`iv-result-${s}`);

    const ev = parseInt(evEl?.value) || 0;
    const realValue = realEl?.value;

    if (!realValue || realValue === '') {
      resultEl.textContent = '-';
      resultEl.className = 'iv-result-cell';
      return;
    }

    hasInput = true;
    const actual = parseInt(realValue);
    let result;

    if (s === 'hp') {
      result = reverseCalcHPIV(pokemon.stats.hp, actual, ev, level);
    } else {
      const natureMod = getNatureMod(nature, s);
      result = reverseCalcStatIV(pokemon.stats[s], actual, ev, level, natureMod);
    }

    if (result) {
      results[s] = result;
      if (result.min === result.max) {
        resultEl.textContent = result.min;
      } else {
        resultEl.textContent = `${result.min}~${result.max}`;
      }
      // Color coding
      if (result.max === 31 && result.min >= 28) {
        resultEl.className = 'iv-result-cell iv-perfect';
      } else if (result.max >= 28) {
        resultEl.className = 'iv-result-cell iv-good';
      } else if (result.max === 0) {
        resultEl.className = 'iv-result-cell iv-zero';
      } else {
        resultEl.className = 'iv-result-cell';
      }
    } else {
      resultEl.textContent = '該当なし';
      resultEl.className = 'iv-result-cell iv-invalid';
    }
  });

  if (!hasInput) {
    document.getElementById('iv-calc-summary').innerHTML = '<div class="iv-calc-error">実数値を1つ以上入力してください</div>';
    return;
  }

  // Summary
  const summaryEl = document.getElementById('iv-calc-summary');
  let summaryHTML = '<h4>計算結果</h4><div class="iv-summary-grid">';
  stats.forEach(s => {
    if (!results[s]) return;
    const r = results[s];
    const label = STAT_NAMES[s];
    let valueText;
    if (r.min === r.max) {
      valueText = `<span class="iv-value-exact">${r.min}</span>`;
    } else {
      valueText = `<span class="iv-value-range">${r.min} ~ ${r.max}</span>`;
    }

    let judge = '';
    if (r.max === 31 && r.min === 31) judge = '<span class="iv-judge best">さいこう</span>';
    else if (r.max >= 30 && r.min >= 30) judge = '<span class="iv-judge great">すばらしい</span>';
    else if (r.max >= 26) judge = '<span class="iv-judge good">かなりいい</span>';
    else if (r.max >= 16) judge = '<span class="iv-judge decent">まあまあ</span>';
    else if (r.max === 0 && r.min === 0) judge = '<span class="iv-judge no-good">ダメかも</span>';
    else judge = '<span class="iv-judge decent">まあまあ</span>';

    summaryHTML += `
      <div class="iv-summary-item">
        <div class="iv-summary-label">${label}</div>
        <div class="iv-summary-value">${valueText}</div>
        <div class="iv-summary-judge">${judge}</div>
      </div>
    `;
  });
  summaryHTML += '</div>';
  summaryEl.innerHTML = summaryHTML;
}

// ============================
// Init All
// ============================
document.addEventListener('DOMContentLoaded', () => {
  initDamageCalc();
  initPokedex();
  initTypeChart();
  initStatsCompare();
  initIVCalc();
});
