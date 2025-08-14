ServerEvents.recipes(e => {
    e.recipes.thermal.press(Item.of('2x kubejs:hot_compressed_iron_ingot'),
        [Item.of('4x kubejs:superheated_steel_ingot'), 'immersiveengineering:mold_packing_4'])
        .energy(1000)
        .id(`kubejs:thermal/press/hot_compressed_iron_ingot`)
    e.recipes.thermal.press(Item.of('2x kubejs:hot_compressed_iron_block'),
        [Item.of('4x kubejs:superheated_steel_block'), 'immersiveengineering:mold_packing_4'])
        .energy(9000)
        .id(`kubejs:thermal/press/hot_compressed_iron_block`)
    e.recipes.thermal.press('powah:thermoelectric_plate',
        ['immersiveengineering:thermoelectric_generator'])
        .energy(1000)
        .id(`kubejs:thermal/press/thermoelectric_plate`)
    e.recipes.thermal.press('thermal:saw_blade',
        [Item.of('tconstruct:large_plate', '{Material:"tconstruct:invar"}'),
            'immersiveengineering:mold_gear'])
        .energy(9000)
        .id(`kubejs:thermal/press/saw_blade`)
})