// ServerEvents.recipes(event => {

//     const id_prefix = 'enigmatica:expert/masterful_machinery/advanced_assembly_table/'
//     const recipes = [
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 32 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', perTick: true, data: { air: 300 * 4 } }
//             ],
//             ticks: 240,
//             id: `${id_prefix}batch_basic_circuit_package`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 32 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', perTick: true, data: { air: 300 * 4 } }
//             ],
//             ticks: 240,
//             id: `${id_prefix}batch_basic_memory_package`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 32 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', perTick: true, data: { air: 300 * 4 } }
//             ],
//             ticks: 240,
//             id: `${id_prefix}batch_cpu_core_500_package`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 32 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', perTick: true, data: { air: 300 * 4 } }
//             ],
//             ticks: 240,
//             id: `${id_prefix}batch_cpu_core_1000_package`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 32 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', perTick: true, data: { air: 300 * 4 } }
//             ],
//             ticks: 240,
//             id: `${id_prefix}batch_cpu_core_2000_package`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 32 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', perTick: true, data: { air: 300 * 4 } }
//             ],
//             ticks: 240,
//             id: `${id_prefix}batch_unassembled_pcb`
//         },
//         {
//             outputs: [
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { item: 'kubejs:batch_unassembled_advanced_pressure_tube', count: 1 }
//                 }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 32 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', perTick: true, data: { air: 300 * 4 } }
//             ],
//             ticks: 240,
//             id: `${id_prefix}batch_unassembled_advanced_pressure_tube`
//         },
//         {
//             outputs: [
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { item: 'kubejs:batch_unassembled_machine_frame', count: 1 }
//                 }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 32 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', perTick: true, data: { air: 300 * 4 } }
//             ],
//             ticks: 240,
//             id: `${id_prefix}batch_unassembled_machine_frame`
//         }
//     ]

//     let storageParts = [
//         {
//             modID: 'refinedstorage',
//             sizes: ['1k', '4k', '16k', '64k', '64k_fluid', '256k_fluid', '1024k_fluid', '4096k_fluid']
//         },
//         {
//             modID: 'extrastorage',
//             sizes: [
//                 '256k',
//                 '1024k',
//                 '4096k',
//                 '16384k',
//                 '16384k_fluid',
//                 '65536k_fluid',
//                 '262144k_fluid',
//                 '1048576k_fluid'
//             ]
//         }
//     ]

//     storageParts.forEach((storagePart) => {
//         storagePart.sizes.forEach((partSize) => {
//             recipes.push({
//                 outputs: [
//                     {
//                         type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                         data: { item: `kubejs:batch_${partSize}_storage_part_package`, count: 1 }
//                     }
//                 ],
//                 inputs: [
//                     {
//                         type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                         data: { item: `kubejs:${partSize}_storage_part_package`, count: 30 }
//                     },
//                     { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', perTick: true, data: { air: 300 * 4 } }
//                 ],
//                 ticks: 240,
//                 id: `${id_prefix}batch_${partSize}_storage_part_assembly`
//             })
//         })
//     })

//     recipes.forEach((recipe) => {
//         recipe.type = /* 'masterfulmachinery:' */ 'kubejs:replaceme'
//         recipe.structureId = 'advanced_assembly_table_structure'
//         recipe.controllerId = 'advanced_assembly_table'
//         event.custom(recipe).id(recipe.id)
//     })
// })
