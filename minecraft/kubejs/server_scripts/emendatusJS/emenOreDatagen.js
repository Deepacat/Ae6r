// const oreFlags = ['ore', 'deepslate_ore', /* 'nether_ore' */]

// ServerEvents.highPriorityData(e => {
//     for (let matObj of Object.entries(global.emendatus_mats)) {
//         let matName = matObj[0]
//         let matTypes = matObj[1].flags.block

//         for (let blockType of matTypes) {
//             if (matObj[1].vanillaFlags && matObj[1].vanillaFlags.includes(blockType)) { continue }
//             let oreBlockId = global.emenGetReplace(global.emendatus_all_types[blockType].replacer, matName)
//             if (oreBlockId == undefined) { continue }
//             if (!oreFlags.includes(blockType)) { continue }

//             let itemToDrop = ''
//             if (matObj[1].type == 'metal') {
//                 itemToDrop = getFlagReplace('raw_ore', matName)
//             } else if (matObj[1].type == 'gem') {
//                 itemToDrop = getFlagReplace('gem', matName)
//             }

//             if (!Item.exists(`emendatus:${itemToDrop}`)) { continue }

//             e.addJson(`emendatus:worldgen/placed_feature/${oreBlockId}`, orePlacedObj(oreBlockId))
//             e.addJson(`emendatus:worldgen/configured_feature/${oreBlockId}`, oreConfiguredObj(oreBlockId, blockType))
//             e.addJson(`emendatus:forge/biome_modifier/${oreBlockId}`, modifier(oreBlockId))
//             e.addJson(`emendatus:loot_tables/blocks/${oreBlockId}`, lootTable(oreBlockId, itemToDrop))

//         }
//     }
// })

// let orePlacedObj = (oreBlockId) => JsonIO.toObject({
//     feature: `emendatus:${oreBlockId}`,
//     placement: [
//         // {
//         //     type: "minecraft:rarity_filter",
//         //     chance: 1
//         // },
//         {
//             type: "minecraft:count",
//             count: 8
//         },
//         {
//             type: "minecraft:in_square"
//         },
//         {
//             type: "minecraft:height_range",
//             height: {
//                 type: "minecraft:trapezoid",
//                 max_inclusive: {
//                     absolute: 52
//                 },
//                 min_inclusive: {
//                     absolute: -32
//                 }
//             }
//         },
//         {
//             type: "minecraft:biome"
//         }
//     ]
// })

// let oreConfiguredObj = (oreBlockId, oreFlag) => JsonIO.toObject({
//     type: "minecraft:ore",
//     config: {
//         discard_chance_on_air_exposure: 0.2,
//         size: 7,
//         // add whole list of stone types with replaceable tags to this in a loop
//         targets: [
//             {
//                 state: {
//                     Name: `emendatus:${oreBlockId}`
//                 },
//                 target: {
//                     predicate_type: "minecraft:tag_match",
//                     tag: `minecraft:${oreReplaceAbleTag[oreFlag]}`
//                 }
//             },
//             // {
//             //     state: {
//             //         Name: `emendatus:deepslate_lead_ore`
//             //     },
//             //     target: {
//             //         predicate_type: "minecraft:tag_match",
//             //         tag: "minecraft:deepslate_ore_replaceables"
//             //     }
//             // }
//         ]
//     }
// })

// let modifier = (oreBlockId) => JsonIO.toObject({
//     type: "forge:add_features",
//     biomes: "#minecraft:is_overworld",
//     features: [
//         `emendatus:${oreBlockId}`
//     ],
//     step: "underground_ores"
// })

// let lootTable = (oreBlockId, blockDrop) => JsonIO.toObject({
//     type: "minecraft:block",
//     pools: [
//         {
//             bonus_rolls: 0,
//             entries: [
//                 {
//                     type: "minecraft:alternatives",
//                     children: [
//                         {
//                             type: "minecraft:item",
//                             conditions: [
//                                 {
//                                     condition: "minecraft:match_tool",
//                                     predicate: {
//                                         enchantments: [
//                                             {
//                                                 enchantment: "minecraft:silk_touch",
//                                                 levels: {
//                                                     min: 1
//                                                 }
//                                             }
//                                         ]
//                                     }
//                                 }
//                             ],
//                             name: `emendatus:${oreBlockId}`
//                         },
//                         {
//                             type: "minecraft:item",
//                             functions: [
//                                 {
//                                     add: false,
//                                     count: {
//                                         type: "minecraft:uniform",
//                                         max: 1,
//                                         min: 1
//                                     },
//                                     function: "minecraft:set_count"
//                                 },
//                                 {
//                                     enchantment: "minecraft:fortune",
//                                     formula: "minecraft:ore_drops",
//                                     function: "minecraft:apply_bonus"
//                                 },
//                                 {
//                                     function: "minecraft:explosion_decay"
//                                 }
//                             ],
//                             name: `emendatus:${blockDrop}`
//                         }
//                     ]
//                 }
//             ],
//             rolls: 1
//         }
//     ],
//     random_sequence: `emendatus:blocks/${oreBlockId}`
// })
