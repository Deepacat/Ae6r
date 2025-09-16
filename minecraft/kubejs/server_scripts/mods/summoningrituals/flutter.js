ServerEvents.tags('item', e => {
    e.add('kubejs:fluttersummoning', ['kubejs:terra_aspectus_shard', 'mineraft:conduit'])
})

ServerEvents.recipes(e => {
    e.recipes.summoningrituals.altar(Ingredient.of('kubejs:fluttersummoning'))
        .input('2x minecraft:flowering_azalea_leaves')
        .input('2x minecraft:spore_blossom')
        .recipeTime(200)
        .mobOutput(SummoningOutput.mob('alexsmobs:flutter')
            .count(2)
            .offset(0, 1, 0)
            .data({ ForgeData: { time_sheared: 12000 } })
        )
        .id('kubejs:summoningrituals/flutter')
})

SummoningRituals.start(e => {
    if (!(e.recipe.id == 'kubejs:summoningrituals/flutter')) {
        return
    }
    let biome = e.level.getBiome(e.pos).unwrapKey().get().location()
    if (biome != 'minecraft:lush_caves') {
        if (e.player) {
            e.player.tell('You must be in the lush caves to perform this ritual.')
        }
        e.cancel()
    }
})