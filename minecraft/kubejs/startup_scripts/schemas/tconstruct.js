// priority: 100
StartupEvents.recipeSchemaRegistry(e => {
    if (Platform.isLoaded('tconstruct')) {
        e.register('tconstruct:casting_table',
            new $RecipeSchema(
                outputItem.key('result'),
                inputFluidOrFluidTag('tag').asArrayOrSelf().key('fluid'),
                intNumber.key('cooling_time').optional(60).alwaysWrite(),
                bool.key('cast_consumed').optional(true).alwaysWrite(),
                inputItem.key('cast').defaultOptional().exclude() // use .cast(inputItem) after recipe
            )
        )
        e.register('tconstruct:casting_basin',
            new $RecipeSchema(
                outputItem.key('result'),
                inputFluidOrFluidTag('tag').asArrayOrSelf().key('fluid'),
                intNumber.key('cooling_time').optional(60).alwaysWrite(),
                bool.key('cast_consumed').optional(true).alwaysWrite(),
                inputItem.key('cast').defaultOptional().exclude() // use .cast(inputItem) after recipe
            )
        )
        e.register('tconstruct:melting',
            new $RecipeSchema(
                inputFluidOrFluidTag('tag').key('result'), // output uses input component to support tags
                inputItem.key('ingredient'),
                intNumber.key('temperature').optional(500).alwaysWrite(),
                intNumber.key('time').optional(60).alwaysWrite()
            )
        )
        e.register('tconstruct:alloy',
            new $RecipeSchema(
                inputFluidOrFluidTag('tag').key('result'), // output uses input component to support tags
                inputFluidOrFluidTag('tag').asArray().key('inputs'),
                intNumber.key('temperature').optional(500).alwaysWrite()
            )
        )
    }
})