// generating replaceable ore tags for ore configured features
ServerEvents.tags('block', e => {
    for (let matObj of Object.entries(global.emendatus_mats)) {
        let matName = matObj[0]
        let matTypes = matObj[1].flags.block

        for (let blockFlag of matTypes) {
            if (matObj[1].vanillaFlags && matObj[1].vanillaFlags.includes(blockFlag)) { continue }
            let replaceableId = global.emenGetReplace(global.emendatus_all_types[blockFlag].replacer, matName)
            if (replaceableId == undefined) { continue }
            if (blockFlag == 'ore' && matObj[1].oreData) {
                console.log(`Registering ${matName} ores`)
                for (let dimension of Object.entries(matObj[1].oreData.dimensions)) {
                    for (let strataType of global.dimensionsOreData[dimension[0]].strata) {
                        let blockSplit = strataType.split(':')
                        let fixedBlockType = blockSplit.length == 2 ?
                            `emendatus:${blockSplit[1]}` :
                            `emendatus:${strataType}`
                        e.add(`${fixedBlockType}_ore_replaceables`, `${fixedBlockType}_${replaceableId}`)
                    }
                }
            }
        }
    }
})

// generating ore worldgen data and loot tables
ServerEvents.highPriorityData(e => {
    for (let matObj of Object.entries(global.emendatus_mats)) {
        let matName = matObj[0]
        let matTypes = matObj[1].flags.block

        for (let blockFlag of matTypes) {
            if (matObj[1].vanillaFlags && matObj[1].vanillaFlags.includes(blockFlag)) { continue }
            let replaceableId = global.emenGetReplace(global.emendatus_all_types[blockFlag].replacer, matName)
            if (replaceableId == undefined) { continue }
            if (blockFlag == 'ore' && matObj[1].oreData) {
                let oreData = matObj[1].oreData
                for (let dimension of Object.entries(oreData.dimensions)) {
                    let dimData = global.dimensionsOreData[dimension[0]]
                    let featureId = `${dimension[0].split(':')[1]}_${matName}_ore`

                    let configuredOre = oreConfiguredObj(dimension[1].size)
                    let biomeModifier = modifier(dimData.biomeTag)
                    let placedOre = orePlacedObj(featureId, dimension[1].range, dimension[1].count)

                    for (let strataType of dimData.strata) {
                        let blockSplit = strataType.split(':')
                        let fixedBlockType = blockSplit.length == 2 ?
                            blockSplit[1] :
                            strataType

                        let oreBlockId = `emendatus:${fixedBlockType}_${replaceableId}`
                        let itemDropId = `emendatus:${getFlagReplace(oreData.dropType, matName)}`

                        configuredOre.config.targets.push({
                            state: { Name: oreBlockId },
                            target: {
                                predicate_type: "minecraft:tag_match",
                                tag: `emendatus:${fixedBlockType}_ore_replaceables`
                            }
                        })
                        biomeModifier.features.push(oreBlockId)

                        console.log(`${oreBlockId}, ${itemDropId}, ${oreData.dropCountRange}`)

                        let oreLoot = lootTable(oreBlockId, itemDropId, oreData.dropCountRange)
                        e.addJson(`emendatus:loot_tables/blocks/${fixedBlockType}`, oreLoot)
                    }
                    console.log(`feature id: ${featureId}`)
                    e.addJson(`emendatus:worldgen/placed_feature/${featureId}`, placedOre)
                    e.addJson(`emendatus:forge/biome_modifier/${featureId}`, biomeModifier)
                    e.addJson(`emendatus:worldgen/configured_feature/${featureId}`, configuredOre)
                }
            }
        }
    }
})

let orePlacedObj = (featureId, heightRange, veinCountPerChunk) => JsonIO.toObject({
    feature: featureId,
    placement: [
        // {
        //     type: "minecraft:rarity_filter",
        //     chance: 1
        // },
        {
            type: "minecraft:count",
            count: veinCountPerChunk
        },
        {
            type: "minecraft:in_square"
        },
        {
            type: "minecraft:height_range",
            height: {
                type: "minecraft:trapezoid",
                max_inclusive: {
                    absolute: heightRange[1]
                },
                min_inclusive: {
                    absolute: heightRange[0]
                }
            }
        },
        {
            type: "minecraft:biome"
        }
    ]
})

let oreConfiguredObj = (oreVeinSize) => JsonIO.toObject({
    type: "minecraft:ore",
    config: {
        discard_chance_on_air_exposure: 0.2,
        size: oreVeinSize,
        targets: [
            // targets added by loop
        ]
    }
})

let modifier = (biomeTag) => JsonIO.toObject({
    type: "forge:add_features",
    biomes: biomeTag,
    features: [
        // add features here
    ],
    step: "underground_ores"
})

let lootTable = (oreBlockId, itemToDrop, dropRange) => JsonIO.toObject({
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
                            name: oreBlockId
                        },
                        {
                            type: "minecraft:item",
                            functions: [
                                {
                                    add: false,
                                    count: {
                                        type: "minecraft:uniform",
                                        max: dropRange[1],
                                        min: dropRange[0]
                                    },
                                    function: "minecraft:set_count"
                                },
                                {
                                    enchantment: "minecraft:fortune",
                                    formula: "minecraft:ore_drops",
                                    function: "minecraft:apply_bonus"
                                },
                                {
                                    function: "minecraft:explosion_decay"
                                }
                            ],
                            name: itemToDrop
                        }
                    ]
                }
            ],
            rolls: 1
        }
    ],
    random_sequence: `emendatus:blocks/${oreBlockId.split[':'][1]}`
})
