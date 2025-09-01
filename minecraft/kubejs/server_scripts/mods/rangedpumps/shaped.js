ServerEvents.recipes(e => {
    e.remove({ id: 'rangedpumps:pump' })
    e.shaped('rangedpumps:pump', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'tconstruct:nahuatl',
        B: 'thermal:obsidian_glass',
        C: 'mekanism:electric_pump'
    }).id('kubejs:rangedpumps_pump')
})
