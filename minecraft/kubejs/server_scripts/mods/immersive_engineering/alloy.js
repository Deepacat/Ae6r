ServerEvents.recipes(e => {
    e.recipes.immersiveengineering.alloy('3x undergarden:froststeel_ingot',
        Ingredient.of('#forge:ingots/cobalt', 3),
        'thermal:blizz_powder'
    ).id(`kubejs:alloy_kiln/alloy/froststeel_ingot_3`)

    e.remove({ id: 'immersiveengineering:crafting/blueprint_components' })
    e.recipes.immersiveengineering.alloy(Item.of('immersiveengineering:blueprint', { blueprint: "components" }),
        'minecraft:book',
        'pneumaticcraft:upgrade_matrix'
    ).id(`kubejs:alloy_kiln/blueprint_components`)

    e.recipes.immersiveengineering.alloy('minecraft:enchanted_golden_apple',
        'create:honeyed_apple',
        Ingredient.of('#forge:storage_blocks/arcane_gold', 4)
    ).id(`kubejs:alloy_kiln/enchanted_golden_apple`)

    e.recipes.immersiveengineering.alloy('16x apotheosis:helmet_tome',
        '16x minecraft:book',
        Item.of('mekanismtools:lapis_lazuli_helmet', { Damage: 0 }).weakNBT()
    ).id(`kubejs:alloy_kiln/helmet_tome`)

    e.recipes.immersiveengineering.alloy('16x apotheosis:chestplate_tome',
        '16x minecraft:book',
        Item.of('mekanismtools:lapis_lazuli_chestplate', { Damage: 0 }).weakNBT()
    ).id(`kubejs:alloy_kiln/chestplate_tome`)

    e.recipes.immersiveengineering.alloy('16x apotheosis:leggings_tome',
        '16x minecraft:book',
        Item.of('mekanismtools:lapis_lazuli_leggings', { Damage: 0 }).weakNBT()
    ).id(`kubejs:alloy_kiln/leggings_tome`)

    e.recipes.immersiveengineering.alloy('16x apotheosis:boots_tome',
        '16x minecraft:book',
        Item.of('mekanismtools:lapis_lazuli_boots', { Damage: 0 }).weakNBT()
    ).id(`kubejs:alloy_kiln/boots_tome`)

    e.recipes.immersiveengineering.alloy('16x apotheosis:bow_tome',
        '16x minecraft:book',
        Item.of('botania:livingwood_bow', { Damage: 0 }).weakNBT()
    ).id(`kubejs:alloy_kiln/bow_tome`)

    e.recipes.immersiveengineering.alloy('16x apotheosis:fishing_tome',
        '16x minecraft:book',
        Item.of('aquaculture:gold_fishing_rod', { Damage: 0 }).weakNBT()
    ).id(`kubejs:alloy_kiln/fishing_tome`)

    e.recipes.immersiveengineering.alloy('16x apotheosis:pickaxe_tome',
        '16x minecraft:book',
        Item.of('mekanismtools:lapis_lazuli_pickaxe', { Damage: 0 }).weakNBT()
    ).id(`kubejs:alloy_kiln/pickaxe_tome`)

    e.recipes.immersiveengineering.alloy('16x apotheosis:weapon_tome',
        '16x minecraft:book',
        Item.of('mekanismtools:lapis_lazuli_sword', { Damage: 0 }).weakNBT()
    ).id(`kubejs:alloy_kiln/weapon_tome`)

    e.recipes.immersiveengineering.alloy('16x apotheosis:scrap_tome',
        '16x minecraft:book',
        'tconstruct:ender_slime_crystal'
    ).id(`kubejs:alloy_kiln/scrap_tome`)

    e.recipes.immersiveengineering.alloy('16x apotheosis:other_tome',
        '16x minecraft:book',
        'tconstruct:sky_slime_crystal'
    ).id(`kubejs:alloy_kiln/other_tome`)

    e.recipes.immersiveengineering.alloy('2x thermal:enderium_ingot',
        '2x #forge:ingots/terminite',
        '#forge:dusts/diamond'
    ).id(`kubejs:alloy_kiln/enderium_ingot`)
    
    e.recipes.immersiveengineering.alloy('2x thermal:enderium_block',
        '2x #forge:storage_blocks/terminite',
        '9x #forge:dusts/diamond'
    ).id(`kubejs:alloy_kiln/enderium_block`)
    
    e.recipes.immersiveengineering.alloy('3x modularrouters:puller_module_1',
        '3x modularrouters:blank_module',
        '3x kubejs:replaceme'
    ).id(`kubejs:alloy_kiln/puller_module_1`)

    e.recipes.immersiveengineering.alloy('3x modularrouters:sender_module_1',
        '3x modularrouters:blank_module',
        '3x kubejs:replaceme'
    ).id(`kubejs:alloy_kiln/sender_module_1`)

    e.recipes.immersiveengineering.alloy('3x modularrouters:fluid_module',
        '3x modularrouters:blank_module',
        '3x kubejs:replaceme'
    ).id(`kubejs:alloy_kiln/fluid_module`)

    e.recipes.immersiveengineering.alloy('3x modularrouters:energy_output_module',
        '3x modularrouters:blank_module',
        'thermal:charge_bench'
    ).id(`kubejs:alloy_kiln/energy_output_module`)
})