ServerEvents.recipes(e => {
    e.remove({ id: 'create:crafting/kinetics/mechanical_press' })
    e.shaped('create:mechanical_press', [
        ' A ',
        'CBC',
        ' D '
    ], {
        A: '#forge:gears/copper',
        B: 'create:andesite_casing',
        C: '#forge:storage_blocks/andesite_alloy',
        D: '#forge:storage_blocks/invar'
    }).id('kubejs:shaped/mechanical_press')

    e.remove({ id: 'create:crafting/kinetics/mechanical_mixer' })
    e.shaped('create:mechanical_mixer', [
        ' A ',
        'CBC',
        ' D '
    ], {
        A: '#forge:gears/invar',
        B: 'create:andesite_casing',
        C: '#forge:ingots/andesite_alloy',
        D: 'create:whisk'
    }).id('kubejs:shaped/mechanical_mixer')

    e.remove({ id: 'create:crafting/kinetics/whisk' })
    e.shaped('create:whisk', [
        ' A ',
        'BAB',
        'BBB'
    ], {
        A: '#forge:storage_blocks/andesite_alloy',
        B: '#forge:plates/invar',
    }).id('kubejs:shaped/whisk')

    e.remove({ id: 'create:crafting/kinetics/empty_blaze_burner'})
    e.shaped('create:empty_blaze_burner', [
        'CBC',
        'BAB',
        'CBC'
    ], {
        A: '#forge:ingots/lumium',
        B: 'tconstruct:scorched_brick',
        C: 'minecraft:iron_bars'
    })

    e.remove({ id: 'create:crafting/kinetics/millstone' })
    e.shaped('create:millstone', [
        ' A ',
        'BCB',
        'DDD'
    ], {
        A: '#forge:gears/copper',
        B: '#forge:ingots/andesite_alloy',
        C: 'create:cogwheel',
        D: 'minecraft:smooth_stone_slab'
    }).id('kubejs:create/kinetics/millstone')

    e.remove({ id: 'create:crafting/kinetics/mechanical_drill' })
    e.shaped('create:mechanical_drill', [
        ' A ',
        'BCB',
        'BDB'
    ], {
        A: 'thermal:drill_head',
        B: '#forge:ingots/andesite_alloy',
        C: 'create:cogwheel',
        D: 'create:andesite_casing'
    })

    e.remove({ id: 'create:crafting/kinetics/mechanical_saw' })
    e.shaped('create:mechanical_saw', [
        ' A ',
        'BCB',
        'BDB'
    ], {
        A: 'thermal:saw_blade',
        B: '#forge:ingots/andesite_alloy',
        C: 'create:cogwheel',
        D: 'create:andesite_casing'
    })

    e.remove({ id: 'create:crafting/kinetics/propeller' })
    e.shaped('create:propeller', [
        ' B ',
        'BAB',
        ' B '
    ], {
        A: '#forge:ingots/arcane_gold',
        B: '#forge:plates/invar',
    })

    e.remove({ id: 'create:crafting/kinetics/windmill_bearing' })
    e.shaped('create:windmill_bearing', [
        'A',
        'B',
        'C'
    ], {
        A: 'create:turntable',
        B: 'minecraft:sticky_piston',
        C: 'create:shaft'
    })

    e.remove({ id: 'create:crafting/kinetics/encased_chain_drive' })
    e.shaped('create:encased_chain_drive', [
        'A',
        'B',
        'C'
    ], {
        A: 'minecraft:chain',
        B: 'create:shaft',
        C: 'create:andesite_casing'
    })

    e.remove({ id: 'create:crafting/kinetics/brass_casing' })
    e.shaped(Item.of('create:brass_casing', 4), [
        'ABA',
        'BBB',
        'ABA'
    ], {
        A: '#forge:plates/brass',
        B: 'eidolon:polished_planks'
    })

    e.remove({ id: 'create:crafting/kinetics/encased_chain_drive' })
    e.shaped('create:encased_chain_drive', [
        ' A ',
        'BCB',
        ' A '
    ], {
        A: 'minecraft:chain',
        B: 'create:shaft',
        C: 'create:andesite_casing'
    }).id('kubejs:create/kinetics/encased_chain_drive')

    e.remove({ id: 'create:crafting/appliances/copper_backtank' })
    e.shaped('create:copper_backtank', ['ABA', 'CDC', 'ECE'], {
        A: 'kubejs:leather_stripe',
        B: 'create:shaft',
        C: '#forge:plates/copper',
        D: 'mekanism:basic_chemical_tank',
        E: 'create:andesite_alloy'
    })

    e.remove({ id: 'create:crafting/appliances/copper_diving_helmet' })
    e.shaped('create:copper_diving_helmet', ['ABA', 'BCB'], {
        A: 'thermal:diving_fabric',
        B: '#forge:ingots/bronze',
        C: '#forge:glass_panes/cyan'
    })

    e.remove({ id: 'create:crafting/appliances/copper_diving_boots' })
    e.shaped('create:copper_diving_boots', ['A A', 'B B', 'C C'], {
        A: 'thermal:diving_fabric',
        B: '#forge:ingots/bronze',
        C: '#forge:plates/lead'
    })
})