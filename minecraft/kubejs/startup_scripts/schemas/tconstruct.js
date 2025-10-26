// priority: 0

/**
 * @param {Internal.RecipeSchemaRegistryEventJS} e
 * @param {{ components?: Special.RecipeComponentMap; anyFloatNumber?: Internal.NumberComponent$FloatRange; anyString?: Internal.StringComponent; bool?: Internal.BooleanComponent; id: any; intNumber: any; filteredString?: (...args: any[]) => Internal.RecipeComponent<any>; nonBlankString?: Internal.StringComponent; floatNumber?: Internal.NumberComponent$FloatRange; inputItem: any; outputItem: any; inputFluid?: Internal.FluidComponents$1; outputFluid?: Internal.FluidComponents$2; outputFluidOrItem?: Internal.OrRecipeComponent<any, any>; fluidTag?: Internal.RecipeComponent<any>; blockTag?: Internal.TagKeyComponent<any>; inputStackedItem?: any; inputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.InputFluid, any>; outputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.OutputFluid, any>; inputFluidOrItem?: (tagKeyStr: any) => Internal.OrRecipeComponent<InputItem, any>; inputFluidOrStackedItem?: (tagKeyStr: any) => any; heatCondition?: Internal.RecipeComponent<any>; }} c
 */
function recipeSchema_tconstruct(e, c) {
    if (Platform.isLoaded('tconstruct')) {
        e.register('tconstruct:casting_table',
            new $RecipeSchema(
                c.outputItem.key('result'),
                c.inputFluidOrFluidTag('tag').asArrayOrSelf().key('fluid'),
                c.intNumber.key('cooling_time').optional(60).alwaysWrite(),
                c.bool.key('cast_consumed').optional(true).alwaysWrite(),
                c.inputItem.key('cast').defaultOptional().exclude() // use .cast(inputItem) after recipe
            )
        )
        e.register('tconstruct:casting_basin',
            new $RecipeSchema(
                c.outputItem.key('result'),
                c.inputFluidOrFluidTag('tag').asArrayOrSelf().key('fluid'),
                c.intNumber.key('cooling_time').optional(60).alwaysWrite(),
                c.bool.key('cast_consumed').optional(true).alwaysWrite(),
                c.inputItem.key('cast').defaultOptional().exclude() // use .cast(inputItem) after recipe
            )
        )
        e.register('tconstruct:melting',
            new $RecipeSchema(
                c.inputFluidOrFluidTag('tag').key('result'), // output uses input component to support tags
                c.inputItem.key('ingredient'),
                c.intNumber.key('temperature').optional(500).alwaysWrite(),
                c.intNumber.key('time').optional(60).alwaysWrite()
            )
        )
        e.register('tconstruct:alloy',
            new $RecipeSchema(
                c.inputFluidOrFluidTag('tag').key('result'), // output uses input component to support tags
                c.inputFluidOrFluidTag('tag').asArray().key('inputs'),
                c.intNumber.key('temperature').optional(500).alwaysWrite()
            )
        )
    }
}