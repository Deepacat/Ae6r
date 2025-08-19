LootJS.modifiers(e => {
    // seashells
    e.addBlockLootModifier("projectvibrantjourneys:seashells")
        .removeLoot('prismarine_shard')
        .addWeightedLoot(
            [LootEntry.of("prismarine_shard").withWeight(60),
            LootEntry.of("prismarine_crystals").withWeight(30),
            LootEntry.of("nautilus_shell").withWeight(20)]
        )
})