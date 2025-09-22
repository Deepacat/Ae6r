ServerEvents.recipes(e => {
    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '4x pneumaticcraft:ingot_iron_compressed'
        ],
        [
            Ingredient.of('#forge:ingots/steel', 2),
            Ingredient.of('#forge:tar', 2),
            Ingredient.of('#forge:obsidian')
        ], 2
    ).id('kubejs:pneumaticcraft/pressure_chamber/compressed_iron_ingot')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '4x pneumaticcraft:compressed_iron_block'
        ],
        [
            Ingredient.of('#forge:storage_blocks/steel', 2),
            Ingredient.of('#forge:tar'),
            Ingredient.of('#forge:obsidian', 9)
        ], 2
    ).id('kubejs:pneumaticcraft/pressure_chamber/compressed_iron_block')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:replaceme'
        ],
        [
            '4x minecraft:snow_block'
        ], 1.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/dense_snow')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'minecraft:ice'
        ],
        [
            '4x kubejs:replaceme'
        ], 1.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/ice')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '2x kubejs:replaceme'
        ],
        [
            Ingredient.of('#forge:ingots/pewter', 4),
            '4x kubejs:replaceme',
            '4x tconstruct:seared_brick',
            'thermal:machine_frame'
        ], 2.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/replaceme')

    e.remove({ id: "powah:crafting/binding_card" })
    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'powah:binding_card'
        ],
        [
            'powah:blank_card',
            Ingredient.of('#mekanism:enriched/redstone'),
            'powah:ender_core'
        ], 4
    ).id('kubejs:pneumaticcraft/pressure_chamber/crafting/binding_card')

    e.remove({ id: "powah:crafting/aerial_pearl" })
    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'powah:aerial_pearl'
        ],
        [
            Ingredient.of('#forge:alloys/ultimate'),
            'powah:dielectric_paste',
            'rftoolsbase:infused_enderpearl'
        ], 4
    ).id('kubejs:pneumaticcraft/pressure_chamber/crafting/aerial_pearl')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '2x pneumaticcraft:transistor'
        ],
        [
            Ingredient.of('#forge:wires/electrum'),
            '2x kubejs:replaceme',
            'powah:dielectric_paste',
            Ingredient.of('#pneumaticcraft:plastic_sheets')
        ], 1
    ).id('kubejs:pneumaticcraft/pressure_chamber/transistor')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '2x pneumaticcraft:capacitor'
        ],
        [
            Ingredient.of('#forge:wires/electrum'),
            Ingredient.of('#forge:plates/signalum'),
            Ingredient.of('#forge:plates/aluminum'),
            'powah:dielectric_paste',
            Ingredient.of('#pneumaticcraft:plastic_sheets')
        ], 1
    ).id('kubejs:pneumaticcraft/pressure_chamber/capacitor')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'pneumaticcraft:printed_circuit_board'
        ],
        [
            'pneumaticcraft:unassembled_pcb',
            '2x pneumaticcraft:capacitor',
            '2x pneumaticcraft:transistor',
            'kubejs:replaceme',
            Ingredient.of('#forge:wires/lead')
        ], 4
    ).id('kubejs:pneumaticcraft/pressure_chamber/printed_circuit_board')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '6x pneumaticcraft:empty_pcb'
        ],
        [
            Ingredient.of('#forge:plates/copper'),
            '6x fluxnetworks:flux_dust',
            Ingredient.of('#pneumaticcraft:plastic_sheets', 2)
        ], 1.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/empty_pcb')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'pneumaticcraft:turbine_blade'
        ],
        [
            Ingredient.of('#forge:plates/invar'),
            'fluxnetworks:flux_dust',
            'thermal:redstone_servo'
        ], 1
    ).id('kubejs:pneumaticcraft/pressure_chamber/turbine_blade')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '3x integrateddynamics:variable_transformer_output'
        ],
        [
            '3x integrateddynamics:variable',
            'kubejs:replaceme',
            'fluxnetworks:flux_dust'
        ], 2
    ).id('kubejs:pneumaticcraft/pressure_chamber/variable_transformer_output')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '3x integrateddynamics:variable_transformer_input'
        ],
        [
            '3x integrateddynamics:variable',
            'kubejs:replaceme',
            'fluxnetworks:flux_dust'
        ], 2
    ).id('kubejs:pneumaticcraft/pressure_chamber/variable_transformer_input')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:memory_advanced_empty'
        ],
        [
            '2x kubejs:memory_basic_empty',
            'fluxnetworks:flux_dust'
        ], 4
    ).id('kubejs:pneumaticcraft/pressure_chamber/memory_advanced_empty')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:memory_elite_empty'
        ],
        [
            '2x kubejs:memory_advanced_empty',
            'fluxnetworks:flux_dust'
        ], 4
    ).id('kubejs:pneumaticcraft/pressure_chamber/memory_elite_empty')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:memory_ultimate_empty'
        ],
        [
            '2x kubejs:memory_elite_empty',
            'fluxnetworks:flux_dust'
        ], 4
    ).id('kubejs:pneumaticcraft/pressure_chamber/memory_ultimate_empty')

    e.remove({ id: "mekanismgenerators:turbine/blade" })
    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'mekanismgenerators:turbine_blade'
        ],
        [
            Ingredient.of('#mekanism:alloys/reinforced', 3),
            'pneumaticcraft:turbine_rotor'
        ], 4
    ).id('kubejs:pneumaticcraft/pressure_chamber/turbine/blade')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '3x kubejs:astrogro'
        ],
        [
            'kubejs:replaceme',
            Ingredient.of('#forge:dusts/starmetal')
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/astrogro')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:diy_arc_furnace'
        ],
        [
            '2x immersiveengineering:blastbrick_reinforced',
            'immersiveengineering:light_engineering',
            '5x immersiveengineering:heavy_engineering',
            Ingredient.of('#immersiveengineering:scaffoldings/steel', 5),
            Ingredient.of('#forge:storage_blocks/steel', 6),
            Ingredient.of('#forge:sheetmetals/steel'),
            'minecraft:cauldron',
            'immersiveengineering:rs_engineering',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/diy_arc_furnace')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:diy_pumpjack'
        ],
        [
            Ingredient.of('#immersiveengineering:scaffoldings/steel'),
            '2x immersiveengineering:light_engineering',
            '6x immersiveengineering:treated_fence',
            'immersiveengineering:rs_engineering',
            '2x immersiveengineering:heavy_engineering',
            Ingredient.of('#forge:storage_blocks/steel', 2),
            Ingredient.of('#forge:sheetmetals/steel', 4),
            '4x immersiveengineering:fluid_pipe',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/diy_pumpjack')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:diy_distillation_tower'
        ],
        [
            Ingredient.of('#immersiveengineering:scaffoldings/steel', 4),
            '4x immersiveengineering:heavy_engineering',
            'immersiveengineering:rs_engineering',
            Ingredient.of('#forge:sheetmetals/iron', 6),
            'immersiveengineering:fluid_pipe',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/diy_distillation_tower')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:diy_excavator'
        ],
        [
            Ingredient.of('#immersiveengineering:scaffoldings/steel', 2),
            Ingredient.of('#forge:sheetmetals/steel'),
            '3x immersiveengineering:radiator',
            '9x immersiveengineering:light_engineering',
            'immersiveengineering:rs_engineering',
            '4x immersiveengineering:heavy_engineering',
            Ingredient.of('#forge:storage_blocks/steel', 9),
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/diy_excavator')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:mining_gadget_kit'
        ],
        [
            Ingredient.of('#mininggadgets:mininggadgets'),
            'mininggadgets:upgrade_fortune_3',
            'mininggadgets:upgrade_efficiency_5',
            'mininggadgets:upgrade_battery_3',
            'mininggadgets:upgrade_silk',
            'mininggadgets:upgrade_size_1',
            'mininggadgets:upgrade_magnet',
            'mininggadgets:upgrade_range_3',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/mining_gadget_kit')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:flux_bore_kit'
        ],
        [
            'thermal:flux_drill',
            'thermal:upgrade_augment_3',
            '3x thermal:area_radius_augment',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/flux_bore_kit')

    // e.recipes.pneumaticcraft.pressure_chamber(
    //     [
    //         'kubejs:diy_pedestal_quarry'
    //     ],
    //     [
    //         'pedestals:pedestal/stone333',
    //         'pedestals:coin/quarry',
    //         'pedestals:bookspeed',
    //         'pedestals:bookrange',
    //         'pedestals:bookarea',
    //         'pedestals:bookcapacity',
    //         'mekanism:cardboard_box'
    //     ], 4.5
    // ).id('kubejs:pneumaticcraft/pressure_chamber/diy_pedestal_quarry')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:diy_mekasuit_helmet'
        ],
        [
            'mekanism:mekasuit_helmet',
            '2x mekanism:module_energy_unit',
            '4x mekanism:module_vision_enhancement_unit',
            'mekanism:module_inhalation_purification_unit',
            'mekanism:module_nutritional_injection_unit',
            '4x mekanism:module_electrolytic_breathing_unit',
            'mekanism:module_laser_dissipation_unit',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/diy_mekasuit_helmet')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:diy_mekasuit_bodyarmor'
        ],
        [
            'mekanism:mekasuit_bodyarmor',
            '2x mekanism:module_energy_unit',
            'mekanism:module_geiger_unit',
            'mekanism:module_gravitational_modulating_unit',
            'mekanism:module_dosimeter_unit',
            'mekanism:module_laser_dissipation_unit',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/diy_mekasuit_bodyarmor')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:diy_mekasuit_pants'
        ],
        [
            'mekanism:mekasuit_pants',
            '2x mekanism:module_energy_unit',
            '8x mekanismgenerators:module_geothermal_generator_unit',
            'mekanism:module_laser_dissipation_unit',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/diy_mekasuit_pants')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:diy_mekasuit_boots'
        ],
        [
            'mekanism:mekasuit_boots',
            '2x mekanism:module_energy_unit',
            '4x mekanism:module_hydraulic_propulsion_unit',
            'mekanism:module_laser_dissipation_unit',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/diy_mekasuit_boots')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:diy_meka_tool'
        ],
        [
            'mekanism:meka_tool',
            '2x mekanism:module_energy_unit',
            '4x mekanism:module_attack_amplification_unit',
            '4x mekanism:module_vein_mining_unit',
            '4x mekanism:module_excavation_escalation_unit',
            'mekanism:module_teleportation_unit',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/diy_meka_tool')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:artisinal_ritual_kit'
        ],
        [
            '4x minecraft:skeleton_skull',
            '4x minecraft:wither_skeleton_skull',
            '8x eidolon:candlestick',
            '8x occultism:spirit_attuned_crystal',
            'occultism:golden_sacrificial_bowl',
            'occultism:sacrificial_bowl',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/artisinal_ritual_kit')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:artisinal_chalk_set'
        ],
        [
            'occultism:chalk_white',
            'occultism:chalk_gold',
            'occultism:chalk_purple',
            'occultism:chalk_red',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/artisinal_chalk_set')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:advanced_ram_chip'
        ],
        [
            '4x pneumaticcraft:transistor',
            Ingredient.of('#forge:alloys/elite')
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/advanced_ram_chip')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:fluid_drill_package'
        ],
        [
            'industrialforegoing:laser_lens10',
            'industrialforegoing:fluid_laser_base',
            '4x industrialforegoing:laser_drill',
            '4x industrialforegoing:speed_addon_2',
            '4x industrialforegoing:efficiency_addon_2',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/fluid_drill_package')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:assembly_io_package'
        ],
        [
            '6x pneumaticcraft:pneumatic_cylinder',
            '10x kubejs:replaceme',
            '6x pneumaticcraft:reinforced_stone_slab',
            'pneumaticcraft:pneumatic_dynamo',
            '2x create:brass_hand',
            'mekanism:cardboard_box'
        ], 2
    ).id('kubejs:pneumaticcraft/pressure_chamber/assembly_io_package')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:assembly_laser_package'
        ],
        [
            '3x pneumaticcraft:pneumatic_cylinder',
            '5x kubejs:replaceme',
            '3x pneumaticcraft:reinforced_stone_slab',
            'pneumaticcraft:pneumatic_dynamo',
            Ingredient.of('#powah:energizing_rod'),
            'mekanism:cardboard_box'
        ], 2
    ).id('kubejs:pneumaticcraft/pressure_chamber/assembly_laser_package')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:assembly_drill_package'
        ],
        [
            '3x pneumaticcraft:pneumatic_cylinder',
            '5x kubejs:replaceme',
            '3x pneumaticcraft:reinforced_stone_slab',
            'pneumaticcraft:pneumatic_dynamo',
            'pneumaticcraft:drill_bit_diamond',
            'mekanism:cardboard_box'
        ], 2
    ).id('kubejs:pneumaticcraft/pressure_chamber/assembly_drill_package')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:assembly_platform_package'
        ],
        [
            '2x pneumaticcraft:pneumatic_cylinder',
            '2x pneumaticcraft:plastic',
            '4x pneumaticcraft:reinforced_stone_slab',
            Ingredient.of('#forge:ingots/compressed_iron', 2),
            'mekanism:cardboard_box'
        ], 2
    ).id('kubejs:pneumaticcraft/pressure_chamber/assembly_platform_package')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:assembly_controller_package'
        ],
        [
            '3x pneumaticcraft:printed_circuit_board',
            '5x kubejs:replaceme',
            'computercraft:monitor_normal',
            '3x pneumaticcraft:reinforced_stone_slab',
            'pneumaticcraft:pneumatic_dynamo',
            'mekanism:cardboard_box'
        ], 2
    ).id('kubejs:pneumaticcraft/pressure_chamber/assembly_controller_package')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:diy_pressure_chamber'
        ],
        [
            'pneumaticcraft:pressure_chamber_valve',
            '2x pneumaticcraft:pressure_chamber_interface',
            '3x pneumaticcraft:pressure_chamber_glass',
            '5x pneumaticcraft:pressure_chamber_wall',
            '4x pneumaticcraft:speed_upgrade',
            '5x pneumaticcraft:volume_upgrade',
            '2x pneumaticcraft:regulator_tube_module',
            'pneumaticcraft:vacuum_pump',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/diy_pressure_chamber')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:diy_drone_kit'
        ],
        [
            'pneumaticcraft:drone',
            'pneumaticcraft:charging_station',
            'pneumaticcraft:programmer',
            '6x pneumaticcraft:programming_puzzle',
            '6x pneumaticcraft:programming_puzzle',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/diy_drone_kit')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:assorted_router_kit'
        ],
        [
            'modularrouters:modular_router',
            '4x modularrouters:distributor_module',
            '4x modularrouters:sender_module_2',
            '4x modularrouters:puller_module_2',
            'modularrouters:vacuum_module',
            'modularrouters:player_module',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/assorted_router_kit')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:altar_of_birthing_kit'
        ],
        [
            'naturesaura:animal_spawner',
            '4x naturesaura:ancient_planks',
            'naturesaura:infused_brick',
            'minecraft:hay_block',
            '6x naturesaura:birth_spirit',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/altar_of_birthing_kit')

    // e.recipes.pneumaticcraft.pressure_chamber(
    //     [
    //         'kubejs:diy_furnace_engine_kit'
    //     ],
    //     [
    //         'mekanism:resistive_heater',
    //         'pneumaticcraft:heat_pipe',
    //         'minecraft:blast_furnace',
    //         'create:flywheel',
    //         'create:furnace_engine',
    //         'mekanism:cardboard_box'
    //     ], 4.5
    // ).id('kubejs:pneumaticcraft/pressure_chamber/diy_furnace_engine_kit')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:diy_mixer'
        ],
        [
            '3x immersiveengineering:fluid_pipe',
            '4x immersiveengineering:light_engineering',
            'immersiveengineering:rs_engineering',
            '4x immersiveengineering:sheetmetal_iron',
            'immersiveengineering:steel_fence',
            '5x immersiveengineering:steel_scaffolding_standard',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/diy_mixer')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'kubejs:diy_bottling_machine'
        ],
        [
            '3x immersiveengineering:conveyor_basic',
            '2x immersiveengineering:fluid_pump',
            '2x immersiveengineering:light_engineering',
            'immersiveengineering:rs_engineering',
            '2x immersiveengineering:sheetmetal_steel',
            '3x immersiveengineering:steel_scaffolding_standard',
            'mekanism:cardboard_box'
        ], 4.5
    ).id('kubejs:pneumaticcraft/pressure_chamber/diy_bottling_machine')

    e.remove({ id: "powah:crafting/ender_gate_basic" })
    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'powah:ender_gate_basic'
        ],
        [
            'powah:blank_card',
            'powah:dielectric_paste',
            '2x powah:capacitor_basic_large',
            'powah:ender_core'
        ], 4
    ).id('kubejs:pneumaticcraft/pressure_chamber/crafting/ender_gate_basic')

    e.remove({ id: "powah:crafting/ender_gate_hardened" })
    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'powah:ender_gate_hardened'
        ],
        [
            'powah:blank_card',
            'powah:dielectric_paste',
            '2x powah:capacitor_hardened',
            'powah:ender_core'
        ], 4
    ).id('kubejs:pneumaticcraft/pressure_chamber/crafting/ender_gate_hardened')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '3x powah:thermo_generator_hardened',
            '2x powah:energy_cell_hardened',
            'powah:furnator_hardened'
        ],
        [
            '36x powah:reactor_hardened'
        ], -0.9
    ).id('kubejs:pneumaticcraft/pressure_chamber/disassemble_reactor_hardened')

    e.remove({ id: "powah:crafting/ender_gate_blazing" })
    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'powah:ender_gate_blazing'
        ],
        [
            'powah:blank_card',
            'powah:dielectric_paste',
            '2x powah:capacitor_blazing',
            'powah:ender_core'
        ], 4
    ).id('kubejs:pneumaticcraft/pressure_chamber/crafting/ender_gate_blazing')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '3x powah:thermo_generator_blazing',
            '2x powah:energy_cell_blazing',
            'powah:furnator_blazing'
        ],
        [
            '36x powah:reactor_blazing'
        ], -0.9
    ).id('kubejs:pneumaticcraft/pressure_chamber/disassemble_reactor_blazing')

    e.remove({ id: "powah:crafting/ender_gate_niotic" })
    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'powah:ender_gate_niotic'
        ],
        [
            'powah:blank_card',
            'powah:dielectric_paste',
            '2x powah:capacitor_niotic',
            'powah:ender_core'
        ], 4
    ).id('kubejs:pneumaticcraft/pressure_chamber/crafting/ender_gate_niotic')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '3x powah:thermo_generator_niotic',
            '2x powah:energy_cell_niotic',
            'powah:furnator_niotic'
        ],
        [
            '36x powah:reactor_niotic'
        ], -0.9
    ).id('kubejs:pneumaticcraft/pressure_chamber/disassemble_reactor_niotic')

    e.remove({ id: "powah:crafting/ender_gate_spirited" })
    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'powah:ender_gate_spirited'
        ],
        [
            'powah:blank_card',
            'powah:dielectric_paste',
            '2x powah:capacitor_spirited',
            'powah:ender_core'
        ], 4
    ).id('kubejs:pneumaticcraft/pressure_chamber/crafting/ender_gate_spirited')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '3x powah:thermo_generator_spirited',
            '2x powah:energy_cell_spirited',
            'powah:furnator_spirited'
        ],
        [
            '36x powah:reactor_spirited'
        ], -0.9
    ).id('kubejs:pneumaticcraft/pressure_chamber/disassemble_reactor_spirited')

    e.remove({ id: "powah:crafting/ender_gate_nitro" })
    e.recipes.pneumaticcraft.pressure_chamber(
        [
            'powah:ender_gate_nitro'
        ],
        [
            'powah:blank_card',
            'powah:dielectric_paste',
            '2x powah:capacitor_nitro',
            'powah:ender_core'
        ], 4
    ).id('kubejs:pneumaticcraft/pressure_chamber/crafting/ender_gate_nitro')

    e.recipes.pneumaticcraft.pressure_chamber(
        [
            '3x powah:thermo_generator_nitro',
            '2x powah:energy_cell_nitro',
            'powah:furnator_nitro'
        ],
        [
            '36x powah:reactor_nitro'
        ], -0.9
    ).id('kubejs:pneumaticcraft/pressure_chamber/disassemble_reactor_nitro')
})