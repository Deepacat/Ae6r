ServerEvents.tags('item', e => {
    let unifData = JsonIO.read('kubejs/datagen/tagUnificationData.json')
    if (unifData == null) { return }

    for (let tag of Object.entries(unifData)) {
        let tagId = tag[0]
        if (tagId.includes('ores')) { continue }

        let prefItem = tag[1].prefItem
        let toUnify = tag[1].toUnify

        /* removing tags breaks all the recipes which are based on tags rn
        should probably switch all of that to work on a datagen too so tag removals work */
        e.remove(tagId, toUnify)
        e.add('c:hidden_from_recipe_viewers', toUnify)
    }
})