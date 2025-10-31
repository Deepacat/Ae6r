ServerEvents.recipes(e => {
    e.remove({ id: 'botania:mana_pool' })
    e.shaped('botania:mana_pool', [
        'A A',
        'ABA'
    ], {
        A: 'botania:livingrock',
        B: 'kubejs:warding_stone'
    }).id('kubejs:shaped/botania_mana_pool')

    e.remove({ id: 'botania:diluted_pool' })
    e.shaped('botania:diluted_pool', [
        'A A',
        'ABA'
    ], {
        A: 'botania:livingrock_slab',
        B: 'kubejs:warding_stone'
    }).id('kubejs:shaped/botania_diluted_pool')

    e.remove({ id: 'botania:fabulous_pool' })
    e.shaped('botania:fabulous_pool', [
        'A A',
        'ABA'
    ], {
        A: 'botania:shimmerrock',
        B: 'kubejs:warding_stone'
    }).id('kubejs:shaped/botania_fabulous_pool')

    e.remove({ id: 'botania:corporea_index' })
    e.shaped('botania:corporea_index', [
        'ABA',
        'BCB',
        'DBD'
    ], {
        A: 'quark:soul_bead',
        B: 'glassential:glass_ghostly',
        C: 'botania:corporea_interceptor',
        D: 'occultism:spirit_attuned_gem'
    }).id('kubejs:shaped/botania_corporea_index')

    e.remove({ id: 'botania:corporea_crystal_cube' })
    e.shaped('botania:corporea_crystal_cube', [
        'A',
        'B',
        'C'
    ], {
        A: 'botania:corporea_spark',
        B: 'glassential:glass_ghostly',
        C: 'botania:corporea_block'
    }).id('kubejs:shaped/botania_corporea_crystal_cube')

    e.remove({ id: 'botania:hourglass' })
    e.shaped('botania:hourglass', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:nuggets/gravitite',
        B: 'aether:quicksoil_glass',
        C: '#forge:dusts/redstone',
        D: '#forge:gems/mana'
    }).id('kubejs:shaped/botania_hourglass')

    e.remove({ id: 'botania:ender_eye_block' })
    e.shaped('botania:ender_eye_block', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'create:polished_rose_quartz',
        B: 'minecraft:ender_eye',
        C: 'architects_palette:abyssaline'
    }).id('kubejs:shaped/botania_ender_eye_block')

    e.remove({ id: 'botania:forest_eye' })
    e.shaped('botania:forest_eye', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:ingots/infused_iron',
        B: 'naturesaura:infused_stone',
        C: 'minecraft:ender_eye'
    }).id('kubejs:shaped/botania_forest_eye')

    e.remove({ id: 'botania:knockback_belt' })
    e.shaped('botania:knockback_belt', [
        'B  ',
        ' C ',
        'D A'
    ], {
        A: '#botania:runes/earth',
        B: '#botania:runes/fire',
        C: 'eidolon:basic_belt',
        D: '#forge:ingots/manasteel'
    }).id('kubejs:shaped/botania_knockback_belt')

    e.remove({ id: 'botania:travel_belt' })
    e.shaped('botania:travel_belt', [
        'B  ',
        ' C ',
        'D A'
    ], {
        A: '#botania:runes/air',
        B: '#botania:runes/earth',
        C: 'eidolon:basic_belt',
        D: '#forge:ingots/manasteel'
    }).id('kubejs:shaped/botania_travel_belt')

    e.remove({ id: 'botania:crafting_halo' })
    e.shaped('botania:crafting_halo', [
        ' A ',
        'BCB',
        ' B '
    ], {
        A: 'botania:corporea_spark',
        B: 'ars_nouveau:marvelous_clay',
        C: 'ars_nouveau:glyph_craft'
    }).id('kubejs:shaped/botania_crafting_halo')

    e.remove({ id: 'botania:glass_pickaxe' })
    e.shaped('botania:glass_pickaxe', [
        'ABA',
        ' C ',
        ' C '
    ], {
        A: 'glassential:glass_ghostly',
        B: '#forge:gems/mana',
        C: 'naturesaura:ancient_stick'
    }).id('kubejs:shaped/botania_glass_pickaxe')

    e.remove({ id: 'botania:corporea_spark' })
    e.shaped(Item.of('botania:corporea_spark', '6'), [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'botania:spark',
        B: 'quark:soul_bead',
        C: Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:nether' })
    }).id('kubejs:shaped/botania_corporea_spark')

    e.remove({ id: 'botania:vine_ball' })
    e.shaped('botania:vine_ball', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'minecraft:vine',
        B: '#forge:slimeballs'
    }).id('kubejs:shaped/botania_vine_ball')
})
