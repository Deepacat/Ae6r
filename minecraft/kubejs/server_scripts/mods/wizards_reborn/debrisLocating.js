// locating arcane debris with wissen wand
const $BlockPos = Java.loadClass('net.minecraft.core.BlockPos')

ItemEvents.firstRightClicked(e => {
    if (e.hand != 'MAIN_HAND') { return }
    if (e.player.getCooldowns().isOnCooldown(e.player.mainHandItem)) { return }

    if ((e.player.mainHandItem.id != 'wizards_reborn:wissen_wand') &&
        (e.player.mainHandItem.id != 'wizards_reborn:arcane_wand')) { return }
        
    if (e.player.offHandItem.id != 'ars_nouveau:scryers_oculus') { return }

    let range = 1
    let { player, player: { block: { pos } }, level } = e

    let radiusOf = n => Array.from(Array(2 * n + 1).keys()).map(i => i - n)

    for (let dx of radiusOf(range)) {
        for (let dz of radiusOf(range)) {
            level.getChunkAt(pos.offset(dx * 16, 0, dz * 16))["findBlocks(java.util.function.BiPredicate,java.util.function.BiConsumer)"](
                (blockState, blockPos) =>
                    blockState.equals(Block.getBlock("irons_spellbooks:arcane_debris").defaultBlockState()),
                (blockPos, blockState) => {
                    // if (pos.distManhattan(blockPos) > range * 1 * 16) return
                    const { x, y, z } = blockPos
                    let mapPos = level.getHeightmapPos("motion_blocking_no_leaves", new $BlockPos(x, 0, z))
                    if (level.getBlock(mapPos).light <= 4) {
                        level.spawnParticles("deep_aether:mythical_particle",
                            false, mapPos.x + 0.5, mapPos.y + 2, mapPos.z + 0.5, 0.1, 1, 0.1, 5, 0.001)
                    }
                }
            )
        }
    }
    // e.player.triggerAnimation('irons_spellbooks:overhead_two_handed_swing', 1, 'linear', true, true)
    e.player.addItemCooldown(e.player.mainHandItem, 600)
})
