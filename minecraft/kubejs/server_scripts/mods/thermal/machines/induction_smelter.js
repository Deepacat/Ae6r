ServerEvents.recipes(e => {
    e.recipes.thermal.smelter('2x ae2:silicon',
        ['2x emendatus:silica_dust', '3x supplementaries:ash'],
    ).id('kubejs:thermal/machines/induction_smelter/silicon_ash')

    e.recipes.thermal.smelter('2x ae2:silicon',
        ['2x emendatus:silica_dust', '3x #forge:dusts/coal'],
    ).id('kubejs:thermal/machines/induction_smelter/silicon_coal')

    e.recipes.thermal.smelter(Item.of('undergarden:froststeel_ingot', 3),
        [Item.of('#forge:ingots/cobalt', 3), 'thermal:blizz_powder'])
        .id('kubejs:thermal/machines/induction_smelter/froststeel_ingot')

    e.recipes.thermal.smelter(Item.of(/*'atum:'*/ 'kubejs:replaceme', 2),
        ['glassential:glass_ghostly', 'quark:white_corundum_cluster', /*'atum:'*/ 'kubejs:replaceme'])
        .id('kubejs:thermal/machines/induction_smelter/crystal_glass')

    e.recipes.thermal.smelter(Item.of('tconstruct:seared_brick', 2),
        ['#forge:clay', '#forge:sand', '#forge:gravel'])
        .id('kubejs:thermal/machines/induction_smelter/seared_brick')

    e.recipes.thermal.smelter('tconstruct:seared_brick',
        ['tconstruct:grout'])
        .id('kubejs:thermal/machines/induction_smelter/seared_brick_from_grout')

    e.recipes.thermal.smelter(Item.of('tconstruct:scorched_brick', 2),
        ['minecraft:magma_cream', '#minecraft:soul_fire_base_blocks', '#forge:gravel'])
        .id('kubejs:thermal/machines/induction_smelter/scorched_brick')

    e.recipes.thermal.smelter('tconstruct:scorched_brick',
        ['tconstruct:nether_grout'])
        .id('kubejs:thermal/machines/induction_smelter/scorched_brick_from_nether_grout')

    e.recipes.thermal.smelter('4x mekanism:alloy_reinforced',
        [Ingredient.of('#forge:dusts/lithium', 4), Ingredient.of('#forge:ingots/aluminum', 3), '#forge:ingots/copper'])
        .id('kubejs:thermal/machines/induction_smelter/alloy_reinforced')

    e.recipes.thermal.smelter(Item.of('6x compactmachines:wall'),
        [Item.of(/* 'ars_nouveau:' */ 'kubejs:replaceme'), 'immersiveengineering:coil_mv', '3x fluxnetworks:flux_dust'])
        .id('kubejs:thermal/machines/induction_smelter/cm_wall')
})