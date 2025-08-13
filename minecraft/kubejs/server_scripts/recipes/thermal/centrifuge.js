ServerEvents.recipes(e => {
    e.recipes.thermal.centrifuge(
        [Item.of('minecraft:bone_meal').withChance(0.15), Fluid.of('industrialforegoing:meat', 100)],
        'kubejs:ground_meat')
        .energy(2000)
        .id('kubejs:centrifuge/meat')
})