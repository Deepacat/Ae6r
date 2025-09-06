ServerEvents.recipes(e => {
    e.remove({ id: 'pneumaticcraft:pneumatic_helmet' })
    e.shaped('kubejs:pneumatic_helmet_package', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'pneumaticcraft:air_canister',
        B: 'pneumaticcraft:printed_circuit_board',
        C: Item.of('pneumaticcraft:compressed_iron_helmet', '{Damage:0}').weakNBT(),
        D: 'mekanism:cardboard_box'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_pneumatic_helmet')

    e.remove({ id: 'pneumaticcraft:pneumatic_chestplate' })
    e.shaped('kubejs:pneumatic_chestplate_package', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'pneumaticcraft:air_canister',
        B: 'pneumaticcraft:printed_circuit_board',
        C: Item.of('pneumaticcraft:compressed_iron_chestplate', '{Damage:0}').weakNBT(),
        D: 'mekanism:cardboard_box'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_pneumatic_chestplate')

    e.remove({ id: 'pneumaticcraft:pneumatic_leggings' })
    e.shaped('kubejs:pneumatic_leggings_package', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'pneumaticcraft:air_canister',
        B: 'pneumaticcraft:printed_circuit_board',
        C: Item.of('pneumaticcraft:compressed_iron_leggings', '{Damage:0}').weakNBT(),
        D: 'mekanism:cardboard_box'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_pneumatic_leggings')

    e.remove({ id: 'pneumaticcraft:pneumatic_boots' })
    e.shaped('kubejs:pneumatic_boots_package', [
        'ABA',
        'ACA',
        ' D '
    ], {
        A: 'pneumaticcraft:air_canister',
        B: 'pneumaticcraft:printed_circuit_board',
        C: Item.of('pneumaticcraft:compressed_iron_boots', '{Damage:0}').weakNBT(),
        D: 'mekanism:cardboard_box'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_pneumatic_boots')

    e.remove({ id: 'pneumaticcraft:armor_upgrade' })
    e.shaped('pneumaticcraft:armor_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#pneumaticcraft:upgrade_components',
        B: '#mekanism:enriched/diamond',
        C: '#forge:ingots/compressed_iron'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_armor_upgrade')

    e.remove({ id: 'pneumaticcraft:flippers_upgrade' })
    e.shaped('pneumaticcraft:flippers_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#pneumaticcraft:upgrade_components',
        B: '#pneumaticcraft:plastic_sheets',
        C: Item.of('thermal:diving_boots', '{Damage:0}').weakNBT()
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_flippers_upgrade')

    e.remove({ id: 'pneumaticcraft:magnet_upgrade' })
    e.shaped('pneumaticcraft:magnet_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#pneumaticcraft:upgrade_components',
        B: '#pneumaticcraft:plastic_sheets',
        C: 'thermal:flux_magnet'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_magnet_upgrade')

    e.remove({ id: 'pneumaticcraft:liquid_compressor' })
    e.shaped(Item.of('pneumaticcraft:liquid_compressor', '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'), [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'supplementaries:bellows',
        B: 'mekanism:dynamic_tank',
        C: '#forge:gears/compressed_iron',
        D: 'thermal:machine_frame',
        E: 'pneumaticcraft:pressure_tube',
        F: 'thermal:upgrade_augment_1'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_liquid_compressor')

    e.remove({ id: 'pneumaticcraft:pressure_tube' })
    e.shaped(Item.of('12x pneumaticcraft:pressure_tube'), [
        'ABA'
    ], {
        A: '#forge:ingots/compressed_iron',
        B: '#thermal:glass/hardened'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_pressure_tube')

    e.remove({ id: 'pneumaticcraft:small_tank' })
    e.shaped('pneumaticcraft:small_tank', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'create:andesite_alloy',
        B: '#thermal:glass/hardened',
        C: 'mekanism:basic_fluid_tank'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_small_tank')

    e.remove({ id: 'pneumaticcraft:pressure_chamber_valve' })
    e.shaped(Item.of('pneumaticcraft:pressure_chamber_valve', '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'), [
        ' A ',
        'CBC'
    ], {
        A: 'thermal:upgrade_augment_1',
        B: 'pneumaticcraft:pressure_chamber_wall',
        C: 'pneumaticcraft:pressure_tube'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_pressure_chamber_valve')

    e.remove({ id: 'pneumaticcraft:pressure_chamber_interface' })
    e.shaped('pneumaticcraft:pressure_chamber_interface', [
        ' A ',
        'CBC',
        ' A '
    ], {
        A: 'thermal:redstone_servo',
        B: 'pneumaticcraft:pressure_chamber_wall',
        C: '#forge:gears/compressed_iron'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_pressure_chamber_interface')

    e.remove({ id: 'pneumaticcraft:safety_tube_module' })
    e.shaped('pneumaticcraft:safety_tube_module', [
        'A',
        'B',
        'C'
    ], {
        A: 'pneumaticcraft:pressure_gauge',
        B: 'pneumaticcraft:pressure_tube',
        C: 'thermal:redstone_servo'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_safety_tube_module')

    e.remove({ id: 'pneumaticcraft:pressure_gauge' })
    e.shaped('pneumaticcraft:pressure_gauge', [
        'AB ',
        'BCB',
        ' BA'
    ], {
        A: 'minecraft:paper',
        B: '#forge:nuggets/signalum',
        C: '#forge:nuggets/iron'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_pressure_gauge')

    e.remove({ id: 'pneumaticcraft:pressure_gauge_module' })
    e.shaped('pneumaticcraft:pressure_gauge_module', [
        ' A ',
        'BCB'
    ], {
        A: 'pneumaticcraft:pressure_gauge',
        B: '#forge:nuggets/signalum',
        C: 'pneumaticcraft:pressure_tube'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_pressure_gauge_module')

    e.remove({ id: 'pneumaticcraft:advanced_liquid_compressor' })
    e.shaped(Item.of('pneumaticcraft:advanced_liquid_compressor', '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'), [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'pneumaticcraft:heat_pipe',
        B: '#forge:circuits/basic',
        C: 'pneumaticcraft:advanced_pressure_tube',
        D: 'pneumaticcraft:liquid_compressor',
        E: 'thermal:upgrade_augment_2'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_advanced_liquid_compressor')

    e.remove({ id: 'pneumaticcraft:electrostatic_compressor' })
    e.shaped(Item.of('pneumaticcraft:electrostatic_compressor', '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'), [
        'ABA',
        'FDG',
        'CEC'
    ], {
        A: '#botania:runes/air',
        B: '#forge:circuits/basic',
        C: 'pneumaticcraft:advanced_pressure_tube',
        D: 'thermal:machine_frame',
        E: 'thermal:upgrade_augment_3',
        F: 'supplementaries:bellows',
        G: 'pneumaticcraft:turbine_rotor'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_electrostatic_compressor')

    e.remove({ id: 'pneumaticcraft:thermal_compressor' })
    e.shaped(Item.of('pneumaticcraft:thermal_compressor', '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:ingots/compressed_iron',
        B: 'pneumaticcraft:pressure_tube',
        C: 'powah:thermoelectric_plate',
        D: '#industrialforegoing:machine_frame/pity'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_thermal_compressor')

    e.shaped('pneumaticcraft:module_expansion_card', [
        'ABA',
        'BCB',
        'ADA'
    ], {
        A: '#forge:wires/copper',
        B: 'rftoolscontrol:ram_chip',
        C: 'immersiveengineering:logic_circuit',
        D: 'immersiveengineering:connector_probe'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_module_expansion_card_alternate')

    e.remove({ id: 'pneumaticcraft:programming_puzzle' })
    e.shaped(Item.of('24x pneumaticcraft:programming_puzzle'), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#pneumaticcraft:plastic_sheets',
        B: 'pneumaticcraft:printed_circuit_board'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_programming_puzzle')

    e.remove({ id: 'pneumaticcraft:pneumatic_dynamo' })
    e.shaped('pneumaticcraft:pneumatic_dynamo', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'thermal:rf_coil',
        B: 'pneumaticcraft:turbine_rotor',
        C: 'pneumaticcraft:printed_circuit_board',
        D: '#forge:gears/compressed_iron',
        E: 'thermal:machine_frame'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_pneumatic_dynamo')

    e.remove({ id: 'pneumaticcraft:thermal_lagging' })
    e.shaped(Item.of('6x pneumaticcraft:thermal_lagging'), [
        'AAA',
        'BBB',
        'AAA'
    ], {
        A: '#forge:glass_panes/black',
        B: 'thermal:gray_rockwool'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_thermal_lagging')

    e.remove({ id: 'pneumaticcraft:refinery' })
    e.shaped('pneumaticcraft:refinery', [
        'ADA',
        'BCB',
        'ABA'
    ], {
        A: 'pneumaticcraft:reinforced_bricks',
        B: 'mekanism:superheating_element',
        C: 'mekanism:dynamic_tank',
        D: 'mekanism:basic_mechanical_pipe'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_refinery')

    e.remove({ id: 'pneumaticcraft:refinery_output' })
    e.shaped('pneumaticcraft:refinery_output', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'pneumaticcraft:reinforced_bricks',
        B: 'mekanism:basic_mechanical_pipe',
        C: 'mekanism:dynamic_tank'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_refinery_output')

    e.remove({ id: 'pneumaticcraft:uv_light_box' })
    e.shaped('pneumaticcraft:uv_light_box', [
        'AAA',
        'CDE',
        'BBB'
    ], {
        A: 'architects_palette:abyssaline_lamp',
        B: 'pneumaticcraft:reinforced_stone_slab',
        C: 'glassential:glass_dark',
        D: 'pneumaticcraft:pcb_blueprint',
        E: 'pneumaticcraft:pressure_tube'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_uv_light_box')

    e.remove({ id: 'pneumaticcraft:jet_boots_upgrade_1' })
    e.shaped('pneumaticcraft:jet_boots_upgrade_1', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'pneumaticcraft:upgrade_matrix',
        B: 'pneumaticcraft:advanced_pressure_tube',
        C: 'pneumaticcraft:vortex_cannon',
        D: 'pneumaticcraft:pressure_chamber_valve'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_jet_boots_upgrade_1')

    e.remove({ id: 'pneumaticcraft:jet_boots_upgrade_2' })
    e.shaped('pneumaticcraft:jet_boots_upgrade_2', [
        'DCD',
        'ABA',
        'EFE'
    ], {
        A: 'pneumaticcraft:vortex_cannon',
        B: 'pneumaticcraft:jet_boots_upgrade_1',
        C: 'tconstruct:sky_slime_crystal',
        D: '#forge:circuits/basic',
        E: 'pneumaticcraft:pneumatic_cylinder',
        F: Item.of('minecraft:potion', '{Potion:"undergarden:featherweight"}')
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_jet_boots_upgrade_2')

    e.remove({ id: 'pneumaticcraft:jet_boots_upgrade_3' })
    e.shaped('pneumaticcraft:jet_boots_upgrade_3', [
        'DCD',
        'ABA',
        'ECE'
    ], {
        A: 'pneumaticcraft:vortex_cannon',
        B: 'pneumaticcraft:jet_boots_upgrade_2',
        C: '#forge:gems/blazing',
        D: '#forge:circuits/elite',
        E: 'thermal:lightning_charge'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_jet_boots_upgrade_3')

    e.remove({ id: 'pneumaticcraft:jet_boots_upgrade_4' })
    e.shaped('pneumaticcraft:jet_boots_upgrade_4', [
        'DCD',
        'ABA',
        'ECE'
    ], {
        A: 'pneumaticcraft:vortex_cannon',
        B: 'pneumaticcraft:jet_boots_upgrade_3',
        C: Item.of('tconstruct:copper_can', '{fluid:"industrialforegoing:ether_gas"}'),
        D: '#forge:circuits/ultimate',
        E: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:long_slow_falling"}')
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_jet_boots_upgrade_4')

    e.remove({ id: 'pneumaticcraft:jet_boots_upgrade_5' })
    e.shaped('pneumaticcraft:jet_boots_upgrade_5', [
        'DCD',
        'ABA',
        'ECE'
    ], {
        A: 'pneumaticcraft:vortex_cannon',
        B: 'pneumaticcraft:jet_boots_upgrade_4',
        C: 'kubejs:replaceme',
        D: '#botania:runes/summer',
        E: Item.of('minecraft:lingering_potion', '{Potion:"minecraft:long_slow_falling"}')
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_jet_boots_upgrade_5')

    e.remove({ id: 'pneumaticcraft:vacuum_trap' })
    e.shaped('pneumaticcraft:vacuum_trap', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: '#forge:ingots/compressed_iron',
        B: 'engineersdecor:iron_hatch',
        C: 'pneumaticcraft:reinforced_bricks',
        D: 'thermal:machine_frame',
        E: 'pneumaticcraft:pressure_tube',
        F: '#botania:runes/air',
        G: 'kubejs:dimensional_storage_crystal'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_vacuum_trap')

    e.remove({ id: 'pneumaticcraft:spawner_core_shell' })
    e.shaped('pneumaticcraft:spawner_core_shell', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'kubejs:dimensional_storage_crystal',
        B: 'pneumaticcraft:pressure_chamber_glass',
        C: 'naturesaura:calling_spirit'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_spawner_core_shell')

    e.remove({ id: 'pneumaticcraft:heat_pipe' })
    e.shaped(Item.of('6x pneumaticcraft:heat_pipe'), [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'pneumaticcraft:thermal_lagging',
        B: '#forge:storage_blocks/compressed_iron',
        C: '#forge:storage_blocks/copper'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_heat_pipe')

    e.remove({ id: 'pneumaticcraft:speed_upgrade_from_glycerol' })
    e.shaped(Item.of('4x pneumaticcraft:speed_upgrade'), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'pneumaticcraft:upgrade_matrix',
        B: 'pneumaticcraft:glycerol',
        C: { type: 'immersiveengineering:fluid', tag: 'forge:lubricant', amount: 1000 }
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_speed_upgrade_from_glycerol')

    e.remove({ id: 'pneumaticcraft:volume_upgrade' })
    e.shaped(Item.of('4x pneumaticcraft:volume_upgrade'), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'pneumaticcraft:upgrade_matrix',
        B: 'pneumaticcraft:air_canister',
        C: '#thermal:glass/hardened'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_volume_upgrade')

    e.remove({ id: 'pneumaticcraft:vacuum_pump' })
    e.shaped(Item.of('pneumaticcraft:vacuum_pump', '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'), [
        'AEA',
        'CBC',
        'DFD'
    ], {
        A: 'pneumaticcraft:pressure_gauge',
        B: 'pneumaticcraft:turbine_rotor',
        C: 'pneumaticcraft:pressure_tube',
        D: 'pneumaticcraft:reinforced_stone_slab',
        E: 'pneumaticcraft:pressure_chamber_glass',
        F: 'thermal:machine_frame'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_vacuum_pump')

    e.remove({ id: 'pneumaticcraft:item_life_upgrade' })
    e.shaped('pneumaticcraft:item_life_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'pneumaticcraft:upgrade_matrix',
        B: 'kubejs:replaceme',
        C: 'naturesaura:calling_spirit'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_item_life_upgrade')

    e.remove({ id: 'pneumaticcraft:inventory_upgrade' })
    e.shaped(Item.of('4x pneumaticcraft:inventory_upgrade'), [
        'ACA',
        'DBE',
        'ACA'
    ], {
        A: 'pneumaticcraft:upgrade_matrix',
        B: 'thermal:energy_cell',
        C: 'thermal:hazmat_fabric',
        D: 'thermal:satchel',
        E: 'thermal:fluid_reservoir'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_inventory_upgrade')

    e.remove({ id: 'pneumaticcraft:entity_tracker_upgrade' })
    e.shaped('pneumaticcraft:entity_tracker_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'pneumaticcraft:upgrade_matrix',
        B: 'kubejs:memory_basic_filled',
        C: 'botania:forest_eye'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_entity_tracker_upgrade')

    e.remove({ id: 'pneumaticcraft:night_vision_upgrade' })
    e.shaped('pneumaticcraft:night_vision_upgrade', [
        'ADA',
        'BCB',
        'ADA'
    ], {
        A: 'pneumaticcraft:upgrade_matrix',
        B: Item.of('apotheosis:potion_charm', '{Damage:0,Potion:"minecraft:long_night_vision"}'),
        C: 'occultism:infused_lenses',
        D: '#forge:wires/copper'
    }).id('kubejs:pneumaticcraft/shaped/pneumaticcraft_night_vision_upgrade')
})