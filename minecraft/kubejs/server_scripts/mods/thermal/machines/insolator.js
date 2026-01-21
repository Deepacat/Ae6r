ServerEvents.recipes(e => {
    e.recipes.thermal.insolator([Item.of('architects_palette:sunmetal_blend')
        .withChance(1.0)], '#forge:dusts/silver')
        .water(1000)
        .energy(10000)
        .id('kubejs:thermal/machines/insolator/sunmetal_blend')
})