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

        'create:milling/lapis_lazuli',
        'create:milling/coal',
        'create:milling/charcoal',
        'create:crushing/lapis_lazuli',
        'create:crushing/coal',
        'create:crushing/charcoal',

        'create:crafting/materials/andesite_alloy',
        'create:crafting/materials/andesite_alloy_from_zinc',

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
        'immersiveengineering:crafting/stick_steel',
        'immersiveengineering:crafting/stick_aluminum',
        'immersiveengineering:crafting/stick_iron',
        /immersiveengineering:crafting\/(coke|blast|alloy)brick/,
        /immersiveengineering:crafting\/ingot_\w+_to_storage_\w+/,
        /immersiveengineering:crafting\/ingot_\w+_to_nugget_\w+/,
        /immersiveengineering:crafting\/nugget_\w+_to_ingot_\w+/,
        /immersiveengineering:crafting\/storage_\w+_to_ingot_\w+/,
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
        'powah:energizing/compat/certus_quartz_to_charged_certus_quartz',
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

        // {type: 'industrialforegoing:'}

        { mod: 'ironjetpacks' },
        { mod: 'theoneprobe' },

        { type: 'thermal:compression_fuel' },

        { type: 'eidolon:worktable' },
        { type: 'eidolon:crucible' },

        { type: 'minecraft:crafting_shaped', id: /botania.*apothecary/ },

        { input: 'quark:deepslate_furnace' }, { input: 'quark:blackstone_furnace' },
        { output: 'quark:deepslate_furnace' }, { output: 'quark:blackstone_furnace' }
    ]

    idRemovals.forEach((id) => {
        e.remove({ id: id })
    })

    recipeFilterRemovals.forEach((output) => {
        e.remove(output)
    })

    // Often times mod books with patchouli and whatnot display hardcoded recipe id's
    // and when you remove those id's, the whole book can fail to load or lose a page 
    const modBookSafeRemovlas = [

    ]

    modBookSafeRemovlas.forEach(filter => {
        e.forEachRecipe(filter, recipe => {
            e.shapeless('kubejs:altered_recipe_indicator', 'kubejs:altered_recipe_indicator')
                .id(recipe.getId())
        })
    })

    // Apotheosis just looooved to hardcode recipes in a factory builder thing
    // so the id's need to be replaced as well
    const apothIdRemovals = [
        'apotheosis:helmet_tome',
        'apotheosis:chestplate_tome',
        'apotheosis:leggings_tome',
        'apotheosis:boots_tome',
        'apotheosis:weapon_tome',
        'apotheosis:bow_tome',
        'apotheosis:pickaxe_tome',
        'apotheosis:fishing_tome',
        'apotheosis:other_tome',
        'apotheosis:scrap_tome',
        'apotheosis:improved_scrap_tome',
        'apotheosis:extraction_tome',
        'apotheosis:endshelf',
        'apotheosis:seashelf',
        'apotheosis:hellshelf',
        'apotheosis:library'
    ]

    apothIdRemovals.forEach(id => {
        e.shapeless('kubejs:disabled_recipe_indicator', 'kubejs:disabled_recipe_indicator')
            .id(id)
    })
})