BlockEvents.rightClicked(e => {
    const glowItem = 'minecraft:glowstone_dust'
    const glowBlock = 'mininggadgets:minerslight'

    if (e.item.id != glowItem) return

    let targetBlock = e.block.offset(e.facing)
    if ((targetBlock.id == 'minecraft:air' || targetBlock.id == 'minecraft:cave_air') && e.player.isCrouching()) {
        targetBlock.set(glowBlock)
        e.item.count--
        e.cancel()
    }
})
