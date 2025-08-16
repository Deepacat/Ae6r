ServerEvents.recipes(e => {

    /*"contextual": {
        "type": "chance",
        "chance": 0.5
    }*/

    // dont add more than 27 input items
    lightningRecipe(e, 'charged_snowball',
        [{ item: 'minecraft:snowball', count: 4 }, { item: 'quark:bottled_cloud' }, { tag: 'forge:gems/fluorite' }],
        [{ type: "drop_item", item: "powah:charged_snowball", count: 3 }]
    )

    e.remove({ id: 'ars_nouveau:sourcestone' })
    lightningRecipe(e, 'sourcestone',
        [{ tag: 'forge:storage_blocks/clay', count: 3 }, { tag: 'forge:gems/source' }, { tag: 'forge:gems/apatite' }],
        [{ type: "drop_item", item: "ars_nouveau:sourcestone", count: 4 }]
    )

    e.remove({ id: 'minecraft:conduit' })
    lightningRecipe(e, 'conduit',
        [{ item: 'minecraft:heart_of_the_sea' }, { item: 'minecraft:nautilus_shell', count: 2 },
        { tag: 'forge:gems/lapis' }, { tag: 'forge:gems/fluorite' }, { tag: 'forge:gems/source' }],
        [{ type: "drop_item", item: "minecraft:conduit" }]
    )

    e.remove({ id: 'naturesaura:wood_stand' })
    lightningRecipe(e, 'wood_stand',
        [{ item: 'eidolon:gold_inlay' }, { item: 'botania:livingwood_wall' }, { item: 'naturesaura:gold_leaf' }, { tag: 'forge:gems/apatite' }],
        [{ type: "drop_item", item: "naturesaura:wood_stand" }]
    )

    e.remove({ id: 'meetyourfight:fossil_bait' })
    lightningRecipe(e, 'fossil_bait',
        [{ item: 'undergarden:music_disc_relict' }, { item: 'aquaculture:fish_bones' },
        { tag: 'forge:gems/lapis', count: 2 }, { item: 'minecraft:fermented_spider_eye', count: 2 },
        { item: 'undergarden:raw_dweller_meat', count: 4 }],
        [{ type: "drop_item", item: "meetyourfight:fossil_bait" }]
    )

    e.remove({ id: 'ars_nouveau:jar_of_light' })
    lightningRecipe(e, 'jar_of_light',
        [{ item: 'supplementaries:jar', count: 3 }, { tag: 'forge:gems/fluorite', count: 3 }],
        [{ type: "drop_item", item: "ars_nouveau:jar_of_light", count: 1 }]
    )

    e.remove({ id: 'ars_nouveau:void_jar' })
    lightningRecipe(e, 'void_jar',
        [{ item: 'supplementaries:jar', count: 3 }, { tag: 'forge:dusts/obsidian', count: 3 }],
        [{ type: "drop_item", item: "ars_nouveau:void_jar", count: 1 }]
    )

    e.remove({ id: 'naturesaura:calling_spirit' })
    lightningRecipe(e, 'calling_spirit',
        [{ type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: "naturesaura:overworld" } },
        { item: 'naturesaura:infused_iron' }, { item: 'botania:rune_water' }, { item: 'botania:rune_earth' },
        { type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: "naturesaura:nether" } },
        { item: 'naturesaura:tainted_gold' }, { item: 'botania:rune_fire' }, { item: 'botania:rune_air' }],
        [{ type: "drop_item", item: "naturesaura:calling_spirit", count: 4 }]
    )

    e.remove({ id: 'minecraft:lodestone' })
    lightningRecipe(e, 'lodestone',
        [{ tag: 'forge:storage_blocks/iron', count: 2 }, { tag: 'forge:dusts/iron', count: 2 },
        { tag: 'forge:gems/fluorite', count: 2 }, { tag: 'forge:dusts/copper', count: 2 }],
        [{ type: "drop_item", item: "minecraft:lodestone", count: 1 }],
    )

    e.remove({ id: 'botania:spark' })
    lightningRecipe(e, 'spark',
        [{ tag: 'botania:petals', count: 6 }, { item: 'botania:quartz_blaze', count: 2 }, { item: 'kubejs:replaceme', count: 2 }],
        [{ type: "drop_item", item: "botania:spark", count: 3 }]
    )

    e.remove({ id: 'meetyourfight:haunted_bell' })
    lightningRecipe(e, 'haunted_bell',
        [{ item: 'kubejs:replaceme', count: 3 }, { tag: 'forge:gems/fluorite', count: 3 }, { item: 'kubejs:replaceme', count: 3 }],
        [{ type: "drop_item", item: "meetyourfight:haunted_bell", count: 1 }]
    )

    lightningRecipe(e, 'invar_dust',
        [{ item: 'thermal:phytogro', count: 2 }, { tag: 'forge:dusts/iron', count: 2 }, { tag: 'forge:dusts/nickel' }],
        [{ type: "drop_item", item: "emendatus:invar_dust", count: 3 }]
    )

    lightningRecipe(e, 'firmament',
        [{ tag: 'forge:gems/fluorite' }, { item: 'minecraft:prismarine', count: 6 }, { item: 'undergarden:shiverstone', count: 6 }],
        [{ type: "drop_item", item: "kubejs:firmament", count: 3 }]
    )

    e.remove({ id: 'eidolon:stone_altar' })
    lightningRecipe(e, 'stone_altar',
        [{ item: 'eidolon:soul_shard' }, { item: 'minecraft:polished_andesite' }, { item: 'eidolon:pewter_inlay' }],
        [{ type: "drop_item", item: "eidolon:stone_altar", count: 1 }]
    )

    e.remove({ id: 'bloodmagic:teleposer' })
    lightningRecipe(e, 'teleposer',
        [{ item: 'botania:corporea_spark', count: 3 }, { tag: 'forge:nuggets/dawnstone', count: 3 }, { item: 'bloodmagic:ritualstone', count: 2 }],
        [{ type: "drop_item", item: "bloodmagic:teleposer", count: 2 }]
    )

    // these all need to be entirely remade, 27 items meh and starmetal dusts
    // e.remove({ id: 'kubejs:crystalline_oak_leaves' })
    // lightningRecipe(e, 'crystalline_oak_leaves',
    //     [{ item: 'minecraft:oak_leaves', count: 64 }, { tag: 'kubejs:replaceme' }, { item: 'quark:green_corundum' }],
    //     [{ type: "drop_item", item: "kubejs:crystalline_oak_leaves", count: 64 }]
    // )

    // e.remove({ id: 'kubejs:crystalline_flowering_palo_verde_leaves' })
    // lightningRecipe(e, 'crystalline_flowering_palo_verde_leaves',
    //     [{ item: 'kubejs:replaceme', count: 64 }, { tag: 'kubejs:replaceme' }, { item: 'quark:yellow_corundum' }],
    //     [{ type: "drop_item", item: "kubejs:crystalline_flowering_palo_verde_leaves", count: 64 }]
    // )

    // e.remove({ id: 'kubejs:crystalline_dark_oak_wood' })
    // lightningRecipe(e, 'crystalline_dark_oak_wood',
    //     [{ item: 'minecraft:dark_oak_wood', count: 64 }, { tag: 'kubejs:replaceme' }, { item: 'quark:orange_corundum' }],
    //     [{ type: "drop_item", item: "kubejs:crystalline_dark_oak_wood", count: 64 }]
    // )
})

ServerEvents.tags('item', e => {
    e.add('lychee:lightning_fire_immune', ['powah:charged_snowball', 'ars_nouveau:sourcestone', 'minecraft:conduit'])
})