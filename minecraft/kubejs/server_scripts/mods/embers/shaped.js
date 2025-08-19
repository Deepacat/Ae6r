ServerEvents.recipes(e => {
    e.remove({ id: 'embers:item_extractor' })
    e.shaped('4x embers:item_extractor', [
        ' B ',
        'CAC',
        ' D '
    ], {
        A: 'create:precision_mechanism',
        B: 'embers:item_pipe',
        C: 'embers:caminite_plate',
        D: '#forge:storage_blocks/redstone'
    }).id('kubejs:shaped/embers_item_extractor')

    e.remove({ id: 'embers:item_pipe' })
    e.shaped('8x embers:item_pipe', [
        ' A ',
        'CBC'
    ], {
        A: '#forge:plates/brass',
        B: '#forge:plates/lead',
        C: 'embers:caminite_plate'
    }).id('kubejs:shaped/embers_item_pipe')

    e.remove({ id: 'embers:item_dropper' })
    e.shaped('embers:item_dropper', [
        ' A ',
        'BCB'
    ], {
        A: 'embers:item_pipe',
        B: '#forge:plates/lead',
        C: 'minecraft:dropper'
    }).id('kubejs:shaped/embers_item_dropper')

    e.remove({ id: 'embers:item_vacuum' })
    e.shaped('embers:item_vacuum', [
        'DBB',
        'CA ',
        'DBB'

    ], {
        A: 'minecraft:lodestone',
        B: '#forge:plates/lead',
        C: '#forge:storage_blocks/redstone',
        D: '#forge:ingots/invar'
    }).id('kubejs:shaped/embers_item_vacuum')

    e.remove({ id: 'embers:item_transfer' })
    e.shaped('2x embers:item_transfer', [
        'BDB',
        'CAC',
        'C C'
    ], {
        A: 'minecraft:hopper',
        B: '#forge:plates/lead',
        C: '#forge:ingots/invar',
        D: 'embers:item_pipe'
    }).id('kubejs:shaped/embers_item_transfer')

    e.remove({ id: 'embers:fluid_extractor' })
    e.shaped('4x embers:fluid_extractor', [
        ' B ',
        'CDC',
        ' A '
    ], {
        A: 'minecraft:conduit',
        B: 'create:mechanical_pump',
        C: 'embers:caminite_plate',
        D: '#forge:plates/lead'
    }).id('kubejs:shaped/embers_fluid_extractor')

    e.remove({ id: 'embers:fluid_pipe' })
    e.shaped('4x embers:fluid_pipe', [
        ' A ',
        'CBC'
    ], {
        A: '#forge:plates/copper',
        B: '#forge:plates/lead',
        C: 'embers:caminite_plate'
    }).id('kubejs:shaped/embers_fluid_pipe')

    e.remove({ id: 'embers:fluid_vessel' })
    e.shaped('embers:fluid_vessel', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'tconstruct:seared_fuel_tank',
        B: 'create:pulp',
        C: 'embers:caminite_plate',
    }).id('kubejs:shaped/embers_fluid_vessel')

    e.remove({ id: 'embers:fluid_transfer' })
    e.shaped('3x embers:fluid_transfer', [
        'BDB',
        'CAC',
        'C C'
    ], {
        A: 'create:smart_fluid_pipe',
        B: 'embers:caminite_plate',
        C: '#forge:ingots/lead',
        D: 'embers:fluid_pipe'
    }).id('kubejs:shaped/embers_fluid_transfer')
})