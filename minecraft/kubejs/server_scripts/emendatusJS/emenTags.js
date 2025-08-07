let emDbg = function consoleLogDebugMessage(msg) {
    if (global.emenDebug) { console.log(msg) }
}

// need to generate some data since item registry isn't available to compare to on first load (Ingredient.of can't get existing tags)
ServerEvents.tags('item', e => {
    let hidingDataObj = {}
    let unifyDataObj = {}
    let dataGen = false

    // checks if theres any items in the copper ingot tag, to check if item registry access is available
    // when launching for the first time, it doesn't have access and needs a /reload
    console.log((Ingredient.of('#forge:ingots/copper').itemIds.contains('minecraft:copper_ingot')))
    if (global.emenDatagen && (Ingredient.of('#forge:ingots/copper').itemIds.contains('minecraft:copper_ingot'))) {
        dataGen = true
        console.log('Datagen is running for tags')
    }

    for (let matObj of Object.entries(global.emendatus_mats)) {
        hidingDataObj[matObj[0]] = []

        let matName = matObj[0]
        let matType = matObj[1].type
        let matFlags = matObj[1].flags.all

        for (let itemType of matFlags) {
            let tagId = `forge:${global.emendatus_all_types[itemType].tag}${matObj[0]}`
            let itemId = `emendatus:${global.emenGetReplace(global.emendatus_all_types[itemType].replacer, matName, 'all')}`
            if (global.emenHideNonReplacing) {
                emDbg(`Adding hidden tag to ${itemId}`)
                e.add('c:hidden_from_recipe_viewers', itemId)
            }

            // check tag for existing items from other mods
            let existingItems = Ingredient.of(`#${tagId}`).itemIds.toArray()

            if (dataGen && existingItems.length > 1) {
                hidingDataObj[matName].push(itemType)

                if (tagId.includes('ores')) { continue }
                unifyDataObj[tagId] = existingItems.slice()
            }
        }
    }
    if (dataGen) {
        console.log('Saving tag datagen for emendatusJS')
        JsonIO.write('kubejs/datagen/tags.json', hidingDataObj)
        JsonIO.write('kubejs/datagen/unify.json', unifyDataObj)
    }

    let hidingData = JsonIO.read('kubejs/datagen/tags.json')
    for (let itemMat in hidingData) {
        for (let itemType of hidingData[itemMat]) {
            let itemId = `emendatus:${global.emenGetReplace(global.emendatus_all_types[itemType].replacer, itemMat, 'all')}`
            emDbg(`removing hidden tag from "emendatus:${itemMat}_${itemType}"`)
            e.remove('c:hidden_from_recipe_viewers', itemId)
        }
    }

    let unifData = JsonIO.read('kubejs/datagen/unify.json')
    for (let tagId in unifData) {
        for (let itemId of unifData[tagId]) {
            if (itemId.includes('emendatus')) { continue }
            e.remove(tagId, itemId)
            e.add('c:hidden_from_recipe_viewers', itemId)
        }
    }
})