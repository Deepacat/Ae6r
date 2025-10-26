// priority: 0

/**
 * @param {Internal.RecipeSchemaRegistryEventJS} e
 * @param {{ components?: Special.RecipeComponentMap; anyFloatNumber?: Internal.NumberComponent$FloatRange; anyString?: Internal.StringComponent; bool?: Internal.BooleanComponent; id: any; intNumber: any; filteredString?: (...args: any[]) => Internal.RecipeComponent<any>; nonBlankString?: Internal.StringComponent; floatNumber?: Internal.NumberComponent$FloatRange; inputItem: any; outputItem: any; inputFluid?: Internal.FluidComponents$1; outputFluid?: Internal.FluidComponents$2; outputFluidOrItem?: Internal.OrRecipeComponent<any, any>; fluidTag?: Internal.RecipeComponent<any>; blockTag?: Internal.TagKeyComponent<any>; inputStackedItem?: any; inputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.InputFluid, any>; outputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.OutputFluid, any>; inputFluidOrItem?: (tagKeyStr: any) => Internal.OrRecipeComponent<InputItem, any>; inputFluidOrStackedItem?: (tagKeyStr: any) => any; heatCondition?: Internal.RecipeComponent<any>; }} c
 */
function recipeSchema_apotheosis(e, c) {
    if (Platform.isLoaded('apotheosis')) {
        let enchantingRequirements = new $RecipeComponentBuilder(3)
            .add(c.intNumber.key('eterna').optional(-1))
            .add(c.intNumber.key('quanta').optional(-1))
            .add(c.intNumber.key('arcana').optional(-1))

        e.register('apotheosis:enchanting',
            new $RecipeSchema(
                c.inputItem.key('input'),
                c.outputItem.key('result'),
                enchantingRequirements.key('requirements').defaultOptional(),
                enchantingRequirements.key('max_requirements').defaultOptional(),
                c.intNumber.key('display_level').optional(0)
            )
        )

        console.log('Recipe Schemas for apotheosis loaded.')
    }
}