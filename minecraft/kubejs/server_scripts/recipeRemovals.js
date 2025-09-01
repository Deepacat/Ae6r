ServerEvents.recipes(e => {
    /*
    This file is moreso for mass removals of items via regex or recipe filters.
    if an item has one recipe then the recipe should be removed before it is created.

    if an item has no recipe, and should be entirely removed,
    it should be added to nuker instead to be hidden and removed.
    
    if an item has multiple recipes that are not custom, they may be removed here.
    */
    const idRemovals = [
        'quark:tweaks/crafting/utility/misc/easy_sticks',
        'minecraft:stick',

        'thermal:invar_dust_3',

        'architects_palette:sunstone',

        'ars_nouveau:dull_trinket',
        'ars_nouveau:mundane_belt',
        'ars_nouveau:ring_of_potential',

        'bloodmagic:arc/weakbloodshard_tau',
        /bloodmagic:alchemytable\/melee_damage_anointment/,

        'botania:mana_infusion/mana_diamond_block',

        /compactmachines:machine_/,

        'computercraft:turtle_normal',
        'computercraft:turtle_advanced',
        'computercraft:pocket_computer_normal',
        'computercraft:pocket_computer_advanced',

        /create:crafting\/materials\/andesite_alloy/,
        /create:\w+\/bread/,
        /create:crafting\/materials\/\w+_block_from_compacting/,
        /create:crafting\/materials\/\w+_ingot_from_compacting/,
        /create:crafting\/materials\/\w+_ingot_from_decompacting/,
        /create:crafting\/materials\/\w+_nugget_from_decompacting/,
        /create:smelting\/ingot_\w+_compat/,
        /create:smelting\/\w+_ingot_compat/,
        /create:blasting\/ingot_\w+_compat/,
        /create:blasting\/\w+_ingot_compat/,
        /create:compat\/thermal\/crushing\/\w+_ore/,
        /create:crushing\/.*_ore/,
        /create:crushing\/raw_\/\w+_block/,

        /createaddition:compat/,
        /createaddition:pressing/,
        /createaddition:pressing/,
        /createaddition:rolling\/.*ingot/,
        /createaddition:rolling\/.*plate/,

        /createdieselgenerators:compat/,

        /compactmachines:machine_/,

        /embers:.*hammering/,
        /embers:stamping\/.*ingot/,
        /embers:stamping\/.*plates/,
        /embers:stamping\/.*gears/,
        /embers:melting\/.*gear/,
        /embers:melting\/plates/,
        /embers:melting\/ingots/,
        /embers:melting\/nuggets/,
        /embers:melting\/storage_blocks/,
        /embers:melting\/raw_materials/,
        /embers:melting\/ores/,

        // move to nuke
        'eidolon:crucible',
        'eidolon:wooden_brewing_stand',
        'eidolon:worktable',
        
        'eidolon:smelt_pewter_blend',

        'farmersdelight:book_from_canvas',

        'fluxnetworks:fluxcontroller',
        'fluxnetworks:fluxplug',
        'fluxnetworks:fluxpoint',

        'immersiveengineering:crafting/component_iron',
        'immersiveengineering:crafting/component_steel',
        'immersiveengineering:crafting/concrete',
        'immersiveengineering:mixer/concrete',
        /immersiveengineering:crafting\/(coke|blast|alloy)brick/,
        /immersiveengineering:crafting\/ingot_\w+_to_storage_\w+/,
        /immersiveengineering:crafting\/ingot_\w+_to_nugget_\w+/,
        /immersiveengineering:crafting\/nugget_\w+_to_ingot_\w+/,
        /immersiveengineering:crafting\/storage_\w+_to_ingot_\w+/,
        /immersiveengineering:crafting\/plate_/,
        /immersiveengineering:crafting\/stick_/,
        /immersiveengineering:metalpress\/.*plate/,
        /immersiveengineering:metalpress\/.*rod/,
        /immersiveengineering:metalpress\/.*gear/,

        'industrialforegoing:mob_slaughter_factory',
        /industrialforegoing:mycelial/,
        'industrialforegoing:dissolution_chamber/mycelial_reactor',

        'integrateddynamics:crafting/cable',
        'integrateddynamics:crafting/cable_rotated',
        'integrateddynamics:crafting/energy_battery',
        'integrateddynamics:crafting/mechanical_drying_basin',
        'integrateddynamics:crafting/mechanical_squeezer',
        'integrateddynamics:crafting/drying_basin',
        'integrateddynamics:crafting/squeezer',
        'integrateddynamics:crafting/coal_generator',
        'integrateddynamics:crafting/logic_director',
        'integrateddynamics:crafting/variable_transformer_output',
        'integrateddynamics:crafting/variable_transformer_input',

        'mekanism:metallurgic_infusing/alloy/reinforced',
        'mekanism:metallurgic_infusing/alloy/atomic',
        'mekanism:enriching/conversion/basalt_to_polished_basalt',
        'mekanism:processing/refined_glowstone/ingot_to_dust',
        'mekanism:processing/refined_obsidian/dust/from_ingot',
        'mekanism:osmium_compressor',
        /mekanism:factory/,
        'mekanism:robit',
        /mekanism:mekasuit/,
        'mekanism:upgrade/filter',
        /mekanism:storage_blocks\/\w+/,
        /mekanism:nuggets\/\w+/,
        /mekanism:processing\/\w+\/storage_blocks\/from_ingots/,
        /mekanism:processing\/\w+\/ingot\/from_block/,
        /mekanism:processing\/\w+\/ingot\/from_nuggets/,
        /mekanism:processing\/\w+\/nugget\/from_ingot/,

        'mekanismgenerators:separator/heavy_water',
        'mekanismgenerators:activating/tritium',

        'minecraft:book',
        'minecraft:stick',
        'minecraft:golden_carrot',
        'minecraft:glistering_melon_slice',
        'minecraft:golden_apple',
        'minecraft:lodestone',

        'mininggadgets:upgrade_empty',

        'modularrouters:energy_upgrade',
        'modularrouters:sender_module_1_alt',

        /naturesaura:animal_spawner\/sheep_/,

        /occultism:crafting\/\w+_block/,
        /occultism:crafting\/\w+_nugget/,
        /occultism:crafting\/\w+_ingot_from_nuggets/,

        'pedestals:upgrades/recycler',

        'pneumaticcraft:explosion_crafting/compressed_iron_block',
        'pneumaticcraft:explosion_crafting/compressed_iron_ingot',
        'pneumaticcraft:speed_upgrade',
        'pneumaticcraft:reinforced_stone', // note: there is a glycerol variant of this recipe, check if exists in original

        'powah:crafting/dielectric_paste_2',
        'powah:energizing/blazing_crystal_2',
        'powah:crafting/capacitor_basic',
        'powah:crafting/capacitor_basic_tiny',
        /powah:crafting\/cable_/,

        'quark:building/crafting/red_nether_bricks_util',

        'rftoolscontrol:cpu_core_500',
        'rftoolscontrol:cpu_core_1000',
        'rftoolscontrol:cpu_core_2000',

        'sophisticatedbackpacks:feeding_upgrade',
        'sophisticatedbackpacks:advanced_feeding_upgrade',
        'sophisticatedbackpacks:auto_smelting_upgrade',
        'sophisticatedbackpacks:pump_upgrade',
        'sophisticatedbackpacks:advanced_pump_upgrade',
        'sophisticatedbackpacks:xp_pump_upgrade',
        'sophisticatedbackpacks:advanced_compacting_upgrade',
        'sophisticatedbackpacks:tool_swapper_upgrade',
        'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
        'sophisticatedbackpacks:refill_upgrade',

        'tconstruct:smeltery/alloys/molten_refined_obsidian',
        'tconstruct:smeltery/melting/metal/netherite/lodestone',
        'tconstruct:smeltery/melting/metal/gold/produce',
        'tconstruct:smeltery/scorched/scorched_brick',
        'tconstruct:smeltery/seared/melter',
        'tconstruct:smeltery/seared/seared_brick',
        'tconstruct:compat/refined_glowstone_ingot',
        'tconstruct:compat/refined_obsidian_ingot',
        /tconstruct:common\/materials\/\w+_block_from_ingots/,
        /tconstruct:common\/materials\/\w+_ingot_from_block/,
        /tconstruct:common\/materials\/\w+_ingot_from_nuggets/,
        /tconstruct:common\/materials\/\w+_nugget_from_ingot/,

        /thermal:compat\/\w+\/\w+_ore/,
        /thermal:storage\/\w+_block/,
        /thermal:storage\/\w+_ingot_from_nuggets/,
        /thermal:storage\/\w+_nugget_from_ingot/,

        'tomeofblood:glyph_sentientharm',

        'waystones:warp_dust',
    ]

    // todo organize this LMAO (also move id removals to respective recipes...?)
    const recipeFilterRemovals = [
        { output: 'mekanism:sawdust', mod: 'mekanism', type: 'mekanism:sawing' },

        { output: 'botania:mana_powder', mod: 'botania' },
        
        { output: '/\\w+:\\w+_gear$/', type: 'minecraft:crafting_shaped' },

        { mod: 'occultism', type: 'occultism:miner' },

        { output: '/powah:\\w+_starter/', mod: 'powah' },
        { type: 'botanypots:crop' },

        { type: 'botanypots:soil' },

        { type: 'thermal:insolator' },
        { type: 'immersiveengineering:cloche' },

        { type: 'valhelsia_structures:axe_crafting' },
        { input: 'minecraft:fire_charge', mod: 'thermal', type: 'minecraft:crafting_shapeless' },

        /* I honestly have no idea why e6e unifies logs and dyes so im gonna keep this normal for now */
        // { type: 'pedestals:pedestal_crushing', output: '#forge:dyes' },
        // { type: 'create:milling', output: '#forge:dyes' },
        // { type: 'create:crushing', output: '#forge:dyes' },
        // { type: 'mekanism:enriching', output: '#forge:dyes' },
        // { type: 'thermal:centrifuge', output: '#forge:dyes' },
        // { type: 'immersiveengineering:crusher', output: '#forge:dyes' },

        // { type: 'create:cutting', input: '#minecraft:logs' },
        // { type: 'immersiveengineering:sawmill', input: '#minecraft:logs' },

        { type: 'mekanism:combining' },
        { type: 'minecraft:smelting', output: 'minecraft:obsidian' },
        { type: 'minecraft:blasting', output: 'minecraft:obsidian' },

        { type: 'minecraft:smelting', input: '#forge:ores' },
        { type: 'minecraft:blasting', input: '#forge:ores' },
        { type: 'minecraft:smelting', input: '#forge:dusts' },
        { type: 'minecraft:blasting', input: '#forge:dusts' },

        { type: 'minecraft:smelting', input: '#farmersdelight:tools/knives' },
        { type: 'minecraft:blasting', input: '#farmersdelight:tools/knives' },

        { type: 'industrialforegoing:fluid_extractor' },
        { type: 'thermal:tree_extractor' },

        { mod: 'ironjetpacks' },
        { mod: 'theoneprobe' },

        { type: 'thermal:compression_fuel' },

        { type: 'eidolon:worktable' },
        { type: 'eidolon:crucible' },

        { output: 'apotheosis:hellshelf', id: 'apotheosis:hellshelf' },
        { output: 'apotheosis:seashelf', id: 'apotheosis:seashelf' },
        { output: 'apotheosis:endshelf', id: 'apotheosis:endshelf' },
        { output: 'apotheosis:enchantment_library', id: 'apotheosis:enchantment_library' },
        { type: 'minecraft:crafting', output: /apoth:.*tome/ },

        { output: 'ars_nouveau:arcane_stone', id: 'ars_nouveau:arcane_stone' },
        { output: 'ars_nouveau:crystallizer', id: 'ars_nouveau:crystallizer' },
        { output: 'ars_nouveau:volcanic_accumulator', id: 'ars_nouveau:volcanic_accumulator' },
        { output: 'ars_nouveau:mana_condenser', id: 'ars_nouveau:mana_condenser' },
        { output: 'ars_nouveau:mycelial_sourcelink', id: 'ars_nouveau:mycelial_sourcelink' },
        { output: 'ars_nouveau:vitalic_sourcelink', id: 'ars_nouveau:vitalic_sourcelink' },
        { output: 'ars_nouveau:alchemical_sourcelink', id: 'ars_nouveau:alchemical_sourcelink' },
        { output: 'ars_nouveau:sorceror_hood', id: 'ars_nouveau:sorceror_hood' },
        { output: 'ars_nouveau:sorceror_robes', id: 'ars_nouveau:sorceror_robes' },
        { output: 'ars_nouveau:sorceror_leggings', id: 'ars_nouveau:sorceror_leggings' },
        { output: 'ars_nouveau:sorceror_boots', id: 'ars_nouveau:sorceror_boots' },
        { output: 'ars_nouveau:arcanist_hood', id: 'ars_nouveau:arcanist_hood' },
        { output: 'ars_nouveau:arcanist_robes', id: 'ars_nouveau:arcanist_robes' },
        { output: 'ars_nouveau:arcanist_leggings', id: 'ars_nouveau:arcanist_leggings' },
        { output: 'ars_nouveau:arcanist_boots', id: 'ars_nouveau:arcanist_boots' },
        { output: 'ars_nouveau:battlemage_hood', id: 'ars_nouveau:battlemage_hood' },
        { output: 'ars_nouveau:battlemage_robes', id: 'ars_nouveau:battlemage_robes' },
        { output: 'ars_nouveau:battlemage_leggings', id: 'ars_nouveau:battlemage_leggings' },
        { output: 'ars_nouveau:battlemage_boots', id: 'ars_nouveau:battlemage_boots' },
        
        // why does e6e remove like this why dont they just do id removals what even
        { output: 'bloodmagic:soulforge', id: 'bloodmagic:soul_forge' },
        { output: 'bloodmagic:ritualdiviner', id: 'bloodmagic:ritual_diviner_0' },
        { output: 'bloodmagic:blankrune', id: 'bloodmagic:blood_rune_blank' },
        { output: 'bloodmagic:speedrune', id: 'bloodmagic:blood_rune_speed' },
        { output: 'bloodmagic:sacrificerune', id: 'bloodmagic:blood_rune_sacrifice' },
        { output: 'bloodmagic:selfsacrificerune', id: 'bloodmagic:blood_rune_self_sacrifice' },
        { output: 'bloodmagic:dislocationrune', id: 'bloodmagic:blood_rune_displacement' },
        { output: 'bloodmagic:altarcapacityrune', id: 'bloodmagic:blood_rune_capacity' },
        { output: 'bloodmagic:bettercapacityrune', id: 'bloodmagic:blood_rune_aug_capacity' },
        { output: 'bloodmagic:orbcapacityrune', id: 'bloodmagic:blood_rune_orb' },
        { output: 'bloodmagic:accelerationrune', id: 'bloodmagic:blood_rune_acceleration' },
        { output: 'bloodmagic:chargingrune', id: 'bloodmagic:blood_rune_charging' },
        { output: 'bloodmagic:teleposer', id: 'bloodmagic:teleposer' },
        { output: 'bloodmagic:syntheticpoint', id: 'bloodmagic:synthetic_point' },

        { output: 'botania:terrasteel_helmet', id: 'botania:terrasteel_helmet' },
        { output: 'botania:terrasteel_chestplate', id: 'botania:terrasteel_chestplate' },
        { output: 'botania:terrasteel_leggings', id: 'botania:terrasteel_leggings' },
        { output: 'botania:terrasteel_boots', id: 'botania:terrasteel_boots' },
        { output: 'botania:spark', id: 'botania:spark' },
        { output: 'botania:mana_pylon', id: 'botania:mana_pylon' },
        { output: 'botania:natura_pylon', id: 'botania:natura_pylon' },
        { output: 'botania:apothecary_default', id: 'botania:apothecary_default' },
        { output: 'botania:terra_plate', id: 'botania:terra_plate' },
        { output: 'botania:alfheim_portal', id: 'botania:alfheim_portal' },
        { output: 'botania:mana_ring', id: 'botania:mana_ring' },
        { output: 'botania:gaia_ingot', id: 'botania:gaia_ingot' },
        { output: 'botania:gaia_pylon', id: 'botania:gaia_pylon' },
        { output: 'botania:mining_ring', id: 'botania:mining_ring' },
        { output: 'botania:dodge_ring', id: 'botania:dodge_ring' },
        { output: 'botania:swap_ring', id: 'botania:swap_ring' },
        { output: 'botania:water_ring', id: 'botania:water_ring' },
        { output: 'botania:magnet_ring', id: 'botania:magnet_ring' },
        { output: 'botania:aura_ring', id: 'botania:aura_ring' },
        { output: 'botania:pixie_ring', id: 'botania:pixie_ring' },
        { output: 'botania:reach_ring', id: 'botania:reach_ring' },
        { output: 'botania:flight_tiara', id: 'botania:flighttiara_0' },
        { output: 'botania:runic_altar', id: 'botania:runic_altar' },
        { output: 'botania:mana_spreader', id: 'botania:mana_spreader' },
        { output: 'botania:elven_spreader', id: 'botania:elven_spreader' },
        { output: 'botania:gaia_spreader', id: 'botania:gaia_spreader' },
        { output: 'botania:fel_pumpkin', id: 'botania:fel_pumpkin' },
        { output: 'botania:blood_pendant', id: 'botania:blood_pendant' },
        { output: 'botania:ender_dagger', id: 'botania:ender_dagger' },
        { output: 'botania:brewery', id: 'botania:brewery' },
        { output: 'botania:thorn_chakram', id: 'botania:thorn_chakram' },
        { output: 'botania:flare_chakram', id: 'botania:flare_chakram' },
        { output: 'botania:laputa_shard', id: 'botania:laputa_shard' },
        { output: 'botania:gaia_pylon', id: 'mythicbotany:modified_gaia_pylon_with_alfsteel' },
        { output: 'mythicbotany:alfsteel_pylon', id: 'mythicbotany:alfsteel_pylon' },
        { output: 'mythicbotany:mana_infuser', id: 'mythicbotany:mana_infuser' },
        { output: 'mythicbotany:fire_ring', id: 'mythicbotany:fire_ring' },
        { output: 'mythicbotany:ice_ring', id: 'mythicbotany:ice_ring' },
        { output: 'mythicbotany:mana_collector', id: 'mythicbotany:mana_collector' },
        { output: 'mythicbotany:kvasir_mead', id: 'mythicbotany:kvasir_mead' },

        { output: 'naturesaura:calling_spirit', id: 'naturesaura:calling_spirit' },
        { output: 'naturesaura:animal_spawner', id: 'naturesaura:animal_spawner' },
        { output: 'naturesaura:gold_fiber', id: 'naturesaura:gold_fiber' },
        { output: 'naturesaura:gold_brick', id: 'naturesaura:gold_brick' },
        { output: 'naturesaura:generator_limit_remover', id: 'naturesaura:generator_limit_remover' },
        { output: 'naturesaura:shockwave_creator', id: 'naturesaura:shockwave_creator' },
        { output: 'naturesaura:death_ring', id: 'naturesaura:death_ring' },
        { output: 'naturesaura:ender_crate', id: 'naturesaura:ender_crate' },
        { output: 'naturesaura:ender_access', id: 'naturesaura:ender_access' },
        { output: 'naturesaura:gold_nether_brick', id: 'naturesaura:gold_nether_brick' },

        { output: 'pneumaticcraft:air_compressor', id: 'pneumaticcraft:air_compressor' },
        { output: 'pneumaticcraft:advanced_air_compressor', id: 'pneumaticcraft:advanced_air_compressor' },
        { output: 'pneumaticcraft:pressure_chamber_wall', id: 'pneumaticcraft:pressure_chamber_valve_x1' },
        { output: 'pneumaticcraft:pressure_chamber_wall', id: 'pneumaticcraft:pressure_chamber_valve_x4' },
        { output: 'pneumaticcraft:flux_compressor', id: 'pneumaticcraft:flux_compressor' },
        { output: 'pneumaticcraft:printed_circuit_board', id: 'pneumaticcraft:printed_circuit_board' },
        { output: 'pneumaticcraft:assembly_drill', id: 'pneumaticcraft:assembly_drill' },
        { output: 'pneumaticcraft:assembly_laser', id: 'pneumaticcraft:assembly_laser' },
        { output: 'pneumaticcraft:assembly_io_unit_import', id: 'pneumaticcraft:assembly_io_unit_import' },
        { output: 'pneumaticcraft:assembly_io_unit_export', id: 'pneumaticcraft:assembly_io_unit_export' },
        { output: 'pneumaticcraft:assembly_controller', id: 'pneumaticcraft:assembly_controller' },
        { output: 'pneumaticcraft:assembly_platform', id: 'pneumaticcraft:assembly_platform' },
        { output: 'pneumaticcraft:aerial_interface', id: 'pneumaticcraft:aerial_interface' },
        { output: 'pneumaticcraft:spawner_extractor', id: 'pneumaticcraft:spawner_extractor' },

        { input: 'quark:deepslate_furnace' },
        { input: 'quark:blackstone_furnace' },
        { output: 'quark:deepslate_furnace' },
        { output: 'quark:blackstone_furnace' }

    ]

    idRemovals.forEach((id) => {
        e.remove({ id: id })
    })

    recipeFilterRemovals.forEach((output) => {
        e.remove(output)
    })
})