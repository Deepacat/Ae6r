// priority: 1000
ServerEvents.tags('item', e => {
    // thermal blaze rod tags
    e.add('forge:rods/basalz', 'thermal:basalz_rod')
    e.add('forge:rods/blitz', 'thermal:blitz_rod')
    e.add('forge:rods/blaze', 'minecraft:blaze_rod')
    e.add('forge:rods/blizz', 'thermal:blizz_rod')

    const sharedDies = [
        {
            thermalName: 'gear',
            immersiveEngineeringName: 'gear'
        },
        {
            thermalName: 'unpacking',
            immersiveEngineeringName: 'unpacking'
        },
        {
            thermalName: 'packing_3x3',
            immersiveEngineeringName: 'packing_9'
        },
        {
            thermalName: 'packing_2x2',
            immersiveEngineeringName: 'packing_4'
        }
    ]

    const thermalDies = ['coin']

    const immersiveEngineeringDies = [
        'plate',
        'rod',
        'wire',
        'bullet_casing'
    ]

    for (const die of sharedDies) {
        e.add(`thermal:crafting/dies`, [`immersiveengineering:mold_${die.immersiveEngineeringName}`]);
        e.add(`thermal:crafting/dies/${die.thermalName}`, [
            `immersiveengineering:mold_${die.immersiveEngineeringName}`
        ])
    }

    for (const dieName of thermalDies) {
        e.add('thermal:crafting/dies', [`#thermal:crafting/dies/${dieName}`])
        e.add(`thermal:crafting/dies/${dieName}`, [`thermal:press_${dieName}_die`])
    }

    for (const dieName of immersiveEngineeringDies) {
        e.add('thermal:crafting/dies', [`#thermal:crafting/dies/${dieName}`])
        e.add(`thermal:crafting/dies/${dieName}`, [`immersiveengineering:mold_${dieName}`])
    }

    e.add('thermal:crafting/casts', ['#tconstruct:casts/multi_use'])
})

ServerEvents.tags('fluid', e => {
    e.remove('forge:latex', 'thermal:latex')
})