ServerEvents.recipes(e => {
    e.recipes.thermal.sawmill(
        [Item.of('kubejs:dimensional_storage_crystal', 12), Item.of('kubejs:dimensional_storage_crystal').withChance(0.25)],
        'occultism:dimensional_matrix'
    ).id('kubejs:thermal/sawmill/dimensional_storage_crystal')

    e.recipes.thermal.sawmill(
        [Item.of('darkutils:blank_plate', 8), Item.of('darkutils:blank_plate').withChance(0.5)],
        'occultism:otherstone'
    ).id('kubejs:thermal/sawmill/blank_plate')
})