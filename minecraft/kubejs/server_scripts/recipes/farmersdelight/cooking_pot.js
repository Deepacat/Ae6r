ServerEvents.recipes(e => {
    e.recipes.farmersdelight.cooking(['eidolon:enchanted_ash', '#forge:dusts/coal'],
        'emendatus:sulfur_dust', 0.01, 200
    ).id('kubejs:cooking/sulfur_dust')
    
    e.recipes.farmersdelight.cooking(['eidolon:enchanted_ash', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh',
        'minecraft:rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh'],
        '5x minecraft:leather', 0.25, 200
    ).id('kubejs:cooking/leather')

    e.recipes.farmersdelight.cooking(['eidolon:enchanted_ash', '#forge:dusts/ender'],
        '2x eidolon:ender_calx', 0.1, 50
    ).id('kubejs:cooking/ender_calx')

    e.recipes.farmersdelight.cooking(['eidolon:enchanted_ash', '#forge:dusts/gold', 'minecraft:melon_slice',
        'minecraft:melon_slice', 'minecraft:melon_slice', 'minecraft:melon_slice'],
        '4x glistering_melon_slice', 0.25, 200
    ).id('kubejs:cooking/glistering_melon_slice')

    e.recipes.farmersdelight.cooking(['eidolon:enchanted_ash', '#forge:dusts/gold', 'minecraft:carrot',
        'minecraft:carrot', 'minecraft:carrot', 'minecraft:carrot'],
        '4x minecraft:golden_carrot', 0.25, 200
    ).id('kubejs:cooking/golden_carrot')

    e.recipes.farmersdelight.cooking(['eidolon:enchanted_ash', '#forge:dusts/gold', 'minecraft:apple',
        'minecraft:apple', 'minecraft:apple', 'minecraft:apple'],
        '4x minecraft:golden_apple', 0.25, 200
    ).id('kubejs:cooking/golden_apple')

    e.recipes.farmersdelight.cooking(['eidolon:enchanted_ash', '#forge:dusts/charcoal', '#forge:dusts/sulfur'],
        '4x minecraft:gunpowder', 0.05, 50
    ).id('kubejs:cooking/gunpowder')
})