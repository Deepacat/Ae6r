// priority: 0

/**
 * @param {Internal.RecipeSchemaRegistryEventJS} e
 * @param {{ components?: Special.RecipeComponentMap; anyFloatNumber?: Internal.NumberComponent$FloatRange; anyString?: Internal.StringComponent; bool?: Internal.BooleanComponent; id: any; intNumber: any; filteredString?: (...args: any[]) => Internal.RecipeComponent<any>; nonBlankString?: Internal.StringComponent; floatNumber?: Internal.NumberComponent$FloatRange; inputItem: any; outputItem: any; inputFluid?: Internal.FluidComponents$1; outputFluid?: Internal.FluidComponents$2; outputFluidOrItem?: Internal.OrRecipeComponent<any, any>; fluidTag?: Internal.RecipeComponent<any>; blockTag?: Internal.TagKeyComponent<any>; inputStackedItem?: any; inputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.InputFluid, any>; outputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.OutputFluid, any>; inputFluidOrItem?: (tagKeyStr: any) => Internal.OrRecipeComponent<InputItem, any>; inputFluidOrStackedItem?: (tagKeyStr: any) => any; heatCondition?: Internal.RecipeComponent<any>; }} c
 */
function recipeSchema_farmers_delight(e, c) {
    if (Platform.isLoaded('farmersdelight')) {
        let itemOrAction = c.inputItem.or(
            new $RecipeComponentBuilder(2)
                .add(
                    c.anyString
                        .key('type')
                        .alwaysWrite()
                        .optional('farmersdelight:tool_action')
                )
                .add(c.anyString.key('action'))
        )

        e.register('farmersdelight:cooking',
            new $RecipeSchema(
                c.inputItem.asArray().key('ingredients'),
                c.outputItem.key('result'),
                c.intNumber.key('cookingtime'),
                c.floatNumber.key('experience').optional(1),
                c.inputItem.key('container').defaultOptional(),
                c.anyString.key('recipe_book_tab').optional('meals')
            )
        )
        e.register('farmersdelight:cutting',
            new $RecipeSchema(
                c.outputItem.asArray().key('result'),
                c.inputItem.asArray().key('ingredients'),
                itemOrAction.key('tool'),
                c.anyString.key('sound').defaultOptional()
            )
        )
    }
}