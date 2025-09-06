ServerEvents.recipes(e => {
    // loop over colors for cable items
    for (let color of ['red', 'green', 'blue', 'yellow']) {
        e.remove({ id: `xnet:netcable_${color}` })
        e.shaped(Item.of(`xnet:netcable_${color}`, 16), [' A ', 'ACA', 'BAB'], {
            A: '#forge:dusts/redstone',
            B: `thermal:${color}_rockwool`,
            C: '#forge:ingots/signalum'
        }).id(`kubejs:xnet/shaped/colors/netcable_${color}`)

        e.remove({ id: `xnet:connector_${color}` })
        e.shaped(Item.of(`xnet:connector_${color}`, 2), ['ADA', 'CBC', 'ADA'], {
            A: '#forge:ingots/uranium',
            B: `thermal:${color}_rockwool`,
            C: '#forge:dusts/redstone',
            D: 'minecraft:hopper'
        }).id(`kubejs:xnet/shaped/connector_${color}`)
    }

    // normal shaped recipes
    e.remove({ id: 'xnet:netcable_routing' })
    e.shaped(Item.of('xnet:netcable_routing', 16), [
        ' A ',
        'ACA',
        'BAB'
    ], {
        A: '#forge:dusts/redstone',
        B: 'thermal:white_rockwool',
        C: '#forge:plates/signalum'
    }).id('kubejs:xnet/shaped/netcable_routing')

    e.remove({ id: 'xnet:controller' })
    e.shaped('xnet:controller', [
        'DCD',
        'BAB',
        'DED'
    ], {
        A: 'thermal:energy_cell_frame',
        B: 'minecraft:repeater',
        C: 'minecraft:comparator',
        D: '#forge:ingots/iron_tin',
        E: 'thermal:redstone_servo'
    }).id('kubejs:xnet/shaped/controller')

    e.remove({ id: 'xnet:router' })
    e.shaped('xnet:router', [
        'CDC',
        'DAD',
        'CBC'
    ], {
        A: 'thermal:energy_cell_frame',
        B: '#forge:gems/ender',
        C: '#forge:ingots/iron_tin',
        D: 'minecraft:powered_rail'
    }).id('kubejs:xnet/shaped/router')

    e.remove({ id: 'xnet:wireless_router' })
    e.shaped('xnet:wireless_router', [
        'BDB',
        'CAC',
        'BCB'
    ], {
        A: 'thermal:energy_cell_frame',
        B: '#forge:ingots/enderium',
        C: '#forge:dusts/redstone',
        D: 'minecraft:comparator'
    }).id('kubejs:xnet/shaped/wireless_router')

    e.remove({ id: 'xnet:antenna' })
    e.shaped('xnet:antenna', [
        'ABA',
        'ABA',
        ' B '
    ], {
        A: 'minecraft:iron_bars',
        B: '#forge:rods/iron_osmium'
    }).id('kubejs:xnet/shaped/antenna')

    e.remove({ id: 'xnet:antenna_base' })
    e.shaped('xnet:antenna_base', [
        ' B ',
        ' B ',
        'CAC'
    ], {
        A: '#forge:storage_blocks/iron_osmium',
        B: '#forge:rods/iron_osmium',
        C: '#forge:plates/iron_osmium'
    }).id('kubejs:xnet/shaped/antenna_base')
    
    e.remove({ id: 'xnet:connector_routing' })
    e.shaped('xnet:connector_routing', [
        'ADA',
        'CBC',
        'ADA'
    ], {
        A: '#forge:ingots/uranium',
        B: 'thermal:light_blue_rockwool',
        C: '#forge:dusts/redstone',
        D: 'minecraft:hopper'
    }).id('kubejs:xnet/shaped/connector_routing')
})