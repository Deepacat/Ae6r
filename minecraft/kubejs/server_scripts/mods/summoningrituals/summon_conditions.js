// prevent flutter ritual outside lush caves
SummoningRituals.start(e => {
    if (!(e.recipe.id == 'kubejs:summoningrituals/altar/flutter')) {
        return
    }
    let biome = e.level.getBiome(e.pos).unwrapKey().get().location()
    if (biome != 'minecraft:lush_caves') {
        if (e.player) {
            e.player.setStatusMessage('You must be in the lush caves to perform this ritual.')
        }
        e.cancel()
    }
})