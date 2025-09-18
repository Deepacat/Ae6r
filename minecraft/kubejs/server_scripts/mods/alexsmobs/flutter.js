// flutter right click interacting for shearing lush silk
ItemEvents.entityInteracted(e => {
    if (!e.target.type == 'alexsmobs:flutter') { return }

    // potentially a specific item later
    if (!e.item.hasTag('forge:shears')) { return }

    if (e.target.nbt.Owner) {
        // This is due to alex mobs wiping shearing data when picked up in a pot
        e.player.tell(`Cannot shear a tamed flutter.`)
        return
    }

    let nbt = e.target.nbt
    let cooldownTicks = 20 * 60 * 5 // 5 minute cooldown in ticks
    let realAge = nbt.ForgeData["naturesaura:time_alive"]
    let cooldown = (nbt.ForgeData["kubejs:time_sheared"] + cooldownTicks) - realAge

    if (cooldown > 0) {
        e.player.setStatusMessage(`${Math.round(cooldown / 20).toString()} seconds to regrow silk`)
        // do not shear, on cooldown
        return
    }
    // shearing

    nbt.ForgeData["kubejs:time_sheared"] = realAge
    e.target.mergeNbt(nbt)

    let block = e.level.getBlock(e.target.pos)

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

// flutter summoning ritual
ServerEvents.recipes(e => {
    e.recipes.summoningrituals.altar(['kubejs:terra_aspectus_shard', 'minecraft:conduit'])
        .input('2x minecraft:flowering_azalea')
        .input('2x minecraft:spore_blossom')
        .recipeTime(200)
        .mobOutput(SummoningOutput.mob('alexsmobs:flutter')
            .count(2)
            .offset(0, 1, 0)
            .data({ ForgeData: { time_sheared: 12000 } })
        )
        .id('kubejs:summoningrituals/flutter')
})

// prevent flutter ritual outside lush caves
SummoningRituals.start(e => {
    if (!(e.recipe.id == 'kubejs:summoningrituals/flutter')) {
        return
    }
    let biome = e.level.getBiome(e.pos).unwrapKey().get().location()
    if (biome != 'minecraft:lush_caves') {
        if (e.player) {
            e.player.setStatusMessage('You must be in the lush caves to perform this ritual.')
        }
        e.cancel()
    }
})