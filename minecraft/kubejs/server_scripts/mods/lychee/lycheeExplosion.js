ServerEvents.recipes(e => {
    function exploding(inputs, posts, id) {
        // lychee apparently doesn't do itemstacks, only ingredient, so I have to add these stupid items several times to replicate it
        // it also doesn't like having over 27 inputs
        let finalInputs = []
        for (let input of inputs) {
            if (input.count > 0) {
                for (let i = 0; i < input.count; i++) {
                    finalInputs.push(input)
                }
                continue
            }
            finalInputs.push(input)
        }
        
        if (finalInputs.length > 27) {
            console.log('lychee exploding recipe ' + id + ' has more than 27 inputs, bad bad')
            return
        }

        e.custom({
            type: "lychee:item_exploding",
            item_in: finalInputs,
            post: posts
        }).id('kubejs:lychee/exploding/' + id)
    }
    /*"contextual": {
        "type": "chance",
        "chance": 0.5
    }*/

    // dont add more than 27 input items
    exploding([{ tag: 'forge:andesite', count: 1 }, { tag: 'forge:ingots/iron', count: 1 }],
        [{ type: "drop_item", item: "create:andesite_alloy" }], 'andesite_alloy_from_iron')
    exploding([{ tag: 'forge:andesite', count: 1 }, { tag: 'forge:ingots/zinc', count: 1 }],
        [{ type: "drop_item", item: "create:andesite_alloy", count: 2 }], 'andesite_alloy_from_zinc')
    exploding([{ tag: 'forge:ingots/steel', count: 2 }, { tag: 'forge:tar', count: 2 }, { tag: 'forge:obsidian', count: 2 }],
        [{ type: "drop_item", item: "kubejs:superheated_steel_ingot", count: 4 }], 'superheated_steel_ingot')
})