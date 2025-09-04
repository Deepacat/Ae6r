ServerEvents.recipes(e => {
    // ServerEvents.recipes(event => {

    //     const id_prefix = 'enigmatica:expert/thermal/sawmill/'
    //     const recipes = [
    //         {
    //             input: 'occultism:dimensional_matrix',
    //             outputs: [
    //                 Item.of('12x kubejs:dimensional_storage_crystal'),
    //                 Item.of('3x kubejs:dimensional_storage_crystal').withChance(0.25)
    //             ],
    //             id: `${id_prefix}dimensional_storage_crystal`
    //         },
    e.recipes.thermal.sawmill(
        [Item.of('kubejs:dimensional_storage_crystal', 12), Item.of('kubejs:dimensional_storage_crystal').withChance(0.25)],
        'occultism:dimensional_matrix'
    ).id('kubejs:thermal/sawmill/dimensional_storage_crystal')
    //         {
    //             input: 'occultism:otherstone',
    //             outputs: [Item.of('darkutils:blank_plate', 8), Item.of('darkutils:blank_plate').withChance(0.5)],
    //             id: `${id_prefix}blank_plate`
    //         }
    //     ]
    e.recipes.thermal.sawmill(
        [Item.of('darkutils:blank_plate', 8), Item.of('darkutils:blank_plate').withChance(0.5)],
        'occultism:otherstone'
    ).id('kubejs:thermal/sawmill/blank_plate')

    //     recipes.forEach((recipe) => {
    //         event.recipes.thermal.sawmill(recipe.outputs, recipe.input).id(recipe.id)
    //     })
    // })
})