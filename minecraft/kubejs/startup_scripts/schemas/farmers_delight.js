StartupEvents.recipeSchemaRegistry(e => {
    if (Platform.isLoaded('farmersdelight')) {
        let itemOrAction = inputItem.or(
            new $RecipeComponentBuilder(2)
                .add(
                    anyString
                        .key('type')
                        .alwaysWrite()
                        .optional('farmersdelight:tool_action')
                )
                .add(anyString.key('action'))
        )

        e.register('farmersdelight:cooking',
            new $RecipeSchema(
                inputItem.asArray().key('ingredients'),
                outputItem.key('result'),
                intNumber.key('cookingtime'),
                floatNumber.key('experience').optional(1),
                inputItem.key('container').defaultOptional(),
                anyString.key('recipe_book_tab').optional('meals')
            )
        )
        e.register('farmersdelight:cutting',
            new $RecipeSchema(
                outputItem.asArray().key('result'),
                inputItem.asArray().key('ingredients'),
                itemOrAction.key('tool'),
                anyString.key('sound').defaultOptional()
            )
        )
    }
})