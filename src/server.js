const express = require('express');
const path = require('path');
const { getDb, initDb } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// DB初期化
initDb();

// 静的ファイル配信
app.use(express.static(path.join(__dirname, '..', 'public')));

// ポケモン一覧API
app.get('/api/pokemon', (req, res) => {
  const db = getDb();
  const pokemon = db.prepare(`
    SELECT id, name, name_ja, types, height, weight FROM pokemon ORDER BY id
  `).all();
  db.close();
  res.json(pokemon);
});

// ポケモン詳細API
app.get('/api/pokemon/:id', (req, res) => {
  const db = getDb();
  const pokemon = db.prepare(`
    SELECT id, name, name_ja, types, height, weight FROM pokemon WHERE id = ?
  `).get(req.params.id);

  if (!pokemon) {
    db.close();
    return res.status(404).json({ error: 'ポケモンが見つかりません' });
  }

  const images = db.prepare(`
    SELECT image_type FROM pokemon_images WHERE pokemon_id = ?
  `).all(req.params.id);

  db.close();
  res.json({ ...pokemon, images: images.map(i => i.image_type) });
});

// 画像配信API（SQLite BLOBから直接配信）
app.get('/api/pokemon/:id/image/:type', (req, res) => {
  const db = getDb();
  const image = db.prepare(`
    SELECT mime_type, data FROM pokemon_images
    WHERE pokemon_id = ? AND image_type = ?
  `).get(req.params.id, req.params.type);
  db.close();

  if (!image) {
    return res.status(404).json({ error: '画像が見つかりません' });
  }

  res.set('Content-Type', image.mime_type);
  res.set('Cache-Control', 'public, max-age=86400');
  res.send(image.data);
});

app.listen(PORT, () => {
  console.log(`ポケモン図鑑サーバー起動: http://localhost:${PORT}`);
});
