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
})