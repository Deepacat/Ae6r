StartupEvents.recipeSchemaRegistry(e => {
    if (Platform.isLoaded('thermal')) {
        e.register('thermal:bottler',
            new $RecipeSchema(
                outputItem.key('result'),
                inputFluidOrItem('fluid_tag').asArray().key('ingredients'),
                intNumber.key('energy').optional(400).alwaysWrite(),
                floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:centrifuge',
            new $RecipeSchema(
                outputFluidOrItem.asArray().key('result'),
                inputItem.key('ingredient'),
                intNumber.key('energy').optional(2000).alwaysWrite(),
                floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:chiller',
            new $RecipeSchema(
                outputFluidOrItem.asArray().key('result'),
                inputFluidOrItem('fluid_tag').asArray().key('ingredients'),
                intNumber.key('energy').optional(4000).alwaysWrite(),
                floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:crucible',
            new $RecipeSchema(
                outputFluid.asArray().key('result'),
                inputItem.key('ingredient'),
                intNumber.key('energy').optional(40000).alwaysWrite(),
                floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:crystallizer',
            new $RecipeSchema(
                outputItem.key('result'),
                inputFluidOrItem('fluid_tag').asArray().key('ingredients'),
                intNumber.key('energy').optional(20000).alwaysWrite(),
                floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:furnace',
            new $RecipeSchema(
                outputItem.key('result'), // use .result(outputItem) after recipe
                inputItem.key('ingredient'),
                floatNumber.key('energy_mod').optional(1).alwaysWrite(),
                floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:insolator',
            new $RecipeSchema(
                outputFluidOrItem.asArray().key('result'),
                inputFluidOrItem('fluid_tag').key('ingredient'),
                intNumber.key('water').optional(500).alwaysWrite(),
                intNumber.key('energy').optional(20000).alwaysWrite(),
                floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:press',
            new $RecipeSchema(
                outputFluidOrItem.asArray().key('result'),
                inputItem.asArray().key('ingredients'),
                intNumber.key('energy').optional(2400).alwaysWrite(),
                floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:pulverizer',
            new $RecipeSchema(
                outputItem.asArray().key('result'),
                inputItem.key('ingredient'),
                intNumber.key('energy').optional(4000).alwaysWrite(),
                floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:pyrolyzer',
            new $RecipeSchema(
                outputFluidOrItem.asArray().key('result'),
                inputItem.key('ingredient'),
                floatNumber.key('experience').optional(0).alwaysWrite().exclude(),
                intNumber.key('energy').optional(2000).alwaysWrite()
            )
        )
        e.register('thermal:refinery',
            new $RecipeSchema(
                outputFluidOrItem.asArray().key('result'),
                inputFluidOrFluidTag('fluid_tag').key('ingredient'),
                intNumber.key('energy').optional(8000).alwaysWrite(),
                floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:sawmill',
            new $RecipeSchema(
                outputItem.asArray().key('result'),
                inputItem.key('ingredient'),
                intNumber.key('energy').optional(2000).alwaysWrite(),
                floatNumber.key('experience').optional(0).alwaysWrite().exclude()
            )
        )
        e.register('thermal:smelter',
            new $RecipeSchema(
                outputItem.key('result'),
                inputItem.asArray().key('ingredients'),
                intNumber.key('energy').optional(3200).alwaysWrite(),
                floatNumber.key('experience').optional(0).alwaysWrite().exclude()
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
                inputFluidOrFluidTag('fluid_tag').key('ingredient'),
                intNumber.key('energy'),
            )
        )
        e.register('thermal:compression_fuel',
            new $RecipeSchema(
                inputFluidOrFluidTag('fluid_tag').key('ingredient'),
                intNumber.key('energy'),
            )
        )
        e.register('thermal:disenchantment_fuel',
            new $RecipeSchema(
                inputItem.key('ingredient'),
                intNumber.key('energy'),
            )
        )
        e.register('thermal:gourmand_fuel',
            new $RecipeSchema(
                inputItem.key('ingredient'),
                intNumber.key('energy'),
            )
        )
        e.register('thermal:lapidary_fuel',
            new $RecipeSchema(
                inputItem.key('ingredient'),
                intNumber.key('energy'),
            )
        )
        e.register('thermal:magmatic_fuel',
            new $RecipeSchema(
                inputFluidOrFluidTag('fluid_tag').key('ingredient'),
                intNumber.key('energy'),
            )
        )
        e.register('thermal:numismatic_fuel',
            new $RecipeSchema(
                inputItem.key('ingredient'),
                intNumber.key('energy'),
            )
        )
        e.register('thermal:stirling_fuel',
            new $RecipeSchema(
                inputItem.key('ingredient'),
                intNumber.key('energy'),
            )
        )
    }
})