/* 
    obj[0] = gets the name of material object
    obj[1] = gets the material object, letting you access the data like .type
    addFlags = adds these flags to the item, e.g. ['crystal', 'clump', 'ingot']
    delFlags = remove these flags from the items types base flags, e.g. ['crystal', 'clump', 'ingot']
 */

global.vanilla_mats = {
    // - - vanilla - - 
    coal: {
        type: 'none', toolLvl: 'wood', vanillaFlags: ['storage_block', 'ore'],
        addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []
    },
    copper: {
        type: 'metal', toolLvl: 'stone', vanillaFlags: ['ingot', 'raw_ore', 'ore', 'raw_block', 'storage_block'],
        addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []
    },
    diamond: {
        type: 'gem', toolLvl: 'iron', vanillaFlags: ['gem', 'storage_block', 'ore'],
        addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []
    },
    emerald: {
        type: 'gem', toolLvl: 'iron', vanillaFlags: ['gem', 'storage_block', 'ore'],
        addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []
    },
    gold: {
        type: 'metal', toolLvl: 'iron', vanillaFlags: ['ingot', 'nugget', 'raw_ore', 'ore', 'raw_block', 'storage_block'],
        addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []
    },
    iron: {
        type: 'metal', toolLvl: 'stone', vanillaFlags: ['ingot', 'nugget', 'raw_ore', 'ore', 'raw_block', 'storage_block'],
        addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []
    },
    lapis: {
        type: 'gem', toolLvl: 'stone', vanillaFlags: ['gem', 'storage_block', 'ore'],
        addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []
    },
    netherite: {
        type: 'metal', toolLvl: 'diamond', vanillaFlags: ['ingot', 'storage_block'],
        addFlags: [], delFlags: ['raw_ore', 'shard', 'crushed_ore', 'ore', 'clump', 'crystal', 'dirty_dust'], addProcFlags: [], delProcFlags: []
    },
    quartz: {
        type: 'gem', toolLvl: 'stone', vanillaFlags: ['gem', 'storage_block', 'ore'],
        addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []
    },
    redstone: {
        type: 'none', toolLvl: 'iron', vanillaFlags: ['dust', 'storage_block', 'ore'],
        addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []
    },
}

global.alloy_mats = {
    // - - alloy - - 
    brass: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [], alloy: { mats: [['copper'], ['zinc']] } },
    bronze: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [], alloy: { mats: [['copper', 3], ['tin', 1]] } },
    constantan: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [], alloy: { mats: [['copper'], ['nickel']] } },
    electrum: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [], alloy: { mats: [['gold'], ['silver']] } },
    enderium: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [], alloy: { mats: [['diamond'], ['lead'], ['ender_pearl']], count: 2 } },
    // graphite: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    invar: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [], alloy: { mats: [['nickel'], ['iron', 2]] } },
    lumium: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [], alloy: { mats: [['silver'], ['tin', 3], ['glowstone']], count: 4 } },
    signalum: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [], alloy: { mats: [['silver'], ['copper', 3], ['redstone', 4]], count: 4 } },
    steel: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    // fiery: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    // infused_iron: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    // ironwood: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    // knightmetal: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    // orichalcum: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    refined_glowstone: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    refined_obsidian: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    rose_gold: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [], alloy: { mats: [['copper'], ['gold']] } },
    // sky: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    // soul_steel: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    // tainted_gold: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
}

global.gem_mats = {
    // - - gem - - 
    apatite: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    bitumen: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    // charoite: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    cinnabar: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    dimensional: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    // diopside: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    // moonstone: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    potassium_nitrate: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    // pyrope: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    sapphire: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    sulfur: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    // aquite: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    arcane: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    // carminite: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: ['dirty_dust'], addProcFlags: [], delProcFlags: []},
    certus_quartz: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    // charged_certus_quartz: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    fluorite: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    // peridot: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    ruby: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
}

global.metal_mats = {
    // - - metal - -
    aluminum: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['crushed_ore'], addProcFlags: [], delProcFlags: [] },
    // iridium: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['crushed_ore'], addProcFlags: [], delProcFlags: []},
    lead: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['shard', 'crushed_ore'], addProcFlags: [], delProcFlags: [] },
    nickel: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    platinum: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    silver: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] },
    tin: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['shard'], addProcFlags: [], delProcFlags: [] },
    // titanium: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    // tungsten: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    uranium: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['shard'], addProcFlags: [], delProcFlags: [] },
    zinc: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['crushed_ore'], addProcFlags: [], delProcFlags: [] },
    cobalt: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['crushed_ore'], addProcFlags: [], delProcFlags: [] },
    // falsite: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    // horizonite: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    osmium: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['shard'], addProcFlags: [], delProcFlags: [] },
    // ventium: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: []},
    iesnium: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [], addProcFlags: [], delProcFlags: [] }
}

global.flagless_mats = {
    // - - no default flags - -
}

global.emendatus_mats = Object.assign({},
    global.vanilla_mats, global.alloy_mats, global.gem_mats, global.metal_mats, global.flagless_mats
)

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
    none: {
        item: [],
        block: []
    }
}

// - - global functions - -

global.emenGetReplace = function emendatusGetReplacementString(replaceableString, materialName) {
    if (!replaceableString.includes('@')) { return replaceableString }
    return replaceableString.replace('@', materialName)
}