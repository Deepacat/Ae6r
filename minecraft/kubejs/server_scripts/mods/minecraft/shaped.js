ServerEvents.recipes(e => {
    e.remove({ id: 'minecraft:furnace' })
    e.remove({ output: 'minecraft:furnace', mod: 'quark' })
    e.shaped('minecraft:furnace', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: '#quark:stone_tool_materials',
        B: '#minecraft:coals'
    }).id('kubejs:shaped/furnace')

    e.remove({ id: 'minecraft:piston' })
    e.shaped('minecraft:piston', [
        'EBE',
        'ADA',
        'ACA'
    ], {
        A: 'minecraft:smooth_stone',
        B: ['#forge:ingots/iron', '#forge:ingots/aluminum', '#forge:ingots/copper', '#forge:ingots/tin'],
        C: '#forge:dusts/redstone',
        D: ['#forge:rods/iron', '#forge:rods/aluminum', '#forge:rods/copper', '#forge:rods/tin'],
        E: '#minecraft:planks'
    }).id('kubejs:shaped/piston')

    e.shaped(Item.of('minecraft:piston', 2), [
        'EBE',
        'ADA',
        'ACA'
    ], {
        A: 'minecraft:smooth_stone',
        B: [
            '#forge:ingots/silver',
            '#forge:ingots/lead',
            '#forge:ingots/gold',
            '#forge:ingots/nickel',
            '#forge:ingots/zinc'
        ],
        C: '#forge:dusts/redstone',
        D: [
            '#forge:rods/silver',
            '#forge:rods/lead',
            '#forge:rods/gold',
            '#forge:rods/nickel',
            '#forge:rods/zinc'
        ],
        E: '#minecraft:planks'
    }).id('kubejs:shaped/piston_alternative')

    e.remove({ id: 'minecraft:observer' })
    e.shaped('minecraft:observer', [
        'BBB',
        'ACA',
        'BBB'
    ], {
        A: 'create:andesite_alloy',
        B: '#enigmatica:crafting_slabs',
        C: 'minecraft:comparator'
    }).id('kubejs:shaped/observer')

    e.remove({ id: 'minecraft:blast_furnace' })
    e.remove({ output: 'minecraft:blast_furnace', mod: 'quark' })
    e.remove({ output: 'minecraft:blast_furnace', mod: 'tconstruct' })
    e.shaped(Item.of('minecraft:blast_furnace'), [
        'DDD',
        'DBD',
        'ACA'
    ], {
        A: 'minecraft:smooth_stone',
        B: 'minecraft:furnace',
        C: 'minecraft:campfire',
        D: 'minecraft:terracotta'
    }).id('kubejs:shaped/blast_furnace')

    e.remove({ id: 'minecraft:smoker' })
    e.shaped(Item.of('minecraft:smoker'), [
        'DAD',
        'ABA',
        'DCD'
    ], {
        A: '#minecraft:logs',
        B: 'minecraft:furnace',
        C: 'minecraft:campfire',
        D: '#forge:rods/wooden'
    }).id('kubejs:shaped/smoker')

    e.remove({ id: 'minecraft:red_nether_bricks' })
    e.shaped(Item.of('minecraft:red_nether_bricks'), [
        'AA',
        'AA'
    ], {
        A: 'kubejs:red_nether_brick'
    }).id('kubejs:shaped/red_nether_bricks')

    e.remove({ output: 'minecraft:enchanting_table' })
    e.shaped('minecraft:enchanting_table', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'ars_nouveau:novice_spell_book',
        B: '#forge:gems/prismarine',
        C: 'eidolon:stone_altar',
        D: 'minecraft:crying_obsidian',
        E: 'minecraft:conduit'
    }).id('kubejs:shaped/enchanting_table')

    e.remove({ id: 'minecraft:brewing_stand' })
    e.shaped('minecraft:brewing_stand', [
        'ABA',
        ' B ',
        'CCC'
    ], {
        A: '#forge:nuggets/invar',
        B: '#forge:rods/brass',
        C: '#forge:ingots/pewter'
    }).id('kubejs:shaped/brewing_stand')
})
