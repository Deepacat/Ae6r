// ServerEvents.recipes(event => {
//     const id_prefix = 'enigmatica:expert/portality/shaped/'
//     const recipes = [
//         {
//             output: Item.of(/*'portality:'*/ 'kubejs:replaceme'),
//             pattern: ['ABA', 'BCB', 'ABA'],
//             key: {
//                 A: '#enigmatica:stonecuttables/arcane_stone',
//                 B: 'immersiveengineering:coil_lv',
//                 C: 'immersiveengineering:electron_tube'
//             },
//             id: /*'portality:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'portality:'*/ 'kubejs:replaceme'),
//             pattern: ['ABA', 'CDC', 'ABA'],
//             key: {
//                 A: /*'portality:'*/ 'kubejs:replaceme',
//                 B: Item.of('thermal:energy_cell'),
//                 C: 'pneumaticcraft:logistics_core',
//                 D: 'xnet:wireless_router'
//             },
//             id: /*'portality:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'portality:'*/ 'kubejs:replaceme'),
//             pattern: ['ABA', 'CDC', 'ABA'],
//             key: {
//                 A: /*'portality:'*/ 'kubejs:replaceme',
//                 B: 'immersiveengineering:sorter',
//                 C: 'pneumaticcraft:logistics_core',
//                 D: 'xnet:wireless_router'
//             },
//             id: /*'portality:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'portality:'*/ 'kubejs:replaceme'),
//             pattern: ['ABA', 'CDC', 'ABA'],
//             key: {
//                 A: /*'portality:'*/ 'kubejs:replaceme',
//                 B: 'immersiveengineering:fluid_sorter',
//                 C: 'pneumaticcraft:logistics_core',
//                 D: 'xnet:wireless_router'
//             },
//             id: /*'portality:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'portality:'*/ 'kubejs:replaceme'),
//             pattern: ['ABA', 'CDC', 'ABA'],
//             key: {
//                 A: /*'portality:'*/ 'kubejs:replaceme',
//                 B: 'occultism:stable_wormhole',
//                 C: 'pneumaticcraft:logistics_core',
//                 D: 'xnet:wireless_router'
//             },
//             id: /*'portality:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/*'portality:'*/ 'kubejs:replaceme'),
//             pattern: ['ABA', 'CDC', 'ABA'],
//             key: {
//                 A: /*'portality:'*/ 'kubejs:replaceme',
//                 B: 'immersiveengineering:coil_hv',
//                 C: 'immersiveengineering:current_transformer',
//                 D: '#industrialforegoing:machine_frame/simple'
//             },
//             id: `${id_prefix}controller_alternate`
//         }
//     ]

//     recipes.forEach((recipe) => {
//         event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
//     })
// })
