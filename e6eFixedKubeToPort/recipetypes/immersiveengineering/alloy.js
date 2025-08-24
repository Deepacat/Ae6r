ServerEvents.recipes(event => {

    const idPrefix = 'enigmatica:expert/immersiveengineering/alloy/'
    const recipes = [
        {
            inputs: [Ingredient.of('#forge:ingots/cobalt', 3), 'thermal:blizz_powder'],
            output: Item.of('3x undergarden:froststeel_ingot'),
            id: `${idPrefix}froststeel_ingot_3`
        },
        {
            inputs: ['minecraft:book', 'pneumaticcraft:upgrade_matrix'],
            output: Item.of('immersiveengineering:blueprint', { blueprint: "components" }),
            id: `immersiveengineering:crafting/blueprint_components`
        },
        // {
        //     inputs: [Item.of('4x glassential:glass_ghostly'), 'quark:white_corundum_cluster'],
        //     output: Item.of(/* 'atum:' */ 'kubejs:replaceme'),
        //     id: `${idPrefix}crystal_glass`
        // },
        // {
        //     inputs: [Item.of('3x glassential:glass_ghostly'), 'quark:white_crystal'],
        //     output: Item.of(/* 'atum:' */ 'kubejs:replaceme'),
        //     id: `${idPrefix}crystal_glass_2`
        // },
        {
            inputs: [Ingredient.of('#forge:storage_blocks/arcane_gold', 3), 'create:honeyed_apple'],
            output: Item.of('minecraft:enchanted_golden_apple'),
            id: `${idPrefix}enchanted_golden_apple`
        },
        {
            inputs: [
                Item.of('16x minecraft:book'),
                Item.of('mekanismtools:lapis_lazuli_helmet', { Damage: 0 }).weakNBT()
            ],
            output: Item.of('16x apotheosis:helmet_tome'),
            id: `${idPrefix}helmet_tome`
        },
        {
            inputs: [
                Item.of('16x minecraft:book'),
                Item.of('mekanismtools:lapis_lazuli_chestplate', { Damage: 0 }).weakNBT()
            ],
            output: Item.of('16x apotheosis:chestplate_tome'),
            id: `${idPrefix}chestplate_tome`
        },
        {
            inputs: [
                Item.of('16x minecraft:book'),
                Item.of('mekanismtools:lapis_lazuli_leggings', { Damage: 0 }).weakNBT()
            ],
            output: Item.of('16x apotheosis:leggings_tome'),
            id: `${idPrefix}leggings_tome`
        },
        {
            inputs: [
                Item.of('16x minecraft:book'),
                Item.of('mekanismtools:lapis_lazuli_boots', { Damage: 0 }).weakNBT()
            ],
            output: Item.of('16x apotheosis:boots_tome'),
            id: `${idPrefix}boots_tome`
        },
        {
            inputs: [Item.of('16x minecraft:book'), Item.of('botania:livingwood_bow', { Damage: 0 }).weakNBT()],
            output: Item.of('16x apotheosis:bow_tome'),
            id: `${idPrefix}bow_tome`
        },
        {
            inputs: [Item.of('16x minecraft:book'), Item.of('aquaculture:gold_fishing_rod', { Damage: 0 }).weakNBT()],
            output: Item.of('16x apotheosis:fishing_tome'),
            id: `${idPrefix}fishing_tome`
        },
        {
            inputs: [
                Item.of('16x minecraft:book'),
                Item.of('mekanismtools:lapis_lazuli_pickaxe', { Damage: 0 }).weakNBT()
            ],
            output: Item.of('16x apotheosis:pickaxe_tome'),
            id: `${idPrefix}pickaxe_tome`
        },
        {
            inputs: [
                Item.of('16x minecraft:book'),
                Item.of('mekanismtools:lapis_lazuli_sword', { Damage: 0 }).weakNBT()
            ],
            output: Item.of('16x apotheosis:weapon_tome'),
            id: `${idPrefix}weapon_tome`
        },
        {
            inputs: [Item.of('16x minecraft:book'), 'tconstruct:ender_slime_crystal'],
            output: Item.of('16x apotheosis:scrap_tome'),
            id: `${idPrefix}scrap_tome`
        },
        {
            inputs: [Item.of('16x minecraft:book'), 'tconstruct:sky_slime_crystal'],
            output: Item.of('16x apotheosis:improved_scrap_tome'),
            id: `${idPrefix}improved_scrap_tome`
        },
        // {
        //     inputs: [Item.of('8x minecraft:book'), 'thermal:rf_coil'],
        //     output: Item.of('8x pedestals:bookmagnet'),
        //     id: 'pedestals:bookmagnet'
        // },
        // {
        //     inputs: [Item.of('8x minecraft:book'), '#forge:ingots/invar'],
        //     output: Item.of('8x pedestals:bookarea'),
        //     id: 'pedestals:bookarea'
        // },
        // {
        //     inputs: [Item.of('8x minecraft:book'), '#forge:ingots/lumium'],
        //     output: Item.of('8x pedestals:bookrange'),
        //     id: 'pedestals:bookrange'
        // },
        // {
        //     inputs: [Item.of('8x minecraft:book'), '#forge:ingots/terminite'],
        //     output: Item.of('8x pedestals:bookspeed'),
        //     id: 'pedestals:bookspeed'
        // },
        // {
        //     inputs: [Item.of('8x minecraft:book'), '#forge:ingots/infused_iron'],
        //     output: Item.of('8x pedestals:bookcapacity'),
        //     id: 'pedestals:bookcapacity'
        // },
        // {
        //     inputs: [Item.of('8x minecraft:book'), '#forge:ingots/refined_radiance'],
        //     output: Item.of('8x pedestals:bookadvanced'),
        //     id: 'pedestals:bookadvanced'
        // },
        {
            inputs: [Ingredient.of('#forge:ingots/terminite', 2), '#forge:dusts/diamond'],
            output: Item.of('2x emendatus:enderium_ingot'),
            id: `${idPrefix}enderium_ingot`
        },
        {
            inputs: [Ingredient.of('#forge:storage_blocks/terminite', 2), Ingredient.of('#forge:dusts/diamond', 9)],
            output: Item.of('2x emendatus:enderium_block'),
            id: `${idPrefix}enderium_block`
        },
        {
            inputs: [Item.of('3x modularrouters:blank_module'), Item.of('3x kubejs:replaceme')],
            output: Item.of('3x modularrouters:puller_module_1'),
            id: 'modularrouters:puller_module_1'
        },
        {
            inputs: [Item.of('3x modularrouters:blank_module'), Item.of('3x kubejs:replaceme')],
            output: Item.of('3x modularrouters:sender_module_1'),
            id: 'modularrouters:sender_module_1'
        },
        {
            inputs: [Item.of('3x modularrouters:blank_module'), Item.of('3x kubejs:replaceme')],
            output: Item.of('3x modularrouters:fluid_module'),
            id: 'modularrouters:fluid_module'
        },
        {
            inputs: [Item.of('3x modularrouters:blank_module'), 'thermal:charge_bench'],
            output: Item.of('3x modularrouters:energy_output_module'),
            id: 'modularrouters:energy_output_module'
        }
    ]

    recipes.forEach((recipe) => {
        // console.log(`Adding recipe: ${recipe.id}, output: ${recipe.output}, index: ${recipes.indexOf(recipe)}`)
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.inputs[0], recipe.inputs[1]).id(recipe.id)
    })
})