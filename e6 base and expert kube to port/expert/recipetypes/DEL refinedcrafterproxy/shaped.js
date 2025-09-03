// ServerEvents.recipes(event => {

//     const id_prefix = 'enigmatica:expert/refinedcrafterproxy/shaped/'

//     const recipes = [
//         {
//             output: Item.of('refinedcrafterproxy:crafter_proxy'),
//             pattern: ['CTC', 'LXR', 'CBC'],
//             key: {
//                 C: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 X: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 L: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 R: 'rftoolscontrol:network_card',
//                 T: /*'extrastorage:'*/ 'kubejs:replaceme',
//                 B: /*'refinedstorage:'*/ 'kubejs:replaceme'
//             },
//             id: `refinedcrafterproxy:crafter_proxy`
//         },
//         {
//             output: 'refinedcrafterproxy:crafter_proxy_card',
//             pattern: ['ABA', 'ACA', 'ADA'],
//             key: {
//                 A: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 B: 'pneumaticcraft:printed_circuit_board',
//                 C: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 D: /*'refinedstorage:'*/ 'kubejs:replaceme'
//             },
//             id: `refinedcrafterproxy:crafter_proxy_card`
//         }
//     ]

//     for (let tier of ['iron', 'gold', 'diamond', 'netherite']) {
//         recipes.push({
//             output: Item.of('refinedcrafterproxy:crafter_proxy', { Tier: `extrastorage_${tier}` }),
//             pattern: ['CTC', 'LXR', 'CBC'],
//             key: {
//                 C: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 X: `extrastorage:${tier}_crafter`,
//                 L: /*'refinedstorage:'*/ 'kubejs:replaceme',
//                 R: 'rftoolscontrol:network_card',
//                 T: /*'extrastorage:'*/ 'kubejs:replaceme',
//                 B: /*'refinedstorage:'*/ 'kubejs:replaceme'
//             },
//             id: `${id_prefix}${tier}_crafter_proxy`
//         })
//     }

//     recipes.forEach((recipe) => {
//         event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
//     })
// })
