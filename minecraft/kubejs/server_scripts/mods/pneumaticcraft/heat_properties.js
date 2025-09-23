ServerEvents.recipes(e => {
    e.recipes.pneumaticcraft.heat_properties()
        .fluid('immersiveengineering:concrete')
        .temperature(333)
        .thermalResistance(100)
        .transformCold({ block: 'immersiveengineering:concrete' })
        .heatCapacity(10000)
        .id(`kubejs:pneumaticcraft/heat_properties/concrete`)
})