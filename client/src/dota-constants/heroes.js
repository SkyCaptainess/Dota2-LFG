const heroes = [{
    "id": 1,
    "name": "antimage",
    "localized_name": "Anti-Mage",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Nuker"],
    "legs": 2
}, {
    "id": 2,
    "name": "axe",
    "localized_name": "Axe",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Durable", "Disabler", "Jungler"],
    "legs": 2
}, {
    "id": 3,
    "name": "bane",
    "localized_name": "Bane",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker", "Durable"],
    "legs": 4
}, {
    "id": 4,
    "name": "bloodseeker",
    "localized_name": "Bloodseeker",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Disabler", "Jungler", "Nuker", "Initiator"],
    "legs": 2
}, {
    "id": 5,
    "name": "crystal_maiden",
    "localized_name": "Crystal Maiden",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker", "Jungler"],
    "legs": 2
}, {
    "id": 6,
    "name": "drow_ranger",
    "localized_name": "Drow Ranger",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Disabler", "Pusher"],
    "legs": 2
}, {
    "id": 7,
    "name": "earthshaker",
    "localized_name": "Earthshaker",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Support", "Initiator", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 8,
    "name": "juggernaut",
    "localized_name": "Juggernaut",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Pusher", "Escape"],
    "legs": 2
}, {
    "id": 9,
    "name": "mirana",
    "localized_name": "Mirana",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Support", "Escape", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 10,
    "name": "morphling",
    "localized_name": "Morphling",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Escape", "Durable", "Nuker", "Disabler"],
    "legs": 0
}, {
    "id": 11,
    "name": "nevermore",
    "localized_name": "Shadow Fiend",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker"],
    "legs": 0
}, {
    "id": 12,
    "name": "phantom_lancer",
    "localized_name": "Phantom Lancer",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Pusher", "Nuker"],
    "legs": 2
}, {
    "id": 13,
    "name": "puck",
    "localized_name": "Puck",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Initiator", "Disabler", "Escape", "Nuker"],
    "legs": 2
}, {
    "id": 14,
    "name": "pudge",
    "localized_name": "Pudge",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Disabler", "Initiator", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 15,
    "name": "razor",
    "localized_name": "Razor",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Durable", "Nuker", "Pusher"],
    "legs": 0
}, {
    "id": 16,
    "name": "sand_king",
    "localized_name": "Sand King",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Disabler", "Support", "Nuker", "Escape", "Jungler"],
    "legs": 6
}, {
    "id": 17,
    "name": "storm_spirit",
    "localized_name": "Storm Spirit",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Escape", "Nuker", "Initiator", "Disabler"],
    "legs": 2
}, {
    "id": 18,
    "name": "sven",
    "localized_name": "Sven",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Disabler", "Initiator", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 19,
    "name": "tiny",
    "localized_name": "Tiny",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Nuker", "Pusher", "Initiator", "Durable", "Disabler"],
    "legs": 2
}, {
    "id": 20,
    "name": "vengefulspirit",
    "localized_name": "Vengeful Spirit",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Support", "Initiator", "Disabler", "Nuker", "Escape"],
    "legs": 2
}, {
    "id": 21,
    "name": "windrunner",
    "localized_name": "Windranger",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Support", "Disabler", "Escape", "Nuker"],
    "legs": 2
}, {
    "id": 22,
    "name": "zuus",
    "localized_name": "Zeus",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Nuker"],
    "legs": 2
}, {
    "id": 23,
    "name": "kunkka",
    "localized_name": "Kunkka",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Support", "Disabler", "Initiator", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 25,
    "name": "lina",
    "localized_name": "Lina",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Carry", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 26,
    "name": "lion",
    "localized_name": "Lion",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker", "Initiator"],
    "legs": 2
}, {
    "id": 27,
    "name": "shadow_shaman",
    "localized_name": "Shadow Shaman",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Pusher", "Disabler", "Nuker", "Initiator"],
    "legs": 2
}, {
    "id": 28,
    "name": "slardar",
    "localized_name": "Slardar",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Durable", "Initiator", "Disabler", "Escape"],
    "legs": 0
}, {
    "id": 29,
    "name": "tidehunter",
    "localized_name": "Tidehunter",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Durable", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 30,
    "name": "witch_doctor",
    "localized_name": "Witch Doctor",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 31,
    "name": "lich",
    "localized_name": "Lich",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker"],
    "legs": 2
}, {
    "id": 32,
    "name": "riki",
    "localized_name": "Riki",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Disabler"],
    "legs": 2
}, {
    "id": 33,
    "name": "enigma",
    "localized_name": "Enigma",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Disabler", "Jungler", "Initiator", "Pusher"],
    "legs": 0
}, {
    "id": 34,
    "name": "tinker",
    "localized_name": "Tinker",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Pusher"],
    "legs": 2
}, {
    "id": 35,
    "name": "sniper",
    "localized_name": "Sniper",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker"],
    "legs": 2
}, {
    "id": 36,
    "name": "necrolyte",
    "localized_name": "Necrophos",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Durable", "Disabler"],
    "legs": 2
}, {
    "id": 37,
    "name": "warlock",
    "localized_name": "Warlock",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Initiator", "Disabler"],
    "legs": 2
}, {
    "id": 38,
    "name": "beastmaster",
    "localized_name": "Beastmaster",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Disabler", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 39,
    "name": "queenofpain",
    "localized_name": "Queen of Pain",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Escape"],
    "legs": 2
}, {
    "id": 40,
    "name": "venomancer",
    "localized_name": "Venomancer",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Initiator", "Pusher", "Disabler"],
    "legs": 0
}, {
    "id": 41,
    "name": "faceless_void",
    "localized_name": "Faceless Void",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Initiator", "Disabler", "Escape", "Durable"],
    "legs": 2
}, {
    "id": 42,
    "name": "skeleton_king",
    "localized_name": "Wraith King",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Support", "Durable", "Disabler", "Initiator"],
    "legs": 2
}, {
    "id": 43,
    "name": "death_prophet",
    "localized_name": "Death Prophet",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Pusher", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 44,
    "name": "phantom_assassin",
    "localized_name": "Phantom Assassin",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape"],
    "legs": 2
}, {
    "id": 45,
    "name": "pugna",
    "localized_name": "Pugna",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Nuker", "Pusher"],
    "legs": 2
}, {
    "id": 46,
    "name": "templar_assassin",
    "localized_name": "Templar Assassin",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Escape"],
    "legs": 2
}, {
    "id": 47,
    "name": "viper",
    "localized_name": "Viper",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Durable", "Initiator", "Disabler"],
    "legs": 0
}, {
    "id": 48,
    "name": "luna",
    "localized_name": "Luna",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Pusher"],
    "legs": 2
}, {
    "id": 49,
    "name": "dragon_knight",
    "localized_name": "Dragon Knight",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Pusher", "Durable", "Disabler", "Initiator", "Nuker"],
    "legs": 2
}, {
    "id": 50,
    "name": "dazzle",
    "localized_name": "Dazzle",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 51,
    "name": "rattletrap",
    "localized_name": "Clockwerk",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Disabler", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 52,
    "name": "leshrac",
    "localized_name": "Leshrac",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Support", "Nuker", "Pusher", "Disabler"],
    "legs": 4
}, {
    "id": 53,
    "name": "furion",
    "localized_name": "Nature's Prophet",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Jungler", "Pusher", "Escape", "Nuker"],
    "legs": 2
}, {
    "id": 54,
    "name": "life_stealer",
    "localized_name": "Lifestealer",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Durable", "Jungler", "Escape", "Disabler"],
    "legs": 2
}, {
    "id": 55,
    "name": "dark_seer",
    "localized_name": "Dark Seer",
    "primary_attr": "int",
    "attack_type": "Melee",
    "roles": ["Initiator", "Jungler", "Escape", "Disabler"],
    "legs": 2
}, {
    "id": 56,
    "name": "clinkz",
    "localized_name": "Clinkz",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Escape", "Pusher"],
    "legs": 2
}, {
    "id": 57,
    "name": "omniknight",
    "localized_name": "Omniknight",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Support", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 58,
    "name": "enchantress",
    "localized_name": "Enchantress",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Jungler", "Pusher", "Durable", "Disabler"],
    "legs": 4
}, {
    "id": 59,
    "name": "huskar",
    "localized_name": "Huskar",
    "primary_attr": "str",
    "attack_type": "Ranged",
    "roles": ["Carry", "Durable", "Initiator"],
    "legs": 2
}, {
    "id": 60,
    "name": "night_stalker",
    "localized_name": "Night Stalker",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Initiator", "Durable", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 61,
    "name": "broodmother",
    "localized_name": "Broodmother",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Pusher", "Escape", "Nuker"],
    "legs": 8
}, {
    "id": 62,
    "name": "bounty_hunter",
    "localized_name": "Bounty Hunter",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Escape", "Nuker"],
    "legs": 2
}, {
    "id": 63,
    "name": "weaver",
    "localized_name": "Weaver",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Escape"],
    "legs": 4
}, {
    "id": 64,
    "name": "jakiro",
    "localized_name": "Jakiro",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Pusher", "Disabler"],
    "legs": 2
}, {
    "id": 65,
    "name": "batrider",
    "localized_name": "Batrider",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Initiator", "Jungler", "Disabler", "Escape"],
    "legs": 2
}, {
    "id": 66,
    "name": "chen",
    "localized_name": "Chen",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Jungler", "Pusher"],
    "legs": 2
}, {
    "id": 67,
    "name": "spectre",
    "localized_name": "Spectre",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Durable", "Escape"],
    "legs": 0
}, {
    "id": 68,
    "name": "ancient_apparition",
    "localized_name": "Ancient Apparition",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 69,
    "name": "doom_bringer",
    "localized_name": "Doom",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Disabler", "Initiator", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 70,
    "name": "ursa",
    "localized_name": "Ursa",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Jungler", "Durable", "Disabler"],
    "legs": 2
}, {
    "id": 71,
    "name": "spirit_breaker",
    "localized_name": "Spirit Breaker",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Initiator", "Disabler", "Durable", "Escape"],
    "legs": 2
}, {
    "id": 72,
    "name": "gyrocopter",
    "localized_name": "Gyrocopter",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 73,
    "name": "alchemist",
    "localized_name": "Alchemist",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Support", "Durable", "Disabler", "Initiator", "Nuker"],
    "legs": 2
}, {
    "id": 74,
    "name": "invoker",
    "localized_name": "Invoker",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Disabler", "Escape", "Pusher"],
    "legs": 2
}, {
    "id": 75,
    "name": "silencer",
    "localized_name": "Silencer",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Support", "Disabler", "Initiator", "Nuker"],
    "legs": 2
}, {
    "id": 76,
    "name": "obsidian_destroyer",
    "localized_name": "Outworld Devourer",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Carry", "Nuker", "Disabler"],
    "legs": 4
}, {
    "id": 77,
    "name": "lycan",
    "localized_name": "Lycan",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Pusher", "Jungler", "Durable", "Escape"],
    "legs": 2
}, {
    "id": 78,
    "name": "brewmaster",
    "localized_name": "Brewmaster",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Initiator", "Durable", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 79,
    "name": "shadow_demon",
    "localized_name": "Shadow Demon",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Initiator", "Nuker"],
    "legs": 2
}, {
    "id": 80,
    "name": "lone_druid",
    "localized_name": "Lone Druid",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Pusher", "Jungler", "Durable"],
    "legs": 2
}, {
    "id": 81,
    "name": "chaos_knight",
    "localized_name": "Chaos Knight",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Disabler", "Durable", "Pusher", "Initiator"],
    "legs": 2
}, {
    "id": 82,
    "name": "meepo",
    "localized_name": "Meepo",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Nuker", "Disabler", "Initiator", "Pusher"],
    "legs": 2
}, {
    "id": 83,
    "name": "treant",
    "localized_name": "Treant Protector",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Support", "Initiator", "Durable", "Disabler", "Escape"],
    "legs": 2
}, {
    "id": 84,
    "name": "ogre_magi",
    "localized_name": "Ogre Magi",
    "primary_attr": "int",
    "attack_type": "Melee",
    "roles": ["Support", "Nuker", "Disabler", "Durable", "Initiator"],
    "legs": 2
}, {
    "id": 85,
    "name": "undying",
    "localized_name": "Undying",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Support", "Durable", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 86,
    "name": "rubick",
    "localized_name": "Rubick",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 87,
    "name": "disruptor",
    "localized_name": "Disruptor",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker", "Initiator"],
    "legs": 2
}, {
    "id": 88,
    "name": "nyx_assassin",
    "localized_name": "Nyx Assassin",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Disabler", "Nuker", "Initiator", "Escape"],
    "legs": 6
}, {
    "id": 89,
    "name": "naga_siren",
    "localized_name": "Naga Siren",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Support", "Pusher", "Disabler", "Initiator", "Escape"],
    "legs": 0
}, {
    "id": 90,
    "name": "keeper_of_the_light",
    "localized_name": "Keeper of the Light",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler", "Jungler"],
    "legs": 2
}, {
    "id": 91,
    "name": "wisp",
    "localized_name": "Io",
    "primary_attr": "str",
    "attack_type": "Ranged",
    "roles": ["Support", "Escape", "Nuker"],
    "legs": 0
}, {
    "id": 92,
    "name": "visage",
    "localized_name": "Visage",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Durable", "Disabler", "Pusher"],
    "legs": 2
}, {
    "id": 93,
    "name": "slark",
    "localized_name": "Slark",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 94,
    "name": "medusa",
    "localized_name": "Medusa",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Disabler", "Durable"],
    "legs": 0
}, {
    "id": 95,
    "name": "troll_warlord",
    "localized_name": "Troll Warlord",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Pusher", "Disabler", "Durable"],
    "legs": 2
}, {
    "id": 96,
    "name": "centaur",
    "localized_name": "Centaur Warrunner",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Durable", "Initiator", "Disabler", "Nuker", "Escape"],
    "legs": 4
}, {
    "id": 97,
    "name": "magnataur",
    "localized_name": "Magnus",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Disabler", "Nuker", "Escape"],
    "legs": 4
}, {
    "id": 98,
    "name": "shredder",
    "localized_name": "Timbersaw",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Nuker", "Durable", "Escape"],
    "legs": 2
}, {
    "id": 99,
    "name": "bristleback",
    "localized_name": "Bristleback",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Durable", "Initiator", "Nuker"],
    "legs": 2
}, {
    "id": 100,
    "name": "tusk",
    "localized_name": "Tusk",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 101,
    "name": "skywrath_mage",
    "localized_name": "Skywrath Mage",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler"],
    "legs": 2
}, {
    "id": 102,
    "name": "abaddon",
    "localized_name": "Abaddon",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Support", "Carry", "Durable"],
    "legs": 2
}, {
    "id": 103,
    "name": "elder_titan",
    "localized_name": "Elder Titan",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Initiator", "Disabler", "Nuker", "Durable"],
    "legs": 2
}, {
    "id": 104,
    "name": "legion_commander",
    "localized_name": "Legion Commander",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Carry", "Disabler", "Initiator", "Durable", "Nuker"],
    "legs": 2
}, {
    "id": 105,
    "name": "techies",
    "localized_name": "Techies",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Nuker", "Disabler"],
    "legs": 6
}, {
    "id": 106,
    "name": "ember_spirit",
    "localized_name": "Ember Spirit",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Nuker", "Disabler", "Initiator"],
    "legs": 2
}, {
    "id": 107,
    "name": "earth_spirit",
    "localized_name": "Earth Spirit",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Nuker", "Escape", "Disabler", "Initiator", "Durable"],
    "legs": 2
}, {
    "id": 108,
    "name": "abyssal_underlord",
    "localized_name": "Underlord",
    "primary_attr": "str",
    "attack_type": "Melee",
    "roles": ["Support", "Nuker", "Disabler", "Durable", "Escape"],
    "legs": 2
}, {
    "id": 109,
    "name": "terrorblade",
    "localized_name": "Terrorblade",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Pusher", "Nuker"],
    "legs": 2
}, {
    "id": 110,
    "name": "phoenix",
    "localized_name": "Phoenix",
    "primary_attr": "str",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Initiator", "Escape", "Disabler"],
    "legs": 2
}, {
    "id": 111,
    "name": "oracle",
    "localized_name": "Oracle",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler", "Escape"],
    "legs": 2
}, {
    "id": 112,
    "name": "winter_wyvern",
    "localized_name": "Winter Wyvern",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Disabler", "Nuker"],
    "legs": 2
}, {
    "id": 113,
    "name": "arc_warden",
    "localized_name": "Arc Warden",
    "primary_attr": "agi",
    "attack_type": "Ranged",
    "roles": ["Carry", "Escape", "Nuker"],
    "legs": 2
}, {
    "id": 114,
    "name": "monkey_king",
    "localized_name": "Monkey King",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Escape", "Disabler", "Initiator"],
    "legs": 2
}, {
    "id": 119,
    "name": "dark_willow",
    "localized_name": "Dark Willow",
    "primary_attr": "int",
    "attack_type": "Ranged",
    "roles": ["Support", "Nuker", "Disabler", "Escape"],
    "legs": 2
}, {
    "id": 120,
    "name": "pangolier",
    "localized_name": "Pangolier",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": ["Carry", "Nuker", "Disabler", "Durable", "Escape", "Initiator"],
    "legs": 2
}]

export default heroes;