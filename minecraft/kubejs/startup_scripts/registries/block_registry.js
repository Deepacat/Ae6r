StartupEvents.registry('block', e => {
    const alienDebrisModel = {
        parent: "minecraft:block/cube_column",
        textures: {
            end: "kubejs:block/alien_debris_top",
            side: "kubejs:block/alien_debris_side"
        }
    }
    e.create('alien_debris')
        .soundType('ancient_debris')
        .hardness(50)
        .requiresTool()
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('forge:needs_netherite_tool')
        .tagBoth('forge:ores')
        .tagBoth('forge:ore_rates/singular')
        .modelJson = alienDebrisModel

    e.create('damaged_controller')
        .displayName('Damaged ME Controller')
        .soundType('stone')
        .hardness(5)
        .requiresTool()
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')

    e.create('damaged_me_chest')
        .displayName('Damaged ME Chest')
        .soundType('stone')
        .hardness(5)
        .requiresTool()
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')
        .defaultCutout()
        .property(BlockProperties.HORIZONTAL_FACING)
        .placementState(ctx => {
            ctx.setValue(BlockProperties.HORIZONTAL_FACING, ctx.getHorizontalDirection().getOpposite())
        })

    e.create('warding_stone')
        .soundType('stone')
        .hardness(2)

    e.create('firmament')
        .soundType('stone')
        .hardness(2)

    e.create('superheated_steel_block')
        .soundType('metal')
        .hardness(5)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')

    e.create('hot_compressed_iron_block')
        .soundType('metal')
        .hardness(5)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')

    e.create('rough_machine_frame_top')
        .soundType('metal')
        .hardness(5)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')

    e.create('coated_machine_frame_top')
        .soundType('metal')
        .hardness(5)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')

    e.create('rough_machine_frame')
        .soundType('metal')
        .hardness(5)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')

    e.create('crystalline_dark_oak_wood')
        .soundType('stone')
        .hardness(5)
        .tagBlock('minecraft:mineable/axe')
        .tagBlock('minecraft:needs_wood_tool')

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
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')

    e.create('stabilized_glowstone')
        .soundType('glass')
        .hardness(50)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:needs_iron_tool')

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
