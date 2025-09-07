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
    }).id('kubejs:ars_nouveau/shaped/arcane_core')

    // technically an ars recipe
    e.shaped('2x kubejs:warding_stone', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'ars_nouveau:sourcestone'
    }).id('kubejs:ars_nouveau/shaped/warding_stone')

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
    }).id('kubejs:ars_nouveau/shaped/arcane_pedestal')

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
    }).id('kubejs:ars_nouveau/shaped/enchanting_apparatus')

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
    }).id('kubejs:ars_nouveau/shaped/source_jar')

    e.remove({ id: 'ars_nouveau:magebloom_fiber' })
    e.shaped('ars_nouveau:magebloom_fiber', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'betterendforge:silk_fiber',
        B: 'ars_nouveau:magebloom'
    }).id('kubejs:ars_nouveau/shaped/magebloom_fiber')

    e.remove({ id: 'ars_nouveau:basic_spell_turret' })
    e.shaped('ars_nouveau:basic_spell_turret', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'eidolon:enchanted_ash',
        B: 'quark:gold_bars',
        C: '#forge:storage_blocks/source'
    }).id('kubejs:ars_nouveau/shaped/basic_spell_turret')
})