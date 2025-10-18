// locating arcane debris with wissen wand
let $BlockPos = Java.loadClass('net.minecraft.core.BlockPos')

let dimensions = {
    "minecraft:overworld": {
        checkLight: true,
        block: "irons_spellbooks:arcane_debris",
        particleColor: '0.29 0.62 1'
    },
    "minecraft:the_end": {
        checkLight: false,
        block: "kubejs:alien_debris",
        particleColor: '0.85 0.49 1'
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
                    const { x, y, z } = blockPos
                    // return if not within 32 blocks on x, z
                    if (new $BlockPos(pos.x, 0, pos.z)
                        .distManhattan(new $BlockPos(x, 0, z)) > range * 1 * 32) return
                    // gets highest position in world, ignoring leaves
                    let mapPos = level.getHeightmapPos("motion_blocking_no_leaves", new $BlockPos(x, 0, z))
                    // checks if light level is less than 5 or if not required in dimension
                    if ((dim.checkLight && level.getBlock(mapPos).light <= 4) || !dim.checkLight) {
                        let n = 0 // negative counter
                        for (let i = 10; i >= 0; i--) {
                            let o = i // copying I because scheduled ticks has loop issues
                            let yOff = n
                            level.server.scheduleInTicks(i * 3, () => {
                                level.spawnParticles(`embers:star ${dim.particleColor} 3`,
                                    false, mapPos.x + 0.5, mapPos.y + (yOff * 0.5), mapPos.z + 0.5,
                                    0.1, 0.1, 0.1, 3, 0.001)
                                if (o % 2 == 0) {
                                    level.playSound(null, mapPos.x + 0.5, mapPos.y + 2, mapPos.z + 0.5,
                                        "wizards_reborn:arcanum_dust_transmutation", "blocks", 0.5,
                                        Math.random() * (1.5 - 1.2) + 1.2
                                    )
                                }
                            })
                            n++
                        }
                    }
                }
            )
        }
    }
    // e.player.triggerAnimation('irons_spellbooks:overhead_two_handed_swing', 1, 'linear', true, true)
    e.player.addItemCooldown(e.player.mainHandItem, 200)
})
