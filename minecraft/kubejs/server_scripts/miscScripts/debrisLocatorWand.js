// locating arcane debris with wissen wand
let $BlockPos = Java.loadClass('net.minecraft.core.BlockPos')

let wands = Ingredient.of('#kubejs:locator_wands').itemIds.toArray()

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
    if (!(e.level instanceof ServerLevel)) { return }
    if (!isRealPlayer(e.player)) { return }
    if (e.hand != 'MAIN_HAND') { return }

    let { player, level, player: { block: { pos } } } = e

    if (player.offHandItem.id != 'ars_nouveau:scryers_oculus') { return }
    if (wands.includes(player.mainHandItem.id) == false) { return }
    if (player.getCooldowns().isOnCooldown(e.player.mainHandItem)) { return }

    let range = 1 // chunk range (1 would be 1 chunk away, so 3x3)
    let dim = dimensions[player.level.dimension]

    // Creates a map for chunks to be checked
    let radiusOf = n => Array.from(Array(2 * n + 1).keys()).map(i => i - n)

    let anyFound = false
    let darkEnough = false

    // Iterates over chunks in radius
    for (let dx of radiusOf(range)) {
        for (let dz of radiusOf(range)) {
            let chunk = level.getChunkAt(pos.offset(dx * 16, 0, dz * 16))
            // First parameter is a predicate, if true, second parameters (the consumers) code is executed
            chunk["findBlocks(java.util.function.BiPredicate,java.util.function.BiConsumer)"](
                (blockState, blockPos) => { // Checks every block in the chunk if it matches the desired search block
                    return blockState.equals(Block.getBlock(dim.block).defaultBlockState())
                },
                (blockPos, blockState) => { // Executes when a block is found
                    const { x, y, z } = blockPos

                    // return if not within 32 blocks on x, z
                    if (BlockPos(pos.x, 0, pos.z).distManhattan(BlockPos(x, 0, z)) > range * 32) { return }
                    anyFound = true

                    // gets highest block position on the x, z coordinate, ignoring leaves
                    let mapPos = level.getHeightmapPos("motion_blocking_no_leaves", new $BlockPos(x, 0, z))

                    if (dim.checkLight && level.getBlock(mapPos).light > 4) { return }
                    darkEnough = true

                    // Reverse iterator, used to lower the yOffset of each particle (They fall downwards)
                    let n = 0

                    // Loop 10 times and spawn particles, play sound every other tick
                    for (let i = 10; i >= 0; i--) {
                        // copying the I iterator because scheduled ticks has issue losing the reference
                        let o = i
                        let yOff = n
                        level.server.scheduleInTicks(i * 4, () => {
                            level.spawnParticles(`embers:star ${dim.particleColor} 3`,
                                false, mapPos.x + 0.5, mapPos.y + (yOff * 0.5), mapPos.z + 0.5,
                                0.1, 0.1, 0.1, 3, 0.001)
                            if (o % 2 == 0) { // plays sound every other tick
                                level.playSound(null, mapPos.x + 0.5, mapPos.y + 2, mapPos.z + 0.5,
                                    "wizards_reborn:arcanum_dust_transmutation", "blocks", 0.4,
                                    Math.random() * (1.5 - 1.2) + 1.2
                                )
                            }
                        })
                        n++
                    }
                }
            )
        }
    }
    wands.forEach(item => e.player.addItemCooldown(item, 200))

    if (darkEnough) {
        player.setStatusMessage(Text.of("§oThe wand whirrs to life as it begins to glow around you").color("#769ece"))
    } else if (anyFound) {
        player.setStatusMessage(Text.of("§oThe wands glow fades in absence of darkness").color("#769ece"))
    } else {
        player.setStatusMessage(Text.of("§oThe wands glow quickly fades. The outcome seems beyond it's reach.").color("#769ece"))
    }
})
