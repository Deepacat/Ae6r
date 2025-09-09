LootJS.modifiers(e => {
    let aspecti = ['aer', 'aqua', 'ignis', 'terra', 'ordo', 'perditio', 'mortuus', 'cognitio', 'praecantatio']
    let aspectusShards = aspecti.map(aspect => Item.of(`kubejs:${aspect}_aspectus_shard`))
    let aspectusShardBlocks = aspecti.map(aspect => Item.of(`kubejs:${aspect}_aspectus_shard_block`))

    // bronze dungeon
    e.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon_reward")
        // 1 guaranteed aspectus shard block
        .addLoot(Item.of('kubejs:aspectus_shard_block'))

    e.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon")
        .randomChance(0.05)
        .addWeightedLoot([1, 2], aspectusShards)
        .limitCount([1, 2])

    e.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon_loot")
        .randomChance(0.05)
        .addWeightedLoot([1, 2], aspectusShards)
        .limitCount([1, 2])

    // silver dungeon
    e.addLootTableModifier("aether:chests/dungeon/silver/silver_dungeon_reward")
        .addLoot(Item.of('kubejs:aspectus_shard_block'))

    e.addLootTableModifier("aether:chests/dungeon/silver/silver_dungeon")
        .randomChance(0.05)
        .addWeightedLoot([1, 2], aspectusShards)
        .limitCount([1, 2])

    e.addLootTableModifier("aether:chests/dungeon/silver/silver_dungeon_loot")
        .randomChance(0.05)
        .addWeightedLoot([1, 2], aspectusShards)
        .limitCount([1, 2])

    // gold dungeon
    e.addLootTableModifier("aether:chests/dungeon/gold/gold_dungeon_reward")
        .addLoot(Item.of('kubejs:aspectus_shard_block'))
        .limitCount([2, 4])

    e.addLootTableModifier("aether:chests/dungeon/gold/gold_dungeon_treasure")
        .randomChance(0.05)
        .addWeightedLoot([1, 2], aspectusShards)
        .limitCount([1, 2])

    // brass dungeon
    e.addLootTableModifier("deep_aether:chests/dungeon/brass/brass_dungeon_reward")
        .addLoot(Item.of('kubejs:aspectus_shard_block'))
        .limitCount([1, 3])

    e.addLootTableModifier("deep_aether:chests/dungeon/brass/brass_dungeon")
        .randomChance(0.05)
        .addWeightedLoot([1, 2], aspectusShards)
        .limitCount([1, 2])

    e.addLootTableModifier("deep_aether:chests/dungeon/brass/brass_dungeon_loot")
        .randomChance(0.05)
        .addWeightedLoot([1, 2], aspectusShards)
        .limitCount([1, 2])

    // platinum dungeon
    e.addLootTableModifier("lost_aether_content:chests/platinum_treasure_loot")
        .addLoot(Item.of('kubejs:aspectus_shard_block'))
        .limitCount([1, 3])

    e.addLootTableModifier("lost_aether_content:chests/dungeon/platinum/platinum_dungeon_loot")
        .randomChance(0.05)
        .addWeightedLoot([1, 2], aspectusShards)
        .limitCount([1, 2])
})