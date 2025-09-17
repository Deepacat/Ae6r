ServerEvents.recipes(e => {
    e.remove({ id: 'thermal:machines/pyrolyzer/pyrolyzer_logs' })
    e.recipes.thermal.pyrolyzer(
        ['minecraft:charcoal', Fluid.of('immersiveengineering:creosote', 125)],
        '#minecraft:logs')
        .energy(6000)
        .id('kubejs:thermal/machines/pyrolyzer/pyrolyzer_logs')

    e.remove({ id: 'thermal:machines/pyrolyzer/pyrolyzer_bitumen' })
    e.recipes.thermal.pyrolyzer(
        ['thermal:coal_coke', 'thermal:tar', Fluid.of('thermal:heavy_oil', 50)],
        '#forge:gems/bitumen')
        .energy(12000)
        .id('kubejs:thermal/machines/pyrolyzer/pyrolyzer_bitumen')

    e.remove({ id: 'thermal:machines/pyrolyzer/pyrolyzer_coal' })
    e.recipes.thermal.pyrolyzer(
        ['thermal:coal_coke', 'thermal:tar', Fluid.of('immersiveengineering:creosote', 250)],
        'minecraft:coal')
        .energy(12000)
        .id('kubejs:thermal/machines/pyrolyzer/pyrolyzer_coal')
        
    e.remove({ id: 'thermal:machines/pyrolyzer/pyrolyzer_coal_block' })
    e.recipes.thermal.pyrolyzer(
        ['thermal:coal_coke_block', 'thermal:tar_block', Fluid.of('immersiveengineering:creosote', 250 * 9)],
        'minecraft:coal_block')
        .energy(12000 * 8)
        .id('kubejs:thermal/machines/pyrolyzer/pyrolyzer_coal_block')
})