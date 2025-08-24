// ServerEvents.recipes(event => {


//     const id_prefix = 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/'
//     const recipes = [
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 16 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', consumeInstantly: true, data: { amount: 500 * 60 } }
//             ],
//             ticks: 60,
//             id: `${id_prefix}botanical_mastery_shard`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: 'masterfulmachinery:items', data: { item: /*'astralsorcery:'*/ 'kubejs:replaceme', count: 1 } },
//                 { type: 'masterfulmachinery:items', data: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme', count: 1 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'astralsorcery:'*/ 'kubejs:replaceme', count: 1 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'astralsorcery:'*/ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: 'masterfulmachinery:items', data: { tag: /*'astralsorcery:'*/ 'kubejs:replaceme', count: 1 } },

//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { fluid: /*'astralsorcery:'*/ 'kubejs:replaceme', amount: 1024 }
//                 },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', consumeInstantly: true, data: { amount: 500 * 60 } }
//             ],
//             ticks: 60,
//             id: `${id_prefix}astronomy_mastery_shard`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 5 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 5 } },

//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', consumeInstantly: true, data: { amount: 500 * 60 } }
//             ],
//             ticks: 60,
//             id: `${id_prefix}alchemy_mastery_shard`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 5 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 48 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 20 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 16 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 16 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 36 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 10 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 10 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1024 }
//                 },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', consumeInstantly: true, data: { amount: 500 * 60 } }
//             ],
//             ticks: 60,
//             id: `${id_prefix}ritual_mastery_shard`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 64 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 32 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', consumeInstantly: true, data: { amount: 500 * 60 } }
//             ],
//             ticks: 60,
//             id: `${id_prefix}aura_mastery_shard`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } }
//             ],
//             inputs: [
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { item: 'pneumaticcraft:advanced_pressure_tube', count: 64 }
//                 },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { item: 'pneumaticcraft:advanced_liquid_compressor', count: 1 }
//                 },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 64 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 32 } },

//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { fluid: 'pneumaticcraft:lubricant', amount: 1024 }
//                 },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', consumeInstantly: true, data: { amount: 500 * 60 } }
//             ],
//             ticks: 60,
//             id: `${id_prefix}engineering_mastery_shard`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 50 } }
//             ],
//             inputs: [
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { item: 'mekanismgenerators:fusion_reactor_controller', count: 1 }
//                 },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { item: 'mekanismgenerators:fusion_reactor_frame', count: 36 }
//                 },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { item: 'mekanismgenerators:fusion_reactor_port', count: 5 }
//                 },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 24 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { item: 'mekanismgenerators:electromagnetic_coil', count: 5 }
//                 },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 224 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { item: 'mekanismgenerators:saturating_condenser', count: 293 }
//                 },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 598 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 417 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 10 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 20 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 585 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 64 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 50 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { fluid: 'mekanismgenerators:tritium', amount: 25600 }
//                 },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { fluid: 'mekanismgenerators:deuterium', amount: 25600 }
//                 },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', consumeInstantly: true, data: { amount: 500 * 1500 } }
//             ],
//             ticks: 1500,
//             id: `${id_prefix}energistics_mastery_shard`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }
//             ],
//             inputs: [
//                 { type: 'masterfulmachinery:items', data: { item: /*'extrastorage:'*/ 'kubejs:replaceme', count: 2 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { item: /*'extrastorage:'*/ 'kubejs:replaceme', count: 2 }
//                 },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'rsinfinitybooster:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'refinedstorage:'*/ 'kubejs:replaceme', count: 4 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'refinedstorage:'*/ 'kubejs:replaceme', count: 4 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'refinedstorage:'*/ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 5 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },

//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', consumeInstantly: true, data: { amount: 500 * 60 } }
//             ],
//             ticks: 60,
//             id: `${id_prefix}dimensional_mastery_shard`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 5 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },

//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', consumeInstantly: true, data: { amount: 500 * 60 } }
//             ],
//             ticks: 60,
//             id: `${id_prefix}battle_mastery_shard`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', consumeInstantly: true, data: { amount: 500 * 60 } }
//             ],
//             ticks: 60,
//             id: `${id_prefix}excavation_mastery_shard`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', consumeInstantly: true, data: { amount: 500 * 60 } }
//             ],
//             ticks: 60,
//             id: `${id_prefix}culinary_mastery_shard`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }
//             ],
//             inputs: [
//                 { type: 'masterfulmachinery:items', data: { item: /*'refinedstorage:'*/ 'kubejs:replaceme', count: 1 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'extrastorage:'*/ 'kubejs:replaceme', count: 4 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'refinedstorage:'*/ 'kubejs:replaceme', count: 4 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'refinedstorage:'*/ 'kubejs:replaceme', count: 1 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'refinedstorage:'*/ 'kubejs:replaceme', count: 64 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'refinedstorage:'*/ 'kubejs:replaceme', count: 64 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', consumeInstantly: true, data: { amount: 500 * 60 } }
//             ],
//             ticks: 60,
//             id: `${id_prefix}automation_mastery_shard`
//         }
//     ]

//     recipes.forEach((recipe) => {
//         recipe.type = /* 'masterfulmachinery:' */ 'kubejs:replaceme'
//         recipe.structureId = 'enigmatic_tree_of_life_structure'
//         recipe.controllerId = 'enigmatic_tree_of_life'
//         event.custom(recipe).id(recipe.id)
//     })
// })
