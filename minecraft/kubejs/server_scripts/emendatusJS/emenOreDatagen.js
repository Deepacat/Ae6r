// StartupEvents.registry('block', e => {
//     for (let matObj of Object.entries(global.emendatus_mats)) {
//         let matName = matObj[0]
//         let matTypes = matObj[1].flags.block

//         for (let blockType of matTypes) {
//             if (matObj[1].vanillaFlags && matObj[1].vanillaFlags.includes(blockType)) { continue }
//             let replaceableId = global.emenGetReplace(global.emendatus_all_types[blockType].replacer, matName)
//             if (replaceableId == undefined) { continue }

//             // registering ores
//             if (oreFlags.includes(blockType)) {
//                 let texturePath = `kubejs:block/emendatus/${matObj[1].type}/overlays/${matName}`
//                 let oreBlock = global.emendatus_all_types[blockType].oreData.block

//             }
//         }
//     }
// })


let orePlacedObj = JsonIO.toObject({
    feature: `emendatus:ore_lead`,
    placement: [
        // {
        //     type: "minecraft:rarity_filter",
        //     chance: 1
        // },
        {
            type: "minecraft:count",
            count: 12
        },
        {
            type: "minecraft:in_square"
        },
        {
            type: "minecraft:height_range",
            height: {
                type: "minecraft:trapezoid",
                max_inclusive: {
                    absolute: 52
                },
                min_inclusive: {
                    absolute: -32
                }
            }
        },
        {
            type: "minecraft:biome"
        }
    ]
})

let oreConfiguredObj = JsonIO.toObject({
    type: "minecraft:ore",
    config: {
        discard_chance_on_air_exposure: 0.2,
        size: 10,
        targets: [
            {
                state: {
                    Name: `emendatus:lead_ore`
                },
                target: {
                    predicate_type: "minecraft:tag_match",
                    tag: "minecraft:stone_ore_replaceables"
                }
            },
            {
                state: {
                    Name: `emendatus:deepslate_lead_ore`
                },
                target: {
                    predicate_type: "minecraft:tag_match",
                    tag: "minecraft:deepslate_ore_replaceables"
                }
            }
        ]
    }
})

let modifier = JsonIO.toObject({
    type: "forge:add_features",
    biomes: "#minecraft:is_overworld",
    features: [
        "emendatus:ore_lead"
    ],
    step: "underground_ores"
})

let poolTest = JsonIO.toObject({
    type: "minecraft:block",
    pools: [
        {
            bonus_rolls: 0,
            entries: [
                {
                    type: "minecraft:alternatives",
                    children: [
                        {
                            type: "minecraft:item",
                            conditions: [
                                {
                                    condition: "minecraft:match_tool",
                                    predicate: {
                                        enchantments: [
                                            {
                                                enchantment: "minecraft:silk_touch",
                                                levels: {
                                                    min: 1
                                                }
                                            }
                                        ]
                                    }
                                }
                            ],
                            name: `emendatus:lead_ore`
                        },
                        {
                            type: "minecraft:item",
                            functions: [
                                {
                                    enchantment: "minecraft:fortune",
                                    formula: "minecraft:ore_drops",
                                    function: "minecraft:apply_bonus"
                                },
                                {
                                    function: "minecraft:explosion_decay"
                                }
                            ],
                            name: `emendatus:raw_lead`
                        }
                    ]
                }
            ],
            rolls: 1
        }
    ],
    random_sequence: `emendatus:blocks/lead_ore`
})

// JsonIO.write(`kubejs/data/kubejs/worldgen/placed_feature/emendatus_lead_ore.json`, orePlacedObj)
// JsonIO.write(`kubejs/data/kubejs/worldgen/configured_feature/emendatus_lead_ore.json`, oreConfiguredObj)

ServerEvents.highPriorityData(e => {
    e.addJson(`emendatus:worldgen/placed_feature/ore_lead`, orePlacedObj)
    e.addJson(`emendatus:worldgen/configured_feature/ore_lead`, oreConfiguredObj)
    e.addJson(`emendatus:forge/biome_modifier/overworld_ores`, modifier)
    e.addJson(`emendatus:loot_tables/blocks/lead_ore`, poolTest)
})