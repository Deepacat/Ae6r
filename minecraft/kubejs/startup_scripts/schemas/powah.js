// priority: 0
/**
 * @param {Internal.RecipeSchemaRegistryEventJS} e
 * @param {{ components?: Special.RecipeComponentMap; bound?: any; anyFloatNumber?: Internal.NumberComponent$FloatRange; anyString?: Internal.StringComponent; bool?: Internal.BooleanComponent; id?: Internal.StringComponent; intNumber: any; filteredString?: (...args: any[]) => Internal.RecipeComponent<any>; nonBlankString?: Internal.StringComponent; floatNumber?: Internal.NumberComponent$FloatRange; inputItem: any; outputItem: any; inputFluid?: Internal.FluidComponents$1; outputFluid?: Internal.FluidComponents$2; outputFluidOrItem?: Internal.OrRecipeComponent<any, any>; fluidTag?: Internal.RecipeComponent<any>; blockTag?: Internal.TagKeyComponent<any>; inputStackedItem?: any; inputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.InputFluid, any>; outputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.OutputFluid, any>; inputFluidOrItem?: (tagKeyStr: any) => Internal.OrRecipeComponent<InputItem, any>; inputFluidOrStackedItem?: (tagKeyStr: any) => any; heatCondition?: Internal.RecipeComponent<any>; }} c
 */
function recipeSchema_powah(e, c) {
    if (Platform.isLoaded('powah')) {
        e.register('powah:energizing',
            new $RecipeSchema(
                c.outputItem.key('result'),
                c.inputItem.asArray().key('ingredients'),
                c.intNumber.key('energy').optional(100000).alwaysWrite()
            )
        )
    }
}