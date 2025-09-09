ServerEvents.recipes(e => {
    e.remove({ id: 'eidolon:wooden_altar' })
    e.shaped('eidolon:wooden_altar', [
        'AAA',
        'BCB',
        'BCB'
    ], {
        A: 'wizards_reborn:arcane_wood_slab',
        B: 'wizards_reborn:arcane_wood_planks',
        C: 'kubejs:scented_stick'
    }).id('kubejs:eidolon/shaped/wooden_altar_wood')

    e.remove({ id: 'eidolon:basic_belt' })
    e.shaped('eidolon:basic_belt', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'kubejs:silk_fiber',
        B: 'kubejs:leather_stripe',
        C: '#forge:gems/source'
    }).id('kubejs:basic_belt')

    e.remove({ id: 'eidolon:brazier' })
    e.shaped('eidolon:brazier', [
        'AAA',
        'CBC',
        'D D'
    ], {
        A: '#forge:ingots/pewter',
        B: 'minecraft:conduit',
        C: 'eidolon:ender_calx',
        D: 'minecraft:nether_brick_fence'
    }).id('kubejs:brazier')

    e.remove({ id: 'eidolon:soul_enchanter' })
    e.shaped('eidolon:soul_enchanter', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'tomeofblood:blood_tome_three',
        B: 'eidolon:gold_inlay',
        C: 'eidolon:polished_planks',
        D: 'create:shadow_steel_casing',
        E: Item.of('bloodmagic:soulgemlesser', '{souls:256.0d}')
    })

    e.remove({ id: 'eidolon:wicked_weave' })
    e.shaped('eidolon:wicked_weave', [
        'ABA',
        'ACA',
        'ABA'
    ], {
        A: 'atum:linen_cloth',
        B: Item.of('minecraft:potion', '{Potion:"ars_nouveau:spell_damage"}'),
        C: { type: 'bloodmagic:bloodorb', orb_tier: 1 }
    })

    e.remove({ id: 'eidolon:bonechill_wand' })
    e.shaped('eidolon:bonechill_wand', [
        ' AB',
        'CDA',
        'EC '
    ], {
        A: '#forge:ingots/pewter',
        B: 'eidolon:wraith_heart',
        C: '#forge:rods/silver',
        D: 'minecraft:bone',
        E: 'eidolon:pewter_inlay'
    }).id('kubejs:bonechill_wand')

    e.remove({ id: 'eidolon:soulfire_wand' })
    e.shaped('eidolon:soulfire_wand', [
        ' AB',
        'CDA',
        'EC '
    ], {
        A: '#forge:ingots/arcane_gold',
        B: 'atum:anubis_godshard',
        C: '#forge:rods/electrum',
        D: '#forge:bones/wither',
        E: 'eidolon:gold_inlay'
    }).id('kubejs:soulfire_wand')
    
})