// ServerEvents.recipes(event => {


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
//             output: Item.of(/*'prettypipes:'*/ 'kubejs:replaceme', 8),
//             pattern: ['CCC', 'ABA', 'CCC'],
//             key: {
//                 A: '#forge:plates/tin',
//                 B: '#forge:glass/colorless',
//                 C: 'create:shaft'
//             },
//             id: /*'prettypipes:'*/ 'kubejs:replaceme'
//         },
//         {
//             output: Item.of(/* 'ppfluids:' */ 'kubejs:replaceme', 8),
//             pattern: ['CCC', 'ABA', 'CCC'],
//             key: {
//                 A: 'thermal:cured_rubber',
//                 B: '#forge:glass/colorless',
//                 C: 'create:shaft'
//             },
//             id: /* 'ppfluids:' */ 'kubejs:replaceme'
//         }
//     ]

//     recipes.forEach((recipe) => {
//         if (recipe.id) {
//             event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id)
//         } else {
//             event.shaped(recipe.output, recipe.pattern, recipe.key)
//         }
//     })
// })
