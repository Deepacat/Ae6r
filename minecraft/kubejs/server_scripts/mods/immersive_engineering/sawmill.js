ServerEvents.recipes(e => {
    // const id_prefix = 'enigmatica:expert/immersiveengineering/cutting/'
    // const recipes = [
    //     {
    //         input: 'occultism:otherstone',
    //         output: Item.of('darkutils:blank_plate', 8),
    //         extraOutput: Item.of('darkutils:blank_plate').withChance(0.5),
    //         id: `${id_prefix}blank_plate`
    //     }
    // ]
    e.recipes.immersiveengineering.sawmill('8x darkutils:blank_plate',
        'occultism:otherstone',
        1600,
        [{ stripping: false, output: Item.of('darkutils:blank_plate').withChance(0.5) }]
    )
})