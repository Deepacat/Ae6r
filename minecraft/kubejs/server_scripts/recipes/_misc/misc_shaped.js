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
    
    e.remove({ id: 'architects_palette:sunmetal_block' })
    e.shaped('architects_palette:sunmetal_block', [
        'AAA',
        'AAA',
        'AAA'
    ], {
        A: 'architects_palette:sunmetal_brick'
    }).id('architects_palette:sunmetal_block')
})