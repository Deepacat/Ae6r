ServerEvents.recipes(e => {
    e.recipes.create.filling('thermal:syrup_bottle', [Fluid.of('thermal:syrup', 250), 'minecraft:glass_bottle'])
        .id('kubejs:filling/syrup_bottle')

    e.recipes.create.filling('pneumaticcraft:reinforced_stone', [Fluid.of('kubejs:molten_compressed_iron', 18), 'minecraft:light_gray_concrete_powder'])
        .id('kubejs:filling/reinforced_stone')
})