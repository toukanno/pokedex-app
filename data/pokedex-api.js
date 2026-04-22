// ============================
// PokeAPI 連携モジュール
// ブラウザ版ポケモン図鑑 - 全1025匹を段階的に取得
// ============================

const POKEAPI_BASE = 'https://pokeapi.co/api/v2';
const POKEDEX_TOTAL = 1025;

const STORAGE_KEY_LIST = 'pokedex-list-v2';
const STORAGE_KEY_DETAIL_PREFIX = 'pokedex-detail-v2-';
const STORAGE_KEY_ABILITY_PREFIX = 'pokedex-ability-v1-';

// 英語タイプ名 → 日本語タイプ名
const TYPE_JP = {
  normal: "ノーマル", fire: "ほのお", water: "みず", electric: "でんき",
  grass: "くさ", ice: "こおり", fighting: "かくとう", poison: "どく",
  ground: "じめん", flying: "ひこう", psychic: "エスパー", bug: "むし",
  rock: "いわ", ghost: "ゴースト", dragon: "ドラゴン", dark: "あく",
  steel: "はがね", fairy: "フェアリー"
};

// PokeAPI stat name → 内部キー
const STAT_MAP = {
  'hp': 'hp',
  'attack': 'atk',
  'defense': 'def',
  'special-attack': 'spa',
  'special-defense': 'spd',
  'speed': 'spe'
};

// メモリ内キャッシュ
const detailCache = {};
const abilityCache = {};
const pendingRequests = {};

// Fetch ラッパー (エラー時 null を返す)
async function fetchJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch (e) {
    console.warn('fetch failed:', url, e);
    return null;
  }
}

// localStorage セーフアクセサ
function lsGet(key) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : null;
  } catch { return null; }
}
function lsSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch { /* quota exceeded等は無視 */ }
}

// ============================
// 一覧取得 ({ id, nameEn, nameJp })
// ============================
async function loadPokedexList() {
  // localStorage キャッシュ
  const cached = lsGet(STORAGE_KEY_LIST);
  if (cached && Array.isArray(cached) && cached.length >= POKEDEX_TOTAL) {
    // ローカルDBから日本語名を補完
    cached.forEach(entry => {
      if (!entry.nameJp && typeof POKEMON_DB !== 'undefined' && POKEMON_DB[entry.id]) {
        entry.nameJp = POKEMON_DB[entry.id].name;
      }
    });
    return cached;
  }

  const data = await fetchJson(`${POKEAPI_BASE}/pokemon?limit=${POKEDEX_TOTAL}&offset=0`);
  if (!data || !data.results) return [];

  const list = data.results.map((r, i) => {
    const id = i + 1;
    const localEntry = (typeof POKEMON_DB !== 'undefined') ? POKEMON_DB[id] : null;
    return {
      id,
      nameEn: r.name,
      nameJp: localEntry ? localEntry.name : null
    };
  });

  lsSet(STORAGE_KEY_LIST, list);
  return list;
}

// ============================
// 特性の日本語名取得 (キャッシュ付き)
// ============================
async function getAbilityJp(englishSlug) {
  if (!englishSlug) return englishSlug;
  if (abilityCache[englishSlug]) return abilityCache[englishSlug];

  const cached = lsGet(STORAGE_KEY_ABILITY_PREFIX + englishSlug);
  if (cached) {
    abilityCache[englishSlug] = cached;
    return cached;
  }

  const data = await fetchJson(`${POKEAPI_BASE}/ability/${englishSlug}`);
  if (!data || !data.names) {
    abilityCache[englishSlug] = englishSlug;
    return englishSlug;
  }
  const jp = data.names.find(n => n.language.name === 'ja-Hrkt' || n.language.name === 'ja');
  const nameJp = jp ? jp.name : englishSlug;

  abilityCache[englishSlug] = nameJp;
  lsSet(STORAGE_KEY_ABILITY_PREFIX + englishSlug, nameJp);
  return nameJp;
}

// ============================
// 単体詳細取得 (localStorage & メモリキャッシュ)
// 返り値は POKEMON_DB と同じ構造 (name, nameEn, types, stats, abilities, hiddenAbility, weight, moves)
// ============================
async function loadPokemonDetail(id) {
  // 既にローカルDBに全データがあればそちらを優先
  if (typeof POKEMON_DB !== 'undefined' && POKEMON_DB[id] && POKEMON_DB[id].stats && POKEMON_DB[id].stats.hp) {
    return POKEMON_DB[id];
  }

  if (detailCache[id]) return detailCache[id];
  if (pendingRequests[id]) return pendingRequests[id];

  const cacheKey = STORAGE_KEY_DETAIL_PREFIX + id;
  const cached = lsGet(cacheKey);
  if (cached) {
    detailCache[id] = cached;
    if (typeof POKEMON_DB !== 'undefined') POKEMON_DB[id] = cached;
    return cached;
  }

  const promise = (async () => {
    const [poke, species] = await Promise.all([
      fetchJson(`${POKEAPI_BASE}/pokemon/${id}`),
      fetchJson(`${POKEAPI_BASE}/pokemon-species/${id}`)
    ]);

    if (!poke) return null;

    const stats = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 };
    (poke.stats || []).forEach(s => {
      const key = STAT_MAP[s.stat.name];
      if (key) stats[key] = s.base_stat;
    });

    const types = (poke.types || [])
      .map(t => TYPE_JP[t.type.name])
      .filter(Boolean);

    let nameJp = poke.name;
    if (species && species.names) {
      const jp = species.names.find(n => n.language.name === 'ja-Hrkt' || n.language.name === 'ja');
      if (jp) nameJp = jp.name;
    }
    if (typeof POKEMON_DB !== 'undefined' && POKEMON_DB[id] && POKEMON_DB[id].name) {
      nameJp = POKEMON_DB[id].name;
    }

    const abilitiesEn = [];
    let hiddenAbilityEn = null;
    (poke.abilities || []).forEach(a => {
      if (a.is_hidden) hiddenAbilityEn = a.ability.name;
      else abilitiesEn.push(a.ability.name);
    });
    const [abilitiesJp, hiddenAbilityJp] = await Promise.all([
      Promise.all(abilitiesEn.map(getAbilityJp)),
      hiddenAbilityEn ? getAbilityJp(hiddenAbilityEn) : Promise.resolve(null)
    ]);

    const moves = (poke.moves || []).map(m => m.move.name);

    const detail = {
      name: nameJp,
      nameEn: poke.name,
      types,
      stats,
      abilities: abilitiesJp,
      hiddenAbility: hiddenAbilityJp,
      weight: poke.weight ? poke.weight / 10 : null,
      height: poke.height ? poke.height / 10 : null,
      moves
    };

    detailCache[id] = detail;
    lsSet(cacheKey, detail);
    if (typeof POKEMON_DB !== 'undefined') POKEMON_DB[id] = detail;
    return detail;
  })();

  pendingRequests[id] = promise;
  try {
    return await promise;
  } finally {
    delete pendingRequests[id];
  }
}

// ============================
// 外部公開
// ============================
window.PokedexAPI = {
  loadPokedexList,
  loadPokemonDetail,
  POKEDEX_TOTAL,
  TYPE_JP
};
