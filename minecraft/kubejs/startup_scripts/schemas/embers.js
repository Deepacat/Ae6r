// priority: 0

/**
 * @param {Internal.RecipeSchemaRegistryEventJS} e
 * @param {{ components?: Special.RecipeComponentMap; anyFloatNumber?: Internal.NumberComponent$FloatRange; anyString?: Internal.StringComponent; bool?: Internal.BooleanComponent; id: any; intNumber: any; filteredString?: (...args: any[]) => Internal.RecipeComponent<any>; nonBlankString?: Internal.StringComponent; floatNumber?: Internal.NumberComponent$FloatRange; inputItem: any; outputItem: any; inputFluid?: Internal.FluidComponents$1; outputFluid?: Internal.FluidComponents$2; outputFluidOrItem?: Internal.OrRecipeComponent<any, any>; fluidTag?: Internal.RecipeComponent<any>; blockTag?: Internal.TagKeyComponent<any>; inputStackedItem?: any; inputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.InputFluid, any>; outputFluidOrFluidTag?: (tagKeyStr: any) => Internal.OrRecipeComponent<Internal.OutputFluid, any>; inputFluidOrItem?: (tagKeyStr: any) => Internal.OrRecipeComponent<InputItem, any>; inputFluidOrStackedItem?: (tagKeyStr: any) => any; heatCondition?: Internal.RecipeComponent<any>; }} c
 */
function recipeSchema_embers(e, c) {
    if (Platform.isLoaded('embers')) {
        let embersBoreBlock = new $RecipeComponentBuilder(2)
            .add(c.blockTag.key('block_tag'))
            .add(c.intNumber.key('amount'))
            .inputRole()

        e.register('embers:alchemy',
            new $RecipeSchema(
                c.outputItem.key('output'),
                c.inputItem.asArray().key('inputs'),
                c.inputItem.asArray().key('aspects'),
                c.inputItem.key('tablet')
            )
        )
        e.register('embers:mixing',
            new $RecipeSchema(
                c.outputFluidOrFluidTag('tag').key('output'),
                c.inputFluidOrFluidTag('tag').asArray().key('inputs')
            )
        )
        e.register('embers:stamping',
            new $RecipeSchema(
                c.outputItem.key('output'),
                c.inputItem.key('stamp'),
                c.inputItem.key('input').defaultOptional().exclude(), // use .input(inputItem) after recipe
                c.inputFluidOrFluidTag('tag').key('fluid').defaultOptional().exclude() // use .fluid(inputFluid) after recipe
            )
        )
        e.register('embers:melting',
            new $RecipeSchema(
                c.outputFluidOrFluidTag('tag').key('output'),
                c.inputItem.key('input')
            )
        )
        e.register('embers:boring',
            new $RecipeSchema(
                c.outputItem.key('output'),
                c.intNumber.key('weight'),
                embersBoreBlock.key('required_block'),
                c.intNumber.key('max_height'),
                c.anyString.asArray().key('dimensions')
            )
        )
    }
}