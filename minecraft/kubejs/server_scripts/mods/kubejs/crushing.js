const allCrushTypes = [
    'minecraft:crafting',
    'immersiveengineering:crusher',
    'mekanism:crusher',
    'thermal:pulverizer',
    'bloodmagic:arc',
    'create:crushing',
    'create:milling',
    'occultism:crushing',
    'ars_nouveau:crush',
]

ServerEvents.recipes(e => {
    allCrushing(e, {
        types: allCrushTypes,
        output: 'thermal:ender_pearl_dust',
        secondaryOutput: undefined,
        input: 'minecraft:ender_pearl',
        xp: 0.1,
        processTime: 100,
        energy: 2400,
        ignoreOccultismMult: true,
        removeExisting: true,
        idSuffix: 'ender_pearl_dust'
    })
    allCrushing(e, {
        types: allCrushTypes,
        output: '4x kubejs:basalt_powder',
        secondaryOutput: Item.of('kubejs:basalt_powder').withChance(0.5),
        input: Ingredient.of('#forge:basalt'),
        xp: 0.5,
        processTime: 100,
        energy: 2400,
        ignoreOccultismMult: true,
        removeExisting: false,
        idSuffix: 'basalt_powder'
    })
    allCrushing(e, {
        types: allCrushTypes,
        output: 'kubejs:ground_meat',
        secondaryOutput: Item.of('minecraft:bone_meal').withChance(0.15),
        input: Ingredient.of('#enigmatica:meats/small'),
        xp: 0.5,
        processTime: 100,
        energy: 2400,
        ignoreOccultismMult: true,
        removeExisting: false,
        idSuffix: 'ground_meat_small'
    })
    allCrushing(e, {
        types: allCrushTypes,
        output: '2x kubejs:ground_meat',
        secondaryOutput: Item.of('minecraft:bone_meal').withChance(0.15),
        input: Ingredient.of('#enigmatica:meats/medium'),
        xp: 0.5,
        processTime: 100,
        energy: 2400,
        ignoreOccultismMult: true,
        removeExisting: false,
        idSuffix: 'ground_meat_medium'
    })
    allCrushing(e, {
        types: allCrushTypes,
        output: '3x kubejs:ground_meat',
        secondaryOutput: Item.of('minecraft:bone_meal').withChance(0.15),
        input: Ingredient.of('#enigmatica:meats/large'),
        xp: 0.5,
        processTime: 100,
        energy: 2400,
        ignoreOccultismMult: true,
        removeExisting: false,
        idSuffix: 'ground_meat_large'
    })
    allCrushing(e, {
        types: allCrushTypes,
        output: '3x waystones:warp_dust',
        secondaryOutput: Item.of('waystones:warp_dust').withChance(0.15),
        input: 'waystones:warp_stone',
        xp: 0.5,
        processTime: 100,
        energy: 2400,
        ignoreOccultismMult: true,
        removeExisting: false,
        idSuffix: 'warp_dust'
    })
})