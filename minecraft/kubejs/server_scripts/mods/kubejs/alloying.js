ServerEvents.recipes(event => {
    allAlloying(event, {
        types: allAlloyingTypes,
        item: {
            inputs: [Ingredient.of('#forge:ingots/iron', 2), Ingredient.of('#forge:ingots/nickel')],
            output: Item.of('emendatus:invar_ingot', 3)
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_iron', 180), Fluid.of('tconstruct:molten_nickel', 90)],
            output: Fluid.of('tconstruct:molten_invar', 270)
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 900,
        idSuffix: `invar`,
        idPrefix: `kubejs:alloying`
    })
    allAlloying(event, {
        types: allAlloyingTypes,
        item: {
            inputs: [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#forge:gems/amethyst')],
            output: Item.of('tconstruct:amethyst_bronze_ingot')
        },
        fluid: {
            inputs: [Fluid.of('tconstruct:molten_copper', 90), Fluid.of('tconstruct:molten_amethyst', 100)],
            output: Fluid.of('tconstruct:molten_amethyst_bronze', 90)
        },
        processTime: 300,
        energy: 3200,
        removeExisting: true,
        temperature: 820,
        idSuffix: `amethyst_bronze`,
        idPrefix: `kubejs:alloying`
    })
})