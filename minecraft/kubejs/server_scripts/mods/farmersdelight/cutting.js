ServerEvents.recipes(e => {
    e.recipes.farmersdelight.cutting('3x kubejs:leather_stripe',
        'minecraft:leather',
        '#forge:tools/knives', 
    ).id('kubejs:cutting_board/leather_stripe')

    e.recipes.farmersdelight.cutting('2x minecraft:stick',
        '#minecraft:planks',
        '#forge:tools/axes',
    ).id('kubejs:cutting_board/stick')

    e.recipes.farmersdelight.cutting('2x minecraft:nautilus_shell',
        'upgrade_aquatic:embedded_ammonite',
        '#forge:tools/pickaxes',
    ).id('kubejs:cutting_board/nautilus_shell')
})