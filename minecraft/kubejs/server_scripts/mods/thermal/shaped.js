ServerEvents.recipes(e => {
    e.remove({ id: 'thermal:machine_frame' })
    e.shaped('thermal:machine_frame', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/iron_tin',
        B: '#forge:glass_panes',
        C: '#forge:gears/iron_aluminum'
    })

    e.remove({ id: 'thermal:energy_cell_frame' })
    e.shaped('thermal:energy_cell_frame', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/lead',
        B: '#forge:glass_panes',
        C: '#forge:gears/electrum'
    })

    e.remove({ id: 'thermal:fluid_cell_frame' })
    e.shaped('thermal:fluid_cell_frame', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/copper',
        B: '#forge:glass_panes',
        C: '#forge:gears/bronze'
    })

    e.remove({ id: 'thermal:rf_coil' })
    e.shaped('thermal:rf_coil', [
        ' AC',
        'ABA',
        'CA '
    ], {
        A: '#forge:dusts/redstone',
        B: '#forge:rods/gold_copper',
        C: '#forge:nuggets/gold'
    })

    e.remove({ id: 'thermal:redstone_servo' })
    e.shaped('thermal:redstone_servo', [
        'A A',
        ' B ',
        'A A'
    ], {
        A: '#forge:dusts/redstone',
        B: ['#forge:rods/iron', '#forge:rods/tin']
    })

    e.shaped('thermal:redstone_servo', [
        'A A',
        ' B ',
        'A A'
    ], {
        A: '#forge:dusts/redstone',
        B: '#forge:rods/lead'
    })

    e.remove({ id: 'thermal:charge_bench' })
    e.shaped('thermal:charge_bench', [
        'AAA',
        'BCB',
        'DBD'
    ], {
        A: '#forge:ingots/electrum',
        B: 'thermal:rf_coil',
        C: 'thermal:energy_cell_frame',
        D: '#forge:ingots/lead'
    })

    e.remove({ id: 'thermal:augments/upgrade_augment_1' })
    e.shaped('thermal:upgrade_augment_1', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:gears/invar',
        B: Item.of('thermal:energy_cell'),
        C: '#xnet:connectors',
        D: 'pneumaticcraft:module_expansion_card',
        E: Item.of('thermal:fluid_cell')
    })

    e.remove({ id: 'thermal:augments/upgrade_augment_2' })
    e.shaped('thermal:upgrade_augment_2', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:gears/lumium',
        B: 'kubejs:cpu_core_eg_28222',
        C: 'kubejs:memory_advanced_filled',
        D: 'thermal:upgrade_augment_1',
        E: 'powah:capacitor_hardened'
    })

    e.remove({ id: 'thermal:augments/upgrade_augment_3' })
    e.shaped('thermal:upgrade_augment_3', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:gears/enderium',
        B: 'kubejs:cpu_core_as_81221',
        C: 'kubejs:memory_elite_filled',
        D: 'thermal:upgrade_augment_2',
        E: 'powah:capacitor_niotic'
    })

    e.remove({ id: 'thermal:tinker_bench' })
    e.shaped('thermal:tinker_bench', [
        'AE ',
        'DDD',
        'FGF'
    ], {
        A: Item.of('immersiveengineering:maintenance_kit', '{Damage:0}').weakNBT(),
        D: '#forge:plates/lead',
        E: '#create:toolboxes',
        F: 'thermal:rf_coil',
        G: 'thermal:machine_frame'
    })

    e.remove({ id: 'thermal:device_collector' })
    e.shaped('thermal:device_collector', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:sheetmetals/lead',
        B: 'minecraft:lodestone',
        C: '#thermal:glass/hardened',
        D: 'pneumaticcraft:omnidirectional_hopper',
        E: 'thermal:redstone_servo'
    })

    e.remove({ id: 'thermal:device_tree_extractor' })
    e.shaped('thermal:device_tree_extractor', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'create:andesite_casing',
        B: 'supplementaries:faucet',
        C: 'create:fluid_pipe',
        D: 'create:fluid_tank',
        E: 'create:tree_fertilizer'
    })

    e.remove({ id: 'thermal:device_rock_gen' })
    e.shaped('thermal:device_rock_gen', [
        'ABA',
        'CDC',
        'ECE'
    ], {
        A: 'immersiveengineering:toolupgrade_drill_lube',
        B: 'immersiveengineering:rockcutter',
        C: 'minecraft:observer',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'powah:thermoelectric_plate'
    })

    e.remove({ id: 'thermal:device_water_gen' })
    e.shaped('thermal:device_water_gen', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'create:brass_casing',
        B: 'bloodmagic:reagentwater',
        C: 'create:fluid_pipe',
        D: 'create:fluid_tank',
        E: 'create:mechanical_pump'
    })

    e.remove({ id: 'thermal:device_nullifier' })
    e.shaped('thermal:device_nullifier', [
        ' A ',
        'ABA',
        'ACA'
    ], {
        A: 'engineersdecor:halfslab_sheetmetal_aluminum',
        B: 'quark:cactus_block',
        C: 'create:item_drain'
    })

    e.remove({ id: 'thermal:machine_sawmill' })
    e.shaped('thermal:machine_sawmill', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:shaft',
        B: 'thermal:saw_blade',
        C: 'create:metal_bracket',
        D: 'thermal:machine_frame',
        E: '#forge:gears/invar',
        F: 'thermal:rf_coil'
    })

    e.remove({ id: 'thermal:machine_smelter' })
    e.shaped('thermal:machine_smelter', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:plates/iron_aluminum',
        B: 'minecraft:blast_furnace',
        C: 'immersiveengineering:coil_lv',
        D: 'thermal:machine_frame',
        E: '#forge:gears/invar',
        F: 'thermal:rf_coil'
    })

    e.remove({ id: 'thermal:machine_pulverizer' })
    e.shaped('thermal:machine_pulverizer', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:ingots/andesite_alloy',
        B: 'minecraft:hopper',
        C: '#sophisticatedbackpacks:upgrades/filter',
        D: 'thermal:machine_frame',
        E: '#forge:gears/iron',
        F: 'thermal:rf_coil'
    })

    e.remove({ id: 'thermal:machine_crucible' })
    e.shaped('thermal:machine_crucible', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'tconstruct:seared_bricks',
        B: 'create:basin',
        C: 'immersiveengineering:coil_lv',
        D: 'thermal:fluid_cell_frame',
        E: '#forge:gears/uranium',
        F: 'thermal:rf_coil'
    })

    e.remove({ id: 'thermal:machine_chiller' })
    e.shaped('thermal:machine_chiller', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'cookingforblockheads:ice_unit',
        B: 'engineersdecor:small_freezer',
        C: 'create:propeller',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'mekanismgenerators:saturating_condenser',
        F: '#forge:circuits/basic'
    })

    e.remove({ id: 'thermal:machine_centrifuge' })
    e.shaped('thermal:machine_centrifuge', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: 'immersiveengineering:alu_wallmount',
        B: '#forge:fences/aluminum',
        C: Item.of('thermal:fluid_cell'),
        D: 'immersiveengineering:turntable',
        E: '#forge:storage_blocks/lead',
        F: '#forge:gears/constantan',
        G: 'thermal:rf_coil'
    })

    e.remove({ id: 'thermal:machine_refinery' })
    e.shaped('thermal:machine_refinery', [
        'ABC',
        'CBC',
        'DEF'
    ], {
        A: 'immersivepetroleum:flarestack',
        B: 'create:fluid_pipe',
        C: Item.of('thermal:fluid_cell'),
        D: 'create:blaze_burner',
        E: 'thermal:rf_coil',
        F: '#immersiveengineering:scaffoldings/steel'
    })

    e.remove({ id: 'thermal:machine_press' })
    e.shaped('thermal:machine_press', [
        'ABC',
        'ADC',
        'EFC'
    ], {
        A: '#forge:ingots/bronze',
        B: 'create:mechanical_press',
        C: '#forge:gears/constantan',
        D: 'thermal:machine_frame',
        E: 'thermal:rf_coil',
        F: '#forge:storage_blocks/steel'
    })

    e.remove({ id: 'thermal:machine_insolator' })
    e.shaped('thermal:machine_insolator', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: 'architects_palette:abyssaline_lamp',
        B: 'mythicbotany:midgard_rune',
        C: '#botanypots:basic_botany_pots',
        D: '#forge:gears/lumium',
        E: '#industrialforegoing:machine_frame/supreme'
    })

    e.remove({ id: 'thermal:machine_crafter' })
    e.shaped('thermal:machine_crafter', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:gears/brass',
        B: 'rftoolscontrol:craftingstation',
        C: 'thermal:redstone_servo',
        D: 'thermal:machine_frame',
        E: 'thermal:rf_coil'
    })

    e.remove({ id: 'thermal:dynamo_stirling' })
    e.shaped('thermal:dynamo_stirling', [
        ' A ',
        'BCD',
        'EFE'
    ], {
        A: 'thermal:rf_coil',
        B: 'minecraft:glass_bottle',
        C: '#forge:rods/copper',
        D: '#forge:gears/copper',
        E: 'minecraft:smooth_stone',
        F: 'minecraft:piston'
    })

    e.remove({ id: 'thermal:dynamo_compression' })
    e.shaped('thermal:dynamo_compression', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'thermal:rf_coil',
        B: 'pneumaticcraft:pressure_tube',
        C: 'pneumaticcraft:pneumatic_cylinder',
        D: '#forge:gears/compressed_iron',
        E: Item.of('thermal:fluid_cell')
    })

    e.remove({ id: 'thermal:dynamo_magmatic' })
    e.shaped('thermal:dynamo_magmatic', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'thermal:rf_coil',
        B: 'pneumaticcraft:reinforced_brick_tile',
        C: 'powah:thermoelectric_plate',
        D: '#forge:gears/compressed_iron',
        E: Item.of('thermal:fluid_cell')
    })

    e.remove({ id: 'thermal:dynamo_numismatic' })
    e.shaped('thermal:dynamo_numismatic', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'thermal:rf_coil',
        B: /* 'ars_nouveau:' */ 'kubejs:replaceme',
        C: 'minecraft:brewing_stand',
        D: /*'atum:'*/ 'kubejs:replaceme',
        E: 'farmersdelight:cooking_pot'
    })

    e.remove({ id: 'thermal:dynamo_lapidary' })
    e.shaped('thermal:dynamo_lapidary', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'thermal:rf_coil',
        B: /*'astralsorcery:'*/ 'kubejs:replaceme',
        C: 'ars_nouveau:enchanting_apparatus',
        D: '#forge:gears/cobalt',
        E: 'ars_nouveau:arcane_core'
    })

    e.remove({ id: 'thermal:machine_furnace' })
    e.shaped('thermal:machine_furnace', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'minecraft:blast_furnace',
        B: 'immersiveengineering:wirecoil_redstone',
        C: 'thermal:machine_frame',
        D: '#forge:gears/invar',
        E: 'thermal:rf_coil'
    })

    e.remove({ id: 'thermal:dynamo_disenchantment' })
    e.shaped('thermal:dynamo_disenchantment', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'thermal:rf_coil',
        B: 'ars_nouveau:greater_experience_gem',
        C: 'ars_nouveau:enchanting_apparatus',
        D: '#forge:gears/cobalt',
        E: 'botania:rune_mana'
    })

    e.remove({ id: 'thermal:dynamo_gourmand' })
    e.shaped('thermal:dynamo_gourmand', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'thermal:rf_coil',
        B: '#forge:plates/cobalt',
        C: 'powah:thermoelectric_plate',
        D: '#forge:gears/uranium',
        E: 'engineersdecor:small_waste_incinerator'
    })
})