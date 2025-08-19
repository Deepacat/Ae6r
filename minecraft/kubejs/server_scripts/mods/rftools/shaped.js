ServerEvents.recipes(e => {
    e.remove({ id: 'rftoolsutility:screen_controller' })
    e.shaped('rftoolsutility:screen_controller', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:gears/signalum',
        B: '#forge:glass/black',
        C: 'thermal:charge_bench'
    }).id('kubejs:shaped/rftoolsutility_screen_controller')

    e.remove({ id: 'rftoolsutility:module_template' })
    e.shaped('rftoolsutility:module_template', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:gems/dimensional',
        B: '#forge:ingots/iron_aluminum',
        C: 'pneumaticcraft:printed_circuit_board'
    }).id('kubejs:shaped/rftoolsutility_module_template')

    e.remove({ id: 'rftoolsutility:matter_receiver' })
    e.shaped('rftoolsutility:matter_receiver', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'kubejs:replaceme',
        B: 'kubejs:replaceme',
        C: 'occultism:stable_wormhole',
        D: '#industrialforegoing:machine_frame/pity'
    }).id('kubejs:shaped/rftoolsutility_matter_receiver')

    e.remove({ id: 'rftoolsutility:matter_transmitter' })
    e.shaped('rftoolsutility:matter_transmitter', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'kubejs:replaceme',
        B: 'kubejs:replaceme',
        C: 'occultism:stable_wormhole',
        D: '#industrialforegoing:machine_frame/pity'
    }).id('kubejs:shaped/rftoolsutility_matter_transmitter')

    e.remove({ id: 'rftoolsutility:dialing_device' })
    e.shaped('rftoolsutility:dialing_device', [
        'ABA',
        'ACA',
        'AAA'
    ], {
        A: 'kubejs:replaceme',
        B: 'kubejs:replaceme',
        C: 'xnet:wireless_router'
    }).id('kubejs:shaped/rftoolsutility_dialing_device')

    e.remove({ id: 'rftoolsutility:charged_porter' })
    e.shaped('rftoolsutility:charged_porter', [
        'EAE',
        'BCB',
        'EDE'
    ], {
        A: 'rftoolsutility:matter_beamer',
        B: 'kubejs:replaceme',
        C: 'rftoolsbase:tablet',
        D: 'rftoolsutility:matter_transmitter',
        E: 'powah:capacitor_basic_large'
    }).id('kubejs:shaped/rftoolsutility_charged_porter')

    e.remove({ id: 'rftoolsbuilder:shape_card_pump' })
    e.shaped('rftoolsbuilder:shape_card_pump', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:dusts/redstone',
        B: 'minecraft:water_bucket',
        C: 'pneumaticcraft:printed_circuit_board',
        D: 'rftoolsbuilder:shape_card_def',
        E: 'minecraft:lava_bucket'
    }).id('kubejs:shaped/rftoolsbuilder_shape_card_pump')

    e.remove({ id: 'rftoolsbuilder:shape_card_quarry' })
    e.shaped('rftoolsbuilder:shape_card_quarry', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: '#forge:dusts/redstone',
        B: 'minecraft:diamond_pickaxe',
        C: 'pneumaticcraft:printed_circuit_board',
        D: 'rftoolsbuilder:shape_card_def',
        E: 'minecraft:diamond_shovel'
    }).id('kubejs:shaped/rftoolsbuilder_shape_card_quarry')

    e.remove({ id: 'rftoolsbase:machine_infuser' })
    e.shaped('rftoolsbase:machine_infuser', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:gears/enderium',
        B: 'rftoolsbase:infused_diamond',
        C: '#forge:storage_blocks/nitro',
        D: '#industrialforegoing:machine_frame/advanced'
    }).id('kubejs:shaped/rftoolsbase_machine_infuser')

    e.remove({ id: 'rftoolsbuilder:builder' })
    e.shaped('rftoolsbuilder:builder', [
        'ADA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:bricks',
        B: 'kubejs:replaceme',
        C: '#industrialforegoing:machine_frame/pity',
        D: 'kubejs:replaceme'
    }).id('kubejs:shaped/rftoolsbuilder_builder')

    e.remove({ id: 'rftoolsbase:machine_base' })
    e.shaped('rftoolsbase:machine_base', [
        ' A ',
        'ACA',
        'BBB'
    ], {
        A: '#forge:nuggets/invar',
        B: 'pneumaticcraft:reinforced_stone_slab',
        C: 'kubejs:replaceme'
    }).id('kubejs:shaped/rftoolsbase_machine_base')

    e.remove({ id: 'rftoolsutility:flight_module' })
    e.shaped('rftoolsutility:flight_module', [
        'ABA',
        'CDC',
        'EFG'
    ], {
        A: 'alexsmobs:mysterious_worm',
        B: Item.of('rftoolsutility:syringe', '{mobName:"alexsmobs:warped_mosco",mobId:"alexsmobs:warped_mosco",level:10}'),
        C: 'meetyourfight:aether_glazed_cupcake',
        D: 'rftoolsutility:moduleplus_template',
        E: Item.of('rftoolsutility:syringe', '{mobName:"upgrade_aquatic:flare",mobId:"upgrade_aquatic:flare",level:10}'),
        F: 'alexsmobs:tarantula_hawk_elytra',
        G: Item.of('rftoolsutility:syringe', '{mobName:"alexsmobs:void_worm",mobId:"alexsmobs:void_worm",level:10}')
    }).id('kubejs:shaped/rftoolsutility_flight_module')

    e.remove({ id: 'rftoolspower:blazing_agitator' })
    e.shaped('rftoolspower:blazing_agitator', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'rftoolspower:blazing_rod',
        B: 'powah:energizing_rod_blazing',
        C: 'rftoolsbase:machine_base'
    }).id('kubejs:rftoolspower_blazing_agitator')

    e.remove({ id: 'rftoolspower:cell1' })
    e.shaped('rftoolspower:cell1', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: 'rftoolspower:power_core1',
        B: 'immersiveengineering:transformer_hv',
        C: 'mekanism:basic_universal_cable',
        D: 'rftoolsbase:machine_frame'
    }).id('kubejs:rftoolspower_cell1')

    e.remove({ id: 'rftoolscontrol:program_card' })
    e.shaped('rftoolscontrol:program_card', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'pneumaticcraft:plastic',
        B: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
        C: 'pneumaticcraft:printed_circuit_board'
    }).id('kubejs:rftoolscontrol_program_card')

    e.remove({ id: 'rftoolscontrol:ram_chip' })
    e.shaped('rftoolscontrol:ram_chip', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'redstonepen:relay',
        B: ['#forge:wires/copper', '#forge:wires/lead'],
        C: 'immersiveengineering:circuit_board'
    }).id('kubejs:rftoolscontrol_ram_chip')

    e.remove({ id: 'rftoolscontrol:token' })
    e.shaped('rftoolscontrol:token', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:paper',
        B: 'pneumaticcraft:programming_puzzle'
    }).id('kubejs:rftoolscontrol_token')

    e.remove({ id: 'rftoolscontrol:craftingstation' })
    e.shaped('rftoolscontrol:craftingstation', [
        'ABA',
        'CDE',
        'ABA'
    ], {
        A: 'create:mechanical_crafter',
        B: 'pneumaticcraft:printed_circuit_board',
        C: 'kubejs:replaceme',
        D: 'rftoolsbase:machine_frame',
        E: 'kubejs:replaceme'
    }).id('kubejs:rftoolscontrol_craftingstation')

    e.remove({ id: 'rftoolscontrol:processor' })
    e.shaped('rftoolscontrol:processor', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'immersiveengineering:logic_unit',
        B: 'pneumaticcraft:smart_chest',
        C: 'rftoolsbase:machine_frame'
    }).id('kubejs:rftoolscontrol_processor')

    e.remove({ id: 'rftoolscontrol:graphics_card' })
    e.shaped('rftoolscontrol:graphics_card', [
        'ABA',
        'CDA',
        'EEE'
    ], {
        A: 'pneumaticcraft:heat_sink',
        B: 'pneumaticcraft:turbine_rotor',
        C: 'pneumaticcraft:printed_circuit_board',
        D: 'kubejs:replaceme',
        E: '#forge:nuggets/copper'
    }).id('kubejs:rftoolscontrol_graphics_card')

    e.remove({ id: 'rftoolscontrol:network_card' })
    e.shaped('rftoolscontrol:network_card', [
        'ABC',
        'DDD'
    ], {
        A: 'kubejs:replaceme',
        B: 'pneumaticcraft:printed_circuit_board',
        C: 'kubejs:replaceme',
        D: '#forge:nuggets/copper'
    }).id('kubejs:rftoolscontrol_network_card')

    e.remove({ id: 'rftoolscontrol:network_identifier' })
    e.shaped('rftoolscontrol:network_identifier', [
        'AAA',
        'A A',
        'AAA'
    ], {
        A: 'rftoolscontrol:token'
    }).id('kubejs:rftoolscontrol_network_identifier')

    e.remove({ id: 'rftoolscontrol:advanced_network_card' })
    e.shaped('rftoolscontrol:advanced_network_card', [
        'ABC'
    ], {
        A: 'kubejs:replaceme',
        B: 'rftoolscontrol:network_card',
        C: 'kubejs:replaceme'
    }).id('kubejs:rftoolscontrol_advanced_network_card')

    e.remove({ id: 'rftoolscontrol:node' })
    e.shaped('rftoolscontrol:node', [
        ' A ',
        'BCB'
    ], {
        A: 'rftoolscontrol:network_card',
        B: 'pneumaticcraft:printed_circuit_board',
        C: 'rftoolsbase:machine_frame'
    }).id('kubejs:rftoolscontrol_node')

    e.remove({ id: 'rftoolsutility:syringe' })
    e.shaped('rftoolsutility:syringe', [
        '  A',
        ' B ',
        'C  '
    ], {
        A: '#forge:rods/steel',
        B: 'minecraft:glass_bottle',
        C: 'pneumaticcraft:plastic'
    }).id('kubejs:shaped/rftoolsutility_syringe')

    e.remove({ id: 'rftoolsbase:tablet' })
    e.shaped('rftoolsbase:tablet', [
        'AAA',
        'BCD',
        'EEE'
    ], {
        A: 'rftoolsbase:information_screen',
        B: 'rftoolscontrol:advanced_network_card',
        C: 'kubejs:cpu_core_as_81221',
        D: 'rftoolscontrol:graphics_card',
        E: 'rftoolsbase:machine_base'
    }).id('kubejs:shaped/rftoolsbase_tablet')

    e.remove({ id: 'rftoolspower:dimensionalcell_simple' })
    e.shaped('rftoolspower:dimensionalcell_simple', [
        'AEA',
        'BCB',
        'ADA'
    ], {
        A: 'rftoolspower:power_core1',
        B: 'kubejs:dimensional_storage_crystal',
        C: 'rftoolsbase:machine_frame',
        D: 'powah:ender_core',
        E: 'rftoolscontrol:advanced_network_card'
    }).id('kubejs:rftoolspower_dimensionalcell_simple')

    e.remove({ id: 'rftoolspower:dimensionalcell' })
    e.shaped('rftoolspower:dimensionalcell', [
        'ADA',
        'BCB',
        'ADA'
    ], {
        A: 'rftoolspower:power_core2',
        B: 'kubejs:dimensional_storage_crystal',
        C: 'rftoolspower:dimensionalcell_simple',
        D: 'rftoolsbase:infused_diamond'
    }).id('kubejs:rftoolspower_dimensionalcell')

    e.remove({ id: 'rftoolspower:dimensionalcell_advanced' })
    e.shaped('rftoolspower:dimensionalcell_advanced', [
        'ADA',
        'BCB',
        'ADA'
    ], {
        A: 'rftoolspower:power_core3',
        B: 'kubejs:dimensional_storage_crystal',
        C: 'rftoolspower:dimensionalcell',
        D: '#forge:gems/source_diamond'
    }).id('kubejs:rftoolspower_dimensionalcell_advanced')

    e.remove({ id: 'rftoolsutility:crafter1' })
    e.shaped('rftoolsutility:crafter1', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
        B: 'pneumaticcraft:smart_chest',
        C: 'rftoolscontrol:craftingstation',
        D: 'rftoolsbase:machine_frame'
    }).id('kubejs:shaped/rftoolsutility_crafter1')

    e.remove({ id: 'rftoolsutility:crafter2' })
    e.shaped('rftoolsutility:crafter2', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
        B: 'powah:capacitor_blazing',
        C: 'rftoolscontrol:craftingstation',
        D: 'rftoolsutility:crafter1'
    }).id('kubejs:shaped/rftoolsutility_crafter2')

    e.remove({ id: 'rftoolsutility:crafter3' })
    e.shaped('rftoolsutility:crafter3', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
        B: 'powah:capacitor_nitro',
        C: 'rftoolscontrol:craftingstation',
        D: 'rftoolsutility:crafter2'
    }).id('kubejs:shaped/rftoolsutility_crafter3')

    e.remove({ id: 'rftoolsstorage:modular_storage' })
    e.shaped('rftoolsstorage:modular_storage', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'thermal:gray_rockwool',
        B: '#forge:plates/steel',
        C: 'thermal:machine_frame'
    }).id('kubejs:rftoolsstorage_modular_storage')

    e.remove({ id: 'rftoolsstorage:storage_module0' })
    e.shaped('rftoolsstorage:storage_module0', [
        'ADA',
        'CBC',
        'ADA'
    ], {
        A: '#thermal:glass/hardened',
        B: 'sophisticatedstorage:copper_chest',
        C: 'create:pulp',
        D: '#forge:gears/osmium'
    }).id('kubejs:rftoolsstorage_storage_module0')

    e.remove({ id: 'rftoolsbuilder:shape_card_quarry' })
    e.shaped('rftoolsbuilder:shape_card_quarry', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'mekanism:robit',
        B: 'mekanism:teleportation_core',
        C: 'rftoolsbuilder:shape_card_def',
        D: '#forge:circuits/ultimate',
        E: 'mekanismtools:refined_obsidian_paxel'
    }).id('kubejs:shaped/shape_card_quarry')

    e.remove({ id: 'rftoolsstorage:storage_scanner' })
    e.shaped('rftoolsstorage:storage_scanner', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'fluxnetworks:flux_dust',
        B: '#xnet:cables',
        C: 'botania:forest_eye',
        D: 'xnet:wireless_router'
    }).id('kubejs:shaped/rftoolsstorage_storage_scanner')
})