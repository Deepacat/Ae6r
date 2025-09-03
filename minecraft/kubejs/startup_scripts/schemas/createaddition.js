// priority: 0
function recipeSchema_createaddition(e, c) {
    if (Platform.isLoaded('createaddition')) {
        e.register('createaddition:rolling',
            new $RecipeSchema(
                c.outputItem.key('result'),
                c.inputItem.key('input'))
        )
        e.register('createaddition:charging',
            new $RecipeSchema(
                c.outputItem.key('result'),
                c.inputItem.key('input'),
                c.intNumber.key('energy'),
                c.intNumber.key('maxChargeRate').optional(0)
            )
        )
        e.register('createaddition:liquid_burning',
            new $RecipeSchema(
                c.inputFluidOrFluidTag('fluidTag').key('input'),
                c.intNumber.key('burnTime'),
                c.bool.key('superheated').optional(false)
            )
        )
        console.log('Recipe Schemas for createaddition loaded.')
    }
}