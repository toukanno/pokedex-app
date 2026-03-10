const Database = require('better-sqlite3');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'pokedex.db');

function getDb() {
  const db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');
  return db;
}

function initDb() {
  const db = getDb();

  db.exec(`
    CREATE TABLE IF NOT EXISTS pokemon (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      name_ja TEXT,
      types TEXT NOT NULL,
      height INTEGER,
      weight INTEGER
    );

    CREATE TABLE IF NOT EXISTS pokemon_images (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      pokemon_id INTEGER NOT NULL,
      image_type TEXT NOT NULL,
      mime_type TEXT NOT NULL DEFAULT 'image/png',
      data BLOB NOT NULL,
      FOREIGN KEY (pokemon_id) REFERENCES pokemon(id),
      UNIQUE(pokemon_id, image_type)
    );

    CREATE INDEX IF NOT EXISTS idx_pokemon_images_pokemon_id
      ON pokemon_images(pokemon_id);
  `);

  db.close();
  console.log('データベースを初期化しました:', DB_PATH);
}

// スクリプトとして直接実行された場合
if (require.main === module) {
  initDb();
}

module.exports = { getDb, initDb, DB_PATH };
