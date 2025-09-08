LootJS.modifiers(e => {
    let aspectusShards = ['aer', 'aqua', 'ignis', 'terra', 'ordo', 'perditio', 'mortuus', 'cognitio', 'praecantatio']

    // 
    let dungeonRewardShards = aspectusShards.map(
        (aspect) => Item.of(`kubejs:${aspect}_aspectus_shard_block`).withChance(0.0005)
    )

    // Bronze dungeon boss chest
    e.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon_reward")
        .addWeightedLoot(
            [0, 2],
            dungeonRewardShards
        )
        // always give 1 shard block
        .addLoot(Item.of('kubejs:aspectus_shard_block'))
})