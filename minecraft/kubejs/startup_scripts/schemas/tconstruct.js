// priority: 0
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