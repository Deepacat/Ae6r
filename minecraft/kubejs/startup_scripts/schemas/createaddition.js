// priority: 0

/**
 * @param {Internal.RecipeSchemaRegistryEventJS} e
 * @param {{ components?: Special.RecipeComponentMap; anyFloatNumber?: Internal.NumberComponent$FloatRange; anyString?: Internal.StringComponent; bool?: Internal.BooleanComponent; id: any; intNumber: any; filteredString?: (...args: any[]) => Internal.RecipeComponent<any>; nonBlankString?: Internal.StringComponent; floatNumber?: Internal.NumberComponent$FloatRange; inputItem: any; outputItem: any; inputFluid?: Internal.FluidComponents$1; outputFluid?: Internal.FluidComponents$2; outputFluidOrItem?: Internal.OrRecipeComponent<any, any>; fluidTag?: Internal.RecipeComponent<any>; blockTag?: Internal.TagKeyComponent<any>; inputStackedItem?: any; inputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.InputFluid, any>; outputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.OutputFluid, any>; inputFluidOrItem?: (tagKeyStr: any) => Internal.OrRecipeComponent<InputItem, any>; inputFluidOrStackedItem?: (tagKeyStr: any) => any; heatCondition?: Internal.RecipeComponent<any>; }} c
 */
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