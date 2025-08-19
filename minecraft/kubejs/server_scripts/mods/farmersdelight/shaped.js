ServerEvents.recipes(e => {
    e.remove({ id: 'farmersdelight:canvas' })
    e.shaped(Item.of('2x farmersdelight:canvas'), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'farmersdelight:straw',
        B: 'kubejs:replaceme'
    }).id('kubejs:farmersdelight_canvas')

    e.remove({ id: 'farmersdelight:basket' })
    e.shaped('farmersdelight:basket', [
        'A A',
        'B B',
        'ABA'
    ], {
        A: 'kubejs:scented_stick',
        B: 'farmersdelight:canvas'
    }).id('kubejs:farmersdelight_basket')

    e.remove({ id: 'farmersdelight:cooking_pot' })
    e.shaped('farmersdelight:cooking_pot', [
        'ABA',
        'CDC',
        'CEC'
    ], {
        A: 'minecraft:brick',
        B: 'kubejs:scented_stick',
        C: '#forge:ingots/iron',
        D: 'minecraft:conduit',
        E: '#forge:plates/copper'
    }).id('kubejs:farmersdelight_cooking_pot')
})
