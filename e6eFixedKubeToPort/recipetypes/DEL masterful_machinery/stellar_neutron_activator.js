// ServerEvents.recipes(event => {

//     const id_prefix = 'enigmatica:expert/masterful_machinery/stellar_neutron_activator/'
//     const recipes = [
//         {
//             outputs: [
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { fluid: 'mekanismgenerators:tritium', amount: 640 }
//                 }
//             ],
//             inputs: [
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     consumeInstantly: true,
//                     data: { amount: 4000000 }
//                 },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { amount: 100000 }
//                 },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { fluid: 'minecraft:water', amount: 64000 }
//                 }
//             ],
//             ticks: 4000,
//             id: `${id_prefix}tritium`
//         }
//     ]

//     recipes.forEach((recipe) => {
//         recipe.type = /* 'masterfulmachinery:' */ 'kubejs:replaceme'
//         recipe.structureId = 'stellar_neutron_activator_structure'
//         recipe.controllerId = 'stellar_neutron_activator'
//         event.custom(recipe).id(recipe.id)
//     })
// })

// /*
// {
//     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//     perTick: true,
//     data: { amount: 8000 }
// },
// {
//     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//     perTick: true,
//     data: { fluid: 'minecraft:water', amount: 64000 }
// },



// {
//     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//     data: { gas: 'mekanismgenerators:tritium', amount: 64000 }
// }

// */
