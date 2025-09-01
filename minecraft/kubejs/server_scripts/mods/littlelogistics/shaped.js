ServerEvents.recipes(e => {
    e.remove({ id: 'littlelogistics:barge' })
    e.shaped('littlelogistics:barge', [
        'ABA',
        'CCC'
    ], {
        A: '#forge:plates/aluminum',
        B: '#forge:chests',
        C: 'immersiveengineering:sheetmetal_colored_red'
    }).id('kubejs:littlelogistics_barge')

    e.remove({ id: 'littlelogistics:fishing_barge' })
    e.shaped('littlelogistics:fishing_barge', [
        'D D',
        'ABA',
        'CCC'
    ], {
        A: '#forge:plates/aluminum',
        B: Item.of('aquaculture:tackle_box'),
        C: 'immersiveengineering:sheetmetal_colored_red',
        D: 'farmersdelight:safety_net'
    }).id('kubejs:littlelogistics_fishing_barge')

    e.remove({ id: 'littlelogistics:fluid_barge' })
    e.shaped('littlelogistics:fluid_barge', [
        'ABA',
        'CCC'
    ], {
        A: '#forge:plates/aluminum',
        B: 'create:fluid_tank',
        C: 'immersiveengineering:sheetmetal_colored_red'
    }).id('kubejs:littlelogistics_fluid_barge')

    e.remove({ id: 'littlelogistics:seater_barge' })
    e.shaped('littlelogistics:seater_barge', [
        'ABA',
        'CCC'
    ], {
        A: '#forge:plates/aluminum',
        B: '#create:seats',
        C: 'immersiveengineering:sheetmetal_colored_red'
    }).id('kubejs:littlelogistics_seater_barge')

    e.remove({ id: 'littlelogistics:tug' })
    e.shaped('littlelogistics:tug', [
        'ABA',
        'CCC'
    ], {
        A: '#forge:plates/aluminum',
        B: 'thermal:dynamo_stirling',
        C: 'immersiveengineering:sheetmetal_colored_red'
    }).id('kubejs:littlelogistics_tug')

    e.remove({ id: 'littlelogistics:energy_tug' })
    e.shaped('littlelogistics:energy_tug', [
        'ABA',
        'CCC'
    ], {
        A: '#forge:plates/aluminum',
        B: Item.of('thermal:energy_cell'),
        C: 'immersiveengineering:sheetmetal_colored_red'
    }).id('kubejs:littlelogistics_energy_tug')

    e.remove({ id: 'littlelogistics:vessel_charger' })
    e.shaped('littlelogistics:vessel_charger', [
        ' C ',
        'ABA',
        'CCC'
    ], {
        A: 'thermal:rf_coil',
        B: Item.of('thermal:energy_cell'),
        C: 'immersiveengineering:sheetmetal_colored_red'
    }).id('kubejs:littlelogistics_vessel_charger')

    e.remove({ id: 'littlelogistics:spring' })
    e.shaped('littlelogistics:spring', [
        '  A',
        ' B ',
        'A  '
    ], {
        A: '#forge:ingots/andesite_alloy',
        B: 'minecraft:chain'
    }).id('kubejs:littlelogistics_spring')

    e.remove({ id: 'littlelogistics:fluid_hopper' })
    e.shaped('littlelogistics:fluid_hopper', [
        'A',
        'B'
    ], {
        A: 'create:fluid_tank',
        B: 'minecraft:hopper'
    }).id('kubejs:littlelogistics_fluid_hopper')
})
