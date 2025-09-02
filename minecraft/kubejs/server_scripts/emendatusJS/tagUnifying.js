// priority: 0
// low priority since this should load after unification/datagen

ServerEvents.tags('item', e => {
    let unifData = JsonIO.read('kubejs/datagen/itemTagUnificationData.json')
    if (unifData == null) { return }

    for (let tag of Object.entries(unifData)) {
        let tagId = tag[0]
        let toUnify = tag[1].toUnify
        if (tagId.includes('ores')) { continue }

        e.remove(tagId, toUnify)
        e.add('c:hidden_from_recipe_viewers', toUnify)
    }
})