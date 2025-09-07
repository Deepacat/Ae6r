ServerEvents.recipes(e => {
    e.shaped('mbd2:ember_receptor_hatch', [
        'AB',
        'CA'
    ], {
        A: 'embers:archaic_circuit',
        B: 'embers:copper_cell',
        C: 'embers:archaic_edge'
    }).id('kubejs:mbd2/multipart_shaped/ember_receptor_hatch')

    e.shaped('mbd2:mechanical_dual_access_hatch', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'embers:archaic_bricks',
        B: 'embers:item_extractor',
        C: 'embers:ember_crystal',
        D: 'embers:fluid_vessel',
        E: 'minecraft:hoppere'
    }).id('kubejs:mbd2/multipart_shaped/mechanical_dual_access_hatch')
    
})