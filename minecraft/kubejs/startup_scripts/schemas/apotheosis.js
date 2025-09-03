StartupEvents.recipeSchemaRegistry(e => {
    if (Platform.isLoaded('apotheosis')) {
        let enchantingRequirements = new $RecipeComponentBuilder(3)
            .add(intNumber.key('eterna').optional(-1))
            .add(intNumber.key('quanta').optional(-1))
            .add(intNumber.key('arcana').optional(-1))
        e.register('apotheosis:enchanting',
            new $RecipeSchema(
                inputItem.key('input'),
                outputItem.key('result'),
                enchantingRequirements.key('requirements').defaultOptional(),
                enchantingRequirements.key('max_requirements').defaultOptional(),
                intNumber.key('display_level').optional(0)
            )
        )
        console.log('Recipe Schemas for apotheosis loaded.')
    }
})