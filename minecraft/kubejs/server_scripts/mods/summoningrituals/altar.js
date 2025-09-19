// flutter summoning ritual
ServerEvents.recipes(e => {
    e.recipes.summoningrituals.altar('#summoningrituals:flutter_catalysts')
        .input('2x minecraft:flowering_azalea')
        .input('2x minecraft:spore_blossom')
        .recipeTime(200)
        .mobOutput(SummoningOutput.mob('alexsmobs:flutter')
            .count(2)
            .offset(0, 1, 0)
            .data({ ForgeData: { time_sheared: 12000 } })
        )
        .itemOutput(
            SummoningOutput.item(
                Item.of('kubejs:lush_silk', 69, {
                    display: {
                        Name: "\"Suspiciously non existent lush silk\"",
                        Lore: [
                            "\"This has been placed for your ease of finding this summoning recipe!\"",
                            "\"(item spawns at y -999)\"",
                            "\"This ritual only works in lush caves!\""
                        ]
                    }
                })
            ).offset(0, -999, 0)
        )
        .id('kubejs:summoningrituals/altar/flutter')
})