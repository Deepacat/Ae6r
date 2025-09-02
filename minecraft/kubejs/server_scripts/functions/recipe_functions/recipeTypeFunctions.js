///@ts-check
//priority: 1000
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

/**
 * @param {{ custom: (arg0: { type: string; input: any; output: any; }) => any; }} e
 * @param {Fluid | Internal.FluidStackJS} fluidOutput
 * @param {string} itemInput
 */
function embersMelting(e, fluidOutput, itemInput) {
    const recipe = e.custom({
        type: "embers:melting",
        input: makeJsonIngredient(itemInput),
        // @ts-ignore
        output: makeFluidStackJson(fluidOutput)
    })
    return {
        id: function (customId) {
            recipe.id(customId ?? `kubejs:embers/melting/${itemInput.split(':')[1]}`)
        }
    }
}

/**
 * @param {{ custom: (arg0: { type: string; output: any; }) => any; }} event
 * @param {string} outputItem
 * @param {any[]} inputs
 * @param {string} stampItem
 */
function embersStamping(event, outputItem, inputs, stampItem) {
    const recipeObj = {
        type: "embers:stamping",
        output: makeJsonIngredient(outputItem),
    }

    if (stampItem) { recipeObj.stamp = makeJsonIngredient(stampItem) }
    if (!Array.isArray(inputs)) { inputs = [inputs] }

    for (let input of inputs) {
        if (input.fluid) { // fluid stack
            recipeObj.fluid = makeFluidStackJson(input)
        } else if (input.class || typeof input === "string" && input.startsWith('#')) { // tagstack (ingredient)
            recipeObj.input = makeJsonIngredient(input)
        } else if (input.item) { // item stack
            recipeObj.input = makeJsonIngredient(input)
        } else if (input.tag && input.amount) { // embers fluid tag input json
            recipeObj.fluid = input
        } else if (makeJsonIngredient(input).item) {
            recipeObj.input = makeJsonIngredient(input)
        }
    }

    const recipe = event.custom(recipeObj)

    return {
        id: function (customId) {
            recipe.id(customId ?? `kubejs:embers/stamping/${outputItem.split(':')[1]}`)
        },
    }
}

// custom chiller recipe builder because the kube one has issues with fluid tag inputs
/**
 * @param {{ custom: (arg0: { type: string; result: any; }) => any; }} event
 * @param {string} outputItem
 * @param {any[]} inputs
 */
function thermalChiller(event, outputItem, inputs) {
    const recipeObj = {
        type: "thermal:chiller",
        result: makeJsonIngredient(outputItem),
    }

    if (!Array.isArray(inputs)) { inputs = [inputs] }

    recipeObj.ingredients = []
    for (let input of inputs) {
        if (input.fluid) {// fluid stack
            recipeObj.ingredients.push(makeFluidStackJson(input))
        } else if (input.class || typeof input === "string" && input.startsWith('#')) { // tagstack (ingredient)
            recipeObj.ingredients.push(makeJsonIngredient(input))
        } else if (input.item) { // item stack
            recipeObj.ingredients.push(makeJsonIngredient(input))
        } else if (input.fluid_tag && input.amount) { // thermal fluid tag input json
            recipeObj.ingredients.push(input)
        }
    }
    const recipe = event.custom(recipeObj)

    return {
        id: function (customId) {
            recipe.id(customId ?? `kubejs:thermal/chiller/${outputItem.split(':')[1]}`)
        },
    }
}

// lychee exploding recipe helper
/**
 * @param {Internal.RecipesEventJS} event
 * @param {string} id
 * @param {({ tag: string; count: number; } | { tag: string; count?: undefined; })[] | ({ item: string; count?: undefined; } | { item: string; count: number; })[] | ({ item: string; count: number; tag?: undefined; } | { tag: string; count: number; item?: undefined; })[]} inputs
 * @param {{ type: string; item: string; }[] | { type: string; item: string; count: number; }[] | { type: string; item: string; contextual: { type: string; chance: number; }; }[]} posts
 * @param {string} [comment]
 */
function explosionRecipe(event, id, inputs, posts, comment) {
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

    event.custom(recipe).id('kubejs:lychee/exploding/' + id)
}

// lychee lightning recipe helper
/**
 * @param {Internal.RecipesEventJS} event
 * @param {string} id
 * @param {({ item: string; count: number; tag?: undefined; } | { item: string; count?: undefined; tag?: undefined; } | { tag: string; item?: undefined; count?: undefined; })[] | ({ item: string; tag?: undefined; count?: undefined; } | { tag: string; count: number; item?: undefined; } | { item: string; count: number; tag?: undefined; })[] | ({ type: string; item: string; nbt: { stored_type: string; }; } | { item: string; type?: undefined; nbt?: undefined; })[] | ({ item: string; count: number; tag?: undefined; } | { tag: string; count: number; item?: undefined; } | { tag: string; item?: undefined; count?: undefined; })[]} inputs
 * @param {{ type: string; item: string; count: number; }[] | { type: string; item: string; }[]} posts
 * @param {undefined} [comment]
 */
