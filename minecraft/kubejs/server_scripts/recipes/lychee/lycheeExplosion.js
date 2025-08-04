ServerEvents.recipes(e => {
    function exploding(id, inputs, posts, comment) {
        /* lychee apparently doesn't do itemstacks, only ingredient,
        so I have to add these stupid items several times to replicate it
        it also doesn't like having over 27 inputs */
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
            console.log('lychee exploding recipe ' + id + ' has more than 27 inputs, bad bad')
            return
        }

        let recipe = {
            type: "lychee:item_exploding",
            item_in: finalInputs,
            post: posts
        }

        if (comment) { recipe.comment = comment }

        e.custom(recipe).id('kubejs:lychee/exploding/' + id)
    }
    // contextual: { type: "chance", chance: 0.5 }


    // dont add more than 27 input items
    exploding('andesite_alloy_from_iron',
        [{ tag: 'forge:andesite' }, { tag: 'forge:ingots/iron' }],
        [{ type: "drop_item", item: "create:andesite_alloy" }]
    )

    exploding('andesite_alloy_from_zinc', [{ tag: 'forge:andesite', count: 2 }, { tag: 'forge:ingots/zinc' }],
        [{ type: "drop_item", item: "create:andesite_alloy", count: 2 }]
    )

    exploding('superheated_steel_ingot',
        [{ tag: 'forge:ingots/steel', count: 2 }, { tag: 'forge:tar', count: 2 }, { tag: 'forge:obsidian', count: 2 }],
        [{ type: "drop_item", item: "kubejs:superheated_steel_ingot", count: 4 }]
    )

    exploding('devils_ante',
        [{ item: 'bloodmagic:fortune_anointment' }, { item: 'kubejs:replaceme', count: 7 },
        { item: 'kubejs:replaceme', count: 7 }],
        [{ type: "drop_item", item: 'meetyourfight:devils_ante' }]
    )

    exploding('invar_dust',
        [{ item: 'thermal:phytogro', count: 5 }, { tag: 'forge:dusts/iron', count: 4 }, { tag: 'forge:dusts/nickel', count: 2 }],
        [{ type: "drop_item", item: "emendatus:invar_dust", count: 6 }]
    )

    exploding('rainbow_rune',
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