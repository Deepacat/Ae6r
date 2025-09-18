/// @ts-check
// priority: 0

/**
 * @param {Internal.RecipeSchemaRegistryEventJS} e
 * @param {{ components?: Special.RecipeComponentMap; anyFloatNumber?: Internal.NumberComponent$FloatRange; anyString?: Internal.StringComponent; bool?: Internal.BooleanComponent; id: any; intNumber: any; filteredString?: (...args: any[]) => Internal.RecipeComponent<any>; nonBlankString?: Internal.StringComponent; floatNumber?: Internal.NumberComponent$FloatRange; inputItem: any; outputItem: any; inputFluid?: Internal.FluidComponents$1; outputFluid?: Internal.FluidComponents$2; outputFluidOrItem?: Internal.OrRecipeComponent<any, any>; fluidTag?: Internal.RecipeComponent<any>; blockTag?: Internal.TagKeyComponent<any>; inputStackedItem?: any; inputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.InputFluid, any>; outputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.OutputFluid, any>; inputFluidOrItem?: (tagKeyStr: any) => Internal.OrRecipeComponent<InputItem, any>; inputFluidOrStackedItem?: (tagKeyStr: any) => any; heatCondition?: Internal.RecipeComponent<any>; }} c
 */
function recipeSchema_naturesaura(e, c) {
    if (Platform.isLoaded('naturesaura')) {
        e.register('naturesaura:tree_ritual',
            new $RecipeSchema(
                c.outputItem.key('output'),
                c.inputItem.asArray().key('ingredients'),
                c.intNumber.key('time')
                    .optional(400)
                    .alwaysWrite()
                    .exclude(), // use .time(time) after recipe
                c.inputItem.key('sapling')
                    .optional('minecraft:oak_sapling')
                    .alwaysWrite()
                    .exclude() // use .sapling(inputItem) after recipe
            ))
        e.register('naturesaura:altar',
            new $RecipeSchema(
                c.outputItem.key('output'),
                c.inputItem.key('input'),
                c.inputItem.key('catalyst'),
                c.intNumber.key('aura')
                    .optional(3000)
                    .alwaysWrite()
                    .exclude(), // use .aura(aura) after recipe
                c.intNumber.key('time')
                    .optional(40)
                    .alwaysWrite()
                    .exclude() // use .time(time) after recipe
            )
        )
        e.register('naturesaura:offering',
            new $RecipeSchema(
                c.outputItem.key('output'),
                c.inputItem.key('input'),
                c.inputItem.key('start_item'),
            )
        )
        e.register('naturesaura:animal_spawner',
            new $RecipeSchema(
                c.outputItem.key('output'),
                c.inputItem.asArray().key('ingredients'),
                c.id.key('entity'),
                c.intNumber.key('aura')
                    .optional(50000)
                    .alwaysWrite()
                    .exclude(), // use .aura(aura) after recipe
                c.intNumber.key('time')
                    .optional(60)
                    .alwaysWrite()
                    .exclude() // use .time(time) after recipe
            )
        )
    }
}