ServerEvents.recipes(e => {
    e.recipes.thermal.centrifuge(
        [Item.of('minecraft:bone_meal').withChance(0.15), Fluid.of('industrialforegoing:meat', 100)],
        'kubejs:ground_meat')
        .energy(2000)
        .id('kubejs:thermal/machines/centrifuge/meat')
        
    e.recipes.thermal.centrifuge(
        ['emendatus:silica_dust', Item.of('ae2:sky_dust').withChance(0.75)],
        'ae2:certus_quartz_dust')
        .energy(3000)
        .id('kubejs:thermal/machines/centrifuge/silicon_dioxide')
})