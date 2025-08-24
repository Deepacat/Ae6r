// ServerEvents.recipes(event => {

//     const id_prefix = 'enigmatica:expert/masterful_machinery/wicked_altar/'
//     const recipes = [
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 3 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'betterendforge:'*/ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'atum:'*/ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
//                 }
//             ],
//             ticks: 100,
//             id: `${id_prefix}reaper_scythe`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 3 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'betterendforge:'*/ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'atum:'*/ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
//                 }
//             ],
//             ticks: 100,
//             id: `${id_prefix}cleaving_axe`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
//                 }
//             ],
//             ticks: 100,
//             id: `${id_prefix}prestigious_palm`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'atum:'*/ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 4000 }
//                 }
//             ],
//             ticks: 400,
//             id: `${id_prefix}lesser_soul_gem`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 3 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'betterendforge:'*/ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 5000 }
//                 }
//             ],
//             ticks: 500,
//             id: `${id_prefix}reversal_pick`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     perTick: true,
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 5000 }
//                 }
//             ],
//             ticks: 500,
//             id: 'alexsmobs:dimensional_carver'
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { item: 'glassential:glass_dark_ethereal_reverse', count: 1 }
//                 },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 10000 }
//                 }
//             ],
//             ticks: 1000,
//             id: `${id_prefix}glass_hand`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 10000 }
//                 }
//             ],
//             ticks: 1000,
//             id: `${id_prefix}void_amulet`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
//                 }
//             ],
//             ticks: 100,
//             id: `${id_prefix}componentframeparts`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'atum:'*/ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
//                 }
//             ],
//             ticks: 100,
//             id: `${id_prefix}itemrouterfilterexact`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'atum:'*/ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
//                 }
//             ],
//             ticks: 100,
//             id: `${id_prefix}itemrouterfilteroredict`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'atum:'*/ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
//                 }
//             ],
//             ticks: 100,
//             id: `${id_prefix}itemrouterfilterenchant`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { item: /*'atum:'*/ 'kubejs:replaceme', count: 1 }
//                 },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
//                 }
//             ],
//             ticks: 100,
//             id: `${id_prefix}itemrouterfiltermoditems`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: 'masterfulmachinery:items', data: { item: /*'atum:'*/ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
//                 }
//             ],
//             ticks: 100,
//             id: `${id_prefix}itemrouterfiltercomposite`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 50000 }
//                 }
//             ],
//             ticks: 1000,
//             id: `${id_prefix}noderouter`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
//                 }
//             ],
//             ticks: 50,
//             id: `${id_prefix}itemroutingnode`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
//                 }
//             ],
//             ticks: 50,
//             id: `${id_prefix}inputroutingnode`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 500 }
//                 }
//             ],
//             ticks: 50,
//             id: `${id_prefix}outputroutingnode`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 8 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 80 }
//                 }
//             ],
//             ticks: 10,
//             id: `${id_prefix}ender_calx`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
//                 }
//             ],
//             ticks: 10,
//             id: `${id_prefix}golden_apple`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
//                 }
//             ],
//             ticks: 10,
//             id: `${id_prefix}golden_carrot`
//         },
//         {
//             outputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } }
//             ],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 150 }
//                 }
//             ],
//             ticks: 10,
//             id: `${id_prefix}glistering_melon_slice`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 3 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 6 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 2000 }
//                 }
//             ],
//             ticks: 50,
//             id: `${id_prefix}mastercore`
//         },
//         {
//             outputs: [{ type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 2 } }],
//             inputs: [
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 { type: 'masterfulmachinery:items', data: { tag: /*'atum:'*/ 'kubejs:replaceme', count: 1 } },
//                 { type: /* 'masterfulmachinery:' */ 'kubejs:replaceme', count: 4 } },
//                 {
//                     type: /* 'masterfulmachinery:' */ 'kubejs:replaceme',
//                     data: { fluid: 'bloodmagic:life_essence_fluid', amount: 1000 }
//                 }
//             ],
//             ticks: 50,
//             id: `${id_prefix}syntheticpoint`
//         }
//     ]

//     recipes.forEach((recipe) => {
//         recipe.type = /* 'masterfulmachinery:' */ 'kubejs:replaceme'
//         recipe.structureId = 'wicked_altar_structure'
//         recipe.controllerId = 'wicked_altar'
//         event.custom(recipe).id(recipe.id)
//     })
// })
