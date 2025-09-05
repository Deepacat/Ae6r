ServerEvents.recipes(e => {
    e.remove({ id: 'ars_nouveau:arcane_core' })
    e.shaped('ars_nouveau:arcane_core', [
        'CAC',
        'BDB',
        'CAC'
    ], {
        A: 'kubejs:warding_stone',
        B: '#forge:nuggets/brass',
        C: '#forge:ingots/brass',
        D: ['#forge:storage_blocks/lapis', '#forge:storage_blocks/fluorite']
    }).id('kubejs:arcane_core')

    // technically an ars recipe
    e.shaped('2x kubejs:warding_stone', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'ars_nouveau:sourcestone'
    }).id('kubejs:warding_stone')

    e.remove({ id: 'ars_nouveau:arcane_pedestal' })
    e.shaped('ars_nouveau:arcane_pedestal', [
        'CAC',
        'BDB',
        'CDC'
    ], {
        A: 'ars_nouveau:arcane_stone',
        B: '#forge:nuggets/brass',
        C: '#forge:ingots/brass',
        D: ['#forge:gems/lapis', '#forge:gems/fluorite']
    }).id('kubejs:arcane_pedestal')

    e.remove({ id: 'ars_nouveau:enchanting_apparatus' })
    e.shaped('ars_nouveau:enchanting_apparatus', [
        'CAC',
        'BDB',
        'CAC'
    ], {
        A: 'kubejs:warding_stone',
        B: '#forge:nuggets/brass',
        C: '#forge:ingots/brass',
        D: 'minecraft:conduit'
    }).id('kubejs:enchanting_apparatus')

    e.remove({ id: 'ars_nouveau:source_jar' })
    e.shaped('ars_nouveau:source_jar', [
        'ADA',
        'BCB',
        'ADA'
    ], {
        A: '#forge:nuggets/brass',
        B: '#forge:ingots/brass',
        C: 'supplementaries:jar',
        D: 'kubejs:warding_stone'
    }).id('kubejs:source_jar')

    e.remove({ id: 'ars_nouveau:magebloom_fiber' })
    e.shaped('ars_nouveau:magebloom_fiber', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'betterendforge:silk_fiber',
        B: 'ars_nouveau:magebloom'
    }).id('kubejs:magebloom_fiber')

    e.remove({ id: 'ars_nouveau:basic_spell_turret' })
    e.shaped('ars_nouveau:basic_spell_turret', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'eidolon:enchanted_ash',
        B: 'quark:gold_bars',
        C: '#forge:storage_blocks/source'
    }).id('kubejs:basic_spell_turret')
})