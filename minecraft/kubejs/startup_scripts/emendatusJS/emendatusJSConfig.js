// enable debug logging, prints alot to console
global.emenDebug = true

// enable regenerating tag data after a /reload
// probably keep this on for pack dev, disable for releases (ensure it works first)
global.emenDatagen = true

/*
hide all items in recipe viewer that don't replace existing items in your modpack.
based on tag! only works AFTER tag datagen is ran and has the matches.
e.g. if '#forge:gears/ruby' tag has any entries from another mod,
then the emendatus ruby gear will be unhidden
(does not hide generated items with self added flags)
*/
global.emenHideNonReplacing = true

// replace other mod's items with emendatus items in recipes 
// (removes other mods items from tags and hides them)
global.emenUnifyReplaces = true

// ['replaceable string', 'flag id']
// @ is used as a placeholder to be replaced by a material name by global.emenGetTypeReplace
global.emendatus_item_types = [
    ['@_nugget', 'nugget'],
    ['@_ingot', 'ingot'],
    ['@_dust', 'dust'],
    ['@_plate', 'plate'],
    ['@_rod', 'rod'],
    ['@_gear', 'gear'],
    ['@_gem', 'gem'],
    ['@_gravel', 'gravel'],
    ['@_dirty_dust', 'dirty_dust'],
    ['@_fragment', 'fragment'],
    ['@_shard', 'shard'],
    ['@_crystal', 'crystal'],
    ['@_clump', 'clump'],
    ['@_cluster_shard', 'cluster_shard'],
    ['crushed_@_ore', 'crushed_ore'],
    ['raw_@', 'raw_ore']
]

global.emendatus_block_types = [
    ['@_block', 'storage_block'],
    ['@_ore', 'ore'],
    ['raw_@_block', 'raw_block']
]

/* 
    obj[0] = gets the name of material object
    obj[1] = gets the material object, letting you access the data like .type
    addFlags = adds these flags to the item, e.g. ['crystal', 'clump', 'ingot']
    delFlags = remove these flags from the items types base flags, e.g. ['crystal', 'clump', 'ingot']
 */
global.emendatus_mats = {
    // - - vanilla - - 
    coal: { type: 'vanilla', toolLv: 'wood', isVanilla: true, addFlags: [], delFlags: [] },
    copper: { type: 'vanilla', toolLv: 'stone', isVanilla: true, addFlags: [], delFlags: ['cluster_shard'] },
    diamond: { type: 'vanilla', toolLv: 'iron', isVanilla: true, addFlags: [], delFlags: [] },
    emerald: { type: 'vanilla', toolLv: 'iron', isVanilla: true, addFlags: [], delFlags: [] },
    gold: { type: 'vanilla', toolLv: 'iron', isVanilla: true, addFlags: [], delFlags: ['cluster_shard'] },
    iron: { type: 'vanilla', toolLv: 'stone', isVanilla: true, addFlags: [], delFlags: ['cluster_shard'] },
    lapis: { type: 'vanilla', toolLv: 'stone', isVanilla: true, addFlags: [], delFlags: [] },
    netherite: { type: 'vanilla', toolLv: 'diamond', isVanilla: true, addFlags: [], delFlags: ['clump', 'dirty_dust', 'crystal', 'shard', 'crushed_ore', 'cluster_shard'] },
    quartz: { type: 'vanilla', toolLv: 'stone', isVanilla: true, addFlags: [], delFlags: [] },
    redstone: { type: 'vanilla', toolLv: 'iron', isVanilla: true, addFlags: [], delFlags: ['dust'] },
    // - - alloy - - 
    brass: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    bronze: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    constantan: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    electrum: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    enderium: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    graphite: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    invar: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    lumium: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    signalum: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    steel: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    fiery: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    infused_iron: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    ironwood: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    knightmetal: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    orichalcum: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    refined_glowstone: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    refined_obsidian: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    rose_gold: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    sky: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    soul_steel: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    tainted_gold: { type: 'alloy', toolLv: 'stone', addFlags: [], delFlags: [] },
    // - - gem - - 
    apatite: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    bitumen: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    charoite: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    cinnabar: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    dimensional: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    diopside: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    moonstone: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    potassium_nitrate: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    pyrope: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    sapphire: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    sulfur: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    aquite: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    arcane: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    carminite: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: ['dirty_dust'] },
    certus_quartz: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    // charged_certus_quartz: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    fluorite: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    peridot: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    ruby: { type: 'gem', toolLv: 'stone', addFlags: [], delFlags: [] },
    // - - metal - -
    aluminum: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: ['crushed_ore'] },
    iridium: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: ['crushed_ore'] },
    lead: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: ['shard', 'crushed_ore'] },
    nickel: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: [] },
    platinum: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: [] },
    silver: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: [] },
    tin: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: ['shard'] },
    titanium: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: [] },
    tungsten: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: [] },
    uranium: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: ['shard'] },
    zinc: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: ['crushed_ore'] },
    cobalt: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: ['crushed_ore'] },
    falsite: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: [] },
    horizonite: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: [] },
    osmium: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: ['shard'] },
    ventium: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: [] },
    iesnium: { type: 'metal', toolLv: 'stone', addFlags: [], delFlags: [] }
}

// - - global functions - -

// gets the replaceable string for a typeid, then replaces the '@' with the material name
// since some item type ids have diff formatting than id:material_type e.g. iron_ingot vs crushed_iron_ore
global.emenGetTypeReplace = function emendatusGetTypeReplacementString(typeIn, matNameIn, registryType) {
    let typesToCheck = []
    switch (registryType) {
        case 'block':
            // emDbg(`getting block types for ${matNameIn}`)
            typesToCheck = global.emendatus_block_types
            break
        case 'item':
            // emDbg(`getting item types for ${matNameIn}`)
            typesToCheck = global.emendatus_item_types
            break
        case 'all':
            // emDbg(`getting all types for ${matNameIn}`)
            typesToCheck = global.emendatus_item_types.concat(global.emendatus_block_types)
            break
        default:
            // emDbg(`defaulted to item types for ${matNameIn}`)
            typesToCheck = global.emendatus_item_types
    }
    for (let i = 0; i < typesToCheck.length; i++) {
        if (typesToCheck[i][1] == typeIn) {
            // if theres no match for a material, like a item checking for storage_blocks flag or something
            // itll just return undefined and break registries, so make sure that uses check for undefined
            let a = typesToCheck[i][0].replace('@', matNameIn)
            return a
        }
    }
}

// [0] = item flags, [1] = block flags
global.gbfpt = function getBaseFlagsPerType(type) {
    switch (type) {
        case 'alloy':
            return [
                ['dust', 'gear', 'ingot', 'nugget', 'plate', 'rod'],
                ['storage_block']
            ]
        case 'gem':
            return [
                ['storage_block', 'clump', 'cluster_shard', 'crystal', 'gem',
                    'gravel', 'plate', 'fragment', 'shard', 'gear', 'rod', 'dirty_dust', 'dust'],
                ['storage_block', 'ore']
            ]
        case 'metal':
            return [
                ['clump', 'crystal', 'dirty_dust', 'dust', 'fragment',
                    'gear', 'gravel', 'ingot', 'nugget', 'plate', 'rod', 'raw_ore', 'shard', 'crushed_ore'],
                ['storage_block', 'ore', 'raw_block']
            ]
        case 'vanilla': //vanilla
            return [
                ['plate', 'rod', 'gear', 'dust', 'gravel', 'fragment', 'clump',
                    'dirty_dust', 'crystal', 'shard', 'crushed_ore', 'cluster_shard'], []
            ]
        default:
            return []
    }
}