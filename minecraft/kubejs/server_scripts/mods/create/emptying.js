ServerEvents.recipes(e => {
    e.recipes.create.emptying([Fluid.of('thermal:syrup', 250), 'minecraft:glass_bottle'], 'thermal:syrup_bottle')
        .id('kubejs:emptying/syrup_bottle')
})