ServerEvents.recipes(e => {
    e.remove({ id: "rftoolsbuilder:shield_block1" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('immersiveengineering:tesla_coil'),
            Ingredient.of('rftoolsbase:machine_frame'),
            Ingredient.of('immersiveengineering:tesla_coil'),
            Ingredient.of('immersiveengineering:coil_hv'),
            Ingredient.of('immersiveengineering:coil_hv'),
            Ingredient.of('immersiveengineering:coil_hv'),
            Ingredient.of('powah:energy_discharger_nitro'),
            Ingredient.of('immersiveengineering:coil_hv')
        ],
        inputFluid: `{ FluidName: 'tconstruct:molten_obsidian', Amount: 1000 }`,
        output: { item: 'rftoolsbuilder:shield_block1', count: 1 },
        processingTime: 600,
    }).id('kubejs:dissolution/shield_block1')

    e.remove({ id: "botanypots:crafting/terracotta_botany_pot" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('mythicbotany:aquapanthus'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('minecraft:terracotta'),
            Ingredient.of('minecraft:terracotta'),
            Ingredient.of('minecraft:terracotta'),
            Ingredient.of('minecraft:terracotta'),
            Ingredient.of('minecraft:terracotta')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:sewage', Amount: 8000 }`,
        output: { item: 'botanypots:terracotta_botany_pot', count: 1 },
        processingTime: 600,
    }).id('kubejs:dissolution/crafting/terracotta_botany_pot')

    e.remove({ id: "botanypots:crafting/terracotta_hopper_botany_pot" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('ars_nouveau:whirlisprig_charm'),
            Ingredient.of('botanypots:terracotta_botany_pot'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('botania:enchanted_soil'),
            Ingredient.of('botania:enchanted_soil'),
            Ingredient.of('#botania:runes/midgard'),
            Ingredient.of('naturesaura:grated_chute'),
            Ingredient.of('#botania:runes/midgard')
        ],
        inputFluid: `{ FluidName: 'kubejs:replaceme', Amount: 1296 }`,
        output: { item: 'botanypots:terracotta_hopper_botany_pot', count: 1 },
        processingTime: 600,
    }).id('kubejs:dissolution/crafting/terracotta_hopper_botany_pot')

    e.remove({ id: "rftoolsutility:spawner" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('rftoolsutility:matter_receiver'),
            Ingredient.of('industrialforegoing:laser_lens14'),
            Ingredient.of('#industrialforegoing:machine_frame/advanced'),
            Ingredient.of('minecraft:spawner'),
            Ingredient.of('minecraft:spawner')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:ether_gas', Amount: 200 }`,
        output: { item: 'rftoolsutility:spawner', count: 1 },
        processingTime: 600,
    }).id('kubejs:dissolution/spawner')

    e.remove({ id: "rftoolsutility:matter_beamer" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('rftoolsutility:matter_transmitter'),
            Ingredient.of('industrialforegoing:laser_lens4'),
            Ingredient.of('#industrialforegoing:machine_frame/simple'),
            Ingredient.of('#forge:gears/lumium'),
            Ingredient.of('#forge:gears/lumium')
        ],
        inputFluid: `{ FluidName: 'kubejs:pink_ender_slime', Amount: 500 }`,
        output: { item: 'rftoolsutility:matter_beamer', count: 1 },
        processingTime: 600,
    }).id('kubejs:dissolution/matter_beamer')

    e.remove({ id: "mekanism:control_circuit/advanced" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:cpu_core_mk_1026'),
            Ingredient.of('#forge:alloys/advanced'),
            Ingredient.of('#forge:alloys/advanced'),
            Ingredient.of('#forge:circuits/basic'),
            Ingredient.of('kubejs:memory_advanced_filled')
        ],
        inputFluid: `{ FluidName: 'mekanism:lithium', Amount: 100 }`,
        output: { item: 'mekanism:advanced_control_circuit', count: 1 },
        processingTime: 300,
    }).id('kubejs:dissolution/control_circuit/advanced')

    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:cpu_core_mk_1026'),
            Ingredient.of('#forge:alloys/advanced'),
            Ingredient.of('#forge:alloys/advanced'),
            Ingredient.of('#forge:circuits/basic'),
            Ingredient.of('kubejs:memory_advanced_filled'),
            Ingredient.of('bloodmagic:reinforcedslate'),
            Ingredient.of('bloodmagic:reinforcedslate'),
            Ingredient.of('bloodmagic:reinforcedslate')
        ],
        inputFluid: `{ FluidName: 'mekanism:lithium', Amount: 100 }`,
        output: { item: 'mekanism:advanced_control_circuit', count: 2 },
        processingTime: 300,
    }).id('kubejs:dissolution/advanced_control_circuit_magic')

    e.remove({ id: "mekanism:control_circuit/elite" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:cpu_core_eg_28222'),
            Ingredient.of('#forge:alloys/elite'),
            Ingredient.of('#forge:alloys/elite'),
            Ingredient.of('#forge:circuits/advanced'),
            Ingredient.of('kubejs:memory_elite_filled')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:ether_gas', Amount: 100 }`,
        output: { item: 'mekanism:elite_control_circuit', count: 1 },
        processingTime: 300,
    }).id('kubejs:dissolution/control_circuit/elite')

    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:cpu_core_eg_28222'),
            Ingredient.of('#forge:alloys/elite'),
            Ingredient.of('#forge:alloys/elite'),
            Ingredient.of('#forge:circuits/advanced'),
            Ingredient.of('kubejs:memory_elite_filled'),
            Ingredient.of('bloodmagic:infusedslate'),
            Ingredient.of('bloodmagic:infusedslate'),
            Ingredient.of('bloodmagic:infusedslate')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:ether_gas', Amount: 100 }`,
        output: { item: 'mekanism:elite_control_circuit', count: 2 },
        processingTime: 300,
    }).id('kubejs:dissolution/elite_control_circuit_magic')

    e.remove({ id: "mekanism:control_circuit/ultimate" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:cpu_core_as_81221'),
            Ingredient.of('#forge:alloys/ultimate'),
            Ingredient.of('#forge:alloys/ultimate'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('kubejs:memory_ultimate_filled')
        ],
        inputFluid: `{ FluidName: 'kubejs:pink_ender_slime', Amount: 100 }`,
        output: { item: 'mekanism:ultimate_control_circuit', count: 1 },
        processingTime: 300,
    }).id('kubejs:dissolution/control_circuit/ultimate')

    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:cpu_core_as_81221'),
            Ingredient.of('#forge:alloys/ultimate'),
            Ingredient.of('#forge:alloys/ultimate'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('kubejs:memory_ultimate_filled'),
            Ingredient.of('bloodmagic:demonslate'),
            Ingredient.of('bloodmagic:demonslate'),
            Ingredient.of('bloodmagic:demonslate')
        ],
        inputFluid: `{ FluidName: 'kubejs:pink_ender_slime', Amount: 100 }`,
        output: { item: 'mekanism:ultimate_control_circuit', count: 2 },
        processingTime: 300,
    }).id('kubejs:dissolution/ultimate_control_circuit_magic')

    e.remove({ id: "mekanism:upgrade/speed" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:gears/osmium'),
            Ingredient.of('powah:blank_card'),
            Ingredient.of('#forge:gears/osmium'),
            Ingredient.of('#mekanism:alloys/infused'),
            Ingredient.of('#mekanism:alloys/infused'),
            Ingredient.of('#forge:nuggets/copper'),
            Ingredient.of('#forge:nuggets/copper'),
            Ingredient.of('#forge:nuggets/copper')
        ],
        inputFluid: `{ FluidName: 'pneumaticcraft:lubricant', Amount: 1000 }`,
        output: { item: 'mekanism:upgrade_speed', count: 1 },
        processingTime: 300,
    }).id('kubejs:dissolution/upgrade/speed')

    e.remove({ id: "mekanism:upgrade/energy" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:gears/cobalt'),
            Ingredient.of('powah:blank_card'),
            Ingredient.of('#forge:gears/cobalt'),
            Ingredient.of('#mekanism:alloys/reinforced'),
            Ingredient.of('#mekanism:alloys/reinforced'),
            Ingredient.of('#forge:nuggets/copper'),
            Ingredient.of('#forge:nuggets/copper'),
            Ingredient.of('#forge:nuggets/copper')
        ],
        inputFluid: `{ FluidName: 'mekanism:lithium', Amount: 1000 }`,
        output: { item: 'mekanism:upgrade_energy', count: 1 },
        processingTime: 300,
    }).id('kubejs:dissolution/upgrade/energy')

    e.remove({ id: "mekanism:upgrade/gas" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:gears/silver'),
            Ingredient.of('powah:blank_card'),
            Ingredient.of('#forge:gears/silver'),
            Ingredient.of('#mekanism:alloys/reinforced'),
            Ingredient.of('#mekanism:alloys/reinforced'),
            Ingredient.of('#forge:nuggets/copper'),
            Ingredient.of('#forge:nuggets/copper'),
            Ingredient.of('#forge:nuggets/copper')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:ether_gas', Amount: 1000 }`,
        output: { item: 'mekanism:upgrade_gas', count: 1 },
        processingTime: 300,
    }).id('kubejs:dissolution/upgrade/gas')

    e.remove({ id: "mekanism:upgrade/muffling" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#thermal:rockwool'),
            Ingredient.of('powah:blank_card'),
            Ingredient.of('#thermal:rockwool'),
            Ingredient.of('#thermal:rockwool'),
            Ingredient.of('#thermal:rockwool'),
            Ingredient.of('#forge:nuggets/copper'),
            Ingredient.of('#forge:nuggets/copper'),
            Ingredient.of('#forge:nuggets/copper')
        ],
        inputFluid: `{ FluidName: 'integrateddynamics:liquid_chorus', Amount: 1000 }`,
        output: { item: 'mekanism:upgrade_muffling', count: 1 },
        processingTime: 300,
    }).id('kubejs:dissolution/upgrade/muffling')

    e.remove({ id: "mekanism:upgrade/anchor" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('dustrial_decor:anchor'),
            Ingredient.of('powah:blank_card'),
            Ingredient.of('dustrial_decor:anchor'),
            Ingredient.of('#mekanism:alloys/infused'),
            Ingredient.of('#mekanism:alloys/infused'),
            Ingredient.of('#forge:nuggets/copper'),
            Ingredient.of('#forge:nuggets/copper'),
            Ingredient.of('#forge:nuggets/copper')
        ],
        inputFluid: `{ FluidName: 'kubejs:pink_ender_slime', Amount: 1000 }`,
        output: { item: 'mekanism:upgrade_anchor', count: 1 },
        processingTime: 300,
    }).id('kubejs:dissolution/upgrade/anchor')

    e.remove({ id: "mekanism:upgrade/stone_generator" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:gears/osmium'),
            Ingredient.of('powah:blank_card'),
            Ingredient.of('#forge:gears/osmium'),
            Ingredient.of('bloodmagic:reagentwater'),
            Ingredient.of('bloodmagic:reagentlava'),
            Ingredient.of('#forge:nuggets/copper'),
            Ingredient.of('#forge:nuggets/copper'),
            Ingredient.of('#forge:nuggets/copper')
        ],
        inputFluid: `{ FluidName: 'tconstruct:blazing_blood', Amount: 1000 }`,
        output: { item: 'mekanism:upgrade_stone_generator', count: 1 },
        processingTime: 300,
    }).id('kubejs:dissolution/upgrade/stone_generator')

    e.remove({ id: "mekanism:sps_casing" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:pellets/polonium'),
            Ingredient.of('#industrialforegoing:machine_frame/supreme'),
            Ingredient.of('#forge:pellets/polonium'),
            Ingredient.of('#forge:pellets/polonium'),
            Ingredient.of('#forge:pellets/polonium'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:circuits/ultimate'),
            Ingredient.of('mekanism:hdpe_sheet')
        ],
        inputFluid: `{ FluidName: 'immersiveengineering:concrete', Amount: 1000 }`,
        output: { item: 'mekanism:sps_casing', count: 1 },
        processingTime: 6000,
    }).id('kubejs:dissolution/sps_casing')

    e.remove({ id: "mekanism:supercharged_coil" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:ultimate_induction_cell'),
            Ingredient.of('immersiveengineering:coil_mv'),
            Ingredient.of('mekanism:ultimate_induction_cell'),
            Ingredient.of('#forge:circuits/ultimate'),
            Ingredient.of('#forge:circuits/ultimate'),
            Ingredient.of('#forge:pellets/polonium'),
            Ingredient.of('mekanism:laser'),
            Ingredient.of('#forge:pellets/polonium')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:ether_gas', Amount: 1000 }`,
        output: { item: 'mekanism:supercharged_coil', count: 1 },
        processingTime: 6000,
    }).id('kubejs:dissolution/supercharged_coil')

    e.remove({ id: "mekanism:induction/casing" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#industrialforegoing:machine_frame/simple'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet')
        ],
        inputFluid: `{ FluidName: 'immersiveengineering:concrete', Amount: 4000 }`,
        output: { item: 'mekanism:induction_casing', count: 4 },
        processingTime: 100,
    }).id('kubejs:dissolution/induction/casing')

    e.remove({ id: "mekanismgenerators:reactor/frame" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanismgenerators:electromagnetic_coil'),
            Ingredient.of('#forge:pellets/polonium'),
            Ingredient.of('#mekanism:alloys/atomic'),
            Ingredient.of('powah:dielectric_casing'),
            Ingredient.of('rftoolscontrol:node'),
            Ingredient.of('#xnet:cables'),
            Ingredient.of('#xnet:cables'),
            Ingredient.of('#xnet:cables')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:ether_gas', Amount: 100 }`,
        output: { item: 'mekanismgenerators:fusion_reactor_frame', count: 1 },
        processingTime: 600,
    }).id('kubejs:dissolution/reactor/frame')

    e.remove({ id: "mekanismgenerators:fission_reactor/casing" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:steel_casing'),
            Ingredient.of('immersiveengineering:wire_steel'),
            Ingredient.of('immersiveengineering:wire_steel'),
            Ingredient.of('immersiveengineering:wire_steel'),
            Ingredient.of('immersiveengineering:wire_steel')
        ],
        inputFluid: `{ FluidName: 'immersiveengineering:concrete', Amount: 1000 }`,
        output: { item: 'mekanismgenerators:fission_reactor_casing', count: 1 },
        processingTime: 600,
    }).id('kubejs:dissolution/fission_reactor/casing')

    e.remove({ id: "mekanism:processing/refined_glowstone/ingot/from_dust" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:ingots/lumium')
        ],
        inputFluid: `{ FluidName: 'thermal:glowstone', Amount: 250 }`,
        output: { item: 'mekanism:ingot_refined_glowstone', count: 1 },
        processingTime: 100,
    }).id('kubejs:dissolution/processing/refined_glowstone/ingot/from_dust')

    e.remove({ id: "mekanism:tier_installer/basic" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:circuits/basic'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('#forge:circuits/basic'),
            Ingredient.of('#forge:ingots/refined_obsidian'),
            Ingredient.of('#forge:ingots/refined_obsidian'),
            Ingredient.of('#forge:ingots/refined_glowstone'),
            Ingredient.of('#forge:ingots/refined_glowstone')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:latex', Amount: 250 }`,
        output: { item: 'mekanism:basic_tier_installer', count: 1 },
        processingTime: 100,
    }).id('kubejs:dissolution/tier_installer/basic')

    e.remove({ id: "mekanism:tier_installer/advanced" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:circuits/advanced'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('#forge:circuits/advanced'),
            Ingredient.of('#forge:ingots/refined_obsidian'),
            Ingredient.of('#forge:ingots/refined_obsidian'),
            Ingredient.of('#forge:ingots/refined_glowstone'),
            Ingredient.of('#forge:ingots/refined_glowstone')
        ],
        inputFluid: `{ FluidName: 'mekanism:lithium', Amount: 250 }`,
        output: { item: 'mekanism:advanced_tier_installer', count: 1 },
        processingTime: 100,
    }).id('kubejs:dissolution/tier_installer/advanced')

    e.remove({ id: "mekanism:tier_installer/elite" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('#forge:ingots/refined_obsidian'),
            Ingredient.of('#forge:ingots/refined_obsidian'),
            Ingredient.of('#forge:ingots/refined_glowstone'),
            Ingredient.of('#forge:ingots/refined_glowstone')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:ether_gas', Amount: 250 }`,
        output: { item: 'mekanism:elite_tier_installer', count: 1 },
        processingTime: 100,
    }).id('kubejs:dissolution/tier_installer/elite')

    e.remove({ id: "mekanism:tier_installer/ultimate" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:circuits/ultimate'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('#forge:circuits/ultimate'),
            Ingredient.of('#forge:ingots/refined_obsidian'),
            Ingredient.of('#forge:ingots/refined_obsidian'),
            Ingredient.of('#forge:ingots/refined_glowstone'),
            Ingredient.of('#forge:ingots/refined_glowstone')
        ],
        inputFluid: `{ FluidName: 'kubejs:pink_ender_slime', Amount: 250 }`,
        output: { item: 'mekanism:ultimate_tier_installer', count: 1 },
        processingTime: 100,
    }).id('kubejs:dissolution/tier_installer/ultimate')

    e.remove({ id: "sophisticatedbackpacks:inception_upgrade" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('ars_nouveau:end_fiber'),
            Ingredient.of('sophisticatedbackpacks:upgrade_base'),
            Ingredient.of('ars_nouveau:end_fiber'),
            Ingredient.of('create:shadow_steel_casing'),
            Ingredient.of('create:shadow_steel_casing'),
            Ingredient.of('ars_nouveau:end_fiber'),
            Ingredient.of('kubejs:dimensional_storage_crystal'),
            Ingredient.of('ars_nouveau:end_fiber')
        ],
        inputFluid: `{ FluidName: 'kubejs:pink_ender_slime', Amount: 250 }`,
        output: { item: 'sophisticatedbackpacks:inception_upgrade', count: 1 },
        processingTime: 100,
    }).id('kubejs:dissolution/inception_upgrade')

    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('xnet:antenna_dish'),
            Ingredient.of('xnet:antenna_dish'),
            Ingredient.of('#forge:ingots/aeternium'),
            Ingredient.of('#forge:ingots/aeternium'),
            Ingredient.of('#forge:ingots/aeternium')
        ],
        inputFluid: `{ FluidName: 'tconstruct:molten_slimesteel', Amount: 1296 }`,
        output: { item: 'kubejs:replaceme', count: 1 },
        processingTime: 400,
    }).id('kubejs:dissolution/replacemeuhoh1')

    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('powah:ender_gate_nitro'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('powah:ender_gate_nitro'),
            Ingredient.of('powah:ender_gate_nitro'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('powah:ender_gate_nitro'),
            Ingredient.of('kubejs:replaceme')
        ],
        inputFluid: `{ FluidName: 'kubejs:pink_ender_slime', Amount: 1250 }`,
        output: { item: 'kubejs:replaceme', count: 1 },
        processingTime: 400,
    }).id('kubejs:dissolution/replacemeuhoh2')

    e.remove({ id: "industrialforegoing:dissolution_chamber/simple_machine_frame" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:plastic'),
            Ingredient.of('#industrialforegoing:machine_frame/pity'),
            Ingredient.of('#forge:plastic'),
            Ingredient.of('#forge:ingots/refined_obsidian'),
            Ingredient.of('#forge:ingots/refined_obsidian'),
            Ingredient.of('#forge:gears/osmium'),
            Ingredient.of('#forge:circuits/basic'),
            Ingredient.of('#forge:gears/osmium')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:latex', Amount: 250 }`,
        output: { item: 'industrialforegoing:machine_frame_simple', count: 1 },
        processingTime: 300,
    }).id('kubejs:dissolution/dissolution_chamber/simple_machine_frame')

    e.remove({ id: "industrialforegoing:dissolution_chamber/advanced_machine_frame" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:plastic'),
            Ingredient.of('#industrialforegoing:machine_frame/simple'),
            Ingredient.of('#forge:plastic'),
            Ingredient.of('#forge:ingots/pink_slime'),
            Ingredient.of('#forge:ingots/pink_slime'),
            Ingredient.of('#forge:gears/compressed_iron'),
            Ingredient.of('#forge:circuits/advanced'),
            Ingredient.of('#forge:gears/compressed_iron')
        ],
        inputFluid: `{ FluidName: 'kubejs:pink_ender_slime', Amount: 1000 }`,
        output: { item: 'industrialforegoing:machine_frame_advanced', count: 1 },
        processingTime: 300,
    }).id('kubejs:dissolution/dissolution_chamber/advanced_machine_frame')

    e.remove({ id: "industrialforegoing:dissolution_chamber/supreme_machine_frame" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:plastic'),
            Ingredient.of('#industrialforegoing:machine_frame/advanced'),
            Ingredient.of('#forge:plastic'),
            Ingredient.of('#forge:ingots/iesnium'),
            Ingredient.of('#forge:ingots/iesnium'),
            Ingredient.of('#forge:gears/enderium'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('#forge:gears/enderium')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:ether_gas', Amount: 135 }`,
        output: { item: 'industrialforegoing:machine_frame_supreme', count: 1 },
        processingTime: 300,
    }).id('kubejs:dissolution/dissolution_chamber/supreme_machine_frame')

    e.remove({ id: "industrialforegoing:dissolution_chamber/efficiency_addon_1" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:plastic'),
            Ingredient.of('#forge:circuits/advanced'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('#forge:gears/signalum'),
            Ingredient.of('#forge:gears/signalum'),
            Ingredient.of('#forge:gems/blazing'),
            Ingredient.of('#forge:gems/blazing')
        ],
        inputFluid: `{ FluidName: 'mekanism:lithium', Amount: 500 }`,
        output: { item: 'industrialforegoing:efficiency_addon_1', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/dissolution_chamber/efficiency_addon_1')

    e.remove({ id: "industrialforegoing:dissolution_chamber/speed_addon_1" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:plastic'),
            Ingredient.of('#forge:circuits/advanced'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('#forge:gears/signalum'),
            Ingredient.of('#forge:gears/signalum'),
            Ingredient.of('pneumaticcraft:glycerol'),
            Ingredient.of('pneumaticcraft:glycerol')
        ],
        inputFluid: `{ FluidName: 'pneumaticcraft:lubricant', Amount: 500 }`,
        output: { item: 'industrialforegoing:speed_addon_1', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/dissolution_chamber/speed_addon_1')

    e.remove({ id: "industrialforegoing:dissolution_chamber/processing_addon_1" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:plastic'),
            Ingredient.of('#forge:circuits/advanced'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('#forge:gears/signalum'),
            Ingredient.of('#forge:gears/signalum'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('kubejs:replaceme')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:latex', Amount: 1000 }`,
        output: { item: 'industrialforegoing:processing_addon_1', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/dissolution_chamber/processing_addon_1')

    e.remove({ id: "industrialforegoing:dissolution_chamber/efficiency_addon_2" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('industrialforegoing:efficiency_addon_1'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('#forge:gears/enderium'),
            Ingredient.of('#forge:gears/enderium'),
            Ingredient.of('rftoolspower:blazing_rod'),
            Ingredient.of('rftoolspower:blazing_rod')
        ],
        inputFluid: `{ FluidName: 'mekanism:lithium', Amount: 500 }`,
        output: { item: 'industrialforegoing:efficiency_addon_2', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/dissolution_chamber/efficiency_addon_2')

    e.remove({ id: "industrialforegoing:dissolution_chamber/speed_addon_2" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('industrialforegoing:speed_addon_1'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('#forge:gears/enderium'),
            Ingredient.of('#forge:gears/enderium'),
            Ingredient.of('pneumaticcraft:glycerol'),
            Ingredient.of('pneumaticcraft:glycerol')
        ],
        inputFluid: `{ FluidName: 'pneumaticcraft:lubricant', Amount: 500 }`,
        output: { item: 'industrialforegoing:speed_addon_2', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/dissolution_chamber/speed_addon_2')

    e.remove({ id: "industrialforegoing:dissolution_chamber/processing_addon_2" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('industrialforegoing:processing_addon_1'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('#forge:gears/enderium'),
            Ingredient.of('#forge:gears/enderium'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('kubejs:replaceme')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:latex', Amount: 1000 }`,
        output: { item: 'industrialforegoing:processing_addon_2', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/dissolution_chamber/processing_addon_2')

    e.remove({ id: "industrialforegoing:dissolution_chamber/pink_slime_ingot" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:ingots/queens_slime'),
            Ingredient.of('#forge:ingots/slimesteel'),
            Ingredient.of('#forge:ingots/slimesteel'),
            Ingredient.of('#forge:ingots/slimesteel')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:pink_slime', Amount: 2000 }`,
        output: { item: 'industrialforegoing:pink_slime_ingot', count: 4 },
        outputFluid: `{ FluidName: 'industrialforegoing:sludge', Amount: 500 }`,
        processingTime: 300,
    }).id('kubejs:dissolution/dissolution_chamber/pink_slime_ingot')

    e.remove({ id: "industrialforegoing:dissolution_chamber/mechanical_dirt" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('nethersdelight:rich_soul_soil'),
            Ingredient.of('nethersdelight:rich_soul_soil'),
            Ingredient.of('nethersdelight:rich_soul_soil'),
            Ingredient.of('tconstruct:blood_slime'),
            Ingredient.of('tconstruct:blood_slime'),
            Ingredient.of('architects_palette:withered_bone_block'),
            Ingredient.of('#industrialforegoing:machine_frame/simple'),
            Ingredient.of('architects_palette:withered_bone_block')
        ],
        inputFluid: `{ FluidName: 'bloodmagic:life_essence_fluid', Amount: 1000 }`,
        output: { item: 'industrialforegoing:mechanical_dirt', count: 1 },
        processingTime: 100,
    }).id('kubejs:dissolution/dissolution_chamber/mechanical_dirt')

    e.remove({ id: "mekanismgenerators:module_solar_recharging_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:ingots/shadow_steel'),
            Ingredient.of('powah:solar_panel_nitro'),
            Ingredient.of('#forge:ingots/shadow_steel')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:latex', Amount: 1000 }`,
        output: { item: 'mekanismgenerators:module_solar_recharging_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_solar_recharging_unit')

    e.remove({ id: "mekanism:module_electrolytic_breathing_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:circuits/basic'),
            Ingredient.of('mekanism:electrolytic_core'),
            Ingredient.of('#forge:circuits/basic')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:latex', Amount: 1000 }`,
        output: { item: 'mekanism:module_electrolytic_breathing_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_electrolytic_breathing_unit')

    e.remove({ id: "mekanism:module_inhalation_purification_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('thermal:cured_rubber'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('thermal:cured_rubber'),
            Ingredient.of('thermal:hazmat_fabric'),
            Ingredient.of('thermal:hazmat_fabric'),
            Ingredient.of('#forge:circuits/ultimate'),
            Ingredient.of('mekanism:scuba_mask'),
            Ingredient.of('#forge:circuits/ultimate')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:ether_gas', Amount: 500 }`,
        output: { item: 'mekanism:module_inhalation_purification_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_inhalation_purification_unit')

    e.remove({ id: "mekanism:module_nutritional_injection_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('industrialforegoing:straw'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('industrialforegoing:straw'),
            Ingredient.of('industrialforegoing:straw'),
            Ingredient.of('industrialforegoing:straw'),
            Ingredient.of('industrialforegoing:straw'),
            Ingredient.of('mekanism:canteen'),
            Ingredient.of('industrialforegoing:straw')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:meat', Amount: 16000 }`,
        output: { item: 'mekanism:module_nutritional_injection_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_nutritional_injection_unit')

    e.remove({ id: "mekanism:module_energy_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:ultimate_induction_cell'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('rftoolsbuilder:shield_block1'),
            Ingredient.of('#forge:circuits/ultimate'),
            Ingredient.of('#forge:circuits/ultimate'),
            Ingredient.of('#forge:pellets/polonium'),
            Ingredient.of('#forge:pellets/polonium'),
            Ingredient.of('#forge:pellets/polonium')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:ether_gas', Amount: 2000 }`,
        output: { item: 'mekanism:module_energy_unit', count: 1 },
        processingTime: 500,
    }).id('kubejs:dissolution/module_energy_unit')

    e.remove({ id: "mekanism:module_radiation_shielding_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:ingots/netherite'),
            Ingredient.of('#forge:ingots/netherite'),
            Ingredient.of('#forge:ingots/netherite')
        ],
        inputFluid: `{ FluidName: 'tconstruct:molten_lead', Amount: 1296 }`,
        output: { item: 'mekanism:module_radiation_shielding_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_radiation_shielding_unit')

    e.remove({ id: "mekanism:module_vision_enhancement_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:circuits/advanced'),
            Ingredient.of('advancedperipherals:ar_goggles'),
            Ingredient.of('#forge:circuits/advanced')
        ],
        inputFluid: `{ FluidName: 'kubejs:molten_enderium_glass', Amount: 1000 }`,
        output: { item: 'mekanism:module_vision_enhancement_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_vision_enhancement_unit')

    e.remove({ id: "mekanism:module_charge_distribution_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('immersiveengineering:coil_hv'),
            Ingredient.of('immersiveengineering:coil_hv'),
            Ingredient.of('immersiveengineering:coil_hv')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:latex', Amount: 1000 }`,
        output: { item: 'mekanism:module_charge_distribution_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_charge_distribution_unit')

    e.remove({ id: "mekanism:module_dosimeter_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('fluxnetworks:flux_dust'),
            Ingredient.of('mekanism:dosimeter'),
            Ingredient.of('fluxnetworks:flux_dust')
        ],
        inputFluid: `{ FluidName: 'tconstruct:molten_slimesteel', Amount: 1296 }`,
        output: { item: 'mekanism:module_dosimeter_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_dosimeter_unit')

    e.remove({ id: "mekanism:module_jetpack_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('mekanism:jetpack'),
            Ingredient.of('#forge:circuits/elite')
        ],
        inputFluid: `{ FluidName: 'tconstruct:sky_slime', Amount: 4000 }`,
        output: { item: 'mekanism:module_jetpack_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_jetpack_unit')

    e.remove({ id: "mekanism:module_gravitational_modulating_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:ultimate_induction_provider'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:ultimate_induction_provider'),
            Ingredient.of('#forge:circuits/ultimate'),
            Ingredient.of('#forge:circuits/ultimate'),
            Ingredient.of('ironjetpacks:nitro_thruster'),
            Ingredient.of('#forge:pellets/antimatter'),
            Ingredient.of('ironjetpacks:nitro_thruster')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:ether_gas', Amount: 16000 }`,
        output: { item: 'mekanism:module_gravitational_modulating_unit', count: 1 },
        processingTime: 800,
    }).id('kubejs:dissolution/module_gravitational_modulating_unit')

    e.remove({ id: "mekanism:module_locomotive_boosting_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:alloys/elite'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('#forge:alloys/elite'),
            Ingredient.of('alexsmobs:warped_muscle'),
            Ingredient.of('alexsmobs:warped_muscle'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('immersiveengineering:toolupgrade_drill_lube'),
            Ingredient.of('#forge:circuits/elite')
        ],
        inputFluid: `{ FluidName: 'pneumaticcraft:lubricant', Amount: 1000 }`,
        output: { item: 'mekanism:module_locomotive_boosting_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_locomotive_boosting_unit')

    e.remove({ id: "mekanism:module_hydraulic_propulsion_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('#forge:alloys/elite'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('#forge:alloys/elite'),
            Ingredient.of('alexsmobs:warped_muscle'),
            Ingredient.of('alexsmobs:warped_muscle'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('pneumaticcraft:pneumatic_cylinder'),
            Ingredient.of('#forge:circuits/elite')
        ],
        inputFluid: `{ FluidName: 'pneumaticcraft:lubricant', Amount: 1000 }`,
        output: { item: 'mekanism:module_hydraulic_propulsion_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_hydraulic_propulsion_unit')

    e.remove({ id: "mekanism:module_magnetic_attraction_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:circuits/basic'),
            Ingredient.of('thermal:flux_magnet'),
            Ingredient.of('#forge:circuits/basic')
        ],
        inputFluid: `{ FluidName: 'tconstruct:molten_iron', Amount: 1296 }`,
        output: { item: 'mekanism:module_magnetic_attraction_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_magnetic_attraction_unit')

    e.remove({ id: "mekanism:module_laser_dissipation_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:ingots/refined_radiance'),
            Ingredient.of('#forge:ingots/refined_radiance'),
            Ingredient.of('#forge:alloys/ultimate'),
            Ingredient.of('fluxnetworks:flux_core'),
            Ingredient.of('#forge:alloys/ultimate')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:ether_gas', Amount: 500 }`,
        output: { item: 'mekanism:module_laser_dissipation_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_laser_dissipation_unit')

    e.remove({ id: "mekanism:module_shearing_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:ingots/energized_steel'),
            Ingredient.of('#forge:gems/niotic'),
            Ingredient.of('#forge:ingots/energized_steel')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:latex', Amount: 100 }`,
        output: { item: 'mekanism:module_shearing_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_shearing_unit')

    e.remove({ id: "mekanism:module_geiger_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:alloys/advanced'),
            Ingredient.of('mekanism:geiger_counter'),
            Ingredient.of('#forge:alloys/advanced')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:latex', Amount: 100 }`,
        output: { item: 'mekanism:module_geiger_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_geiger_unit')

    e.remove({ id: "mekanism:module_elytra_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:alloys/elite'),
            Ingredient.of('mekanism:hdpe_elytra'),
            Ingredient.of('#forge:alloys/elite')
        ],
        inputFluid: `{ FluidName: 'thermal:ender', Amount: 16000 }`,
        output: { item: 'mekanism:module_elytra_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_elytra_unit')

    e.remove({ id: "mekanism:module_frost_walker_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:alloys/elite'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('#forge:alloys/elite')
        ],
        inputFluid: `{ FluidName: 'mekanism:hydrogen', Amount: 8000 }`,
        output: { item: 'mekanism:module_frost_walker_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_frost_walker_unit')

    e.remove({ id: "mekanismgenerators:module_geothermal_generator_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:ingots/shadow_steel'),
            Ingredient.of('powah:thermo_generator_nitro'),
            Ingredient.of('#forge:ingots/shadow_steel')
        ],
        inputFluid: `{ FluidName: 'mekanism:hydrogen', Amount: 8000 }`,
        output: { item: 'mekanismgenerators:module_geothermal_generator_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_geothermal_generator_unit')

    e.remove({ id: "mekanism:module_teleportation_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('botania:pixie_dust'),
            Ingredient.of('travel_anchors:travel_staff'),
            Ingredient.of('botania:pixie_dust')
        ],
        inputFluid: `{ FluidName: 'kubejs:replaceme', Amount: 1296 }`,
        output: { item: 'mekanism:module_teleportation_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_teleportation_unit')

    e.remove({ id: "mekanism:module_vein_mining_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('bloodmagic:destructivecrystal'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('bloodmagic:destructivecrystal')
        ],
        inputFluid: `{ FluidName: 'thermal:glowstone', Amount: 8000 }`,
        output: { item: 'mekanism:module_vein_mining_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_vein_mining_unit')

    e.remove({ id: "mekanism:module_silk_touch_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('bloodmagic:steadfastcrystal'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('bloodmagic:steadfastcrystal')
        ],
        inputFluid: `{ FluidName: 'thermal:ender', Amount: 8000 }`,
        output: { item: 'mekanism:module_silk_touch_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_silk_touch_unit')

    e.remove({ id: "mekanism:module_attack_amplification_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('bloodmagic:vengefulcrystal'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('bloodmagic:vengefulcrystal')
        ],
        inputFluid: `{ FluidName: 'tconstruct:molten_quartz', Amount: 16000 }`,
        output: { item: 'mekanism:module_attack_amplification_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_attack_amplification_unit')

    e.remove({ id: "mekanism:module_farming_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('#forge:gems/emerald'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('#forge:gems/emerald')
        ],
        inputFluid: `{ FluidName: 'industrialforegoing:latex', Amount: 1000 }`,
        output: { item: 'mekanism:module_farming_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_farming_unit')

    e.remove({ id: "mekanism:module_excavation_escalation_unit" })
    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('mekanism:module_base'),
            Ingredient.of('mekanism:hdpe_sheet'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('#forge:circuits/elite'),
            Ingredient.of('mekanismgenerators:laser_focus_matrix'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('mekanismgenerators:laser_focus_matrix')
        ],
        inputFluid: `{ FluidName: 'thermal:redstone', Amount: 16000 }`,
        output: { item: 'mekanism:module_excavation_escalation_unit', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/module_excavation_escalation_unit')

    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:memory_basic_empty')
        ],
        inputFluid: `{ FluidName: 'pneumaticcraft:memory_essence', Amount: 8000 }`,
        output: { item: 'kubejs:memory_basic_filled', count: 1 },
        processingTime: 20,
    }).id('kubejs:dissolution/memory_basic_filled')

    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:memory_advanced_empty')
        ],
        inputFluid: `{ FluidName: 'pneumaticcraft:memory_essence', Amount: 16000 }`,
        output: { item: 'kubejs:memory_advanced_filled', count: 1 },
        processingTime: 40,
    }).id('kubejs:dissolution/memory_advanced_filled')

    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:memory_elite_empty')
        ],
        inputFluid: `{ FluidName: 'pneumaticcraft:memory_essence', Amount: 32000 }`,
        output: { item: 'kubejs:memory_elite_filled', count: 1 },
        processingTime: 80,
    }).id('kubejs:dissolution/memory_elite_filled')

    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:memory_ultimate_empty')
        ],
        inputFluid: `{ FluidName: 'pneumaticcraft:memory_essence', Amount: 64000 }`,
        output: { item: 'kubejs:memory_ultimate_filled', count: 1 },
        processingTime: 160,
    }).id('kubejs:dissolution/memory_ultimate_filled')

    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:replaceme')
        ],
        inputFluid: `{ FluidName: 'tconstruct:molten_netherite', Amount: 1296 }`,
        output: { item: 'kubejs:replaceme', count: 1 },
        processingTime: 200,
    }).id('kubejs:dissolution/replacemeuhoh3')

    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('minecraft:light_gray_concrete_powder'),
            Ingredient.of('minecraft:light_gray_concrete_powder'),
            Ingredient.of('minecraft:light_gray_concrete_powder'),
            Ingredient.of('minecraft:light_gray_concrete_powder'),
            Ingredient.of('minecraft:light_gray_concrete_powder'),
            Ingredient.of('minecraft:light_gray_concrete_powder'),
            Ingredient.of('minecraft:light_gray_concrete_powder'),
            Ingredient.of('minecraft:light_gray_concrete_powder')
        ],
        inputFluid: `{ FluidName: 'kubejs:molten_compressed_iron', Amount: 144 }`,
        output: { item: 'pneumaticcraft:reinforced_stone', count: 8 },
        processingTime: 20,
    }).id('kubejs:dissolution/reinforced_stone')

    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('occultism:infused_lenses'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('kubejs:replaceme'),
            Ingredient.of('kubejs:replaceme')
        ],
        inputFluid: `{ FluidName: 'kubejs:replaceme', Amount: 100 }`,
        output: { item: 'kubejs:replaceme', count: 2 },
        processingTime: 20,
    }).id('kubejs:dissolution/glass_lens')

    e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            Ingredient.of('mekanism:elite_mechanical_pipe'),
            Ingredient.of('#industrialforegoing:machine_frame/simple'),
            Ingredient.of('mekanism:elite_mechanical_pipe'),
            Ingredient.of('mekanism:elite_fluid_tank'),
            Ingredient.of('mekanism:elite_fluid_tank'),
            Ingredient.of('mekanism:superheating_element'),
            Ingredient.of('immersiveengineering:capacitor_hv'),
            Ingredient.of('mekanism:superheating_element')
        ],
        inputFluid: `{ FluidName: 'kubejs:pink_ender_slime', Amount: 1000 }`,
        output: { item: 'industrialforegoing:dissolution_chamber', count: 1 },
        processingTime: 100,
    }).id('kubejs:dissolution/dissolution_chamber_alternate')
})

let b = {
    "type": "industrialforegoing:dissolution_chamber",
    "input": [
        {
            "item": "minecraft:glass_pane"
        }
    ],
    "inputFluid": "{Amount:300,FluidName:\"industrialforegoing:pink_slime\"}",
    "output": {
        "count": 1,
        "item": "industrialforegoing:pink_slime"
    },
    "outputFluid": "{Amount:150,FluidName:\"minecraft:water\"}",
    "processingTime": 200
}