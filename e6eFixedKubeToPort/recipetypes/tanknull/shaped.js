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
            output: 'tanknull:tank_1',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: /*'resourcefulbees:'*/ 'kubejs:replaceme',
                B: 'mekanism:basic_fluid_tank',
                C: 'minecraft:sponge'
            },
            id: 'tanknull:1'
        },
        {
            output: 'tanknull:dock',
            pattern: ['AAA', 'BDC', 'AAA'],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_white',
                B: /* 'ppfluids:' */ 'kubejs:replaceme',
                C: /* 'ppfluids:' */ 'kubejs:replaceme',
                D: 'thermal:fluid_cell_frame'
            },
            id: 'tanknull:dock'
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })
})
