PlayerEvents.inventoryChanged(e => {
    const player = e.player
    if (!isRealPlayer(e.player)) { return }
    if (!e.item.hasTag('kubejs:burning_hot')) { return }

    if (e.player.inventory.find('#kubejs:burning_hot') == -1) {
        player.extinguish()
        return
    }

    if (!player.isInWater()) {
        player.setStatusMessage([Text.of(`A hot item is burning you!`).red()])
        player.setSecondsOnFire(3)
    }
})

ItemEvents.dropped(e => {
    const player = e.player
    if (!isRealPlayer(e.player)) { return }
    if (!player.isOnFire()) { return }
    if (!e.item.hasTag('kubejs:burning_hot')) { return }

    if (e.player.inventory.find('#kubejs:burning_hot') == -1) {
        player.extinguish()
        return
    }
})

PlayerEvents.tick(e => {
    if (Utils.server.tickCount % 20 != 0) { return }

    const player = e.player
    if (!isRealPlayer(e.player)) { return }

    if (!(player.inventory.find('#kubejs:burning_hot') == -1) && !player.isInWater()) {
        player.setSecondsOnFire(3)
    }
})