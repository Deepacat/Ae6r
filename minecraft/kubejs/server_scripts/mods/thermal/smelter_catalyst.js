ServerEvents.recipes(e => {
    e.recipes.thermal.smelter_catalyst('#botania:runes/fire')
        .primaryMod(3.5)
        .secondaryMod(5.0)
        .energyMod(0.1)
        .minChance(0.0)
        .useChance(0.05)
        .id('kubejs:thermal/smelter_catalyst/earth_rune')
})