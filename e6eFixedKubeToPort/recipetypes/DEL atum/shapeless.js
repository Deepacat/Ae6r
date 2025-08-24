// ServerEvents.recipes(event => {

//     const id_prefix = 'enigmatica:expert/atum/shapeless/'

//     const recipes = [
//         {
//             output: /* 'atum:' */ 'kubejs:replaceme',
//             inputs: [
//                 /*'atum:'*/ 'kubejs:replaceme',
//                 /*'atum:'*/ 'kubejs:replaceme',
//                 /*'atum:'*/ 'kubejs:replaceme',
//                 Item.of('minecraft:potion', '{Potion:"minecraft:strong_healing"}')
//             ],
//             id: `${id_prefix}linen_bandage_medium`
//         },
//         {
//             output: /* 'atum:' */ 'kubejs:replaceme',
//             inputs: [
//                 /*'atum:'*/ 'kubejs:replaceme',
//                 /*'atum:'*/ 'kubejs:replaceme',
//                 /*'atum:'*/ 'kubejs:replaceme',
//                 /*'atum:'*/ 'kubejs:replaceme',
//                 Item.of('botania:brew_vial', '{brewKey:"botania:healing"}'),
//                 /*'atum:'*/ 'kubejs:replaceme',
//                 /*'atum:'*/ 'kubejs:replaceme',
//                 /*'atum:'*/ 'kubejs:replaceme',
//                 /*'atum:'*/ 'kubejs:replaceme'
//             ],
//             id: `${id_prefix}linen_bandage_heavy`
//         }
//     ]

//     recipes.forEach((recipe) => {
//         event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
//     })
// })
