// flutter right click interacting for shearing lush silk
ItemEvents.entityInteracted('alexsmobs:flutter', e => {
    let flutter = e.target
    // potentially a specific item later
    if (!e.item.hasTag('forge:shears')) { return }

    // check if adult
    if (flutter.nbt.Age != 0) { return }

    if (flutter.nbt.Owner && isRealPlayer(e.player)) {
        // This is due to alex mobs wiping shearing data when picked up in a pot
        e.player.tell(`Cannot shear a tamed flutter.`)
        return
    }

    let nbtCopy = flutter.nbt
    let cooldownTicks = 20 * 60 * 5 // 5 minute cooldown in ticks
    // I found actual entity server age to be unreliable and didn't feel like ticking entities and adding
    // my own time data so using natures auras time alive data works unless it has mechanics I don't know 
    let realAge = nbtCopy.ForgeData["naturesaura:time_alive"]
    let cooldown = (nbtCopy.ForgeData["kubejs:time_sheared"] + cooldownTicks) - realAge

    if (cooldown > 0 && isRealPlayer(e.player)) {
        e.player.setStatusMessage(`${Math.round(cooldown / 20).toString()} seconds to regrow silk`)
        // do not shear, on cooldown
        return
    }
    // shearing

    nbtCopy.ForgeData["kubejs:time_sheared"] = realAge
    flutter.mergeNbt(nbtCopy)

    let block = e.level.getBlock(flutter.pos)

    e.player.swing(e.hand.toString(), true)
    e.server.runCommandSilent(`/playsound minecraft:entity.sheep.shear player @a ${block.x} ${block.y} ${block.z} 1 1`)
    e.player.damageHeldItem(e.hand.toString(), 1)

    // 1 + 1/3 chance for another
    let amt = 1 + (Math.floor(Math.random() * 3) == 0 ? 1 : 0)
    block.popItem(Item.of('kubejs:lush_silk', amt))
})

// flutter lush silk loot table
LootJS.modifiers(e => {
    e.addLootTableModifier("alexsmobs:entities/flutter")
        .addLoot('kubejs:lush_silk')
        .limitCount([0, 2])
        .applyLootingBonus([0, 1])
})