// priority: 0
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