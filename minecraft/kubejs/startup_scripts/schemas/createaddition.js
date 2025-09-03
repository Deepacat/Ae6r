StartupEvents.recipeSchemaRegistry(e => {
    if (Platform.isLoaded('createaddition')) {
        e.register('createaddition:rolling',
            new $RecipeSchema(outputItem.key('result'), inputItem.key('input'))
        )
        e.register('createaddition:charging',
            new $RecipeSchema(
                outputItem.key('result'),
                inputItem.key('input'),
                intNumber.key('energy'),
                intNumber.key('maxChargeRate').optional(0)
            )
        )
        e.register('createaddition:liquid_burning',
            new $RecipeSchema(
                inputFluidOrFluidTag('fluidTag').key('input'),
                intNumber.key('burnTime'),
                bool.key('superheated').optional(false)
            )
        )
        console.log('Recipe Schemas for createaddition loaded.')
    }
})