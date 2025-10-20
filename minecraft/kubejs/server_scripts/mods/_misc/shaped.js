// Script for shaped recipes for mods that only have like 1-3

ServerEvents.recipes(e => {
    e.remove({ id: 'craftingstation:crafting_station' })
    e.shaped('craftingstation:crafting_station', [
        'BAB',
        'C C',
        'B B'
    ], {
        A: "sophisticatedstorage:crafting_upgrade",
        B: "create:andesite_casing",
        C: "embers:ember_crystal"
    }).id('kubejs:craftingstation')

    e.remove({ id: 'shrink:shrinking_device' })
    e.shaped('shrink:shrinking_device', [
        'ABA',
        'CDC',
        'ECE'
    ], {
        A: '#forge:ender_pearls',
        B: '#forge:glass_panes/lime',
        C: '#forge:plates/steel',
        D: 'eidolon:gold_inlay',
        E: 'ars_nouveau:manipulation_essence'
    }).id('kubejs:shrink_shrinking_device')

    e.remove({ id: 'architects_palette:sunmetal_block' })
    e.shaped('architects_palette:sunmetal_block', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'architects_palette:sunmetal_brick'
    }).id('architects_palette:sunmetal_block')
})