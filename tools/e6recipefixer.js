const getString = (input) => {
    if (input == null) return
    if (typeof input === "number") return input
    if (input.item) return input
    if (input.fluid) return input
    if (input.ingredient) return input
    if (Array.isArray(input)) {
        return `[${input.map(getString).join(", ")}]`
    }
    if (typeof input === "string") return `'${input}'`
    if (typeof input === "object") {
        return `{ ${Object.entries(input).map(([key, value]) => `${key}: ${getString(value)}`).join(", ")} }`
    }
}

function shouldRemove(recipe) { return (recipe.id.includes('kubejs:') ? '' : 'e.remove({ id: "' + recipe.id + '" })\n') }

const Item = {
    of: (input, additional) => {
        let inp = input
        let data = `Item.of('${input}'${additional ? `, ${getString(additional)}` : ""})`
        return {
            item: true,
            toString: () => data,
            id: () => input,
            weakNBT: () => {
                data += ".weakNBT()"
                return { toString: () => data, item: true }
            },
            enchant: (enchant, level) => {
                data += `.enchant('${enchant}', ${level})`
                return { toString: () => data, item: true }
            }
        }
    }
}
const Fluid = {
    of: (input, additional) => {
        let data = `Fluid.of('${input}'${additional ? `, ${getString(additional)}` : ""})`
        return {
            fluid: true,
            toString: () => data,
        }
    }
}
const Ingredient = {
    of: (input, additional) => {
        let data = `Ingredient.of('${input}'${additional ? `, ${getString(additional)}` : ""})`
        return {
            ingredient: true,
            toString: () => data,
        }
    }
}

const industrialforegoing = {
    laser_lens: {
        white: 'industrialforegoing:laser_lens0',
        orange: 'industrialforegoing:laser_lens1',
        magenta: 'industrialforegoing:laser_lens2',
        light_blue: 'industrialforegoing:laser_lens3',
        yellow: 'industrialforegoing:laser_lens4',
        lime: 'industrialforegoing:laser_lens5',
        pink: 'industrialforegoing:laser_lens6',
        gray: 'industrialforegoing:laser_lens7',
        light_gray: 'industrialforegoing:laser_lens8',
        cyan: 'industrialforegoing:laser_lens9',
        purple: 'industrialforegoing:laser_lens10',
        blue: 'industrialforegoing:laser_lens11',
        brown: 'industrialforegoing:laser_lens12',
        green: 'industrialforegoing:laser_lens13',
        red: 'industrialforegoing:laser_lens14',
        black: 'industrialforegoing:laser_lens15'
    }
}
const powahTiers = ['starter', 'basic', 'hardened', 'blazing', 'niotic', 'spirited', 'nitro'];

const recipes = []

/* recipes.forEach((recipe) => {
    console.log(`    ${recipe.id.includes('kubejs:') ? '' : 'e.remove({ id: "' + recipe.id + '" })\n    '}e.recipes.pneumaticcraft.pressure_chamber(
        [
            ${recipe.results.map(getString).join(",\n            ")}
        ],
        [
            ${recipe.inputs.map(getString).join(",\n            ")}
        ], ${recipe.pressure}
    ).id('${recipe.id.replace(/.*:/g, "kubejs:pneumaticcraft/pressure_chamber/")}')\n`)
}) */

/* // natures aura tree ritual
recipes.forEach((recipe) => {
    console.log(`    ${recipe.id.includes('kubejs:') ? '' : 'e.remove({ id: "' + recipe.id + '" })\n    '}e.recipes.naturesaura.tree_ritual(
    ${getString(recipe.output)}, [
        ${recipe.ingredients.map(getString).join(", ")}
    ]).time(${recipe.time}).sapling('${recipe.sapling}')
        .id('${recipe.id.replace(/.*:/g, "kubejs:naturesaura/tree_ritual/")}')\n`)
}) */

/* // general thermal recipes
let thermalMachineToPort = "chiller"
recipes.forEach((recipe) => {
    console.log(`    ${recipe.id.includes('kubejs:') ? '' : '\n    e.remove({ id: "' + recipe.id + '" })'}
    e.recipes.thermal.${thermalMachineToPort}(${recipe.output},
        [${recipe.inputs.map(getString).join(", ")}])
        .energy(${recipe.energy})
        .id('${recipe.id.replace(/.*:/g, "kubejs:")}')`)
}) */

/* // bloodmagic altar
recipes.forEach((recipe) => {
    console.log(`${recipe.id.includes('kubejs:') ? '' : 'e.remove({ id: "' + recipe.id + '" })\n'}e.recipes.bloodmagic.altar(${getString(recipe.output)}, ${getString(recipe.input)})
    .upgradeLevel(${recipe.altarLevel})
    .altarSyphon(${recipe.syphon})
    .consumptionRate(${recipe.consumptionRate})
    .drainRate(${recipe.drainRate})
    .id('${recipe.id.replace(/.*:/g, "kubejs:")}')\n`)
}) */

/* // bloodmagic alchemytable
recipes.forEach((recipe) => {
    console.log(`${recipe.id.includes('kubejs:') ? '' : 'e.remove({ id: "' + recipe.id + '" })\n'}e.recipes.bloodmagic.alchemytable(Item.of(${getString(recipe.output)}, ${recipe.count}),
    [${recipe.inputs.map(getString).join(", ")}])
    .syphon(${recipe.syphon})
    .ticks(${recipe.ticks})
    .upgradeLevel(${recipe.orbLevel})
    .id('${recipe.id.replace(/.*:/g, "kubejs:")}')\n`)
}) */


