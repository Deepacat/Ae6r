//priority: 999
// Priority must be less than that of constants.js as we're using the colors const

// Items added here will get the 'valid_apiary' tag, and be usable as Apiary multiblock walls.
// This is in addition to all blocks that have collision.
const validApiaryBlocks = [
    'glassential:glass_dark',
    'glassential:glass_dark_ethereal',
    'glassential:glass_ethereal',
    'glassential:glass_light',
    'glassential:glass_redstone'
];

// Items added here will be removed from the "valid_apiary" tag
const invalidApiaryBlocks = ['upgrade_aquatic:bedroll'];
colors.forEach((color) => invalidApiaryBlocks.push(`upgrade_aquatic:${color}_bedroll`));

const honeyVarieties = [
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme',
    /*'resourcefulbees:'*/ 'kubejs:replaceme'
];

const combVariants = [
    //keep changes synced to "startup_scripts/item_registry.js", bees constant
    // alloy
    'brass',
    'bronze',
    'constantan',
    'electrum',
    'enderium',
    'invar',
    'lumium',
    'signalum',
    'steel',
    // dev
    'catnip',
    // gem
    'diamond',
    'emerald',
    'lapis',
    'redstone',
    // magic
    'bloody',
    'carbee',
    'elven',
    'infused',
    'mana',
    'otherworldly',
    'sky',
    'starry',
    'tainted',
    'terrestrial',
    // material
    'clay',
    'enderslime',
    'gravel',
    'ichor',
    'shepherd',
    'skyslime',
    // metal
    'aluminum',
    'cobalt',
    'copper',
    'frosty',
    'gold',
    'iron',
    'lead',
    'nickel',
    'osmium',
    'regal',
    'silver',
    'tin',
    'uranium',
    'zinc',
    // natural
    'brutish_zombee',
    'clogged',
    'coal',
    'creeper',
    'ender',
    'forest',
    'glowstone',
    'icy',
    'obsidian',
    'pigman',
    'rgbee',
    'rocky',
    'sand',
    'skeleton',
    'slimy',
    'water',
    'zombie',
    // nether
    'blaze',
    'ghast',
    'netherite',
    'wither',
    'nether_quartz',
    // special
    'boobee',
    'clockwork',
    'direbee20',
    'dusty_mummbee',
    'generikbee',
    'soup',
    'spelling',
    'wasabee',
    // tech
    'basalz',
    'blitz',
    'blizz',
    'industrious',
    'pcbee'
];

const bees = [];

combVariants.forEach((bee) => {
    bees.push(bee);
});

let moreBees = [
    // dev
    'kitten',
    'oreo',
    'starry_lexxie',
    'yeti',
    // manual
    'abbee'
];

moreBees.forEach((bee) => {
    bees.push(bee);
});
