StartupEvents.registry('block', event => {
    const blocks = [
        { name: 'warding_stone', material: 'stone', hardness: 2 },
        { name: 'firmament', material: 'stone', hardness: 2 },
        { name: 'superheated_steel_block', material: 'metal', hardness: 5 },
        { name: 'hot_compressed_iron_block', material: 'metal', hardness: 5 },
        { name: 'rough_machine_frame_top', material: 'metal', hardness: 5 },
        { name: 'coated_machine_frame_top', material: 'metal', hardness: 5 },
        { name: 'rough_machine_frame', material: 'metal', hardness: 5 },
        { name: 'crystalline_dark_oak_wood', material: 'stone', hardness: 5 },
        { name: 'crystalline_oak_leaves', material: 'glass', hardness: 2.0, leaves: true },
        { name: 'aspectus_shard_block', material: 'amethyst', hardness: 5 },
        {
            name: 'crystalline_flowering_palo_verde_leaves',
            material: 'glass',
            hardness: 2.0,
            leaves: true
        },
        { name: 'marl', material: 'sand', hardness: 1, mineable: 'shovel' }
    ]

    blocks.forEach((block) => {
        const block_event = event.create(block.name).soundType(block.material).hardness(block.hardness)

        if (block.mineable) {
            block_event.tagBlock(`minecraft:mineable/${block.mineable}`)
        }

        if (block.leaves == true) {
            block_event
                .renderType('cutout')
                .notSolid()
                .noValidSpawns(true)
                .suffocating(false)
                .viewBlocking(false)
                .redstoneConductor(false)
                .transparent(false)
        }
    })

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
        event.create(`kubejs:${aspect}_aspectus_shard_block`)
            .soundType('amethyst')
            .tagBoth('kubejs:aspectus_block')
            .tagBoth(`kubejs:aspectus_block/${aspect}`)
            .hardness(5)
    }
})
