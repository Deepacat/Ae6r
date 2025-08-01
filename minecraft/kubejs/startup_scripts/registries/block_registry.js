StartupEvents.registry('block', event => {
    const blocks = [
        { name: 'warding_stone', material: 'stone', hardness: 2 },
        { name: 'firmament', material: 'stone', hardness: 2 },
        { name: 'superheated_steel_block', material: 'metal', hardness: 5 },
        { name: 'hot_compressed_metal_block', material: 'metal', hardness: 5 },
        { name: 'rough_machine_frame_top', material: 'metal', hardness: 5 },
        { name: 'coated_machine_frame_top', material: 'metal', hardness: 5 },
        { name: 'rough_machine_frame', material: 'metal', hardness: 5 },
        { name: 'crystalline_dark_oak_wood', material: 'stone', hardness: 5 },
        { name: 'crystalline_oak_leaves', material: 'glass', hardness: 2.0, leaves: true },
        {
            name: 'crystalline_flowering_palo_verde_leaves',
            material: 'glass',
            hardness: 2.0,
            leaves: true
        }
    ]

    blocks.forEach((block) => {
        const block_event = event.create(block.name).soundType(block.material).hardness(block.hardness)

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
})
