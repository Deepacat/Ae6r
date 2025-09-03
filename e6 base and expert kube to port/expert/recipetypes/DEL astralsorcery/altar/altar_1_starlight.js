// ServerEvents.recipes(event => {
//     /*
//     Note, max starlight is theoretical. In practice, assume roughly 95% as the max reasonable level
   
//     Starlight Crafting Altar 
//     altar_type: 1
//     max_starlight: 2000
//     */



//     const id_prefix = 'enigmatica:expert/astralsorcery/altar/'
//     const recipes = [
//         /// Starlight Crafting Altar Recipes
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme', 1),
//             pattern: ['B___B', '_CDC_', '_EAE_', '_FGF_', 'B___B'],
//             key: {
//                 A: {
//                     type: /*'astralsorcery:'*/ 'kubejs:replaceme',
//                     hasToBeAttuned: false,
//                     hasToBeCelestial: false,
//                     canBeAttuned: true,
//                     canBeCelestialCrystal: true
//                 },
//                 B: { tag: 'forge:storage_blocks/silicon_bronze' },
//                 C: { tag: 'forge:dusts/starmetal' },
//                 D: { tag: 'botania:runes/vanaheim' },
//                 E: { item: 'create:refined_radiance' },
//                 F: { item: 'botania:spectral_platform' },
//                 G: { tag: 'forge:storage_blocks/starmetal' }
//             },
//             altar_type: 1,
//             duration: 200,
//             starlight: 1400,
//             recipe_class: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of('botania:alfheim_portal', 1),
//             pattern: ['A___A', '__F__', '_EDG_', '_BHB_', 'C___C'],
//             key: {
//                 A: { item: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
//                 B: { item: 'botania:glimmering_livingwood' },
//                 C: { tag: 'forge:ingots/terrasteel' },
//                 D: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 E: { tag: 'botania:runes/summer' },
//                 F: { item: 'naturesaura:gold_leaf' },
//                 G: { tag: 'botania:runes/air' },
//                 H: { tag: 'botania:runes/lust' }
//             },
//             altar_type: 1,
//             duration: 200,
//             starlight: 1400,
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}alfheim_portal`
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme', 1),
//             pattern: ['E___E', '__B__', '_CDC_', '_AAA_', 'F___F'],
//             key: {
//                 A: { tag: 'forge:rods/treated_wood' },
//                 B: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 C: { tag: 'forge:ingots/sky' },
//                 D: { item: 'eidolon:polished_planks' },
//                 E: { tag: 'botania:runes/air' },
//                 F: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' }
//             },
//             altar_type: 1,
//             duration: 200,
//             starlight: 800,
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme'),
//             altar_type: 1,
//             duration: 200,
//             starlight: 1400,
//             pattern: ['A___A', '_ECB_', '_CDC_', '_BCE_', 'A___A'],
//             key: {
//                 A: { tag: 'forge:gems/niotic' },
//                 B: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 C: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 D: {
//                     type: /*'astralsorcery:'*/ 'kubejs:replaceme',
//                     fluid: [
//                         {
//                             fluid: 'industrialforegoing:ether_gas',
//                             amount: 1000
//                         }
//                     ]
//                 },
//                 E: { item: 'bloodmagic:reagentbinding' }
//             },
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of('botania:terra_plate', 1),
//             pattern: ['A___B', '_FGF_', '_IEI_', '_JHJ_', 'D___C'],
//             key: {
//                 A: { tag: 'botania:runes/water' },
//                 B: { tag: 'botania:runes/earth' },
//                 C: { tag: 'botania:runes/fire' },
//                 D: { tag: 'botania:runes/air' },
//                 E: { tag: 'botania:runes/mana' },
//                 F: { item: 'pneumaticcraft:upgrade_matrix' },
//                 G: { tag: 'forge:storage_blocks/starmetal' },
//                 H: { tag: 'forge:storage_blocks/sourcesteel' },
//                 I: { item: 'kubejs:firmament' },
//                 J: { item: 'naturesaura:infused_stone' }
//             },
//             altar_type: 1,
//             duration: 200,
//             starlight: 1400,
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}terra_plate`
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme'),
//             altar_type: 1,
//             duration: 200,
//             starlight: 1400,
//             pattern: ['A___A', '_BCB_', '_GEG_', '_FFF_', 'D___D'],
//             key: {
//                 A: { tag: 'forge:ingots/arcane_gold' },
//                 B: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 C: { item: 'minecraft:conduit' },
//                 D: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 E: { item: 'bloodmagic:masterritualstone' },
//                 F: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 G: { tag: 'forge:inlays/arcane_gold' }
//             },
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of('cookingforblockheads:sink'),
//             altar_type: 1,
//             duration: 200,
//             starlight: 1000,
//             pattern: ['A___A', '_BCB_', '_GEG_', '_GFG_', 'D___D'],
//             key: {
//                 A: { tag: 'botania:runes/water' },
//                 B: { tag: 'forge:plates/steel' },
//                 C: { item: 'supplementaries:faucet' },
//                 D: { tag: 'botania:runes/mana' },
//                 E: { item: 'naturesaura:spring' },
//                 F: {
//                     type: 'forge:nbt',
//                     item: 'naturesaura:aura_trove',
//                     count: 1,
//                     nbt: '{aura:1200000}'
//                 },
//                 G: { item: 'minecraft:terracotta' }
//             },
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: 'cookingforblockheads:sink'
//         },
//         {
//             output: Item.of('industrialforegoing:fluid_laser_base', 1),
//             pattern: ['A___A', '_BCB_', '_DED_', '_FGF_', 'A___A'],
//             key: {
//                 A: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 B: { tag: 'forge:plastic' },
//                 C: { tag: 'industrialforegoing:machine_frame/simple' },
//                 D: { tag: 'forge:gears/lumium' },
//                 E: { item: 'mekanism:basic_induction_cell' },
//                 F: { tag: 'botania:runes/fire' },
//                 G: { item: 'bloodmagic:soulgemlesser' }
//             },
//             altar_type: 1,
//             duration: 200,
//             starlight: 1200,
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}fluid_laser_base`
//         },
//         {
//             output: Item.of('apotheosis:seashelf', 1),
//             pattern: ['G___G', '_ACF_', '_BEB_', '_FCA_', 'G___G'],
//             key: {
//                 A: { item: 'minecraft:prismarine_bricks' },
//                 B: { tag: 'botania:runes/water' },
//                 C: { item: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
//                 E: { tag: 'forge:bookshelves' },
//                 F: { item: 'powah:crystal_niotic' },
//                 G: { item: 'bloodmagic:reagentwater' }
//             },
//             altar_type: 1,
//             duration: 200,
//             starlight: 1400,
//             effects: [
//                 /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 /*'astralsorcery:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}seashelf`
//         },

//         /// Guidebook safe removals

//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme'),
//             pattern: ['_____', '_____', '__A__', '_____', '_____'],
//             key: {
//                 A: { item: 'kubejs:altered_recipe_indicator' }
//             },
//             altar_type: 1,
//             duration: 200,
//             starlight: 1400,
//             effects: [/*'astralsorcery:'*/ 'kubejs:replaceme'],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         }
//     ]

//     recipes.forEach((recipe) => {
//         let constructed_recipe = {
//             type: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             altar_type: recipe.altar_type,
//             duration: recipe.duration,
//             starlight: recipe.starlight,
//             pattern: recipe.pattern,
//             key: recipe.key,
//             output: [recipe.output.toResultJson()],
//             effects: recipe.effects
//         }

//         if (recipe.relay_inputs) {
//             constructed_recipe.relay_inputs = recipe.relay_inputs
//         }
//         if (recipe.focus_constellation) {
//             constructed_recipe.focus_constellation = recipe.focus_constellation
//         }
//         if (recipe.recipe_class) {
//             constructed_recipe.recipe_class = recipe.recipe_class
//         }

//         event.custom(constructed_recipe).id(recipe.id)
//     })
// })
