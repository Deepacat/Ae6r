// priority: 0
function recipeSchema_thermal(e, c) {
    if (Platform.isLoaded('thermal')) {

        e.register('thermal:bottler',
            new $RecipeSchema(
                c.outputItem.key('result'),
                c.inputFluidOrItem('fluid_tag').asArray().key('ingredients'),
                c.intNumber.key('energy').optional(400).alwaysWrite(),
                c.floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:centrifuge',
            new $RecipeSchema(
                c.outputFluidOrItem.asArray().key('result'),
                c.inputItem.key('ingredient'),
                c.intNumber.key('energy').optional(2000).alwaysWrite(),
                c.floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:chiller',
            new $RecipeSchema(
                c.outputFluidOrItem.asArray().key('result'),
                c.inputFluidOrItem('fluid_tag').asArray().key('ingredients'),
                c.intNumber.key('energy').optional(4000).alwaysWrite(),
                c.floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:crucible',
            new $RecipeSchema(
                c.outputFluid.asArray().key('result'),
                c.inputItem.key('ingredient'),
                c.intNumber.key('energy').optional(40000).alwaysWrite(),
                c.floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:crystallizer',
            new $RecipeSchema(
                c.outputItem.key('result'),
                c.inputFluidOrItem('fluid_tag').asArray().key('ingredients'),
                c.intNumber.key('energy').optional(20000).alwaysWrite(),
                c.floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:furnace',
            new $RecipeSchema(
                c.outputItem.key('result'), // use .result(outputItem) after recipe
                c.inputItem.key('ingredient'),
                c.floatNumber.key('energy_mod').optional(1).alwaysWrite(),
                c.floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:insolator',
            new $RecipeSchema(
                c.outputFluidOrItem.asArray().key('result'),
                c.inputFluidOrItem('fluid_tag').key('ingredient'),
                c.intNumber.key('water').optional(500).alwaysWrite(),
                c.intNumber.key('energy').optional(20000).alwaysWrite(),
                c.floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:press',
            new $RecipeSchema(
                c.outputFluidOrItem.asArray().key('result'),
                c.inputItem.asArray().key('ingredients'),
                c.intNumber.key('energy').optional(2400).alwaysWrite(),
                c.floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:pulverizer',
            new $RecipeSchema(
                c.outputItem.asArray().key('result'),
                c.inputItem.key('ingredient'),
                c.intNumber.key('energy').optional(4000).alwaysWrite(),
                c.floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:pyrolyzer',
            new $RecipeSchema(
                c.outputFluidOrItem.asArray().key('result'),
                c.inputItem.key('ingredient'),
                c.floatNumber.key('experience').optional(0).alwaysWrite().exclude(),
                c.intNumber.key('energy').optional(2000).alwaysWrite()
            )
        )
        e.register('thermal:refinery',
            new $RecipeSchema(
                c.outputFluidOrItem.asArray().key('result'),
                c.inputFluidOrFluidTag('fluid_tag').key('ingredient'),
                c.intNumber.key('energy').optional(8000).alwaysWrite(),
                c.floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:sawmill',
            new $RecipeSchema(
                c.outputItem.asArray().key('result'),
                c.inputItem.key('ingredient'),
                c.intNumber.key('energy').optional(2000).alwaysWrite(),
                c.floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:smelter',
            new $RecipeSchema(
                c.outputItem.key('result'),
                c.inputItem.asArray().key('ingredients'),
                c.intNumber.key('energy').optional(3200).alwaysWrite(),
                c.floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        let a = {
            "type": "thermal:compression_fuel",
            "ingredient": {
                "fluid_tag": "forge:creosote",
                "amount": 1000
            },
            "energy": 20000
        }
        // fuels
        e.register('thermal:compression_fuel',
            new $RecipeSchema(
                c.inputFluidOrFluidTag('fluid_tag').key('ingredient'),
                c.intNumber.key('energy'),
            )
        )
        e.register('thermal:compression_fuel',
            new $RecipeSchema(
                c.inputFluidOrFluidTag('fluid_tag').key('ingredient'),
                c.intNumber.key('energy'),
            )
        )
        e.register('thermal:disenchantment_fuel',
            new $RecipeSchema(
                c.inputItem.key('ingredient'),
                c.intNumber.key('energy'),
            )
        )
        e.register('thermal:gourmand_fuel',
            new $RecipeSchema(
                c.inputItem.key('ingredient'),
                c.intNumber.key('energy'),
            )
        )
        e.register('thermal:lapidary_fuel',
            new $RecipeSchema(
                c.inputItem.key('ingredient'),
                c.intNumber.key('energy'),
            )
        )
        e.register('thermal:magmatic_fuel',
            new $RecipeSchema(
                c.inputFluidOrFluidTag('fluid_tag').key('ingredient'),
                c.intNumber.key('energy'),
            )
        )
        e.register('thermal:numismatic_fuel',
            new $RecipeSchema(
                c.inputItem.key('ingredient'),
                c.intNumber.key('energy'),
            )
        )
        e.register('thermal:stirling_fuel',
            new $RecipeSchema(
                c.inputItem.key('ingredient'),
                c.intNumber.key('energy'),
            )
        )
    }
}