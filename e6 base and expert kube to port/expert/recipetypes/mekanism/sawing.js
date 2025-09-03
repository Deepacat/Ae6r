ServerEvents.recipes(event => {

    const id_prefix = 'enigmatica:expert/mekanism/sawing/'
    const recipes = [
        {
            input: 'occultism:dimensional_matrix',
            output: Item.of('kubejs:dimensional_storage_crystal', 21),
            extraOutput: Item.of('3x kubejs:dimensional_storage_crystal').withChance(0.5),
            id: `${id_prefix}dimensional_storage_crystal`
        },
        {
            input: 'occultism:otherstone',
            output: Item.of('darkutils:blank_plate', 8),
            extraOutput: Item.of('darkutils:blank_plate').withChance(0.5),
            id: `${id_prefix}blank_plate`
        }
    ]
    recipes.forEach((recipe) => {
        // console.log(`Adding recipe: ${recipe.id}, output: ${recipe.output}, index: ${recipes.indexOf(recipe)}`)

        event.recipes.mekanism.sawing(recipe.output, recipe.input, recipe.extraOutput).id(recipe.id)
    })
})
