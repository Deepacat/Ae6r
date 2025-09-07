ServerEvents.recipes(e => {
    e.shaped('mbd2:ember_oven', [
        'ABA',
        'ACA',
        'DDD'
    ], {
        A: '#forge:plates/dawnstone',
        B: 'ars_elemental:lesser_fire_focus',
        C: 'tconstruct:smeltery_controller',
        D: 'embers:archaic_edge'
    }).id('kubejs:mbd2/multiblock_shaped/ember_oven')
})