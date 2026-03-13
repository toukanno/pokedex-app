// ポケモンデータベース - 種族値・タイプ・特性・覚える技
// Generation 1-9 主要ポケモン (全国図鑑番号順)
const POKEMON_DB = {
  1: {
    name: "フシギダネ", nameEn: "bulbasaur", types: ["くさ", "どく"],
    stats: { hp: 45, atk: 49, def: 49, spa: 65, spd: 65, spe: 45 },
    abilities: ["しんりょく"], hiddenAbility: "ようりょくそ", weight: 6.9,
    moves: ["たいあたり","つるのムチ","はっぱカッター","タネばくだん","ヘドロばくだん","ソーラービーム","やどりぎのタネ","ねむりごな","こうごうせい","せいちょう"]
  },
  2: {
    name: "フシギソウ", nameEn: "ivysaur", types: ["くさ", "どく"],
    stats: { hp: 60, atk: 62, def: 63, spa: 80, spd: 80, spe: 60 },
    abilities: ["しんりょく"], hiddenAbility: "ようりょくそ", weight: 13.0,
    moves: ["たいあたり","つるのムチ","はっぱカッター","タネばくだん","ヘドロばくだん","ソーラービーム","やどりぎのタネ","ねむりごな","こうごうせい","せいちょう"]
  },
  3: {
    name: "フシギバナ", nameEn: "venusaur", types: ["くさ", "どく"],
    stats: { hp: 80, atk: 82, def: 83, spa: 100, spd: 100, spe: 80 },
    abilities: ["しんりょく"], hiddenAbility: "ようりょくそ", weight: 100.0,
    moves: ["たいあたり","つるのムチ","はっぱカッター","タネばくだん","ヘドロばくだん","ソーラービーム","じしん","やどりぎのタネ","ねむりごな","こうごうせい","せいちょう","ギガドレイン","パワーウィップ"]
  },
  4: {
    name: "ヒトカゲ", nameEn: "charmander", types: ["ほのお"],
    stats: { hp: 39, atk: 52, def: 43, spa: 60, spd: 50, spe: 65 },
    abilities: ["もうか"], hiddenAbility: "サンパワー", weight: 8.5,
    moves: ["ひっかく","ひのこ","かえんほうしゃ","だいもんじ","りゅうのいかり","きりさく","メタルクロー","ほのおのうず","えんまく"]
  },
  5: {
    name: "リザード", nameEn: "charmeleon", types: ["ほのお"],
    stats: { hp: 58, atk: 64, def: 58, spa: 80, spd: 65, spe: 80 },
    abilities: ["もうか"], hiddenAbility: "サンパワー", weight: 19.0,
    moves: ["ひっかく","ひのこ","かえんほうしゃ","だいもんじ","りゅうのいかり","きりさく","メタルクロー","ほのおのうず"]
  },
  6: {
    name: "リザードン", nameEn: "charizard", types: ["ほのお", "ひこう"],
    stats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    abilities: ["もうか"], hiddenAbility: "サンパワー", weight: 90.5,
    moves: ["ひっかく","ひのこ","かえんほうしゃ","だいもんじ","エアスラッシュ","りゅうのはどう","じしん","きりさく","ソーラービーム","ブラストバーン","ねっぷう","りゅうのまい","おにび","はねやすめ","フレアドライブ"]
  },
  7: {
    name: "ゼニガメ", nameEn: "squirtle", types: ["みず"],
    stats: { hp: 44, atk: 48, def: 65, spa: 50, spd: 64, spe: 43 },
    abilities: ["げきりゅう"], hiddenAbility: "あめうけざら", weight: 9.0,
    moves: ["たいあたり","みずでっぽう","みずのはどう","バブルこうせん","こうそくスピン","からにこもる","あまごい","なみのり"]
  },
  8: {
    name: "カメール", nameEn: "wartortle", types: ["みず"],
    stats: { hp: 59, atk: 63, def: 80, spa: 65, spd: 80, spe: 58 },
    abilities: ["げきりゅう"], hiddenAbility: "あめうけざら", weight: 22.5,
    moves: ["たいあたり","みずでっぽう","みずのはどう","バブルこうせん","こうそくスピン","からにこもる","あまごい","なみのり"]
  },
  9: {
    name: "カメックス", nameEn: "blastoise", types: ["みず"],
    stats: { hp: 79, atk: 83, def: 100, spa: 85, spd: 105, spe: 78 },
    abilities: ["げきりゅう"], hiddenAbility: "あめうけざら", weight: 85.5,
    moves: ["たいあたり","みずでっぽう","みずのはどう","ハイドロポンプ","れいとうビーム","ふぶき","あくのはどう","ラスターカノン","じしん","きあいだま","なみのり","ハイドロカノン","からをやぶる","てっぺき"]
  },
  25: {
    name: "ピカチュウ", nameEn: "pikachu", types: ["でんき"],
    stats: { hp: 35, atk: 55, def: 40, spa: 50, spd: 50, spe: 90 },
    abilities: ["せいでんき"], hiddenAbility: "ひらいしん", weight: 6.0,
    moves: ["でんきショック","10まんボルト","かみなり","ボルテッカー","アイアンテール","でんこうせっか","エレキボール","くさむすび","なみのり","ほっぺすりすり","ねこだまし"]
  },
  26: {
    name: "ライチュウ", nameEn: "raichu", types: ["でんき"],
    stats: { hp: 60, atk: 90, def: 55, spa: 90, spd: 80, spe: 110 },
    abilities: ["せいでんき"], hiddenAbility: "ひらいしん", weight: 30.0,
    moves: ["でんきショック","10まんボルト","かみなり","かみなりパンチ","アイアンテール","でんこうせっか","くさむすび","きあいだま","なみのり"]
  },
  94: {
    name: "ゲンガー", nameEn: "gengar", types: ["ゴースト", "どく"],
    stats: { hp: 60, atk: 65, def: 60, spa: 130, spd: 75, spe: 110 },
    abilities: ["のろわれボディ"], hiddenAbility: null, weight: 40.5,
    moves: ["シャドーボール","ヘドロばくだん","きあいだま","10まんボルト","エナジーボール","サイコキネシス","マジカルシャイン","みちづれ","おにび","さいみんじゅつ","ほろびのうた","こごえるかぜ","ヘドロウェーブ","たたりめ"]
  },
  130: {
    name: "ギャラドス", nameEn: "gyarados", types: ["みず", "ひこう"],
    stats: { hp: 95, atk: 125, def: 79, spa: 60, spd: 100, spe: 81 },
    abilities: ["いかく"], hiddenAbility: "じしんかじょう", weight: 235.0,
    moves: ["たきのぼり","アクアテール","こおりのキバ","かみくだく","じしん","ストーンエッジ","とびはねる","りゅうのまい","ちょうはつ","でんじは","パワーウィップ"]
  },
  131: {
    name: "ラプラス", nameEn: "lapras", types: ["みず", "こおり"],
    stats: { hp: 130, atk: 85, def: 80, spa: 85, spd: 95, spe: 60 },
    abilities: ["ちょすい", "シェルアーマー"], hiddenAbility: "うるおいボディ", weight: 220.0,
    moves: ["なみのり","ハイドロポンプ","れいとうビーム","ふぶき","かみなり","10まんボルト","サイコキネシス","うたう","ほろびのうた","ぜったいれいど","フリーズドライ"]
  },
  134: {
    name: "シャワーズ", nameEn: "vaporeon", types: ["みず"],
    stats: { hp: 130, atk: 65, def: 60, spa: 110, spd: 95, spe: 65 },
    abilities: ["ちょすい"], hiddenAbility: "うるおいボディ", weight: 29.0,
    moves: ["なみのり","ハイドロポンプ","れいとうビーム","シャドーボール","ねがいごと","あくび","とける","バトンタッチ","ねっとう","アクアリング"]
  },
  135: {
    name: "サンダース", nameEn: "jolteon", types: ["でんき"],
    stats: { hp: 65, atk: 65, def: 60, spa: 110, spd: 95, spe: 130 },
    abilities: ["ちくでん"], hiddenAbility: "はやあし", weight: 24.5,
    moves: ["10まんボルト","かみなり","シャドーボール","シグナルビーム","めざめるパワー","でんこうせっか","ボルトチェンジ","あくび","バトンタッチ","でんじは"]
  },
  136: {
    name: "ブースター", nameEn: "flareon", types: ["ほのお"],
    stats: { hp: 65, atk: 130, def: 60, spa: 95, spd: 110, spe: 65 },
    abilities: ["もらいび"], hiddenAbility: "こんじょう", weight: 25.0,
    moves: ["フレアドライブ","ニトロチャージ","ばかぢから","アイアンテール","かみつく","でんこうせっか","おにび","あくび","バトンタッチ","のろい"]
  },
  143: {
    name: "カビゴン", nameEn: "snorlax", types: ["ノーマル"],
    stats: { hp: 160, atk: 110, def: 65, spa: 65, spd: 110, spe: 30 },
    abilities: ["めんえき", "あついしぼう"], hiddenAbility: "くいしんぼう", weight: 460.0,
    moves: ["すてみタックル","のしかかり","じしん","ほのおのパンチ","れいとうパンチ","かみなりパンチ","かみくだく","アームハンマー","ねむる","のろい","はらだいこ","あくび","じわれ","ヘビーボンバー","DDラリアット","ギガインパクト"]
  },
  149: {
    name: "カイリュー", nameEn: "dragonite", types: ["ドラゴン", "ひこう"],
    stats: { hp: 91, atk: 134, def: 95, spa: 100, spd: 100, spe: 80 },
    abilities: ["せいしんりょく"], hiddenAbility: "マルチスケイル", weight: 210.0,
    moves: ["げきりん","ドラゴンクロー","しんそく","じしん","ほのおのパンチ","れいとうパンチ","かみなりパンチ","アイアンヘッド","ばかぢから","エアスラッシュ","りゅうのまい","はねやすめ","でんじは","りゅうせいぐん"]
  },
  150: {
    name: "ミュウツー", nameEn: "mewtwo", types: ["エスパー"],
    stats: { hp: 106, atk: 110, def: 90, spa: 154, spd: 90, spe: 130 },
    abilities: ["プレッシャー"], hiddenAbility: "きんちょうかん", weight: 122.0,
    moves: ["サイコキネシス","サイコブレイク","きあいだま","シャドーボール","れいとうビーム","かみなり","だいもんじ","エナジーボール","じしん","じこさいせい","めいそう","ちょうはつ","はどうだん"]
  },
  151: {
    name: "ミュウ", nameEn: "mew", types: ["エスパー"],
    stats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: ["シンクロ"], hiddenAbility: null, weight: 4.0,
    moves: ["サイコキネシス","きあいだま","シャドーボール","れいとうビーム","かみなり","だいもんじ","エナジーボール","じしん","なみのり","はどうだん","とんぼがえり","ステルスロック","おにび","でんじは","へんしん"]
  },
  196: {
    name: "エーフィ", nameEn: "espeon", types: ["エスパー"],
    stats: { hp: 65, atk: 65, def: 60, spa: 130, spd: 95, spe: 110 },
    abilities: ["シンクロ"], hiddenAbility: "マジックミラー", weight: 26.5,
    moves: ["サイコキネシス","シャドーボール","マジカルシャイン","くさむすび","めざめるパワー","でんこうせっか","あさのひざし","めいそう","リフレクター","ひかりのかべ","あくび","バトンタッチ","サイコショック"]
  },
  197: {
    name: "ブラッキー", nameEn: "umbreon", types: ["あく"],
    stats: { hp: 95, atk: 65, def: 110, spa: 60, spd: 130, spe: 65 },
    abilities: ["シンクロ"], hiddenAbility: "せいしんりょく", weight: 27.0,
    moves: ["イカサマ","バークアウト","どくどく","あくび","ねがいごと","まもる","のろい","つきのひかり","ちょうはつ","でんじは","バトンタッチ"]
  },
  248: {
    name: "バンギラス", nameEn: "tyranitar", types: ["いわ", "あく"],
    stats: { hp: 100, atk: 134, def: 110, spa: 95, spd: 100, spe: 61 },
    abilities: ["すなおこし"], hiddenAbility: "きんちょうかん", weight: 202.0,
    moves: ["ストーンエッジ","いわなだれ","かみくだく","じしん","ばかぢから","アイアンヘッド","れいとうパンチ","ほのおのパンチ","かみなりパンチ","りゅうのまい","ステルスロック","でんじは","ちょうはつ","だいもんじ","れいとうビーム"]
  },
  257: {
    name: "バシャーモ", nameEn: "blaziken", types: ["ほのお", "かくとう"],
    stats: { hp: 80, atk: 120, def: 70, spa: 110, spd: 70, spe: 80 },
    abilities: ["もうか"], hiddenAbility: "かそく", weight: 52.0,
    moves: ["フレアドライブ","ブレイズキック","インファイト","とびひざげり","かみなりパンチ","ストーンエッジ","つるぎのまい","まもる","バトンタッチ","ブラストバーン","きあいだま","オーバーヒート"]
  },
  282: {
    name: "サーナイト", nameEn: "gardevoir", types: ["エスパー", "フェアリー"],
    stats: { hp: 68, atk: 65, def: 65, spa: 125, spd: 115, spe: 80 },
    abilities: ["シンクロ", "トレース"], hiddenAbility: "テレパシー", weight: 48.4,
    moves: ["サイコキネシス","ムーンフォース","シャドーボール","きあいだま","10まんボルト","エナジーボール","めいそう","おにび","でんじは","さいみんじゅつ","みちづれ","ハイパーボイス","マジカルシャイン","サイコショック"]
  },
  376: {
    name: "メタグロス", nameEn: "metagross", types: ["はがね", "エスパー"],
    stats: { hp: 80, atk: 135, def: 130, spa: 95, spd: 90, spe: 70 },
    abilities: ["クリアボディ"], hiddenAbility: "かるわざ", weight: 550.0,
    moves: ["コメットパンチ","しねんのずつき","バレットパンチ","じしん","アイアンヘッド","れいとうパンチ","かみなりパンチ","アームハンマー","こうそくいどう","ステルスロック","でんじふゆう"]
  },
  384: {
    name: "レックウザ", nameEn: "rayquaza", types: ["ドラゴン", "ひこう"],
    stats: { hp: 105, atk: 150, def: 90, spa: 150, spd: 90, spe: 95 },
    abilities: ["エアロック"], hiddenAbility: null, weight: 206.5,
    moves: ["げきりん","ドラゴンクロー","りゅうせいぐん","しんそく","じしん","ストーンエッジ","たきのぼり","アイアンヘッド","りゅうのまい","つるぎのまい","Vジェネレート","エアスラッシュ","オーバーヒート","でんじは","ガリョウテンセイ"]
  },
  445: {
    name: "ガブリアス", nameEn: "garchomp", types: ["ドラゴン", "じめん"],
    stats: { hp: 108, atk: 130, def: 95, spa: 80, spd: 85, spe: 102 },
    abilities: ["すながくれ"], hiddenAbility: "さめはだ", weight: 95.0,
    moves: ["げきりん","ドラゴンクロー","じしん","ストーンエッジ","ほのおのキバ","どくづき","アイアンヘッド","つるぎのまい","ステルスロック","りゅうせいぐん","だいもんじ"]
  },
  448: {
    name: "ルカリオ", nameEn: "lucario", types: ["かくとう", "はがね"],
    stats: { hp: 70, atk: 110, def: 70, spa: 115, spd: 70, spe: 90 },
    abilities: ["ふくつのこころ", "せいしんりょく"], hiddenAbility: "せいぎのこころ", weight: 54.0,
    moves: ["インファイト","はどうだん","コメットパンチ","しんそく","かみくだく","れいとうパンチ","きあいだま","シャドーボール","ラスターカノン","わるだくみ","つるぎのまい","バレットパンチ","ボーンラッシュ"]
  },
  635: {
    name: "サザンドラ", nameEn: "hydreigon", types: ["あく", "ドラゴン"],
    stats: { hp: 92, atk: 105, def: 90, spa: 125, spd: 90, spe: 98 },
    abilities: ["ふゆう"], hiddenAbility: null, weight: 160.0,
    moves: ["あくのはどう","りゅうせいぐん","りゅうのはどう","だいもんじ","きあいだま","ラスターカノン","なみのり","とんぼがえり","ちょうはつ","でんじは","わるだくみ","ハイパーボイス"]
  },
  637: {
    name: "ウルガモス", nameEn: "volcarona", types: ["むし", "ほのお"],
    stats: { hp: 85, atk: 60, def: 65, spa: 135, spd: 105, spe: 100 },
    abilities: ["ほのおのからだ"], hiddenAbility: "むしのしらせ", weight: 46.0,
    moves: ["だいもんじ","オーバーヒート","むしのさざめき","ギガドレイン","サイコキネシス","ちょうのまい","おにび","はねやすめ","ほのおのまい"]
  },
  658: {
    name: "ゲッコウガ", nameEn: "greninja", types: ["みず", "あく"],
    stats: { hp: 72, atk: 95, def: 67, spa: 103, spd: 71, spe: 122 },
    abilities: ["げきりゅう"], hiddenAbility: "へんげんじざい", weight: 40.0,
    moves: ["ハイドロポンプ","なみのり","あくのはどう","れいとうビーム","くさむすび","じんつうりき","とんぼがえり","どくびし","まきびし","みずしゅりけん","ダストシュート","けたぐり","いわなだれ"]
  },
  681: {
    name: "ギルガルド", nameEn: "aegislash", types: ["はがね", "ゴースト"],
    stats: { hp: 60, atk: 50, def: 140, spa: 50, spd: 140, spe: 60 },
    abilities: ["バトルスイッチ"], hiddenAbility: null, weight: 53.0,
    moves: ["アイアンヘッド","かげうち","せいなるつるぎ","シャドーボール","ラスターカノン","シャドークロー","キングシールド","つるぎのまい","どくどく","ステルスロック"]
  },
  700: {
    name: "ニンフィア", nameEn: "sylveon", types: ["フェアリー"],
    stats: { hp: 95, atk: 65, def: 65, spa: 110, spd: 130, spe: 60 },
    abilities: ["メロメロボディ"], hiddenAbility: "フェアリースキン", weight: 23.5,
    moves: ["ハイパーボイス","ムーンフォース","シャドーボール","サイコショック","めいそう","ねがいごと","あくび","でんこうせっか","バトンタッチ","マジカルフレイム","みがわり"]
  },
  706: {
    name: "ヌメルゴン", nameEn: "goodra", types: ["ドラゴン"],
    stats: { hp: 90, atk: 100, def: 70, spa: 110, spd: 150, spe: 80 },
    abilities: ["そうしょく", "うるおいボディ"], hiddenAbility: "ぬめぬめ", weight: 150.5,
    moves: ["りゅうせいぐん","りゅうのはどう","かえんほうしゃ","10まんボルト","ヘドロばくだん","パワーウィップ","アクアテール","じしん","のろい","あまごい"]
  },
  748: {
    name: "ドヒドイデ", nameEn: "toxapex", types: ["どく", "みず"],
    stats: { hp: 50, atk: 63, def: 152, spa: 53, spd: 142, spe: 35 },
    abilities: ["ひとでなし", "じゅうなん"], hiddenAbility: "さいせいりょく", weight: 14.5,
    moves: ["ねっとう","ヘドロばくだん","どくどく","じこさいせい","くろいきり","トーチカ","まとわりつく","ベノムショック"]
  },
  778: {
    name: "ミミッキュ", nameEn: "mimikyu", types: ["ゴースト", "フェアリー"],
    stats: { hp: 55, atk: 90, def: 80, spa: 50, spd: 105, spe: 96 },
    abilities: ["ばけのかわ"], hiddenAbility: null, weight: 0.7,
    moves: ["じゃれつく","シャドークロー","かげうち","つるぎのまい","おにび","でんじは","のろい","みちづれ","トリックルーム","ウッドハンマー","ドレインパンチ"]
  },
  812: {
    name: "ゴリランダー", nameEn: "rillaboom", types: ["くさ"],
    stats: { hp: 100, atk: 125, def: 90, spa: 60, spd: 70, spe: 85 },
    abilities: ["しんりょく"], hiddenAbility: "グラスメイカー", weight: 90.0,
    moves: ["ウッドハンマー","グラススライダー","はたきおとす","10まんばりき","ドラムアタック","ばかぢから","とんぼがえり","つるぎのまい","ちょうはつ"]
  },
  815: {
    name: "エースバーン", nameEn: "cinderace", types: ["ほのお"],
    stats: { hp: 80, atk: 116, def: 75, spa: 65, spd: 75, spe: 119 },
    abilities: ["もうか"], hiddenAbility: "リベロ", weight: 33.0,
    moves: ["かえんボール","とびひざげり","とびはねる","ふいうち","しねんのずつき","アイアンヘッド","エレキボール","コートチェンジ","ちょうはつ","ビルドアップ"]
  },
  818: {
    name: "インテレオン", nameEn: "inteleon", types: ["みず"],
    stats: { hp: 70, atk: 85, def: 65, spa: 125, spd: 65, spe: 120 },
    abilities: ["げきりゅう"], hiddenAbility: "スナイパー", weight: 45.2,
    moves: ["ハイドロポンプ","ねらいうち","れいとうビーム","エアスラッシュ","あくのはどう","シャドーボール","なみのり","みずしゅりけん","とんぼがえり","アクアジェット"]
  },
  887: {
    name: "ドラパルト", nameEn: "dragapult", types: ["ドラゴン", "ゴースト"],
    stats: { hp: 88, atk: 120, def: 75, spa: 100, spd: 75, spe: 142 },
    abilities: ["クリアボディ", "すりぬけ"], hiddenAbility: "のろわれボディ", weight: 50.0,
    moves: ["ドラゴンアロー","シャドーボール","だいもんじ","10まんボルト","ゴーストダイブ","りゅうせいぐん","とんぼがえり","おにび","でんじは","りゅうのまい","ふいうち","サイコファング"]
  },
  892: {
    name: "ウーラオス(いちげき)", nameEn: "urshifu-single-strike", types: ["かくとう", "あく"],
    stats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
    abilities: ["ふかしのこぶし"], hiddenAbility: null, weight: 105.0,
    moves: ["あんこくきょうだ","インファイト","つばめがえし","アイアンヘッド","ストーンエッジ","どくづき","かみなりパンチ","とんぼがえり","ちょうはつ","ビルドアップ","ふいうち","アクアジェット"]
  },
  893: {
    name: "ウーラオス(れんげき)", nameEn: "urshifu-rapid-strike", types: ["かくとう", "みず"],
    stats: { hp: 100, atk: 130, def: 100, spa: 63, spd: 60, spe: 97 },
    abilities: ["ふかしのこぶし"], hiddenAbility: null, weight: 105.0,
    moves: ["すいりゅうれんだ","インファイト","つばめがえし","アイアンヘッド","れいとうパンチ","どくづき","かみなりパンチ","とんぼがえり","ちょうはつ","ビルドアップ","アクアジェット"]
  },
  905: {
    name: "ラブトロス", nameEn: "enamorus", types: ["フェアリー", "ひこう"],
    stats: { hp: 74, atk: 115, def: 70, spa: 135, spd: 80, spe: 106 },
    abilities: ["メロメロボディ"], hiddenAbility: "あまのじゃく", weight: 48.0,
    moves: ["ムーンフォース","サイコキネシス","きあいだま","ぼうふう","だいちのちから","くさむすび","みがわり","めいそう","ちょうはつ","おいかぜ"]
  },
  1007: {
    name: "コライドン", nameEn: "koraidon", types: ["かくとう", "ドラゴン"],
    stats: { hp: 100, atk: 135, def: 115, spa: 85, spd: 100, spe: 135 },
    abilities: ["ひひいろのこどう"], hiddenAbility: null, weight: 303.0,
    moves: ["アクセルブレイク","げきりん","インファイト","フレアドライブ","じしん","ストーンエッジ","とんぼがえり","りゅうのまい","つるぎのまい","ビルドアップ","ちょうはつ"]
  },
  1008: {
    name: "ミライドン", nameEn: "miraidon", types: ["でんき", "ドラゴン"],
    stats: { hp: 100, atk: 85, def: 100, spa: 135, spd: 115, spe: 135 },
    abilities: ["ハドロンエンジン"], hiddenAbility: null, weight: 240.0,
    moves: ["イナズマドライブ","りゅうせいぐん","りゅうのはどう","オーバーヒート","エレキフィールド","ボルトチェンジ","パラボラチャージ","めいそう","でんじは","リフレクター"]
  },
  // 追加の人気ポケモン
  59: {
    name: "ウインディ", nameEn: "arcanine", types: ["ほのお"],
    stats: { hp: 90, atk: 110, def: 80, spa: 100, spd: 80, spe: 95 },
    abilities: ["いかく", "もらいび"], hiddenAbility: "せいぎのこころ", weight: 155.0,
    moves: ["フレアドライブ","しんそく","ワイルドボルト","インファイト","じゃれつく","かみくだく","おにび","あさのひざし","りゅうのはどう","ほえる"]
  },
  65: {
    name: "フーディン", nameEn: "alakazam", types: ["エスパー"],
    stats: { hp: 55, atk: 50, def: 45, spa: 135, spd: 95, spe: 120 },
    abilities: ["シンクロ", "せいしんりょく"], hiddenAbility: "マジックガード", weight: 48.0,
    moves: ["サイコキネシス","シャドーボール","きあいだま","エナジーボール","シグナルビーム","でんじは","アンコール","トリック","めいそう","じこさいせい","サイコショック"]
  },
  68: {
    name: "カイリキー", nameEn: "machamp", types: ["かくとう"],
    stats: { hp: 90, atk: 130, def: 80, spa: 65, spd: 85, spe: 55 },
    abilities: ["こんじょう", "ノーガード"], hiddenAbility: "ふくつのこころ", weight: 130.0,
    moves: ["インファイト","ばくれつパンチ","ストーンエッジ","じしん","かみなりパンチ","れいとうパンチ","ほのおのパンチ","はたきおとす","バレットパンチ","ビルドアップ"]
  },
  112: {
    name: "サイドン", nameEn: "rhydon", types: ["じめん", "いわ"],
    stats: { hp: 105, atk: 130, def: 120, spa: 45, spd: 45, spe: 40 },
    abilities: ["ひらいしん", "いしあたま"], hiddenAbility: "すてみ", weight: 120.0,
    moves: ["じしん","ストーンエッジ","メガホーン","アームハンマー","つのドリル","ロックブラスト","ステルスロック","つるぎのまい"]
  },
  464: {
    name: "ドサイドン", nameEn: "rhyperior", types: ["じめん", "いわ"],
    stats: { hp: 115, atk: 140, def: 130, spa: 55, spd: 55, spe: 40 },
    abilities: ["ひらいしん", "ハードロック"], hiddenAbility: "すてみ", weight: 282.8,
    moves: ["じしん","ストーンエッジ","メガホーン","アームハンマー","ほのおのパンチ","れいとうパンチ","かみなりパンチ","ステルスロック","つるぎのまい","ロックブラスト","がんせきほう"]
  },
  212: {
    name: "ハッサム", nameEn: "scizor", types: ["むし", "はがね"],
    stats: { hp: 70, atk: 130, def: 100, spa: 55, spd: 80, spe: 65 },
    abilities: ["むしのしらせ", "テクニシャン"], hiddenAbility: "ライトメタル", weight: 118.0,
    moves: ["バレットパンチ","シザークロス","とんぼがえり","はたきおとす","ばかぢから","つるぎのまい","はねやすめ","でんこうせっか","アイアンヘッド","ダブルウイング"]
  },
  227: {
    name: "エアームド", nameEn: "skarmory", types: ["はがね", "ひこう"],
    stats: { hp: 65, atk: 80, def: 140, spa: 40, spd: 70, spe: 70 },
    abilities: ["するどいめ", "がんじょう"], hiddenAbility: "くだけるよろい", weight: 50.5,
    moves: ["ブレイブバード","アイアンヘッド","ボディプレス","ステルスロック","ふきとばし","ちょうはつ","はねやすめ","てっぺき","まきびし","どくどく"]
  },
  242: {
    name: "ハピナス", nameEn: "blissey", types: ["ノーマル"],
    stats: { hp: 255, atk: 10, def: 10, spa: 75, spd: 135, spe: 55 },
    abilities: ["しぜんかいふく", "てんのめぐみ"], hiddenAbility: "いやしのこころ", weight: 46.8,
    moves: ["たまなげ","れいとうビーム","かえんほうしゃ","10まんボルト","シャドーボール","タマゴうみ","でんじは","どくどく","ちきゅうなげ","ステルスロック","めいそう","アロマセラピー"]
  },
  598: {
    name: "ナットレイ", nameEn: "ferrothorn", types: ["くさ", "はがね"],
    stats: { hp: 74, atk: 94, def: 131, spa: 54, spd: 116, spe: 20 },
    abilities: ["てつのトゲ"], hiddenAbility: "きけんよち", weight: 110.0,
    moves: ["パワーウィップ","ジャイロボール","はたきおとす","ボディプレス","やどりぎのタネ","ステルスロック","まきびし","でんじは","のろい","てっぺき"]
  },
  479: {
    name: "ロトム(ウォッシュ)", nameEn: "rotom-wash", types: ["でんき", "みず"],
    stats: { hp: 50, atk: 65, def: 107, spa: 105, spd: 107, spe: 86 },
    abilities: ["ふゆう"], hiddenAbility: null, weight: 0.3,
    moves: ["ハイドロポンプ","10まんボルト","ボルトチェンジ","おにび","でんじは","トリック","リフレクター","ひかりのかべ","ほうでん","あくのはどう"]
  },
  473: {
    name: "マンムー", nameEn: "mamoswine", types: ["こおり", "じめん"],
    stats: { hp: 110, atk: 130, def: 80, spa: 70, spd: 60, spe: 80 },
    abilities: ["どんかん", "ゆきがくれ"], hiddenAbility: "あついしぼう", weight: 291.0,
    moves: ["じしん","つららばり","こおりのつぶて","ストーンエッジ","ばかぢから","はたきおとす","ステルスロック","つららおとし","10まんばりき"]
  },
  591: {
    name: "モロバレル", nameEn: "amoonguss", types: ["くさ", "どく"],
    stats: { hp: 114, atk: 85, def: 70, spa: 85, spd: 80, spe: 30 },
    abilities: ["ほうし"], hiddenAbility: "さいせいりょく", weight: 10.5,
    moves: ["ギガドレイン","ヘドロばくだん","キノコのほうし","いかりのこな","クリアスモッグ","まもる","こうごうせい","どくどく"]
  },
  730: {
    name: "アシレーヌ", nameEn: "primarina", types: ["みず", "フェアリー"],
    stats: { hp: 80, atk: 74, def: 74, spa: 126, spd: 116, spe: 60 },
    abilities: ["げきりゅう"], hiddenAbility: "うるおいボイス", weight: 44.0,
    moves: ["うたかたのアリア","ムーンフォース","れいとうビーム","エナジーボール","シャドーボール","サイコキネシス","アンコール","めいそう","アクアジェット","ハイパーボイス"]
  },
  897: {
    name: "ブリザポス", nameEn: "glastrier", types: ["こおり"],
    stats: { hp: 100, atk: 145, def: 130, spa: 65, spd: 110, spe: 30 },
    abilities: ["しろのいななき"], hiddenAbility: null, weight: 800.0,
    moves: ["つららおとし","インファイト","10まんばりき","ヘビーボンバー","つるぎのまい","トリックルーム"]
  },
  898: {
    name: "レイスポス", nameEn: "spectrier", types: ["ゴースト"],
    stats: { hp: 100, atk: 65, def: 60, spa: 145, spd: 80, spe: 130 },
    abilities: ["くろのいななき"], hiddenAbility: null, weight: 44.5,
    moves: ["シャドーボール","あくのはどう","マッドショット","ふういん","めいそう","みがわり","おにび","わるだくみ"]
  },
  // SV世代
  923: {
    name: "パーモット", nameEn: "pawmot", types: ["でんき", "かくとう"],
    stats: { hp: 70, atk: 115, def: 70, spa: 70, spd: 60, spe: 105 },
    abilities: ["しぜんかいふく", "てつのこぶし"], hiddenAbility: "ちくでん", weight: 41.0,
    moves: ["インファイト","ワイルドボルト","れいとうパンチ","かみなりパンチ","でんこうせっか","さいきのいのり","ほっぺすりすり","ねこだまし"]
  },
  956: {
    name: "ベラカス", nameEn: "rabsca", types: ["むし", "エスパー"],
    stats: { hp: 75, atk: 50, def: 85, spa: 115, spd: 100, spe: 45 },
    abilities: ["シンクロ"], hiddenAbility: "テレパシー", weight: 3.5,
    moves: ["サイコキネシス","むしのさざめき","だいちのちから","シャドーボール","トリックルーム","じこさいせい","めいそう","ふういん"]
  },
  978: {
    name: "キラフロル", nameEn: "glimmora", types: ["いわ", "どく"],
    stats: { hp: 83, atk: 55, def: 90, spa: 130, spd: 81, spe: 86 },
    abilities: ["どくげしょう"], hiddenAbility: "ふしょく", weight: 45.0,
    moves: ["パワージェム","ヘドロウェーブ","だいちのちから","エナジーボール","まきびし","どくびし","ステルスロック","だいばくはつ"]
  },
  997: {
    name: "セグレイブ", nameEn: "baxcalibur", types: ["ドラゴン", "こおり"],
    stats: { hp: 115, atk: 145, def: 92, spa: 75, spd: 86, spe: 87 },
    abilities: ["ねつこうかん"], hiddenAbility: "アイスボディ", weight: 210.0,
    moves: ["きょけんとつげき","つららおとし","じしん","こおりのつぶて","アイアンヘッド","つるぎのまい","りゅうのまい","りゅうせいぐん"]
  },
  1000: {
    name: "サーフゴー", nameEn: "gholdengo", types: ["はがね", "ゴースト"],
    stats: { hp: 87, atk: 60, def: 95, spa: 133, spd: 91, spe: 84 },
    abilities: ["おうごんのからだ"], hiddenAbility: null, weight: 30.0,
    moves: ["ゴールドラッシュ","シャドーボール","きあいだま","10まんボルト","サイコキネシス","わるだくみ","じこさいせい","トリック","でんじは"]
  },
  1006: {
    name: "テツノブジン", nameEn: "iron-valiant", types: ["フェアリー", "かくとう"],
    stats: { hp: 74, atk: 130, def: 90, spa: 120, spd: 60, spe: 116 },
    abilities: ["クォークチャージ"], hiddenAbility: null, weight: 35.0,
    moves: ["インファイト","ムーンフォース","はどうだん","シャドーボール","サイコキネシス","リーフブレード","つるぎのまい","めいそう","でんこうせっか","アンコール"]
  },
  // === 追加ポケモン: 第1世代 ===
  10: {
    name: "キャタピー", nameEn: "caterpie", types: ["むし"],
    stats: { hp: 45, atk: 30, def: 35, spa: 20, spd: 20, spe: 45 },
    abilities: ["りんぷん"], hiddenAbility: "にげあし", weight: 2.9,
    moves: ["たいあたり","むしくい","エレキネット"]
  },
  11: {
    name: "トランセル", nameEn: "metapod", types: ["むし"],
    stats: { hp: 50, atk: 20, def: 55, spa: 25, spd: 25, spe: 30 },
    abilities: ["だっぴ"], hiddenAbility: null, weight: 9.9,
    moves: ["かたくなる","むしくい","エレキネット"]
  },
  12: {
    name: "バタフリー", nameEn: "butterfree", types: ["むし", "ひこう"],
    stats: { hp: 60, atk: 45, def: 50, spa: 90, spd: 80, spe: 70 },
    abilities: ["ふくがん"], hiddenAbility: "いろめがね", weight: 32.0,
    moves: ["むしのさざめき","エアスラッシュ","サイコキネシス","エナジーボール","ねむりごな","ちょうのまい","はねやすめ","ぼうふう"]
  },
  15: {
    name: "スピアー", nameEn: "beedrill", types: ["むし", "どく"],
    stats: { hp: 65, atk: 90, def: 40, spa: 45, spd: 80, spe: 75 },
    abilities: ["むしのしらせ"], hiddenAbility: "スナイパー", weight: 29.5,
    moves: ["どくづき","ドリルライナー","シザークロス","とんぼがえり","はたきおとす","つるぎのまい"]
  },
  18: {
    name: "ピジョット", nameEn: "pidgeot", types: ["ノーマル", "ひこう"],
    stats: { hp: 83, atk: 80, def: 75, spa: 70, spd: 70, spe: 101 },
    abilities: ["するどいめ", "ちどりあし"], hiddenAbility: "はとむね", weight: 39.5,
    moves: ["ブレイブバード","おんがえし","ねっぷう","はねやすめ","おいかぜ","ふきとばし","とんぼがえり","エアスラッシュ"]
  },
  20: {
    name: "ラッタ", nameEn: "raticate", types: ["ノーマル"],
    stats: { hp: 55, atk: 81, def: 60, spa: 50, spd: 70, spe: 97 },
    abilities: ["にげあし", "こんじょう"], hiddenAbility: "はりきり", weight: 18.5,
    moves: ["すてみタックル","ひっさつまえば","かみくだく","ふいうち","でんこうせっか","つるぎのまい"]
  },
  27: {
    name: "サンドパン", nameEn: "sandslash", types: ["じめん"],
    stats: { hp: 75, atk: 100, def: 110, spa: 45, spd: 55, spe: 65 },
    abilities: ["すながくれ"], hiddenAbility: "すなかき", weight: 29.5,
    moves: ["じしん","ストーンエッジ","つるぎのまい","こうそくスピン","はたきおとす","ステルスロック","つばめがえし"]
  },
  31: {
    name: "ニドクイン", nameEn: "nidoqueen", types: ["どく", "じめん"],
    stats: { hp: 90, atk: 92, def: 87, spa: 75, spd: 85, spe: 76 },
    abilities: ["どくのトゲ", "とうそうしん"], hiddenAbility: "ちからずく", weight: 60.0,
    moves: ["じしん","ヘドロウェーブ","れいとうビーム","10まんボルト","だいもんじ","ステルスロック","どくどく","ほのおのパンチ"]
  },
  34: {
    name: "ニドキング", nameEn: "nidoking", types: ["どく", "じめん"],
    stats: { hp: 81, atk: 102, def: 77, spa: 85, spd: 75, spe: 85 },
    abilities: ["どくのトゲ", "とうそうしん"], hiddenAbility: "ちからずく", weight: 62.0,
    moves: ["じしん","ヘドロウェーブ","れいとうビーム","10まんボルト","だいもんじ","ステルスロック","メガホーン","ばかぢから"]
  },
  36: {
    name: "ピクシー", nameEn: "clefable", types: ["フェアリー"],
    stats: { hp: 95, atk: 70, def: 73, spa: 95, spd: 90, spe: 60 },
    abilities: ["メロメロボディ", "マジックガード"], hiddenAbility: "てんねん", weight: 40.0,
    moves: ["ムーンフォース","かえんほうしゃ","れいとうビーム","10まんボルト","めいそう","つきのひかり","ステルスロック","でんじは","こごえるかぜ","アンコール"]
  },
  38: {
    name: "キュウコン", nameEn: "ninetales", types: ["ほのお"],
    stats: { hp: 73, atk: 76, def: 75, spa: 81, spd: 100, spe: 100 },
    abilities: ["もらいび"], hiddenAbility: "ひでり", weight: 19.9,
    moves: ["かえんほうしゃ","だいもんじ","オーバーヒート","ソーラービーム","エナジーボール","おにび","さいみんじゅつ","めいそう","ねっぷう"]
  },
  40: {
    name: "プクリン", nameEn: "wigglytuff", types: ["ノーマル", "フェアリー"],
    stats: { hp: 140, atk: 70, def: 45, spa: 85, spd: 50, spe: 45 },
    abilities: ["メロメロボディ", "かちき"], hiddenAbility: "おみとおし", weight: 12.0,
    moves: ["ハイパーボイス","ムーンフォース","だいもんじ","れいとうビーム","ステルスロック","でんじは","ねがいごと","まもる"]
  },
  45: {
    name: "ラフレシア", nameEn: "vileplume", types: ["くさ", "どく"],
    stats: { hp: 75, atk: 80, def: 85, spa: 110, spd: 90, spe: 50 },
    abilities: ["ようりょくそ"], hiddenAbility: "ほうし", weight: 18.6,
    moves: ["ギガドレイン","ヘドロばくだん","ねむりごな","こうごうせい","ムーンフォース","だいちのちから"]
  },
  47: {
    name: "パラセクト", nameEn: "parasect", types: ["むし", "くさ"],
    stats: { hp: 60, atk: 95, def: 80, spa: 60, spd: 80, spe: 30 },
    abilities: ["ほうし", "かんそうはだ"], hiddenAbility: "しめりけ", weight: 29.5,
    moves: ["シザークロス","タネばくだん","キノコのほうし","はたきおとす","つるぎのまい"]
  },
  49: {
    name: "モルフォン", nameEn: "venomoth", types: ["むし", "どく"],
    stats: { hp: 70, atk: 65, def: 60, spa: 90, spd: 75, spe: 90 },
    abilities: ["りんぷん", "いろめがね"], hiddenAbility: "ミラクルスキン", weight: 12.5,
    moves: ["むしのさざめき","ヘドロばくだん","サイコキネシス","ちょうのまい","ねむりごな","バトンタッチ"]
  },
  51: {
    name: "ダグトリオ", nameEn: "dugtrio", types: ["じめん"],
    stats: { hp: 35, atk: 100, def: 50, spa: 50, spd: 70, spe: 120 },
    abilities: ["すながくれ", "ありじごく"], hiddenAbility: "すなのちから", weight: 33.3,
    moves: ["じしん","ストーンエッジ","ふいうち","きりさく","ステルスロック","メメントー"]
  },
  55: {
    name: "ゴルダック", nameEn: "golduck", types: ["みず"],
    stats: { hp: 80, atk: 82, def: 78, spa: 95, spd: 80, spe: 85 },
    abilities: ["しめりけ", "ノーてんき"], hiddenAbility: "すいすい", weight: 76.6,
    moves: ["なみのり","ハイドロポンプ","れいとうビーム","サイコキネシス","きあいだま","めいそう","アンコール"]
  },
  57: {
    name: "オコリザル", nameEn: "primeape", types: ["かくとう"],
    stats: { hp: 65, atk: 105, def: 60, spa: 60, spd: 70, spe: 95 },
    abilities: ["やるき", "いかりのつぼ"], hiddenAbility: "まけんき", weight: 32.0,
    moves: ["インファイト","はたきおとす","ストーンエッジ","じしん","とんぼがえり","ちょうはつ","アンコール","ふんどのこぶし"]
  },
  62: {
    name: "ニョロボン", nameEn: "poliwrath", types: ["みず", "かくとう"],
    stats: { hp: 90, atk: 95, def: 95, spa: 70, spd: 90, spe: 70 },
    abilities: ["ちょすい", "しめりけ"], hiddenAbility: "すいすい", weight: 54.0,
    moves: ["たきのぼり","インファイト","れいとうパンチ","じしん","どくづき","はらだいこ","さいみんじゅつ","アンコール"]
  },
  71: {
    name: "ウツボット", nameEn: "victreebel", types: ["くさ", "どく"],
    stats: { hp: 80, atk: 105, def: 65, spa: 100, spd: 70, spe: 70 },
    abilities: ["ようりょくそ"], hiddenAbility: "くいしんぼう", weight: 15.5,
    moves: ["パワーウィップ","ヘドロばくだん","ねむりごな","こうごうせい","ソーラービーム","ウェザーボール","つるぎのまい"]
  },
  73: {
    name: "ドククラゲ", nameEn: "tentacruel", types: ["みず", "どく"],
    stats: { hp: 80, atk: 70, def: 65, spa: 80, spd: 120, spe: 100 },
    abilities: ["クリアボディ", "ヘドロえき"], hiddenAbility: "あめうけざら", weight: 55.0,
    moves: ["ハイドロポンプ","ヘドロウェーブ","れいとうビーム","こうそくスピン","どくびし","ミラーコート","はたきおとす"]
  },
  76: {
    name: "ゴローニャ", nameEn: "golem", types: ["いわ", "じめん"],
    stats: { hp: 80, atk: 120, def: 130, spa: 55, spd: 65, spe: 45 },
    abilities: ["いしあたま", "がんじょう"], hiddenAbility: "すながくれ", weight: 300.0,
    moves: ["じしん","ストーンエッジ","だいばくはつ","ほのおのパンチ","ばかぢから","ステルスロック","ロックブラスト"]
  },
  78: {
    name: "ギャロップ", nameEn: "rapidash", types: ["ほのお"],
    stats: { hp: 65, atk: 100, def: 70, spa: 80, spd: 80, spe: 105 },
    abilities: ["にげあし", "もらいび"], hiddenAbility: "ほのおのからだ", weight: 95.0,
    moves: ["フレアドライブ","メガホーン","ワイルドボルト","じゃれつく","おにび","あさのひざし","さいみんじゅつ"]
  },
  80: {
    name: "ヤドラン", nameEn: "slowbro", types: ["みず", "エスパー"],
    stats: { hp: 95, atk: 75, def: 110, spa: 100, spd: 80, spe: 30 },
    abilities: ["どんかん", "マイペース"], hiddenAbility: "さいせいりょく", weight: 78.5,
    moves: ["なみのり","サイコキネシス","れいとうビーム","かえんほうしゃ","くさむすび","めいそう","じこさいせい","なまける","トリックルーム","てっぺき"]
  },
  83: {
    name: "カモネギ", nameEn: "farfetchd", types: ["ノーマル", "ひこう"],
    stats: { hp: 52, atk: 90, def: 55, spa: 58, spd: 62, spe: 60 },
    abilities: ["するどいめ", "せいしんりょく"], hiddenAbility: "まけんき", weight: 15.0,
    moves: ["ブレイブバード","はたきおとす","リーフブレード","つるぎのまい","でんこうせっか","きりさく"]
  },
  85: {
    name: "ドードリオ", nameEn: "dodrio", types: ["ノーマル", "ひこう"],
    stats: { hp: 60, atk: 110, def: 70, spa: 60, spd: 60, spe: 110 },
    abilities: ["にげあし", "はやおき"], hiddenAbility: "ちどりあし", weight: 85.2,
    moves: ["ブレイブバード","すてみタックル","とびはねる","でんこうせっか","つるぎのまい","はたきおとす"]
  },
  87: {
    name: "ジュゴン", nameEn: "dewgong", types: ["みず", "こおり"],
    stats: { hp: 90, atk: 70, def: 80, spa: 70, spd: 95, spe: 70 },
    abilities: ["あついしぼう", "うるおいボディ"], hiddenAbility: "アイスボディ", weight: 120.0,
    moves: ["れいとうビーム","なみのり","シグナルビーム","ぜったいれいど","ねむる","ねごと","どくどく"]
  },
  89: {
    name: "ベトベトン", nameEn: "muk", types: ["どく"],
    stats: { hp: 105, atk: 105, def: 75, spa: 65, spd: 100, spe: 50 },
    abilities: ["あくしゅう", "ねんちゃく"], hiddenAbility: "どくしゅ", weight: 30.0,
    moves: ["ダストシュート","どくづき","ほのおのパンチ","れいとうパンチ","かみなりパンチ","かげうち","のろい","どくどく"]
  },
  91: {
    name: "パルシェン", nameEn: "cloyster", types: ["みず", "こおり"],
    stats: { hp: 50, atk: 95, def: 180, spa: 85, spd: 45, spe: 70 },
    abilities: ["シェルアーマー", "スキルリンク"], hiddenAbility: "ぼうじん", weight: 132.5,
    moves: ["つららばり","ロックブラスト","ハイドロポンプ","からをやぶる","こおりのつぶて","まきびし","どくびし"]
  },
  95: {
    name: "イワーク", nameEn: "onix", types: ["いわ", "じめん"],
    stats: { hp: 35, atk: 45, def: 160, spa: 30, spd: 45, spe: 70 },
    abilities: ["いしあたま", "がんじょう"], hiddenAbility: "くだけるよろい", weight: 210.0,
    moves: ["じしん","ストーンエッジ","ステルスロック","ほえる","のろい"]
  },
  97: {
    name: "スリーパー", nameEn: "hypno", types: ["エスパー"],
    stats: { hp: 85, atk: 73, def: 70, spa: 73, spd: 115, spe: 67 },
    abilities: ["ふみん", "よちむ"], hiddenAbility: "せいしんりょく", weight: 75.6,
    moves: ["サイコキネシス","きあいだま","シャドーボール","さいみんじゅつ","ねむる","めいそう","でんじは","トリック"]
  },
  99: {
    name: "キングラー", nameEn: "kingler", types: ["みず"],
    stats: { hp: 55, atk: 130, def: 115, spa: 50, spd: 50, spe: 75 },
    abilities: ["かいりきバサミ", "シェルアーマー"], hiddenAbility: "ちからずく", weight: 60.0,
    moves: ["はさむ","たきのぼり","いわなだれ","ばかぢから","つるぎのまい","こうそくいどう"]
  },
  101: {
    name: "マルマイン", nameEn: "electrode", types: ["でんき"],
    stats: { hp: 60, atk: 50, def: 70, spa: 80, spd: 80, spe: 150 },
    abilities: ["ぼうおん", "せいでんき"], hiddenAbility: "ゆうばく", weight: 66.6,
    moves: ["10まんボルト","ボルトチェンジ","ミラーコート","だいばくはつ","でんじは","ひかりのかべ","リフレクター"]
  },
  103: {
    name: "ナッシー", nameEn: "exeggutor", types: ["くさ", "エスパー"],
    stats: { hp: 95, atk: 95, def: 85, spa: 125, spd: 75, spe: 55 },
    abilities: ["ようりょくそ"], hiddenAbility: "しゅうかく", weight: 120.0,
    moves: ["ソーラービーム","サイコキネシス","ギガドレイン","ねむりごな","やどりぎのタネ","トリックルーム","だいばくはつ"]
  },
  105: {
    name: "ガラガラ", nameEn: "marowak", types: ["じめん"],
    stats: { hp: 60, atk: 80, def: 110, spa: 50, spd: 80, spe: 45 },
    abilities: ["いしあたま", "ひらいしん"], hiddenAbility: "カブトアーマー", weight: 45.0,
    moves: ["じしん","ストーンエッジ","ほのおのパンチ","つるぎのまい","ステルスロック","ボーンラッシュ"]
  },
  106: {
    name: "サワムラー", nameEn: "hitmonlee", types: ["かくとう"],
    stats: { hp: 50, atk: 120, def: 53, spa: 35, spd: 110, spe: 87 },
    abilities: ["じゅうなん", "すてみ"], hiddenAbility: "かるわざ", weight: 49.8,
    moves: ["とびひざげり","ストーンエッジ","はたきおとす","フェイント","ブレイズキック","マッハパンチ"]
  },
  107: {
    name: "エビワラー", nameEn: "hitmonchan", types: ["かくとう"],
    stats: { hp: 50, atk: 105, def: 79, spa: 35, spd: 110, spe: 76 },
    abilities: ["するどいめ", "てつのこぶし"], hiddenAbility: "せいしんりょく", weight: 50.2,
    moves: ["インファイト","れいとうパンチ","かみなりパンチ","ほのおのパンチ","マッハパンチ","ドレインパンチ","バレットパンチ"]
  },
  110: {
    name: "マタドガス", nameEn: "weezing", types: ["どく"],
    stats: { hp: 65, atk: 90, def: 120, spa: 85, spd: 70, spe: 60 },
    abilities: ["ふゆう", "かがくへんかガス"], hiddenAbility: "ミストメイカー", weight: 9.5,
    moves: ["ヘドロばくだん","だいもんじ","おにび","どくどく","いたみわけ","クリアスモッグ","だいばくはつ"]
  },
  113: {
    name: "ラッキー", nameEn: "chansey", types: ["ノーマル"],
    stats: { hp: 250, atk: 5, def: 5, spa: 35, spd: 105, spe: 50 },
    abilities: ["しぜんかいふく", "てんのめぐみ"], hiddenAbility: "いやしのこころ", weight: 34.6,
    moves: ["ちきゅうなげ","でんじは","どくどく","ステルスロック","タマゴうみ","ちいさくなる","めいそう","れいとうビーム"]
  },
  115: {
    name: "ガルーラ", nameEn: "kangaskhan", types: ["ノーマル"],
    stats: { hp: 105, atk: 95, def: 80, spa: 40, spd: 80, spe: 90 },
    abilities: ["はやおき", "きもったま"], hiddenAbility: "せいしんりょく", weight: 80.0,
    moves: ["すてみタックル","グロウパンチ","じしん","ふいうち","ねこだまし","かみくだく","ほのおのパンチ","れいとうパンチ"]
  },
  121: {
    name: "スターミー", nameEn: "starmie", types: ["みず", "エスパー"],
    stats: { hp: 60, atk: 75, def: 85, spa: 100, spd: 85, spe: 115 },
    abilities: ["はっこう", "しぜんかいふく"], hiddenAbility: "アナライズ", weight: 80.0,
    moves: ["なみのり","ハイドロポンプ","サイコキネシス","れいとうビーム","10まんボルト","じこさいせい","こうそくスピン","トリック"]
  },
  122: {
    name: "バリヤード", nameEn: "mr-mime", types: ["エスパー", "フェアリー"],
    stats: { hp: 40, atk: 45, def: 65, spa: 100, spd: 120, spe: 90 },
    abilities: ["ぼうおん", "フィルター"], hiddenAbility: "テクニシャン", weight: 54.5,
    moves: ["サイコキネシス","マジカルシャイン","きあいだま","リフレクター","ひかりのかべ","アンコール","ちょうはつ","トリック"]
  },
  123: {
    name: "ストライク", nameEn: "scyther", types: ["むし", "ひこう"],
    stats: { hp: 70, atk: 110, def: 80, spa: 55, spd: 80, spe: 105 },
    abilities: ["むしのしらせ", "テクニシャン"], hiddenAbility: "ふくつのこころ", weight: 56.0,
    moves: ["シザークロス","つばめがえし","でんこうせっか","とんぼがえり","つるぎのまい","はねやすめ","ダブルウイング"]
  },
  124: {
    name: "ルージュラ", nameEn: "jynx", types: ["こおり", "エスパー"],
    stats: { hp: 65, atk: 50, def: 35, spa: 115, spd: 95, spe: 95 },
    abilities: ["どんかん", "よちむ"], hiddenAbility: "かんそうはだ", weight: 40.6,
    moves: ["ふぶき","れいとうビーム","サイコキネシス","くさむすび","あくまのキッス","ねこだまし","トリック","わるだくみ"]
  },
  125: {
    name: "エレブー", nameEn: "electabuzz", types: ["でんき"],
    stats: { hp: 65, atk: 83, def: 57, spa: 95, spd: 85, spe: 105 },
    abilities: ["せいでんき"], hiddenAbility: "やるき", weight: 30.0,
    moves: ["10まんボルト","れいとうパンチ","クロスチョップ","ほのおのパンチ","でんこうせっか","ボルトチェンジ"]
  },
  126: {
    name: "ブーバー", nameEn: "magmar", types: ["ほのお"],
    stats: { hp: 65, atk: 95, def: 57, spa: 100, spd: 85, spe: 93 },
    abilities: ["ほのおのからだ"], hiddenAbility: "やるき", weight: 44.5,
    moves: ["かえんほうしゃ","だいもんじ","サイコキネシス","きあいだま","クロスチョップ","おにび"]
  },
  127: {
    name: "カイロス", nameEn: "pinsir", types: ["むし"],
    stats: { hp: 65, atk: 125, def: 100, spa: 55, spd: 70, spe: 85 },
    abilities: ["かいりきバサミ", "かたやぶり"], hiddenAbility: "じしんかじょう", weight: 55.0,
    moves: ["シザークロス","インファイト","じしん","ストーンエッジ","つるぎのまい","でんこうせっか"]
  },
  128: {
    name: "ケンタロス", nameEn: "tauros", types: ["ノーマル"],
    stats: { hp: 75, atk: 100, def: 95, spa: 40, spd: 70, spe: 110 },
    abilities: ["いかく", "いかりのつぼ"], hiddenAbility: "ちからずく", weight: 88.4,
    moves: ["すてみタックル","じしん","ストーンエッジ","アイアンヘッド","しっぺがえし","ちょうはつ"]
  },
  129: {
    name: "コイキング", nameEn: "magikarp", types: ["みず"],
    stats: { hp: 20, atk: 10, def: 55, spa: 15, spd: 20, spe: 80 },
    abilities: ["すいすい"], hiddenAbility: "びびり", weight: 10.0,
    moves: ["はねる","たいあたり","じたばた"]
  },
  132: {
    name: "メタモン", nameEn: "ditto", types: ["ノーマル"],
    stats: { hp: 48, atk: 48, def: 48, spa: 48, spd: 48, spe: 48 },
    abilities: ["じゅうなん"], hiddenAbility: "かわりもの", weight: 4.0,
    moves: ["へんしん"]
  },
  133: {
    name: "イーブイ", nameEn: "eevee", types: ["ノーマル"],
    stats: { hp: 55, atk: 55, def: 50, spa: 45, spd: 65, spe: 55 },
    abilities: ["にげあし", "てきおうりょく"], hiddenAbility: "きけんよち", weight: 6.5,
    moves: ["すてみタックル","でんこうせっか","かみつく","あくび","ねがいごと","まもる","バトンタッチ","とっておき"]
  },
  137: {
    name: "ポリゴン", nameEn: "porygon", types: ["ノーマル"],
    stats: { hp: 65, atk: 60, def: 70, spa: 85, spd: 75, spe: 40 },
    abilities: ["トレース", "ダウンロード"], hiddenAbility: "アナライズ", weight: 36.5,
    moves: ["トライアタック","れいとうビーム","10まんボルト","シャドーボール","じこさいせい","でんじは","トリック"]
  },
  139: {
    name: "オムスター", nameEn: "omastar", types: ["いわ", "みず"],
    stats: { hp: 70, atk: 60, def: 125, spa: 115, spd: 70, spe: 55 },
    abilities: ["すいすい", "シェルアーマー"], hiddenAbility: "くだけるよろい", weight: 35.0,
    moves: ["なみのり","ハイドロポンプ","パワージェム","れいとうビーム","だいちのちから","からをやぶる","まきびし","ステルスロック"]
  },
  141: {
    name: "カブトプス", nameEn: "kabutops", types: ["いわ", "みず"],
    stats: { hp: 60, atk: 115, def: 105, spa: 65, spd: 70, spe: 80 },
    abilities: ["すいすい", "カブトアーマー"], hiddenAbility: "くだけるよろい", weight: 40.5,
    moves: ["ストーンエッジ","たきのぼり","こうそくスピン","つるぎのまい","アクアジェット","ばかぢから"]
  },
  142: {
    name: "プテラ", nameEn: "aerodactyl", types: ["いわ", "ひこう"],
    stats: { hp: 80, atk: 105, def: 65, spa: 60, spd: 75, spe: 130 },
    abilities: ["いしあたま", "プレッシャー"], hiddenAbility: "きんちょうかん", weight: 59.0,
    moves: ["ストーンエッジ","じしん","つばめがえし","こおりのキバ","ほのおのキバ","ステルスロック","ちょうはつ","おいかぜ"]
  },
  144: {
    name: "フリーザー", nameEn: "articuno", types: ["こおり", "ひこう"],
    stats: { hp: 90, atk: 85, def: 100, spa: 95, spd: 125, spe: 85 },
    abilities: ["プレッシャー"], hiddenAbility: "ゆきがくれ", weight: 55.4,
    moves: ["ふぶき","れいとうビーム","フリーズドライ","ぼうふう","はねやすめ","こうそくいどう","リフレクター"]
  },
  145: {
    name: "サンダー", nameEn: "zapdos", types: ["でんき", "ひこう"],
    stats: { hp: 90, atk: 90, def: 85, spa: 125, spd: 90, spe: 100 },
    abilities: ["プレッシャー"], hiddenAbility: "せいでんき", weight: 52.6,
    moves: ["10まんボルト","かみなり","ねっぷう","ぼうふう","はねやすめ","でんじは","ボルトチェンジ","ほうでん"]
  },
  146: {
    name: "ファイヤー", nameEn: "moltres", types: ["ほのお", "ひこう"],
    stats: { hp: 90, atk: 100, def: 90, spa: 125, spd: 85, spe: 90 },
    abilities: ["プレッシャー"], hiddenAbility: "ほのおのからだ", weight: 60.0,
    moves: ["だいもんじ","オーバーヒート","ぼうふう","エアスラッシュ","ソーラービーム","はねやすめ","おにび","にほんばれ"]
  },
  148: {
    name: "ハクリュー", nameEn: "dragonair", types: ["ドラゴン"],
    stats: { hp: 61, atk: 84, def: 65, spa: 70, spd: 70, spe: 70 },
    abilities: ["だっぴ"], hiddenAbility: "ふしぎなうろこ", weight: 16.5,
    moves: ["りゅうのはどう","アクアテール","アイアンテール","でんじは","りゅうのまい","しんそく"]
  },
  // === 追加ポケモン: 第2世代 ===
  154: {
    name: "メガニウム", nameEn: "meganium", types: ["くさ"],
    stats: { hp: 80, atk: 82, def: 100, spa: 83, spd: 100, spe: 80 },
    abilities: ["しんりょく"], hiddenAbility: "リーフガード", weight: 100.5,
    moves: ["ギガドレイン","こうごうせい","やどりぎのタネ","どくどく","リフレクター","ひかりのかべ","じしん","りゅうのしっぽ"]
  },
  157: {
    name: "バクフーン", nameEn: "typhlosion", types: ["ほのお"],
    stats: { hp: 78, atk: 84, def: 78, spa: 109, spd: 85, spe: 100 },
    abilities: ["もうか"], hiddenAbility: "もらいび", weight: 79.5,
    moves: ["かえんほうしゃ","だいもんじ","オーバーヒート","きあいだま","ソーラービーム","ふんか","でんこうせっか"]
  },
  160: {
    name: "オーダイル", nameEn: "feraligatr", types: ["みず"],
    stats: { hp: 85, atk: 105, def: 100, spa: 79, spd: 83, spe: 78 },
    abilities: ["げきりゅう"], hiddenAbility: "ちからずく", weight: 88.8,
    moves: ["たきのぼり","アクアジェット","こおりのキバ","かみくだく","じしん","りゅうのまい","つるぎのまい","ばかぢから"]
  },
  169: {
    name: "クロバット", nameEn: "crobat", types: ["どく", "ひこう"],
    stats: { hp: 85, atk: 90, def: 80, spa: 70, spd: 80, spe: 130 },
    abilities: ["せいしんりょく"], hiddenAbility: "すりぬけ", weight: 75.0,
    moves: ["ブレイブバード","クロスポイズン","とんぼがえり","はたきおとす","ちょうはつ","どくどく","はねやすめ","さいみんじゅつ"]
  },
  171: {
    name: "ランターン", nameEn: "lanturn", types: ["みず", "でんき"],
    stats: { hp: 125, atk: 58, def: 58, spa: 76, spd: 76, spe: 67 },
    abilities: ["ちくでん", "はっこう"], hiddenAbility: "ちょすい", weight: 22.5,
    moves: ["なみのり","10まんボルト","ボルトチェンジ","れいとうビーム","でんじは","どくどく","ねっとう"]
  },
  176: {
    name: "トゲチック", nameEn: "togetic", types: ["フェアリー", "ひこう"],
    stats: { hp: 55, atk: 40, def: 85, spa: 80, spd: 105, spe: 40 },
    abilities: ["はりきり", "てんのめぐみ"], hiddenAbility: "きょううん", weight: 3.2,
    moves: ["マジカルシャイン","エアスラッシュ","かえんほうしゃ","でんじは","あくび","アンコール","はねやすめ","わるだくみ"]
  },
  181: {
    name: "デンリュウ", nameEn: "ampharos", types: ["でんき"],
    stats: { hp: 90, atk: 75, def: 85, spa: 115, spd: 90, spe: 55 },
    abilities: ["せいでんき"], hiddenAbility: "プラス", weight: 61.5,
    moves: ["10まんボルト","かみなり","りゅうのはどう","きあいだま","でんじは","ボルトチェンジ","ほうでん","めいそう"]
  },
  184: {
    name: "マリルリ", nameEn: "azumarill", types: ["みず", "フェアリー"],
    stats: { hp: 100, atk: 50, def: 80, spa: 60, spd: 80, spe: 50 },
    abilities: ["あついしぼう", "ちからもち"], hiddenAbility: "そうしょく", weight: 28.5,
    moves: ["アクアジェット","じゃれつく","ばかぢから","アクアテール","はたきおとす","はらだいこ","アンコール","ほろびのうた"]
  },
  186: {
    name: "ニョロトノ", nameEn: "politoed", types: ["みず"],
    stats: { hp: 90, atk: 75, def: 75, spa: 90, spd: 100, spe: 70 },
    abilities: ["ちょすい", "しめりけ"], hiddenAbility: "あめふらし", weight: 33.9,
    moves: ["ねっとう","れいとうビーム","きあいだま","さいみんじゅつ","アンコール","どくどく","ほろびのうた"]
  },
  195: {
    name: "ヌオー", nameEn: "quagsire", types: ["みず", "じめん"],
    stats: { hp: 95, atk: 85, def: 85, spa: 65, spd: 65, spe: 35 },
    abilities: ["しめりけ", "ちょすい"], hiddenAbility: "てんねん", weight: 75.0,
    moves: ["じしん","たきのぼり","れいとうパンチ","どくどく","じこさいせい","あくび","カウンター","のろい"]
  },
  199: {
    name: "ヤドキング", nameEn: "slowking", types: ["みず", "エスパー"],
    stats: { hp: 95, atk: 75, def: 80, spa: 100, spd: 110, spe: 30 },
    abilities: ["どんかん", "マイペース"], hiddenAbility: "さいせいりょく", weight: 79.5,
    moves: ["なみのり","サイコキネシス","れいとうビーム","かえんほうしゃ","くさむすび","めいそう","じこさいせい","トリックルーム","なまける"]
  },
  205: {
    name: "フォレトス", nameEn: "forretress", types: ["むし", "はがね"],
    stats: { hp: 75, atk: 90, def: 140, spa: 60, spd: 60, spe: 40 },
    abilities: ["がんじょう"], hiddenAbility: "ぼうじん", weight: 125.8,
    moves: ["ジャイロボール","だいばくはつ","ボルトチェンジ","ステルスロック","まきびし","どくびし","こうそくスピン"]
  },
  208: {
    name: "ハガネール", nameEn: "steelix", types: ["はがね", "じめん"],
    stats: { hp: 75, atk: 85, def: 200, spa: 55, spd: 65, spe: 30 },
    abilities: ["いしあたま", "がんじょう"], hiddenAbility: "ちからずく", weight: 400.0,
    moves: ["じしん","アイアンヘッド","ヘビーボンバー","ストーンエッジ","ステルスロック","のろい","ほえる","りゅうのしっぽ"]
  },
  214: {
    name: "ヘラクロス", nameEn: "heracross", types: ["むし", "かくとう"],
    stats: { hp: 80, atk: 125, def: 75, spa: 40, spd: 95, spe: 85 },
    abilities: ["むしのしらせ", "こんじょう"], hiddenAbility: "じしんかじょう", weight: 54.0,
    moves: ["インファイト","メガホーン","ストーンエッジ","はたきおとす","つるぎのまい","ミサイルばり"]
  },
  229: {
    name: "ヘルガー", nameEn: "houndoom", types: ["あく", "ほのお"],
    stats: { hp: 75, atk: 90, def: 50, spa: 110, spd: 80, spe: 95 },
    abilities: ["はやおき", "もらいび"], hiddenAbility: "きんちょうかん", weight: 35.0,
    moves: ["あくのはどう","だいもんじ","オーバーヒート","ヘドロばくだん","わるだくみ","おにび","ちょうはつ","ふいうち"]
  },
  230: {
    name: "キングドラ", nameEn: "kingdra", types: ["みず", "ドラゴン"],
    stats: { hp: 75, atk: 95, def: 95, spa: 95, spd: 95, spe: 85 },
    abilities: ["すいすい", "スナイパー"], hiddenAbility: "しめりけ", weight: 152.0,
    moves: ["ハイドロポンプ","りゅうせいぐん","りゅうのはどう","れいとうビーム","なみのり","りゅうのまい","あくび"]
  },
  233: {
    name: "ポリゴン2", nameEn: "porygon2", types: ["ノーマル"],
    stats: { hp: 85, atk: 80, def: 90, spa: 105, spd: 95, spe: 60 },
    abilities: ["トレース", "ダウンロード"], hiddenAbility: "アナライズ", weight: 32.5,
    moves: ["トライアタック","れいとうビーム","10まんボルト","シャドーボール","じこさいせい","でんじは","トリック","ほうでん"]
  },
  237: {
    name: "カポエラー", nameEn: "hitmontop", types: ["かくとう"],
    stats: { hp: 50, atk: 95, def: 95, spa: 35, spd: 110, spe: 70 },
    abilities: ["いかく", "テクニシャン"], hiddenAbility: "ふくつのこころ", weight: 48.0,
    moves: ["インファイト","トリプルキック","はたきおとす","ストーンエッジ","マッハパンチ","こうそくスピン","ちょうはつ"]
  },
  241: {
    name: "ミルタンク", nameEn: "miltank", types: ["ノーマル"],
    stats: { hp: 95, atk: 80, def: 105, spa: 40, spd: 70, spe: 100 },
    abilities: ["あついしぼう", "きもったま"], hiddenAbility: "そうしょく", weight: 75.5,
    moves: ["おんがえし","のしかかり","じしん","ほのおのパンチ","ミルクのみ","のろい","ステルスロック","でんじは"]
  },
  243: {
    name: "ライコウ", nameEn: "raikou", types: ["でんき"],
    stats: { hp: 90, atk: 85, def: 75, spa: 115, spd: 100, spe: 115 },
    abilities: ["プレッシャー"], hiddenAbility: "せいしんりょく", weight: 178.0,
    moves: ["10まんボルト","ボルトチェンジ","シャドーボール","めいそう","リフレクター","でんじは","しんそく"]
  },
  244: {
    name: "エンテイ", nameEn: "entei", types: ["ほのお"],
    stats: { hp: 115, atk: 115, def: 85, spa: 90, spd: 75, spe: 100 },
    abilities: ["プレッシャー"], hiddenAbility: "せいしんりょく", weight: 198.0,
    moves: ["せいなるほのお","フレアドライブ","ストーンエッジ","しんそく","おにび","めいそう"]
  },
  245: {
    name: "スイクン", nameEn: "suicune", types: ["みず"],
    stats: { hp: 100, atk: 75, def: 115, spa: 90, spd: 115, spe: 85 },
    abilities: ["プレッシャー"], hiddenAbility: "せいしんりょく", weight: 187.0,
    moves: ["ねっとう","れいとうビーム","めいそう","ミラーコート","ほえる","でんじは","おいかぜ","じこさいせい"]
  },
  249: {
    name: "ルギア", nameEn: "lugia", types: ["エスパー", "ひこう"],
    stats: { hp: 106, atk: 90, def: 130, spa: 90, spd: 154, spe: 110 },
    abilities: ["プレッシャー"], hiddenAbility: "マルチスケイル", weight: 216.0,
    moves: ["エアロブラスト","サイコキネシス","れいとうビーム","10まんボルト","めいそう","はねやすめ","リフレクター","でんじは"]
  },
  250: {
    name: "ホウオウ", nameEn: "ho-oh", types: ["ほのお", "ひこう"],
    stats: { hp: 106, atk: 130, def: 90, spa: 110, spd: 154, spe: 90 },
    abilities: ["プレッシャー"], hiddenAbility: "さいせいりょく", weight: 199.0,
    moves: ["せいなるほのお","ブレイブバード","じしん","でんじは","おにび","はねやすめ","リフレクター","めいそう"]
  },
  251: {
    name: "セレビィ", nameEn: "celebi", types: ["エスパー", "くさ"],
    stats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: ["しぜんかいふく"], hiddenAbility: null, weight: 5.0,
    moves: ["サイコキネシス","ギガドレイン","だいちのちから","めいそう","じこさいせい","でんじは","ステルスロック","やどりぎのタネ","トリック","バトンタッチ"]
  },
  // === 追加ポケモン: 第3世代 ===
  254: {
    name: "ジュカイン", nameEn: "sceptile", types: ["くさ"],
    stats: { hp: 70, atk: 85, def: 65, spa: 105, spd: 85, spe: 120 },
    abilities: ["しんりょく"], hiddenAbility: "かるわざ", weight: 52.2,
    moves: ["リーフストーム","ギガドレイン","きあいだま","りゅうのはどう","じしん","リーフブレード","つるぎのまい","みがわり"]
  },
  260: {
    name: "ラグラージ", nameEn: "swampert", types: ["みず", "じめん"],
    stats: { hp: 100, atk: 110, def: 90, spa: 85, spd: 90, spe: 60 },
    abilities: ["げきりゅう"], hiddenAbility: "しめりけ", weight: 81.9,
    moves: ["じしん","たきのぼり","れいとうパンチ","ストーンエッジ","ステルスロック","あくび","がんせきふうじ","ばかぢから"]
  },
  264: {
    name: "マッスグマ", nameEn: "linoone", types: ["ノーマル"],
    stats: { hp: 78, atk: 70, def: 61, spa: 50, spd: 61, spe: 100 },
    abilities: ["ものひろい", "くいしんぼう"], hiddenAbility: "はやあし", weight: 32.5,
    moves: ["しんそく","はらだいこ","でんこうせっか","はたきおとす","じゃれつく","シャドークロー"]
  },
  272: {
    name: "ルンパッパ", nameEn: "ludicolo", types: ["みず", "くさ"],
    stats: { hp: 80, atk: 70, def: 70, spa: 90, spd: 100, spe: 70 },
    abilities: ["すいすい", "あめうけざら"], hiddenAbility: "マイペース", weight: 55.0,
    moves: ["ハイドロポンプ","ギガドレイン","れいとうビーム","きあいだま","あまごい","やどりぎのタネ","アンコール"]
  },
  275: {
    name: "ダーテング", nameEn: "shiftry", types: ["くさ", "あく"],
    stats: { hp: 90, atk: 100, def: 60, spa: 90, spd: 60, spe: 80 },
    abilities: ["ようりょくそ", "はやおき"], hiddenAbility: "わるいてぐせ", weight: 59.6,
    moves: ["リーフブレード","はたきおとす","ふいうち","ばくれつパンチ","わるだくみ","にほんばれ","ソーラービーム"]
  },
  286: {
    name: "キノガッサ", nameEn: "breloom", types: ["くさ", "かくとう"],
    stats: { hp: 60, atk: 130, def: 80, spa: 60, spd: 60, spe: 70 },
    abilities: ["ほうし", "ポイズンヒール"], hiddenAbility: "テクニシャン", weight: 39.2,
    moves: ["キノコのほうし","マッハパンチ","タネマシンガン","ばかぢから","ストーンエッジ","つるぎのまい","みがわり"]
  },
  289: {
    name: "ケッキング", nameEn: "slaking", types: ["ノーマル"],
    stats: { hp: 150, atk: 160, def: 100, spa: 95, spd: 65, spe: 100 },
    abilities: ["なまけ"], hiddenAbility: null, weight: 130.5,
    moves: ["ギガインパクト","じしん","ほのおのパンチ","れいとうパンチ","かみなりパンチ","すてみタックル","なまける"]
  },
  291: {
    name: "テッカニン", nameEn: "ninjask", types: ["むし", "ひこう"],
    stats: { hp: 61, atk: 90, def: 45, spa: 50, spd: 50, spe: 160 },
    abilities: ["かそく"], hiddenAbility: "すりぬけ", weight: 12.0,
    moves: ["シザークロス","とんぼがえり","つるぎのまい","バトンタッチ","みがわり","まもる"]
  },
  297: {
    name: "ハリテヤマ", nameEn: "hariyama", types: ["かくとう"],
    stats: { hp: 144, atk: 120, def: 60, spa: 40, spd: 60, spe: 50 },
    abilities: ["あついしぼう", "こんじょう"], hiddenAbility: "ちからずく", weight: 253.8,
    moves: ["インファイト","はたきおとす","ばくれつパンチ","じしん","ストーンエッジ","ねこだまし","はらだいこ","ちょうはつ"]
  },
  306: {
    name: "ボスゴドラ", nameEn: "aggron", types: ["はがね", "いわ"],
    stats: { hp: 70, atk: 110, def: 180, spa: 60, spd: 60, spe: 50 },
    abilities: ["がんじょう", "いしあたま"], hiddenAbility: "ヘヴィメタル", weight: 360.0,
    moves: ["ヘビーボンバー","ストーンエッジ","じしん","アクアテール","ステルスロック","ほえる","のろい","でんじは"]
  },
  319: {
    name: "サメハダー", nameEn: "sharpedo", types: ["みず", "あく"],
    stats: { hp: 70, atk: 120, def: 40, spa: 95, spd: 40, spe: 95 },
    abilities: ["さめはだ"], hiddenAbility: "かそく", weight: 88.8,
    moves: ["たきのぼり","かみくだく","こおりのキバ","じしん","まもる","ちょうはつ","ハイドロポンプ","あくのはどう"]
  },
  323: {
    name: "バクーダ", nameEn: "camerupt", types: ["ほのお", "じめん"],
    stats: { hp: 70, atk: 100, def: 70, spa: 105, spd: 75, spe: 40 },
    abilities: ["マグマのよろい", "ハードロック"], hiddenAbility: "いかりのつぼ", weight: 220.0,
    moves: ["ふんか","だいもんじ","じしん","ストーンエッジ","ステルスロック","あくび","ほえる"]
  },
  330: {
    name: "フライゴン", nameEn: "flygon", types: ["じめん", "ドラゴン"],
    stats: { hp: 80, atk: 100, def: 80, spa: 80, spd: 80, spe: 100 },
    abilities: ["ふゆう"], hiddenAbility: null, weight: 82.0,
    moves: ["じしん","げきりん","とんぼがえり","ストーンエッジ","ほのおのパンチ","りゅうのまい","はねやすめ","ばかぢから"]
  },
  334: {
    name: "チルタリス", nameEn: "altaria", types: ["ドラゴン", "ひこう"],
    stats: { hp: 75, atk: 70, def: 90, spa: 70, spd: 105, spe: 80 },
    abilities: ["しぜんかいふく"], hiddenAbility: "ノーてんき", weight: 20.6,
    moves: ["りゅうのはどう","ぼうふう","だいもんじ","じしん","りゅうのまい","はねやすめ","ほろびのうた","コットンガード"]
  },
  344: {
    name: "ネンドール", nameEn: "claydol", types: ["じめん", "エスパー"],
    stats: { hp: 60, atk: 70, def: 105, spa: 70, spd: 120, spe: 75 },
    abilities: ["ふゆう"], hiddenAbility: null, weight: 108.0,
    moves: ["じしん","サイコキネシス","れいとうビーム","ステルスロック","こうそくスピン","だいばくはつ","トリックルーム"]
  },
  346: {
    name: "ユレイドル", nameEn: "cradily", types: ["いわ", "くさ"],
    stats: { hp: 86, atk: 81, def: 97, spa: 81, spd: 107, spe: 43 },
    abilities: ["きゅうばん"], hiddenAbility: "よびみず", weight: 60.4,
    moves: ["ギガドレイン","パワージェム","じしん","のろい","じこさいせい","ステルスロック","やどりぎのタネ"]
  },
  350: {
    name: "ミロカロス", nameEn: "milotic", types: ["みず"],
    stats: { hp: 95, atk: 60, def: 79, spa: 100, spd: 125, spe: 81 },
    abilities: ["ふしぎなうろこ", "かちき"], hiddenAbility: "メロメロボディ", weight: 162.0,
    moves: ["ねっとう","れいとうビーム","りゅうのはどう","ミラーコート","じこさいせい","めいそう","どくどく","さいみんじゅつ"]
  },
  354: {
    name: "ジュペッタ", nameEn: "banette", types: ["ゴースト"],
    stats: { hp: 64, atk: 115, def: 65, spa: 83, spd: 63, spe: 65 },
    abilities: ["ふみん", "おみとおし"], hiddenAbility: "のろわれボディ", weight: 12.5,
    moves: ["シャドークロー","ふいうち","おにび","みちづれ","ちょうはつ","のろい","トリック","シャドーボール"]
  },
  359: {
    name: "アブソル", nameEn: "absol", types: ["あく"],
    stats: { hp: 65, atk: 130, def: 60, spa: 75, spd: 60, spe: 75 },
    abilities: ["プレッシャー", "きょううん"], hiddenAbility: "せいぎのこころ", weight: 47.0,
    moves: ["はたきおとす","ふいうち","じゃれつく","つるぎのまい","ほのおのキバ","サイコカッター","ストーンエッジ"]
  },
  362: {
    name: "オニゴーリ", nameEn: "glalie", types: ["こおり"],
    stats: { hp: 80, atk: 80, def: 80, spa: 80, spd: 80, spe: 80 },
    abilities: ["せいしんりょく", "アイスボディ"], hiddenAbility: "ムラっけ", weight: 256.5,
    moves: ["ふぶき","れいとうビーム","じしん","だいばくはつ","こおりのつぶて","フリーズドライ"]
  },
  365: {
    name: "トドゼルガ", nameEn: "walrein", types: ["こおり", "みず"],
    stats: { hp: 110, atk: 80, def: 90, spa: 95, spd: 90, spe: 65 },
    abilities: ["あついしぼう", "アイスボディ"], hiddenAbility: "どんかん", weight: 150.6,
    moves: ["ふぶき","なみのり","じしん","ぜったいれいど","まもる","みがわり","どくどく"]
  },
  373: {
    name: "ボーマンダ", nameEn: "salamence", types: ["ドラゴン", "ひこう"],
    stats: { hp: 95, atk: 135, def: 80, spa: 110, spd: 80, spe: 100 },
    abilities: ["いかく"], hiddenAbility: "じしんかじょう", weight: 102.6,
    moves: ["げきりん","すてみタックル","じしん","ほのおのキバ","りゅうのまい","はねやすめ","りゅうせいぐん","だいもんじ","ハイドロポンプ"]
  },
  379: {
    name: "レジスチル", nameEn: "registeel", types: ["はがね"],
    stats: { hp: 80, atk: 75, def: 150, spa: 75, spd: 150, spe: 50 },
    abilities: ["クリアボディ"], hiddenAbility: "ライトメタル", weight: 205.0,
    moves: ["アイアンヘッド","ヘビーボンバー","ボディプレス","でんじは","ステルスロック","のろい","ねむる"]
  },
  380: {
    name: "ラティアス", nameEn: "latias", types: ["ドラゴン", "エスパー"],
    stats: { hp: 80, atk: 80, def: 90, spa: 110, spd: 130, spe: 110 },
    abilities: ["ふゆう"], hiddenAbility: null, weight: 40.0,
    moves: ["りゅうせいぐん","サイコキネシス","なみのり","めいそう","じこさいせい","リフレクター","はねやすめ","トリック","ミストボール"]
  },
  381: {
    name: "ラティオス", nameEn: "latios", types: ["ドラゴン", "エスパー"],
    stats: { hp: 80, atk: 90, def: 80, spa: 130, spd: 110, spe: 110 },
    abilities: ["ふゆう"], hiddenAbility: null, weight: 60.0,
    moves: ["りゅうせいぐん","サイコキネシス","なみのり","めいそう","じこさいせい","トリック","はねやすめ","ラスターパージ"]
  },
  382: {
    name: "カイオーガ", nameEn: "kyogre", types: ["みず"],
    stats: { hp: 100, atk: 100, def: 90, spa: 150, spd: 140, spe: 90 },
    abilities: ["あめふらし"], hiddenAbility: null, weight: 352.0,
    moves: ["しおふき","ハイドロポンプ","かみなり","れいとうビーム","めいそう","こんげんのはどう"]
  },
  383: {
    name: "グラードン", nameEn: "groudon", types: ["じめん"],
    stats: { hp: 100, atk: 150, def: 140, spa: 100, spd: 90, spe: 90 },
    abilities: ["ひでり"], hiddenAbility: null, weight: 950.0,
    moves: ["じしん","だんがいのつるぎ","ストーンエッジ","ほのおのパンチ","つるぎのまい","ステルスロック","ソーラービーム","だいもんじ"]
  },
  385: {
    name: "ジラーチ", nameEn: "jirachi", types: ["はがね", "エスパー"],
    stats: { hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100 },
    abilities: ["てんのめぐみ"], hiddenAbility: null, weight: 1.1,
    moves: ["アイアンヘッド","しねんのずつき","とんぼがえり","ステルスロック","でんじは","ねがいごと","はどうだん","トリック","めいそう"]
  },
  // === 追加ポケモン: 第4世代 ===
  389: {
    name: "ドダイトス", nameEn: "torterra", types: ["くさ", "じめん"],
    stats: { hp: 95, atk: 109, def: 105, spa: 75, spd: 85, spe: 56 },
    abilities: ["しんりょく"], hiddenAbility: "シェルアーマー", weight: 310.0,
    moves: ["じしん","ウッドハンマー","ストーンエッジ","ステルスロック","のろい","こうごうせい","ばかぢから"]
  },
  392: {
    name: "ゴウカザル", nameEn: "infernape", types: ["ほのお", "かくとう"],
    stats: { hp: 76, atk: 104, def: 71, spa: 104, spd: 71, spe: 108 },
    abilities: ["もうか"], hiddenAbility: "てつのこぶし", weight: 55.0,
    moves: ["インファイト","フレアドライブ","マッハパンチ","じしん","ストーンエッジ","とんぼがえり","つるぎのまい","わるだくみ","オーバーヒート","くさむすび"]
  },
  395: {
    name: "エンペルト", nameEn: "empoleon", types: ["みず", "はがね"],
    stats: { hp: 84, atk: 86, def: 88, spa: 111, spd: 101, spe: 60 },
    abilities: ["げきりゅう"], hiddenAbility: "まけんき", weight: 84.5,
    moves: ["ハイドロポンプ","ラスターカノン","れいとうビーム","くさむすび","ステルスロック","あくび","がんせきふうじ","アクアジェット"]
  },
  398: {
    name: "ムクホーク", nameEn: "staraptor", types: ["ノーマル", "ひこう"],
    stats: { hp: 85, atk: 120, def: 70, spa: 50, spd: 60, spe: 100 },
    abilities: ["いかく"], hiddenAbility: "すてみ", weight: 24.9,
    moves: ["ブレイブバード","すてみタックル","インファイト","とんぼがえり","でんこうせっか","ふきとばし"]
  },
  407: {
    name: "ロズレイド", nameEn: "roserade", types: ["くさ", "どく"],
    stats: { hp: 60, atk: 70, def: 65, spa: 125, spd: 105, spe: 90 },
    abilities: ["しぜんかいふく", "どくのトゲ"], hiddenAbility: "テクニシャン", weight: 14.5,
    moves: ["ギガドレイン","ヘドロばくだん","シャドーボール","どくびし","ねむりごな","やどりぎのタネ","こうごうせい","マジカルリーフ"]
  },
  416: {
    name: "ビークイン", nameEn: "vespiquen", types: ["むし", "ひこう"],
    stats: { hp: 70, atk: 80, def: 102, spa: 80, spd: 102, spe: 40 },
    abilities: ["プレッシャー"], hiddenAbility: "きんちょうかん", weight: 38.5,
    moves: ["むしのさざめき","エアスラッシュ","どくどく","まもる","はねやすめ","ちょうはつ"]
  },
  423: {
    name: "トリトドン", nameEn: "gastrodon", types: ["みず", "じめん"],
    stats: { hp: 111, atk: 83, def: 68, spa: 92, spd: 82, spe: 39 },
    abilities: ["ねんちゃく", "よびみず"], hiddenAbility: "すなのちから", weight: 29.9,
    moves: ["じしん","ねっとう","れいとうビーム","クリアスモッグ","じこさいせい","あくび","ミラーコート","カウンター"]
  },
  426: {
    name: "フワライド", nameEn: "drifblim", types: ["ゴースト", "ひこう"],
    stats: { hp: 150, atk: 80, def: 44, spa: 90, spd: 54, spe: 80 },
    abilities: ["ゆうばく", "かるわざ"], hiddenAbility: "ねつぼうそう", weight: 15.0,
    moves: ["シャドーボール","めいそう","ちいさくなる","バトンタッチ","おにび","みちづれ","でんじは"]
  },
  428: {
    name: "ミミロップ", nameEn: "lopunny", types: ["ノーマル"],
    stats: { hp: 65, atk: 76, def: 84, spa: 54, spd: 96, spe: 105 },
    abilities: ["メロメロボディ", "ぶきよう"], hiddenAbility: "じゅうなん", weight: 33.3,
    moves: ["おんがえし","とびひざげり","れいとうパンチ","ほのおのパンチ","でんこうせっか","アンコール","バトンタッチ","すてみタックル"]
  },
  430: {
    name: "ドンカラス", nameEn: "honchkrow", types: ["あく", "ひこう"],
    stats: { hp: 100, atk: 125, def: 52, spa: 105, spd: 52, spe: 71 },
    abilities: ["ふみん", "きょううん"], hiddenAbility: "じしんかじょう", weight: 27.3,
    moves: ["ブレイブバード","ふいうち","はたきおとす","ねっぷう","ちょうはつ","おいかぜ","でんじは"]
  },
  437: {
    name: "ドータクン", nameEn: "bronzong", types: ["はがね", "エスパー"],
    stats: { hp: 67, atk: 89, def: 116, spa: 79, spd: 116, spe: 33 },
    abilities: ["ふゆう", "たいねつ"], hiddenAbility: "ヘヴィメタル", weight: 187.0,
    moves: ["ジャイロボール","サイコキネシス","じしん","だいばくはつ","ステルスロック","トリックルーム","ひかりのかべ","リフレクター"]
  },
  442: {
    name: "ミカルゲ", nameEn: "spiritomb", types: ["ゴースト", "あく"],
    stats: { hp: 50, atk: 92, def: 108, spa: 92, spd: 108, spe: 35 },
    abilities: ["プレッシャー"], hiddenAbility: "すりぬけ", weight: 108.0,
    moves: ["シャドーボール","あくのはどう","ふいうち","おにび","のろい","いたみわけ","めいそう","みちづれ"]
  },
  450: {
    name: "カバルドン", nameEn: "hippowdon", types: ["じめん"],
    stats: { hp: 108, atk: 112, def: 118, spa: 68, spd: 72, spe: 47 },
    abilities: ["すなおこし"], hiddenAbility: "すなのちから", weight: 300.0,
    moves: ["じしん","ストーンエッジ","こおりのキバ","なまける","ステルスロック","ふきとばし","あくび"]
  },
  452: {
    name: "ドラピオン", nameEn: "drapion", types: ["どく", "あく"],
    stats: { hp: 70, atk: 90, def: 110, spa: 60, spd: 75, spe: 95 },
    abilities: ["カブトアーマー", "スナイパー"], hiddenAbility: "するどいめ", weight: 61.5,
    moves: ["はたきおとす","どくづき","じしん","アクアテール","つるぎのまい","ちょうはつ","どくびし","ふいうち"]
  },
  460: {
    name: "ユキノオー", nameEn: "abomasnow", types: ["くさ", "こおり"],
    stats: { hp: 90, atk: 92, def: 75, spa: 92, spd: 85, spe: 60 },
    abilities: ["ゆきふらし"], hiddenAbility: "ぼうおん", weight: 135.5,
    moves: ["ふぶき","ギガドレイン","ウッドハンマー","じしん","れいとうパンチ","こおりのつぶて","やどりぎのタネ","オーロラベール"]
  },
  461: {
    name: "マニューラ", nameEn: "weavile", types: ["あく", "こおり"],
    stats: { hp: 70, atk: 120, def: 65, spa: 45, spd: 85, spe: 125 },
    abilities: ["プレッシャー"], hiddenAbility: "わるいてぐせ", weight: 34.0,
    moves: ["はたきおとす","つららおとし","こおりのつぶて","けたぐり","どくづき","ねこだまし","つるぎのまい","ちょうはつ"]
  },
  462: {
    name: "ジバコイル", nameEn: "magnezone", types: ["でんき", "はがね"],
    stats: { hp: 70, atk: 70, def: 115, spa: 130, spd: 90, spe: 60 },
    abilities: ["じりょく", "がんじょう"], hiddenAbility: "アナライズ", weight: 180.0,
    moves: ["10まんボルト","ラスターカノン","ボルトチェンジ","でんじは","みがわり","てっぺき","ミラーコート"]
  },
  466: {
    name: "エレキブル", nameEn: "electivire", types: ["でんき"],
    stats: { hp: 75, atk: 123, def: 67, spa: 95, spd: 85, spe: 95 },
    abilities: ["でんきエンジン"], hiddenAbility: "やるき", weight: 138.6,
    moves: ["ワイルドボルト","れいとうパンチ","クロスチョップ","じしん","ほのおのパンチ","ボルトチェンジ","でんこうせっか"]
  },
  467: {
    name: "ブーバーン", nameEn: "magmortar", types: ["ほのお"],
    stats: { hp: 75, atk: 95, def: 67, spa: 125, spd: 95, spe: 83 },
    abilities: ["ほのおのからだ"], hiddenAbility: "やるき", weight: 68.0,
    moves: ["だいもんじ","かえんほうしゃ","10まんボルト","きあいだま","サイコキネシス","おにび","ねっぷう"]
  },
  468: {
    name: "トゲキッス", nameEn: "togekiss", types: ["フェアリー", "ひこう"],
    stats: { hp: 85, atk: 50, def: 95, spa: 120, spd: 115, spe: 80 },
    abilities: ["はりきり", "てんのめぐみ"], hiddenAbility: "きょううん", weight: 38.0,
    moves: ["エアスラッシュ","マジカルシャイン","だいもんじ","はどうだん","でんじは","わるだくみ","はねやすめ","トリック","おいかぜ"]
  },
  471: {
    name: "グレイシア", nameEn: "glaceon", types: ["こおり"],
    stats: { hp: 65, atk: 60, def: 110, spa: 130, spd: 95, spe: 65 },
    abilities: ["ゆきがくれ"], hiddenAbility: "アイスボディ", weight: 25.9,
    moves: ["ふぶき","れいとうビーム","シャドーボール","みずのはどう","あくび","バトンタッチ","ミラーコート","こおりのつぶて"]
  },
  472: {
    name: "グライオン", nameEn: "gliscor", types: ["じめん", "ひこう"],
    stats: { hp: 75, atk: 95, def: 125, spa: 45, spd: 75, spe: 95 },
    abilities: ["かいりきバサミ", "すながくれ"], hiddenAbility: "ポイズンヒール", weight: 42.5,
    moves: ["じしん","はたきおとす","どくどく","まもる","みがわり","つるぎのまい","こおりのキバ","ステルスロック"]
  },
  474: {
    name: "ポリゴンZ", nameEn: "porygon-z", types: ["ノーマル"],
    stats: { hp: 85, atk: 80, def: 70, spa: 135, spd: 75, spe: 90 },
    abilities: ["てきおうりょく", "ダウンロード"], hiddenAbility: "アナライズ", weight: 34.0,
    moves: ["トライアタック","シャドーボール","10まんボルト","れいとうビーム","わるだくみ","こうそくいどう","トリック","テクスチャー"]
  },
  475: {
    name: "エルレイド", nameEn: "gallade", types: ["エスパー", "かくとう"],
    stats: { hp: 68, atk: 125, def: 65, spa: 65, spd: 115, spe: 80 },
    abilities: ["ふくつのこころ"], hiddenAbility: "せいぎのこころ", weight: 52.0,
    moves: ["インファイト","しねんのずつき","はたきおとす","つるぎのまい","かげうち","リーフブレード","れいとうパンチ","トリック"]
  },
  477: {
    name: "ヨノワール", nameEn: "dusknoir", types: ["ゴースト"],
    stats: { hp: 45, atk: 100, def: 135, spa: 65, spd: 135, spe: 45 },
    abilities: ["プレッシャー"], hiddenAbility: "おみとおし", weight: 106.6,
    moves: ["シャドーパンチ","かげうち","ほのおのパンチ","れいとうパンチ","じしん","トリックルーム","おにび","いたみわけ"]
  },
  478: {
    name: "ユキメノコ", nameEn: "froslass", types: ["こおり", "ゴースト"],
    stats: { hp: 70, atk: 80, def: 70, spa: 80, spd: 70, spe: 110 },
    abilities: ["ゆきがくれ"], hiddenAbility: "のろわれボディ", weight: 26.6,
    moves: ["ふぶき","シャドーボール","まきびし","ちょうはつ","みちづれ","でんじは","こおりのつぶて","おにび"]
  },
  480: {
    name: "ユクシー", nameEn: "uxie", types: ["エスパー"],
    stats: { hp: 75, atk: 75, def: 130, spa: 75, spd: 130, spe: 95 },
    abilities: ["ふゆう"], hiddenAbility: null, weight: 0.3,
    moves: ["サイコキネシス","ステルスロック","あくび","でんじは","リフレクター","ひかりのかべ","トリック","とんぼがえり"]
  },
  483: {
    name: "ディアルガ", nameEn: "dialga", types: ["はがね", "ドラゴン"],
    stats: { hp: 100, atk: 120, def: 120, spa: 150, spd: 100, spe: 90 },
    abilities: ["プレッシャー"], hiddenAbility: "テレパシー", weight: 683.0,
    moves: ["ときのほうこう","りゅうせいぐん","ラスターカノン","だいもんじ","10まんボルト","れいとうビーム","ステルスロック","でんじは"]
  },
  484: {
    name: "パルキア", nameEn: "palkia", types: ["みず", "ドラゴン"],
    stats: { hp: 90, atk: 120, def: 100, spa: 150, spd: 120, spe: 100 },
    abilities: ["プレッシャー"], hiddenAbility: "テレパシー", weight: 336.0,
    moves: ["あくうせつだん","りゅうせいぐん","ハイドロポンプ","だいもんじ","10まんボルト","じしん"]
  },
  485: {
    name: "ヒードラン", nameEn: "heatran", types: ["ほのお", "はがね"],
    stats: { hp: 91, atk: 90, def: 106, spa: 130, spd: 106, spe: 77 },
    abilities: ["もらいび"], hiddenAbility: "ほのおのからだ", weight: 430.0,
    moves: ["マグマストーム","だいもんじ","ラスターカノン","だいちのちから","ステルスロック","おにび","ちょうはつ","ふんえん"]
  },
  487: {
    name: "ギラティナ", nameEn: "giratina-altered", types: ["ゴースト", "ドラゴン"],
    stats: { hp: 150, atk: 100, def: 120, spa: 100, spd: 120, spe: 90 },
    abilities: ["プレッシャー"], hiddenAbility: "テレパシー", weight: 750.0,
    moves: ["シャドーダイブ","りゅうせいぐん","りゅうのはどう","おにび","でんじは","はねやすめ","みちづれ"]
  },
  491: {
    name: "ダークライ", nameEn: "darkrai", types: ["あく"],
    stats: { hp: 70, atk: 90, def: 90, spa: 135, spd: 90, spe: 125 },
    abilities: ["ナイトメア"], hiddenAbility: null, weight: 50.5,
    moves: ["あくのはどう","ダークホール","わるだくみ","きあいだま","シャドーボール","サイコキネシス","ちょうはつ","みがわり"]
  },
  493: {
    name: "アルセウス", nameEn: "arceus", types: ["ノーマル"],
    stats: { hp: 120, atk: 120, def: 120, spa: 120, spd: 120, spe: 120 },
    abilities: ["マルチタイプ"], hiddenAbility: null, weight: 320.0,
    moves: ["さばきのつぶて","じしん","シャドークロー","しんそく","つるぎのまい","めいそう","じこさいせい","ステルスロック","おにび","でんじは"]
  },
  // === 追加ポケモン: 第5世代 ===
  530: {
    name: "ドリュウズ", nameEn: "excadrill", types: ["じめん", "はがね"],
    stats: { hp: 110, atk: 135, def: 60, spa: 50, spd: 65, spe: 88 },
    abilities: ["すなかき", "すなのちから"], hiddenAbility: "かたやぶり", weight: 40.4,
    moves: ["じしん","アイアンヘッド","いわなだれ","つるぎのまい","こうそくスピン","ステルスロック","つのドリル","ロックブラスト"]
  },
  534: {
    name: "ローブシン", nameEn: "conkeldurr", types: ["かくとう"],
    stats: { hp: 105, atk: 140, def: 95, spa: 55, spd: 65, spe: 45 },
    abilities: ["こんじょう", "ちからずく"], hiddenAbility: "てつのこぶし", weight: 87.0,
    moves: ["ドレインパンチ","マッハパンチ","はたきおとす","じしん","ストーンエッジ","ばかぢから","ビルドアップ"]
  },
  545: {
    name: "ペンドラー", nameEn: "scolipede", types: ["むし", "どく"],
    stats: { hp: 60, atk: 100, def: 89, spa: 55, spd: 69, spe: 112 },
    abilities: ["どくのトゲ", "むしのしらせ"], hiddenAbility: "かそく", weight: 200.5,
    moves: ["メガホーン","どくづき","じしん","ばかぢから","つるぎのまい","まもる","バトンタッチ","どくびし"]
  },
  547: {
    name: "エルフーン", nameEn: "whimsicott", types: ["くさ", "フェアリー"],
    stats: { hp: 60, atk: 67, def: 85, spa: 77, spd: 75, spe: 116 },
    abilities: ["いたずらごころ", "すりぬけ"], hiddenAbility: "ようりょくそ", weight: 6.6,
    moves: ["ムーンフォース","エナジーボール","アンコール","ちょうはつ","おいかぜ","やどりぎのタネ","みがわり","がむしゃら"]
  },
  553: {
    name: "ワルビアル", nameEn: "krookodile", types: ["じめん", "あく"],
    stats: { hp: 95, atk: 117, def: 80, spa: 65, spd: 70, spe: 92 },
    abilities: ["いかく", "じしんかじょう"], hiddenAbility: "いかりのつぼ", weight: 96.3,
    moves: ["じしん","はたきおとす","ストーンエッジ","ばかぢから","ちょうはつ","ステルスロック","ふいうち","アイアンテール"]
  },
  555: {
    name: "ヒヒダルマ", nameEn: "darmanitan", types: ["ほのお"],
    stats: { hp: 105, atk: 140, def: 55, spa: 30, spd: 55, spe: 95 },
    abilities: ["ちからずく"], hiddenAbility: "ダルマモード", weight: 92.9,
    moves: ["フレアドライブ","ばかぢから","いわなだれ","じしん","とんぼがえり","ほのおのパンチ"]
  },
  563: {
    name: "デスカーン", nameEn: "cofagrigus", types: ["ゴースト"],
    stats: { hp: 58, atk: 50, def: 145, spa: 95, spd: 105, spe: 30 },
    abilities: ["ミイラ"], hiddenAbility: null, weight: 76.5,
    moves: ["シャドーボール","おにび","のろい","いたみわけ","トリックルーム","どくどく","パワーシェア","めいそう"]
  },
  571: {
    name: "ゾロアーク", nameEn: "zoroark", types: ["あく"],
    stats: { hp: 60, atk: 105, def: 60, spa: 120, spd: 60, spe: 105 },
    abilities: ["イリュージョン"], hiddenAbility: null, weight: 81.1,
    moves: ["あくのはどう","きあいだま","かえんほうしゃ","くさむすび","ちょうはつ","わるだくみ","ふいうち","とんぼがえり"]
  },
  579: {
    name: "ランクルス", nameEn: "reuniclus", types: ["エスパー"],
    stats: { hp: 110, atk: 65, def: 75, spa: 125, spd: 85, spe: 30 },
    abilities: ["ぼうじん", "マジックガード"], hiddenAbility: "さいせいりょく", weight: 20.1,
    moves: ["サイコキネシス","きあいだま","シャドーボール","めいそう","じこさいせい","トリックルーム","サイコショック"]
  },
  584: {
    name: "バイバニラ", nameEn: "vanilluxe", types: ["こおり"],
    stats: { hp: 71, atk: 95, def: 85, spa: 110, spd: 95, spe: 79 },
    abilities: ["アイスボディ", "ゆきふらし"], hiddenAbility: "くだけるよろい", weight: 57.5,
    moves: ["ふぶき","フリーズドライ","こおりのつぶて","だいばくはつ","ミラーコート","オーロラベール"]
  },
  593: {
    name: "ブルンゲル", nameEn: "jellicent", types: ["みず", "ゴースト"],
    stats: { hp: 100, atk: 60, def: 70, spa: 85, spd: 105, spe: 60 },
    abilities: ["ちょすい", "のろわれボディ"], hiddenAbility: "しめりけ", weight: 135.0,
    moves: ["ねっとう","シャドーボール","れいとうビーム","おにび","じこさいせい","ちからをすいとる","トリック"]
  },
  609: {
    name: "シャンデラ", nameEn: "chandelure", types: ["ゴースト", "ほのお"],
    stats: { hp: 60, atk: 55, def: 90, spa: 145, spd: 90, spe: 80 },
    abilities: ["もらいび", "ほのおのからだ"], hiddenAbility: "すりぬけ", weight: 34.3,
    moves: ["シャドーボール","だいもんじ","オーバーヒート","エナジーボール","サイコキネシス","トリック","おにび","ちいさくなる"]
  },
  612: {
    name: "オノノクス", nameEn: "haxorus", types: ["ドラゴン"],
    stats: { hp: 76, atk: 147, def: 90, spa: 60, spd: 70, spe: 97 },
    abilities: ["とうそうしん", "かたやぶり"], hiddenAbility: "きんちょうかん", weight: 105.5,
    moves: ["げきりん","じしん","どくづき","アイアンテール","ばかぢから","りゅうのまい","つるぎのまい","アクアテール"]
  },
  620: {
    name: "コジョンド", nameEn: "mienshao", types: ["かくとう"],
    stats: { hp: 65, atk: 125, def: 60, spa: 95, spd: 60, spe: 105 },
    abilities: ["せいしんりょく", "さいせいりょく"], hiddenAbility: "すてみ", weight: 35.5,
    moves: ["とびひざげり","はたきおとす","ストーンエッジ","ねこだまし","とんぼがえり","ちょうはつ","きあいだま"]
  },
  625: {
    name: "キリキザン", nameEn: "bisharp", types: ["あく", "はがね"],
    stats: { hp: 65, atk: 125, def: 100, spa: 60, spd: 70, spe: 70 },
    abilities: ["まけんき", "せいしんりょく"], hiddenAbility: "プレッシャー", weight: 70.0,
    moves: ["アイアンヘッド","はたきおとす","ふいうち","つるぎのまい","ステルスロック","でんじは","ちょうはつ"]
  },
  630: {
    name: "バルジーナ", nameEn: "mandibuzz", types: ["あく", "ひこう"],
    stats: { hp: 110, atk: 65, def: 105, spa: 55, spd: 95, spe: 80 },
    abilities: ["おおきなつばさ", "ぼうじん"], hiddenAbility: "くだけるよろい", weight: 39.5,
    moves: ["イカサマ","はたきおとす","とんぼがえり","はねやすめ","ちょうはつ","どくどく","おいかぜ","ボーンラッシュ"]
  },
  636: {
    name: "メラルバ", nameEn: "larvesta", types: ["むし", "ほのお"],
    stats: { hp: 55, atk: 85, def: 55, spa: 50, spd: 55, spe: 60 },
    abilities: ["ほのおのからだ"], hiddenAbility: "むしのしらせ", weight: 28.8,
    moves: ["フレアドライブ","とんぼがえり","ニトロチャージ","おにび","あさのひざし"]
  },
  638: {
    name: "コバルオン", nameEn: "cobalion", types: ["はがね", "かくとう"],
    stats: { hp: 91, atk: 90, def: 129, spa: 90, spd: 72, spe: 108 },
    abilities: ["せいぎのこころ"], hiddenAbility: null, weight: 250.0,
    moves: ["インファイト","アイアンヘッド","ストーンエッジ","ステルスロック","ちょうはつ","でんじは","ボルトチェンジ"]
  },
  639: {
    name: "テラキオン", nameEn: "terrakion", types: ["いわ", "かくとう"],
    stats: { hp: 91, atk: 129, def: 90, spa: 72, spd: 90, spe: 108 },
    abilities: ["せいぎのこころ"], hiddenAbility: null, weight: 260.0,
    moves: ["インファイト","ストーンエッジ","じしん","つるぎのまい","ステルスロック","でんこうせっか","がんせきふうじ"]
  },
  641: {
    name: "トルネロス", nameEn: "tornadus", types: ["ひこう"],
    stats: { hp: 79, atk: 115, def: 70, spa: 125, spd: 80, spe: 111 },
    abilities: ["いたずらごころ"], hiddenAbility: "まけんき", weight: 63.0,
    moves: ["ぼうふう","きあいだま","くさむすび","ねっぷう","ちょうはつ","おいかぜ","とんぼがえり"]
  },
  642: {
    name: "ボルトロス", nameEn: "thundurus", types: ["でんき", "ひこう"],
    stats: { hp: 79, atk: 115, def: 70, spa: 125, spd: 80, spe: 111 },
    abilities: ["いたずらごころ"], hiddenAbility: "まけんき", weight: 61.0,
    moves: ["10まんボルト","きあいだま","くさむすび","ねっぷう","わるだくみ","ちょうはつ","でんじは","ボルトチェンジ"]
  },
  645: {
    name: "ランドロス", nameEn: "landorus", types: ["じめん", "ひこう"],
    stats: { hp: 89, atk: 125, def: 90, spa: 115, spd: 80, spe: 101 },
    abilities: ["すなのちから"], hiddenAbility: "ちからずく", weight: 68.0,
    moves: ["じしん","ストーンエッジ","とんぼがえり","ばかぢから","だいちのちから","きあいだま","つるぎのまい","ステルスロック","いわなだれ"]
  },
  646: {
    name: "キュレム", nameEn: "kyurem", types: ["ドラゴン", "こおり"],
    stats: { hp: 125, atk: 130, def: 90, spa: 130, spd: 90, spe: 95 },
    abilities: ["プレッシャー"], hiddenAbility: null, weight: 325.0,
    moves: ["れいとうビーム","りゅうせいぐん","じしん","アイアンヘッド","りゅうのまい","こごえるせかい","ふぶき"]
  },
  649: {
    name: "ゲノセクト", nameEn: "genesect", types: ["むし", "はがね"],
    stats: { hp: 71, atk: 120, def: 95, spa: 120, spd: 95, spe: 99 },
    abilities: ["ダウンロード"], hiddenAbility: null, weight: 82.5,
    moves: ["テクノバスター","アイアンヘッド","シザークロス","とんぼがえり","れいとうビーム","だいもんじ","10まんボルト","ストーンエッジ"]
  },
  // === 追加ポケモン: 第6世代 ===
  652: {
    name: "ブリガロン", nameEn: "chesnaught", types: ["くさ", "かくとう"],
    stats: { hp: 88, atk: 107, def: 122, spa: 74, spd: 75, spe: 64 },
    abilities: ["しんりょく"], hiddenAbility: "ぼうだん", weight: 90.0,
    moves: ["ウッドハンマー","ばかぢから","ストーンエッジ","ドレインパンチ","やどりぎのタネ","まきびし","ニードルガード"]
  },
  655: {
    name: "マフォクシー", nameEn: "delphox", types: ["ほのお", "エスパー"],
    stats: { hp: 75, atk: 69, def: 72, spa: 114, spd: 100, spe: 104 },
    abilities: ["もうか"], hiddenAbility: "マジシャン", weight: 39.0,
    moves: ["だいもんじ","サイコキネシス","くさむすび","シャドーボール","おにび","めいそう","みがわり","トリック"]
  },
  663: {
    name: "ファイアロー", nameEn: "talonflame", types: ["ほのお", "ひこう"],
    stats: { hp: 78, atk: 81, def: 71, spa: 74, spd: 69, spe: 126 },
    abilities: ["ほのおのからだ"], hiddenAbility: "はやてのつばさ", weight: 24.5,
    moves: ["ブレイブバード","フレアドライブ","つるぎのまい","はねやすめ","おにび","でんこうせっか","とんぼがえり","ちょうはつ"]
  },
  671: {
    name: "フラージェス", nameEn: "florges", types: ["フェアリー"],
    stats: { hp: 78, atk: 65, def: 68, spa: 112, spd: 154, spe: 75 },
    abilities: ["フラワーベール"], hiddenAbility: "きょうせい", weight: 10.0,
    moves: ["ムーンフォース","サイコキネシス","めいそう","ねがいごと","アロマセラピー","まもる","みがわり"]
  },
  673: {
    name: "ゴーゴート", nameEn: "gogoat", types: ["くさ"],
    stats: { hp: 123, atk: 100, def: 62, spa: 97, spd: 81, spe: 68 },
    abilities: ["そうしょく"], hiddenAbility: "くさのけがわ", weight: 91.0,
    moves: ["ウッドホーン","じしん","いわなだれ","ミルクのみ","やどりぎのタネ","ビルドアップ"]
  },
  676: {
    name: "トリミアン", nameEn: "furfrou", types: ["ノーマル"],
    stats: { hp: 75, atk: 80, def: 60, spa: 65, spd: 90, spe: 102 },
    abilities: ["ファーコート"], hiddenAbility: null, weight: 28.0,
    moves: ["おんがえし","ワイルドボルト","とんぼがえり","コットンガード","でんじは","ちょうはつ"]
  },
  689: {
    name: "ガメノデス", nameEn: "barbaracle", types: ["いわ", "みず"],
    stats: { hp: 72, atk: 105, def: 115, spa: 54, spd: 86, spe: 68 },
    abilities: ["かたいツメ", "スナイパー"], hiddenAbility: "わるいてぐせ", weight: 96.0,
    moves: ["ストーンエッジ","たきのぼり","シザークロス","じしん","からをやぶる","ステルスロック"]
  },
  691: {
    name: "ドラミドロ", nameEn: "dragalge", types: ["どく", "ドラゴン"],
    stats: { hp: 65, atk: 75, def: 90, spa: 97, spd: 123, spe: 44 },
    abilities: ["どくのトゲ", "どくしゅ"], hiddenAbility: "てきおうりょく", weight: 81.5,
    moves: ["りゅうせいぐん","ヘドロウェーブ","りゅうのはどう","ハイドロポンプ","どくびし","ちょうはつ"]
  },
  697: {
    name: "ガチゴラス", nameEn: "tyrantrum", types: ["いわ", "ドラゴン"],
    stats: { hp: 82, atk: 121, def: 119, spa: 69, spd: 59, spe: 71 },
    abilities: ["がんじょうあご"], hiddenAbility: "いしあたま", weight: 270.0,
    moves: ["げきりん","ストーンエッジ","じしん","こおりのキバ","りゅうのまい","ステルスロック","ほのおのキバ"]
  },
  707: {
    name: "クレッフィ", nameEn: "klefki", types: ["はがね", "フェアリー"],
    stats: { hp: 57, atk: 80, def: 91, spa: 80, spd: 87, spe: 75 },
    abilities: ["いたずらごころ"], hiddenAbility: "マジシャン", weight: 3.0,
    moves: ["じゃれつく","イカサマ","でんじは","まきびし","ちょうはつ","リフレクター","ひかりのかべ","トリック"]
  },
  715: {
    name: "オンバーン", nameEn: "noivern", types: ["ひこう", "ドラゴン"],
    stats: { hp: 85, atk: 70, def: 80, spa: 97, spd: 80, spe: 123 },
    abilities: ["おみとおし", "すりぬけ"], hiddenAbility: "テレパシー", weight: 85.0,
    moves: ["りゅうせいぐん","ぼうふう","だいもんじ","とんぼがえり","ちょうはつ","はねやすめ","ばくおんぱ"]
  },
  716: {
    name: "ゼルネアス", nameEn: "xerneas", types: ["フェアリー"],
    stats: { hp: 126, atk: 131, def: 95, spa: 131, spd: 98, spe: 99 },
    abilities: ["フェアリーオーラ"], hiddenAbility: null, weight: 215.0,
    moves: ["ムーンフォース","ジオコントロール","かみなり","きあいだま","くさむすび","サイコキネシス","めいそう","ちょうはつ"]
  },
  717: {
    name: "イベルタル", nameEn: "yveltal", types: ["あく", "ひこう"],
    stats: { hp: 126, atk: 131, def: 95, spa: 131, spd: 98, spe: 99 },
    abilities: ["ダークオーラ"], hiddenAbility: null, weight: 203.0,
    moves: ["デスウイング","あくのはどう","ふいうち","ちょうはつ","おいかぜ","はねやすめ","ねっぷう","きあいだま"]
  },
  718: {
    name: "ジガルデ", nameEn: "zygarde", types: ["ドラゴン", "じめん"],
    stats: { hp: 108, atk: 100, def: 121, spa: 81, spd: 95, spe: 95 },
    abilities: ["オーラブレイク"], hiddenAbility: "スワームチェンジ", weight: 305.0,
    moves: ["サウザンアロー","げきりん","ストーンエッジ","しんそく","りゅうのまい","とぐろをまく","でんじは"]
  },
  // === 追加ポケモン: 第7世代 ===
  724: {
    name: "ジュナイパー", nameEn: "decidueye", types: ["くさ", "ゴースト"],
    stats: { hp: 78, atk: 107, def: 75, spa: 100, spd: 100, spe: 70 },
    abilities: ["しんりょく"], hiddenAbility: "えんかく", weight: 36.6,
    moves: ["リーフブレード","ゴーストダイブ","ふいうち","とんぼがえり","つるぎのまい","はねやすめ","かげぬい"]
  },
  727: {
    name: "ガオガエン", nameEn: "incineroar", types: ["ほのお", "あく"],
    stats: { hp: 95, atk: 115, def: 90, spa: 80, spd: 90, spe: 60 },
    abilities: ["もうか"], hiddenAbility: "いかく", weight: 83.0,
    moves: ["フレアドライブ","DDラリアット","はたきおとす","じしん","とんぼがえり","ちょうはつ","おにび","ねこだまし","ビルドアップ"]
  },
  733: {
    name: "ドデカバシ", nameEn: "toucannon", types: ["ノーマル", "ひこう"],
    stats: { hp: 80, atk: 120, def: 75, spa: 75, spd: 75, spe: 60 },
    abilities: ["するどいめ", "スキルリンク"], hiddenAbility: "ちからずく", weight: 26.0,
    moves: ["くちばしキャノン","ブレイブバード","タネマシンガン","ロックブラスト","つるぎのまい","はねやすめ"]
  },
  738: {
    name: "クワガノン", nameEn: "vikavolt", types: ["むし", "でんき"],
    stats: { hp: 77, atk: 70, def: 90, spa: 145, spd: 75, spe: 43 },
    abilities: ["ふゆう"], hiddenAbility: null, weight: 45.0,
    moves: ["10まんボルト","むしのさざめき","エナジーボール","ボルトチェンジ","でんじは","ねばねばネット","マッドショット"]
  },
  743: {
    name: "アブリボン", nameEn: "ribombee", types: ["むし", "フェアリー"],
    stats: { hp: 60, atk: 55, def: 60, spa: 95, spd: 70, spe: 124 },
    abilities: ["みつあつめ", "りんぷん"], hiddenAbility: "スイートベール", weight: 0.5,
    moves: ["ムーンフォース","むしのさざめき","サイコキネシス","エナジーボール","ふんじん","しびれごな","ちょうのまい"]
  },
  745: {
    name: "ルガルガン(まひる)", nameEn: "lycanroc-midday", types: ["いわ"],
    stats: { hp: 75, atk: 115, def: 65, spa: 55, spd: 65, spe: 112 },
    abilities: ["するどいめ", "すなかき"], hiddenAbility: "ふくつのこころ", weight: 25.0,
    moves: ["ストーンエッジ","アクセルロック","インファイト","かみくだく","つるぎのまい","ステルスロック","ちょうはつ"]
  },
  750: {
    name: "バンバドロ", nameEn: "mudsdale", types: ["じめん"],
    stats: { hp: 100, atk: 125, def: 100, spa: 55, spd: 85, spe: 35 },
    abilities: ["マイペース", "じきゅうりょく"], hiddenAbility: "せいしんりょく", weight: 920.0,
    moves: ["じしん","10まんばりき","ヘビーボンバー","いわなだれ","ステルスロック","のろい"]
  },
  752: {
    name: "オニシズクモ", nameEn: "araquanid", types: ["みず", "むし"],
    stats: { hp: 68, atk: 70, def: 92, spa: 50, spd: 132, spe: 42 },
    abilities: ["すいほう"], hiddenAbility: "ちょすい", weight: 82.0,
    moves: ["たきのぼり","きゅうけつ","ミラーコート","ねばねばネット","どくどく","みがわり"]
  },
  758: {
    name: "エンニュート", nameEn: "salazzle", types: ["どく", "ほのお"],
    stats: { hp: 68, atk: 64, def: 60, spa: 111, spd: 60, spe: 117 },
    abilities: ["ふしょく"], hiddenAbility: "どんかん", weight: 22.2,
    moves: ["かえんほうしゃ","ヘドロウェーブ","りゅうのはどう","わるだくみ","アンコール","どくどく","ちょうはつ"]
  },
  773: {
    name: "シルヴァディ", nameEn: "silvally", types: ["ノーマル"],
    stats: { hp: 95, atk: 95, def: 95, spa: 95, spd: 95, spe: 95 },
    abilities: ["ARシステム"], hiddenAbility: null, weight: 100.5,
    moves: ["すてみタックル","かみくだく","れいとうビーム","かえんほうしゃ","10まんボルト","とんぼがえり","つるぎのまい","でんじは"]
  },
  776: {
    name: "バクガメス", nameEn: "turtonator", types: ["ほのお", "ドラゴン"],
    stats: { hp: 60, atk: 78, def: 135, spa: 91, spd: 85, spe: 36 },
    abilities: ["シェルアーマー"], hiddenAbility: null, weight: 212.0,
    moves: ["オーバーヒート","りゅうせいぐん","ボディプレス","だいばくはつ","ステルスロック","トラップシェル","りゅうのはどう"]
  },
  784: {
    name: "ジャラランガ", nameEn: "kommo-o", types: ["ドラゴン", "かくとう"],
    stats: { hp: 75, atk: 110, def: 125, spa: 100, spd: 105, spe: 85 },
    abilities: ["ぼうだん", "ぼうおん"], hiddenAbility: "ぼうじん", weight: 78.2,
    moves: ["インファイト","げきりん","アイアンヘッド","どくづき","りゅうのまい","ビルドアップ","ステルスロック","ソウルビート"]
  },
  785: {
    name: "カプ・コケコ", nameEn: "tapu-koko", types: ["でんき", "フェアリー"],
    stats: { hp: 70, atk: 115, def: 85, spa: 95, spd: 75, spe: 130 },
    abilities: ["エレキメイカー"], hiddenAbility: "テレパシー", weight: 20.5,
    moves: ["ワイルドボルト","しぜんのいかり","ブレイブバード","とんぼがえり","でんじは","ちょうはつ","リフレクター","ボルトチェンジ"]
  },
  786: {
    name: "カプ・テテフ", nameEn: "tapu-lele", types: ["エスパー", "フェアリー"],
    stats: { hp: 70, atk: 85, def: 75, spa: 130, spd: 115, spe: 95 },
    abilities: ["サイコメイカー"], hiddenAbility: "テレパシー", weight: 18.6,
    moves: ["サイコキネシス","ムーンフォース","きあいだま","シャドーボール","めいそう","ちょうはつ","リフレクター","サイコショック"]
  },
  787: {
    name: "カプ・ブルル", nameEn: "tapu-bulu", types: ["くさ", "フェアリー"],
    stats: { hp: 70, atk: 130, def: 115, spa: 85, spd: 95, spe: 75 },
    abilities: ["グラスメイカー"], hiddenAbility: "テレパシー", weight: 45.5,
    moves: ["ウッドホーン","ウッドハンマー","ストーンエッジ","ばかぢから","ビルドアップ","ちょうはつ","しぜんのいかり"]
  },
  788: {
    name: "カプ・レヒレ", nameEn: "tapu-fini", types: ["みず", "フェアリー"],
    stats: { hp: 70, atk: 75, def: 115, spa: 95, spd: 130, spe: 85 },
    abilities: ["ミストメイカー"], hiddenAbility: "テレパシー", weight: 21.2,
    moves: ["なみのり","ムーンフォース","れいとうビーム","ちょうはつ","しぜんのいかり","めいそう","しんぴのまもり"]
  },
  791: {
    name: "ソルガレオ", nameEn: "solgaleo", types: ["エスパー", "はがね"],
    stats: { hp: 137, atk: 137, def: 107, spa: 113, spd: 89, spe: 97 },
    abilities: ["メタルプロテクト"], hiddenAbility: null, weight: 230.0,
    moves: ["メテオドライブ","しねんのずつき","じしん","フレアドライブ","ストーンエッジ","おにび","でんじは","あさのひざし"]
  },
  792: {
    name: "ルナアーラ", nameEn: "lunala", types: ["エスパー", "ゴースト"],
    stats: { hp: 137, atk: 113, def: 89, spa: 137, spd: 107, spe: 97 },
    abilities: ["ファントムガード"], hiddenAbility: null, weight: 120.0,
    moves: ["シャドーレイ","サイコキネシス","れいとうビーム","きあいだま","めいそう","はねやすめ","おにび"]
  },
  800: {
    name: "ネクロズマ", nameEn: "necrozma", types: ["エスパー"],
    stats: { hp: 97, atk: 107, def: 101, spa: 127, spd: 89, spe: 79 },
    abilities: ["プリズムアーマー"], hiddenAbility: null, weight: 230.0,
    moves: ["フォトンゲイザー","サイコキネシス","だいちのちから","シャドーボール","ステルスロック","めいそう","じこさいせい"]
  },
  // === 追加ポケモン: 第8世代 ===
  823: {
    name: "アーマーガア", nameEn: "corviknight", types: ["ひこう", "はがね"],
    stats: { hp: 98, atk: 87, def: 105, spa: 53, spd: 85, spe: 67 },
    abilities: ["プレッシャー", "きんちょうかん"], hiddenAbility: "ミラーアーマー", weight: 75.0,
    moves: ["ブレイブバード","アイアンヘッド","ボディプレス","とんぼがえり","はねやすめ","ちょうはつ","ビルドアップ","てっぺき"]
  },
  826: {
    name: "イオルブ", nameEn: "orbeetle", types: ["むし", "エスパー"],
    stats: { hp: 60, atk: 45, def: 110, spa: 80, spd: 120, spe: 90 },
    abilities: ["むしのしらせ", "おみとおし"], hiddenAbility: "テレパシー", weight: 40.8,
    moves: ["サイコキネシス","むしのさざめき","ボディプレス","トリックルーム","リフレクター","ひかりのかべ","ねばねばネット"]
  },
  834: {
    name: "カジリガメ", nameEn: "drednaw", types: ["みず", "いわ"],
    stats: { hp: 90, atk: 115, def: 90, spa: 48, spd: 68, spe: 74 },
    abilities: ["がんじょうあご", "シェルアーマー"], hiddenAbility: "すいすい", weight: 115.5,
    moves: ["たきのぼり","ストーンエッジ","じしん","こおりのキバ","からをやぶる","つるぎのまい","ステルスロック"]
  },
  839: {
    name: "セキタンザン", nameEn: "coalossal", types: ["いわ", "ほのお"],
    stats: { hp: 110, atk: 80, def: 120, spa: 80, spd: 90, spe: 30 },
    abilities: ["じょうききかん", "ほのおのからだ"], hiddenAbility: "もらいび", weight: 310.5,
    moves: ["だいもんじ","ストーンエッジ","ボディプレス","ソーラービーム","ステルスロック","おにび","タールショット"]
  },
  841: {
    name: "アップリュー", nameEn: "flapple", types: ["くさ", "ドラゴン"],
    stats: { hp: 70, atk: 110, def: 80, spa: 95, spd: 60, spe: 70 },
    abilities: ["じゅくせい", "くいしんぼう"], hiddenAbility: "はりきり", weight: 1.0,
    moves: ["Gのちから","げきりん","つばめがえし","りゅうせいぐん","りゅうのまい","つるぎのまい"]
  },
  845: {
    name: "ウッウ", nameEn: "cramorant", types: ["ひこう", "みず"],
    stats: { hp: 70, atk: 85, def: 55, spa: 85, spd: 95, spe: 85 },
    abilities: ["うのミサイル"], hiddenAbility: null, weight: 18.0,
    moves: ["なみのり","ぼうふう","れいとうビーム","エアスラッシュ","はねやすめ","ちょうはつ"]
  },
  849: {
    name: "ストリンダー", nameEn: "toxtricity", types: ["でんき", "どく"],
    stats: { hp: 75, atk: 98, def: 70, spa: 114, spd: 70, spe: 75 },
    abilities: ["パンクロック", "プラス"], hiddenAbility: "テクニシャン", weight: 40.0,
    moves: ["オーバードライブ","ヘドロウェーブ","ばくおんぱ","ボルトチェンジ","ほのおのパンチ","ちょうはつ","みがわり"]
  },
  858: {
    name: "ブリムオン", nameEn: "hatterene", types: ["エスパー", "フェアリー"],
    stats: { hp: 57, atk: 90, def: 95, spa: 136, spd: 103, spe: 29 },
    abilities: ["いやしのこころ", "きけんよち"], hiddenAbility: "マジックミラー", weight: 5.1,
    moves: ["サイコキネシス","マジカルシャイン","シャドーボール","マジカルフレイム","トリックルーム","めいそう","みがわり","ミストバースト"]
  },
  861: {
    name: "オーロンゲ", nameEn: "grimmsnarl", types: ["あく", "フェアリー"],
    stats: { hp: 95, atk: 120, def: 65, spa: 95, spd: 75, spe: 60 },
    abilities: ["いたずらごころ", "おみとおし"], hiddenAbility: "わるいてぐせ", weight: 61.0,
    moves: ["じゃれつく","ふいうち","ソウルクラッシュ","ちょうはつ","でんじは","リフレクター","ひかりのかべ","ビルドアップ"]
  },
  862: {
    name: "タチフサグマ", nameEn: "obstagoon", types: ["あく", "ノーマル"],
    stats: { hp: 93, atk: 90, def: 101, spa: 60, spd: 81, spe: 95 },
    abilities: ["すてみ", "こんじょう"], hiddenAbility: "まけんき", weight: 46.0,
    moves: ["すてみタックル","はたきおとす","インファイト","ちょうはつ","ビルドアップ","ブロッキング"]
  },
  869: {
    name: "マホイップ", nameEn: "alcremie", types: ["フェアリー"],
    stats: { hp: 65, atk: 60, def: 75, spa: 110, spd: 121, spe: 64 },
    abilities: ["スイートベール"], hiddenAbility: "アロマベール", weight: 0.5,
    moves: ["マジカルシャイン","サイコキネシス","エナジーボール","めいそう","じこさいせい","アンコール","みがわり","デコレーション"]
  },
  876: {
    name: "イエッサン♂", nameEn: "indeedee-male", types: ["エスパー", "ノーマル"],
    stats: { hp: 60, atk: 65, def: 55, spa: 105, spd: 95, spe: 95 },
    abilities: ["せいしんりょく", "シンクロ"], hiddenAbility: "サイコメイカー", weight: 28.0,
    moves: ["サイコキネシス","ハイパーボイス","シャドーボール","マジカルシャイン","トリック","ちょうはつ","てだすけ"]
  },
  879: {
    name: "ダイオウドウ", nameEn: "copperajah", types: ["はがね"],
    stats: { hp: 122, atk: 130, def: 69, spa: 80, spd: 69, spe: 30 },
    abilities: ["ちからずく"], hiddenAbility: "ヘヴィメタル", weight: 650.0,
    moves: ["ヘビーボンバー","じしん","ストーンエッジ","じゃれつく","ステルスロック","のろい","10まんばりき"]
  },
  882: {
    name: "ウオノラゴン", nameEn: "dracovish", types: ["みず", "ドラゴン"],
    stats: { hp: 90, atk: 90, def: 100, spa: 70, spd: 80, spe: 75 },
    abilities: ["ちょすい", "がんじょうあご"], hiddenAbility: "すなかき", weight: 215.0,
    moves: ["エラがみ","げきりん","じしん","こおりのキバ","サイコファング","りゅうせいぐん"]
  },
  884: {
    name: "ジュラルドン", nameEn: "duraludon", types: ["はがね", "ドラゴン"],
    stats: { hp: 70, atk: 95, def: 115, spa: 120, spd: 50, spe: 85 },
    abilities: ["ライトメタル", "ヘヴィメタル"], hiddenAbility: "すじがねいり", weight: 40.0,
    moves: ["ラスターカノン","りゅうせいぐん","10まんボルト","ボディプレス","ステルスロック","でんじは","りゅうのはどう"]
  },
  888: {
    name: "ザシアン", nameEn: "zacian", types: ["フェアリー"],
    stats: { hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138 },
    abilities: ["ふとうのけん"], hiddenAbility: null, weight: 110.0,
    moves: ["じゃれつく","インファイト","ワイルドボルト","かみくだく","つるぎのまい","でんこうせっか","きょじゅうざん"]
  },
  889: {
    name: "ザマゼンタ", nameEn: "zamazenta", types: ["かくとう"],
    stats: { hp: 92, atk: 130, def: 115, spa: 80, spd: 115, spe: 138 },
    abilities: ["ふくつのたて"], hiddenAbility: null, weight: 210.0,
    moves: ["インファイト","じゃれつく","ワイルドボルト","かみくだく","きょじゅうだん","ちょうはつ"]
  },
  890: {
    name: "ムゲンダイナ", nameEn: "eternatus", types: ["どく", "ドラゴン"],
    stats: { hp: 140, atk: 85, def: 95, spa: 145, spd: 95, spe: 130 },
    abilities: ["プレッシャー"], hiddenAbility: null, weight: 950.0,
    moves: ["ダイマックスほう","りゅうせいぐん","かえんほうしゃ","ヘドロばくだん","じこさいせい","でんじは","どくどく"]
  },
  // === 追加ポケモン: 第9世代(SV) ===
  901: {
    name: "ガチグマ", nameEn: "ursaluna", types: ["じめん", "ノーマル"],
    stats: { hp: 130, atk: 140, def: 105, spa: 45, spd: 80, spe: 50 },
    abilities: ["こんじょう", "ぼうだん"], hiddenAbility: "きんちょうかん", weight: 290.0,
    moves: ["じしん","からげんき","かみくだく","じゃれつく","ストーンエッジ","ビルドアップ","ほのおのパンチ","れいとうパンチ"]
  },
  903: {
    name: "オオニューラ", nameEn: "sneasler", types: ["かくとう", "どく"],
    stats: { hp: 80, atk: 130, def: 60, spa: 40, spd: 80, spe: 120 },
    abilities: ["プレッシャー", "かるわざ"], hiddenAbility: "どくしゅ", weight: 43.0,
    moves: ["インファイト","どくづき","つるぎのまい","でんこうせっか","はたきおとす","とんぼがえり","つばめがえし"]
  },
  911: {
    name: "ラウドボーン", nameEn: "skeledirge", types: ["ほのお", "ゴースト"],
    stats: { hp: 104, atk: 75, def: 100, spa: 110, spd: 75, spe: 66 },
    abilities: ["もうか"], hiddenAbility: "てんねん", weight: 326.5,
    moves: ["フレアソング","シャドーボール","だいちのちから","おにび","あくび","なまける","テラバースト"]
  },
  914: {
    name: "マスカーニャ", nameEn: "meowscarada", types: ["くさ", "あく"],
    stats: { hp: 76, atk: 110, def: 70, spa: 81, spd: 70, spe: 123 },
    abilities: ["しんりょく"], hiddenAbility: "へんげんじざい", weight: 31.2,
    moves: ["トリックフラワー","はたきおとす","じゃれつく","とんぼがえり","ふいうち","でんこうせっか","つるぎのまい"]
  },
  917: {
    name: "ウェーニバル", nameEn: "quaquaval", types: ["みず", "かくとう"],
    stats: { hp: 85, atk: 120, def: 80, spa: 85, spd: 75, spe: 85 },
    abilities: ["げきりゅう"], hiddenAbility: "じしんかじょう", weight: 61.9,
    moves: ["アクアステップ","インファイト","ブレイブバード","れいとうパンチ","つるぎのまい","アンコール","アクアジェット"]
  },
  934: {
    name: "ハラバリー", nameEn: "bellibolt", types: ["でんき"],
    stats: { hp: 109, atk: 64, def: 91, spa: 103, spd: 83, spe: 45 },
    abilities: ["でんきにかえる", "せいでんき"], hiddenAbility: "しめりけ", weight: 113.0,
    moves: ["10まんボルト","マッドショット","ウェザーボール","ボルトチェンジ","でんじは","アシッドボム"]
  },
  936: {
    name: "クエスパトラ", nameEn: "espathra", types: ["エスパー"],
    stats: { hp: 95, atk: 60, def: 60, spa: 101, spd: 60, spe: 105 },
    abilities: ["おみとおし", "おはやいこうどう"], hiddenAbility: "かそく", weight: 90.0,
    moves: ["ルミナコリジョン","シャドーボール","マジカルシャイン","めいそう","まもる","バトンタッチ","トリック"]
  },
  940: {
    name: "イッカネズミ", nameEn: "maushold", types: ["ノーマル"],
    stats: { hp: 74, atk: 75, def: 70, spa: 65, spd: 75, spe: 111 },
    abilities: ["フレンドガード", "ほおぶくろ"], hiddenAbility: "テクニシャン", weight: 2.3,
    moves: ["ネズミざん","じゃれつく","ちょうはつ","アンコール","おさきにどうぞ","でんこうせっか","かみつく"]
  },
  950: {
    name: "ナミイルカ→イルカマン", nameEn: "palafin", types: ["みず"],
    stats: { hp: 100, atk: 70, def: 72, spa: 53, spd: 62, spe: 100 },
    abilities: ["マイティチェンジ"], hiddenAbility: null, weight: 60.2,
    moves: ["ジェットパンチ","インファイト","れいとうパンチ","ウェーブタックル","ビルドアップ","アクアジェット","ちょうはつ"]
  },
  954: {
    name: "ノココッチ", nameEn: "dudunsparce", types: ["ノーマル"],
    stats: { hp: 125, atk: 100, def: 80, spa: 85, spd: 75, spe: 55 },
    abilities: ["てんのめぐみ", "にげあし"], hiddenAbility: "びびり", weight: 39.2,
    moves: ["のしかかり","じしん","ステルスロック","とぐろをまく","はねやすめ","でんじは","ヘビーボンバー"]
  },
  962: {
    name: "ドオー", nameEn: "clodsire", types: ["どく", "じめん"],
    stats: { hp: 130, atk: 75, def: 60, spa: 45, spd: 100, spe: 20 },
    abilities: ["どくのトゲ", "ちょすい"], hiddenAbility: "てんねん", weight: 223.0,
    moves: ["じしん","どくづき","のろい","じこさいせい","ステルスロック","あくび","どくびし","カウンター"]
  },
  971: {
    name: "ハカドッグ", nameEn: "greavard", types: ["ゴースト"],
    stats: { hp: 72, atk: 101, def: 100, spa: 50, spd: 97, spe: 68 },
    abilities: ["すなかき"], hiddenAbility: "ものひろい", weight: 35.0,
    moves: ["シャドークロー","じゃれつく","はたきおとす","じしん","おにび","みちづれ","すなあらし"]
  },
  985: {
    name: "イダイナキバ", nameEn: "great-tusk", types: ["じめん", "かくとう"],
    stats: { hp: 115, atk: 131, def: 131, spa: 53, spd: 53, spe: 87 },
    abilities: ["こだいかっせい"], hiddenAbility: null, weight: 320.0,
    moves: ["じしん","インファイト","ストーンエッジ","こおりのキバ","こうそくスピン","ステルスロック","ちょうはつ","ばかぢから"]
  },
  986: {
    name: "テツノワダチ", nameEn: "iron-treads", types: ["じめん", "はがね"],
    stats: { hp: 90, atk: 112, def: 120, spa: 72, spd: 70, spe: 106 },
    abilities: ["クォークチャージ"], hiddenAbility: null, weight: 240.0,
    moves: ["じしん","アイアンヘッド","こうそくスピン","ストーンエッジ","ステルスロック","ボルトチェンジ","でんじは"]
  },
  987: {
    name: "テツノツツミ", nameEn: "iron-bundle", types: ["こおり", "みず"],
    stats: { hp: 56, atk: 80, def: 114, spa: 124, spd: 60, spe: 136 },
    abilities: ["クォークチャージ"], hiddenAbility: null, weight: 11.0,
    moves: ["フリーズドライ","ハイドロポンプ","れいとうビーム","テラバースト","こうそくいどう","みがわり","アンコール"]
  },
  988: {
    name: "テツノコウベ", nameEn: "iron-jugulis", types: ["あく", "ひこう"],
    stats: { hp: 94, atk: 80, def: 86, spa: 122, spd: 80, spe: 108 },
    abilities: ["クォークチャージ"], hiddenAbility: null, weight: 111.0,
    moves: ["あくのはどう","エアスラッシュ","かえんほうしゃ","ちょうはつ","わるだくみ","とんぼがえり","でんじは"]
  },
  990: {
    name: "テツノドクガ", nameEn: "iron-moth", types: ["ほのお", "どく"],
    stats: { hp: 80, atk: 70, def: 60, spa: 140, spd: 110, spe: 110 },
    abilities: ["クォークチャージ"], hiddenAbility: null, weight: 36.0,
    moves: ["ほのおのまい","ヘドロウェーブ","エナジーボール","サイコキネシス","ちょうのまい","おにび","どくどく"]
  },
  992: {
    name: "テツノブシン", nameEn: "iron-hands", types: ["かくとう", "でんき"],
    stats: { hp: 154, atk: 140, def: 108, spa: 50, spd: 68, spe: 50 },
    abilities: ["クォークチャージ"], hiddenAbility: null, weight: 380.7,
    moves: ["ドレインパンチ","ワイルドボルト","れいとうパンチ","はらだいこ","でんこうせっか","ねこだまし","ヘビーボンバー","じしん"]
  },
  994: {
    name: "チヲハウハネ", nameEn: "slither-wing", types: ["むし", "かくとう"],
    stats: { hp: 85, atk: 135, def: 79, spa: 85, spd: 105, spe: 81 },
    abilities: ["こだいかっせい"], hiddenAbility: null, weight: 92.0,
    moves: ["きゅうけつ","インファイト","とんぼがえり","フレアドライブ","ばかぢから","ビルドアップ","あさのひざし"]
  },
  998: {
    name: "コノヨザル", nameEn: "annihilape", types: ["かくとう", "ゴースト"],
    stats: { hp: 110, atk: 115, def: 80, spa: 50, spd: 90, spe: 90 },
    abilities: ["やるき", "せいしんりょく"], hiddenAbility: "まけんき", weight: 56.0,
    moves: ["ふんどのこぶし","ドレインパンチ","シャドークロー","ちょうはつ","ビルドアップ","アンコール","とんぼがえり"]
  },
  1001: {
    name: "チオンジェン", nameEn: "wo-chien", types: ["あく", "くさ"],
    stats: { hp: 85, atk: 85, def: 100, spa: 95, spd: 135, spe: 70 },
    abilities: ["わざわいのおふだ"], hiddenAbility: null, weight: 74.2,
    moves: ["ギガドレイン","あくのはどう","パワーウィップ","やどりぎのタネ","まもる","ちょうはつ","でんじは"]
  },
  1002: {
    name: "パオジアン", nameEn: "chien-pao", types: ["あく", "こおり"],
    stats: { hp: 80, atk: 120, def: 80, spa: 90, spd: 65, spe: 135 },
    abilities: ["わざわいのつるぎ"], hiddenAbility: null, weight: 152.2,
    moves: ["つららおとし","かみくだく","ふいうち","こおりのつぶて","せいなるつるぎ","つるぎのまい","ちょうはつ"]
  },
  1003: {
    name: "ディンルー", nameEn: "ting-lu", types: ["あく", "じめん"],
    stats: { hp: 155, atk: 110, def: 125, spa: 55, spd: 80, spe: 45 },
    abilities: ["わざわいのうつわ"], hiddenAbility: null, weight: 699.7,
    moves: ["じしん","はたきおとす","ストーンエッジ","ステルスロック","ふきとばし","のろい","きょけんとつげき"]
  },
  1004: {
    name: "イーユイ", nameEn: "chi-yu", types: ["あく", "ほのお"],
    stats: { hp: 55, atk: 80, def: 80, spa: 135, spd: 120, spe: 100 },
    abilities: ["わざわいのたま"], hiddenAbility: null, weight: 4.9,
    moves: ["だいもんじ","あくのはどう","オーバーヒート","サイコキネシス","わるだくみ","おにび","ちょうはつ"]
  },
  1005: {
    name: "トドロクツキ", nameEn: "roaring-moon", types: ["ドラゴン", "あく"],
    stats: { hp: 105, atk: 139, def: 71, spa: 55, spd: 101, spe: 119 },
    abilities: ["こだいかっせい"], hiddenAbility: null, weight: 380.0,
    moves: ["げきりん","はたきおとす","アクロバット","じしん","りゅうのまい","つるぎのまい","ちょうはつ","とんぼがえり"]
  }
};

