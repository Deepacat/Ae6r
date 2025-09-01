ServerEvents.recipes(e => {
    e.remove({ id: 'tconstruct:tools/modifiers/silky_cloth' })
    e.shaped('tconstruct:silky_cloth', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'ars_nouveau:mana_fiber',
        B: '#forge:ingots/rose_gold'
    }).id('kubejs:tconstruct_tools/modifiers/silky_cloth')

    e.remove({ id: 'tconstruct:armor/building/travelers_goggles' })
    e.shaped('tconstruct:travelers_helmet', [
        'A A',
        'BAB',
        'C C'
    ], {
        A: 'kubejs:replaceme',
        B: 'tconstruct:clear_glass_pane',
        C: '#forge:plates/copper'
    }).id('kubejs:tconstruct_armor/building/travelers_goggles')

    e.remove({ id: 'tconstruct:armor/building/travelers_chestplate' })
    e.shaped('tconstruct:travelers_chestplate', [
        ' A ',
        'BCB'
    ], {
        A: '#forge:slimeball/sky',
        B: '#forge:plates/copper',
        C: Item.of('minecraft:leather_chestplate', '{Damage:0}').weakNBT()
    }).id('kubejs:tconstruct_armor/building/travelers_chestplate')

    e.remove({ id: 'tconstruct:armor/building/travelers_pants' })
    e.shaped('tconstruct:travelers_leggings', [
        ' A ',
        'BCB'
    ], {
        A: '#forge:slimeball/sky',
        B: '#forge:plates/copper',
        C: Item.of('minecraft:leather_leggings', '{Damage:0}').weakNBT()
    }).id('kubejs:tconstruct_armor/building/travelers_pants')

    e.remove({ id: 'tconstruct:armor/building/travelers_boots' })
    e.shaped('tconstruct:travelers_boots', [
        ' A ',
        'BCB'
    ], {
        A: '#forge:slimeball/sky',
        B: '#forge:plates/copper',
        C: Item.of('minecraft:leather_boots', '{Damage:0}').weakNBT()
    }).id('kubejs:tconstruct_armor/building/travelers_boots')
})
