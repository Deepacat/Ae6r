LootJS.modifiers(e => {
    let aspecti = ['aer', 'aqua', 'ignis', 'terra', 'ordo', 'perditio', 'mortuus', 'cognitio', 'praecantatio']
    let aspectusShards = aspecti.map(aspect => Item.of(`kubejs:${aspect}_aspectus_shard`))
    let aspectusShardBlocks = aspecti.map(aspect => Item.of(`kubejs:${aspect}_aspectus_shard_block`))

    // mimic
    e.addLootTableModifier("aether:entities/mimic")
        .randomChance(0.3)
        .addWeightedLoot([1, 1], aspectusShards)
        .limitCount([1, 2])
})