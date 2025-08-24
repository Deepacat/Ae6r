ServerEvents.recipes(event => {
    const id_prefix = 'enigmatica:expert/mekanism/reaction'
    const recipes = [
        {
            itemInput: { amount: 2, ingredient: { tag: 'forge:fuels/bio' } },
            fluidInput: { amount: 10, fluid: 'minecraft:water' },
            gasInput: { amount: 100, gas: 'mekanism:hydrogen' },
            energyRequired: 100,
            duration: 2000,
            itemOutput: { item: 'mekanism:substrate' },
            gasOutput: { gas: 'mekanism:ethene', amount: 100 },
            id: 'mekanism:reaction/substrate/water_hydrogen'
        },
        {
            itemInput: { ingredient: { tag: 'forge:ingots/manyullyn', count: 2 } },
            fluidInput: { amount: 144, fluid: /* 'materialis:' */ 'kubejs:replaceme' },
            gasInput: { amount: 1000, gas: 'mekanism:plutonium' },
            energyRequired: 1000,
            duration: 300,
            itemOutput: { item: 'mekanism:alloy_atomic', count: 3 },
            gasOutput: { gas: 'mekanism:spent_nuclear_waste', amount: 1000 },
            id: `${id_prefix}alloy_atomic`
        }
    ]

    recipes.forEach((recipe) => {
        // console.log(`Adding recipe: ${recipe.id}, output: ${recipe.itemOutput}, index: ${recipes.indexOf(recipe)}`)
        let constructed_recipe = {
            type: 'mekanism:reaction',
            itemInput: recipe.itemInput,
            fluidInput: recipe.fluidInput,
            gasInput: recipe.gasInput,
            duration: recipe.duration,
            itemOutput: recipe.itemOutput,
            gasOutput: recipe.gasOutput
        }
        if (recipe.energyRequired) {
            constructed_recipe.energyRequired = recipe.energyRequired
        }
        event.custom(constructed_recipe).id(recipe.id)
    })
})
