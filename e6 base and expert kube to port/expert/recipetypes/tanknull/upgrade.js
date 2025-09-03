ServerEvents.recipes(event => {

    const recipes = [
        {
            pattern: ['ABA', 'C1C', 'ABA'],
            key: {
                A: { item: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
                B: { item: 'kubejs:replaceme' },
                C: { item: 'farmersdelight:basket' },
                1: { item: 'tanknull:tank_1' }
            },
            result: { item: 'tanknull:tank_2' },
            id: 'tanknull:2'
        },
        {
            pattern: ['ABA', 'C1C', 'ABA'],
            key: {
                A: { item: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
                B: { item: 'ars_nouveau:marvelous_clay' },
                C: { tag: 'forge:storage_blocks/dimensional' },
                1: { item: 'tanknull:tank_2' }
            },
            result: { item: 'tanknull:tank_3' },
            id: 'tanknull:3'
        },
        {
            pattern: ['ABA', 'C1C', 'ABA'],
            key: {
                A: { item: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
                B: { item: 'ars_nouveau:mythical_clay' },
                C: { item: 'occultism:storage_stabilizer_tier1' },
                1: { item: 'tanknull:tank_3' }
            },
            result: { item: 'tanknull:tank_4' },
            id: 'tanknull:4'
        },
        {
            pattern: ['ABA', 'C1C', 'ABA'],
            key: {
                A: { item: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
                B: { tag: 'forge:ingots/iesnium' },
                C: { item: 'occultism:storage_stabilizer_tier2' },
                1: { item: 'tanknull:tank_4' }
            },
            result: { item: 'tanknull:tank_5' },
            id: 'tanknull:5'
        },
        {
            pattern: ['ABA', 'C1C', 'ABA'],
            key: {
                A: { item: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
                B: { tag: 'forge:alloys/ultimate' },
                C: { item: 'occultism:storage_stabilizer_tier3' },
                1: { item: 'tanknull:tank_5' }
            },
            result: { item: 'tanknull:tank_6' },
            id: 'tanknull:6'
        },
        {
            pattern: ['ABA', 'C1C', 'ADA'],
            key: {
                A: { item: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
                B: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
                C: { item: 'occultism:storage_stabilizer_tier4' },
                D: { item: 'mekanism:module_gravitational_modulating_unit' },
                1: { item: 'tanknull:tank_6' }
            },
            result: { item: 'tanknull:tank_7' },
            id: 'tanknull:7'
        }
    ]

    recipes.forEach((recipe) => {
        recipe.type = 'tanknull:upgrade'
        event.shaped(recipe).id(recipe.id)
    })
})
