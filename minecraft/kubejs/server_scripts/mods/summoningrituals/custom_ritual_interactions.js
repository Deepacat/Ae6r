// prevent flutter ritual outside lush caves
SummoningRituals.start(e => {
    if (!(e.recipe.id == 'kubejs:summoningrituals/altar/flutter')) { return }

    let biome = e.level.getBiome(e.pos).unwrapKey().get().location()
    if (biome != 'minecraft:lush_caves') {
        if (e.player) {
            e.player.setStatusMessage('You must be in the lush caves to perform this ritual.')
        }
        e.cancel()
    }
})

SummoningRituals.start(e => {
    if (!e.recipe.id == 'kubejs:summoningrituals/altar/wissen') { return }

    if (e.level.getBlock(e.pos.below()) != 'wizards_reborn:arcane_workbench') {
        e.player.tell('You can only perform this ritual with the altar above an arcane workbench.')
        e.cancel()
    }
})

SummoningRituals.complete(e => {
    let wissenCount
    switch (e.recipe.id) {
        case 'kubejs:summoningrituals/altar/wissen_allay':
            wissenCount = 200;
            break
        case 'kubejs:summoningrituals/altar/wissen_quenched':
            wissenCount = 1000;
            break
        default:
            break
    }

    if (!(wissenCount > 0)) return

    let blockBelow = e.level.getBlock(e.pos.below())
    if (blockBelow != 'wizards_reborn:arcane_workbench') {
        e.cancel()
        return
    }

    let wissenInTable = blockBelow.entityData.wissen

    if (wissenInTable > (10000 - wissenCount)) {
        e.cancel()
        return
    }

    blockBelow.mergeEntityData({ wissen: wissenInTable + wissenCount })

    // send a block update after merging data so it updates clientside
    e.level.markAndNotifyBlock(
        blockBelow.pos,
        e.level.getChunkAt(blockBelow.pos),
        blockBelow.blockState,
        blockBelow.blockState,
        3, 512
    )
})