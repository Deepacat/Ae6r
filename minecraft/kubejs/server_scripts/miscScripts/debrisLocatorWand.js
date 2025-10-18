// locating arcane debris with wissen wand
let $BlockPos = Java.loadClass('net.minecraft.core.BlockPos')

let dimensions = {
    "minecraft:overworld": {
        checkLight: true,
        block: "irons_spellbooks:arcane_debris"
    },
    "minecraft:the_end": {
        checkLight: false,
        block: "kubejs:alien_debris"
    }
}

ItemEvents.firstRightClicked(e => {
    if (!isRealPlayer(e.player)) { return }
    if (e.hand != 'MAIN_HAND') { return }
    
    let { player, level, player: { block: { pos } } } = e

    if (player.getCooldowns().isOnCooldown(e.player.mainHandItem)) { return }
    if (!player.mainHandItem.hasTag('kubejs:locator_wands')) { return }
    if (player.offHandItem.id != 'ars_nouveau:scryers_oculus') { return }

    let range = 1 // chunk range (1 would be 1 chunk away, so 3x3)
    let dim = dimensions[player.level.dimension]

    let radiusOf = n => Array.from(Array(2 * n + 1).keys()).map(i => i - n)

    for (let dx of radiusOf(range)) {
        for (let dz of radiusOf(range)) {
            level.getChunkAt(pos.offset(dx * 16, 0, dz * 16))["findBlocks(java.util.function.BiPredicate,java.util.function.BiConsumer)"](
                (blockState, blockPos) =>
                    blockState.equals(Block.getBlock(dim.block).defaultBlockState()),
                (blockPos, blockState) => {
                    // if (pos.distManhattan(blockPos) > range * 1 * 16) return
                    const { x, y, z } = blockPos
                    let mapPos = level.getHeightmapPos("motion_blocking_no_leaves", new $BlockPos(x, 0, z))
                    if ((dim.checkLight && level.getBlock(mapPos).light <= 4) || !dim.checkLight) {
                        // TODO: find a cooler particle
                        // embers particles are. really cool. and customizable!
                        level.spawnParticles("deep_aether:mythical_particle",
                            false, mapPos.x + 0.5, mapPos.y + 2, mapPos.z + 0.5, 0.1, 1, 0.1, 5, 0.001)
                    }
                }
            )
        }
    }
    // e.player.triggerAnimation('irons_spellbooks:overhead_two_handed_swing', 1, 'linear', true, true)
    e.player.addItemCooldown(e.player.mainHandItem, 200)
})
