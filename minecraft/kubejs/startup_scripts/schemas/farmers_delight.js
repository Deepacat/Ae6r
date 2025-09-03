// priority: 0
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