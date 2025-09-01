ServerEvents.recipes(e => {
    e.shapeless('integratedtunnels:part_exporter_item',
        ['integratedtunnels:part_interface_item', 'kubejs:replaceme']
    ).id('kubejs:shapeless/crafting/part_exporter_item')

    e.shapeless('integratedtunnels:part_importer_item',
        ['integratedtunnels:part_interface_item', 'kubejs:replaceme']
    ).id('kubejs:shapeless/crafting/part_importer_item')

    e.shapeless('integratedtunnels:part_interface_filter_item',
        ['integratedtunnels:part_interface_item', 'integratedtunnels:part_interface_item', 'kubejs:replaceme']
    ).id('kubejs:shapeless/crafting/part_interface_filter_item')

    e.shapeless('integratedtunnels:part_exporter_fluid',
        ['kubejs:replaceme']
    ).id('kubejs:shapeless/crafting/part_exporter_fluid')

    e.shapeless('integratedtunnels:part_importer_fluid',
        ['kubejs:replaceme']
    ).id('kubejs:shapeless/crafting/part_importer_fluid')

    e.shapeless('integratedtunnels:part_interface_filter_fluid',
        ['integratedtunnels:part_interface_fluid', 'integratedtunnels:part_interface_fluid', 'kubejs:replaceme']
    ).id('kubejs:shapeless/crafting/part_interface_filter_fluid')
})
