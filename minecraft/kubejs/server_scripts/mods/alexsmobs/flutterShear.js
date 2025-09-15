ItemEvents.entityInteracted(e => {
    if (!e.target.type == 'alexsmobs:flutter') { return }

    // potentially a specific item later
    if (!e.item.hasTag('forge:shears')) { return }

    if ((e.target.persistentData.timeSheared + 200) - e.target.age > 0) {
        e.player.setStatusMessage((e.target.persistentData.timeSheared + 200) - e.target.age)
        return
    }

    e.target.persistentData.timeSheared = e.target.age

    e.level.getBlock(e.target.getPos())
        .popItem(Item.of('minecraft:white_wool', Math.floor(Math.random() * 1) + 1))
})
