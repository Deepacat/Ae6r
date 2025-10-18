StartupEvents.registry('block', e => {
    const alienDebrisModel = {
        parent: "minecraft:block/cube_column",
        textures: {
            end: "kubejs:block/alien_debris_top",
            side: "kubejs:block/alien_debris_side"
        }
    }
    e.create('alien_debris')
        .soundType('ANCIENT_DEBRIS')
        .hardness(50)
        .requiresTool()
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('forge:needs_netherite_tool')
        .tagBoth('forge:ores')
        .tagBoth('forge:ore_rates/singular')
        .modelJson = alienDebrisModel

    e.create('warding_stone')
        .soundType('stone')
        .hardness(2)

    e.create('firmament')
        .soundType('stone')
        .hardness(2)

    e.create('superheated_steel_block')
        .soundType('metal')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .hardness(5)

    e.create('hot_compressed_iron_block')
        .soundType('metal')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .hardness(5)

    e.create('rough_machine_frame_top')
        .soundType('metal')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .hardness(5)

    e.create('coated_machine_frame_top')
        .soundType('metal')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .hardness(5)

    e.create('rough_machine_frame')
        .soundType('metal')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .hardness(5)

    e.create('crystalline_dark_oak_wood')
        .soundType('stone')
        .tagBlock('minecraft:mineable/axe')
        .tagBlock('minecraft:needs_wood_tool')
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
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .hardness(50)

    e.create('stabilized_glowstone')
        .soundType('glass')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .hardness(50)

    e.create('crystalline_oak_leaves')
        .soundType('amethyst')
        .renderType('cutout')
        .notSolid()
        .noValidSpawns(true)
        .suffocating(false)
        .viewBlocking(false)
        .redstoneConductor(false)
        .transparent(false)

    e.create('crystalline_flowering_palo_verde_leaves')
        .soundType('amethyst')
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
