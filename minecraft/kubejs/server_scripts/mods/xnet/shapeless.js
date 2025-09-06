ServerEvents.recipes(e => {
    e.remove({ id: 'xnet:connector_upgrade' })
    e.shapeless('xnet:connector_upgrade',
        ['#forge:paper', 'eidolon:ender_calx', '#forge:gems/diamond', '#forge:gems/diamond']
    ).id('kubejs:xnet/shapeless/connector_upgrade')

    e.remove({ id: 'xnet:advanced_connector_routing' })
    e.shapeless('xnet:advanced_connector_routing',
        ['xnet:connector_routing', 'eidolon:ender_calx', '#forge:gems/diamond', '#forge:gems/diamond']
    ).id('kubejs:xnet/shapeless/advanced_connector_routing')
})