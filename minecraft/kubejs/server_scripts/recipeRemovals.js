ServerEvents.recipes(e => {
    /*
    This file is moreso for mass removals of items via regex or recipe filters, 
    if an item has a recipe then the recipe should be removed before it is created
    if an item has no recipe, and should be entirely removed, -
    it should be added to nuker instead to be hidden and removed
    */
    const idRemovals = [
        /bloodmagic:alchemytable\/melee_damage_anointment/,

        /compactmachines:machine_/,

        /createaddition:compat/,
        /createaddition:pressing/,

        /immersiveengineering:crafting\/plate_/,
        /immersiveengineering:metalpress\/.*plate/,
        /immersiveengineering:metalpress\/.*rod/,
        /immersiveengineering:metalpress\/.*gear/,

        /embers:stamping\/.*gear/,
        /embers:melting\/.*gear/,
        /embers:melting\/plates/,
        /embers:melting\/ingots/,
        /embers:melting\/nuggets/,
        /embers:melting\/storage_blocks/,
        /embers:melting\/raw_materials/,
        /embers:melting\/ores/,

        /industrialforegoing:mycelial/,

        /mekanism:factory/,
        /mekanism:mekasuit/,

        /naturesaura:animal_spawner\/sheep_/,

        /powah:crafting\/cable_/,

        /create:crafting\/materials\/andesite_alloy/,

        /create:\w+\/bread/,

        /create:smelting\/ingot_\w+_compat/,
        /create:smelting\/\w+_ingot_compat/,
        /create:blasting\/ingot_\w+_compat/,
        /create:blasting\/\w+_ingot_compat/,
        /create:compat\/thermal\/crushing\/\w+_ore/,
        /thermal:compat\/\w+\/\w+_ore/,
        /decorative_blocks:\w+_beam/,
        /decorative_blocks_abnormals:\w+_beam/,
        /mekanism:storage_blocks\/\w+/,
        /mekanism:nuggets\/\w+/,
        // /mekanism:processing\/\w+\/storage_blocks\/from_ingots/,
        // /mekanism:processing\/\w+\/ingot\/from_block/,
        // /mekanism:processing\/\w+\/ingot\/from_nuggets/,
        // /mekanism:processing\/\w+\/nugget\/from_ingot/,
        // /thermal:storage\/\w+_block/,
        // /thermal:storage\/\w+_ingot_from_nuggets/,
        // /thermal:storage\/\w+_nugget_from_ingot/,
        // /tconstruct:common\/materials\/\w+_block_from_ingots/,
        // /tconstruct:common\/materials\/\w+_ingot_from_block/,
        // /tconstruct:common\/materials\/\w+_ingot_from_nuggets/,
        // /tconstruct:common\/materials\/\w+_nugget_from_ingot/,
        // /immersiveengineering:crafting\/ingot_\w+_to_storage_\w+/,
        // /immersiveengineering:crafting\/ingot_\w+_to_nugget_\w+/,
        // /immersiveengineering:crafting\/nugget_\w+_to_ingot_\w+/,
        // /immersiveengineering:crafting\/storage_\w+_to_ingot_\w+/,
        /create:crafting\/materials\/\w+_block_from_compacting/,
        /create:crafting\/materials\/\w+_ingot_from_compacting/,
        /create:crafting\/materials\/\w+_ingot_from_decompacting/,
        /create:crafting\/materials\/\w+_nugget_from_decompacting/,
        /occultism:crafting\/\w+_block/,
        /occultism:crafting\/\w+_nugget/,
        /occultism:crafting\/\w+_ingot_from_nuggets/
    ]

    const recipeFilterRemovals = [
        {
            output: 'mekanism:sawdust',
            mod: 'mekanism',
            type: 'mekanism:sawing'
        },
        {
            output: '/\\w+:\\w+_gear$/',
            type: 'minecraft:crafting_shaped'
        },
        {
            mod: 'occultism',
            type: 'occultism:miner'
        },
        {
            output: '/powah:\\w+_starter/',
            mod: 'powah'
        },
        { type: 'botanypots:crop' },
        { type: 'botanypots:soil' },
        { type: 'thermal:insolator' },
        { type: 'immersiveengineering:cloche' },
        { type: 'valhelsia_structures:axe_crafting' },
        {
            input: 'minecraft:fire_charge',
            mod: 'thermal',
            type: 'minecraft:crafting_shapeless'
        },
        { type: 'pedestals:pedestal_crushing', output: '#forge:dyes' },
        { type: 'create:milling', output: '#forge:dyes' },
        { type: 'create:crushing', output: '#forge:dyes' },
        { type: 'mekanism:enriching', output: '#forge:dyes' },
        { type: 'thermal:centrifuge', output: '#forge:dyes' },
        { type: 'immersiveengineering:crusher', output: '#forge:dyes' },

        { type: 'create:cutting', input: '#minecraft:logs' },
        { type: 'immersiveengineering:sawmill', input: '#minecraft:logs' },

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
        { output: 'apotheosis:armor_head_book', id: 'apotheosis:armor_head_book' },
        { output: 'apotheosis:armor_chest_book', id: 'apotheosis:armor_chest_book' },
        { output: 'apotheosis:armor_legs_book', id: 'apotheosis:armor_legs_book' },
        { output: 'apotheosis:armor_feet_book', id: 'apotheosis:armor_feet_book' },
        { output: 'apotheosis:bow_book', id: 'apotheosis:bow_book' },
        { output: 'apotheosis:fishing_rod_book', id: 'apotheosis:fishing_rod_book' },
        { output: 'apotheosis:digger_book', id: 'apotheosis:digger_book' },
        { output: 'apotheosis:weapon_book', id: 'apotheosis:weapon_book' },
        { output: 'apotheosis:scrap_tome', id: 'apotheosis:scrap_tome' },
        { output: 'apotheosis:null_book', id: 'apotheosis:null_book' },

        { output: 'ars_nouveau:arcane_stone', id: 'ars_nouveau:arcane_stone' },
        { output: 'ars_nouveau:crystallizer', id: 'ars_nouveau:crystallizer' },
        { output: 'ars_nouveau:volcanic_accumulator', id: 'ars_nouveau:volcanic_accumulator' },
        { output: 'ars_nouveau:mana_condenser', id: 'ars_nouveau:mana_condenser' },
        { output: 'ars_nouveau:mycelial_sourcelink', id: 'ars_nouveau:mycelial_sourcelink' },
        { output: 'ars_nouveau:vitalic_sourcelink', id: 'ars_nouveau:vitalic_sourcelink' },
        { output: 'ars_nouveau:alchemical_sourcelink', id: 'ars_nouveau:alchemical_sourcelink' },
        { output: 'ars_nouveau:novice_hood', id: 'ars_nouveau:novice_hood' },
        { output: 'ars_nouveau:novice_robes', id: 'ars_nouveau:novice_robes' },
        { output: 'ars_nouveau:novice_leggings', id: 'ars_nouveau:novice_leggings' },
        { output: 'ars_nouveau:novice_boots', id: 'ars_nouveau:novice_boots' },
        { output: 'ars_nouveau:apprentice_hood', id: 'ars_nouveau:apprentice_hood' },
        { output: 'ars_nouveau:apprentice_robes', id: 'ars_nouveau:apprentice_robes' },
        { output: 'ars_nouveau:apprentice_leggings', id: 'ars_nouveau:apprentice_leggings' },
        { output: 'ars_nouveau:apprentice_boots', id: 'ars_nouveau:apprentice_boots' },
        { output: 'ars_nouveau:archmage_hood', id: 'ars_nouveau:archmage_hood' },
        { output: 'ars_nouveau:archmage_robes', id: 'ars_nouveau:archmage_robes' },
        { output: 'ars_nouveau:archmage_leggings', id: 'ars_nouveau:archmage_leggings' },
        { output: 'ars_nouveau:archmage_boots', id: 'ars_nouveau:archmage_boots' },

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