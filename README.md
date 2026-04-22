# pokedex-app
ポケモン図鑑アプリ - Pokemon encyclopedia app

## 概要
PokeAPIからポケモンデータと画像を取得し、SQLiteデータベースにBLOBとして格納するポケモン図鑑アプリケーションです。

## 技術スタック
- **バックエンド**: Node.js + Express
- **データベース**: SQLite (better-sqlite3)
- **画像格納**: SQLite BLOB
- **データソース**: PokeAPI

## セットアップ

```bash
npm install
```

## 使い方

### 1. データ取得・画像格納
PokeAPIから第1世代(151匹)のポケモンデータと画像を取得してSQLiteに格納:
```bash
npm run seed
```

### 2. サーバー起動
```bash
npm start
```
ブラウザで http://localhost:3000 にアクセス

## API

| エンドポイント | 説明 |
|---|---|
| `GET /api/pokemon` | ポケモン一覧 |
| `GET /api/pokemon/:id` | ポケモン詳細 |
| `GET /api/pokemon/:id/image/:type` | 画像取得 (type: front_default, front_shiny, official) |

## Vercel デプロイ（静的 SPA 公開）

静的な SPA 部分（`index.html` / `app.js` / `style.css` / `data/`）を Vercel で公開する設定が同梱されています。

### 必要な GitHub Secrets
`Settings → Secrets and variables → Actions` に以下を登録:

| 名前 | 取得元 |
|---|---|
| `VERCEL_TOKEN` | https://vercel.com/account/tokens |
| `VERCEL_ORG_ID` | `.vercel/project.json` の `orgId`（`vercel link` 後に生成） |
| `VERCEL_PROJECT_ID` | `.vercel/project.json` の `projectId` |

### フロー
- `main` への push → 本番デプロイ（`vercel deploy --prod`）
- PR / その他ブランチ push → プレビューデプロイ（PR にコメントで URL 通知）

ワークフロー: `.github/workflows/vercel-deploy.yml`
設定: `vercel.json`, `.vercelignore`

## DBスキーマ

### pokemon テーブル
| カラム | 型 | 説明 |
|---|---|---|
| id | INTEGER | 図鑑番号 |
| name | TEXT | 英語名 |
| name_ja | TEXT | 日本語名 |
| types | TEXT | タイプ(カンマ区切り) |
| height | INTEGER | 高さ(dm) |
| weight | INTEGER | 重さ(hg) |

### pokemon_images テーブル
| カラム | 型 | 説明 |
|---|---|---|
| pokemon_id | INTEGER | 図鑑番号(FK) |
| image_type | TEXT | 画像種別 |
| mime_type | TEXT | MIMEタイプ |
| data | BLOB | 画像バイナリデータ |
