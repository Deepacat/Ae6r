// ServerEvents.recipes(event => {
//     /*
//     Note, max starlight is theoretical. In practice, assume roughly 95% as the max reasonable level

//     Luminous Crafting Table
//     altar_type: 0
//     max_starlight: 1000 
//     */


//     const id_prefix = 'enigmatica:expert/astralsorcery/altar/'
//     const recipes = [
//         /// Luminous Crafting Table Recipes
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme'),
//             pattern: ['_____', '_B_B_', '_CDC_', '_ABA_', '_____'],
//             key: {
//                 A: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 B: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 C: { item: 'create:refined_radiance' },
//                 D: { tag: 'botania:runes/winter' }
//             },
//             altar_type: 0,
//             duration: 100,
//             starlight: 200,
//             effects: [/*'astralsorcery:'*/ 'kubejs:replaceme'],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme'),
//             pattern: ['_____', '_ABA_', '_DCD_', '_____', '_____'],
//             key: {
//                 A: { item: 'eidolon:gold_inlay' },
//                 B: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 C: { item: 'create:refined_radiance' },
//                 D: { tag: 'botania:runes/air' }
//             },
//             altar_type: 0,
//             duration: 100,
//             starlight: 200,
//             effects: [/*'astralsorcery:'*/ 'kubejs:replaceme'],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme', 2),
//             pattern: ['_____', '__A__', '_ABA_', '__A__', '_____'],
//             key: {
//                 A: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 B: { item: 'occultism:infused_lenses' }
//             },
//             altar_type: 0,
//             duration: 100,
//             starlight: 200,
//             effects: [/*'astralsorcery:'*/ 'kubejs:replaceme'],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'astralsorcery:'*/ 'kubejs:replaceme'),
//             pattern: ['_____', '_BAB_', '_CDC_', '_BEB_', '_____'],
//             key: {
//                 A: {
//                     type: /*'astralsorcery:'*/ 'kubejs:replaceme',
//                     hasToBeAttuned: false,
//                     hasToBeCelestial: false,
//                     canBeAttuned: true,
//                     canBeCelestialCrystal: true
//                 },
//                 B: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//                 C: { item: 'create:refined_radiance' },
//                 D: {
//                     type: /*'astralsorcery:'*/ 'kubejs:replaceme',
//                     fluid: [{ fluid: /*'astralsorcery:'*/ 'kubejs:replaceme', amount: 1000 }]
//                 },
//                 E: { tag: 'botania:runes/mana' }
//             },
//             altar_type: 0,
//             duration: 100,
//             starlight: 500,
//             recipe_class: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             effects: [/*'astralsorcery:'*/ 'kubejs:replaceme'],
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of('botania:runic_altar'),
//             pattern: ['_____', '_AAA_', '_ABA_', '_CDC_', '_____'],
//             key: {
//                 A: { item: 'botania:livingrock' },
//                 B: { item: 'minecraft:conduit' },
//                 C: { tag: 'forge:ingots/infused_iron' },
//                 D: {
//                     type: 'forge:nbt',
//                     item: 'naturesaura:aura_cache',
//                     count: 1,
//                     nbt: '{aura:400000}'
//                 }
//             },
//             altar_type: 0,
//             duration: 100,
//             starlight: 500,
//             effects: [/*'astralsorcery:'*/ 'kubejs:replaceme'],
//             id: `${id_prefix}runic_altar`
//         },
//         {
//             output: Item.of('botania:mana_spreader'),
//             pattern: ['_____', '_ABA_', '_CDE_', '_ABA_', '_____'],
//             key: {
//                 A: { item: 'botania:livingwood' },
//                 B: { item: 'botania:glimmering_livingwood' },
//                 C: { tag: 'forge:ingots/infused_iron' },
//                 D: { item: 'botania:spark' },
//                 E: { item: /*'atum:'*/ 'kubejs:replaceme' }
//             },
//             altar_type: 0,
//             duration: 100,
//             starlight: 200,
//             effects: [/*'astralsorcery:'*/ 'kubejs:replaceme'],
//             id: `${id_prefix}mana_spreader`
//         },
//         {
//             output: Item.of('apotheosis:hellshelf', 1),
//             pattern: ['_____', '_ACF_', '_BEB_', '_FCA_', '_____'],
//             key: {
//                 A: { item: 'tconstruct:scorched_bricks' },
//                 B: { tag: 'botania:runes/fire' },
//                 C: { item: /*'resourcefulbees:'*/ 'kubejs:replaceme' },
//                 E: { tag: 'forge:bookshelves' },
//                 F: { item: 'ars_nouveau:blaze_fiber' }
//             },
//             altar_type: 0,
//             duration: 100,
//             starlight: 200,
//             effects: [/*'astralsorcery:'*/ 'kubejs:replaceme'],
//             id: `${id_prefix}hellshelf`
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
