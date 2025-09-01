ServerEvents.recipes(e => {
    e.remove({ id: 'entangled:block' })
    e.shaped('entangled:block', [
        'ABC',
        'BDB',
        'CBA'
    ], {
        A: 'botania:corporea_spark',
        B: 'botania:red_string',
        C: 'botania:red_string_container',
        D: 'botania:corporea_spark_master'
    }).id('kubejs:entangled_block')

    e.remove({ id: 'entangled:item' })
    e.shaped('entangled:item', [
        ' AB',
        ' CA',
        'DE '
    ], {
        A: '#forge:rods/lead',
        B: 'eidolon:warped_sprouts',
        C: 'botania:twig_wand',
        D: 'botania:livingwood_twig',
        E: 'kubejs:replaceme'
    }).id('kubejs:entangled_item')
})