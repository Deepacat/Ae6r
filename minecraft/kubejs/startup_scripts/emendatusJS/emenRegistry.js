StartupEvents.registry('item', e => {
    e.create(`emendatus:charcoal_dust`).texture(`kubejs:item/emendatus/gem/charcoal_dust`)
    e.create(`emendatus:obsidian_dust`).texture(`kubejs:item/emendatus/obsidian_dust`)
    // matObj[1].type = material type, e.g. 'alloy'
    // matObj[0] = material name, e.g. 'copper'
    // itemType = item type id, e.g. 'ingot'
    for (let matObj of Object.entries(global.emendatus_mats)) {
        let matName = matObj[0]
        let matFlags = matObj[1].flags.item
        for (let itemType of matFlags) {
            if (matObj[1].vanillaFlags && matObj[1].vanillaFlags.includes(itemType)) { continue }
            let replaceableId = global.emenGetReplace(global.emendatus_all_types[itemType].replacer, matName)
            if (replaceableId == undefined) { continue }
            let itemId = `emendatus:${replaceableId}`
            let texturePath = `kubejs:item/emendatus/${matObj[1].type}/${replaceableId}`

            console.log(`Registering ${itemId} with texture ${texturePath}`)

            // register item
            let item = e.create(itemId).texture(texturePath)

            // add tags from object for the items type
            for (let tag of global.emendatus_all_types[itemType].tags) {
                item.tag(global.emenGetReplace(tag, matName))
            }
        }
    }
})

StartupEvents.registry('block', e => {
    let registeredOres = {}
    for (let matObj of Object.entries(global.emendatus_mats)) {
        let matName = matObj[0]
        let matTypes = matObj[1].flags.block

        for (let blockFlag of matTypes) {
            if (matObj[1].vanillaFlags && matObj[1].vanillaFlags.includes(blockFlag)) { continue }
            let replaceableId = global.emenGetReplace(global.emendatus_all_types[blockFlag].replacer, matName)
            if (replaceableId == undefined) { continue }

            // registering ores
            if (blockFlag == 'ore' && matObj[1].oreData) {
                console.log(`Registering ${matName} ores`)
                let texturePath = `kubejs:block/emendatus/${matObj[1].type}/overlays/${matName}`
                for (let dimension of Object.entries(matObj[1].oreData.dimensions)) {
                    for (let strataType of global.dimensionsOreData[dimension[0]].strata) {
                        let blockSplit = strataType.split(':')
                        let blockId = blockSplit.length == 2 ?
                            `emendatus:${blockSplit[1]}_${replaceableId}` :
                            `emendatus:${strataType}_${replaceableId}`

                        if (registeredOres[blockId]) { continue }

                        e.create(blockId)
                            // .soundType(global.emendatus_all_types[blockType].oreData.sound)
                            .hardness(3)
                            .tagBoth('forge:ores')
                            .tagBoth(`forge:ores/${matName}`)
                            .tagBlock('minecraft:mineable/pickaxe')
                            .tagBlock(`minecraft:needs_${matObj[1].toolLvl}_tool`)
                            .modelJson = oreModel(strataType, texturePath)
                        registeredOres[blockId] = true
                    }
                }
                continue
            }
            if (blockFlag == 'raw_block') {
                let texturePath = `kubejs:block/emendatus/${matObj[1].type}/raw_${matName}_block`
                console.log(`Registering ${replaceableId} with texture ${texturePath}`)
                e.create(`emendatus:${replaceableId}`)
                    .soundType('stone')
                    .textureAll(texturePath)
                    .hardness(5)
                    .tagBoth('forge:storage_blocks')
                    .tagBoth(`forge:storage_blocks/raw_${matName}`)
                    .tagBlock('minecraft:mineable/pickaxe')
                continue
            }
            // else generation should just be full storage blocks
            if (blockFlag == 'storage_block') {
                let texturePath = `kubejs:block/emendatus/${matObj[1].type}/${replaceableId}`
                console.log(`Registering ${replaceableId} with texture ${texturePath}`)
                e.create(`emendatus:${replaceableId}`)
                    .soundType('metal')
                    .textureAll(texturePath)
                    .hardness(5)
                    .tagBoth('forge:storage_blocks')
                    .tagBoth(`forge:storage_blocks/${matName}`)
                    .tagBlock('minecraft:mineable/pickaxe')
            }
        }
    }
})


const createOreStones = ['create:crimsite', 'create:ochrum', 'create:asurine', 'create:veridium']

function oreModel(blockType, texturePath) {
    if (createOreStones.includes(blockType)) {
        blockType = blockType + "_natural_1"
    }
    let split = blockType.split(':')
    if (split.length == 2) {
        blockType = `${split[0]}:block/${split[1]}`
    } else {
        blockType = `block/${blockType}`
    }

    return {
        loader: "forge:composite",
        textures: { particle: texturePath },
        parent: "block/block",
        children: {
            base: {
                parent: blockType,
                render_type: "solid"
            },
            overlay: {
                parent: "block/cube_all",
                render_type: "translucent",
                textures: { all: texturePath },
            }
        }
    }
}