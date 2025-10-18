// file for custom worldgen, if editing existing worldgen with data related to a mod use their folder

ServerEvents.highPriorityData(e => {
    // alien debris ore gen
    e.addJson('kubejs:worldgen/configured_feature/ore_alien_debris', {
        type: "minecraft:scattered_ore",
        config: {
            discard_chance_on_air_exposure: 0.0,
            size: 4,
            targets: [
                {
                    state: {
                        Name: "kubejs:alien_debris"
                    },
                    target: {
                        predicate_type: "minecraft:block_match",
                        block: "minecraft:end_stone"
                    }
                }
            ]
        }
    })
    e.addJson('kubejs:worldgen/placed_feature/ore_alien_debris', {
        feature: "kubejs:ore_alien_debris",
        placement: [
            {
                type: "minecraft:in_square"
            },
            {
                type: "minecraft:height_range",
                height: {
                    type: "minecraft:uniform",
                    max_inclusive: {
                        absolute: 40
                    },
                    min_inclusive: {
                        absolute: 0
                    }
                }
            },
            {
                type: "minecraft:biome"
            },
            {
                type: "minecraft:rarity_filter",
                chance: 2
            }
        ]
    })
    e.addJson('kubejs:forge/biome_modifier/ores_end', {
        type: "forge:add_features",
        biomes: "#minecraft:is_end",
        features: [
            "kubejs:ore_alien_debris"
        ],
        step: "underground_ores"
    })
})