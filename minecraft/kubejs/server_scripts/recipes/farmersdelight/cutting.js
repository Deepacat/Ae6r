ServerEvents.recipes(e => {
    e.recipes.farmersdelight.cutting(['minecraft:leather'],
        '#forge:tools/knives', '3x kubejs:leather_stripe',
    ).id('kubejs:cutting_board/leather_stripe')

    e.recipes.farmersdelight.cutting(['#minecraft:planks'],
        '#forge:tools/axes', '2x minecraft:stick'
    ).id('kubejs:cutting_board/stick')

    e.recipes.farmersdelight.cutting(['upgrade_aquatic:embedded_ammonite'],
        '#forge:tools/pickaxes', '2x minecraft:nautilus_shell'
    ).id('kubejs:cutting_board/nautilus_shell')
})