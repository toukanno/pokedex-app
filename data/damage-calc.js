// ダメージ計算エンジン (第9世代対応)

// 実数値計算
function calcStat(baseStat, iv, ev, level, natureMod) {
  return Math.floor((Math.floor((2 * baseStat + iv + Math.floor(ev / 4)) * level / 100) + 5) * natureMod);
}

function calcHP(baseHP, iv, ev, level) {
  if (baseHP === 1) return 1; // ヌケニン
  return Math.floor((2 * baseHP + iv + Math.floor(ev / 4)) * level / 100) + level + 10;
}

// 性格補正値を取得
function getNatureMod(nature, stat) {
  const n = NATURES[nature];
  if (!n || !n.up) return 1.0;
  if (n.up === stat) return 1.1;
  if (n.down === stat) return 0.9;
  return 1.0;
}

// タイプ相性倍率を計算
function getTypeEffectiveness(moveType, defTypes) {
  let multiplier = 1;
  for (const defType of defTypes) {
    const eff = TYPE_CHART[moveType]?.[defType];
    if (eff !== undefined) {
      multiplier *= eff;
    }
  }
  return multiplier;
}

// タイプ一致ボーナス (STAB)
function getSTAB(moveType, attackerTypes) {
  return attackerTypes.includes(moveType) ? 1.5 : 1.0;
}

