// ServerEvents.recipes(event => {

//     const id_prefix = 'enigmatica:expert/refinedstorage/shaped/'
//     /*
//         ,
//         {
//             output: '',
//             pattern: ['', '', ''],
//             key: {
//                 A: ''
//             },
//             id: ''
//         }
//     */

//     const recipes = [
//         {
//             output: Item.of(/* 'refinedstorage:' */ 'kubejs:replaceme'),
//             pattern: ['ADA', 'BCB', 'ADA'],
//             key: {
//                 A: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 B: 'immersiveengineering:connector_bundled',
//                 C: 'immersiveengineering:wirecoil_redstone',
//                 D: /*'prettypipes:'*/ 'kubejs:replaceme'
//             },
//             id: /*'refinedstorage:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/* 'refinedstorage:' */ 'kubejs:replaceme'),
//             pattern: ['DBD', 'ACA', 'DBD'],
//             key: {
//                 A: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 B: 'immersiveengineering:connector_bundled',
//                 C: 'immersiveengineering:wirecoil_redstone',
//                 D: 'integrateddynamics:cable'
//             },
//             id: `${id_prefix}cable_alt`
//         },
//         {
//             output: /*'refinedstorage:'*/ 'kubejs:replaceme',
//             pattern: [' C ', 'ADB', ' C '],
//             key: {
//                 A: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 B: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 C: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 D: '#xnet:connectors'
//             },
//             id: /*'refinedstorage:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: /*'refinedstorage:'*/ 'kubejs:replaceme',
//             pattern: [' C ', 'ADB', ' C '],
//             key: {
//                 A: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 B: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 C: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 D: '#xnet:connectors'
//             },
//             id: /*'refinedstorage:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: /*'refinedstorage:'*/ 'kubejs:replaceme',
//             pattern: [' C ', 'AEB', ' D '],
//             key: {
//                 A: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 B: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 C: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 D: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 E: '#xnet:connectors'
//             },
//             id: /*'refinedstorage:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: /*'refinedstorage:'*/ 'kubejs:replaceme',
//             pattern: ['ABA', 'CEC', 'ADA'],
//             key: {
//                 A: 'create:mechanical_crafter',
//                 B: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 C: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 D: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 E: /*'refinedstorage:'*/ 'kubejs:replaceme'
//             },
//             id: /*'refinedstorage:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: /*'refinedstorage:'*/ 'kubejs:replaceme',
//             pattern: [' AC', 'ABA', 'BA '],
//             key: {
//                 A: '#forge:wires/aluminum',
//                 B: '#forge:rods/aluminum',
//                 C: /*'refinedstorage:'*/ 'kubejs:replaceme'
//             },
//             id: /*'refinedstorage:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: /*'refinedstorage:'*/ 'kubejs:replaceme',
//             pattern: ['ADA', 'CBC', 'AAA'],
//             key: {
//                 A: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 B: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 C: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 D: /*'refinedstorage:'*/ 'kubejs:replaceme'
//             },
//             id: /*'refinedstorage:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/* 'refinedstorage:' */ 'kubejs:replaceme'),
//             pattern: ['ABA', 'BCB', 'ABA'],
//             key: {
//                 A: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 B: 'pneumaticcraft:glycerol',
//                 C: {
//                     type: 'immersiveengineering:fluid',
//                     tag: 'forge:lubricant',
//                     amount: 1000
//                 }
//             },
//             id: /*'refinedstorage:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: /*'refinedstorage:'*/ 'kubejs:replaceme',
//             pattern: ['ABA', 'ACA', 'ADA'],
//             key: {
//                 A: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 B: 'pneumaticcraft:printed_circuit_board',
//                 C: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 D: /*'refinedstorage:'*/ 'kubejs:replaceme'
//             },
//             id: /*'refinedstorage:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: /*'refinedstorage:'*/ 'kubejs:replaceme',
//             pattern: ['ABA', 'CDE', 'FGF'],
//             key: {
//                 A: '#forge:gears/enderium',
//                 B: 'rftoolsutility:matter_transmitter',
//                 C: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 D: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 E: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 F: '#forge:ingots/aeternium',
//                 G: 'kubejs:cpu_core_as_81221'
//             },
//             id: /*'refinedstorage:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: /*'refinedstorage:'*/ 'kubejs:replaceme',
//             pattern: ['FGF', 'CDE', 'ABA'],
//             key: {
//                 A: '#forge:gears/enderium',
//                 B: 'rftoolsutility:matter_receiver',
//                 C: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 D: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 E: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 F: '#forge:ingots/aeternium',
//                 G: 'kubejs:cpu_core_as_81221'
//             },
//             id: /*'refinedstorage:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: /*'refinedstorage:'*/ 'kubejs:replaceme',
//             pattern: ['ABA', 'CDC', 'ABA'],
//             key: {
//                 A: '#forge:circuits/elite',
//                 B: /*'extrastorage:'*/ 'kubejs:replaceme',
//                 C: 'immersiveengineering:logic_unit',
//                 D: /*'refinedstorage:'*/ 'kubejs:replaceme'
//             },
//             id: `${id_prefix}disk_drive_alternate`
//         }
//     ]

//     recipes.forEach((recipe) => {
//         event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
//     })
// })
