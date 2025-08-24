ServerEvents.recipes(event => {

    const id_prefix = 'enigmatica:expert/immersiveengineering/arc_furnace/'
    var data = {
        recipes: [
            {
                input1: Ingredient.of('#forge:ingots/cobalt', 3),
                secondaries: ['thermal:blizz_powder'],
                outputs: [Item.of('3x undergarden:froststeel_ingot')],
                id: `${id_prefix}froststeel_ingot`
            },
            {
                input1: Ingredient.of('#forge:ingots/aluminum', 3),
                secondaries: [Ingredient.of('#forge:dusts/lithium', 4), Ingredient.of('#forge:ingots/copper')],
                outputs: [Item.of('4x mekanism:alloy_reinforced')],
                id: `${id_prefix}alloy_reinforced`
            },
            {
                input1: Item.of(/* 'ars_nouveau:' */ 'kubejs:replaceme'),
                secondaries: ['immersiveengineering:coil_mv', Item.of('3x fluxnetworks:flux_dust')],
                outputs: [Item.of('6x compactmachines:wall')],
                id: `${id_prefix}cm_wall`
            },
            {
                input1: Item.of('8x industrialforegoing:dryrubber'),
                secondaries: [['#forge:dusts/coal_petcoke', '#forge:dusts/coal_coke']],
                outputs: [Item.of('8x industrialforegoing:plastic'), Item.of('8x thermal:slag')],
                id: `${id_prefix}plastic`
            },
            {
                input1: Item.of('powah:energizing_rod_basic'),
                secondaries: ['mekanismgenerators:laser_focus_matrix', Item.of('4x modularrouters:blank_upgrade')],
                outputs: [Item.of('4x modularrouters:energy_upgrade')],
                time: 100 * 4,
                energy: 51200 * 4,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_basic`
            },
            {
                input1: Item.of('powah:energizing_rod_hardened'),
                secondaries: ['mekanismgenerators:laser_focus_matrix', Item.of('10x modularrouters:blank_upgrade')],
                outputs: [Item.of('10x modularrouters:energy_upgrade')],
                time: 100 * 10,
                energy: 51200 * 10,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_hardened`
            },
            {
                input1: Item.of('powah:energizing_rod_blazing'),
                secondaries: ['mekanismgenerators:laser_focus_matrix', Item.of('34x modularrouters:blank_upgrade')],
                outputs: [Item.of('34x modularrouters:energy_upgrade')],
                time: 100 * 34,
                energy: 51200 * 34,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_blazing`
            },
            {
                input1: Item.of('powah:energizing_rod_niotic'),
                secondaries: ['mekanismgenerators:laser_focus_matrix', Item.of('64x modularrouters:blank_upgrade')],
                outputs: [Item.of('64x modularrouters:energy_upgrade')],
                time: 100 * 64,
                energy: 51200 * 64,
                id: `${id_prefix}energy_upgrade_from_energizing_rod_niotic`
            },
            {
                input1: Item.of('3x modularrouters:blank_module'),
                secondaries: [Item.of(/* 'prettypipes:' */ 'kubejs:replaceme')],
                outputs: [Item.of('3x modularrouters:puller_module_1')],
                id: `${id_prefix}puller_module_1`
            },
            {
                input1: Item.of('3x modularrouters:blank_module'),
                secondaries: [Item.of(/* 'prettypipes:' */ 'kubejs:replaceme')],
                outputs: [Item.of('3x modularrouters:sender_module_1')],
                id: `${id_prefix}sender_module_1`
            },
            {
                input1: Item.of('3x modularrouters:blank_module'),
                secondaries: [Item.of(/* 'ppfluids:' */ 'kubejs:replaceme')],
                outputs: [Item.of('3x modularrouters:fluid_module')],
                id: `${id_prefix}fluid_module`
            },
            {
                input1: Item.of('3x modularrouters:blank_module'),
                secondaries: [Item.of('thermal:charge_bench')],
                outputs: [Item.of('3x modularrouters:energy_output_module')],
                id: `${id_prefix}energy_output_module`
            },
            {
                input1: Item.of('thermal:tar'),
                secondaries: [
                    /*'atum:'*/ 'kubejs:replaceme',
                    Ingredient.of('#forge:dusts/quartz', 2),
                    Ingredient.of('#forge:dusts/lapis', 5)
                ],
                outputs: ['kubejs:smoldering_lapis_lazuli_compound'],
                time: 400,
                energy: 204800,
                id: `${id_prefix}smoldering_lapis_lazuli_compound`
            },
            {
                input1: 'create:honeyed_apple',
                secondaries: [Ingredient.of('#forge:storage_blocks/arcane_gold', 4)],
                outputs: ['minecraft:enchanted_golden_apple'],
                id: `${id_prefix}enchanted_golden_apple`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_helmet', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:helmet_tome')],
                id: `${id_prefix}helmet_tome`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_chestplate', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:chestplate_tome')],
                id: `${id_prefix}chestplate_tome`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_leggings', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:leggings_tome')],
                id: `${id_prefix}leggings_tome`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_boots', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:boots_tome')],
                id: `${id_prefix}boots_tome`
            },
            {
                input1: Item.of('botania:livingwood_bow', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:bow_tome')],
                id: `${id_prefix}bow_tome`
            },
            {
                input1: Item.of('aquaculture:gold_fishing_rod', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:fishing_tome')],
                id: `${id_prefix}fishing_tome`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_pickaxe', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:pickaxe_tome')],
                id: `${id_prefix}pickaxe_tome`
            },
            {
                input1: Item.of('mekanismtools:lapis_lazuli_sword', '{Damage:0}').weakNBT(),
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:weapon_tome')],
                id: `${id_prefix}weapon_tome`
            },
            {
                input1: 'tconstruct:ender_slime_crystal',
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:scrap_tome')],
                id: `${id_prefix}scrap_tome`
            },
            {
                input1: 'tconstruct:sky_slime_crystal',
                secondaries: [Item.of('16x minecraft:book')],
                outputs: [Item.of('16x apotheosis:improved_scrap_tome')],
                id: `${id_prefix}improved_scrap_tome`
            },
            {
                input1: 'thermal:rf_coil',
                secondaries: [Item.of('8x minecraft:book')],
                outputs: [Item.of('8x pedestals:bookmagnet')],
                id: `${id_prefix}bookmagnet`
            },
            {
                input1: '#forge:ingots/invar',
                secondaries: [Item.of('8x minecraft:book')],
                outputs: [Item.of('8x pedestals:bookarea')],
                id: `${id_prefix}bookarea`
            },
            {
                input1: '#forge:ingots/lumium',
                secondaries: [Item.of('8x minecraft:book')],
                outputs: [Item.of('8x pedestals:bookrange')],
                id: `${id_prefix}bookrange`
            },
            {
                input1: '#forge:ingots/terminite',
                secondaries: [Item.of('8x minecraft:book')],
                outputs: [Item.of('8x pedestals:bookspeed')],
                id: `${id_prefix}bookspeed`
            },
            {
                input1: '#forge:ingots/infused_iron',
                secondaries: [Item.of('8x minecraft:book')],
                outputs: [Item.of('8x pedestals:bookcapacity')],
                id: `${id_prefix}bookcapacity`
            },
            {
                input1: '#forge:ingots/refined_radiance',
                secondaries: [Item.of('8x minecraft:book')],
                outputs: [Item.of('8x pedestals:bookadvanced')],
                id: `${id_prefix}bookadvanced`
            },
            {
                input1: 'quark:white_corundum_cluster',
                secondaries: [Item.of('4x glassential:glass_ghostly')],
                outputs: [Item.of(/* 'atum:' */ 'kubejs:replaceme')],
                id: `${id_prefix}crystal_glass`
            },
            {
                input1: 'quark:white_corundum',
                secondaries: [Item.of('3x glassential:glass_ghostly')],
                outputs: [Item.of(/* 'atum:' */ 'kubejs:replaceme')],
                id: `${id_prefix}crystal_glass_2`
            },
            {
                input1: Ingredient.of('#forge:ingots/refined_radiance', 12),
                secondaries: [/*'astralsorcery:'*/ 'kubejs:replaceme'],
                outputs: ['kubejs:laputian_ingot'],
                time: 100 * 64,
                energy: 51200 * 64,
                id: `${id_prefix}laputian_ingot`
            }
        ]
    }

    data.recipes.forEach((recipe) => {
        // console.log(`Adding recipe: ${recipe.id}, output: ${recipe.outputs}, index: ${data.recipes.indexOf(recipe)}`)
        const re = event.recipes.immersiveengineering
            .arc_furnace(recipe.outputs, recipe.input1, recipe.secondaries)
            .id(recipe.id)

        if (recipe.time) {
            re.time(recipe.time)
        }

        if (recipe.energy) {
            re.energy(recipe.energy)
        }
    })
})
