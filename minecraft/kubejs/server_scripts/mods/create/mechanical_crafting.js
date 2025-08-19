ServerEvents.recipes(e => {
    e.remove({ id: "create:mechanical_crafting/crushing_wheel" })
    e.recipes.create.mechanical_crafting(Item.of('create:crushing_wheel', 2), [
        ' AAA ',
        'AAPAA',
        'APSPA',
        'AAPAA',
        ' AAA '
    ], {
        A: 'create:andesite_alloy',
        S: 'create:shaft',
        P: 'create:brass_casing'
    }).id('kubejs:create_mechanical_crafting/crushing_wheel')

    e.remove({ id: "powah:crafting/energizing_orb" })
    e.recipes.create.mechanical_crafting('powah:energizing_orb', [
        ' AAA ',
        ' A A ',
        ' CBC ',
        'CCCCC'
    ], {
        A: 'kubejs:replaceme',
        B: 'thermal:machine_frame',
        C: 'kubejs:replaceme'
    }).id('kubejs:powah_crafting/energizing_orb')

    e.recipes.create.mechanical_crafting(Item.of('pneumaticcraft:flux_compressor', { BlockEntityTag: { UpgradeInventory: { Size: 4, Items: [{ Slot: 0, id: "pneumaticcraft:security_upgrade", Count: 1 }] } } }), [
        'ABBBA',
        'ACDCA',
        'EFGFE',
        'HIJIH',
        'HHKHH'
    ], {
        A: 'thermal:hazmat_fabric',
        B: Item.of('powah:capacitor_nitro'),
        C: 'pneumaticcraft:turbine_rotor',
        D: 'mekanism:basic_control_circuit',
        E: 'pneumaticcraft:advanced_pressure_tube',
        F: '#forge:gears/compressed_iron',
        G: Item.of('powah:thermo_generator_nitro'),
        H: 'fluxnetworks:flux_block',
        I: 'supplementaries:bellows',
        J: 'thermal:upgrade_augment_3',
        K: 'thermal:rf_coil'
    }).id('kubejs:mechanical_crafting/flux_compressor')

    e.recipes.create.mechanical_crafting('pneumaticcraft:assembly_drill', [
        'AAA ',
        'BCCA',
        '  CA',
        'DDED'
    ], {
        A: 'kubejs:replaceme',
        B: 'pneumaticcraft:drill_bit_diamond',
        C: 'pneumaticcraft:pneumatic_cylinder',
        D: 'pneumaticcraft:reinforced_stone_slab',
        E: Item.of('pneumaticcraft:pneumatic_dynamo')
    }).id('kubejs:mechanical_crafting/assembly_drill')

    e.recipes.create.mechanical_crafting('pneumaticcraft:assembly_laser', [
        'AAA ',
        'BCCA',
        '  CA',
        'DDED'
    ], {
        A: 'kubejs:replaceme',
        B: '#powah:energizing_rod',
        C: 'pneumaticcraft:pneumatic_cylinder',
        D: 'pneumaticcraft:reinforced_stone_slab',
        E: Item.of('pneumaticcraft:pneumatic_dynamo')
    }).id('kubejs:mechanical_crafting/assembly_laser')

    e.recipes.create.mechanical_crafting('pneumaticcraft:assembly_io_unit_import', [
        'AAA ',
        'BCCA',
        '  CA',
        'DDED'
    ], {
        A: 'kubejs:replaceme',
        B: 'create:brass_hand',
        C: 'pneumaticcraft:pneumatic_cylinder',
        D: 'pneumaticcraft:reinforced_stone_slab',
        E: Item.of('pneumaticcraft:pneumatic_dynamo')
    }).id('kubejs:mechanical_crafting/assembly_io_unit_import')

    e.recipes.create.mechanical_crafting('pneumaticcraft:assembly_io_unit_export', [
        ' AAA',
        'ACCB',
        'AC  ',
        'DEDD'
    ], {
        A: 'kubejs:replaceme',
        B: 'create:brass_hand',
        C: 'pneumaticcraft:pneumatic_cylinder',
        D: 'pneumaticcraft:reinforced_stone_slab',
        E: Item.of('pneumaticcraft:pneumatic_dynamo')
    }).id('kubejs:mechanical_crafting/assembly_io_unit_export')

    e.recipes.create.mechanical_crafting('pneumaticcraft:assembly_controller', [
        ' AAA',
        'ACCB',
        'AC  ',
        'DEDD'
    ], {
        A: 'kubejs:replaceme',
        B: 'computercraft:monitor_normal',
        C: 'pneumaticcraft:printed_circuit_board',
        D: 'pneumaticcraft:reinforced_stone_slab',
        E: Item.of('pneumaticcraft:pneumatic_dynamo')
    }).id('kubejs:mechanical_crafting/assembly_controller')

    e.recipes.create.mechanical_crafting('pneumaticcraft:assembly_platform', [
        ' AA ',
        'BCCB',
        'DDDD'
    ], {
        A: '#pneumaticcraft:plastic_sheets',
        B: '#forge:ingots/compressed_iron',
        C: 'pneumaticcraft:pneumatic_cylinder',
        D: 'pneumaticcraft:reinforced_stone_slab'
    }).id('kubejs:mechanical_crafting/assembly_platform')

    e.recipes.create.mechanical_crafting('pneumaticcraft:aerial_interface', [
        'AABAA',
        'ACDEA',
        'BCFGB',
        'ACHEA',
        'AABAA'
    ], {
        A: 'pneumaticcraft:pressure_chamber_wall',
        B: 'pneumaticcraft:advanced_pressure_tube',
        C: Item.of('powah:capacitor_blazing'),
        D: 'pneumaticcraft:omnidirectional_hopper',
        E: 'pneumaticcraft:printed_circuit_board',
        F: '#industrialforegoing:machine_frame/supreme',
        G: 'kubejs:replaceme',
        H: 'powah:player_aerial_pearl'
    }).id('kubejs:mechanical_crafting/aerial_interface')

    e.recipes.create.mechanical_crafting('pneumaticcraft:spawner_extractor', [
        '  A  ',
        ' BCB ',
        ' DED ',
        'F E F'
    ], {
        A: 'pneumaticcraft:huge_tank',
        B: 'pneumaticcraft:pressure_tube',
        C: '#industrialforegoing:machine_frame/advanced',
        D: 'alexsmobs:hemolymph_sac',
        E: 'pneumaticcraft:drill_pipe',
        F: 'alexsmobs:warped_muscle'
    }).id('kubejs:mechanical_crafting/spawner_extractor')

    e.remove({ id: "create:mechanical_crafting/flywheel" })
    e.recipes.create.mechanical_crafting('create:flywheel', [
        ' AAA ',
        'ABCBA',
        'ACDCA',
        'ABEBA',
        ' AAA '
    ], {
        A: '#forge:plates/brass',
        B: '#forge:rods/brass',
        C: '#forge:gears/enderium',
        D: 'create:brass_casing',
        E: 'ars_nouveau:carbuncle_charm'
    }).id('kubejs:create_mechanical_crafting/flywheel')

    e.remove({ id: "integrateddynamics:crafting/logic_programmer" })
    e.recipes.create.mechanical_crafting('integrateddynamics:logic_programmer', [
        'ABBBA',
        'CDEDC',
        'CFGFC',
        'CIHJC',
        'ABBBA'
    ], {
        A: 'pneumaticcraft:logistics_core',
        B: 'integrateddynamics:crystalized_menril_block',
        C: 'integrateddynamics:menril_wood',
        D: 'kubejs:replaceme',
        E: 'kubejs:cpu_core_as_81221',
        F: 'pneumaticcraft:smart_chest',
        G: 'kubejs:replaceme',
        H: 'pneumaticcraft:upgrade_matrix',
        I: 'pneumaticcraft:network_io_port',
        J: 'pneumaticcraft:network_data_storage'
    }).id('kubejs:integrateddynamics_crafting/logic_programmer')

    e.remove({ id: "rftoolsutility:environmental_controller" })
    e.recipes.create.mechanical_crafting('rftoolsutility:environmental_controller', [
        'ABBBA',
        'BCDCB',
        'BEFEB',
        'BGHGB',
        'ABBBA'
    ], {
        A: 'powah:dielectric_casing',
        B: 'thermal:enderium_glass',
        C: 'immersiveengineering:tesla_coil',
        D: 'powah:player_aerial_pearl',
        E: 'powah:aerial_pearl',
        F: '#industrialforegoing:machine_frame/supreme',
        G: '#forge:circuits/ultimate',
        H: 'kubejs:spirit_entropic_gateway'
    }).id('kubejs:rftoolsutility_environmental_controller')

    e.remove({ id: "mekanismgenerators:generator/wind" })
    e.recipes.create.mechanical_crafting('mekanismgenerators:wind_generator', [
        'ABC',
        ' E ',
        ' E ',
        ' G '
    ], {
        A: 'pneumaticcraft:turbine_rotor',
        B: 'immersiveengineering:dynamo',
        C: '#forge:gears/compressed_iron',
        E: 'engineersdecor:thick_steel_pole',
        G: 'engineersdecor:thick_steel_pole_head'
    }).id('kubejs:mekanismgenerators_generator/wind')

    e.remove({ id: "mekanismgenerators:rotational_complex" })
    e.recipes.create.mechanical_crafting('mekanismgenerators:rotational_complex', [
        'ABCCC',
        'BDBFC',
        'CBGBC',
        'CEBDB',
        'CCCBA'
    ], {
        A: '#forge:circuits/elite',
        B: '#forge:gears/compressed_iron',
        C: '#xnet:cables',
        D: '#mekanism:alloys/reinforced',
        E: 'rftoolscontrol:node',
        F: Item.of('rftoolsbase:tablet'),
        G: '#industrialforegoing:machine_frame/advanced'
    }).id('kubejs:mekanismgenerators_rotational_complex')

    e.remove({ id: "mekanismgenerators:reactor/controller" })
    e.recipes.create.mechanical_crafting('mekanismgenerators:fusion_reactor_controller', [
        '  ABA  ',
        ' ACDCA ',
        'ACEFECA',
        'BDGHGDB',
        'ACEIECA',
        ' ACDCA ',
        '  ABA  '
    ], {
        A: 'mekanismgenerators:reactor_glass',
        B: '#xnet:cables',
        C: 'mekanismgenerators:fusion_reactor_frame',
        D: '#xnet:advanced_connectors',
        E: Item.of('mekanism:ultimate_chemical_tank'),
        F: 'rftoolsutility:environmental_controller',
        G: '#forge:circuits/ultimate',
        H: Item.of('mekanism:ultimate_fluid_tank'),
        I: Item.of('rftoolsbase:tablet')
    }).id('kubejs:mekanismgenerators_reactor/controller')

    e.remove({ id: "mekanism:digital_miner" })
    e.recipes.create.mechanical_crafting('mekanism:digital_miner', [
        'AAAAA',
        'BCDCB',
        'EFGHE',
        'AAAAA',
        'II II'
    ], {
        A: '#forge:sheetmetals/steel',
        B: 'pneumaticcraft:smart_chest',
        C: 'integrateddynamics:part_display_panel',
        D: Item.of('rftoolsbase:tablet'),
        E: 'integratedtunnels:part_importer_energy',
        F: 'rftoolsutility:matter_transmitter',
        G: 'mekanism:robit',
        H: 'rftoolsutility:matter_receiver',
        I: 'engineersdecor:thick_steel_pole_head'
    }).id('kubejs:mekanism_digital_miner')

    e.remove({ id: "mininggadgets:mininggadget_simple" })
    e.recipes.create.mechanical_crafting('mininggadgets:mininggadget_simple', [
        ' AAABBB',
        'CDEFFF ',
        ' CGCBBB',
        'H      '
    ], {
        A: 'immersiveengineering:toolupgrade_revolver_electro',
        B: 'powah:dielectric_rod_horizontal',
        C: 'mekanism:hdpe_sheet',
        D: 'thermal:charge_bench',
        E: 'rftoolsbase:infused_diamond',
        F: 'industrialforegoing:laser_lens2',
        G: 'thermal:upgrade_augment_2',
        H: Item.of('immersiveengineering:wooden_grip')
    }).id('kubejs:mininggadgets_mininggadget_simple')

    e.remove({ id: "mininggadgets:mininggadget_fancy" })
    e.recipes.create.mechanical_crafting('mininggadgets:mininggadget_fancy', [
        ' AAABBB',
        'CDEFFF ',
        ' CGCBBB',
        'H      '
    ], {
        A: 'immersiveengineering:toolupgrade_revolver_electro',
        B: 'powah:dielectric_rod_horizontal',
        C: 'mekanism:hdpe_sheet',
        D: 'thermal:charge_bench',
        E: 'rftoolsbase:infused_diamond',
        F: 'industrialforegoing:laser_lens6',
        G: 'thermal:upgrade_augment_2',
        H: Item.of('immersiveengineering:wooden_grip')
    }).id('kubejs:mininggadgets_mininggadget_fancy')

    e.remove({ id: "mininggadgets:mininggadget" })
    e.recipes.create.mechanical_crafting('mininggadgets:mininggadget', [
        ' AAABBB',
        'CDEFFF ',
        ' CGCBBB',
        'H      '
    ], {
        A: 'immersiveengineering:toolupgrade_revolver_electro',
        B: 'powah:dielectric_rod_horizontal',
        C: 'mekanism:hdpe_sheet',
        D: 'thermal:charge_bench',
        E: 'rftoolsbase:infused_diamond',
        F: 'industrialforegoing:laser_lens3',
        G: 'thermal:upgrade_augment_2',
        H: Item.of('immersiveengineering:wooden_grip')
    }).id('kubejs:mininggadgets_mininggadget')

    e.remove({ id: "thermal:flux_saw" })
    e.recipes.create.mechanical_crafting('thermal:flux_saw', [
        ' A  ',
        'BACD',
        'AEFD',
        ' GCC'
    ], {
        A: '#forge:plates/steel',
        B: 'thermal:saw_blade',
        C: 'mekanism:hdpe_sheet',
        D: 'kubejs:leather_stripe',
        E: 'create:precision_mechanism',
        F: Item.of('thermal:flux_capacitor'),
        G: 'mekanism:hdpe_stick'
    }).id('kubejs:thermal_flux_saw')

    e.remove({ id: "thermal:flux_drill" })
    e.recipes.create.mechanical_crafting('thermal:flux_drill', [
        'B   ',
        ' AC ',
        ' EFD',
        ' GCD'
    ], {
        A: '#forge:plates/steel',
        B: 'thermal:drill_head',
        C: 'mekanism:hdpe_sheet',
        D: 'kubejs:leather_stripe',
        E: 'create:precision_mechanism',
        F: Item.of('thermal:flux_capacitor'),
        G: 'mekanism:hdpe_stick'
    }).id('kubejs:thermal_flux_drill')

    e.recipes.create.mechanical_crafting('fluxnetworks:flux_controller', [
        'ABBBA',
        'CDEDC',
        'CFGFC',
        'CHIHC',
        'ABBBA'
    ], {
        A: 'powah:dielectric_casing',
        B: 'fluxnetworks:flux_block',
        C: 'botania:bifrost_perm',
        D: '#botania:runes/air',
        E: '#botania:runes/asgard',
        F: 'thermal:lightning_charge',
        G: 'powah:player_transmitter_nitro',
        H: '#botania:runes/earth',
        I: '#forge:circuits/ultimate'
    }).id('kubejs:mechanical_crafting/flux_controller')

    e.remove({ id: "industrialforegoing:mob_duplicator" })
    e.recipes.create.mechanical_crafting('industrialforegoing:mob_duplicator', [
        'ABCBA',
        'BDEFB',
        'CGHGC',
        'BFIDB',
        'ABCBA'
    ], {
        A: 'powah:dielectric_casing',
        B: '#forge:plastic',
        C: 'powah:capacitor_nitro',
        D: '#forge:circuits/elite',
        E: 'rftoolsutility:spawner',
        F: 'ars_nouveau:greater_experience_gem',
        G: Item.of('pneumaticcraft:huge_tank'),
        H: 'botania:spawner_mover',
        I: '#industrialforegoing:machine_frame/supreme'
    }).id('kubejs:industrialforegoing_mob_duplicator')

    e.remove({ id: "industrialforegoing:mycelial_reactor" })
    e.recipes.create.mechanical_crafting('industrialforegoing:mycelial_reactor', [
        'ABCCCBA',
        'BDEFEDB',
        'CEDGDEC',
        'CFHIJFC',
        'CEDKDEC',
        'BDEFEDB',
        'ABCCCBA'
    ], {
        A: 'minecraft:shroomlight',
        B: 'thermal:enderium_glass',
        C: '#forge:plastic',
        D: 'kubejs:celestial_mycelium_filaments',
        E: 'mekanismgenerators:fusion_reactor_frame',
        F: '#forge:circuits/ultimate',
        G: 'undergarden:ink_mushroom_cap',
        H: 'kubejs:replaceme',
        I: 'kubejs:replaceme',
        J: 'minecraft:red_mushroom_block',
        K: 'kubejs:replaceme'
    }).id('kubejs:industrialforegoing_mycelial_reactor')

    e.remove({ id: "immersiveengineering:crafting/cloche" })
    e.recipes.create.mechanical_crafting('immersiveengineering:cloche', [
        ' AAA ',
        ' ABA ',
        ' A A ',
        ' CDC ',
        'CEFEC'
    ], {
        A: 'thermal:lumium_glass',
        B: 'immersiveengineering:electron_tube',
        C: '#forge:treated_wood',
        D: 'industrialforegoing:hydroponic_bed',
        E: 'immersiveengineering:component_steel',
        F: 'pneumaticcraft:fluid_mixer'
    }).id('kubejs:immersiveengineering_crafting/cloche')

    e.remove({ id: "industrialforegoing:dissolution_chamber/infinity_drill" })
    e.recipes.create.mechanical_crafting('industrialforegoing:infinity_drill', [
        '  AAA',
        '  BBA',
        ' CDBA',
        'CECF ',
        'GCF  '
    ], {
        A: 'rftoolsbase:infused_diamond',
        B: '#forge:storage_blocks/hepatizon',
        C: '#forge:plastic',
        D: Item.of('mekanism:elite_induction_cell'),
        E: 'thermal:upgrade_augment_3',
        F: Item.of('immersiveengineering:wooden_grip'),
        G: Item.of('pneumaticcraft:huge_tank')
    }).id('kubejs:industrialforegoing_dissolution_chamber/infinity_drill')
    e.remove({ id: "industrialforegoing:dissolution_chamber/infinity_trident" })
    e.recipes.create.mechanical_crafting('industrialforegoing:infinity_trident', [
        '   AA',
        '  BBA',
        ' CDB ',
        'CEC  ',
        'GC   '
    ], {
        A: 'rftoolsbase:infused_diamond',
        B: '#forge:storage_blocks/hepatizon',
        C: '#forge:plastic',
        D: Item.of('mekanism:elite_induction_cell'),
        E: 'thermal:upgrade_augment_3',
        G: Item.of('pneumaticcraft:huge_tank')
    }).id('kubejs:industrialforegoing_dissolution_chamber/infinity_trident')

    e.remove({ id: "industrialforegoing:dissolution_chamber/infinity_saw" })
    e.recipes.create.mechanical_crafting('industrialforegoing:infinity_saw', [
        '   AB',
        '  ABA',
        ' CDA ',
        'CECF ',
        'GCF  '
    ], {
        A: 'rftoolsbase:infused_diamond',
        B: '#forge:storage_blocks/hepatizon',
        C: '#forge:plastic',
        D: Item.of('mekanism:elite_induction_cell'),
        E: 'thermal:upgrade_augment_3',
        F: Item.of('immersiveengineering:wooden_grip'),
        G: Item.of('pneumaticcraft:huge_tank')
    }).id('kubejs:industrialforegoing_dissolution_chamber/infinity_saw')

    e.remove({ id: "industrialforegoing:dissolution_chamber/infinity_hammer" })
    e.recipes.create.mechanical_crafting('industrialforegoing:infinity_hammer', [
        '  BA ',
        '  ABA',
        ' CDAB',
        'CEC  ',
        'GC   '
    ], {
        A: 'rftoolsbase:infused_diamond',
        B: '#forge:storage_blocks/hepatizon',
        C: '#forge:plastic',
        D: Item.of('mekanism:elite_induction_cell'),
        E: 'thermal:upgrade_augment_3',
        G: Item.of('pneumaticcraft:huge_tank')
    }).id('kubejs:industrialforegoing_dissolution_chamber/infinity_hammer')

    e.remove({ id: "industrialforegoing:dissolution_chamber/infinity_launcher" })
    e.recipes.create.mechanical_crafting('industrialforegoing:infinity_launcher', [
        '   A ',
        '  BAA',
        ' CDB ',
        'CEC  ',
        'GCF  '
    ], {
        A: 'thermal:cured_rubber_block',
        B: '#forge:storage_blocks/hepatizon',
        C: '#forge:plastic',
        D: Item.of('mekanism:elite_induction_cell'),
        E: 'thermal:upgrade_augment_3',
        F: Item.of('immersiveengineering:wooden_grip'),
        G: Item.of('pneumaticcraft:huge_tank')
    }).id('kubejs:industrialforegoing_dissolution_chamber/infinity_launcher')

    e.remove({ id: "industrialforegoing:dissolution_chamber/infinity_nuke" })
    e.recipes.create.mechanical_crafting('industrialforegoing:infinity_nuke', [
        ' CCC ',
        'CAEAC',
        'BFGFB',
        'CAEAC',
        'HDIDH'
    ], {
        A: 'thermal:earth_tnt',
        B: '#forge:storage_blocks/hepatizon',
        C: '#forge:plastic',
        D: Item.of('mekanism:elite_induction_cell'),
        E: Item.of('tconstruct:copper_can', '{fluid:"industrialforegoing:ether_gas"}'),
        F: '#forge:alloys/ultimate',
        G: '#forge:pellets/plutonium',
        H: 'mekanism:hdpe_rod',
        I: Item.of('pneumaticcraft:huge_tank')
    }).id('kubejs:industrialforegoing_dissolution_chamber/infinity_nuke')
    e.remove({ id: "industrialforegoing:dissolution_chamber" })
    e.recipes.create.mechanical_crafting('industrialforegoing:dissolution_chamber', [
        'ABCBA',
        'BDCDB',
        'ECFCE',
        'BGHGB',
        'ABIBA'
    ], {
        A: '#forge:alloys/elite',
        B: '#forge:plastic',
        C: 'mekanism:elite_mechanical_pipe',
        D: '#forge:gears/enderium',
        E: Item.of('mekanism:elite_fluid_tank'),
        F: Item.of('pneumaticcraft:smart_chest'),
        G: 'mekanism:superheating_element',
        H: Item.of('immersiveengineering:capacitor_hv'),
        I: '#industrialforegoing:machine_frame/pity'
    }).id('kubejs:industrialforegoing_dissolution_chamber')

    e.remove({ id: "mekanism:meka_tool" })
    e.recipes.create.mechanical_crafting('mekanism:meka_tool', [
        'AAABB',
        ' CDE ',
        'AAABB',
        '  F  '
    ], {
        A: 'mekanism:hdpe_sheet',
        B: 'powah:dielectric_rod_horizontal',
        C: 'immersiveengineering:toolupgrade_shield_magnet',
        D: [Item.of('mininggadgets:mininggadget_simple'), Item.of('mininggadgets:mininggadget'), Item.of('mininggadgets:mininggadget_fancy')],
        E: Item.of('mekanism:laser_amplifier'),
        F: 'thermal:upgrade_augment_3'
    }).id('kubejs:mekanism_meka_tool')

    e.remove({ id: "thermal:machine_pyrolyzer" })
    e.recipes.create.mechanical_crafting('thermal:machine_pyrolyzer', [
        'AAAAA',
        'AACAA',
        'AADAA',
        'AEFEA',
        'AGGGA'
    ], {
        A: 'immersiveengineering:cokebrick',
        C: 'thermal:machine_frame',
        D: Item.of('thermal:fluid_cell'),
        E: '#forge:gears/constantan',
        F: 'botania:blaze_block',
        G: 'immersiveengineering:coil_mv'
    }).id('kubejs:thermal_machine_pyrolyzer')

    e.remove({ id: "powah:crafting/reactor_basic" })
    e.recipes.create.mechanical_crafting(Item.of('powah:reactor_basic', 36), [
        'ABBBA',
        'CPPPP',
        'CDDDE',
        'FGMLE',
        'NGOKE',
        'HIIKJ',
        'ABBBA'
    ], {
        A: 'powah:dielectric_casing',
        B: '#forge:storage_blocks/lead',
        C: Item.of('powah:energy_cell_basic'),
        D: Item.of('powah:thermo_generator_basic'),
        E: 'thermal:fluid_cell_frame',
        F: 'xnet:advanced_connector_green',
        G: 'xnet:netcable_green',
        H: 'xnet:advanced_connector_red',
        I: 'xnet:netcable_red',
        J: 'xnet:advanced_connector_blue',
        K: 'xnet:netcable_blue',
        L: 'pneumaticcraft:heat_pipe',
        M: 'kubejs:spirit_entropic_gateway',
        N: 'xnet:controller',
        O: Item.of('powah:furnator_basic'),
        P: 'create:fluid_pipe'
    }).id('kubejs:powah_crafting/reactor_basic')

    e.remove({ id: "powah:crafting/reactor_hardened" })
    e.recipes.create.mechanical_crafting(Item.of('powah:reactor_hardened', 36), [
        'ABBBA',
        'CPPPP',
        'CDDDE',
        'FGMLE',
        'NGOKE',
        'HIIKJ',
        'ABBBA'
    ], {
        A: 'powah:dielectric_casing',
        B: '#forge:storage_blocks/energized_steel',
        C: Item.of('powah:energy_cell_hardened'),
        D: Item.of('powah:thermo_generator_hardened'),
        E: 'thermal:fluid_cell_frame',
        F: 'xnet:advanced_connector_green',
        G: 'xnet:netcable_green',
        H: 'xnet:advanced_connector_red',
        I: 'xnet:netcable_red',
        J: 'xnet:advanced_connector_blue',
        K: 'xnet:netcable_blue',
        L: 'pneumaticcraft:heat_pipe',
        M: 'kubejs:spirit_entropic_gateway',
        N: 'xnet:controller',
        O: Item.of('powah:furnator_hardened'),
        P: 'create:fluid_pipe'
    }).id('kubejs:powah_crafting/reactor_hardened')

    e.remove({ id: "powah:crafting/reactor_blazing" })
    e.recipes.create.mechanical_crafting(Item.of('powah:reactor_blazing', 36), [
        'ABBBA',
        'CPPPP',
        'CDDDE',
        'FGMLE',
        'NGOKE',
        'HIIKJ',
        'ABBBA'
    ], {
        A: 'powah:dielectric_casing',
        B: '#forge:storage_blocks/blazing',
        C: Item.of('powah:energy_cell_blazing'),
        D: Item.of('powah:thermo_generator_blazing'),
        E: 'thermal:fluid_cell_frame',
        F: 'xnet:advanced_connector_green',
        G: 'xnet:netcable_green',
        H: 'xnet:advanced_connector_red',
        I: 'xnet:netcable_red',
        J: 'xnet:advanced_connector_blue',
        K: 'xnet:netcable_blue',
        L: 'pneumaticcraft:heat_pipe',
        M: 'kubejs:spirit_entropic_gateway',
        N: 'xnet:controller',
        O: Item.of('powah:furnator_blazing'),
        P: 'create:fluid_pipe'
    }).id('kubejs:powah_crafting/reactor_blazing')

    e.remove({ id: "powah:crafting/reactor_niotic" })
    e.recipes.create.mechanical_crafting(Item.of('powah:reactor_niotic', 36), [
        'ABBBA',
        'CPPPP',
        'CDDDE',
        'FGMLE',
        'NGOKE',
        'HIIKJ',
        'ABBBA'
    ], {
        A: 'powah:dielectric_casing',
        B: '#forge:storage_blocks/niotic',
        C: Item.of('powah:energy_cell_niotic'),
        D: Item.of('powah:thermo_generator_niotic'),
        E: 'thermal:fluid_cell_frame',
        F: 'xnet:advanced_connector_green',
        G: 'xnet:netcable_green',
        H: 'xnet:advanced_connector_red',
        I: 'xnet:netcable_red',
        J: 'xnet:advanced_connector_blue',
        K: 'xnet:netcable_blue',
        L: 'pneumaticcraft:heat_pipe',
        M: 'kubejs:spirit_entropic_gateway',
        N: 'xnet:controller',
        O: Item.of('powah:furnator_niotic'),
        P: 'create:fluid_pipe'
    }).id('kubejs:powah_crafting/reactor_niotic')

    e.remove({ id: "powah:crafting/reactor_spirited" })
    e.recipes.create.mechanical_crafting(Item.of('powah:reactor_spirited', 36), [
        'ABBBA',
        'CPPPP',
        'CDDDE',
        'FGMLE',
        'NGOKE',
        'HIIKJ',
        'ABBBA'
    ], {
        A: 'powah:dielectric_casing',
        B: '#forge:storage_blocks/spirited',
        C: Item.of('powah:energy_cell_spirited'),
        D: Item.of('powah:thermo_generator_spirited'),
        E: 'thermal:fluid_cell_frame',
        F: 'xnet:advanced_connector_green',
        G: 'xnet:netcable_green',
        H: 'xnet:advanced_connector_red',
        I: 'xnet:netcable_red',
        J: 'xnet:advanced_connector_blue',
        K: 'xnet:netcable_blue',
        L: 'pneumaticcraft:heat_pipe',
        M: 'kubejs:spirit_entropic_gateway',
        N: 'xnet:controller',
        O: Item.of('powah:furnator_spirited'),
        P: 'create:fluid_pipe'
    }).id('kubejs:powah_crafting/reactor_spirited')

    e.remove({ id: "powah:crafting/reactor_nitro" })
    e.recipes.create.mechanical_crafting(Item.of('powah:reactor_nitro', 36), [
        'ABBBA',
        'CPPPP',
        'CDDDE',
        'FGMLE',
        'NGOKE',
        'HIIKJ',
        'ABBBA'
    ], {
        A: 'powah:dielectric_casing',
        B: '#forge:storage_blocks/nitro',
        C: Item.of('powah:energy_cell_nitro'),
        D: Item.of('powah:thermo_generator_nitro'),
        E: 'thermal:fluid_cell_frame',
        F: 'xnet:advanced_connector_green',
        G: 'xnet:netcable_green',
        H: 'xnet:advanced_connector_red',
        I: 'xnet:netcable_red',
        J: 'xnet:advanced_connector_blue',
        K: 'xnet:netcable_blue',
        L: 'pneumaticcraft:heat_pipe',
        M: 'kubejs:spirit_entropic_gateway',
        N: 'xnet:controller',
        O: Item.of('powah:furnator_nitro'),
        P: 'create:fluid_pipe'
    }).id('kubejs:powah_crafting/reactor_nitro')

    e.recipes.create.mechanical_crafting('compactmachines:machine_tiny', [
        'AABAA',
        'ACCCA',
        'DCECF',
        'ACCCA',
        'AAGAA'
    ], {
        A: 'compactmachines:wall',
        B: 'kubejs:replaceme',
        C: 'kubejs:replaceme',
        D: 'kubejs:replaceme',
        E: 'kubejs:replaceme',
        F: 'kubejs:replaceme',
        G: 'kubejs:replaceme'
    }).id('kubejs:mechanical_crafting/compact_machine_tiny')

    e.recipes.create.mechanical_crafting('compactmachines:machine_small', [
        'AABAA',
        'ACCCA',
        'DCECF',
        'ACCCA',
        'AAGAA'
    ], {
        A: 'compactmachines:wall',
        B: 'kubejs:replaceme',
        C: 'kubejs:replaceme',
        D: 'kubejs:replaceme',
        E: 'kubejs:replaceme',
        F: 'kubejs:replaceme',
        G: 'kubejs:replaceme'
    }).id('kubejs:mechanical_crafting/compact_machine_small')

    e.recipes.create.mechanical_crafting('compactmachines:machine_normal', [
        'AABAA',
        'ACCCA',
        'DCECF',
        'ACCCA',
        'AAGAA'
    ], {
        A: 'compactmachines:wall',
        B: 'kubejs:replaceme',
        C: 'kubejs:replaceme',
        D: 'kubejs:replaceme',
        E: 'kubejs:replaceme',
        F: 'kubejs:replaceme',
        G: 'kubejs:replaceme'
    }).id('kubejs:mechanical_crafting/compact_machine_normal')

    e.recipes.create.mechanical_crafting('compactmachines:machine_large', [
        'AABAA',
        'ACCCA',
        'DCECF',
        'ACCCA',
        'AAGAA'
    ], {
        A: 'compactmachines:wall',
        B: 'kubejs:replaceme',
        C: 'kubejs:replaceme',
        D: 'kubejs:replaceme',
        E: 'kubejs:replaceme',
        F: 'kubejs:replaceme',
        G: 'kubejs:replaceme'
    }).id('kubejs:mechanical_crafting/compact_machine_large')

    e.recipes.create.mechanical_crafting('compactmachines:machine_giant', [
        'AABAA',
        'ACCCA',
        'DCECF',
        'ACCCA',
        'AAGAA'
    ], {
        A: 'compactmachines:wall',
        B: 'kubejs:replaceme',
        C: 'kubejs:replaceme',
        D: 'kubejs:replaceme',
        E: 'kubejs:replaceme',
        F: 'kubejs:replaceme',
        G: 'kubejs:replaceme'
    }).id('kubejs:mechanical_crafting/compact_machine_giant')

    e.recipes.create.mechanical_crafting('compactmachines:machine_maximum', [
        'AABAA',
        'ACCCA',
        'DCECF',
        'ACCCA',
        'AAGAA'
    ], {
        A: 'compactmachines:wall',
        B: 'kubejs:replaceme',
        C: 'kubejs:replaceme',
        D: 'kubejs:replaceme',
        E: 'kubejs:replaceme',
        F: 'kubejs:replaceme',
        G: 'kubejs:replaceme'
    }).id('kubejs:mechanical_crafting/compact_machine_maximum')
})
