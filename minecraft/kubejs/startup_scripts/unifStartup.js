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

// // overrides for preffered mods, will force items to this regardless of prefered
// global.unifyArgs = [
//     // vanilla
//     { name: 'iron', hasOre: true, propIds: ['minecraft:iron_nugget', 'minecraft:iron_ingot', 'minecraft:iron_block', 'emendatus:iron_dust', 'emendatus:iron_gear', 'emendatus:iron_plate'] },
//     { name: 'copper', hasOre: true, propIds: ['emendatus:copper_nugget', 'minecraft:copper_ingot', 'minecraft:copper_block', 'emendatus:copper_dust', 'emendatus:copper_gear', 'emendatus:copper_plate'] },
//     { name: 'gold', hasOre: true, propIds: ['minecraft:gold_nugget', 'minecraft:gold_ingot', 'minecraft:gold_block', 'emendatus:gold_dust', 'emendatus:gold_gear', 'emendatus:gold_plate'] },
//     { name: 'diamond', hasOre: true, propIds: ['minecraft:diamond_block', 'emendatus:diamond_dust', 'emendatus:diamond_gear'] },
//     // modded common
//     { name: 'zinc', hasOre: true, propIds: ['emendatus:zinc_nugget', 'emendatus:zinc_ingot', 'emendatus:zinc_block'] },
//     { name: 'lead', hasOre: true, propIds: ['emendatus:lead_nugget', 'emendatus:lead_ingot', 'emendatus:lead_block', 'emendatus:lead_dust', 'emendatus:lead_gear', 'emendatus:lead_plate'] },
//     { name: 'tin', hasOre: true, propIds: ['emendatus:tin_nugget', 'emendatus:tin_ingot', 'emendatus:tin_block', 'emendatus:tin_dust', 'emendatus:tin_gear', 'emendatus:tin_plate'] },
//     { name: 'silver', hasOre: true, propIds: ['emendatus:silver_nugget', 'emendatus:silver_ingot', 'emendatus:silver_block', 'emendatus:silver_dust', 'emendatus:silver_gear', 'emendatus:silver_plate'] },
//     { name: 'nickel', hasOre: true, propIds: ['emendatus:nickel_nugget', 'emendatus:nickel_ingot', 'emendatus:nickel_block', 'emendatus:nickel_dust', 'emendatus:nickel_gear', 'emendatus:nickel_plate'] },
//     { name: 'uranium', hasOre: true, propIds: ['emendatus:nugget_uranium', 'emendatus:ingot_uranium', 'emendatus:block_uranium', 'emendatus:dust_uranium', 'emendatus:uranium_plate'] },
//     // modded alloy
//     { name: 'bronze', hasOre: true, propIds: ['emendatus:bronze_nugget', 'emendatus:bronze_ingot', 'emendatus:bronze_block', 'emendatus:bronze_dust', 'emendatus:bronze_gear'] },
//     { name: 'steel', hasOre: true, propIds: ['emendatus:nugget_steel', 'emendatus:ingot_steel', 'emendatus:block_steel', 'emendatus:dust_steel', 'emendatus:steel_plate'] },
//     { name: 'electrum', hasOre: true, propIds: ['emendatus:electrum_nugget', 'emendatus:electrum_ingot', 'emendatus:electrum_block', 'emendatus:electrum_dust', 'emendatus:electrum_gear', 'emendatus:electrum_plate'] },
//     { name: 'invar', hasOre: true, propIds: ['emendatus:invar_nugget', 'emendatus:invar_ingot', 'emendatus:invar_block', 'emendatus:invar_dust'] },
//     { name: 'constantan', hasOre: true, propIds: ['emendatus:constantan_nugget', 'emendatus:constantan_ingot', 'emendatus:constantan_block', 'emendatus:constantan_dust', 'emendatus:constantan_gear', 'emendatus:constantan_plate'] },
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