ServerEvents.recipes(e => {
    e.recipes.pneumaticcraft.assembly_drill(
        '2x kubejs:rough_machine_frame_top',
        'thermal:machine_frame',
    ).id(`kubejs:pneumaticcraft/assembly/rough_machine_frame_top`)

    e.recipes.pneumaticcraft.assembly_laser(
        'rftoolsbase:machine_frame',
        'kubejs:rough_machine_frame',
    ).id(`kubejs:pneumaticcraft/assembly/machine_frame`)

    e.recipes.pneumaticcraft.assembly_drill(
        '5x supplementaries:gold_trapdoor',
        Ingredient.of('#forge:storage_blocks/gold'),
    ).id(`kubejs:pneumaticcraft/assembly/gold_trapdoor`)

    // e.recipes.pneumaticcraft.assembly_laser(
    //     '10x pedestals:coin/default',
    //     '5x supplementaries:gold_trapdoor',
    // ).id(`kubejs:pneumaticcraft/assembly/gold_trapdoor`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:basic_circuit_assembly',
        'kubejs:basic_circuit_package',
    ).id(`kubejs:pneumaticcraft/assembly/basic_circuit_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        '2x mekanism:basic_control_circuit',
        'kubejs:basic_circuit_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/basic_control_circuit`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:batch_basic_circuit_assembly',
        'kubejs:batch_basic_circuit_package',
    ).id(`kubejs:pneumaticcraft/assembly/batch_basic_circuit_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        '64x mekanism:basic_control_circuit',
        'kubejs:batch_basic_circuit_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/batch_basic_control_circuit`)

    e.recipes.pneumaticcraft.assembly_laser(
        '3x occultism:lenses',
        'kubejs:basic_lenses_package',
    ).id(`kubejs:pneumaticcraft/assembly/basic_lenses`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:basic_memory_assembly',
        'kubejs:basic_memory_package',
    ).id(`kubejs:pneumaticcraft/assembly/basic_memory_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        '2x kubejs:memory_basic_empty',
        'kubejs:basic_memory_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/memory_basic_empty`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:batch_basic_memory_assembly',
        'kubejs:batch_basic_memory_package',
    ).id(`kubejs:pneumaticcraft/assembly/batch_basic_memory_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        '64x kubejs:memory_basic_empty',
        'kubejs:batch_basic_memory_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/batch_memory_basic_empty`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:cpu_core_500_assembly',
        'kubejs:cpu_core_500_package',
    ).id(`kubejs:pneumaticcraft/assembly/cpu_core_500_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        '1x kubejs:cpu_core_mk_1026',
        'kubejs:cpu_core_500_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/cpu_core_mk_1026`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:batch_cpu_core_500_assembly',
        'kubejs:batch_cpu_core_500_package',
    ).id(`kubejs:pneumaticcraft/assembly/batch_cpu_core_500_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        '32x kubejs:cpu_core_mk_1026',
        'kubejs:batch_cpu_core_500_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/batch_cpu_core_mk_1026`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:cpu_core_1000_assembly',
        'kubejs:cpu_core_1000_package',
    ).id(`kubejs:pneumaticcraft/assembly/cpu_core_1000_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        'kubejs:cpu_core_eg_28222',
        'kubejs:cpu_core_1000_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/cpu_core_eg_28222`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:batch_cpu_core_1000_assembly',
        'kubejs:batch_cpu_core_1000_package',
    ).id(`kubejs:pneumaticcraft/assembly/batch_cpu_core_1000_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        '32x kubejs:cpu_core_eg_28222',
        'kubejs:batch_cpu_core_1000_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/batch_cpu_core_eg_28222`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:cpu_core_2000_assembly',
        'kubejs:cpu_core_2000_package',
    ).id(`kubejs:pneumaticcraft/assembly/cpu_core_2000_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        'kubejs:cpu_core_as_81221',
        'kubejs:cpu_core_2000_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/cpu_core_as_81221`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:batch_cpu_core_2000_assembly',
        'kubejs:batch_cpu_core_2000_package',
    ).id(`kubejs:pneumaticcraft/assembly/batch_cpu_core_2000_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        '32x kubejs:cpu_core_as_81221',
        'kubejs:batch_cpu_core_2000_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/batch_cpu_core_as_81221`)

    e.recipes.pneumaticcraft.assembly_laser(
        '32x pneumaticcraft:unassembled_pcb',
        'kubejs:batch_unassembled_pcb',
    ).id(`kubejs:pneumaticcraft/assembly/batch_unassembled_pcb`)

    e.recipes.pneumaticcraft.assembly_drill(
        '256x pneumaticcraft:advanced_pressure_tube',
        'kubejs:batch_unassembled_advanced_pressure_tube',
    ).id(`kubejs:pneumaticcraft/assembly/batch_unassembled_advanced_pressure_tube`)

    e.recipes.pneumaticcraft.assembly_drill(
        '32x rftoolsbase:machine_frame',
        'kubejs:batch_unassembled_machine_frame',
    ).id(`kubejs:pneumaticcraft/assembly/batch_unassembled_machine_frame`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:assembly_io_assembly',
        'kubejs:assembly_io_package',
    ).id(`kubejs:pneumaticcraft/assembly/assembly_io_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        '2x pneumaticcraft:assembly_io_unit_import',
        'kubejs:assembly_io_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/assembly_io_alternate`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:assembly_laser_assembly',
        'kubejs:assembly_laser_package',
    ).id(`kubejs:pneumaticcraft/assembly/assembly_laser_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        'pneumaticcraft:assembly_laser',
        'kubejs:assembly_laser_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/assembly_laser_alternate`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:assembly_drill_assembly',
        'kubejs:assembly_drill_package',
    ).id(`kubejs:pneumaticcraft/assembly/assembly_drill_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        'pneumaticcraft:assembly_drill',
        'kubejs:assembly_drill_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/assembly_drill_alternate`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:assembly_platform_assembly',
        'kubejs:assembly_platform_package',
    ).id(`kubejs:pneumaticcraft/assembly/assembly_platform_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        'pneumaticcraft:assembly_platform',
        'kubejs:assembly_platform_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/assembly_platform_alternate`)

    e.recipes.pneumaticcraft.assembly_drill(
        'kubejs:assembly_controller_assembly',
        'kubejs:assembly_controller_package',
    ).id(`kubejs:pneumaticcraft/assembly/assembly_controller_assembly`)

    e.recipes.pneumaticcraft.assembly_laser(
        'pneumaticcraft:assembly_controller',
        'kubejs:assembly_controller_assembly',
    ).id(`kubejs:pneumaticcraft/assembly/assembly_controller_alternate`)

    let armorSets = [
        {
            modID: 'pneumaticcraft',
            armorPieces: ['pneumatic_helmet', 'pneumatic_chestplate', 'pneumatic_leggings', 'pneumatic_boots']
        },
        {
            modID: 'mekanism',
            armorPieces: ['mekasuit_helmet', 'mekasuit_bodyarmor', 'mekasuit_pants', 'mekasuit_boots']
        }
    ]

    for (let armorSet of armorSets) {
        for (let armorPiece of armorSet.armorPieces) {
            e.recipes.pneumaticcraft.assembly_drill(
                `kubejs:${armorPiece}_assembly`,
                `kubejs:${armorPiece}_package`,
            ).id(`kubejs:pneumaticcraft/assembly/${armorPiece}_assembly`)
            e.recipes.pneumaticcraft.assembly_laser(
                `${armorSet.modID}:${armorPiece}`,
                `kubejs:${armorPiece}_assembly`,
            ).id(`kubejs:pneumaticcraft/assembly/${armorPiece}`)
        }
    }

    let masteries = [
        'automation',
        'botanical',
        'infernal',
        'alchemy',
        'ritual',
        'aura',
        'engineering',
        'energistics',
        'dimensional',
        'battle',
        'excavation',
        'culinary'
    ]

    for (let mastery of masteries) {
        e.recipes.pneumaticcraft.assembly_laser(
            `kubejs:${mastery}_mastery_token`,
            `kubejs:${mastery}_mastery_shard`
        ).id(`kubejs:pneumaticcraft/assembly/${mastery}_mastery_token`)
    }
})