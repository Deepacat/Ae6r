ServerEvents.recipes(e => {
    // contextual: { type: "chance", chance: 0.5 }

    // dont add more than 27 input items
    explosionRecipe(e, 'andesite_alloy_from_iron',
        [{ tag: 'forge:andesite' }, { tag: 'forge:ingots/iron' }],
        [{ type: "drop_item", item: "create:andesite_alloy" }]
    )

    explosionRecipe(e, 'andesite_alloy_from_zinc', [{ tag: 'forge:andesite', count: 2 }, { tag: 'forge:ingots/zinc' }],
        [{ type: "drop_item", item: "create:andesite_alloy", count: 2 }]
    )

    explosionRecipe(e, 'superheated_steel_ingot',
        [{ tag: 'forge:ingots/steel', count: 2 }, { tag: 'forge:tar', count: 2 }, { tag: 'forge:obsidian', count: 2 }],
        [{ type: "drop_item", item: "kubejs:superheated_steel_ingot", count: 4 }]
    )

    explosionRecipe(e, 'devils_ante',
        [{ item: 'bloodmagic:fortune_anointment' }, { item: 'kubejs:replaceme', count: 7 },
        { item: 'kubejs:replaceme', count: 7 }],
        [{ type: "drop_item", item: 'meetyourfight:devils_ante' }]
    )

    explosionRecipe(e, 'invar_dust',
        [{ item: 'thermal:phytogro', count: 5 }, { tag: 'forge:dusts/iron', count: 4 }, { tag: 'forge:dusts/nickel', count: 2 }],
        [{ type: "drop_item", item: "emendatus:invar_dust", count: 6 }]
    )

    explosionRecipe(e, 'rainbow_rune',
        [{ item: 'botania:rune_earth', count: 1 }, { item: 'kubejs:rainbow_rune', count: 8 }],
        [{ type: "drop_item", item: 'quark:red_corundum_cluster', contextual: { type: "chance", chance: 0.02 } },
        { type: "drop_item", item: 'quark:orange_corundum_cluster', contextual: { type: "chance", chance: 0.02 } },
        { type: "drop_item", item: 'quark:yellow_corundum_cluster', contextual: { type: "chance", chance: 0.02 } },
        { type: "drop_item", item: 'quark:green_corundum_cluster', contextual: { type: "chance", chance: 0.02 } },
        { type: "drop_item", item: 'quark:blue_corundum_cluster', contextual: { type: "chance", chance: 0.02 } },
        { type: "drop_item", item: 'quark:indigo_corundum_cluster', contextual: { type: "chance", chance: 0.02 } },
        { type: "drop_item", item: 'quark:violet_corundum_cluster', contextual: { type: "chance", chance: 0.02 } },
        { type: "drop_item", item: 'quark:white_corundum_cluster', contextual: { type: "chance", chance: 0.02 } }], "comment.kubejs.cluster_chance"
    )
})