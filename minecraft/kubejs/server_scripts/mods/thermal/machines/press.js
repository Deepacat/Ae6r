ServerEvents.recipes(e => {
    e.recipes.thermal.press('immersiveengineering:mold_plate',
        [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:plates/steel')])
        .id('kubejs:thermal/machines/press/mold_plate')

    e.recipes.thermal.press('immersiveengineering:mold_wire',
        [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:wires/steel')])
        .id('kubejs:thermal/machines/press/mold_wire')

    e.recipes.thermal.press('immersiveengineering:mold_gear',
        [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:gears/steel')])
        .id('kubejs:thermal/machines/press/mold_gear')

    e.recipes.thermal.press('immersiveengineering:mold_rod',
        [Ingredient.of('#forge:plates/steel', 3), Ingredient.of('#forge:rods/steel')])
        .id('kubejs:thermal/machines/press/mold_rod')

    e.recipes.thermal.press('2x immersiveengineering:empty_casing',
        [Ingredient.of('#forge:ingots/copper'), Ingredient.of('#thermal:crafting/dies/bullet_casing')])
        .id('kubejs:thermal/machines/press/empty_casing')

    e.recipes.thermal.press('4x biomeswevegone:pink_sand',
        ['biomeswevegone:pink_sandstone', Ingredient.of('#thermal:crafting/dies/unpacking')])
        .id('kubejs:thermal/machines/press/pink_sand')

    e.recipes.thermal.press('4x biomeswevegone:purple_sand',
        ['biomeswevegone:purple_sandstone', Ingredient.of('#thermal:crafting/dies/unpacking')])
        .id('kubejs:thermal/machines/press/purple_sand')

    e.recipes.thermal.press('4x biomeswevegone:blue_sand',
        ['biomeswevegone:blue_sandstone', Ingredient.of('#thermal:crafting/dies/unpacking')])
        .id('kubejs:thermal/machines/press/blue_sand')

    e.recipes.thermal.press('4x biomeswevegone:white_sand',
        ['biomeswevegone:white_sandstone', Ingredient.of('#thermal:crafting/dies/unpacking')])
        .id('kubejs:thermal/machines/press/white_sand')

    e.recipes.thermal.press('4x biomeswevegone:black_sand',
        ['biomeswevegone:black_sandstone', Ingredient.of('#thermal:crafting/dies/unpacking')])
        .id('kubejs:thermal/machines/press/black_sand')

    e.recipes.thermal.press('4x atmospheric:arid_sand',
        ['atmospheric:arid_sandstone', Ingredient.of('#thermal:crafting/dies/unpacking')])
        .id('kubejs:thermal/machines/press/arid_sand')

    e.recipes.thermal.press('4x atmospheric:red_arid_sand',
        ['atmospheric:red_arid_sandstone', Ingredient.of('#thermal:crafting/dies/unpacking')])
        .id('kubejs:thermal/machines/press/red_arid_sand')

    e.recipes.thermal.press('minecraft:honeycomb_block',
        [Item.of('minecraft:honeycomb', 9), Ingredient.of('#thermal:crafting/dies/unpacking')])
        .id('kubejs:thermal/machines/press/honeycomb_block')

    e.recipes.thermal.press('9x minecraft:honeycomb',
        ['minecraft:honeycomb_block', Ingredient.of('#thermal:crafting/dies/unpacking')])
        .id('kubejs:thermal/machines/press/honeycomb')

    e.recipes.thermal.press('mekanism:hdpe_sheet',
        ['mekanism:hdpe_pellet'])
        .id('kubejs:thermal/machines/press/hdpe_sheet')

        // e.recipes.thermal.press(Fluid.of('industrialforegoing:latex', 50),
        //     ['thermal:latex'],
        // ).energy(400)
        // .id('kubejs:thermal/machines/press/latex_item_to_latex_fluid')

    e.remove({ id: 'thermal:machines/press/press_vine_to_latex' })
    e.recipes.thermal.press(Fluid.of('industrialforegoing:latex', 50),
        ['minecraft:vine'])
        .energy(400)
        .id('kubejs:thermal/machines/press/vine_to_latex')

    e.remove({ id: 'thermal:machines/press/press_dandelion_to_latex' })
    e.recipes.thermal.press(Fluid.of('industrialforegoing:latex', 50),
        ['minecraft:dandelion'])
        .energy(400)
        .id('kubejs:thermal/machines/press/dandelion_to_latex')

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
        [Item.of('tconstruct:large_plate', '{Material:"tconstruct:invar"}'), 'immersiveengineering:mold_gear'])
        .energy(1000)
        .id(`kubejs:thermal/press/saw_blade`)
})