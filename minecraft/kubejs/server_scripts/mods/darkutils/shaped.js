ServerEvents.recipes(e => {
    e.remove({ id: 'darkutils:crafting/vector_plate' })
    e.shaped(Item.of('6x darkutils:vector_plate'), [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'darkutils:blank_plate',
        B: 'bloodmagic:reagentair',
        C: '#forge:nuggets/queens_slime'
    }).id('kubejs:darkutils_crafting/vector_plate')

    e.remove({ id: 'darkutils:crafting/vector_plate_fast' })
    e.shaped(Item.of('6x darkutils:vector_plate_fast'), [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'darkutils:vector_plate',
        B: '#botania:runes/air',
        C: '#forge:nuggets/queens_slime'
    }).id('kubejs:darkutils_crafting/vector_plate_fast')

    e.remove({ id: 'darkutils:crafting/vector_plate_extreme' })
    e.shaped(Item.of('6x darkutils:vector_plate_extreme'), [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'darkutils:vector_plate_fast',
        B: 'kubejs:replaceme',
        C: '#forge:nuggets/queens_slime'
    }).id('kubejs:darkutils_crafting/vector_plate_extreme')
})
