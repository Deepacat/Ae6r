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
            output: 'travelanchors:travel_staff',
            pattern: ['  C', ' B ', 'A  '],
            key: {
                A: '#forge:rods/lead',
                B: 'entangled:item',
                C: /*'atum:'*/ 'kubejs:replaceme'
            },
            id: 'travelanchors:travel_staff'
        }
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
    })
})
