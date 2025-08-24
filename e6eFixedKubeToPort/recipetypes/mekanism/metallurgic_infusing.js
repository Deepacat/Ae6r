ServerEvents.recipes(event => {

    const id_prefix = 'enigmatica:expert/mekanism/metallurgic_infusing/'
    const recipes = [
        {
            output: 'mekanism:alloy_infused',
            input: '#forge:ingots/energized_steel',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 10,
            id: 'mekanism:metallurgic_infusing/alloy/infused'
        },
        {
            output: /*'refinedstorage:'*/ 'kubejs:replaceme',
            input: Item.of(/* 'refinedstorage:' */ 'kubejs:replaceme'),
            infusionInput: 'mekanism:redstone',
            infusionAmount: 80,
            id: /*'refinedstorage:'*/ 'kubejs:replaceme'
        },
        {
            output: 'mekanismgenerators:reactor_glass',
            input: 'mekanism:structural_glass',
            infusionInput: 'mekanism:refined_obsidian',
            infusionAmount: 320,
            id: 'mekanismgenerators:reactor/glass'
        },
        {
            output: 'immersiveengineering:rockcutter',
            input: 'immersiveengineering:sawblade',
            infusionInput: 'mekanism:diamond',
            infusionAmount: 80,
            id: 'immersiveengineering:crafting/rockcutter'
        },
        {
            output: 'mekanism:ingot_refined_obsidian',
            input: '#forge:ingots/osmium',
            infusionInput: 'mekanism:refined_obsidian',
            infusionAmount: 160,
            id: 'mekanism:processing/refined_obsidian/ingot/from_dust'
        }
    ]

    recipes.forEach((recipe) => {
        // console.log(`Adding recipe: ${recipe.id}, output: ${recipe.output}, index: ${recipes.indexOf(recipe)}`)
        event.recipes.mekanism.
            metallurgic_infusing(recipe.output, recipe.input, {infuse_type: recipe.infusionInput, amount: recipe.infusionAmount})
            .id(recipe.id)
    })
})
