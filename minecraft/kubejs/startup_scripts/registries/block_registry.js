StartupEvents.registry('block', e => {
    e.create('warding_stone')
        .soundType('stone')
        .hardness(2)

    e.create('firmament')
        .soundType('stone')
        .hardness(2)

    e.create('superheated_steel_block')
        .soundType('metal')
        .hardness(5)

    e.create('hot_compressed_iron_block')
        .soundType('metal')
        .hardness(5)

    e.create('rough_machine_frame_top')
        .soundType('metal')
        .hardness(5)

    e.create('coated_machine_frame_top')
        .soundType('metal')
        .hardness(5)

    e.create('rough_machine_frame')
        .soundType('metal')
        .hardness(5)

    e.create('crystalline_dark_oak_wood')
        .soundType('stone')
        .hardness(5)

    e.create('aspectus_shard_block')
        .soundType('amethyst')
        .hardness(5)
        .tagBoth('kubejs:aspectus_block')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_diamond_tool')
        .tagBlock('embers:mineable/hammer')

    e.create('stabilized_algal_bricks')
        .soundType('stone')
        .hardness(50)

    e.create('stabilized_glowstone')
        .soundType('amethyst')
        .hardness(50)

    e.create('crystalline_oak_leaves')
        .soundType('glass')
        .renderType('cutout')
        .notSolid()
        .noValidSpawns(true)
        .suffocating(false)
        .viewBlocking(false)
        .redstoneConductor(false)
        .transparent(false)

    e.create('crystalline_flowering_palo_verde_leaves')
        .soundType('glass')
        .renderType('cutout')
        .notSolid()
        .noValidSpawns(true)
        .suffocating(false)
        .viewBlocking(false)
        .redstoneConductor(false)
        .transparent(false)

    e.create('marl')
        .soundType('sand')
        .hardness(1)
        .tagBlock('minecraft:mineable/shovel')

    const aspectus = [
        'aer',
        'aqua',
        'ignis',
        'terra',
        'ordo',
        'perditio',
        'mortuus',
        'cognitio',
        'praecantatio'
    ]

    for (let aspect of aspectus) {
        e.create(`kubejs:${aspect}_aspectus_shard_block`)
            .soundType('amethyst')
            .hardness(5)
            .tagBoth('kubejs:aspectus_block')
            .tagBoth(`kubejs:aspectus_block/${aspect}`)
            .tagBlock('minecraft:mineable/pickaxe')
            .tagBlock('minecraft:needs_diamond_tool')
            .tagBlock('embers:mineable/hammer')
    }
})
