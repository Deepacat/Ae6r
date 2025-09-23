ServerEvents.recipes(e => {
    e.recipes.pneumaticcraft.refinery(
        [Fluid.of('mekanism:brine', 10), Fluid.of('mekanism:steam', 90)],
        Fluid.of('minecraft:water', 100),
        { min_temp: 373 }
    ).id('kubejs:pneumaticcraft/refinery/brine')

    e.recipes.pneumaticcraft.refinery(
        [Fluid.of('mekanism:lithium', 1), Fluid.of('mekanism:steam', 9)],
        Fluid.of('mekanism:brine', 10),
        { min_temp: 373 }
    ).id('kubejs:pneumaticcraft/refinery/lithium')
})