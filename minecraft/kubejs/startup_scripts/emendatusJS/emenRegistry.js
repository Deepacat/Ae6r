StartupEvents.registry('item', e => {
    // matObj[1].type = material type, e.g. 'alloy'
    // matObj[0] = material name, e.g. 'copper'
    // itemType = item type id, e.g. 'ingot'
    for (let matObj of Object.entries(global.emendatus_mats)) {
        let matName = matObj[0]
        let matFlags = matObj[1].flags.item
        let ignoreFlags = matObj[1].ignoreRegisterFlags

        for (let itemFlag of matFlags) {
            if (ignoreFlags && ignoreFlags.includes(itemFlag)) { continue }
            let replaceableId = global.emenGetReplace(global.emendatus_all_types[itemFlag].replacer, matName)
            if (replaceableId == undefined) { continue }
            let itemId = `emendatus:${replaceableId}`
            let texturePath = `emendatus:item/${replaceableId}`

            console.log(`Registering ${itemId}`)

            // register item
            let item = e.create(itemId).texture(texturePath)

            // add tags from object for the items type
            for (let tag of global.emendatus_all_types[itemFlag].tags) {
                item.tag(global.emenGetReplace(tag, matName))
                if (!matObj[1].tagMaterials) { continue }
                for (let mat of matObj[1].tagMaterials) {
                    item.tag(global.emenGetReplace(tag, mat))
                }
            }
        }
    }
})

StartupEvents.registry('block', e => {
    let registeredOres = {}
    for (let matObj of Object.entries(global.emendatus_mats)) {
        let matName = matObj[0]
        let matTypes = matObj[1].flags.block
        let ignoreFlags = matObj[1].ignoreRegisterFlags

        for (let blockFlag of matTypes) {
            if (!(blockFlag == 'ore') && ignoreFlags && ignoreFlags.includes(blockFlag)) { continue }
            let replaceableId = global.emenGetReplace(global.emendatus_all_types[blockFlag].replacer, matName)
            if (replaceableId == undefined) { continue }

            // registering ores
            if (blockFlag == 'ore' && matObj[1].oreData) {
                console.log(`Registering ${matName} ores`)
                let texturePath = `emendatus:block/overlays/${matName}`
                for (let veinData of Object.entries(matObj[1].oreData.veins)) {
                    for (let strataType of global.dimensionsOreData[veinData[1].dimension].strata) {
                        let blockSplit = strataType.split(':')
                        let blockId = blockSplit.length == 2 ?
                            `emendatus:${blockSplit[1]}_${replaceableId}` :
                            `emendatus:${strataType}_${replaceableId}`
                        if (registeredOres[blockId]) { continue }
                        let b = e.create(blockId)
                            // .soundType(global.emendatus_all_types[blockType].oreData.sound)
                            .hardness(3)
                            .requiresTool()
                            .tagBlock('minecraft:mineable/pickaxe')
                            .tagBlock(`minecraft:needs_${matObj[1].toolLvl}_tool`)
                        b.modelJson = oreModel(strataType, texturePath)
                        for (let tag of global.emendatus_all_types[blockFlag].tags) {
                            b.tagBoth(global.emenGetReplace(tag, matName))
                            if (!matObj[1].tagMaterials) { continue }
                            for (let mat of matObj[1].tagMaterials) {
                                b.tagBoth(global.emenGetReplace(tag, mat))
                            }
                        }
                        registeredOres[blockId] = true
                    }
                }
                continue
            }
            if (blockFlag == 'raw_block') {
                let texturePath = `emendatus:block/raw_${matName}_block`
                console.log(`Registering ${replaceableId} with texture ${texturePath}`)
                let b = e.create(`emendatus:${replaceableId}`)
                    .soundType('stone')
                    .textureAll(texturePath)
                    .hardness(5)
                    .requiresTool()
                    .tagBlock('minecraft:mineable/pickaxe')
                for (let tag of global.emendatus_all_types[blockFlag].tags) {
                    b.tagBoth(global.emenGetReplace(tag, matName))
                    if (!matObj[1].tagMaterials) { continue }
                    for (let mat of matObj[1].tagMaterials) {
                        b.tagBoth(global.emenGetReplace(tag, mat))
                    }
                }
                continue
            }
            // else generation should just be full storage blocks
            if (blockFlag == 'storage_block') {
                let texturePath = `emendatus:block/${replaceableId}`
                console.log(`Registering ${replaceableId} with texture ${texturePath}`)
                let b = e.create(`emendatus:${replaceableId}`)
                    .soundType('metal')
                    .textureAll(texturePath)
                    .hardness(5)
                    .requiresTool()
                    .tagBlock('minecraft:mineable/pickaxe')
                for (let tag of global.emendatus_all_types[blockFlag].tags) {
                    b.tagBoth(global.emenGetReplace(tag, matName))
                    if (!matObj[1].tagMaterials) { continue }
                    for (let mat of matObj[1].tagMaterials) {
                        b.tagBoth(global.emenGetReplace(tag, mat))
                    }
                }
            }
        }
    }
    registeredOres = null
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