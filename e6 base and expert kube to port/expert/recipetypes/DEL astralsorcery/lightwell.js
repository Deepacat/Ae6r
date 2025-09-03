// ServerEvents.recipes(event => {

//     const id_prefix = 'enigmatica:expert/astralsorcery/lightwell/'

//     // shatterMultiplier: higher means slower breaking
//     // productionMultiplier: higher means more product per cycle

//     const recipes = [
//         {
//             input: { item: 'bloodmagic:slate_ampoule' },
//             output: 'bloodmagic:life_essence_fluid',
//             productionMultiplier: 100.0,
//             shatterMultiplier: 0.1,
//             color: 16056324,
//             id: `${id_prefix}life_essence`
//         },
//         {
//             input: { item: /*'astralsorcery:'*/ 'kubejs:replaceme' },
//             output: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             productionMultiplier: 50.0,
//             shatterMultiplier: 100.0,
//             color: -16734209,
//             id: /*'astralsorcery:'*/ 'kubejs:replaceme'
//         }
//     ]

//     recipes.forEach((recipe) => {
//         recipe.type = /*'astralsorcery:'*/ 'kubejs:replaceme'
//         event.custom(recipe).id(recipe.id)
//     })
// })