// タイプ相性テーブル (攻撃側タイプ → 防御側タイプ → 倍率)
const TYPE_CHART = {
  "ノーマル":   { "ノーマル": 1, "ほのお": 1, "みず": 1, "でんき": 1, "くさ": 1, "こおり": 1, "かくとう": 1, "どく": 1, "じめん": 1, "ひこう": 1, "エスパー": 1, "むし": 1, "いわ": 0.5, "ゴースト": 0, "ドラゴン": 1, "あく": 1, "はがね": 0.5, "フェアリー": 1 },
  "ほのお":     { "ノーマル": 1, "ほのお": 0.5, "みず": 0.5, "でんき": 1, "くさ": 2, "こおり": 2, "かくとう": 1, "どく": 1, "じめん": 1, "ひこう": 1, "エスパー": 1, "むし": 2, "いわ": 0.5, "ゴースト": 1, "ドラゴン": 0.5, "あく": 1, "はがね": 2, "フェアリー": 1 },
  "みず":       { "ノーマル": 1, "ほのお": 2, "みず": 0.5, "でんき": 1, "くさ": 0.5, "こおり": 1, "かくとう": 1, "どく": 1, "じめん": 2, "ひこう": 1, "エスパー": 1, "むし": 1, "いわ": 2, "ゴースト": 1, "ドラゴン": 0.5, "あく": 1, "はがね": 1, "フェアリー": 1 },
  "でんき":     { "ノーマル": 1, "ほのお": 1, "みず": 2, "でんき": 0.5, "くさ": 0.5, "こおり": 1, "かくとう": 1, "どく": 1, "じめん": 0, "ひこう": 2, "エスパー": 1, "むし": 1, "いわ": 1, "ゴースト": 1, "ドラゴン": 0.5, "あく": 1, "はがね": 1, "フェアリー": 1 },
  "くさ":       { "ノーマル": 1, "ほのお": 0.5, "みず": 2, "でんき": 1, "くさ": 0.5, "こおり": 1, "かくとう": 1, "どく": 0.5, "じめん": 2, "ひこう": 0.5, "エスパー": 1, "むし": 0.5, "いわ": 2, "ゴースト": 1, "ドラゴン": 0.5, "あく": 1, "はがね": 0.5, "フェアリー": 1 },
  "こおり":     { "ノーマル": 1, "ほのお": 0.5, "みず": 0.5, "でんき": 1, "くさ": 2, "こおり": 0.5, "かくとう": 1, "どく": 1, "じめん": 2, "ひこう": 2, "エスパー": 1, "むし": 1, "いわ": 1, "ゴースト": 1, "ドラゴン": 2, "あく": 1, "はがね": 0.5, "フェアリー": 1 },
  "かくとう":   { "ノーマル": 2, "ほのお": 1, "みず": 1, "でんき": 1, "くさ": 1, "こおり": 2, "かくとう": 1, "どく": 0.5, "じめん": 1, "ひこう": 0.5, "エスパー": 0.5, "むし": 0.5, "いわ": 2, "ゴースト": 0, "ドラゴン": 1, "あく": 2, "はがね": 2, "フェアリー": 0.5 },
  "どく":       { "ノーマル": 1, "ほのお": 1, "みず": 1, "でんき": 1, "くさ": 2, "こおり": 1, "かくとう": 1, "どく": 0.5, "じめん": 0.5, "ひこう": 1, "エスパー": 1, "むし": 1, "いわ": 0.5, "ゴースト": 0.5, "ドラゴン": 1, "あく": 1, "はがね": 0, "フェアリー": 2 },
  "じめん":     { "ノーマル": 1, "ほのお": 2, "みず": 1, "でんき": 2, "くさ": 0.5, "こおり": 1, "かくとう": 1, "どく": 2, "じめん": 1, "ひこう": 0, "エスパー": 1, "むし": 0.5, "いわ": 2, "ゴースト": 1, "ドラゴン": 1, "あく": 1, "はがね": 2, "フェアリー": 1 },
  "ひこう":     { "ノーマル": 1, "ほのお": 1, "みず": 1, "でんき": 0.5, "くさ": 2, "こおり": 1, "かくとう": 2, "どく": 1, "じめん": 1, "ひこう": 1, "エスパー": 1, "むし": 2, "いわ": 0.5, "ゴースト": 1, "ドラゴン": 1, "あく": 1, "はがね": 0.5, "フェアリー": 1 },
  "エスパー":   { "ノーマル": 1, "ほのお": 1, "みず": 1, "でんき": 1, "くさ": 1, "こおり": 1, "かくとう": 2, "どく": 2, "じめん": 1, "ひこう": 1, "エスパー": 0.5, "むし": 1, "いわ": 1, "ゴースト": 1, "ドラゴン": 1, "あく": 0, "はがね": 0.5, "フェアリー": 1 },
  "むし":       { "ノーマル": 1, "ほのお": 0.5, "みず": 1, "でんき": 1, "くさ": 2, "こおり": 1, "かくとう": 0.5, "どく": 0.5, "じめん": 1, "ひこう": 0.5, "エスパー": 2, "むし": 1, "いわ": 1, "ゴースト": 0.5, "ドラゴン": 1, "あく": 2, "はがね": 0.5, "フェアリー": 0.5 },
  "いわ":       { "ノーマル": 1, "ほのお": 2, "みず": 1, "でんき": 1, "くさ": 1, "こおり": 2, "かくとう": 0.5, "どく": 1, "じめん": 0.5, "ひこう": 2, "エスパー": 1, "むし": 2, "いわ": 1, "ゴースト": 1, "ドラゴン": 1, "あく": 1, "はがね": 0.5, "フェアリー": 1 },
  "ゴースト":   { "ノーマル": 0, "ほのお": 1, "みず": 1, "でんき": 1, "くさ": 1, "こおり": 1, "かくとう": 1, "どく": 1, "じめん": 1, "ひこう": 1, "エスパー": 2, "むし": 1, "いわ": 1, "ゴースト": 2, "ドラゴン": 1, "あく": 0.5, "はがね": 1, "フェアリー": 1 },
  "ドラゴン":   { "ノーマル": 1, "ほのお": 1, "みず": 1, "でんき": 1, "くさ": 1, "こおり": 1, "かくとう": 1, "どく": 1, "じめん": 1, "ひこう": 1, "エスパー": 1, "むし": 1, "いわ": 1, "ゴースト": 1, "ドラゴン": 2, "あく": 1, "はがね": 0.5, "フェアリー": 0 },
  "あく":       { "ノーマル": 1, "ほのお": 1, "みず": 1, "でんき": 1, "くさ": 1, "こおり": 1, "かくとう": 0.5, "どく": 1, "じめん": 1, "ひこう": 1, "エスパー": 2, "むし": 1, "いわ": 1, "ゴースト": 2, "ドラゴン": 1, "あく": 0.5, "はがね": 0.5, "フェアリー": 0.5 },
  "はがね":     { "ノーマル": 1, "ほのお": 0.5, "みず": 0.5, "でんき": 0.5, "くさ": 1, "こおり": 2, "かくとう": 1, "どく": 1, "じめん": 1, "ひこう": 1, "エスパー": 1, "むし": 1, "いわ": 2, "ゴースト": 1, "ドラゴン": 1, "あく": 1, "はがね": 0.5, "フェアリー": 2 },
  "フェアリー": { "ノーマル": 1, "ほのお": 0.5, "みず": 1, "でんき": 1, "くさ": 1, "こおり": 1, "かくとう": 2, "どく": 0.5, "じめん": 1, "ひこう": 1, "エスパー": 1, "むし": 1, "いわ": 1, "ゴースト": 1, "ドラゴン": 2, "あく": 2, "はがね": 0.5, "フェアリー": 1 }
};

