ServerEvents.recipes(e => {
    e.recipes.immersiveengineering.arc_furnace('3x undergarden:froststeel_ingot',
        Ingredient.of('#forge:ingots/cobalt', 3),
        'thermal:blizz_powder'
    ).id(`kubejs:arc_furnace/froststeel_ingot`)

    e.recipes.immersiveengineering.arc_furnace('4x mekanism:alloy_reinforced',
        Ingredient.of('#forge:ingots/aluminum', 3),
        [Ingredient.of('#forge:dusts/lithium', 4), Ingredient.of('#forge:ingots/copper')]
    ).id(`kubejs:arc_furnace/alloy_reinforced`)
    
    e.recipes.immersiveengineering.arc_furnace('6x compactmachines:wall',
        '6x kubejs:warding_stone',
        ['immersiveengineering:coil_mv', '3x fluxnetworks:flux_dust']
    ).id(`kubejs:arc_furnace/cm_wall`)

    e.recipes.immersiveengineering.arc_furnace(['8x industrialforegoing:plastic', '8x thermal:slag'],
        '8x industrialforegoing:dryrubber',
        ['#forge:dusts/coal_petcoke', '#forge:dusts/coal_coke']
    ).id(`kubejs:arc_furnace/plastic`)

    e.recipes.immersiveengineering.arc_furnace('4x modularrouters:energy_upgrade',
        Item.of('powah:energizing_rod_basic'),
        ['mekanismgenerators:laser_focus_matrix', '4x modularrouters:blank_upgrade'],
        100 * 4,
        51200 * 4
    ).id(`kubejs:arc_furnace/energy_upgrade_from_energizing_rod_basic`)
    
    e.recipes.immersiveengineering.arc_furnace('10x modularrouters:energy_upgrade',
        'powah:energizing_rod_hardened',
        ['mekanismgenerators:laser_focus_matrix', '10x modularrouters:blank_upgrade'],
        100 * 10,
        51200 * 10
    ).id(`kubejs:arc_furnace/energy_upgrade_from_energizing_rod_hardened`)

    e.recipes.immersiveengineering.arc_furnace('34x modularrouters:energy_upgrade',
        'powah:energizing_rod_blazing',
        ['mekanismgenerators:laser_focus_matrix', '34x modularrouters:blank_upgrade'],
        100 * 34,
        51200 * 34
    ).id(`kubejs:arc_furnace/energy_upgrade_from_energizing_rod_blazing`)

    e.recipes.immersiveengineering.arc_furnace('64x modularrouters:energy_upgrade',
        'powah:energizing_rod_niotic',
        ['mekanismgenerators:laser_focus_matrix', '64x modularrouters:blank_upgrade'],
        100 * 64,
        51200 * 64
    ).id(`kubejs:arc_furnace/energy_upgrade_from_energizing_rod_niotic`)

    e.recipes.immersiveengineering.arc_furnace('3x modularrouters:puller_module_1',
        '3x modularrouters:blank_module',
        [/* 'prettypipes:' */ 'kubejs:replaceme']
    ).id(`kubejs:arc_furnace/puller_module_1`)

    e.recipes.immersiveengineering.arc_furnace('3x modularrouters:sender_module_1',
        '3x modularrouters:blank_module',
        [/* 'prettypipes:' */ 'kubejs:replaceme']
    ).id(`kubejs:arc_furnace/sender_module_1`)

    e.recipes.immersiveengineering.arc_furnace('3x modularrouters:fluid_module',
        '3x modularrouters:blank_module',
        [/* 'ppfluids:' */ 'kubejs:replaceme']
    ).id(`kubejs:arc_furnace/fluid_module`)

    e.recipes.immersiveengineering.arc_furnace('3x modularrouters:energy_output_module',
        '3x modularrouters:blank_module',
        ['thermal:charge_bench']
    ).id(`kubejs:arc_furnace/energy_output_module`)

    e.recipes.immersiveengineering.arc_furnace('kubejs:smoldering_lapis_lazuli_compound',
        'thermal:tar',
        [
            /*'atum:'*/ 'kubejs:replaceme',
            Ingredient.of('#forge:dusts/quartz', 2),
            Ingredient.of('#forge:dusts/lapis', 5)
        ],
        400,
        204800
    ).id(`kubejs:arc_furnace/smoldering_lapis_lazuli_compound`)

    e.recipes.immersiveengineering.arc_furnace('minecraft:enchanted_golden_apple',
        'create:honeyed_apple',
        [Ingredient.of('#forge:storage_blocks/arcane_gold', 4)]
    ).id(`kubejs:arc_furnace/enchanted_golden_apple`)

    e.recipes.immersiveengineering.arc_furnace('16x apotheosis:helmet_tome',
        Item.of('mekanismtools:lapis_lazuli_helmet', '{Damage:0}').weakNBT(),
        ['16x minecraft:book']
    ).id(`kubejs:arc_furnace/helmet_tome`)

    e.recipes.immersiveengineering.arc_furnace('16x apotheosis:chestplate_tome',
        Item.of('mekanismtools:lapis_lazuli_chestplate', '{Damage:0}').weakNBT(),
        ['16x minecraft:book']
    ).id(`kubejs:arc_furnace/chestplate_tome`)

    e.recipes.immersiveengineering.arc_furnace('16x apotheosis:leggings_tome',
        Item.of('mekanismtools:lapis_lazuli_leggings', '{Damage:0}').weakNBT(),
        ['16x minecraft:book']
    ).id(`kubejs:arc_furnace/leggings_tome`)

    e.recipes.immersiveengineering.arc_furnace('16x apotheosis:boots_tome',
        Item.of('mekanismtools:lapis_lazuli_boots', '{Damage:0}').weakNBT(),
        ['16x minecraft:book']
    ).id(`kubejs:arc_furnace/boots_tome`)

    e.recipes.immersiveengineering.arc_furnace('16x apotheosis:bow_tome',
        Item.of('botania:livingwood_bow', '{Damage:0}').weakNBT(),
        ['16x minecraft:book']
    ).id(`kubejs:arc_furnace/bow_tome`)

    e.recipes.immersiveengineering.arc_furnace('16x apotheosis:fishing_tome',
        Item.of('aquaculture:gold_fishing_rod', '{Damage:0}').weakNBT(),
        ['16x minecraft:book']
    ).id(`kubejs:arc_furnace/fishing_tome`)

    e.recipes.immersiveengineering.arc_furnace('16x apotheosis:pickaxe_tome',
        Item.of('mekanismtools:lapis_lazuli_pickaxe', '{Damage:0}').weakNBT(),
        ['16x minecraft:book']
    ).id(`kubejs:arc_furnace/pickaxe_tome`)

    e.recipes.immersiveengineering.arc_furnace('16x apotheosis:weapon_tome',
        Item.of('mekanismtools:lapis_lazuli_sword', '{Damage:0}').weakNBT(),
        ['16x minecraft:book']
    ).id(`kubejs:arc_furnace/weapon_tome`)

    e.recipes.immersiveengineering.arc_furnace('16x apotheosis:scrap_tome',
        'tconstruct:ender_slime_crystal',
        ['16x minecraft:book']
    ).id(`kubejs:arc_furnace/scrap_tome`)

    e.recipes.immersiveengineering.arc_furnace('16x apotheosis:improved_scrap_tome',
        'tconstruct:sky_slime_crystal',
        ['16x minecraft:book']
    ).id(`kubejs:arc_furnace/improved_scrap_tome`)

    e.recipes.immersiveengineering.arc_furnace('kubejs:laputian_ingot',
        Ingredient.of('#forge:ingots/refined_radiance', 12),
        [/*'astralsorcery:'*/ 'kubejs:replaceme'],
        100 * 64,
        51200 * 64
    ).id(`kubejs:arc_furnace/laputian_ingot`)
})
