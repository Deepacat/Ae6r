ServerEvents.recipes(event => {


    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: 'wstweaks:lava_blade',
            pattern: [' AB', 'ACA', 'DA '],
            key: {
                A: 'rftoolspower:blazing_rod',
                B: /*'betterendforge:'*/ 'kubejs:replaceme',
                C: '#forge:gems/nitro',
                D: /*'betterendforge:'*/ 'kubejs:replaceme'
            },
            id: 'wstweaks:lava_blade'
        },
        {
            output: 'wstweaks:blaze_blade',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'tconstruct:blazing_bone',
                B: 'wstweaks:lava_blade'
            },
            id: 'wstweaks:blaze_blade'
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })
})
