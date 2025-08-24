function cuttingRecipe(ingredient, tool, result) {
    return {
        type: 'farmersdelight:cutting',
        ingredients: [ingredient],
        tool: tool,
        result: result
    }
}

ServerEvents.recipes(event => {


    const id_prefix = 'enigmatica:expert/farmersdelight/cutting/'

    

    recipes.forEach((recipe) => {
        fallback_id(event.custom(recipe), id_prefix)
    })

    buildWoodVariants.forEach((variant) => {
        let woodRecipes = [
            {
                input: variant.logBlockStripped
            },
            {
                input: variant.woodBlockStripped
            }
        ]

        woodRecipes.forEach((recipe) => {
            let tool = {
                type: 'farmersdelight:tool',
                tool: 'axe'
            }
            let ingredients = Ingredient.of(recipe.input)
            let result = [Item.of('minecraft:stick', 8)]
            fallback_id(
                event.custom({
                    type: 'farmersdelight:cutting',
                    ingredients: [ingredients],
                    tool: tool,
                    result: result
                }),
                id_prefix
            )
        })
    })
})
