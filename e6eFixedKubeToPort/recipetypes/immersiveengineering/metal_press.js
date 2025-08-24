ServerEvents.recipes(event => {

    const id_prefix = 'enigmatica:expert/immersiveengineering/metal_press/'
    const recipes = [
        {
            output: 'powah:thermoelectric_plate',
            input: 'immersiveengineering:thermoelectric_generator',
            mold: '#thermal:crafting/dies/plate',
            id: `${id_prefix}thermoelectric_plate`
        },
        {
            output: /*'refinedstorage:'*/ 'kubejs:replaceme',
            input: /*'refinedstorage:'*/ 'kubejs:replaceme',
            mold: '#thermal:crafting/dies/coin',
            id: `${id_prefix}basic_processor`
        },
        {
            output: /*'refinedstorage:'*/ 'kubejs:replaceme',
            input: /*'refinedstorage:'*/ 'kubejs:replaceme',
            mold: '#thermal:crafting/dies/coin',
            id: `${id_prefix}improved_processor`
        },
        {
            output: /*'refinedstorage:'*/ 'kubejs:replaceme',
            input: /*'refinedstorage:'*/ 'kubejs:replaceme',
            mold: '#thermal:crafting/dies/coin',
            id: `${id_prefix}advanced_processor`
        },
        {
            output: /*'extrastorage:'*/ 'kubejs:replaceme',
            input: /*'extrastorage:'*/ 'kubejs:replaceme',
            mold: '#thermal:crafting/dies/coin',
            id: `${id_prefix}neural_processor`
        }
    ]

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).id(recipe.id)
    })
})