const ALL_TYPES = ["ノーマル","ほのお","みず","でんき","くさ","こおり","かくとう","どく","じめん","ひこう","エスパー","むし","いわ","ゴースト","ドラゴン","あく","はがね","フェアリー"];

// 性格補正テーブル
const NATURES = {
  "さみしがり":  { up: "atk", down: "def" },
  "いじっぱり":  { up: "atk", down: "spa" },
  "やんちゃ":    { up: "atk", down: "spd" },
  "ゆうかん":    { up: "atk", down: "spe" },
  "ずぶとい":    { up: "def", down: "atk" },
  "わんぱく":    { up: "def", down: "spa" },
  "のうてんき":  { up: "def", down: "spd" },
  "のんき":      { up: "def", down: "spe" },
  "ひかえめ":    { up: "spa", down: "atk" },
  "おっとり":    { up: "spa", down: "def" },
  "うっかりや":  { up: "spa", down: "spd" },
  "れいせい":    { up: "spa", down: "spe" },
  "おだやか":    { up: "spd", down: "atk" },
  "おとなしい":  { up: "spd", down: "def" },
  "しんちょう":  { up: "spd", down: "spa" },
  "なまいき":    { up: "spd", down: "spe" },
  "おくびょう":  { up: "spe", down: "atk" },
  "せっかち":    { up: "spe", down: "def" },
  "ようき":      { up: "spe", down: "spa" },
  "むじゃき":    { up: "spe", down: "spd" },
  "てれや":      { up: null, down: null },
  "がんばりや":  { up: null, down: null },
  "すなお":      { up: null, down: null },
  "きまぐれ":    { up: null, down: null },
  "まじめ":      { up: null, down: null }
};

// タイプ→英語名マッピング(CSS用)
const TYPE_EN = {
  "ノーマル": "normal", "ほのお": "fire", "みず": "water", "でんき": "electric",
  "くさ": "grass", "こおり": "ice", "かくとう": "fighting", "どく": "poison",
  "じめん": "ground", "ひこう": "flying", "エスパー": "psychic", "むし": "bug",
  "いわ": "rock", "ゴースト": "ghost", "ドラゴン": "dragon", "あく": "dark",
  "はがね": "steel", "フェアリー": "fairy"
};
