ServerEvents.recipes(e => {
    e.custom({
        type: "thermal:tree_extractor_boost",
        ingredient: {
            item: "industrialforegoing:fertilizer"
        },
        output: 1.7,
        cycles: 12
    }).id('kubejs:thermal/tree_extractor_boost/if_fertilizer')
})