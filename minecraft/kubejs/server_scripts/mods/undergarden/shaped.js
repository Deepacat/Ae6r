ServerEvents.recipes(e => {
    e.remove({ id: 'undergarden:forgotten_pickaxe' })
    e.shaped('undergarden:forgotten_pickaxe', [
        'AAA',
        ' B ',
        ' B '
    ], {
        A: '#forge:ingots/forgotten_metal',
        B: 'kubejs:replaceme'
    }).id('kubejs:kubejs_forgotten_pickaxe')

    e.remove({ id: 'undergarden:forgotten_sword' })
    e.shaped('undergarden:forgotten_sword', [
        ' A ',
        ' A ',
        ' B '
    ], {
        A: '#forge:ingots/forgotten_metal',
        B: 'kubejs:replaceme'
    }).id('kubejs:kubejs_forgotten_sword')

    e.remove({ id: 'undergarden:forgotten_axe' })
    e.shaped('undergarden:forgotten_axe', [
        'AA ',
        'AB ',
        ' B '
    ], {
        A: '#forge:ingots/forgotten_metal',
        B: 'kubejs:replaceme'
    }).id('kubejs:kubejs_forgotten_axe')

    e.remove({ id: 'undergarden:forgotten_hoe' })
    e.shaped('undergarden:forgotten_hoe', [
        'AA ',
        ' B ',
        ' B '
    ], {
        A: '#forge:ingots/forgotten_metal',
        B: 'kubejs:replaceme'
    }).id('kubejs:kubejs_forgotten_hoe')

    e.remove({ id: 'undergarden:forgotten_shovel' })
    e.shaped('undergarden:forgotten_shovel', [
        ' A ',
        ' B ',
        ' B '
    ], {
        A: '#forge:ingots/forgotten_metal',
        B: 'kubejs:replaceme'
    }).id('kubejs:kubejs_forgotten_shovel')
})