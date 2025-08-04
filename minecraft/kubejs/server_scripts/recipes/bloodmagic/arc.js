ServerEvents.recipes(e => {
    e.remove({ id: "bloodmagic:arc/reversion/weak_blood_orb" })
    e.recipes.bloodmagic.arc('eidolon:unholy_symbol', 'bloodmagic:weakbloodorb', '#bloodmagic:arc/reverter')
        .consumeIngredient(true)
        .id('kubejs:arc/reversion/weak_blood_orb')

    e.remove({ id: "bloodmagic:arc/reversion/apprentice_blood_orb" })
    e.recipes.bloodmagic.arc('meetyourfight:caged_heart', 'bloodmagic:apprenticebloodorb', '#bloodmagic:arc/reverter')
        .consumeIngredient(true)
        .id('kubejs:arc/reversion/apprentice_blood_orb')

    e.remove({ id: "bloodmagic:arc/reversion/magician_blood_orb" })
    e.recipes.bloodmagic.arc('botania:mana_tablet', 'bloodmagic:magicianbloodorb', '#bloodmagic:arc/reverter')
        .consumeIngredient(true)
        .id('kubejs:arc/reversion/magician_blood_orb')

    e.remove({ id: "bloodmagic:arc/reversion/master_blood_orb" })
    e.recipes.bloodmagic.arc('create:shadow_steel', 'bloodmagic:masterbloodorb', '#bloodmagic:arc/reverter')
        .consumeIngredient(true)
        .id('kubejs:arc/reversion/master_blood_orb')

    e.recipes.bloodmagic.arc(Item.of('bloodmagic:corrupted_tinydust', 6), '#bloodmagic:crystals/demon', '#bloodmagic:arc/resonator')
        .consumeIngredient(false)
        .addedoutput({ chance: 0.15, mainchance: 0.15, type: 'bloodmagic:corrupted_tinydust' })
        .id('kubejs:arc/corrupted_tinydust_from_demon_crystals')

    e.recipes.bloodmagic.arc('botania:mana_diamond', 'botania:dragonstone', '#bloodmagic:arc/reverter')
        .consumeIngredient(true)
        .id('kubejs:arc/mana_diamond_from_dragonstone')

    e.recipes.bloodmagic.arc('botania:mana_diamond_block', 'botania:dragonstone_block', '#bloodmagic:arc/reverter')
        .consumeIngredient(true)
        .id('kubejs:arc/mana_diamond_block_from_dragonstone_block')

    e.recipes.bloodmagic.arc('waystones:warp_stone', '#waystones:waystone', '#bloodmagic:arc/reverter')
        .consumeIngredient(true)
        .id('kubejs:arc/warp_stone_from_waystone')

    e.recipes.bloodmagic.arc('waystones:warp_stone', '#waystones:sharestone', '#bloodmagic:arc/reverter')
        .consumeIngredient(true)
        .id('kubejs:arc/warp_stone_from_sharestone')

    e.recipes.bloodmagic.arc('waystones:warp_stone', 'waystones:portstone', '#bloodmagic:arc/reverter')
        .consumeIngredient(true)
        .id('kubejs:arc/warp_stone_from_portstone')
})
