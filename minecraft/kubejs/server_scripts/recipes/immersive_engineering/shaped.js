ServerEvents.recipes(e => {
    e.remove({ id: 'immersiveengineering:crafting/workbench' })
    e.shaped('immersiveengineering:workbench', [
        'A  ',
        'BCC',
        'E D'
    ], {
        A: '#forge:rods/steel',
        B: '#forge:plates/steel',
        C: '#forge:treated_wood_slab',
        D: 'immersiveengineering:treated_fence',
        E: 'immersiveengineering:craftingtable'
    }).id('kubejs:immersiveengineering_crafting/workbench')

    e.remove({ id: 'immersiveengineering:crafting/turntable' })
    e.shaped('immersiveengineering:turntable', [
        'ABA',
        'CDC'
    ], {
        A: '#forge:plates/iron',
        B: 'create:brass_casing',
        C: '#forge:dusts/redstone',
        D: 'immersiveengineering:coil_lv'
    }).id('kubejs:immersiveengineering_crafting/turntable')

    e.remove({ id: 'immersiveengineering:crafting/furnace_heater' })
    e.shaped('immersiveengineering:furnace_heater', [
        'ABA',
        'ACD',
        'ABA'
    ], {
        A: '#forge:sheetmetals/aluminum',
        B: 'immersiveengineering:coil_lv',
        C: 'powah:dielectric_casing',
        D: 'thermal:rf_coil'
    }).id('kubejs:immersiveengineering_crafting/furnace_heater')

    e.remove({ id: 'immersiveengineering:crafting/conveyor_basic' })
    e.shaped(Item.of('12x immersiveengineering:conveyor_basic'), [
        'ABA',
        'CDC'
    ], {
        A: 'create:shaft',
        B: 'create:belt_connector',
        C: '#forge:gears/iron_aluminum',
        D: 'thermal:redstone_servo'
    }).id('kubejs:immersiveengineering_crafting/conveyor_basic')

    e.remove({ id: 'immersiveengineering:crafting/circuit_table' })
    e.shaped('immersiveengineering:circuit_table', [
        ' AB',
        'CCC',
        'D E'
    ], {
        A: 'thermal:diving_fabric',
        B: 'immersiveengineering:screwdriver',
        C: '#forge:treated_wood_slab',
        D: 'immersiveengineering:craftingtable',
        E: Item.of('thermal:energy_cell')
    }).id('kubejs:immersiveengineering_crafting/circuit_table')

    e.remove({ id: 'immersiveengineering:crafting/rs_engineering' })
    e.shaped(Item.of('2x immersiveengineering:rs_engineering'), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'thermal:signalum_glass',
        B: { 0: 'rftoolscontrol:ram_chip', 1: 'kubejs:advanced_ram_chip' },
        C: 'immersiveengineering:wirecoil_redstone',
        D: '#forge:sheetmetals/aluminum'
    }).id('kubejs:immersiveengineering_crafting/rs_engineering')

    e.remove({ id: 'immersiveengineering:crafting/heavy_engineering' })
    e.shaped(Item.of('2x immersiveengineering:heavy_engineering'), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:gears/steel',
        B: 'immersiveengineering:component_steel',
        C: 'immersiveengineering:wirecoil_electrum',
        D: '#forge:sheetmetals/steel'
    }).id('kubejs:immersiveengineering_crafting/heavy_engineering')

    e.remove({ id: 'immersiveengineering:crafting/light_engineering' })
    e.shaped(Item.of('2x immersiveengineering:light_engineering'), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:gears/invar',
        B: 'immersiveengineering:component_iron',
        C: 'immersiveengineering:wirecoil_copper',
        D: '#forge:sheetmetals/aluminum'
    }).id('kubejs:immersiveengineering_crafting/light_engineering')

    e.remove({ id: 'immersiveengineering:crafting/capacitor_lv' })
    e.shaped('immersiveengineering:capacitor_lv', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:treated_wood',
        B: 'immersiveengineering:connector_lv',
        C: '#forge:plates/lead',
        D: Item.of('thermal:fluid_cell'),
        E: { type: 'immersiveengineering:fluid', tag: 'pneumaticcraft:etching_acid', amount: 1000 }
    }).id('kubejs:immersiveengineering_crafting/capacitor_lv')

    e.remove({ id: 'immersiveengineering:crafting/capacitor_mv' })
    e.shaped('immersiveengineering:capacitor_mv', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:treated_wood',
        B: 'immersiveengineering:connector_mv',
        C: 'immersiveengineering:capacitor_lv',
        D: '#forge:plates/lead',
        E: '#forge:storage_blocks/electrum'
    }).id('kubejs:immersiveengineering_crafting/capacitor_mv')

    e.remove({ id: 'immersiveengineering:crafting/capacitor_hv' })
    e.shaped('immersiveengineering:capacitor_hv', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:treated_wood',
        B: 'immersiveengineering:connector_hv',
        C: 'immersiveengineering:capacitor_mv',
        D: '#forge:plates/lead',
        E: '#forge:storage_blocks/steel'
    }).id('kubejs:immersiveengineering_crafting/capacitor_hv')

    e.remove({ id: 'immersiveengineering:crafting/windmill_blade' })
    e.shaped('immersiveengineering:windmill_blade', [
        'AA ',
        'BBA',
        'BB '
    ], {
        A: 'eidolon:polished_planks',
        B: 'create:sail_frame'
    }).id('kubejs:immersiveengineering_crafting/windmill_blade')

    e.remove({ id: 'immersiveengineering:crafting/windmill' })
    e.shaped('immersiveengineering:windmill', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'immersiveengineering:windmill_blade',
        B: 'create:mechanical_bearing'
    }).id('kubejs:immersiveengineering_crafting/windmill')

    e.remove({ id: 'immersiveengineering:crafting/watermill' })
    e.shaped('immersiveengineering:watermill', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'immersiveengineering:waterwheel_segment',
        B: 'create:mechanical_bearing'
    }).id('kubejs:immersiveengineering_crafting/watermill')

    e.remove({ id: 'immersiveengineering:crafting/waterwheel_segment' })
    e.shaped('immersiveengineering:waterwheel_segment', [
        ' A ',
        'ABA',
        'BAB'
    ], {
        A: '#forge:rods/brass',
        B: 'eidolon:polished_planks'
    }).id('kubejs:immersiveengineering_crafting/waterwheel_segment')

    e.remove({ id: 'immersiveengineering:crafting/dynamo' })
    e.shaped('immersiveengineering:dynamo', [
        ' A ',
        'BCD',
        ' A '
    ], {
        A: '#forge:gears/brass',
        B: 'immersiveengineering:coil_lv',
        C: 'thermal:machine_frame',
        D: '#forge:ingots/andesite_alloy'
    }).id('kubejs:immersiveengineering_crafting/dynamo')

    e.remove({ id: 'immersiveengineering:crafting/radiator' })
    e.shaped('immersiveengineering:radiator', [
        'BBB',
        'BAB',
        'BCB'
    ], {
        A: '#forge:sheetmetals/steel',
        B: 'create:fluid_pipe',
        C: { type: 'immersiveengineering:fluid', tag: 'minecraft:water', amount: 1000 }
    }).id('kubejs:immersiveengineering_crafting/radiator')

    e.remove({ id: 'immersiveengineering:crafting/generator' })
    e.shaped('immersiveengineering:generator', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: '#forge:sheetmetals/steel',
        B: 'immersiveengineering:coil_mv',
        C: 'immersiveengineering:dynamo'
    }).id('kubejs:immersiveengineering_crafting/generator')
})