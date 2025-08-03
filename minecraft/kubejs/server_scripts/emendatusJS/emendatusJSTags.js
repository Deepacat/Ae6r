let emDbg = function consoleLogDebugMessage(msg) {
    if (global.emenDebug) { console.log(msg) }
}

// need to generate some data since item registry isn't available to compare to on first load (Ingredient.of can't get existing tags)
ServerEvents.tags('item', event => {
    let dataObj = {}
    let dataGen = false

    // checks if theres any items in the copper ingot tag, to check if item registry access is available
    // when launching for the first time, it doesn't have access and needs a /reload
    if (Ingredient.of('#forge:ingots/copper').itemIds.toArray()[0] !=
        ('minecraft:barrier' || 'minecraft:air' || [] || undefined || '')
    ) {
        dataGen = true
        console.log('Datagen is running for tags')
    }

    for (let matObj of Object.entries(global.emendatus_mats)) {
        dataObj[matObj[0]] = []

        let matName = matObj[0]
        let matType = matObj[1].type
        let matTypesToUse = global.emendatus_base_flags[matType].item
            .concat(global.emendatus_base_flags[matType].block)
            .concat(matObj[1].addFlags)

        for (let itemType of matTypesToUse) {
            let tagId = `forge:${global.emendatus_all_types[itemType].tag}${matObj[0]}`
            let itemId = `emendatus:${global.emenGetReplace(global.emendatus_all_types[itemType].replacer, matName, 'all')}`
            if (matObj[1].delFlags.includes(itemType)) { continue }
            if (global.emenHideNonReplacing) {
                // emDbg(`Adding hidden tag to ${itemId}`)
                event.add('c:hidden_from_recipe_viewers', itemId)
            }

            // check tag for existing items from other mods
            let existingItems = Ingredient.of(`#${tagId}`).itemIds.toArray()
            let checkExisting = (existingItems.length > 0 && !existingItems[0].includes('emendatus'))
            
            if (checkExisting && dataGen) {
                dataObj[matName].push(itemType)
            }
        }
    }
    if (dataGen && global.emenDatagen) {
        console.log('Saving tag data for emendatus datagen')
        JsonIO.write('kubejs/datagen/tags.json', dataObj)
    }

    let data = JsonIO.read('kubejs/datagen/tags.json')
    for (let itemMat in data) {
        for (let itemType of data[itemMat]) {
            let itemId = `emendatus:${global.emenGetReplace(global.emendatus_all_types[itemType].replacer, itemMat, 'all')}`
            // emDbg(`removing hidden tag from "emendatus:${itemMat}_${itemType}"`)
            event.remove('c:hidden_from_recipe_viewers', itemId)
        }
    }
})