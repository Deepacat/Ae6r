// custom event helpers for recipe types with no kube addon

const farmersDelightTools = {
    "axe": {
        "type": "farmersdelight:tool_action",
        "action": "axe_strip"
    },
    "pickaxe": {
        "type": "farmersdelight:tool_action",
        "action": "pickaxe_dig"
    },
    "knife": {
        "tag": "forge:tools/knives"
    }
}

function embersMelting(e, fluidOutput, itemInput) {
    const recipe = e.custom({
        type: "embers:melting",
        input: makeJsonIngredient(itemInput),
        output: makeFluidJson(fluidOutput)
    })
    return {
        id: function (customId) {
            recipe.id(customId ?? `kubejs:embers/melting/${itemInput.split(':')[1]}`)
        }
    }
}

function embersStamping(e, itemOutput, fluidInput, stamp) {
    const recipe = e.custom({
        type: "embers:stamping",
        fluid: fluidInput,
        output: makeJsonIngredient(itemOutput),
        stamp: makeJsonIngredient(stamp)
    })
    return {
        id: function (customId) {
            recipe.id(customId ?? `kubejs:embers/stamping/${itemOutput.split(':')[1]}`)
        }
    }
}

// lychee exploding recipe helper
function explosionRecipe(e, id, inputs, posts, comment) {
    /* lychee apparently doesn't do itemstacks, only ingredient,
    so I have to add these stupid items several times to replicate it
    it also doesn't like having over 27 inputs */
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

    let recipe = {
        type: "lychee:item_exploding",
        item_in: finalInputs,
        post: posts
    }

    if (comment) { recipe.comment = comment }

    e.custom(recipe).id('kubejs:lychee/exploding/' + id)
}

// lychee lightning recipe helper
function lightningRecipe(e, id, inputs, posts, comment) {
    /* lychee apparently doesn't do itemstacks, only ingredient,
    so I have to add these stupid items several times to replicate it
    it also doesn't like having over 27 inputs */
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
        console.log('lychee lightning recipe ' + id + ' has more than 27 inputs, bad bad')
        return
    }

    let recipe = {
        type: "lychee:lightning_channeling",
        item_in: finalInputs,
        post: posts
    }

    if (comment) { recipe.comment = comment }

    e.custom(recipe).id('kubejs:lychee/lightning/' + id)
}

function insideBlock(e, post, inputs, insideBlock, id) {
    let recipe = {}
    recipe.type = "lychee:item_inside"
    recipe.block_in = insideBlock
    recipe.item_in = inputs
    recipe.post = post
    e.custom(recipe).id(`kubejs:lychee/inside_block/${id}`)
}
