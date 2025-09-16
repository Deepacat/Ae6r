ItemEvents.entityInteracted(e => {
    if (!e.target.type == 'alexsmobs:flutter') { return }
    if (e.target.nbt.Owner) {
        // This is due to alex mobs wiping shearing data when picked up in a pot
        e.player.tell(`Cannot shear a tamed flutter.`)
        return
    }

    // potentially a specific item later
    if (!e.item.hasTag('forge:shears')) { return }

    let cooldownTicks = 20 * 60 * 10
    let age = (e.target.nbt.ForgeData['time_sheared'] + cooldownTicks) - e.target.age
    if (age > 0) {
        e.player.setStatusMessage(`${Math.round(age / 20)} seconds to regrow silk`)
        // do not shear, on cooldown
        return
    }
    // shearing

    let nbt = e.target.nbt
    nbt.ForgeData["time_sheared"] = e.target.age
    e.target.mergeNbt(nbt)

    let block = e.level.getBlock(e.target.pos)

    e.player.swing(e.hand.toString(), true)
    e.server.runCommandSilent(`/playsound minecraft:entity.sheep.shear player @a ${block.x} ${block.y} ${block.z} 1 1`)
    e.player.damageHeldItem(e.hand.toString(), 1)

    // 1 + 1/3 chance for another
    let amt = 1 + (Math.floor(Math.random() * 3) == 0 ? 1 : 0)
    block.popItem(Item.of('minecraft:white_wool', amt))
})
