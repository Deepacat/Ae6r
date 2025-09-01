ServerEvents.recipes(e => {
    e.remove({ id: 'integratedtunnels:crafting/part_interface_energy' })
    e.shaped(Item.of('integratedtunnels:part_interface_energy', 2), [
        'ABA',
        'CDC'
    ], {
        A: 'integrateddynamics:menril_wood',
        B: 'powah:capacitor_blazing',
        C: 'integratedterminals:menril_glass',
        D: 'thermal:rf_coil'
    }).id('kubejs:integratedtunnels_crafting/part_interface_energy')

    e.remove({ id: 'integratedtunnels:crafting/part_interface_fluid' })
    e.shaped(Item.of('integratedtunnels:part_interface_fluid', 2), [
        'ABA',
        'CDC'
    ], {
        A: 'integrateddynamics:menril_wood',
        B: 'pneumaticcraft:large_tank',
        C: 'integratedterminals:menril_glass',
        D: 'pneumaticcraft:logistics_core'
    }).id('kubejs:integratedtunnels_crafting/part_interface_fluid')

    e.remove({ id: 'integratedtunnels:crafting/part_interface_item' })
    e.shaped(Item.of('integratedtunnels:part_interface_item', 2), [
        'ABA',
        'CDC'
    ], {
        A: 'integrateddynamics:menril_wood',
        B: 'ironchest:silver_chest',
        C: 'glassential:glass_ghostly',
        D: 'botania:corporea_funnel'
    }).id('kubejs:integratedtunnels_crafting/part_interface_item')
})
