let emDbg = function consoleLogDebugMessage(msg) {
    if (global.emenDebug) { console.log(msg) }
}

StartupEvents.registry('item', e => {
    e.create(`emendatus:charcoal_dust`).texture(`kubejs:item/emendatus/vanilla/charcoal_dust`)
    e.create(`emendatus:obsidian_dust`).texture(`kubejs:item/emendatus/vanilla/obsidian_dust`)
    // matObj[1].type = material type, e.g. 'alloy'
    // matObj[0] = material name, e.g. 'copper'
    // itemType = item type id, e.g. 'ingot'
    for (let matObj of Object.entries(global.emendatus_mats)) {
        let matName = matObj[0]
        if (matObj[1].addFlags.length > 0) { emDbg(`${matName} has additional flags: ${matObj[1].addFlags}`) }

        let matTypes = global.emendatus_base_flags[matObj[1].type].item.concat(matObj[1].addFlags)

        for (let itemType of matTypes) {
            let replaceableId = global.emenGetReplace(global.emendatus_all_types[itemType].replacer, matName)

            if (replaceableId == undefined) { continue }
            if (matObj[1].delFlags.includes(itemType)) { continue }

            let itemId = `emendatus:${replaceableId}`
            let texturePath = `kubejs:item/emendatus/${matObj[1].type}/${replaceableId}`

            emDbg(`Registering ${itemId} with texture ${texturePath}`)

            // register item
            let item = e.create(itemId).texture(texturePath)

            // add tags from object for the items type
            for(let tag of global.emendatus_all_types[itemType].tags) {
                item.tag(global.emenGetReplace(tag, matName))
            }
        }
    }
})

StartupEvents.registry('block', e => {
    for (let matObj of Object.entries(global.emendatus_mats)) {
        let matName = matObj[0]
        if (matObj[1].addFlags.length > 0) { emDbg(`${matName} has additional flags: ${matObj[1].addFlags}`) }
        
        let matTypes = global.emendatus_base_flags[matObj[1].type].block.concat(matObj[1].addFlags)

        for (let blockType of matTypes) {
            let replaceableId = global.emenGetReplace(global.emendatus_all_types[blockType].replacer, matName)

            if (replaceableId == undefined) { continue }
            if (matObj[1].delFlags.includes(blockType)) { continue }

            let blockId = `emendatus:${replaceableId}`
            emDbg(`Registering ${blockId} with texture ${texturePath}`)
            // registering ores
            if (blockType == 'ore') {
                let texturePath = `kubejs:block/emendatus/${matObj[1].type}/overlays/${matName}`
                // if (matObj[1].type == 'gem') { texturePath = texturePath + '_sample' }
                let ore = e.create(blockId)
                ore.soundType('stone')
                ore.hardness(5)
                ore.tagBlock('forge:ores')
                ore.tagBlock(`forge:ores/${matName}`)
                ore.tagBlock('minecraft:mineable/pickaxe')
                ore.tagBlock(`minecraft:needs_${matObj[1].toolLv}_tool`)
                ore.modelJson = {
                    loader: "forge:composite",
                    textures: { particle: texturePath },
                    parent: "block/block",
                    children: {
                        base: {
                            parent: "block/cube_all",
                            render_type: "solid",
                            textures: { all: "block/stone" },
                        },
                        overlay: {
                            parent: "block/cube_all",
                            render_type: "translucent",
                            textures: { all: texturePath },
                        }
                    }
                }
                continue
            }
            if (blockType == 'raw_ore') {
                let texturePath = `kubejs:block/emendatus/${matObj[1].type}/raw/${matName}`
                e.create(blockId)
                    .soundType('stone')
                    .textureAll(texturePath)
                    .hardness(5)
                    .tagBlock('forge:storage_blocks')
                    .tagBlock(`forge:storage_blocks/raw_${matName}`)
                continue
            }
            // else generation should just be full storage blocks
            let texturePath = `kubejs:block/emendatus/${matObj[1].type}/${replaceableId}`
            e.create(blockId)
                .soundType('metal')
                .textureAll(texturePath)
                .hardness(5)
                .tagBlock('forge:storage_blocks')
                .tagBlock(`forge:storage_blocks/${matName}`)
        }
    }
})