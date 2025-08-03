global.emendatus_item_types = {
    nugget: { replacer: '@_nugget', tag: 'nuggets/', tags: ['forge:nuggets/@', 'forge:nuggets'] },
    ingot: { replacer: '@_ingot', tag: 'ingots/', tags: ['forge:ingots/@', 'forge:ingots'] },
    dust: { replacer: '@_dust', tag: 'dusts/', tags: ['forge:dusts/@', 'forge:dusts'] },
    plate: { replacer: '@_plate', tag: 'plates/', tags: ['forge:plates/@', 'forge:plates'] },
    rod: { replacer: '@_rod', tag: 'rods/', tags: ['forge:rods/@', 'forge:rods'] },
    gear: { replacer: '@_gear', tag: 'gears/', tags: ['forge:gears/@', 'forge:gears'] },
    gem: { replacer: '@_gem', tag: 'gems/', tags: ['forge:gems/@', 'forge:gems'] },
    gravel: { replacer: '@_gravel', tag: 'gravels/', tags: ['forge:gravels/@', 'forge:gravels'] },
    dirty_dust: { replacer: '@_dirty_dust', tag: 'dirty_dusts/', tags: ['forge:dirty_dusts/@', 'forge:dirty_dusts'] },
    fragment: { replacer: '@_fragment', tag: 'fragments/', tags: ['forge:fragments/@', 'forge:fragments'] },
    shard: { replacer: '@_shard', tag: 'shards/', tags: ['forge:shards/@', 'forge:shards'] },
    crystal: { replacer: '@_crystal', tag: 'crystals/', tags: ['forge:crystals/@', 'forge:crystals'] },
    clump: { replacer: '@_clump', tag: 'clumps/', tags: ['forge:clumps/@', 'forge:clumps'] },
    cluster_shard: { replacer: '@_cluster_shard', tag: 'cluster_shards/', tags: ['forge:cluster_shards/@', 'forge:cluster_shards'] },
    crushed_ore: { replacer: 'crushed_@_ore', tag: 'crushed_ores/', tags: ['forge:crushed_ores/@', 'forge:crushed_ores'] },
    raw_ore: { replacer: 'raw_@', tag: 'raw_materials/', tags: ['forge:raw_materials/@', 'forge:raw_materials'] }
}

global.emendatus_block_types = {
    storage_block: { replacer: '@_block', tag: 'storage_blocks/', tags: ['forge:storage_blocks/@', 'forge:storage_blocks'] },
    ore: { replacer: '@_ore', tag: 'ores/', tags: ['forge:ores/@', 'forge:ores'] },
    raw_block: { replacer: 'raw_@_block', tag: 'storage_blocks/raw_', tags: ['forge:storage_blocks/raw_@', 'forge:storage_blocks/raw'] }
}

global.emendatus_all_types = Object.assign(global.emendatus_item_types, global.emendatus_block_types)


// - - global functions - -

global.emenGetReplace = function emendatusGetReplacementString(replaceableString, materialName) {
    if (!replaceableString.includes('@')) { return replaceableString }
    return replaceableString.replace('@', materialName)
}


global.emendatus_base_flags = {
    alloy: {
        item: ['dust', 'gear', 'ingot', 'nugget', 'plate', 'rod'],
        block: ['storage_block']
    },
    gem: {
        item: ['clump', 'cluster_shard', 'crystal', 'gem',
            'gravel', 'plate', 'fragment', 'shard', 'gear', 'rod', 'dirty_dust', 'dust'],
        block: ['storage_block', 'ore']
    },
    metal: {
        item: ['clump', 'crystal', 'dirty_dust', 'dust', 'fragment',
            'gear', 'gravel', 'ingot', 'nugget', 'plate', 'rod', 'raw_ore', 'shard', 'crushed_ore'],
        block: ['storage_block', 'ore', 'raw_block']
    },
    vanilla: {
        item: ['plate', 'rod', 'gear', 'dust', 'gravel', 'fragment', 'clump',
            'dirty_dust', 'crystal', 'shard', 'crushed_ore', 'cluster_shard'],
        block: ['ore']
    },
    none: {
        item: [],
        block: []
    }
}