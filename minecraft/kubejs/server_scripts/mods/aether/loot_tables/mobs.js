LootJS.modifiers(e => {
    // mimic
    e.addLootTableModifier("aether:entities/mimic")
        .randomChance(0.3)
        .addWeightedLoot([1, 1], aspectusShards)
        .limitCount([1, 2])
})