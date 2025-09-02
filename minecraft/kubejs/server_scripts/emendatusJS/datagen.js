// priority: 1

ServerEvents.recipes(e => {
    /*datagen is done in recipe events so that the item registry is always accessible
    datagen only runs if the files are already cleared since if they aren't clear then datagen
    was already used for things which will mess up further datagen */

    /* datagenning tag unification data, as this data will hide and remove tags from most items,
    it will break recipes which rely on the tags without a datagen */
    if (JsonIO.read('kubejs/datagen/itemTagUnificationData.json') == null) {
        let datagenObj = {}
        for (let material of materialsToUnify) {
            for (let type of typesToUnify) {
                if (entryIsBlacklisted(material, type)) { continue }
                let tagString = `forge:${type}s/${material}`
                if (type == 'raw_block') { tagString = `forge:storage_blocks/raw_${material}` }
                let tag = Ingredient.of(`#${tagString}`)
                if (!(tag.stacks.size() > 1)) { continue }
                let prefItem = getPreferredItemInTag(tag)

                datagenObj[tagString] = {}
                datagenObj[tagString].prefItem = prefItem.id
                datagenObj[tagString].toUnify = []

                for (let item of tag.itemIds) {
                    if (item == prefItem) { continue }
                    datagenObj[tagString].toUnify.push(item)
                }
            }
        }
        JsonIO.write('kubejs/datagen/itemTagUnificationData.json', datagenObj)
    }

    // datagen for fluid data
    if (JsonIO.read('kubejs/datagen/fluidTagUnificationData.json') == null) {
        let datagenObj = {}
        for (let material of materialsToUnify) {
            for (let type of typesToUnify) {
                if (entryIsBlacklisted(material, type)) { continue }
                let fluids = getFluidsOfMaterial(material)
                if (fluids == undefined || fluids.prefFluid == undefined) { continue }
                datagenObj[material] = fluids
            }
        }
        JsonIO.write('kubejs/datagen/fluidTagUnificationData.json', datagenObj)
    }
})