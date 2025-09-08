ServerEvents.recipes(e => {
    e.remove({ id: 'embers:mixing/molten_dawnstone' })
    e.custom({
        type: "embers:mixing",
        inputs: [
            {
                amount: 2,
                tag: "forge:molten_copper"
            },
            {
                amount: 2,
                tag: "forge:molten_gold"
            },
            {
                amount: 3,
                fluid: "starbunclemania:source_fluid"
            }
        ],
        output: {
            amount: 4,
            tag: "forge:molten_dawnstone"
        }
    }).id('kubejs:embers/mixing/dawnstone')
})