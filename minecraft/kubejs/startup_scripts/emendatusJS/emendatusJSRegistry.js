let emDbg = function consoleLogDebugMessage(msg) {
    if (global.emenDebug) { console.log(msg) }
}

StartupEvents.registry('item', event => {
    event.create(`emendatus:charcoal_dust`).texture(`kubejs:item/emendatus/vanilla/charcoal_dust`)
    event.create(`emendatus:obsidian_dust`).texture(`kubejs:item/emendatus/vanilla/obsidian_dust`)
    // matObj[1].type = material type, e.g. 'alloy'
    // matObj[0] = material name, e.g. 'copper'
    // itemType = item type id, e.g. 'ingot'
    for (let matObj of Object.entries(global.emendatus_mats)) {
        if (matObj[1].addFlags.length > 0) { emDbg(`${matObj[0]} has additional flags: ${matObj[1].addFlags}`) }
        let matTypes = global.gbfpt(matObj[1].type)[0].concat(matObj[1].addFlags)
        for (let itemType of matTypes) {
            let replaceableId = global.emenGetTypeReplace(itemType, matObj[0], 'item')
            if (replaceableId == undefined) { continue }
            if (matObj[1].delFlags.includes(itemType)) { continue }
            let itemId = `emendatus:${replaceableId}`
            let texturePath = `kubejs:item/emendatus/${matObj[1].type}/${replaceableId}`
            emDbg(`Registering ${itemId} with texture ${texturePath}`)
            event.create(itemId).texture(texturePath)
        }
    }
})

let ores = []

StartupEvents.registry('block', e => {
    for (let matObj of Object.entries(global.emendatus_mats)) {
        if (matObj[1].addFlags.length > 0) { emDbg(`${matObj[0]} has additional flags: ${matObj[1].addFlags}`) }
        let matTypes = global.gbfpt(matObj[1].type)[1].concat(matObj[1].addFlags)
        for (let blockType of matTypes) {
            let replaceableId = global.emenGetTypeReplace(blockType, matObj[0], 'block')
            if (replaceableId == undefined) { continue }
            if (matObj[1].delFlags.includes(blockType)) { continue }
            let blockId = `emendatus:${replaceableId}`
            emDbg(`Registering ${blockId} with texture ${texturePath}`)
            // registering ores
            if (blockType == 'ore') {
                let texturePath = `kubejs:block/emendatus/${matObj[1].type}/overlays/${matObj[0]}`
                // if (matObj[1].type == 'gem') { texturePath = texturePath + '_sample' }
                let ore = e.create(blockId)
                ores.push(ore)
                ore.soundType('stone')
                ore.hardness(5)
                ore.tagBlock('forge:ores')
                ore.tagBlock(`forge:ores/${matObj[0]}`)
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
                let texturePath = `kubejs:block/emendatus/${matObj[1].type}/raw/${matObj[0]}`
                e.create(blockId)
                    .soundType('stone')
                    .textureAll(texturePath)
                    .hardness(5)
                    .tagBlock('forge:storage_blocks')
                    .tagBlock(`forge:storage_blocks/raw_${matObj[0]}`)
                continue
            }
            // else generation should just be full storage blocks
            let texturePath = `kubejs:block/emendatus/${matObj[1].type}/${replaceableId}`
            e.create(blockId)
                .soundType('metal')
                .textureAll(texturePath)
                .hardness(5)
                .tagBlock('forge:storage_blocks')
                .tagBlock(`forge:storage_blocks/${matObj[0]}`)
        }
    }
})