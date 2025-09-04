ServerEvents.recipes(e => {
    e.recipes.thermal.smelter_catalyst('#botania:runes/fire')
        .primary_mod(3.5)
        .secondary_mod(5.0)
        .energy_mod(0.1)
        .min_chance(0.0)
        .use_chance(0.05)
        .id('kubejs:thermal/smelter_catalyst/earth_rune')
})