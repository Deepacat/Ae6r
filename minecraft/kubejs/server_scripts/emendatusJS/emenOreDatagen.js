// generating replaceable ore tags for ore configured features
ServerEvents.tags('block', e => {
    for (let matObj of Object.entries(global.emendatus_mats)) {
        let matName = matObj[0]
        let matTypes = matObj[1].flags.block

        for (let blockFlag of matTypes) {
            let replaceableId = global.emenGetReplace(global.emendatus_all_types[blockFlag].replacer, matName)
            if (replaceableId == undefined) { continue }
            if (blockFlag == 'ore' && matObj[1].oreData) {
                console.log(`Registering ${matName} ores`)
                for (let veinData of Object.entries(matObj[1].oreData.veins)) {
                    for (let strataType of global.dimensionsOreData[veinData[1].dimension].strata) {
                        let blockSplit = strataType.split(':')
                        let fixedBlockType = blockSplit.length == 2 ?
                            `emendatus:${blockSplit[1]}` :
                            `emendatus:${strataType}`
                        e.add(`${fixedBlockType}_ore_replaceables`, strataType)
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
        console.log(matName)

        for (let blockFlag of matTypes) {
            if (!(blockFlag == 'ore' && matObj[1].oreData)) { continue }
            // if (matObj[1].vanillaFlags && matObj[1].vanillaFlags.includes(blockFlag)) { continue }
            let replaceableId = global.emenGetReplace(global.emendatus_all_types[blockFlag].replacer, matName)
            if (replaceableId == undefined) { continue }
            let oreData = matObj[1].oreData
            for (let veinData of Object.entries(oreData.veins)) {
                let dimData = global.dimensionsOreData[veinData[1].dimension]
                if (dimData.biomeTag == '') { continue }

                let featureId = veinData[0]
                let configuredOre = oreConfiguredObj(veinData[1].size, oreData.airDiscardChance)
                let biomeModifier = modifier(featureId, dimData.biomeTag)
                let placedOre = orePlacedObj(featureId, veinData[1].range, veinData[1].count)

                for (let strataType of dimData.strata) {
                    let blockSplit = strataType.split(':')
                    let fixedBlockType = blockSplit.length == 2 ?
                        blockSplit[1] :
                        strataType

                    let oreBlockId = `emendatus:${fixedBlockType}_${replaceableId}`
                    let itemDropId = `emendatus:${getFlagReplace(oreData.dropType, matName)}`

                    // replace vanilla drops from object because edge cases suck
                    if (oreData.vanillaDrop) { itemDropId = oreData.vanillaDrop }
                    if (!Item.exists(itemDropId)) { itemDropId = 'kubejs:replaceme' }

                    configuredOre.config.targets.push({
                        state: { Name: oreBlockId },
                        target: {
                            predicate_type: "minecraft:tag_match",
                            tag: `emendatus:${fixedBlockType}_ore_replaceables`
                        }
                    })

                    let oreLoot = lootTable(oreBlockId, itemDropId, oreData.dropCountRange)
                    e.addJson(`emendatus:loot_tables/blocks/${fixedBlockType}_${replaceableId}`, oreLoot)
                }
                e.addJson(`emendatus:worldgen/placed_feature/${featureId}`, placedOre)
                e.addJson(`emendatus:worldgen/configured_feature/${featureId}`, configuredOre)
                e.addJson(`emendatus:forge/biome_modifier/${featureId}`, biomeModifier)
            }
        }
    }
})

let orePlacedObj = (featureId, heightRange, veinCountPerChunk) => JsonIO.toObject({
    feature: `emendatus:${featureId}`,
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

let oreConfiguredObj = (oreVeinSize, airDiscardChance) => JsonIO.toObject({
    type: "minecraft:ore",
    config: {
        discard_chance_on_air_exposure: airDiscardChance,
        size: oreVeinSize,
        targets: [
            // targets added by loop
        ]
    }
})

let modifier = (featureId, biomeTag) => JsonIO.toObject({
    type: "forge:add_features",
    biomes: biomeTag,
    features: [`emendatus:${featureId}`],
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
    random_sequence: `emendatus:blocks/${oreBlockId.split(':')[1]}`
})
