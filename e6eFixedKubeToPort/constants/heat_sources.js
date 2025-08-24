//priority: 1000

const fires = [
    'minecraft:fire', //
    'minecraft:soul_fire',
    /*'byg:'*/ 'kubejs:replaceme',
    /*'byg:'*/ 'kubejs:replaceme',
    'occultism:spirit_fire'
];

const campfires = [
    'minecraft:campfire',
    'minecraft:soul_campfire',
    /*'byg:'*/ 'kubejs:replaceme',
    /*'byg:'*/ 'kubejs:replaceme',
    'decorative_blocks:brazier',
    'decorative_blocks:soul_brazier',
    'valhelsia_structures:brazier'
];

// Miscellaneous non-fire/campfire heat source blocks
const heatSources = [
    'minecraft:lava',
    'minecraft:magma_block',
    'botania:blaze_block',
    /*'byg:'*/ 'kubejs:replaceme',
    /*'byg:'*/ 'kubejs:replaceme',
    'create:lit_blaze_burner',
    'farmersdelight:stove',
    'quark:magma_bricks',
    'quark:magma_bricks_slab',
    'quark:magma_bricks_stairs',
    'quark:magma_bricks_vertical_slab',
    'quark:magma_bricks_wall'
];

// (non-fire/campfire) heat sources that do not have a solid top face
const nonSolidHeatSources = ['minecraft:lava', 'create:lit_blaze_burner'];
