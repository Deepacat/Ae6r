LootJS.modifiers(e => {
    let aspecti = ['aer', 'aqua', 'ignis', 'terra', 'ordo', 'perditio', 'mortuus', 'cognitio', 'praecantatio']
    let aspectusShards = aspecti.map(aspect => Item.of(`kubejs:${aspect}_aspectus_shard`))
    let aspectusShardBlocks = aspecti.map(aspect => Item.of(`kubejs:${aspect}_aspectus_shard_block`))

    // bronze dungeon
    e.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon_reward")
        .addWeightedLoot( // 1-3 random aspectus shards with 3-5 count
            [1, 3],
            aspectusShards
        )
        .limitCount([3, 5])
        .addLoot(Item.of('kubejs:aspectus_shard_block')) // guarantee at least one typeless aspectus shard block
})