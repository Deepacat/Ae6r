// ServerEvents.recipes(event => {

//     const id_prefix = 'enigmatica:expert/masterful_machinery/industrial_deuterium_plant/'
//     const recipes = [
//         {
//             outputs: [
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { fluid: 'mekanismgenerators:deuterium', amount: 640 }
//                 }
//             ],
//             inputs: [
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { amount: 10000 }
//                 },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { fluid: 'emendatus:molten_sulfur', amount: 10 }
//                 },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: {
//                         air: 100
//                     }
//                 },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: {
//                         speed: 256
//                     }
//                 }
//             ],
//             ticks: 4000,
//             id: `${id_prefix}deuterium`
//         }
//     ]

//     recipes.forEach((recipe) => {
//         recipe.type = /* 'masterfulmachinery:' */ 'kubejs:replaceme'
//         recipe.structureId = 'industrial_deuterium_plant_structure'
//         recipe.controllerId = 'industrial_deuterium_plant'
//         event.custom(recipe).id(recipe.id)
//     })
// })
