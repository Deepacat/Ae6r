// priority: 999
/* 
    obj[0] = gets the name of material object
    obj[1] = gets the material object, letting you access the data like .type
    addFlags = adds these flags to the item, e.g. ['crystal', 'clump', 'ingot']
    delFlags = remove these flags from the items types base flags, e.g. ['crystal', 'clump', 'ingot']
 */

global.vanilla_mats = {
    // - - vanilla - - 
    coal: {
        type: 'other', toolLvl: 'wood', ignoreRegisterFlags: ['storage_block', 'ore'],
        addFlags: ['ore'], delFlags: [],
    },
    copper: {
        type: 'metal', toolLvl: 'stone', ignoreRegisterFlags: ['ingot', 'raw_ore', 'ore', 'raw_block', 'storage_block', 'crushed_ore'],
        addFlags: [], delFlags: [],
    },
    diamond: {
        type: 'gem', toolLvl: 'iron', ignoreRegisterFlags: ['gem', 'storage_block', 'ore'],
        addFlags: [], delFlags: [],
    },
    emerald: {
        type: 'gem', toolLvl: 'iron', ignoreRegisterFlags: ['gem', 'storage_block', 'ore'],
        addFlags: [], delFlags: [],
    },
    gold: {
        type: 'metal', toolLvl: 'iron', ignoreRegisterFlags: ['ingot', 'nugget', 'raw_ore', 'ore', 'raw_block', 'storage_block', 'crushed_ore'],
        addFlags: [], delFlags: [],
    },
    iron: {
        type: 'metal', toolLvl: 'stone', ignoreRegisterFlags: ['ingot', 'nugget', 'raw_ore', 'ore', 'raw_block', 'storage_block', 'crushed_ore'],
        addFlags: [], delFlags: [],
    },
    lapis: {
        type: 'gem', toolLvl: 'stone', ignoreRegisterFlags: ['gem', 'storage_block', 'ore'],
        addFlags: [], delFlags: [],
    },
    netherite: {
        type: 'metal', toolLvl: 'diamond', ignoreRegisterFlags: ['ingot', 'storage_block'],
        addFlags: [], delFlags: ['raw_ore', 'shard', 'crushed_ore', 'ore', 'clump', 'crystal', 'dirty_dust', 'raw_block'],
    },
    quartz: {
        type: 'gem', toolLvl: 'stone', ignoreRegisterFlags: ['gem', 'storage_block', 'ore'],
        addFlags: [], delFlags: [],
    },
    redstone: {
        type: 'other', toolLvl: 'iron', ignoreRegisterFlags: ['dust', 'storage_block', 'ore'],
        addFlags: ['ore'], delFlags: [],
    },
}

global.alloy_mats = {
    // - - alloy - - 
    brass: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], alloy: { mats: [['copper'], ['zinc']] } },
    bronze: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], alloy: { mats: [['copper', 3], ['tin', 1]] } },
    constantan: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], alloy: { mats: [['copper'], ['nickel']] } },
    electrum: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], alloy: { mats: [['gold'], ['silver']] } },
    enderium: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], alloy: { mats: [['diamond'], ['lead'], ['ender_pearl']], count: 2 } },
    // graphite: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    invar: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], alloy: { mats: [['nickel'], ['iron', 2]] } },
    lumium: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], alloy: { mats: [['silver'], ['tin', 3], ['glowstone']], count: 4 } },
    signalum: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], alloy: { mats: [['silver'], ['copper', 3], ['redstone', 4]], count: 4 } },
    steel: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], },
    // fiery: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    // infused_iron: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    // ironwood: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    // knightmetal: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    // orichalcum: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    // refined_glowstone: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [],   },
    // refined_obsidian: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [],   },
    rose_gold: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [], alloy: { mats: [['copper'], ['gold']] } },
    // sky: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    // soul_steel: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    // tainted_gold: { type: 'alloy', toolLvl: 'stone', addFlags: [], delFlags: [],  },
}

global.gem_mats = {
    // - - gem - - 
    apatite: {
        type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [],
    },
    // bitumen: {
    //     type: 'other', toolLvl: 'stone', addFlags: [], delFlags: [],  
    // },
    charcoal: {
        type: 'other', toolLvl: 'stone', addFlags: ['dust'], delFlags: [],
    },
    // charoite: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    cinnabar: {
        type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [],
    },
    dimensional: {
        type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [],
    },
    // diopside: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    // moonstone: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    potassium_nitrate: {
        type: 'gem', toolLvl: 'stone', tagMaterials: ['niter', 'saltpeter'], addFlags: [], delFlags: [],
    },
    // pyrope: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    sapphire: {
        type: 'gem', toolLvl: 'iron', addFlags: ['ore'], delFlags: [],
    },
    source: {
        type: 'other', toolLvl: 'iron', tagMaterials: ['mana'], addFlags: ['ore'], delFlags: [],
    },
    sulfur: {
        type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [],
    },
    // aquite: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    // carminite: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: ['dirty_dust'],  },
    // certus_quartz: {
    //     type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [],  
    // },
    // charged_certus_quartz: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    fluorite: {
        type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [],
    },
    // peridot: { type: 'gem', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    ruby: {
        type: 'other', toolLvl: 'iron', addFlags: ['ore'], delFlags: [],
    },
}

