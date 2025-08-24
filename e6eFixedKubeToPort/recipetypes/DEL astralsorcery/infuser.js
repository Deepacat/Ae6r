// ServerEvents.recipes(event => {

//     const id_prefix = 'enigmatica:expert/astralsorcery/infuser/'
//     const recipes = [
//         {
//             input: 'occultism:infused_lenses',
//             fluid: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             consumptionChance: 0.5,
//             output: /*'astralsorcery:'*/ 'kubejs:replaceme',
//             count: 2,
//             duration: 100,
//             id: `astralsorcery:infuser/glass_pane`
//         }
//     ]

//     recipes.forEach((recipe) => {
//         event
//             .custom({
//                 type: /*'astralsorcery:'*/ 'kubejs:replaceme',
//                 fluidInput: recipe.fluid,
//                 input: Ingredient.of(recipe.input).toJson(),
//                 output: Item.of(recipe.output, recipe.count).toResultJson(),
//                 consumptionChance: recipe.consumptionChance,
//                 duration: recipe.duration,
//                 consumeMultipleFluids: false,
//                 acceptChaliceInput: true,
//                 copyNBTToOutputs: false
//             })
//             .id(recipe.id)
//     })
// })
