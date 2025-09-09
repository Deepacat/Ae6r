LootJS.modifiers(e => {
    let aspecti = ['aer', 'aqua', 'ignis', 'terra', 'ordo', 'perditio', 'mortuus', 'cognitio', 'praecantatio']
    let aspectusShardBlocks = aspecti.map(aspect => Item.of(`kubejs:${aspect}_aspectus_shard_block`))

    e.addBlockLootModifier('kubejs:aspectus_shard_block')
        .matchMainHand(Item.of("embers:grandhammer"))
        .addWeightedLoot(aspectusShardBlocks)
})