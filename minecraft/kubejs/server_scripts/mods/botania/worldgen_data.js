ServerEvents.highPriorityData(e => {
    // change mystical flower spawning rates
    e.addJson('botania:worldgen/placed_feature/mystical_flowers',
        {
            "feature": "botania:mystical_flowers",
            "placement": [
                {
                    "type": "minecraft:count",
                    "count": 3
                },
                {
                    "type": "minecraft:rarity_filter",
                    "chance": 4
                },
                {
                    "type": "minecraft:in_square"
                },
                {
                    "type": "minecraft:heightmap",
                    "heightmap": "MOTION_BLOCKING_NO_LEAVES"
                },
                {
                    "type": "minecraft:biome"
                }
            ]
        }
    )

    // move mystical flowers to only spawn in aether/alfheim naturally
    e.addJson('botania:tags/worldgen/biome/mystical_flower_spawnlist',
        {
            "replace": true,
            "values": [
                "#aether:is_aether",
                "#mythicbotany:alfheim"
            ]
        }
    )
})
