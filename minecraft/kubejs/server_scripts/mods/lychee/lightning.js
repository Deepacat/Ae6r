ServerEvents.recipes(e => {

    /*"contextual": {
        "type": "chance",
        "chance": 0.5
    }*/
    // dont add more than 27 input items

    // lightningRecipe(e, 'charged_snowball',
    //     [{ item: 'minecraft:snowball', count: 4 }, { item: 'quark:bottled_cloud' }, { tag: 'forge:gems/fluorite' }],
    //     [{ type: "drop_item", item: "powah:charged_snowball", count: 3 }]
    // )
    lightningRecipe(e, '3x powah:charged_snowball', [
        '4x minecraft:snowball', 'quark:bottled_cloud', '#forge:gems/fluorite'
    ]).id('kubejs:lychee/lightning/charged_snowball')

    e.remove({ id: 'ars_nouveau:sourcestone' })
    // lightningRecipe(e, 'sourcestone',
    //     [{ tag: 'forge:storage_blocks/clay', count: 3 }, { tag: 'forge:gems/source' }, { tag: 'forge:gems/apatite' }],
    //     [{ type: "drop_item", item: "ars_nouveau:sourcestone", count: 4 }]
    // )
    lightningRecipe(e, '4x ars_nouveau:sourcestone', [
        Ingredient.of('#forge:storage_blocks/clay', 3), '#forge:gems/source', '#forge:gems/apatite'
    ]).id('kubejs:lychee/lightning/sourcestone')

    e.remove({ id: 'minecraft:conduit' })
    lightningRecipe(e, 'minecraft:conduit', [
        'minecraft:heart_of_the_sea', '4x minecraft:nautilus_shell', Ingredient.of('#forge:gems/lapis', 2),
        Ingredient.of('#forge:gems/fluorite', 2), Ingredient.of('#forge:gems/source', 2)
    ]).id('kubejs:lychee/lightning/conduit')

    e.remove({ id: 'naturesaura:wood_stand' })
    lightningRecipe(e, 'naturesaura:wood_stand', [
        'eidolon:gold_inlay', 'botania:livingwood_wall', 'naturesaura:gold_leaf', '#forge:gems/apatite'
    ]).id('kubejs:lychee/lightning/wood_stand')

    e.remove({ id: 'meetyourfight:fossil_bait' })
    lightningRecipe(e, 'meetyourfight:fossil_bait', [
        'undergarden:music_disc_relict', 'aquaculture:fish_bones', '#forge:gems/lapis', '2x minecraft:fermented_spider_eye', '4x undergarden:raw_dweller_meat'
    ]).id('kubejs:lychee/lightning/fossil_bait')

    e.remove({ id: 'ars_nouveau:jar_of_light' })
    lightningRecipe(e, 'ars_nouveau:jar_of_light', [
        '3x supplementaries:jar', Ingredient.of('#forge:gems/fluorite', 3)
    ]).id('kubejs:lychee/lightning/jar_of_light')

    e.remove({ id: 'ars_nouveau:void_jar' })
    lightningRecipe(e, 'ars_nouveau:void_jar', [
        '3x supplementaries:jar', Ingredient.of('#forge:dusts/obsidian', 3)
    ]).id('kubejs:lychee/lightning/void_jar')

    e.remove({ id: 'naturesaura:calling_spirit' })
    lightningRecipe(e, 'naturesaura:calling_spirit', [
        Item.of('naturesaura:aura_bottle', { stored_type: "naturesaura:overworld" }),
        'naturesaura:infused_iron', 'botania:rune_water', 'botania:rune_earth',
        Item.of('naturesaura:aura_bottle', { stored_type: "naturesaura:nether" }),
        'naturesaura:tainted_gold', 'botania:rune_fire', 'botania:rune_air'
    ]).id('kubejs:lychee/lightning/calling_spirit')

    e.remove({ id: 'minecraft:lodestone' })
    lightningRecipe(e, 'minecraft:lodestone', [
        Ingredient.of('#forge:storage_blocks/iron', 2), Ingredient.of('#forge:dusts/iron', 2),
        Ingredient.of('#forge:gems/fluorite', 2), Ingredient.of('#forge:dusts/copper', 2)
    ]).id('kubejs:lychee/lightning/lodestone')

    e.remove({ id: 'botania:spark' })
    lightningRecipe(e, 'botania:spark', [
        Ingredient.of('#botania:petals', 6), '2x botania:quartz_blaze', '2x kubejs:replaceme'
    ]).id('kubejs:lychee/lightning/spark')

    e.remove({ id: 'meetyourfight:haunted_bell' })

    lightningRecipe(e, 'meetyourfight:haunted_bell', [
        '3x kubejs:replaceme', Ingredient.of('#forge:gems/fluorite', 3), '3x kubejs:replaceme'
    ]).id('kubejs:lychee/lightning/haunted_bell')

    lightningRecipe(e, 'emendatus:invar_dust', [
        '2x thermal:phytogro', Ingredient.of('#forge:dusts/iron', 2), '#forge:dusts/nickel'
    ]).id('kubejs:lychee/lightning/invar_dust')

    lightningRecipe(e, 'kubejs:firmament', [
        '#forge:gems/fluorite', '6x minecraft:prismarine', '6x undergarden:shiverstone'
    ]).id('kubejs:lychee/lightning/firmament')

    e.remove({ id: 'eidolon:stone_altar' })
    lightningRecipe(e, 'eidolon:stone_altar', [
        'eidolon:soul_shard', 'minecraft:polished_andesite', 'eidolon:pewter_inlay'
    ]).id('kubejs:lychee/lightning/stone_altar')

    e.remove({ id: 'bloodmagic:teleposer' })
    lightningRecipe(e, 'bloodmagic:teleposer', [
        '3x botania:corporea_spark', Ingredient.of('#forge:nuggets/dawnstone', 3), '2x bloodmagic:ritualstone'
    ]).id('kubejs:lychee/lightning/teleposer')

    lightningRecipe(e, '2x kubejs:stabilized_algal_bricks', [
        '4x architects_palette:overgrown_algal_bricks', Ingredient.of('#forge:ingots/dawnstone', 4),
        '4x eidolon:soul_shard', '3x ars_nouveau:manipulation_essence'
    ]).id('kubejs:lychee/lightning/stabilized_algal_bricks')

    lightningRecipe(e, '2x kubejs:stabilized_glowstone', [
        '4x minecraft:glowstone', Ingredient.of('#forge:ingots/sunmetal', 2),
        Ingredient.of('#forge:gems/arcanum', 4), '3x ars_nouveau:manipulation_essence'
    ]).id('kubejs:lychee/lightning/stabilized_glowstone')

    // these all need to be entirely remade, 27 items meh and starmetal dusts
    // lightningRecipe(e, 'crystalline_oak_leaves',
    //     [{ item: 'minecraft:oak_leaves', count: 64 }, { tag: 'kubejs:replaceme' }, { item: 'quark:green_corundum' }],
    //     [{ type: "drop_item", item: "kubejs:crystalline_oak_leaves", count: 64 }]
    // )

    // lightningRecipe(e, 'crystalline_flowering_palo_verde_leaves',
    //     [{ item: 'kubejs:replaceme', count: 64 }, { tag: 'kubejs:replaceme' }, { item: 'quark:yellow_corundum' }],
    //     [{ type: "drop_item", item: "kubejs:crystalline_flowering_palo_verde_leaves", count: 64 }]
    // )

    // lightningRecipe(e, 'crystalline_dark_oak_wood',
    //     [{ item: 'minecraft:dark_oak_wood', count: 64 }, { tag: 'kubejs:replaceme' }, { item: 'quark:orange_corundum' }],
    //     [{ type: "drop_item", item: "kubejs:crystalline_dark_oak_wood", count: 64 }]
    // )
})

ServerEvents.tags('item', e => {
    e.add('lychee:lightning_fire_immune', ['powah:charged_snowball', 'ars_nouveau:sourcestone', 'minecraft:conduit'])
})