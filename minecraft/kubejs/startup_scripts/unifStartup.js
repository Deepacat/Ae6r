// // propType uses in tags, [strings to match items to propType]
// global.propTypes = [
//     ['ingots', ['ingot']],
//     ['dusts', ['dust']],
//     ['nuggets', ['nugget']],
//     ['storage_blocks', ['block']],
//     ['gears', ['gear']],
//     ['plates', ['plate', 'sheet']],
//     ['rods', ['rod']],
//     ['wires', ['wire']]
// ]

// // similar to almostunified, mod priority list to prefer unifying to over others
// global.preferredMods = [
//     'minecraft',
//     'kubejs',
//     'thermal',
//     'mekanism',
//     'create',
//     'immersiveengineering',
// ]

// // overrides for preffered mods, will force items to this regardless of prefered
// global.unifyArgs = [
//     // vanilla
//     { name: 'iron', hasOre: true, propIds: ['minecraft:iron_nugget', 'minecraft:iron_ingot', 'minecraft:iron_block', 'thermal:iron_dust', 'thermal:iron_gear', 'thermal:iron_plate'] },
//     { name: 'copper', hasOre: true, propIds: ['thermal:copper_nugget', 'minecraft:copper_ingot', 'minecraft:copper_block', 'thermal:copper_dust', 'thermal:copper_gear', 'thermal:copper_plate'] },
//     { name: 'gold', hasOre: true, propIds: ['minecraft:gold_nugget', 'minecraft:gold_ingot', 'minecraft:gold_block', 'thermal:gold_dust', 'thermal:gold_gear', 'thermal:gold_plate'] },
//     { name: 'diamond', hasOre: true, propIds: ['minecraft:diamond_block', 'thermal:diamond_dust', 'thermal:diamond_gear'] },
//     // modded common
//     { name: 'zinc', hasOre: true, propIds: ['create:zinc_nugget', 'create:zinc_ingot', 'create:zinc_block'] },
//     { name: 'lead', hasOre: true, propIds: ['thermal:lead_nugget', 'thermal:lead_ingot', 'thermal:lead_block', 'thermal:lead_dust', 'thermal:lead_gear', 'thermal:lead_plate'] },
//     { name: 'tin', hasOre: true, propIds: ['thermal:tin_nugget', 'thermal:tin_ingot', 'thermal:tin_block', 'thermal:tin_dust', 'thermal:tin_gear', 'thermal:tin_plate'] },
//     { name: 'silver', hasOre: true, propIds: ['thermal:silver_nugget', 'thermal:silver_ingot', 'thermal:silver_block', 'thermal:silver_dust', 'thermal:silver_gear', 'thermal:silver_plate'] },
//     { name: 'nickel', hasOre: true, propIds: ['thermal:nickel_nugget', 'thermal:nickel_ingot', 'thermal:nickel_block', 'thermal:nickel_dust', 'thermal:nickel_gear', 'thermal:nickel_plate'] },
//     { name: 'uranium', hasOre: true, propIds: ['mekanism:nugget_uranium', 'mekanism:ingot_uranium', 'mekanism:block_uranium', 'mekanism:dust_uranium', 'immersiveengineering:plate_uranium'] },
//     // modded alloy
//     { name: 'bronze', hasOre: true, propIds: ['thermal:bronze_nugget', 'thermal:bronze_ingot', 'thermal:bronze_block', 'thermal:bronze_dust', 'thermal:bronze_gear'] },
//     { name: 'steel', hasOre: true, propIds: ['mekanism:nugget_steel', 'mekanism:ingot_steel', 'mekanism:block_steel', 'mekanism:dust_steel', 'immersiveengineering:plate_steel'] },
//     { name: 'electrum', hasOre: true, propIds: ['thermal:electrum_nugget', 'thermal:electrum_ingot', 'thermal:electrum_block', 'thermal:electrum_dust', 'thermal:electrum_gear', 'thermal:electrum_plate'] },
//     { name: 'invar', hasOre: true, propIds: ['thermal:invar_nugget', 'thermal:invar_ingot', 'thermal:invar_block', 'thermal:invar_dust'] },
//     { name: 'constantan', hasOre: true, propIds: ['thermal:constantan_nugget', 'thermal:constantan_ingot', 'thermal:constantan_block', 'thermal:constantan_dust', 'thermal:constantan_gear', 'thermal:constantan_plate'] },
// ]

// let pt = global.propTypes
// global.getPropType = function self(id) {
//     for (let i = 0; i < pt.length; i++) {
//         for (let matchString of pt[i][1]) {
//             if (id.indexOf(matchString) != -1) {
//                 return pt[i][0]
//             }
//         }
//     }
// }