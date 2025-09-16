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
        id: function (/** @type {any} */ customId) {
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
        id: function (/** @type {any} */ customId) {
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
        id: function (/** @type {string} */ customId) {
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
 * @param {string | any[]} outputs
 * @param {any[]} inputs
 * @param {string} [comment]
 */
function lightningRecipe(event, outputs, inputs, comment) {
    /* lychee apparently doesn't do itemstacks, only ingredient,
    so I have to add these stupid items several times to replicate it
    it also doesn't like having over 27 inputs */
    let finalInputs = []
    if (!Array.isArray(inputs)) { inputs = [inputs] }
    for (let input of inputs) {
        input = makeJsonIngredient(input)
        if (!input.count || input.count <= 0) {
            finalInputs.push(input)
            continue
        }

        for (let i = 0; i < input.count; i++) {
            finalInputs.push(input)
        }
    }

    if (finalInputs.length > 27) {
        console.log(`lychee lightning recipe ${makeJsonIngredient(outputs[0]).item} has more than 27 inputs, bad bad`)
        return
    }

    let finalOutputs = makeJsonIngredients(outputs)
    finalOutputs.forEach(output => { output.type = "drop_item" })

    let recipeObj = {
        type: "lychee:lightning_channeling",
        item_in: finalInputs,
        post: finalOutputs
    }

    if (comment) { recipeObj.comment = comment }

    const recipe = event.custom(recipeObj)

    return {
        id: function (/** @type {string} */ customId) {
            // @ts-ignore
            recipe.id(customId ?? `kubejs:lychee/lightning/${finalOutputs[0].item.split(':')[1]}`)
        }
    }
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

const allCrushTypes = [
    'minecraft:crafting',
    'immersiveengineering:crusher',
    'mekanism:crusher',
    'thermal:pulverizer',
    'bloodmagic:arc',
    'create:crushing',
    'create:milling',
    'occultism:crushing',
    'ars_nouveau:crush',
]

// im not even typing this shit just reference server_scripts\mods\kubejs\crushing.js
function allCrushing(event, recipeObj) {
    const r = recipeObj

    const outputs = r.secondaryOutput == undefined ?
        [Item.of(r.output).withChance(1)] :
        [Item.of(r.output).withChance(1), r.secondaryOutput]

    if (r.removeExisting) {
        for (let type of r.types) {
            event.remove({ type: type, output: r.output, input: r.input })
        }
    }

    // @ts-ignore
    if (r.types.includes('minecraft:crafting')) {
        event.shaped(r.output, [
            'H  ',
            'I  '
        ], {
            H: 'immersiveengineering:hammer',
            I: r.input
        }).id(`${r.idPrefix}/allcrushing/shaped_hammer/${r.idSuffix}`)
    }

    if (r.types.includes('immersiveengineering:crusher')) {
        event.recipes.immersiveengineering.crusher(r.output.item ? r.output : Item.of(r.output), r.input, r.secondaryOutput || [], r.energy)
            .id(`${r.idPrefix}/allcrushing/immersiveengineering/crusher/${r.idSuffix}`)
    }

    // is this even a thing???
    // event.recipes.industrialforegoing.crusher(r.input, r.output)
    //     .id(`${r.idPrefix}/allcrushing/industrialforegoing/crusher/${r.idSuffix}`)

    if (r.types.includes('mekanism:crusher')) {
        event.recipes.mekanism.crushing(r.output, r.input)
            .id(`${r.idPrefix}/allcrushing/mekanism/crushing/${r.idSuffix}`)
    }

    if (r.types.includes('thermal:pulverizer')) {
        event.recipes.thermal.pulverizer(outputs, r.input)
            .energy(r.energy)
            .experience(r.xp)
            .id(`${r.idPrefix}/allcrushing/thermal/pulverizer/${r.idSuffix}`)
    }

    if (r.types.includes('bloodmagic:arc')) {
        event.recipes.bloodmagic.arc(r.output, r.input, '#bloodmagic:arc/explosive')
            .id(`${r.idPrefix}/allcrushing/bloodmagic/arc_crushing/${r.idSuffix}`)
    }

    if (r.types.includes('create:crushing')) {
        event.recipes.create.crushing(outputs, r.input)
            .id(`${r.idPrefix}/allcrushing/create/crushing/${r.idSuffix}`)
            .processingTime(r.processTime)
    }

    if (r.types.includes('create:milling')) {
        event.recipes.create.milling(outputs, r.input)
            .id(`${r.idPrefix}/allcrushing/create/milling/${r.idSuffix}`)
            .processingTime(r.processTime)
    }

    if (r.types.includes('occultism:crushing')) {
        event.recipes.occultism.crushing(r.output, r.input, r.processTime, 1, r.ignoreOccultismMult)
            .id(`${r.idPrefix}/allcrushing/occultism/crushing/${r.idSuffix}`)
    }

    if (r.types.includes('ars_nouveau:crush')) {
        event.recipes.ars_nouveau.crush(r.input, outputs)
            .id(`${r.idPrefix}/allcrushing/ars_nouveau/crush_glyph//${r.idSuffix}`)
    }
}

function allAlloying(event, recipeObj) {
    const r = recipeObj

    if (r.item) {
        let i = r.item

        if (r.removeExisting) {
            for (let type of r.types) {
                event.remove({ type: type, output: i.output })
            }
        }

        if (r.types.includes('create:mixing')) {
            let b = event.recipes.create.mixing(i.output, i.inputs, r.processTime)
            if (r.temperature > 1000) {
                b.superheated()
            } else if (r.temperature > 500) {
                b.heated()
            }
            b.id(`${r.idPrefix}/allalloying/create/mixing/${r.idSuffix}`)
        }
        if (r.types.includes('immersiveengineering:alloy') && (i.inputs.length <= 2) && r.temperature < 1000) {
            event.recipes.immersiveengineering.alloy(i.output, i.inputs[0], i.inputs[1], r.processTime)
                .id(`${r.idPrefix}/allalloying/immersiveengineering/alloy/${r.idSuffix}`)
        }
        if (r.types.includes('immersiveengineering:arc_furnace')) {
            event.recipes.immersiveengineering.arc_furnace(
                i.output, i.inputs[0],
                i.inputs.slice(1, i.inputs.length),
                r.processTime,
                r.energy
            ).id(`${r.idPrefix}/allalloying/immersiveengineering/arc_furnace/${r.idSuffix}`)
        }
        if (r.types.includes('thermal:smelter') && r.temperature < 1000) {
            event.recipes.thermal.smelter(i.output, i.inputs)
                .energy(r.energy)
                .id(`${r.idPrefix}/allalloying/thermal/smelter/${r.idSuffix}`)
        }
    }
    if (r.fluid) {
        let f = r.fluid
        if (r.types.includes('tconstruct:alloy')) {
            event.recipes.tconstruct.alloy(f.output, f.inputs, r.temperature)
                .id(`${r.idPrefix}/allalloying/tconstruct/alloy/${r.idSuffix}`)
        }
        if (r.types.includes('embers:mixing') && (r.temperature < 1000)) {
            let output = Fluid.of(f.output.id, Math.round(f.output.amount / 90))
            let inputs = []
            for (let input of f.inputs) {
                if (input.tag) {
                    inputs.push({ tag: input.tag, amount: Math.round(input.amount / 45) })
                } else {
                    inputs.push(Fluid.of(input.id, Math.round(input.amount / 45)))
                }
            }
            event.recipes.embers.mixing(output, inputs)
                .id(`${r.idPrefix}/allalloying/embers/mixing/${r.idSuffix}`)
        }
    }
}