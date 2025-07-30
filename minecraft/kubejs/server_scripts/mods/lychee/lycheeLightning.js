ServerEvents.recipes(e => {
    function lightning(id, inputs, posts) {
        // lychee apparently doesn't do itemstacks, only ingredient, so I have to add these stupid items several times to replicate it
        // it also doesn't like having over 27 inputs
        let finalInputs = []
        for (let input of inputs) {
            if (input.count > 0) {
                for (let i = 0; i < input.count; i++) {
                    finalInputs.push(input)
                }
                continue
            }
            finalInputs.push(input)
        }

        if (finalInputs.length > 27) {
            console.log('lychee lightning recipe ' + id + ' has more than 27 inputs, bad bad')
            return
        }

        e.custom({
            type: "lychee:lightning_channeling",
            item_in: finalInputs,
            post: posts
        }).id('kubejs:lychee/lightning/' + id)
    }
    /*"contextual": {
        "type": "chance",
        "chance": 0.5
    }*/

    // dont add more than 27 input items
    lightning('charged_snowball',
        [{ item: 'minecraft:snowball', count: 4 }, { item: 'quark:bottled_cloud' }, { tag: 'forge:gems/fluorite' }],
        [{ type: "drop_item", item: "powah:charged_snowball", count: 3 }]
    )

    e.remove({ id: 'ars_nouveau:sourcestone' })
    lightning('sourcestone',
        [{ tag: 'forge:storage_blocks/clay', count: 3 }, { tag: 'forge:gems/source' }, { tag: 'forge:gems/apatite' }],
        [{ type: "drop_item", item: "ars_nouveau:sourcestone", count: 4 }]
    )

    e.remove({ id: 'minecraft:conduit' })
    lightning('conduit',
        [{ item: 'minecraft:heart_of_the_sea' }, { item: 'minecraft:nautilus_shell', count: 2 },
        { tag: 'forge:gems/lapis' }, { tag: 'forge:gems/fluorite' }, { tag: 'forge:gems/source' }],
        [{ type: "drop_item", item: "minecraft:conduit" }]
    )

    e.remove({ id: 'naturesaura:wood_stand' })
    lightning('wood_stand',
        [{ item: 'eidolon:gold_inlay' }, { item: 'botania:livingwood_wall' }, { item: 'naturesaura:gold_leaf' }, { tag: 'forge:gems/apatite' }],
        [{ type: "drop_item", item: "naturesaura:wood_stand" }]
    )

    e.remove({ id: 'meetyourfight:fossil_bait' })
    lightning('fossil_bait',
        [{ item: 'undergarden:music_disc_relict' }, { item: 'aquaculture:fish_bones' },
        { tag: 'forge:gems/lapis', count: 2 }, { item: 'minecraft:fermented_spider_eye', count: 2 },
        { item: 'undergarden:raw_dweller_meat', count: 4 }],
        [{ type: "drop_item", item: "meetyourfight:fossil_bait" }]
    )

    e.remove({ id: 'ars_nouveau:jar_of_light' })
    lightning('jar_of_light',
        [{ item: 'supplementaries:jar', count: 3 }, { tag: 'forge:gems/fluorite', count: 3 }],
        [{ type: "drop_item", item: "ars_nouveau:jar_of_light", count: 1 }]
    )

    e.remove({ id: 'ars_nouveau:void_jar' })
    lightning('void_jar',
        [{ item: 'supplementaries:jar', count: 3 }, { tag: 'forge:dusts/obsidian', count: 3 }],
        [{ type: "drop_item", item: "ars_nouveau:void_jar", count: 1 }]
    )

    e.remove({ id: 'naturesaura:calling_spirit' })
    lightning('calling_spirit',
        [{ type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: "naturesaura:overworld" } },
        { item: 'naturesaura:infused_iron' }, { item: 'botania:rune_water' }, { item: 'botania:rune_earth' },
        { type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: "naturesaura:nether" } },
        { item: 'naturesaura:tainted_gold' }, { item: 'botania:rune_fire' }, { item: 'botania:rune_air' }],
        [{ type: "drop_item", item: "naturesaura:calling_spirit", count: 4 }]
    )

    e.remove({ id: 'minecraft:lodestone' })
    lightning('lodestone',
        [{ tag: 'forge:storage_blocks/iron', count: 2 }, { tag: 'forge:dusts/iron', count: 2 },
        { tag: 'forge:gems/fluorite', count: 2 }, { tag: 'forge:dusts/copper', count: 2 }],
        [{ type: "drop_item", item: "minecraft:lodestone", count: 1 }],
    )

    e.remove({ id: 'botania:spark' })
    lightning('spark',
        [{ tag: 'botania:petals', count: 6 }, { item: 'botania:quartz_blaze', count: 2 }, { item: 'kubejs:replaceme', count: 2 }],
        [{ type: "drop_item", item: "botania:spark", count: 3 }]
    )

    e.remove({ id: 'meetyourfight:haunted_bell' })
    lightning('haunted_bell',
        [{ item: 'kubejs:replaceme', count: 3 }, { tag: 'forge:gems/fluorite', count: 3 }, { item: 'kubejs:replaceme', count: 3 }],
        [{ type: "drop_item", item: "meetyourfight:haunted_bell", count: 1 }]
    )

    lightning('invar_dust',
        [{ item: 'thermal:phytogro', count: 2 }, { tag: 'forge:dusts/iron', count: 2 }, { tag: 'forge:dusts/nickel' }],
        [{ type: "drop_item", item: "emendatus:invar_dust", count: 3 }]
    )

    lightning('firmament',
        [{ tag: 'forge:gems/fluorite' }, { item: 'minecraft:prismarine', count: 6 }, { item: 'undergarden:shiverstone', count: 6 }],
        [{ type: "drop_item", item: "kubejs:firmament", count: 3 }]
    )

    e.remove({ id: 'eidolon:stone_altar' })
    lightning('stone_altar',
        [{ item: 'eidolon:soul_shard' }, { item: 'minecraft:polished_andesite' }, { item: 'eidolon:pewter_inlay' }],
        [{ type: "drop_item", item: "eidolon:stone_altar", count: 1 }]
    )

    e.remove({ id: 'bloodmagic:teleposer' })
    lightning('teleposer',
        [{ item: 'botania:corporea_spark', count: 3 }, { tag: 'forge:nuggets/dawnstone', count: 3 }, { item: 'bloodmagic:ritualstone', count: 2 }],
        [{ type: "drop_item", item: "bloodmagic:teleposer", count: 2 }]
    )

    // these all need to be entirely remade, 27 items meh and starmetal dusts
    // e.remove({ id: 'kubejs:crystalline_oak_leaves' })
    // lightning('crystalline_oak_leaves',
    //     [{ item: 'minecraft:oak_leaves', count: 64 }, { tag: 'kubejs:replaceme' }, { item: 'quark:green_corundum' }],
    //     [{ type: "drop_item", item: "kubejs:crystalline_oak_leaves", count: 64 }]
    // )

    // e.remove({ id: 'kubejs:crystalline_flowering_palo_verde_leaves' })
    // lightning('crystalline_flowering_palo_verde_leaves',
    //     [{ item: 'kubejs:replaceme', count: 64 }, { tag: 'kubejs:replaceme' }, { item: 'quark:yellow_corundum' }],
    //     [{ type: "drop_item", item: "kubejs:crystalline_flowering_palo_verde_leaves", count: 64 }]
    // )

    // e.remove({ id: 'kubejs:crystalline_dark_oak_wood' })
    // lightning('crystalline_dark_oak_wood',
    //     [{ item: 'minecraft:dark_oak_wood', count: 64 }, { tag: 'kubejs:replaceme' }, { item: 'quark:orange_corundum' }],
    //     [{ type: "drop_item", item: "kubejs:crystalline_dark_oak_wood", count: 64 }]
    // )
})

ServerEvents.tags('item', e => {
    e.add('lychee:lightning_fire_immune', ['powah:charged_snowball', 'ars_nouveau:sourcestone', 'minecraft:conduit'])
})