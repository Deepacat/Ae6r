ServerEvents.recipes(e => {
    e.remove({ id: 'mekanism:fuelwood_heater' })
    e.shaped('mekanism:fuelwood_heater', [
        'BAB',
        'CDC',
        'BAB'
    ], {
        A: '#forge:plates/copper',
        B: 'immersiveengineering:alloybrick',
        C: 'minecraft:blast_furnace',
        D: 'thermal:machine_frame'
    }).id('kubejs:mekanism_fuelwood_heater')

    e.remove({ id: 'mekanism:resistive_heater' })
    e.shaped('mekanism:resistive_heater', [
        'BEB',
        'CDC',
        'BAB'
    ], {
        A: '#forge:circuits/advanced',
        B: 'immersiveengineering:blastbrick_reinforced',
        C: 'immersiveengineering:coil_hv',
        D: '#industrialforegoing:machine_frame/simple',
        E: 'pneumaticcraft:heat_sink'
    }).id('kubejs:mekanism_resistive_heater')

    e.remove({ id: 'mekanism:metallurgic_infuser' })
    e.shaped('mekanism:metallurgic_infuser', [
        'ACA',
        'BDB',
        'AEA'
    ], {
        A: '#forge:gears/osmium',
        B: '#forge:circuits/basic',
        C: 'rftoolspower:blazing_agitator',
        D: 'thermal:machine_bottler',
        E: 'rftoolspower:cell1'
    }).id('kubejs:mekanism_metallurgic_infuser')

    e.remove({ id: 'mekanism:thermal_evaporation/controller' })
    e.shaped('mekanism:thermal_evaporation_controller', [
        'AAA',
        'BCD',
        'AAA'
    ], {
        A: 'mekanism:thermal_evaporation_block',
        B: '#forge:circuits/elite',
        C: '#industrialforegoing:machine_frame/advanced',
        D: 'rftoolsbase:tablet'
    }).id('kubejs:mekanism_thermal_evaporation/controller')

    e.remove({ id: 'mekanism:thermal_evaporation/block' })
    e.shaped(Item.of('2x mekanism:thermal_evaporation_block'), [
        'ADA',
        'BCB',
        'ADA'
    ], {
        A: '#forge:plates/bronze',
        B: 'pneumaticcraft:heat_pipe',
        C: 'immersiveengineering:alloybrick',
        D: '#mekanism:alloys/reinforced'
    }).id('kubejs:mekanism_thermal_evaporation/block')

    e.remove({ id: 'mekanism:thermal_evaporation/valve' })
    e.shaped('mekanism:thermal_evaporation_valve', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'mekanism:thermal_evaporation_block',
        B: 'create:copper_valve_handle',
        C: 'create:fluid_pipe',
        D: 'create:fluid_valve',
        E: '#forge:circuits/elite'
    }).id('kubejs:mekanism_thermal_evaporation/valve')

    e.remove({ id: 'mekanism:structural_glass' })
    e.shaped(Item.of('5x mekanism:structural_glass'), [
        'CBC',
        'BCB',
        'CBC'
    ], {
        B: '#forge:plates/aluminum',
        C: '#thermal:glass/hardened'
    }).id('kubejs:mekanism_structural_glass')

    e.remove({ id: 'mekanism:steel_casing' })
    e.shaped('mekanism:steel_casing', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/steel',
        B: '#mekanism:alloys/infused',
        C: 'thermal:machine_frame'
    }).id('kubejs:mekanism_steel_casing')

    e.remove({ id: 'mekanism:boiler_valve' })
    e.shaped('mekanism:boiler_valve', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'mekanism:boiler_casing',
        B: 'create:copper_valve_handle',
        C: 'create:fluid_pipe',
        D: 'create:fluid_valve',
        E: '#forge:circuits/elite'
    }).id('kubejs:mekanism_boiler_valve')

    e.remove({ id: 'mekanism:boiler_casing' })
    e.shaped(Item.of('2x mekanism:boiler_casing'), [
        'ADA',
        'BCB',
        'ADA'
    ], {
        A: '#forge:plates/constantan',
        B: 'pneumaticcraft:heat_pipe',
        C: 'mekanism:steel_casing',
        D: '#mekanism:alloys/reinforced'
    }).id('kubejs:mekanism_boiler_casing')

    e.remove({ id: 'mekanism:superheating_element' })
    e.shaped('mekanism:superheating_element', [
        'AAA',
        'DCD',
        'BDB'
    ], {
        A: 'pneumaticcraft:heat_sink',
        B: 'pneumaticcraft:heat_pipe',
        C: 'immersiveengineering:alloybrick',
        D: 'immersiveengineering:coil_mv'
    }).id('kubejs:mekanism_superheating_element')

    e.remove({ id: 'mekanism:pressure_disperser' })
    e.shaped('mekanism:pressure_disperser', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'pneumaticcraft:advanced_pressure_tube',
        B: 'mekanism:steel_casing'
    }).id('kubejs:mekanism_pressure_disperser')

    e.remove({ id: 'mekanism:dynamic_valve' })
    e.shaped('mekanism:dynamic_valve', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'mekanism:dynamic_tank',
        B: 'create:copper_valve_handle',
        C: 'create:fluid_pipe',
        D: 'create:fluid_valve',
        E: 'kubejs:replaceme'
    }).id('kubejs:mekanism_dynamic_valve')

    e.remove({ id: 'mekanism:dynamic_tank' })
    e.shaped(Item.of('8x mekanism:dynamic_tank'), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'immersiveengineering:sheetmetal_colored_black',
        B: '#immersiveengineering:scaffoldings/aluminum'
    }).id('kubejs:mekanism_dynamic_tank')

    e.remove({ id: 'mekanismgenerators:turbine/casing' })
    e.shaped(Item.of('2x mekanismgenerators:turbine_casing'), [
        'ADA',
        'BCB',
        'ADA'
    ], {
        A: '#forge:plates/aluminum',
        B: 'mekanism:hdpe_sheet',
        C: 'mekanism:steel_casing',
        D: '#mekanism:alloys/reinforced'
    }).id('kubejs:mekanismgenerators_turbine/casing')

    e.remove({ id: 'mekanismgenerators:turbine/valve' })
    e.shaped('mekanismgenerators:turbine_valve', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'mekanismgenerators:turbine_casing',
        B: 'create:copper_valve_handle',
        C: 'create:fluid_pipe',
        D: 'create:fluid_valve',
        E: '#forge:circuits/elite'
    }).id('kubejs:mekanismgenerators_turbine/valve')

    e.remove({ id: 'mekanismgenerators:turbine/vent' })
    e.shaped(Item.of('2x mekanismgenerators:turbine_vent'), [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'mekanismgenerators:turbine_casing',
        B: 'create:fluid_pipe',
        C: 'engineersdecor:straight_pipe_valve'
    }).id('kubejs:mekanismgenerators_turbine/vent')

    e.remove({ id: 'mekanismgenerators:saturating_condenser' })
    e.shaped('mekanismgenerators:saturating_condenser', [
        'BAB',
        'BCB',
        'BBB'
    ], {
        A: 'pneumaticcraft:heat_sink',
        B: 'create:fluid_pipe',
        C: 'mekanism:steel_casing'
    }).id('kubejs:mekanismgenerators_saturating_condenser')

    e.remove({ id: 'mekanismgenerators:electromagnetic_coil' })
    e.shaped('mekanismgenerators:electromagnetic_coil', [
        'CAC',
        'ABA',
        'CAC'
    ], {
        A: 'immersiveengineering:coil_lv',
        B: '#industrialforegoing:machine_frame/supreme',
        C: 'mekanism:basic_induction_cell'
    }).id('kubejs:mekanismgenerators_electromagnetic_coil')

    e.remove({ id: 'mekanismgenerators:fission_reactor/fuel_assembly' })
    e.shaped('mekanismgenerators:fission_fuel_assembly', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: '#forge:rods/cobalt',
        B: 'mekanism:elite_pressurized_tube',
        C: 'thermal:machine_frame'
    }).id('kubejs:mekanismgenerators_fission_reactor/fuel_assembly')

    e.remove({ id: 'mekanismgenerators:fission_reactor/control_rod_assembly' })
    e.shaped('mekanismgenerators:control_rod_assembly', [
        'DCD',
        'EFE',
        'ABA'
    ], {
        A: '#forge:rods/cobalt',
        B: 'mekanism:elite_pressurized_tube',
        C: 'thermal:machine_frame',
        D: 'thermal:redstone_servo',
        E: '#forge:gears/cobalt',
        F: '#forge:circuits/elite'
    }).id('kubejs:mekanismgenerators_fission_reactor/control_rod_assembly')

    e.remove({ id: 'mekanism:sps_port' })
    e.shaped(Item.of('2x mekanism:sps_port'), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanism:sps_casing',
        B: 'mekanism:ultimate_universal_cable',
        C: 'mekanism:ultimate_pressurized_tube',
        D: '#forge:circuits/ultimate'
    }).id('kubejs:mekanism_sps_port')

    e.remove({ id: 'mekanismgenerators:fission_reactor/port' })
    e.shaped('mekanismgenerators:fission_reactor_port', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'mekanismgenerators:fission_reactor_casing',
        B: 'create:copper_valve_handle',
        C: 'create:fluid_pipe',
        D: 'create:fluid_valve',
        E: '#forge:circuits/elite'
    }).id('kubejs:mekanismgenerators_fission_reactor/port')

    e.remove({ id: 'mekanism:laser' })
    e.shaped('mekanism:laser', [
        ' A ',
        'BAB',
        'CDC'
    ], {
        A: '#forge:gems/nitro',
        B: '#mekanism:alloys/infused',
        C: 'mekanism:advanced_induction_cell',
        D: '#industrialforegoing:machine_frame/simple'
    }).id('kubejs:mekanism_laser')

    e.remove({ id: 'mekanism:induction/port' })
    e.shaped(Item.of('2x mekanism:induction_port'), [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'mekanism:induction_casing',
        B: '#forge:circuits/elite',
        C: 'rftoolsbase:tablet'
    }).id('kubejs:mekanism_induction/port')

    e.remove({ id: 'mekanism:electrolytic_separator' })
    e.shaped('mekanism:electrolytic_separator', [
        'ABA',
        'CDC',
        'ACA'
    ], {
        A: '#forge:gears/osmium',
        B: 'mekanism:electrolytic_core',
        C: Item.of('thermal:fluid_cell'),
        D: 'thermal:machine_frame'
    }).id('kubejs:mekanism_electrolytic_separator')

    e.remove({ id: 'mekanism:electrolytic_core' })
    e.shaped('mekanism:electrolytic_core', [
        'ABA',
        'CBD',
        'ABA'
    ], {
        A: 'immersiveengineering:wirecoil_copper',
        B: 'thermal:diving_fabric',
        C: '#forge:plates/zinc',
        D: '#forge:plates/aluminum'
    }).id('kubejs:mekanism_electrolytic_core')

    e.remove({ id: 'mekanism:jetpack' })
    e.shaped('mekanism:jetpack', [
        'ABA',
        'CDC',
        'E E'
    ], {
        A: '#forge:plates/bronze',
        B: 'kubejs:replaceme',
        C: 'create:copper_backtank',
        D: 'thermal:hazmat_chestplate',
        E: 'immersiveengineering:toolupgrade_chemthrower_focus'
    }).id('kubejs:mekanism_jetpack')

    e.remove({ id: 'mekanism:jetpack_armored' })
    e.shaped('mekanism:jetpack_armored', [
        'A A',
        'BCB',
        ' D '
    ], {
        A: '#forge:gears/aluminum',
        B: '#forge:plates/signalum',
        C: ['mekanismtools:steel_chestplate', 'immersiveengineering:armor_steel_chest'],
        D: 'mekanism:jetpack'
    }).id('kubejs:mekanism_jetpack_armored')

    e.remove({ id: 'mekanismgenerators:solar_panel' })
    e.shaped('mekanismgenerators:solar_panel', [
        'AAA',
        'AAA',
        'BBB'
    ], {
        A: 'quark:blue_framed_glass_pane',
        B: 'powah:thermoelectric_plate'
    }).id('kubejs:mekanismgenerators_solar_panel')

    e.remove({ id: 'mekanismgenerators:generator/solar' })
    e.shaped('mekanismgenerators:solar_generator', [
        'ABA',
        'ACA',
        ' D '
    ], {
        A: 'mekanismgenerators:solar_panel',
        B: 'kubejs:replaceme',
        C: 'thermal:redstone_servo',
        D: 'engineersdecor:thick_steel_pole_head'
    }).id('kubejs:mekanismgenerators_generator/solar')

    e.remove({ id: 'mekanismgenerators:generator/advanced_solar' })
    e.shaped('mekanismgenerators:advanced_solar_generator', [
        'ACA',
        'ABA',
        ' D '
    ], {
        A: 'mekanismgenerators:solar_generator',
        B: 'engineersdecor:thick_steel_pole',
        C: 'thermal:redstone_servo',
        D: 'engineersdecor:thick_steel_pole_head'
    }).id('kubejs:mekanismgenerators_generator/advanced_solar')

    e.remove({ id: 'mekanismgenerators:reactor/port' })
    e.shaped(Item.of('2x mekanismgenerators:fusion_reactor_port'), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'mekanismgenerators:fusion_reactor_frame',
        B: 'mekanism:ultimate_universal_cable',
        C: 'mekanism:ultimate_pressurized_tube',
        D: '#forge:circuits/ultimate'
    }).id('kubejs:mekanismgenerators_reactor/port')

    e.remove({ id: 'mekanism:laser_amplifier' })
    e.shaped('mekanism:laser_amplifier', [
        'ABA',
        'BCD',
        'ABA'
    ], {
        A: '#mekanism:alloys/infused',
        B: 'mekanismgenerators:laser_focus_matrix',
        C: 'mekanism:basic_induction_cell',
        D: 'industrialforegoing:laser_lens14'
    }).id('kubejs:mekanism_laser_amplifier')

    e.remove({ id: 'mekanismgenerators:laser_focus_matrix' })
    e.shaped('mekanismgenerators:laser_focus_matrix', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: 'mekanismgenerators:reactor_glass',
        B: 'industrialforegoing:laser_lens14'
    }).id('kubejs:mekanismgenerators_laser_focus_matrix')

    e.remove({ id: 'mekanism:rotary_condensentrator' })
    e.shaped('mekanism:rotary_condensentrator', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: 'immersiveengineering:steel_wallmount',
        B: 'immersiveengineering:turntable',
        C: 'mekanism:basic_chemical_tank',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'mekanism:basic_fluid_tank',
        F: 'kubejs:replaceme',
        G: 'thermal:rf_coil'
    }).id('kubejs:mekanism_rotary_condensentrator')

    e.remove({ id: 'mekanism:enrichment_chamber' })
    e.shaped('mekanism:enrichment_chamber', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0}'),
        B: 'minecraft:cauldron',
        C: 'mekanism:basic_induction_cell',
        D: '#industrialforegoing:machine_frame/simple',
        E: '#forge:circuits/basic',
        F: 'rftoolspower:cell1'
    }).id('kubejs:mekanism_enrichment_chamber')

    e.remove({ id: 'mekanism:crusher' })
    e.shaped('mekanism:crusher', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:gears/osmium',
        B: 'engineersdecor:factory_hopper',
        C: '#sophisticatedbackpacks:upgrades/advanced_filter',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'kubejs:replaceme',
        F: 'thermal:rf_coil'
    }).id('kubejs:mekanism_crusher')

    e.remove({ id: 'mekanism:energized_smelter' })
    e.shaped('mekanism:energized_smelter', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'immersiveengineering:blastbrick_reinforced',
        B: 'minecraft:cauldron',
        C: 'immersiveengineering:coil_hv',
        D: '#industrialforegoing:machine_frame/simple',
        E: '#forge:circuits/basic',
        F: 'rftoolspower:cell1'
    }).id('kubejs:mekanism_energized_smelter')

    e.remove({ id: 'mekanism:precision_sawmill' })
    e.shaped('mekanism:precision_sawmill', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:rotation_speed_controller',
        B: 'immersiveengineering:rockcutter',
        C: 'immersiveengineering:heavy_engineering',
        D: '#industrialforegoing:machine_frame/simple',
        E: '#forge:circuits/basic',
        F: 'rftoolspower:cell1'
    }).id('kubejs:mekanism_precision_sawmill')

    e.remove({ id: 'mekanism:nutritional_liquifier' })
    e.shaped('mekanism:nutritional_liquifier', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'immersiveengineering:steel_wallmount',
        B: 'immersiveengineering:turntable',
        C: 'mekanism:advanced_chemical_tank',
        D: '#industrialforegoing:machine_frame/simple',
        E: '#forge:circuits/basic',
        F: 'rftoolspower:cell1'
    }).id('kubejs:mekanism_nutritional_liquifier')

    e.remove({ id: 'mekanism:electric_pump' })
    e.shaped('mekanism:electric_pump', [
        'ABC',
        'ADC',
        'AEC'
    ], {
        A: 'mekanism:dynamic_tank',
        B: 'create:mechanical_pump',
        C: 'create:fluid_pipe',
        D: 'supplementaries:cog_block',
        E: 'immersiveengineering:turntable'
    }).id('kubejs:mekanism_electric_pump')

    e.remove({ id: 'mekanism:fluidic_plenisher' })
    e.shaped('mekanism:fluidic_plenisher', [
        'AEC',
        'ADC',
        'ABC'
    ], {
        A: 'mekanism:dynamic_tank',
        B: 'create:mechanical_pump',
        C: 'create:fluid_pipe',
        D: 'supplementaries:cog_block',
        E: 'immersiveengineering:turntable'
    }).id('kubejs:mekanism_fluidic_plenisher')

    e.remove({ id: 'mekanism:purification_chamber' })
    e.shaped('mekanism:purification_chamber', [
        'AAA',
        'BDC',
        'EFE'
    ], {
        A: 'architects_palette:abyssaline_lamp',
        B: 'glassential:glass_dark',
        C: 'mekanism:advanced_chemical_tank',
        D: '#industrialforegoing:machine_frame/advanced',
        E: '#forge:circuits/advanced',
        F: 'rftoolspower:cell2'
    }).id('kubejs:mekanism_purification_chamber')

    e.remove({ id: 'mekanism:pressurized_reaction_chamber' })
    e.shaped('mekanism:pressurized_reaction_chamber', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#thermal:glass/hardened',
        B: 'mekanism:basic_fluid_tank',
        C: 'mekanism:basic_chemical_tank',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'kubejs:replaceme',
        F: 'thermal:rf_coil'
    }).id('kubejs:mekanism_pressurized_reaction_chamber')

    e.remove({ id: 'mekanism:chemical_injection_chamber' })
    e.shaped('mekanism:chemical_injection_chamber', [
        'ABB',
        'CDG',
        'EFE'
    ], {
        A: 'immersiveengineering:toolupgrade_chemthrower_focus',
        B: 'mekanism:advanced_pressurized_tube',
        C: 'create:basin',
        D: '#industrialforegoing:machine_frame/advanced',
        E: '#forge:circuits/advanced',
        F: 'rftoolspower:cell2',
        G: 'mekanism:advanced_chemical_tank'
    }).id('kubejs:mekanism_chemical_injection_chamber')

    e.remove({ id: 'mekanism:chemical_crystallizer' })
    e.shaped('mekanism:chemical_crystallizer', [
        'ABC',
        'DEF',
        'GHG'
    ], {
        A: 'mekanism:advanced_pressurized_tube',
        B: 'mekanismgenerators:saturating_condenser',
        C: 'create:basin',
        D: 'mekanism:advanced_chemical_tank',
        E: '#industrialforegoing:machine_frame/advanced',
        F: 'thermal:machine_chiller',
        G: '#forge:circuits/advanced',
        H: 'rftoolspower:cell2'
    }).id('kubejs:mekanism_chemical_crystallizer')

    e.remove({ id: 'mekanism:isotopic_centrifuge' })
    e.shaped('mekanism:isotopic_centrifuge', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'kubejs:replaceme',
        B: 'mekanism:elite_chemical_tank',
        C: 'mekanismgenerators:reactor_glass',
        D: 'kubejs:replaceme',
        E: '#forge:circuits/elite',
        F: 'rftoolspower:cell3'
    }).id('kubejs:mekanism_isotopic_centrifuge')

    e.remove({ id: 'mekanism:chemical_oxidizer' })
    e.shaped('mekanism:chemical_oxidizer', [
        'ABC',
        'DEC',
        'FGF'
    ], {
        A: 'mekanism:elite_mechanical_pipe',
        B: 'mekanism:electrolytic_separator',
        C: 'mekanism:elite_pressurized_tube',
        D: 'thermal:device_water_gen',
        E: 'mekanism:chemical_injection_chamber',
        F: '#forge:circuits/elite',
        G: 'rftoolspower:cell3'
    }).id('kubejs:mekanism_chemical_oxidizer')

    e.remove({ id: 'mekanism:chemical_infuser' })
    e.shaped('mekanism:chemical_infuser', [
        'ABA',
        'BCB',
        'DED'
    ], {
        A: 'rftoolspower:blazing_agitator',
        B: 'mekanism:elite_chemical_tank',
        C: '#industrialforegoing:machine_frame/advanced',
        D: '#forge:circuits/elite',
        E: 'rftoolspower:cell3'
    }).id('kubejs:mekanism_chemical_infuser')

    e.remove({ id: 'mekanism:chemical_dissolution_chamber' })
    e.shaped('mekanism:chemical_dissolution_chamber', [
        'ABB',
        'CDB',
        'EFE'
    ], {
        A: 'mekanism:elite_chemical_tank',
        B: 'mekanism:elite_pressurized_tube',
        C: 'industrialforegoing:dissolution_chamber',
        D: '#industrialforegoing:machine_frame/advanced',
        E: '#forge:circuits/elite',
        F: 'rftoolspower:cell3'
    }).id('kubejs:mekanism_chemical_dissolution_chamber')

    e.remove({ id: 'mekanism:chemical_washer' })
    e.shaped('mekanism:chemical_washer', [
        'ABB',
        'CDA',
        'EFE'
    ], {
        A: 'mekanism:elite_chemical_tank',
        B: 'mekanism:elite_pressurized_tube',
        C: 'mekanism:elite_fluid_tank',
        D: '#industrialforegoing:machine_frame/supreme',
        E: '#forge:circuits/elite',
        F: 'mekanism:elite_induction_provider'
    }).id('kubejs:mekanism_chemical_washer')

    e.remove({ id: 'mekanism:antiprotonic_nucleosynthesizer' })
    e.shaped('mekanism:antiprotonic_nucleosynthesizer', [
        'ABA',
        'CDC',
        'EBE'
    ], {
        A: '#forge:pellets/antimatter',
        B: '#forge:circuits/ultimate',
        C: 'mekanism:supercharged_coil',
        D: 'mekanism:sps_casing',
        E: 'mekanism:ultimate_induction_provider'
    }).id('kubejs:mekanism_antiprotonic_nucleosynthesizer')

    e.remove({ id: 'mekanismgenerators:generator/heat' })
    e.shaped('mekanismgenerators:heat_generator', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'immersiveengineering:blastbrick_reinforced',
        B: 'powah:thermoelectric_plate',
        C: 'minecraft:blast_furnace'
    }).id('kubejs:mekanismgenerators_generator/heat')

    e.remove({ id: 'mekanismgenerators:generator/gas_burning' })
    e.shaped('mekanismgenerators:gas_burning_generator', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:gears/compressed_iron',
        B: 'mekanism:basic_chemical_tank',
        C: 'pneumaticcraft:turbine_rotor',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'immersiveengineering:coil_lv',
        F: 'thermal:rf_coil'
    }).id('kubejs:mekanismgenerators_generator/gas_burning')

    e.remove({ id: 'mekanismgenerators:generator/bio' })
    e.shaped('mekanismgenerators:bio_generator', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:gears/invar',
        B: 'mekanism:basic_fluid_tank',
        C: 'create:propeller',
        D: '#industrialforegoing:machine_frame/pity',
        E: 'immersiveengineering:coil_lv',
        F: 'thermal:rf_coil'
    }).id('kubejs:mekanismgenerators_generator/bio')

    e.remove({ id: 'mekanism:free_runners' })
    e.shaped('mekanism:free_runners', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'create:precision_mechanism',
        B: 'immersiveengineering:capacitor_lv',
        C: '#forge:gears/bronze',
        D: 'immersiveengineering:toolupgrade_drill_lube',
        E: 'immersiveengineering:component_steel',
        F: 'immersiveengineering:armor_faraday_feet'
    }).id('kubejs:mekanism_free_runners')

    e.remove({ id: 'mekanism:electric_bow' })
    e.shaped('mekanism:electric_bow', [
        ' BC',
        'A C',
        ' BC'
    ], {
        A: 'powah:dielectric_rod',
        B: 'powah:capacitor_hardened',
        C: '#forge:wires/aluminum'
    }).id('kubejs:mekanism_electric_bow')

    e.remove({ id: 'mekanism:configurator' })
    e.shaped('mekanism:configurator', [
        '  A',
        ' B ',
        'C  '
    ], {
        A: '#forge:rods/lapis',
        B: 'thermal:rf_coil',
        C: '#forge:rods/steel'
    }).id('kubejs:mekanism_configurator')

    e.remove({ id: 'mekanism:chargepad' })
    e.shaped('mekanism:chargepad', [
        'AAA',
        'BCB'
    ], {
        A: 'minecraft:polished_blackstone_pressure_plate',
        B: '#forge:ingots/steel',
        C: 'thermal:rf_coil'
    }).id('kubejs:mekanism_chargepad')

    e.remove({ id: 'mekanism:network_reader' })
    e.shaped('mekanism:network_reader', [
        ' B ',
        'ACA',
        ' B '
    ], {
        A: '#forge:alloys/advanced',
        B: '#forge:ingots/steel',
        C: 'thermal:rf_coil'
    }).id('kubejs:mekanism_network_reader')

    e.remove({ id: 'mekanism:portable_teleporter' })
    e.shaped('mekanism:portable_teleporter', [
        'ABA',
        'CDC'
    ], {
        A: 'thermal:rf_coil',
        B: 'mekanism:teleportation_core',
        C: '#forge:plates/steel',
        D: 'rftoolsbase:tablet'
    }).id('kubejs:mekanism_portable_teleporter')

    e.remove({ id: 'mekanism:formulaic_assemblicator' })
    e.shaped('mekanism:formulaic_assemblicator', [
        'ABA',
        'BCB',
        'DED'
    ], {
        A: 'create:electron_tube',
        B: '#forge:gears/brass',
        C: 'create:mechanical_crafter',
        D: '#forge:plates/lead',
        E: 'thermal:rf_coil'
    }).id('kubejs:mekanism_formulaic_assemblicator')

    e.remove({ id: 'mekanism:crafting_formula' })
    e.shaped(Item.of('8x mekanism:crafting_formula'), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:paper',
        B: 'create:electron_tube'
    }).id('kubejs:mekanism_crafting_formula')

    e.remove({ id: 'mekanism:bin/basic' })
    e.shaped('mekanism:basic_bin', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:lime_terracotta',
        B: 'minecraft:smooth_stone',
        C: '#forge:ingots/copper'
    }).id('kubejs:mekanism_bin/basic')

    e.remove({ id: 'mekanism:bin/advanced' })
    e.shaped('mekanism:advanced_bin', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:red_terracotta',
        B: 'minecraft:smooth_stone',
        C: '#forge:ingots/bronze'
    }).id('kubejs:mekanism_bin/advanced')

    e.remove({ id: 'mekanism:bin/elite' })
    e.shaped('mekanism:elite_bin', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:light_blue_terracotta',
        B: 'minecraft:smooth_stone',
        C: '#forge:ingots/brass'
    }).id('kubejs:mekanism_bin/elite')

    e.remove({ id: 'mekanism:bin/ultimate' })
    e.shaped('mekanism:ultimate_bin', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'minecraft:blue_terracotta',
        B: 'minecraft:smooth_stone',
        C: '#forge:ingots/hepatizon'
    }).id('kubejs:mekanism_bin/ultimate')

    e.remove({ id: 'mekanism:logistical_sorter' })
    e.shaped('mekanism:logistical_sorter', [
        'ABA',
        'ACA',
        'EDE'
    ], {
        A: 'immersiveengineering:sheetmetal_colored_black',
        B: 'kubejs:replaceme',
        C: 'kubejs:replaceme',
        D: 'kubejs:replaceme',
        E: '#forge:plates/iron_osmium'
    }).id('kubejs:mekanism_logistical_sorter')

    e.remove({ id: 'mekanism:transmitter/logistical_transporter/basic' })
    e.shaped(Item.of('8x mekanism:basic_logistical_transporter'), [
        'ABA'
    ], {
        A: '#forge:ingots/steel',
        B: 'pneumaticcraft:logistics_core'
    }).id('kubejs:mekanism_transmitter/logistical_transporter/basic')

    e.remove({ id: 'mekanism:painting_machine' })
    e.shaped('mekanism:painting_machine', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:plastic',
        B: 'create:nozzle',
        C: 'mekanism:dye_base',
        D: '#industrialforegoing:machine_frame/pity',
        E: '#forge:gears/osmium',
        F: 'thermal:rf_coil'
    }).id('kubejs:mekanism_painting_machine')

    e.remove({ id: 'mekanism:pigment_mixer' })
    e.shaped('mekanism:pigment_mixer', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:plastic',
        B: 'immersiveengineering:turntable',
        C: 'mekanism:hdpe_rod',
        D: '#industrialforegoing:machine_frame/pity',
        E: '#forge:gears/osmium',
        F: 'thermal:rf_coil'
    }).id('kubejs:mekanism_pigment_mixer')

    e.remove({ id: 'mekanism:pigment_extractor' })
    e.shaped('mekanism:pigment_extractor', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:plastic',
        B: 'kubejs:replaceme',
        C: 'mekanism:basic_fluid_tank',
        D: '#industrialforegoing:machine_frame/pity',
        E: '#forge:gears/osmium',
        F: 'thermal:rf_coil'
    }).id('kubejs:mekanism_pigment_extractor')

    e.remove({ id: 'mekanism:security_desk' })
    e.shaped('mekanism:security_desk', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'rftoolsbase:tablet',
        B: 'kubejs:replaceme',
        C: '#industrialforegoing:machine_frame/simple',
        D: '#forge:circuits/advanced',
        E: 'rftoolspower:cell1'
    }).id('kubejs:mekanism_security_desk')

    e.remove({ id: 'mekanism:modification_station' })
    e.shaped('mekanism:modification_station', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'rftoolsbase:tablet',
        B: 'pneumaticcraft:assembly_io_unit_import',
        C: '#industrialforegoing:machine_frame/simple',
        D: '#forge:circuits/advanced',
        E: 'rftoolspower:cell1'
    }).id('kubejs:mekanism_modification_station')
})