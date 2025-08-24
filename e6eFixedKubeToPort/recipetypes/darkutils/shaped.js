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
            output: Item.of('6x darkutils:vector_plate'),
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'darkutils:blank_plate',
                B: 'bloodmagic:reagentair',
                C: '#forge:nuggets/queens_slime'
            },
            id: 'darkutils:crafting/vector_plate'
        },
        {
            output: Item.of('6x darkutils:vector_plate_fast'),
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'darkutils:vector_plate',
                B: '#botania:runes/air',
                C: '#forge:nuggets/queens_slime'
            },
            id: 'darkutils:crafting/vector_plate_fast'
        },
        {
            output: Item.of('6x darkutils:vector_plate_extreme'),
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'darkutils:vector_plate_fast',
                B: /*'astralsorcery:'*/ 'kubejs:replaceme',
                C: '#forge:nuggets/queens_slime'
            },
            id: 'darkutils:crafting/vector_plate_extreme'
        }
    ]

    recipes.forEach((recipe) => {
        // console.log(`Adding recipe: ${recipe.id}, output: ${recipe.output}, index: ${recipes.indexOf(recipe)}`)
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })
})
