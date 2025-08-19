const lootTypes = [LootType.CHEST, LootType.ENTITY, LootType.BLOCK]

LootJS.modifiers(e => {
    let unifData = JsonIO.read('kubejs/datagen/tagUnificationData.json')
    if (unifData == null) { return }

    for (let tag of Object.entries(unifData)) {
        let tagId = tag[0]
        let prefItem = tag[1].prefItem
        let toUnify = tag[1].toUnify
        if (tagId.includes('ores')) { continue }

        for (let item of toUnify) {
            e.addLootTypeModifier(LootType.CHEST)
                .replaceLoot(item, prefItem, true)
            e.addLootTypeModifier(LootType.ENTITY)
                .replaceLoot(item, prefItem, true)
            e.addLootTypeModifier(LootType.BLOCK)
                .replaceLoot(item, prefItem, true)
        }
    }
})