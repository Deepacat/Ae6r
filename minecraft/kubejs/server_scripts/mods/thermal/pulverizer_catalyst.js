ServerEvents.recipes(e => {
    e.recipes.thermal.pulverizer_catalyst('#botania:runes/earth')
        .primary_mod(2.5)
        .secondary_mod(5.0)
        .energy_mod(0.1)
        .min_chance(0.0)
        .use_chance(0.05)
        .id('kubejs:thermal/pulverizer_catalyst/earth_rune')
})