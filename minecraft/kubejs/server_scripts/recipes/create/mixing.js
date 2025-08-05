ServerEvents.recipes(e => {
    e.recipes.create.mixing(Item.of('undergarden:froststeel_ingot', 3),
        ['#forge:ingots/cobalt', '#forge:ingots/cobalt', '#forge:ingots/cobalt', 'thermal:blizz_powder'])
        .heated()
        .id(`kubejs:create/mixing/froststeel_ingot`)

    e.recipes.create.mixing(Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme', 4),
        ['#forge:stones/marble', '#forge:stones/marble', '#forge:stones/marble', '#forge:stones/marble'])
        .superheated()
        .id(`kubejs:create/mixing/black_marble_raw`)

    e.recipes.create.mixing('kubejs:coarse_lapis_lazuli_compound',
        [
            '#forge:dusts/lapis', '#forge:dusts/lapis', '#forge:dusts/lapis', '#forge:dusts/lapis',
            '#forge:dusts/lapis', '#forge:dusts/quartz', '#forge:dusts/quartz',
            /*'atum:'*/ 'kubejs:replaceme',
            '#forge:tar'
        ])
        .heated()
        .id(`kubejs:create/mixing/coarse_lapis_lazuli_compound`)

    e.recipes.create.mixing(Item.of('kubejs:blaze_fiber', 2),
        ['ars_nouveau:magebloom_fiber', 'ars_nouveau:magebloom_fiber', 'undergarden:ditchbulb', Fluid.of('tconstruct:blazing_blood', 500)])
        .heated()
        .id(`kubejs:create/mixing/blaze_fiber`)

    e.recipes.create.mixing(Item.of('kubejs:end_fiber', 2),
        ['kubejs:blaze_fiber', 'kubejs:blaze_fiber', '#forge:fruits/shadow_berry', Fluid.of('integrateddynamics:liquid_chorus', 500)])
        .heated()
        .id(`kubejs:create/mixing/end_fiber`)

    e.recipes.create.mixing(Item.of('kubejs:chromatic_compound', 2), [
            /*'astralsorcery:'*/ 'kubejs:replaceme',
            /*'astralsorcery:'*/ 'kubejs:replaceme',
            /*'astralsorcery:'*/ 'kubejs:replaceme',
        '#forge:ingots/infused_iron',
        'create:polished_rose_quartz',
            /*'astralsorcery:'*/ 'kubejs:replaceme',
            /*'astralsorcery:'*/ 'kubejs:replaceme',
            /*'astralsorcery:'*/ 'kubejs:replaceme',
        '#forge:ingots/manasteel'
    ])
        .superheated()
        .id(`kubejs:create/mixing/chromatic_compound`)

    e.remove({ id: 'powah:dielectric_paste' })
    e.recipes.create.mixing(Item.of('powah:dielectric_paste', 24), [
        '#forge:sand/colorless',
        '#forge:sand/colorless',
        '#forge:gems/silicon',
        '#forge:gems/silicon',
        '#forge:gems/silicon',
        'thermal:tar',
        'thermal:tar'
    ])
        .superheated()
        .id(`kubejs:create/mixing/dielectric_paste`)

    e.recipes.create.mixing(Item.of('kubejs:coke_brick_blend', 4), [
        'minecraft:clay_ball',
        'minecraft:clay_ball',
        'create:cinder_flour',
        'kubejs:basalt_powder',
        'kubejs:basalt_powder',
        Fluid.of('minecraft:water', 100)
    ])
        .id(`kubejs:create/mixing/coke_brick_blend`)

    e.recipes.create.mixing(Item.of('kubejs:blast_brick_blend', 4), [
            /*'atum:'*/ 'kubejs:replaceme',
        '#forge:dusts/coal_coke',
        '#forge:dusts/coal_coke',
        '#forge:dusts/coal_coke',
        'minecraft:blaze_powder',
        'minecraft:gunpowder',
        'minecraft:gunpowder',
        Fluid.of('minecraft:water', 100)
    ])
        .id(`kubejs:create/mixing/blast_brick_blend`)

    e.remove({ id: 'ars_nouveau:source_berry_roll' })
    e.recipes.create.mixing(Item.of('ars_nouveau:source_berry_roll', 3), [
        'farmersdelight:wheat_dough',
        'farmersdelight:wheat_dough',
        'farmersdelight:wheat_dough',
        'ars_nouveau:sourceberry_bush',
    ])
        .id(`kubejs:create/mixing/source_berry_roll`)

    e.recipes.create.mixing(Item.of('kubejs:monster_mash', 2), [
        'minecraft:spider_eye',
        'minecraft:spider_eye',
        'minecraft:rotten_flesh',
        'minecraft:rotten_flesh',
        'minecraft:gunpowder',
        'minecraft:gunpowder'
    ])
        .heated()
        .id(`kubejs:create/mixing/monster_mash`)
})