/* // industrial foregoing dissolution chamber 
recipes.forEach((recipe) => {
    let ingredients = []
    recipe.inputs.forEach((input) => {
        ingredients.push(`Ingredient.of('${input}')`)
    })
    console.log(`    ${recipe.id.includes('kubejs:') ? '' : 'e.remove({ id: "' + recipe.id + '" })\n    '}e.custom({
        type: 'industrialforegoing:dissolution_chamber',
        input: [
            ${ingredients.join(",\n            ")}
        ],
        inputFluid: \`{ FluidName: '${recipe.inputFluid}', Amount: ${recipe.inputFluidAmount} }\`,
        output: { item: '${recipe.outputItem.item}', count: ${recipe.outputItem.count} }, ${recipe.outputFluid ? `\n        outputFluid: \`{ FluidName: '${recipe.outputFluid}', Amount: ${recipe.outputFluidAmount} }\`,` : ""}
        processingTime: ${recipe.processingTime},
    }).id('${recipe.id.replace(/.*:/g, "kubejs:dissolution/")}')\n`)
}) */

/* // shapeless
recipes.forEach(recipe => {
    recipe.id = recipe.id ? recipe.id :
        typeof (recipe.output) == 'object' ?
            recipe.output.id() : recipe.output

    recipe.id = recipe.id.replace(/.*:/g, "kubejs:shapeless/")
    console.log(`${recipe.id.includes('kubejs:') ? '' : 'e.remove({ id: "' + recipe.id + '" })\n'}e.shapeless(${getString(recipe.output)},
    [${recipe.inputs.map(getString).join(", ")}]
).id('${recipe.id}')\n`)
}) */

/* // botania runic altar
recipes.forEach((recipe) => {
    console.log(`e.recipes.botania.runic_altar(${getString(`${(recipe.count) > 1 ? `${recipe.count}x ` : ""}` + recipe.output)},
    [${recipe.inputs.map(getString).join(", ")}],
    ${recipe.mana}
).id('${recipe.id}')\n`)
}) */

/* // ars enchanting apparatus
recipes.forEach((recipe) => {
    console.log(`e.recipes.ars_nouveau.enchanting_apparatus(
    [${recipe.inputs.map(getString).join(", ")}],
    ${getString(recipe.reagent)},
    ${getString(recipe.output)}${recipe.sourceCost ? `, ${recipe.sourceCost}` : ""
        }
).id('${recipe.id}')\n`)
}) */

/* // botania petal apothecary
recipes.forEach((recipe) => {
    console.log(`e.recipes.botania.petal_apothecary(
    ${getString(recipe.output)},
    [${recipe.inputs.map(getString).join(", ")}],
).id('${recipe.id}')\n`)
}) */

/* // shaped
recipes.forEach(recipe => {
    let finalOut = getString(recipe.output)
    let finalPattern = recipe.pattern.map(getString).join(",\n\t")
    let finalKey = Object.entries(recipe.key).map(([key, value]) => `${key}: ${getString(value)}`).join(",\n\t")
    let finalId = `'kubejs:${recipe.id.replace(/:/g, "_")}')`
    console.log(`e.remove({ id: '${recipe.id}' })
e.shaped(${finalOut}, [
    ${finalPattern}
], {
    ${finalKey}
}).id(${finalId}\n`
    )
}) */

/* // bloodmagic arc
recipes.forEach((recipe) => {
    console.log(`${recipe.id.includes('kubejs:') ? '' : 'e.remove({ id: "' + recipe.id + '" })\n'}e.recipes.bloodmagic.arc(${getString(recipe.output)}, ${getString(recipe.input)}, ${getString(recipe.tool)})
    .consumeIngredient(${recipe.consume})${recipe.extraOutputs ? `\n	.addedoutput(${getString(recipe.extraOutputs)})` : ""}
    .id('${recipe.id.replace(/.*:/g, "kubejs:")}')\n`)
}) */

/* // mechanical crafting
recipes.forEach(recipe => {
    let finalOut = getString(recipe.output)
    let finalPattern = recipe.pattern.map(getString).join(",\n\t")
    let finalKey = Object.entries(recipe.key).map(([key, value]) => `${key}: ${getString(value)}`).join(",\n\t")
    let finalId = recipe.id
    console.log(`${recipe.id.includes('kubejs:') ? '' : 'e.remove({ id: "' + recipe.id + '" })'}
e.recipes.create.mechanical_crafting(${finalOut}, [
    ${finalPattern}
], {
    ${finalKey}
}).id(${finalId}`)
}) */

/* // sequenced assembly
recipes.forEach(recipe => {
    let sequence = []

    recipe.sequence.forEach((step) => {
        if (step.type == 'deploying') {
            sequence.push(`e.recipes.create.deploying(${getString(step.output)}, ${getString(step.input)})`)
        } else if (step.type == 'cutting') {
            sequence.push(
                `e.recipes.create.cutting(${getString(step.output)}, ${getString(step.input)}).processingTime(${step.processingTime})`
            )
        } else if (step.type == 'filling') {
            sequence.push(`e.recipes.create.filling(${getString(step.output)}, ${getString(step.input)})`)
        } else if (step.type == 'pressing') {
            sequence.push(`e.recipes.create.pressing(${getString(step.output)}, ${getString(step.input)})`)
        }
    })
    console.log(`${shouldRemove(recipe)}e.recipes.create.sequenced_assembly([${recipe.outputs.map(getString).join(", ")}], ${getString(recipe.input)}, [
        ${sequence.join(",\n\t	")}
    ], ${getString(recipe.transitionalItem)}, ${recipe.loops})
        .id('${recipe.id.replace(/.*:/g, "kubejs:")}')
    `)
}) */