ServerEvents.recipes(e => {
    e.remove({ id: 'occultism:divination_rod' })
    e.shaped('occultism:divination_rod', [
        ' CD',
        ' AC',
        'AB '
    ], {
        A: /*'betterendforge:'*/ 'kubejs:replaceme',
        B: 'eidolon:tattered_cloth',
        C: '#forge:rods/copper',
        D: 'occultism:spirit_attuned_gem'
    }).id('kubejs:shaped/divination_rod')

    e.remove({ id: 'occultism:sacrificial_bowl' })
    e.shaped('occultism:sacrificial_bowl', [
        'ABA',
        'CAC'
    ], {
        A: 'occultism:otherstone_slab',
        B: '#forge:dusts/mana',
        C: '#forge:inlays/pewter'
    }).id('kubejs:shaped/sacrificial_bowl')

    e.remove({ id: 'occultism:magic_lamp_empty' })
    e.shaped('occultism:magic_lamp_empty', [
        ' A ',
        'ABA',
        ' AA'
    ], {
        A: '#forge:ingots/silver',
        B: /*'atum:'*/ 'kubejs:replaceme'
    }).id('kubejs:shaped/magic_lamp_empty')
})