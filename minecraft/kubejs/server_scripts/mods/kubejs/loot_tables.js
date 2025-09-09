LootJS.modifiers(e => {
    e.addBlockLootModifier('kubejs:aspectus_shard_block')
        .matchMainHand(Item.of("embers:grandhammer"))
        .addWeightedLoot(aspectusShardBlocks)
})