global.metal_mats = {
    // - - metal - -
    aluminum: {
        type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['crushed_ore'],
    },
    arcane_gold: {
        type: 'other', toolLvl: 'iron', addFlags: [], delFlags: [],
    },
    // iridium: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['crushed_ore'],  },
    lead: {
        type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['shard', 'crushed_ore'],
    },
    nickel: {
        type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['crushed_ore'],
    },
    // platinum: {
    //     type: 'metal', toolLvl: 'iron', addFlags: [], delFlags: [],  
    // },
    silver: {
        type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['crushed_ore'],
    },
    tin: {
        type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['shard', 'crushed_ore'],
    },
    // titanium: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    // tungsten: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    uranium: {
        type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['shard', 'crushed_ore'],
    },
    zinc: {
        type: 'metal', toolLvl: 'iron', addFlags: [], delFlags: ['crushed_ore'],
    },
    cobalt: {
        type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: ['crushed_ore'],
    },
    // falsite: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    // horizonite: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    osmium: {
        type: 'metal', toolLvl: 'iron', addFlags: [], delFlags: ['shard', 'crushed_ore'],
    },
    // ventium: { type: 'metal', toolLvl: 'stone', addFlags: [], delFlags: [],  },
    // iesnium: {
    //     type: 'other', toolLvl: 'stone', addFlags: [], delFlags: [],  
    // },
}

global.other_mats = {
    obsidian: {
        type: 'other', toolLvl: 'diamond', addFlags: ['dust'], delFlags: [],
    }
}

global.emendatus_mats = Object.assign({},
    global.vanilla_mats, global.alloy_mats, global.gem_mats, global.metal_mats, global.other_mats
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
    storage_block: {
        replacer: '@_block', tag: 'storage_blocks/', tags: ['forge:storage_blocks/@', 'forge:storage_blocks']
    },
    ore: {
        replacer: '@_ore', tag: 'ores/', tags: ['forge:ores/@', 'forge:ores']
    },
    raw_block: {
        replacer: 'raw_@_block', tag: 'storage_blocks/raw_', tags: ['forge:storage_blocks/raw_@', 'forge:storage_blocks/raw']
    }
}

global.emendatus_all_types = Object.assign(global.emendatus_item_types, global.emendatus_block_types)

global.emendatus_base_flags = {
    alloy: {
        item: ['dust', 'gear', 'ingot', 'nugget', 'plate', 'rod'],
        block: ['storage_block']
    },
    gem: {
        item: ['clump', /* 'cluster_shard', 'crystal', */ 'gem', 'gravel', 'plate', 'fragment', 'shard', 'gear', 'rod', 'dirty_dust', 'dust'],
        block: ['storage_block', 'ore']
    },
    metal: {
        item: ['clump', 'crystal', 'dirty_dust', 'dust', 'fragment', 'gear', 'gravel', 'ingot', 'nugget', 'plate', 'rod', 'raw_ore', 'shard', 'crushed_ore'],
        block: ['storage_block', 'ore', 'raw_block']
    },
    other: {
        item: [],
        block: []
    },
    // all flags is used to check which material registry a flag belongs to
    all: {
        item: ['dust', 'clump', 'crystal', 'dirty_dust', 'dust', 'fragment', 'gear', 'gravel', 'ingot', 'nugget', 'plate', 'rod', 'raw_ore', 'shard', 'crushed_ore'],
        block: ['storage_block', 'ore', 'raw_block']
    }
}

// add a flags entry to each material object which has their final correct flags, with base + force added and removed flags
for (let matObj of Object.entries(global.emendatus_mats)) {
    global.emendatus_mats[matObj[0]].flags = {}

    global.emendatus_mats[matObj[0]].flags.item = global.emendatus_base_flags[matObj[1].type].item
        .filter(flag => !matObj[1].delFlags.includes(flag))
        .concat(matObj[1].addFlags.filter(flag => global.emendatus_base_flags.all.item.includes(flag)))

    global.emendatus_mats[matObj[0]].flags.block = global.emendatus_base_flags[matObj[1].type].block
        .filter(flag => !matObj[1].delFlags.includes(flag))
        .concat(matObj[1].addFlags.filter(flag => global.emendatus_base_flags.all.block.includes(flag)))

    global.emendatus_mats[matObj[0]].flags.all =
        global.emendatus_base_flags[matObj[1].type].item
            .concat(global.emendatus_base_flags[matObj[1].type].block)
            .filter(flag => !matObj[1].delFlags.includes(flag))
            .concat(matObj[1].addFlags)
}

// - - global functions - -

global.emenGetReplace = function emendatusGetReplacementString(replaceableString, materialName) {
    if (!replaceableString.includes('@')) { return replaceableString }
    return replaceableString.replace('@', materialName)
}