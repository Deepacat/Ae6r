ServerEvents.recipes(e => {
    
    // aspectus shard freezing
    for (let aspect of aspecti) {
        e.custom({
            type: "aether:freezing",
            cookingtime: 600,
            experience: 1,
            ingredient: {
                item: `kubejs:${aspect}_aspectus_shard_block`
            },
            result: {
                count: 4,
                item: `kubejs:${aspect}_aspectus_shard`
            }
        }).id(`kubejs:aether/freezing/${aspect}_aspectus_shard`)
    }
})