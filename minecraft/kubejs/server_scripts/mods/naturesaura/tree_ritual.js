ServerEvents.recipes(e => {
    e.remove({ id: "naturesaura:tree_ritual/nature_altar" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:nature_altar', [
        'kubejs:warding_stone', 'kubejs:warding_stone',
        'naturesaura:token_joy', 'naturesaura:gold_leaf',
        'thermal:ice_charge', 'thermal:lightning_charge',
        'thermal:earth_charge', 'minecraft:fire_charge'
    ]).time(50).sapling('quark:yellow_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/nature_altar')

    e.remove({ id: "naturesaura:tree_ritual/token_joy" })
    e.recipes.naturesaura.tree_ritual(
        '2x naturesaura:token_joy', [
        Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'), 'botania:pink_shiny_flower',
        'naturesaura:gold_leaf', 'minecraft:golden_apple',
        'architects_palette:sunmetal_blend', 'botania:pink_shiny_flower',
        'architects_palette:sunmetal_blend', 'botania:pink_shiny_flower'
    ]).time(20).sapling('quark:yellow_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/token_joy')

    e.remove({ id: "naturesaura:tree_ritual/token_fear" })
    e.recipes.naturesaura.tree_ritual(
        '2x naturesaura:token_fear', [
        Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), 'upgrade_aquatic:thrasher_tooth',
        'naturesaura:gold_leaf', 'eidolon:ender_calx',
        'kubejs:replaceme', 'upgrade_aquatic:thrasher_tooth',
        'kubejs:replaceme', 'upgrade_aquatic:thrasher_tooth'
    ]).time(20).sapling('quark:lavender_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/token_fear')

    e.remove({ id: "naturesaura:tree_ritual/token_anger" })
    e.recipes.naturesaura.tree_ritual(
        '2x naturesaura:token_anger', [
        'quark:bottled_cloud', 'powah:charged_snowball',
        'naturesaura:gold_leaf', Item.of('minecraft:diamond_axe', '{Damage:0}').weakNBT(),
        'alexsmobs:komodo_spit', 'powah:charged_snowball',
        'alexsmobs:komodo_spit', 'powah:charged_snowball'
    ]).time(20).sapling('quark:red_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/token_anger')

    e.remove({ id: "naturesaura:tree_ritual/token_sorrow" })
    e.recipes.naturesaura.tree_ritual(
        '2x naturesaura:token_sorrow', [
        Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'), 'botania:black_shiny_flower',
        'naturesaura:gold_leaf', 'quark:soul_bead',
        'minecraft:ghast_tear', 'botania:black_shiny_flower',
        'minecraft:ghast_tear', 'botania:black_shiny_flower'
    ]).time(20).sapling('quark:lavender_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/token_sorrow')

    e.remove({ id: "naturesaura:oak_generator" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:oak_generator', [
        'naturesaura:infused_iron', 'architects_palette:sunstone',
        'ars_nouveau:whirlisprig_shards', 'naturesaura:token_joy',
        'thermal:phytogro', 'botania:livingwood',
        'thermal:phytogro', 'botania:livingwood'
    ]).time(60).sapling('quark:yellow_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/oak_generator')

    e.remove({ id: "naturesaura:animal_generator" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:animal_generator', [
        'naturesaura:tainted_gold', 'architects_palette:moonstone',
        Item.of('eidolon:reaper_scythe', '{Damage:0}').weakNBT(), 'naturesaura:token_sorrow',
        '#forge:ingots/nether_brick', 'minecraft:soul_sand',
        '#forge:ingots/nether_brick', 'minecraft:soul_sand'
    ]).time(60).sapling('quark:blue_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/animal_generator')

    e.remove({ id: "naturesaura:firework_generator" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:firework_generator', [
        'naturesaura:sky_ingot', 'kubejs:firmament',
        'ars_nouveau:glyph_launch', 'minecraft:fire_charge',
        'minecraft:firework_rocket', 'naturesaura:token_joy',
        'minecraft:firework_rocket', 'naturesaura:token_rage'
    ]).time(60).sapling('quark:blue_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/firework_generator')

    e.remove({ id: "naturesaura:flower_generator" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:flower_generator', [
        'naturesaura:infused_iron', 'architects_palette:sunstone',
        'ars_nouveau:glyph_harvest', 'naturesaura:token_joy',
        'botania:livingwood', 'botania:livingwood',
        'botania:livingwood', 'botania:livingwood'
    ]).time(60).sapling('quark:yellow_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/flower_generator')

    e.remove({ id: "naturesaura:slime_split_generator" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:slime_split_generator', [
        'naturesaura:tainted_gold', 'architects_palette:moonstone',
        'ars_nouveau:glyph_split', 'supplementaries:bamboo_spikes',
        '#forge:ingots/nether_brick', 'naturesaura:token_sorrow',
        '#forge:ingots/nether_brick', 'naturesaura:token_joy'
    ]).time(60).sapling('quark:lavender_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/slime_split_generator')

    e.remove({ id: "naturesaura:chorus_generator" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:chorus_generator', [
        'eidolon:ender_calx', 'quark:ender_watcher',
        'ars_nouveau:glyph_blink', 'minecraft:chorus_flower',
        'integratedterminals:chorus_glass', 'naturesaura:token_joy',
        'integratedterminals:chorus_glass', 'naturesaura:token_rage'
    ]).time(60).sapling('quark:blue_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/chorus_generator')

    e.remove({ id: "naturesaura:potion_generator" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:potion_generator', [
        'naturesaura:tainted_gold', 'architects_palette:moonstone',
        'ars_nouveau:glyph_aoe', 'naturesaura:token_fear',
        'eidolon:fungus_sprouts', '#forge:ingots/nether_brick',
        'eidolon:fungus_sprouts', '#forge:ingots/nether_brick'
    ]).time(60).sapling('quark:lavender_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/potion_generator')

    e.remove({ id: "naturesaura:moss_generator" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:moss_generator', [
        'naturesaura:infused_iron', 'ars_nouveau:glyph_wither',
        'naturesaura:token_terror', 'naturesaura:token_grief',
        'architects_palette:moonstone', 'architects_palette:sunstone',
        'botania:mossy_livingwood_planks', 'botania:mossy_livingwood_planks'
    ]).time(60).sapling('quark:lavender_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/moss_generator')

    e.remove({ id: "naturesaura:projectile_generator" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:projectile_generator', [
        'naturesaura:infused_iron', 'architects_palette:sunstone',
        'ars_nouveau:glyph_amplify', 'ars_nouveau:glyph_projectile',
        'rsgauges:arrow_target', 'naturesaura:token_anger',
        'rsgauges:arrow_target', 'naturesaura:token_anger'
    ]).time(60).sapling('quark:yellow_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/projectile_generator')

    // e.remove({ id: "naturesstarlight:crystal_generator" })
    // e.recipes.naturesaura.tree_ritual(
    //     'naturesstarlight:crystal_generator', [
    //     'naturesaura:infused_iron', 'architects_palette:moonstone', 'ars_nouveau:glyph_grow', 'naturesaura:token_joy', 'kubejs:replaceme', '#forge:ingots/starmetal', 'kubejs:replaceme', '#forge:ingots/starmetal'
    // ]).time(60).sapling('quark:lavender_blossom_sapling')
    //     .id('kubejs:naturesaura/tree_ritual/crystal_generator')

    e.recipes.naturesaura.tree_ritual(
        'kubejs:replaceme', [
        'naturesaura:token_joy', 'kubejs:replaceme',
        '#botania:runes/summer', '#botania:runes/spring',
        '#resourcefulbees:resourceful_honeycomb_block',
        '#resourcefulbees:resourceful_honeycomb_block',
        '#resourcefulbees:resourceful_honey_block', '#resourcefulbees:resourceful_honey_block'
    ]).time(30).sapling('quark:yellow_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/replaceme')

    e.remove({ id: "naturesaura:tree_ritual/eye" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:eye', [
        'meetyourfight:spectres_eye', '#forge:ingots/silver',
        'naturesaura:gold_leaf', 'naturesaura:gold_leaf',
        'farmersdelight:tree_bark', 'farmersdelight:tree_bark',
        'farmersdelight:tree_bark', 'farmersdelight:tree_bark'
    ]).time(20).sapling('quark:lavender_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/eye')

    e.remove({ id: "naturesaura:tree_ritual/eye_improved" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:eye_improved', [
        'naturesaura:eye', '#forge:ingots/sky',
        '#forge:ingots/sky', 'naturesaura:end_flower',
        'naturesaura:gold_leaf', 'naturesaura:gold_leaf',
        'botania:lens_normal', 'upgrade_aquatic:elder_eye'
    ]).time(50).sapling('quark:lavender_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/eye_improved')

    e.remove({ id: "naturesaura:tree_ritual/conversion_catalyst" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:conversion_catalyst', [
        'naturesaura:gold_brick', 'naturesaura:infused_stone',
        'botania:brewery', '#forge:ingots/sky',
        'naturesaura:gold_leaf', 'eidolon:gold_inlay'
    ]).time(60).sapling('quark:orange_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/conversion_catalyst')

    e.remove({ id: "naturesaura:tree_ritual/crushing_catalyst" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:crushing_catalyst', [
        'naturesaura:gold_brick', 'naturesaura:infused_stone',
        '#forge:ingots/andesite_alloy', '#forge:ingots/andesite_alloy',
        'naturesaura:token_anger'
    ]).time(60).sapling('quark:red_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/crushing_catalyst')

    e.remove({ id: "naturesaura:tree_ritual/furnace_heater" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:furnace_heater', [
        'naturesaura:infused_stone', 'naturesaura:infused_stone',
        '#forge:ingots/tainted_gold', '#forge:ingots/infused_iron',
        'minecraft:fire_charge', Item.of('minecraft:flint_and_steel',
            '{Damage:0}').weakNBT(), 'tconstruct:magma_cake', 'naturesaura:token_anger'
    ]).time(60).sapling('quark:red_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/furnace_heater')

    e.remove({ id: "naturesaura:tree_ritual/break_prevention" })
    e.recipes.naturesaura.tree_ritual(
        'naturesaura:break_prevention', [
        '#forge:gems/source_diamond', '#forge:ingots/tainted_gold',
        '#forge:ingots/sky', 'naturesaura:token_fear'
    ]).time(20).sapling('quark:yellow_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/break_prevention')

    e.remove({ id: "naturesaura:tree_ritual/ancient_sapling" })
    e.recipes.naturesaura.tree_ritual(
        '2x naturesaura:ancient_sapling', [
        'naturesaura:gold_leaf', 'naturesaura:gold_leaf',
        'undergarden:blisterberry', 'aether:enchanted_berry',
        'undergarden:wigglewood_sapling', 'undergarden:veil_mushroom',
        'aether_redux:crystal_fruit_sapling', 'aether_redux:shimmerstool'
    ]).time(20).sapling('quark:lavender_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/ancient_sapling')

    e.remove({ id: "naturesaura:tree_ritual/ore_spawn_powder" })
    e.recipes.naturesaura.tree_ritual(
        Item.of('naturesaura:effect_powder', 4, { effect: "naturesaura:ore_spawn" }), [
        'naturesaura:gold_powder', 'naturesaura:gold_powder',
        '#forge:ores/emerald', '#forge:ores/cobalt',
        '#botania:runes/spring'
    ]).time(40).sapling('quark:yellow_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/ore_spawn_powder')

    e.remove({ id: "naturesaura:tree_ritual/cache_powder" })
    e.recipes.naturesaura.tree_ritual(
        Item.of('naturesaura:effect_powder', 32, { effect: "naturesaura:cache_recharge" }), [
        'naturesaura:gold_powder', 'naturesaura:gold_powder',
        'botania:ender_eye_block', 'naturesaura:aura_cache',
        '#forge:ingots/tainted_gold', '#forge:ingots/tainted_gold'
    ]).time(40).sapling('quark:yellow_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/cache_powder')

    e.remove({ id: "naturesaura:tree_ritual/animal_powder" })
    e.recipes.naturesaura.tree_ritual(
        Item.of('naturesaura:effect_powder', 8, { effect: "naturesaura:animal" }), [
        'naturesaura:gold_powder', 'naturesaura:gold_powder',
        '#forge:ingots/infused_iron', 'ars_nouveau:ritual_fertility',
        'minecraft:golden_carrot', 'minecraft:golden_carrot',
        'minecraft:golden_carrot', 'minecraft:golden_carrot'
    ]).time(40).sapling('quark:lavender_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/animal_powder')

    e.remove({ id: "naturesaura:tree_ritual/plant_powder" })
    e.recipes.naturesaura.tree_ritual(
        Item.of('naturesaura:effect_powder', 24, { effect: "naturesaura:plant_boost" }), [
        'naturesaura:gold_powder', 'naturesaura:gold_powder',
        '#forge:ingots/tainted_gold', 'kubejs:replaceme',
        'kubejs:replaceme', 'kubejs:replaceme',
        'kubejs:replaceme', 'kubejs:replaceme'
    ]).time(40).sapling('quark:yellow_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/plant_powder')

    e.remove({ id: "naturesaura:tree_ritual/nether_grass_powder" })
    e.recipes.naturesaura.tree_ritual(
        Item.of('naturesaura:effect_powder', 24, { effect: "naturesaura:nether_grass" }), [
        'naturesaura:gold_powder', 'naturesaura:gold_powder',
        '#forge:ingots/tainted_gold', 'minecraft:crimson_nylium',
        'minecraft:crimson_fungus', 'minecraft:crimson_fungus',
        'minecraft:crimson_fungus', 'minecraft:crimson_fungus'
    ]).time(40).sapling('quark:yellow_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/tree_ritual/nether_grass_powder')

    e.recipes.naturesaura.tree_ritual(
        'naturesaura:shockwave_creator', [
        'eidolon:basic_amulet', '#forge:ingots/tainted_gold',
        'tconstruct:efln_ball', 'kubejs:firmament',
        'naturesaura:token_anger'
    ]).time(40).sapling('quark:red_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/naturesaura/tree_ritual/shockwave_creator')

    e.recipes.naturesaura.tree_ritual(
        'botania:brewery', [
        'minecraft:conduit', 'kubejs:replaceme',
        'botania:livingrock_slab', 'botania:livingrock_slab',
        'botania:livingrock_slab', 'botania:livingrock_slab',
        'botania:livingrock_slab', 'botania:livingrock_slab'
    ]).time(40).sapling('quark:lavender_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/naturesaura/tree_ritual/brewery')

    e.recipes.naturesaura.tree_ritual(
        'naturesaura:animal_spawner', [
        'ars_nouveau:summoning_crystal', Item.of('naturesaura:aura_cache', { aura: 400000 }),
        'naturesaura:token_anger', 'naturesaura:token_joy',
        'botania:overgrowth_seed', '#forge:storage_blocks/infused_iron',
        'botania:overgrowth_seed', '#forge:storage_blocks/infused_iron'
    ]).time(200).sapling('quark:blue_blossom_sapling')
        .id('kubejs:naturesaura/tree_ritual/naturesaura/tree_ritual/animal_spawner')
})