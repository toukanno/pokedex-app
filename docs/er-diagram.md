# ER図 (Mermaid)

```mermaid
erDiagram
    generations ||--o{ pokemon : "belongs to"
    pokemon ||--|{ pokemon_types : "has"
    types ||--o{ pokemon_types : ""
    types ||--o{ type_efficacy : "attacking"
    types ||--o{ type_efficacy : "defending"
    pokemon ||--|{ pokemon_stats : "has"
    pokemon ||--o{ pokemon_abilities : "has"
    abilities ||--o{ pokemon_abilities : ""
    pokemon ||--o{ pokemon_moves : "learns"
    moves ||--o{ pokemon_moves : ""
    types ||--o{ moves : "has type"
    evolution_chains ||--|{ pokemon_evolutions : "contains"
    pokemon ||--o{ pokemon_evolutions : "from"
    pokemon ||--o{ pokemon_evolutions : "to"
    pokemon ||--o{ pokemon_egg_groups : "belongs to"
    egg_groups ||--o{ pokemon_egg_groups : ""

    generations {
        int id PK
        varchar name
        varchar region
    }

    pokemon {
        int id PK "全国図鑑番号"
        varchar name
        varchar name_ja
        varchar genus "分類"
        int generation_id FK
        decimal height
        decimal weight
        int base_experience
        boolean is_legendary
        boolean is_mythical
        text sprite_url
        text artwork_url
    }

    types {
        int id PK
        varchar name
        varchar name_ja
    }

    type_efficacy {
        int attacking_type_id PK_FK
        int defending_type_id PK_FK
        decimal multiplier
    }

    pokemon_types {
        int pokemon_id PK_FK
        int slot PK "1=主 2=副"
        int type_id FK
    }

    pokemon_stats {
        int pokemon_id PK_FK
        varchar stat_name PK
        int base_value
    }

    abilities {
        int id PK
        varchar name
        varchar name_ja
        text description
    }

    pokemon_abilities {
        int pokemon_id PK_FK
        int slot PK
        int ability_id FK
        boolean is_hidden
    }

    moves {
        int id PK
        varchar name
        varchar name_ja
        int type_id FK
        varchar category "physical/special/status"
        int power
        int accuracy
        int pp
        text description
    }

    pokemon_moves {
        int pokemon_id PK_FK
        int move_id PK_FK
        varchar learn_method PK
        int level
    }

    evolution_chains {
        int id PK
    }

    pokemon_evolutions {
        int id PK
        int chain_id FK
        int from_pokemon_id FK
        int to_pokemon_id FK
        varchar trigger
        text trigger_detail
        int minimum_level
    }

    egg_groups {
        int id PK
        varchar name
        varchar name_ja
    }

    pokemon_egg_groups {
        int pokemon_id PK_FK
        int egg_group_id PK_FK
    }
```