// ダメージ計算メイン関数
function calculateDamage(params) {
  const {
    attackerPokemonId,
    defenderPokemonId,
    moveName,
    attackerLevel = 50,
    defenderLevel = 50,
    attackerNature = "まじめ",
    defenderNature = "まじめ",
    attackerIV = { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
    defenderIV = { hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31 },
    attackerEV = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    defenderEV = { hp: 0, atk: 0, def: 0, spa: 0, spd: 0, spe: 0 },
    attackerItem = "なし",
    defenderItem = "なし",
    attackerAbility = "",
    defenderAbility = "",
    attackerRankAtk = 0,
    attackerRankSpa = 0,
    defenderRankDef = 0,
    defenderRankSpd = 0,
    weather = "なし",  // 晴れ、雨、砂嵐、雪
    terrain = "なし",  // エレキ、グラス、サイコ、ミスト
    isCritical = false,
    isBurned = false,
    isReflect = false,
    isLightScreen = false,
    otherMod = 1.0
  } = params;

  const attacker = POKEMON_DB[attackerPokemonId];
  const defender = POKEMON_DB[defenderPokemonId];
  const move = MOVES_DB[moveName];

  if (!attacker || !defender || !move) return null;
  if (move.category === "変化") return { min: 0, max: 0, minPercent: 0, maxPercent: 0, effectiveness: 1, description: "変化技のためダメージなし" };

  const isPhysical = move.category === "物理";
  const moveType = move.type;
  let power = move.power;

  if (power === 0) return { min: 0, max: 0, minPercent: 0, maxPercent: 0, effectiveness: 1, description: "固定ダメージまたは特殊計算" };

  // 攻撃・防御の実数値計算
  const atkStat = isPhysical ? "atk" : "spa";
  const defStat = isPhysical ? "def" : "spd";

  let attackStat = calcStat(
    attacker.stats[atkStat],
    attackerIV[atkStat],
    attackerEV[atkStat],
    attackerLevel,
    getNatureMod(attackerNature, atkStat)
  );

  let defenseStat = calcStat(
    defender.stats[defStat],
    defenderIV[defStat],
    defenderEV[defStat],
    defenderLevel,
    getNatureMod(defenderNature, defStat)
  );

  const defenderHP = calcHP(
    defender.stats.hp,
    defenderIV.hp,
    defenderEV.hp,
    defenderLevel
  );

  // ランク補正
  const atkRank = isPhysical ? attackerRankAtk : attackerRankSpa;
  const defRank = isPhysical ? defenderRankDef : defenderRankSpd;

  if (atkRank > 0) attackStat = Math.floor(attackStat * (2 + atkRank) / 2);
  else if (atkRank < 0) attackStat = Math.floor(attackStat * 2 / (2 - atkRank));

  if (!isCritical) {
    if (defRank > 0) defenseStat = Math.floor(defenseStat * (2 + defRank) / 2);
    else if (defRank < 0) defenseStat = Math.floor(defenseStat * 2 / (2 - defRank));
  }

  // 持ち物補正（攻撃側）
  const atkItem = ITEMS[attackerItem] || ITEMS["なし"];
  if (isPhysical) {
    attackStat = Math.floor(attackStat * atkItem.atkMod);
  } else {
    attackStat = Math.floor(attackStat * atkItem.spaMod);
  }

  // 持ち物補正（防御側）
  const defItem = ITEMS[defenderItem] || ITEMS["なし"];
  if (isPhysical) {
    defenseStat = Math.floor(defenseStat * defItem.defMod);
  } else {
    defenseStat = Math.floor(defenseStat * defItem.spdMod);
  }

  // 天候による威力補正
  let weatherMod = 1.0;
  if (weather === "晴れ" && moveType === "ほのお") weatherMod = 1.5;
  if (weather === "晴れ" && moveType === "みず") weatherMod = 0.5;
  if (weather === "雨" && moveType === "みず") weatherMod = 1.5;
  if (weather === "雨" && moveType === "ほのお") weatherMod = 0.5;

  // フィールドによる威力補正
  let terrainMod = 1.0;
  if (terrain === "エレキ" && moveType === "でんき") terrainMod = 1.3;
  if (terrain === "グラス" && moveType === "くさ") terrainMod = 1.3;
  if (terrain === "サイコ" && moveType === "エスパー") terrainMod = 1.3;

  // タイプ相性
  const effectiveness = getTypeEffectiveness(moveType, defender.types);
  if (effectiveness === 0) {
    return { min: 0, max: 0, minPercent: 0, maxPercent: 0, effectiveness: 0, description: "効果なし" };
  }

  // STAB
  const stab = getSTAB(moveType, attacker.types);

  // 持ち物のタイプ補正
  let itemTypeMod = 1.0;
  if (atkItem.typeMod === moveType) {
    itemTypeMod = atkItem.typeModValue;
  }

  // やけど補正
  const burnMod = (isBurned && isPhysical && !isCritical) ? 0.5 : 1.0;

  // 壁補正
  let wallMod = 1.0;
  if (isPhysical && isReflect && !isCritical) wallMod = 0.5;
  if (!isPhysical && isLightScreen && !isCritical) wallMod = 0.5;

  // 急所補正
  const critMod = isCritical ? 1.5 : 1.0;

  // 基本ダメージ計算
  const baseDamage = Math.floor(Math.floor(Math.floor(2 * attackerLevel / 5 + 2) * power * attackStat / defenseStat) / 50 + 2);

  // 各種補正を乗算
  const results = [];
  for (let rand = 85; rand <= 100; rand++) {
    let damage = baseDamage;
    damage = Math.floor(damage * weatherMod);
    damage = Math.floor(damage * terrainMod);
    damage = Math.floor(damage * critMod);
    damage = Math.floor(damage * rand / 100);
    damage = Math.floor(damage * stab);
    damage = Math.floor(damage * effectiveness);
    damage = Math.floor(damage * burnMod);
    damage = Math.floor(damage * wallMod);
    damage = Math.floor(damage * itemTypeMod);
    damage = Math.floor(damage * otherMod);
    damage = Math.max(1, damage);
    results.push(damage);
  }

  const minDamage = Math.min(...results);
  const maxDamage = Math.max(...results);
  const minPercent = Math.round(minDamage / defenderHP * 1000) / 10;
  const maxPercent = Math.round(maxDamage / defenderHP * 1000) / 10;

  // 確定数計算
  let guaranteed = 0;
  if (minPercent > 0) {
    guaranteed = Math.ceil(100 / minPercent);
  } else if (maxPercent > 0) {
    guaranteed = 0; // min damage is 0, KO not guaranteed
  }

  // 効果テキスト
  let effText = "";
  if (effectiveness > 1) effText = "効果はばつぐんだ！";
  else if (effectiveness < 1 && effectiveness > 0) effText = "効果はいまひとつだ...";

  return {
    min: minDamage,
    max: maxDamage,
    minPercent,
    maxPercent,
    effectiveness,
    effectivenessText: effText,
    guaranteed,
    defenderHP,
    attackStat,
    defenseStat,
    description: `${minDamage}~${maxDamage} (${minPercent}%~${maxPercent}%) 確${guaranteed}発`
  };
}

// 個体値逆算（HP）
function reverseCalcHPIV(baseHP, actualHP, ev, level) {
  if (baseHP === 1) return actualHP === 1 ? { min: 0, max: 31 } : null;
  const results = [];
  for (let iv = 0; iv <= 31; iv++) {
    const calc = calcHP(baseHP, iv, ev, level);
    if (calc === actualHP) results.push(iv);
  }
  if (results.length === 0) return null;
  return { min: results[0], max: results[results.length - 1], values: results };
}

// 個体値逆算（HP以外）
function reverseCalcStatIV(baseStat, actualStat, ev, level, natureMod) {
  const results = [];
  for (let iv = 0; iv <= 31; iv++) {
    const calc = calcStat(baseStat, iv, ev, level, natureMod);
    if (calc === actualStat) results.push(iv);
  }
  if (results.length === 0) return null;
  return { min: results[0], max: results[results.length - 1], values: results };
}

// すばやさ実数値計算
function calcSpeedStat(pokemonId, level, nature, iv, ev, rankMod, item) {
  const pokemon = POKEMON_DB[pokemonId];
  if (!pokemon) return 0;
  let speed = calcStat(pokemon.stats.spe, iv, ev, level, getNatureMod(nature, "spe"));

  // ランク補正
  if (rankMod > 0) speed = Math.floor(speed * (2 + rankMod) / 2);
  else if (rankMod < 0) speed = Math.floor(speed * 2 / (2 - rankMod));

  // 持ち物補正
  const itemData = ITEMS[item] || ITEMS["なし"];
  speed = Math.floor(speed * itemData.speMod);

  return speed;
}

// HP実数値計算（公開用）
function calcHPStat(pokemonId, level, iv, ev) {
  const pokemon = POKEMON_DB[pokemonId];
  if (!pokemon) return 0;
  return calcHP(pokemon.stats.hp, iv, ev, level);
}

// 全ステータス実数値計算
function calcAllStats(pokemonId, level, nature, iv, ev) {
  const pokemon = POKEMON_DB[pokemonId];
  if (!pokemon) return null;

  return {
    hp: calcHP(pokemon.stats.hp, iv.hp, ev.hp, level),
    atk: calcStat(pokemon.stats.atk, iv.atk, ev.atk, level, getNatureMod(nature, "atk")),
    def: calcStat(pokemon.stats.def, iv.def, ev.def, level, getNatureMod(nature, "def")),
    spa: calcStat(pokemon.stats.spa, iv.spa, ev.spa, level, getNatureMod(nature, "spa")),
    spd: calcStat(pokemon.stats.spd, iv.spd, ev.spd, level, getNatureMod(nature, "spd")),
    spe: calcStat(pokemon.stats.spe, iv.spe, ev.spe, level, getNatureMod(nature, "spe"))
  };
}