function lightningRecipe(event, id, inputs, posts, comment) {
    /* lychee apparently doesn't do itemstacks, only ingredient,
    so I have to add these stupid items several times to replicate it
    it also doesn't like having over 27 inputs */
    let finalInputs = []
    for (let input of inputs) {
        // @ts-ignore
        if (input.count > 0) {
            // @ts-ignore
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

    event.custom(recipe).id('kubejs:lychee/lightning/' + id)
}

/**
 * @param {Internal.RecipesEventJS} e
 * @param {{ type: string; item: string; count: number; }[]} post
 * @param {any[]} inputs
 * @param {string} insideBlock
 * @param {string} id
 */
function insideBlock(e, post, inputs, insideBlock, id) {
    let recipe = {}
    recipe.type = "lychee:item_inside"
    recipe.block_in = insideBlock
    recipe.item_in = inputs
    recipe.post = post
    e.custom(recipe).id(`kubejs:lychee/inside_block/${id}`)
}

/**
 * 1x item to 1x item crushing for all crushing recipe types
 * @param {{remove: (arg0: {type: string;input: any;output: any;}) => void;shaped: (arg0: any, arg1: string[], arg2: {H: string;I: any;}) => {(): any;new (): any;id: {(arg0: string): void;new (): any;};};recipes: {immersiveengineering: {crusher: (arg0: any, arg1: any, arg2: any[], arg3: number) => {(): any;new (): any;id: {(arg0: string): void;new (): any;};};};mekanism: {crushing: (arg0: any, arg1: any) => {(): any;new (): any;id: {(arg0: string): void;new (): any;};};};thermal: {pulverizer: (arg0: any, arg1: any) => {(): any;new (): any;id: {(arg0: string): void;new (): any;};};};bloodmagic: {arc: (arg0: any, arg1: any, arg2: string) => {(): any;new (): any;id: {(arg0: string): void;new (): any;};};};create: {crushing: (arg0: any, arg1: any) => {(): any;new (): any;id: {(arg0: string): void;new (): any;};};milling: (arg0: any, arg1: any) => {(): any;new (): any;id: {(arg0: string): void;new (): any;};};};occultism: {crushing: (arg0: any, arg1: any) => {(): any;new (): any;id: {(arg0: string): void;new (): any;};};};ars_nouveau: {crush: (arg0: Internal.ItemStack, arg1: OutputItem) => {(): any;new (): any;id: {(arg0: string): void;new (): any;};};};};}} e
 * @param {string} itemToCrush
 * @param {any} outputItem
 * @param {any} id
 * @param {boolean} [remove]
 */
function allCrushing(e, outputItem, itemToCrush, id, remove) {
    if (remove === true) {
        e.remove({ type: 'minecraft:crafting', input: itemToCrush, output: outputItem })
        e.remove({ type: 'immersiveengineering:crusher', input: itemToCrush, output: outputItem })
        e.remove({ type: 'mekanism:crusher', input: itemToCrush, output: outputItem })
        e.remove({ type: 'thermal:pulvizer', input: itemToCrush, output: outputItem })
        e.remove({ type: 'bloodmagic:arc', input: itemToCrush, output: outputItem })
        e.remove({ type: 'create:crushing', input: itemToCrush, output: outputItem })
        e.remove({ type: 'create:milling', input: itemToCrush, output: outputItem })
        e.remove({ type: 'occultism:crushing', input: itemToCrush, output: outputItem })
        e.remove({ type: 'ars_nouveau:crush', input: itemToCrush, output: outputItem })
    }
    e.shaped(outputItem, [
        'H  ',
        'I  '
    ], {
        H: 'immersiveengineering:hammer',
        I: itemToCrush
    }).id(`${id}/shaped/hammer_crushing/${itemToCrush.split(':')[1]}_to_dust`)

    e.recipes.immersiveengineering.crusher(outputItem, itemToCrush, [], 3000)
        .id(`${id}/crusher/immersiveengineering/${itemToCrush.split(':')[1]}_to_dust`)
    e.recipes.mekanism.crushing(outputItem, itemToCrush)
        .id(`${id}/crushing/mekanism/${itemToCrush.split(':')[1]}_to_dust`)
    e.recipes.thermal.pulverizer(outputItem, itemToCrush)
        .id(`${id}/pulverizer/thermal/${itemToCrush.split(':')[1]}_to_dust`)
    e.recipes.bloodmagic.arc(outputItem, itemToCrush, '#bloodmagic:arc/explosive')
        .id(`${id}/arc_crushing/bloodmagic/${itemToCrush.split(':')[1]}_to_dust`)
    e.recipes.create.crushing(outputItem, itemToCrush)
        .id(`${id}/crushing/create/${itemToCrush.split(':')[1]}_to_dust`)
    e.recipes.create.milling(outputItem, itemToCrush)
        .id(`${id}/milling/create/${itemToCrush.split(':')[1]}_to_dust`)
    e.recipes.occultism.crushing(outputItem, itemToCrush)
        .id(`${id}/occultism/crushing/${itemToCrush.split(':')[1]}_to_dust`)
    e.recipes.ars_nouveau.crush(Item.of(itemToCrush), Item.of(outputItem).withChance(1))
        .id(`${id}/crush_glyph/ars_nouveau/${itemToCrush.split(':')[1]}_to_dust`)
}