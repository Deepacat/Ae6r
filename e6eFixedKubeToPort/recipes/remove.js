ServerEvents.recipes(event => {
    const idRemovals = [
        /*'astralsorcery:'*/ 'kubejs:replaceme',
        /*'astralsorcery:'*/ 'kubejs:replaceme',
        /*'astralsorcery:'*/ 'kubejs:replaceme',

        /*'atum:'*/ 'kubejs:replaceme',
        /*'atum:'*/ 'kubejs:replaceme',
        /*'atum:'*/ 'kubejs:replaceme',

        /*'betterendforge:'*/ 'kubejs:replaceme',
        /*'betterendforge:'*/ 'kubejs:replaceme',

        /*'byg:'*/ 'kubejs:replaceme',

        'computercraft:computer_advanced_upgrade',
        'computercraft:turtle_advanced_upgrade',
        'computercraft:pocket_computer_advanced_upgrade',

        /create:pressing\/\w*_ingot/,

        /dankstorage:\w_to_\w/,

        'darkutils:crafting/rune_damage_player',
        'darkutils:crafting/blank_plate',
        /darkutils:crafting\/export_plate/,

        'eidolon:crucible',
        'eidolon:wooden_brewing_stand',
        'eidolon:worktable',

        'immersiveengineering:crafting/concrete2',
        /immersiveengineering:crafting\/plate_/,
        'immersiveengineering:generator_fuel/biodiesel',
        'immersiveengineering:generator_fuel/creosote',

        /* 'materialis:' */ 'kubejs:replaceme',

        'minecraft:leather_to_stripes',

        'pedestals:ingot_gold_from_upgrades',
        'pedestals:upgrades/breaker2',
        'pedestals:upgrades/crafter1mk2',
        'pedestals:upgrades/rfexpgen',
        'pedestals:upgrades/rffuelgen',

        'quark:building/crafting/candles/candle_basic',
        'quark:tools/crafting/runes/rainbow_rune',

        /*'refinedstorage:'*/ 'kubejs:replaceme',
        /*'refinedstorage:'*/ 'kubejs:replaceme',
        /*'refinedstorage:'*/ 'kubejs:replaceme',
        /*'refinedstorage:'*/ 'kubejs:replaceme',
        /*'refinedstorage:'*/ 'kubejs:replaceme',

        'tconstruct:smeltery/scorched/scorched_brick_kiln',
        'tconstruct:smeltery/seared/seared_brick_kiln',
        'tconstruct:tables/book_substitute',

        'thermal:compat/refinedstorage/smelter_refinedstorage_alloy_quartz_enriched_iron',

        /create:crafting\/materials\/andesite_alloy/,
        /emendatus:alloy_dust/
    ]

    const outputRemovals = [
        'tiab:timeinabottle',
        'minecraft:nautilus_shell',
        'bloodmagic:intermediatecuttingfluid',
        'engineersdecor:factory_placer'
    ]

    const patchouli_safe_removals = [
        { output: 'apotheosis:hellshelf', id: 'apotheosis:hellshelf' },
        { output: 'apotheosis:seashelf', id: 'apotheosis:seashelf' },
        { output: 'apotheosis:endshelf', id: 'apotheosis:endshelf' },
        { output: 'apotheosis:library', id: 'apotheosis:library' },
        { output: 'apotheosis:helmet_tome', id: 'apotheosis:helmet_tome' },
        { output: 'apotheosis:chestplate_tome', id: 'apotheosis:chestplate_tome' },
        { output: 'apotheosis:leggings_tome', id: 'apotheosis:leggings_tome' },
        { output: 'apotheosis:boots_tome', id: 'apotheosis:boots_tome' },
        { output: 'apotheosis:bow_tome', id: 'apotheosis:bow_tome' },
        { output: 'apotheosis:fishing_tome', id: 'apotheosis:fishing_tome' },
        { output: 'apotheosis:pickaxe_tome', id: 'apotheosis:pickaxe_tome' },
        { output: 'apotheosis:weapon_tome', id: 'apotheosis:weapon_tome' },
        { output: 'apotheosis:scrap_tome', id: 'apotheosis:scrap_tome' },
        { output: 'apotheosis:improved_scrap_tome', id: 'apotheosis:improved_scrap_tome' },
        { output: 'apotheosis:extraction_tome', id: 'apotheosis:extraction_tome' },

        { output: 'ars_nouveau:sourcestone', id: 'ars_nouveau:sourcestone' },
        { output: 'ars_nouveau:imbuement_chamber', id: 'ars_nouveau:imbuement_chamber' },
        { output: 'ars_nouveau:volcanic_sourcelink', id: 'ars_nouveau:volcanic_sourcelink' },
        // { output: 'ars_nouveau:mana_condenser', id: 'ars_nouveau:mana_condenser' },
        { output: 'ars_nouveau:mycelial_sourcelink', id: 'ars_nouveau:mycelial_sourcelink' },
        { output: 'ars_nouveau:vitalic_sourcelink', id: 'ars_nouveau:vitalic_sourcelink' },
        { output: 'ars_nouveau:alchemical_sourcelink', id: 'ars_nouveau:alchemical_sourcelink' },
        { output: 'ars_nouveau:sorcerer_hood', id: 'ars_nouveau:sorcerer_hood' },
        { output: 'ars_nouveau:sorcerer_robes', id: 'ars_nouveau:sorcerer_robes' },
        { output: 'ars_nouveau:sorcerer_leggings', id: 'ars_nouveau:sorcerer_leggings' },
        { output: 'ars_nouveau:sorcerer_boots', id: 'ars_nouveau:sorcerer_boots' },
        { output: 'ars_nouveau:arcanist_hood', id: 'ars_nouveau:arcanist_hood' },
        { output: 'ars_nouveau:arcanist_robes', id: 'ars_nouveau:arcanist_robes' },
        { output: 'ars_nouveau:arcanist_leggings', id: 'ars_nouveau:arcanist_leggings' },
        { output: 'ars_nouveau:arcanist_boots', id: 'ars_nouveau:arcanist_boots' },
        { output: 'ars_nouveau:battlemage_hood', id: 'ars_nouveau:battlemage_hood' },
        { output: 'ars_nouveau:battlemage_robes', id: 'ars_nouveau:battlemage_robes' },
        { output: 'ars_nouveau:battlemage_leggings', id: 'ars_nouveau:battlemage_leggings' },
        { output: 'ars_nouveau:battlemage_boots', id: 'ars_nouveau:battlemage_boots' },

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
        { output: 'pneumaticcraft:spawner_extractor', id: 'pneumaticcraft:spawner_extractor' }
    ]

    idRemovals.forEach((id) => {
        event.remove({ id: id })
    })

    outputRemovals.forEach((output) => {
        event.remove({ output: output })
    })

    event.remove({ type: 'minecraft:crafting_shapeless', output: '#forge:dusts', mod: 'thermal' })
    event.remove({ type: 'minecraft:crafting_shapeless', output: '#forge:dusts', mod: 'immersiveengineering' })
    event.remove({ type: 'integrateddynamics:drying_basin' })
    event.remove({ type: 'integrateddynamics:mechanical_drying_basin' })
    event.remove({ type: 'integrateddynamics:squeezer' })
    event.remove({ type: 'integrateddynamics:mechanical_squeezer' })

    for (let recipe of patchouli_safe_removals) {
        // console.log(`removing ${recipe.id}, at index [${patchouli_safe_removals.indexOf(recipe)}]`)
        event.shaped(recipe.output, ['A'], { A: 'kubejs:altered_recipe_indicator' }).id(recipe.id)
    }
})
