function commentItem(lore) {
    return SummoningOutput.item(
        Item.of('ftbquests:missing_item', {
            display: {
                Name: "\"Comment\"",
                Lore: lore
            },
            Enchantments: [{}],
            "quark:RuneColor": "red"
        })
    ).offset(0, -999, 0)
}

function findingHelperItem(itemId) {
    return SummoningOutput.item(
        Item.of(itemId, {
            display: {
                Name: "\"Finding Helper Item\"",
                Lore: [
                    "\"This output item is not given, it has been placed for your ease of finding this summoning recipe!\""
                ]
            },
            Enchantments: [{}],
            "quark:RuneColor": "red"
        })
    ).offset(0, -999, 0)
}

// flutter summoning ritual
ServerEvents.recipes(e => {
    // summon 2 flutters
    e.recipes.summoningrituals.altar('#summoningrituals:flutter_catalysts')
        .input('2x minecraft:flowering_azalea')
        .input('2x minecraft:spore_blossom')
        .mobOutput(SummoningOutput.mob('alexsmobs:flutter')
            .count(2)
            .offset(0, 1, 0)
            .data({ ForgeData: { time_sheared: 12000 } })
        )
        .recipeTime(20 * 10)
        .itemOutput(findingHelperItem('kubejs:lush_silk'))
        .itemOutput(commentItem(["\"This ritual only works in lush caves!\""]))
        .id('kubejs:summoningrituals/altar/flutter')

    // allay to wissen
    e.recipes.summoningrituals.altar('#forge:storage_blocks/arcanum')
        .input('3x minecraft:amethyst_shard')
        .input('3x minecraft:experience_bottle')
        .sacrifice('minecraft:allay')
        .sacrificeRegion(9, 9)
        .recipeTime(20 * 10)
        .itemOutput(findingHelperItem('wizards_reborn:arcanum'))
        .itemOutput(commentItem(["\"This ritual outputs 100 wissen to an arcane workbench below the altar.\""]))
        .id('kubejs:summoningrituals/altar/wissen_allay')

    // quenched allay to wissen
    e.recipes.summoningrituals.altar('hexcasting:quenched_allay_shard')
        .input(Ingredient.of('#forge:gems/arcanum', 3))
        .recipeTime(20 * 3)
        .itemOutput(findingHelperItem('wizards_reborn:arcanum'))
        .itemOutput(commentItem(["\"This ritual outputs 1000 wissen to an arcane workbench below the altar.\""]))
        .id('kubejs:summoningrituals/altar/wissen_quenched')
})

