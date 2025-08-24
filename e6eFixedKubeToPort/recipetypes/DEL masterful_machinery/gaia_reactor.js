// ServerEvents.recipes(event => {

//     const id_prefix = 'enigmatica:expert/masterful_machinery/gaia_reactor/'
//     const recipes = [
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', data: { amount: 9000 * 300 } }
//             ],
//             inputs: [
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { amount: 2000000 }
//                 },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { fluid: 'pneumaticcraft:memory_essence', amount: 16000 }
//                 },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { fluid: /*'astralsorcery:'*/ 'kubejs:replaceme', amount: 1000 }
//                 },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', perTick: true, data: { air: 300 * 4 } }
//             ],
//             ticks: 300,
//             id: `${id_prefix}gaia_spirit`
//         }
//     ]

//     recipes.forEach((recipe) => {
//         recipe.type = /* 'masterfulmachinery:' */ 'kubejs:replaceme'
//         recipe.structureId = 'gaia_reactor_structure'
//         recipe.controllerId = 'gaia_reactor'
//         event.custom(recipe).id(recipe.id)
//     })
// })
