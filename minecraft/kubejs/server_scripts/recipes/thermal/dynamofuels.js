ServerEvents.recipes(e => {
    e.recipes.thermal.compression_fuel(Fluid.of('industrialforegoing:biofuel', 1000))
        .energy(1000000 * 10)
        .id('kubejs:thermal/compression_fuel/industrialforegoing/biofuel')
})