LootJS.modifiers(e => {
    let unifData = JsonIO.read('kubejs/datagen/itemTagUnificationData.json')
    if (unifData == null) { return }

    for (let tag of Object.entries(unifData)) {
        let tagId = tag[0]
        let prefItem = tag[1].prefItem
        let toUnify = tag[1].toUnify
        if (tagId.includes('ores')) { continue }

        for (let item of toUnify) {
            e.addLootTableModifier(/.*/)
                .replaceLoot(item, prefItem, true)
        }
    }
})