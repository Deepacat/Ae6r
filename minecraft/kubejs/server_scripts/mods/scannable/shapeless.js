ServerEvents.recipes(e => {
    e.remove({ id: 'scannable:range_module' })
    e.shapeless('scannable:range_module', ['scannable:blank_module', 'architects_palette:sunmetal_blend'])
        .id('kubejs:scannable_range_module')

    e.remove({ id: 'scannable:entity_module' })
    e.shapeless('scannable:entity_module', ['scannable:blank_module', 'minecraft:golden_carrot'])
        .id('kubejs:scannable_entity_module')

    e.remove({ id: 'scannable:friendly_entity_module' })
    e.shapeless('scannable:friendly_entity_module', ['scannable:blank_module', 'minecraft:carrot_on_a_stick'])
        .id('kubejs:scannable_friendly_entity_module')

    e.remove({ id: 'scannable:hostile_entity_module' })
    e.shapeless('scannable:hostile_entity_module', ['scannable:blank_module', 'minecraft:spawner'])
        .id('kubejs:scannable_hostile_entity_module')

    e.remove({ id: 'scannable:block_module' })
    e.shapeless('scannable:block_module', ['scannable:blank_module', 'minecraft:lodestone'])
        .id('kubejs:scannable_block_module')

    e.remove({ id: 'scannable:common_ores_module' })
    e.shapeless('scannable:common_ores_module', ['scannable:block_module', '#forge:gems/apatite'])
        .id('kubejs:scannable_common_ores_module')

    e.remove({ id: 'scannable:rare_ores_module' })
    e.shapeless('scannable:rare_ores_module', ['scannable:common_ores_module', '#kubejs:aspectus_shards'])
        .id('kubejs:scannable_rare_ores_module')

    e.remove({ id: 'scannable:fluid_module' })
    e.shapeless('scannable:fluid_module', ['scannable:blank_module', 'tcintegrations:molten_manasteel_bucket'])
        .id('kubejs:scannable_fluid_module')
})