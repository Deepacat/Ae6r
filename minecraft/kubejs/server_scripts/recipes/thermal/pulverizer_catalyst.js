ServerEvents.recipes(e => {
    e.recipes.thermal.pulverizer_catalyst('#botania:runes/earth')
        .primaryMod(2.5)
        .secondaryMod(5.0)
        .energyMod(0.1)
        .minChance(0.0)
        .useChance(0.05)
        .id('kubejs:thermal/pulverizer_catalyst/earth_rune')
})