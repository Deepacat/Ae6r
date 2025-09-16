// priority: 0
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