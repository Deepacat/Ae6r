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

// embers melter helper
function embersMelting(e, output, input) {
    output = Fluid.of(output)
    input = input.includes('/') ? { tag: input } : { item: input }
    e.custom({
        type: "embers:melting",
        input: input,
        output: {
            amount: output.amount,
            fluid: output.id
        }
    }).id(`${prefix}embers/melting/${input.tag ? input.tag.split(':')[1] : input.item.split(':')[1]}`)
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

// // in world fire crafting recipe builder
// // [[Inputs], [Outputs]]
// ServerEvents.recipes(e => fireRecipes.map(recipeArr =>
//     e.custom({
//         type: "lychee:item_inside",
//         block_in: "fire",
//         item_in: recipeArr[0].map(input => ({ item: input })),
//         post: recipeArr[1].map(output => ({ type: "drop_item", item: output }))
//     })
// ))

// ServerEvents.tags('item', e => fireRecipes.map(recipeArr => e.add('lychee:fire_immune', recipeArr[0])))

// let fireRecipes = [
//     [['kubejs:ceramic_ball_casting_mold', 'gtceu:glass_dust'], ['gtceu:glass_tube']],
//     [['minecraft:clay_ball'], ['kubejs:ceramic_ball']],
//     [['kubejs:clay_ball_casting_mold'], ['kubejs:ceramic_ball_casting_mold']],
//     [['iron_ingot'], ['gtceu:wrought_iron_ingot']]
// ]

function insideBlock(e, post, inputs, insideBlock, id) {
    let recipe = {}
    recipe.type = "lychee:item_inside"
    recipe.block_in = insideBlock
    recipe.item_in = inputs
    recipe.post = post
    e.custom(recipe).id(`kubejs:lychee/inside_block/${id}`)
}
