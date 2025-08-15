ServerEvents.recipes(e => {
    e.remove({ id: 'create:crafting/kinetics/millstone' })
    e.shaped('create:millstone', [
        ' A ',
        'BCB',
        'DDD'
    ], {
        A: '#forge:gears/copper',
        B: 'create:andesite_alloy',
        C: 'create:cogwheel',
        D: 'minecraft:smooth_stone_slab'
    }).id('kubejs:create/kinetics/millstone')

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

    e.remove({ id: 'create:crafting/kinetics/white_sail' })
    e.shaped(Item.of('create:white_sail', 8), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:sail_frame',
        B: '#thermal:rockwool'
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
        B: '#forge:ingots/dawnstone',
        C: '#forge:glass_panes/cyan'
    })

    e.remove({ id: 'create:crafting/appliances/copper_diving_boots' })
    e.shaped('create:copper_diving_boots', ['A A', 'B B', 'C C'], {
        A: 'thermal:diving_fabric',
        B: '#forge:ingots/dawnstone',
        C: '#forge:plates/lead'
    })
})