-- ============================================================
-- ポケモン図鑑アプリ データベーススキーマ
-- ============================================================

-- ------------------------------------------------------------
-- タイプ (ほのお, みず, くさ, etc.)
-- ------------------------------------------------------------
CREATE TABLE types (
    id            INTEGER PRIMARY KEY,
    name          VARCHAR(20)  NOT NULL UNIQUE,
    name_ja       VARCHAR(20)  NOT NULL UNIQUE
);

-- ------------------------------------------------------------
-- タイプ相性 (攻撃側 → 防御側 の倍率)
-- ------------------------------------------------------------
CREATE TABLE type_efficacy (
    attacking_type_id  INTEGER NOT NULL REFERENCES types(id),
    defending_type_id  INTEGER NOT NULL REFERENCES types(id),
    multiplier         DECIMAL(3,2) NOT NULL,  -- 0.00, 0.50, 1.00, 2.00
    PRIMARY KEY (attacking_type_id, defending_type_id)
);

-- ------------------------------------------------------------
-- 世代
-- ------------------------------------------------------------
CREATE TABLE generations (
    id     INTEGER PRIMARY KEY,
    name   VARCHAR(20) NOT NULL UNIQUE,  -- 'I', 'II', ...
    region VARCHAR(30) NOT NULL           -- 'カントー', 'ジョウト', ...
);

-- ------------------------------------------------------------
-- ポケモン
-- ------------------------------------------------------------
CREATE TABLE pokemon (
    id              INTEGER PRIMARY KEY,       -- 全国図鑑番号
    name            VARCHAR(50)  NOT NULL UNIQUE,
    name_ja         VARCHAR(50)  NOT NULL,
    genus           VARCHAR(50),               -- 分類 (e.g. "たねポケモン")
    generation_id   INTEGER      NOT NULL REFERENCES generations(id),
    height          DECIMAL(5,1) NOT NULL,     -- m
    weight          DECIMAL(6,1) NOT NULL,     -- kg
    base_experience INTEGER,
    is_legendary    BOOLEAN      NOT NULL DEFAULT FALSE,
    is_mythical     BOOLEAN      NOT NULL DEFAULT FALSE,
    sprite_url      TEXT,
    artwork_url     TEXT,
    created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ------------------------------------------------------------
-- ポケモンのタイプ (1匹につき 1〜2タイプ)
-- ------------------------------------------------------------
CREATE TABLE pokemon_types (
    pokemon_id  INTEGER NOT NULL REFERENCES pokemon(id),
    type_id     INTEGER NOT NULL REFERENCES types(id),
    slot        SMALLINT NOT NULL CHECK (slot IN (1, 2)),  -- 1=主タイプ, 2=副タイプ
    PRIMARY KEY (pokemon_id, slot),
    UNIQUE (pokemon_id, type_id)
);

-- ------------------------------------------------------------
-- 種族値 (base stats)
-- ------------------------------------------------------------
CREATE TABLE pokemon_stats (
    pokemon_id     INTEGER     NOT NULL REFERENCES pokemon(id),
    stat_name      VARCHAR(20) NOT NULL,  -- hp, attack, defense, sp_attack, sp_defense, speed
    base_value     INTEGER     NOT NULL,
    PRIMARY KEY (pokemon_id, stat_name)
);

-- ------------------------------------------------------------
-- とくせい (アビリティ)
-- ------------------------------------------------------------
CREATE TABLE abilities (
    id          INTEGER PRIMARY KEY,
    name        VARCHAR(50) NOT NULL UNIQUE,
    name_ja     VARCHAR(50) NOT NULL,
    description TEXT
);

CREATE TABLE pokemon_abilities (
    pokemon_id  INTEGER NOT NULL REFERENCES pokemon(id),
    ability_id  INTEGER NOT NULL REFERENCES abilities(id),
    is_hidden   BOOLEAN NOT NULL DEFAULT FALSE,  -- 隠れ特性
    slot        SMALLINT NOT NULL,
    PRIMARY KEY (pokemon_id, slot)
);

-- ------------------------------------------------------------
-- わざ (技)
-- ------------------------------------------------------------
CREATE TABLE moves (
    id          INTEGER PRIMARY KEY,
    name        VARCHAR(50) NOT NULL UNIQUE,
    name_ja     VARCHAR(50) NOT NULL,
    type_id     INTEGER     NOT NULL REFERENCES types(id),
    category    VARCHAR(10) NOT NULL CHECK (category IN ('physical', 'special', 'status')),
    power       INTEGER,            -- NULL = ダメージなし技
    accuracy    INTEGER,            -- NULL = 必中
    pp          INTEGER     NOT NULL,
    description TEXT
);

-- ------------------------------------------------------------
-- ポケモンが覚えるわざ
-- ------------------------------------------------------------
CREATE TABLE pokemon_moves (
    pokemon_id   INTEGER     NOT NULL REFERENCES pokemon(id),
    move_id      INTEGER     NOT NULL REFERENCES moves(id),
    learn_method VARCHAR(20) NOT NULL,  -- 'level-up', 'tm', 'egg', 'tutor'
    level        INTEGER,               -- レベルアップ習得時のレベル (それ以外は NULL)
    PRIMARY KEY (pokemon_id, move_id, learn_method)
);

-- ------------------------------------------------------------
-- 進化チェーン
-- ------------------------------------------------------------
CREATE TABLE evolution_chains (
    id INTEGER PRIMARY KEY
);

CREATE TABLE pokemon_evolutions (
    id                  INTEGER PRIMARY KEY,
    chain_id            INTEGER NOT NULL REFERENCES evolution_chains(id),
    from_pokemon_id     INTEGER REFERENCES pokemon(id),  -- NULL = チェーンの先頭
    to_pokemon_id       INTEGER NOT NULL REFERENCES pokemon(id),
    trigger             VARCHAR(30) NOT NULL,             -- 'level-up', 'trade', 'use-item', 'other'
    trigger_detail      TEXT,                             -- 条件の詳細 (JSON or 自由テキスト)
    minimum_level       INTEGER,
    UNIQUE (from_pokemon_id, to_pokemon_id)
);

-- ------------------------------------------------------------
-- たまごグループ
-- ------------------------------------------------------------
CREATE TABLE egg_groups (
    id      INTEGER PRIMARY KEY,
    name    VARCHAR(30) NOT NULL UNIQUE,
    name_ja VARCHAR(30) NOT NULL
);

CREATE TABLE pokemon_egg_groups (
    pokemon_id   INTEGER NOT NULL REFERENCES pokemon(id),
    egg_group_id INTEGER NOT NULL REFERENCES egg_groups(id),
    PRIMARY KEY (pokemon_id, egg_group_id)
);

-- ------------------------------------------------------------
-- インデックス
-- ------------------------------------------------------------
CREATE INDEX idx_pokemon_generation  ON pokemon(generation_id);
CREATE INDEX idx_pokemon_types_type  ON pokemon_types(type_id);
CREATE INDEX idx_moves_type          ON moves(type_id);
CREATE INDEX idx_pokemon_moves_move  ON pokemon_moves(move_id);
CREATE INDEX idx_evolutions_chain    ON pokemon_evolutions(chain_id);
