ServerEvents.recipes(e => {
    // Item pipe
    e.remove({ id: 'moderndynamics:item_pipe' })
    e.shaped(Item.of('moderndynamics:item_pipe', 8), [
        'CCC',
        'ABA',
        'CCC'
    ], {
        A: '#forge:plates/tin',
        B: '#forge:glass/colorless',
        C: 'create:shaft'
    }).id('kubejs:moderndynamics/shaped/item_pipe')
    // Fluid pipe
    e.remove({ id: 'moderndynamics:fluid_pipe' })
    e.shaped(Item.of('moderndynamics:fluid_pipe', 8), [
        'CCC',
        'ABA',
        'CCC'
    ], {
        A: 'thermal:cured_rubber',
        B: '#forge:glass/colorless',
        C: 'create:shaft'
    }).id('kubejs:moderndynamics/shaped/fluid_pipe')
    // Wrench
    e.remove({ id: 'moderndynamics:wrench' })
    e.shaped('moderndynamics:wrench', [
        ' A ',
        'AB ',
        '  B'
    ], {
        A: '#forge:nuggets/iron',
        B: 'moderndynamics:item_pipe'
    }).id('kubejs:moderndynamics/shaped/wrench')
    // Inhibitor
    e.remove({ id: 'moderndynamics:inhibitor' })
    e.shaped(Item.of('moderndynamics:inhibitor', 3), [
        ' A ',
        'BBB',
        'CCC'
    ], {
        A: '#forge:dusts/redstone',
        B: '#forge:plates/quartz',
        C: '#forge:nuggets/copper'
    }).id('kubejs:moderndynamics/shaped/inhibitor')
    // Extractor
    e.remove({ id: 'moderndynamics:extractor' })
    e.shaped('moderndynamics:extractor', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: '#forge:dusts/redstone',
        B: 'moderndynamics:inhibitor',
        C: 'thermal:redstone_servo'
    }).id('kubejs:moderndynamics/shaped/extractor')
    // Attractor
    e.remove({ id: 'moderndynamics:attractor' })
    e.shaped('moderndynamics:attractor', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: '#forge:dusts/amethyst',
        B: 'moderndynamics:inhibitor',
        C: 'thermal:redstone_servo'
    }).id('kubejs:moderndynamics/shaped/attractor')
    // Filter
    e.remove({ id: 'moderndynamics:filter' })
    e.shaped('moderndynamics:filter', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: '#forge:dusts/lapis',
        B: 'moderndynamics:inhibitor',
        C: 'thermal:redstone_servo'
    }).id('kubejs:moderndynamics/shaped/filter')
    // Machine extender
    e.remove({ id: 'moderndynamics:machine_extender' })
})