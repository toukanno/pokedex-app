const { getDb, initDb } = require('./db');

const POKEAPI_BASE = 'https://pokeapi.co/api/v2';
const MAX_POKEMON = 151; // 第1世代

async function fetchJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.json();
}

async function fetchImage(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch image ${url}: ${res.status}`);
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function seedPokemon(db, id) {
  const data = await fetchJson(`${POKEAPI_BASE}/pokemon/${id}`);
  const speciesData = await fetchJson(`${POKEAPI_BASE}/pokemon-species/${id}`);

  const nameJa = speciesData.names.find(n => n.language.name === 'ja')?.name || null;
  const types = data.types.map(t => t.type.name).join(',');

  // ポケモン基本情報を保存
  db.prepare(`
    INSERT OR REPLACE INTO pokemon (id, name, name_ja, types, height, weight)
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(id, data.name, nameJa, types, data.height, data.weight);

  // 画像をBLOBとして格納
  const imageTypes = {
    front_default: data.sprites.front_default,
    front_shiny: data.sprites.front_shiny,
    official: data.sprites.other?.['official-artwork']?.front_default,
  };

  const insertImage = db.prepare(`
    INSERT OR REPLACE INTO pokemon_images (pokemon_id, image_type, mime_type, data)
    VALUES (?, ?, ?, ?)
  `);

  for (const [imageType, url] of Object.entries(imageTypes)) {
    if (!url) continue;
    try {
      const imageData = await fetchImage(url);
      const mime = url.endsWith('.svg') ? 'image/svg+xml' : 'image/png';
      insertImage.run(id, imageType, mime, imageData);
    } catch (err) {
      console.warn(`  画像取得スキップ (${imageType}):`, err.message);
    }
  }

  console.log(`  #${id} ${nameJa || data.name} (${types}) - 画像格納完了`);
}

async function main() {
  console.log('データベースを初期化中...');
  initDb();

  const db = getDb();

  console.log(`PokeAPIから第1世代(${MAX_POKEMON}匹)のデータを取得中...`);

  for (let id = 1; id <= MAX_POKEMON; id++) {
    try {
      await seedPokemon(db, id);
    } catch (err) {
      console.error(`#${id} の取得に失敗:`, err.message);
    }
    // API制限を考慮して少し待機
    if (id % 10 === 0) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  // 格納結果の確認
  const stats = db.prepare(`
    SELECT COUNT(DISTINCT pokemon_id) as pokemon_count,
           COUNT(*) as image_count,
           SUM(LENGTH(data)) as total_bytes
    FROM pokemon_images
  `).get();

  console.log('\n=== 格納結果 ===');
  console.log(`ポケモン数: ${stats.pokemon_count}`);
  console.log(`画像数: ${stats.image_count}`);
  console.log(`合計サイズ: ${(stats.total_bytes / 1024 / 1024).toFixed(2)} MB`);

  db.close();
  console.log('シード完了!');
}

main().catch(console.error);
