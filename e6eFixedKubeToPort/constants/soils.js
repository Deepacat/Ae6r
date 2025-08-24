//priority: 1001
// Registry of soils for use in botany pots
const soilRegistry = [
    { block: 'minecraft:coarse_dirt', categories: ['dirt', 'coarse_dirt'], growthModifier: -0.65 },
    {
        block: 'minecraft:crimson_nylium',
        categories: ['dirt', 'crimson_nylium', 'nylium', 'mushroom'],
        growthModifier: 0.05
    },
    {
        block: 'undergarden:ashen_deepturf_block',
        categories: ['dirt', 'deepturf', 'ashen_deepturf'],
        growthModifier: 0
    },
    { block: 'undergarden:deepsoil', categories: ['dirt', 'deepturf'], growthModifier: 0 },
    { block: 'undergarden:deepturf_block', categories: ['dirt', 'deepturf'], growthModifier: 0 },
    {
        block: 'undergarden:frozen_deepturf_block',
        categories: ['dirt', 'deepturf', 'frozen_deepturf'],
        growthModifier: 0
    },
    { block: 'undergarden:deepsoil_farmland', categories: ['dirt', 'deepturf', 'farmland'], growthModifier: 0.15 },
    { block: 'undergarden:sediment', categories: ['sand', 'sediment'], growthModifier: 0.2 },
    // {
    //     block: /*'byg:'*/ 'kubejs:replaceme',
    //     categories: ['dirt', 'embur_nylium', 'nylium', 'blue_netherrack', 'mushroom'],
    //     growthModifier: 0.05
    // },
    { block: 'farmersdelight:rich_soil_farmland', categories: ['dirt', 'farmland'], growthModifier: 0.15 },
    {
        block: 'farmingforblockheads:fertilized_farmland_healthy',
        categories: ['dirt', 'farmland'],
        growthModifier: 0.15
    },
    {
        block: 'farmingforblockheads:fertilized_farmland_healthy_stable',
        categories: ['dirt', 'farmland'],
        growthModifier: 0.15
    },
    { block: 'minecraft:farmland', categories: ['dirt', 'farmland'], growthModifier: 0.15 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0.05 },
    { block: 'quark:glowcelium', categories: ['dirt', 'glowcelium', 'mushroom'], growthModifier: 0.05 },
    { block: 'botania:enchanted_soil', categories: ['dirt', 'grass', 'botania', 'magic'], growthModifier: 0.25 },
    { block: 'botania:vivid_grass', categories: ['dirt', 'grass', 'botania', 'magic'], growthModifier: 0.15 },
    { block: 'botania:scorched_grass', categories: ['dirt', 'grass', 'botania', 'nether'], growthModifier: 0.15 },
    { block: 'botania:dry_grass', categories: ['dirt', 'grass', 'botania'], growthModifier: -0.1 },
    { block: 'botania:golden_grass', categories: ['dirt', 'grass', 'botania'], growthModifier: 0.05 },
    { block: 'botania:infused_grass', categories: ['dirt', 'grass', 'botania'], growthModifier: 0.15 },
    { block: 'botania:mutated_grass', categories: ['dirt', 'grass', 'botania'], growthModifier: 0.15 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0.05 },
    { block: 'minecraft:podzol', categories: ['dirt', 'grass', 'podzol', 'mushroom'], growthModifier: 0.05 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0.05 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0.05 },
    { block: 'minecraft:grass_block', categories: ['dirt', 'grass'], growthModifier: 0.05 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0.25 },
    // { block: /*'atum:'*/ 'kubejs:replaceme'], growthModifier: 0.2 },
    // { block: /*'atum:'*/ 'kubejs:replaceme'], growthModifier: 0.2 },

    { block: 'minecraft:mycelium', categories: ['dirt', 'mushroom'], growthModifier: 0.05 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0.05 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0.05 },
    {
        block: 'minecraft:warped_nylium',
        categories: ['dirt', 'warped_nylium', 'nylium', 'mushroom'],
        growthModifier: 0.05
    },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0 },
    { block: 'decorative_blocks:rocky_dirt', categories: ['dirt'], growthModifier: 0 },
    { block: 'minecraft:dirt', categories: ['dirt'], growthModifier: 0 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0.05 },
    { block: 'minecraft:end_stone', categories: ['end_stone'], growthModifier: -0.5 },
    { block: 'minecraft:lava_bucket', categories: ['fluid', 'liquid', 'lava'], growthModifier: 0 },
    { block: 'minecraft:water_bucket', categories: ['fluid', 'liquid', 'water'], growthModifier: 0 },
    {
        // block: /*'byg:'*/ 'kubejs:replaceme',
        categories: ['nether', 'nylium_soul_sand', 'nylium_soul_soil', 'soul_sand', 'soul_soil'],
        growthModifier: 0
    },
    {
        block: /*'byg:'*/ 'kubejs:replaceme',
        categories: ['nether', 'nylium_soul_sand', 'nylium_soul_soil', 'soul_sand', 'soul_soil'],
        growthModifier: 0
    },
    { block: 'minecraft:netherrack', categories: ['nether'], growthModifier: 0 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0 },
    { block: 'minecraft:red_sand', categories: ['sand', 'red_sand'], growthModifier: 0 },
    { block: 'minecraft:sand', categories: ['sand', 'red_sand'], growthModifier: 0 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0 },
    { block: 'minecraft:soul_sand', categories: ['soul_sand', 'nether'], growthModifier: -0.3 },
    { block: 'minecraft:soul_soil', categories: ['soul_sand', 'nether'], growthModifier: 0 },

    // { block: /*'betterendforge:'*/ 'kubejs:replaceme'], growthModifier: 0.5 },
    // { block: /*'betterendforge:'*/ 'kubejs:replaceme'], growthModifier: 0.5 },
    // { block: /*'betterendforge:'*/ 'kubejs:replaceme'], growthModifier: 0.5 },
    // { block: /*'betterendforge:'*/ 'kubejs:replaceme'], growthModifier: 0.5 },
    // { block: /*'betterendforge:'*/ 'kubejs:replaceme'], growthModifier: 0.5 },
    // { block: /*'betterendforge:'*/ 'kubejs:replaceme'], growthModifier: 0.5 },
    // { block: /*'betterendforge:'*/ 'kubejs:replaceme'], growthModifier: 0.5 },
    // { block: /*'betterendforge:'*/ 'kubejs:replaceme'], growthModifier: 0.5 },
    // { block: /*'betterendforge:'*/ 'kubejs:replaceme'], growthModifier: 0.5 },
    // {
    //     block: /*'betterendforge:'*/ 'kubejs:replaceme',
    //     categories: ['end_stone', 'end_mycelium', 'mushroom'],
    //     growthModifier: 0.5
    // },
    { block: 'atmospheric:arid_sand', categories: ['sand', 'arid_sand'], growthModifier: 0.0 },
    { block: 'atmospheric:red_arid_sand', categories: ['sand', 'arid_sand', 'red_arid_sand'], growthModifier: 0.0 },
    // { block: /*'byg:'*/ 'kubejs:replaceme'], growthModifier: 0.5 }
];

let dirt_types = ['blood', 'earth', 'ender', 'sky'],
    grass_types = ['earth', 'ender', 'ichor', 'sky', 'vanilla'];

dirt_types.forEach((dirt_type) => {
    if (dirt_type != 'blood') {
        soilRegistry.push({
            block: `tconstruct:${dirt_type}_slime_dirt`,
            categories: ['slimy_dirt'],
            growthModifier: 0.0
        });
    }

    grass_types.forEach((grass_type) => {
        soilRegistry.push({
            block: `tconstruct:${dirt_type}_${grass_type}_slime_grass`,
            categories: ['slimy_dirt'],
            growthModifier: 0.05
        });
    });
});
