// locating arcane debris with wissen wand
const $BlockPos = Java.loadClass('net.minecraft.core.BlockPos')
ItemEvents.firstRightClicked('wizard_reborn:wissen_wand', e => {
    if (e.hand != 'MAIN_HAND') { return }
    if (e.player.getCooldowns().isOnCooldown(e.player.mainHandItem)) { return }

    if (e.player.mainHandItem.id == 'wizards_reborn:wissen_wand' &&
        e.player.offHandItem.id == 'ars_nouveau:scryers_oculus') {
        let range = 1
        let { player, player: { block: { pos } }, level } = e

        let radiusOf = n => Array.from(Array(2 * n + 1).keys()).map(i => i - n)

        radiusOf(range).forEach(dx =>
            radiusOf(range).forEach(dz => {
                level.getChunkAt(pos.offset(dx * 16, 0, dz * 16))["findBlocks(java.util.function.BiPredicate,java.util.function.BiConsumer)"](
                    (blockState, blockPos) =>
                        blockState.equals(Block.getBlock("irons_spellbooks:arcane_debris").defaultBlockState()),
                    (blockPos, blockState) => {
                        // if (pos.distManhattan(blockPos) > range * 1 * 16) return
                        const { x, y, z } = blockPos
                        let mapPos = level.getHeightmapPos("world_surface", new $BlockPos(x, 0, z))
                        // e.player.tell(`blockPos: ${x}, ${y}, ${z}`)
                        // e.player.tell(`mapPos: ${mapPos.x}, ${mapPos.y}, ${mapPos.z}`)
                        level.spawnParticles("deep_aether:mythical_particle", false, mapPos.x + 0.5, mapPos.y + 2, mapPos.z + 0.5, 0.1, 1, 0.1, 5, 0.001)
                    }
                )
            })
        )
        // e.player.triggerAnimation('irons_spellbooks:overhead_two_handed_swing', 1, 'linear', true, true)
        e.player.addItemCooldown(e.player.mainHandItem, 600)
    }
})
