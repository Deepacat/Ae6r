ServerEvents.recipes(e => {
    e.remove({ id: 'modularrouters:speed_upgrade' })
    e.shaped(Item.of('4x modularrouters:speed_upgrade'), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'modularrouters:blank_upgrade',
        B: 'pneumaticcraft:glycerol',
        C: { type: 'immersiveengineering:fluid', tag: 'forge:lubricant', amount: 1000 }
    }).id('kubejs:modularrouters_speed_upgrade')

    e.remove({ id: 'modularrouters:fluid_upgrade' })
    e.shaped(Item.of('3x modularrouters:fluid_upgrade'), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:glass/colorless',
        B: 'thermal:cured_rubber',
        C: 'modularrouters:blank_upgrade'
    }).id('kubejs:modularrouters_fluid_upgrade')
})
