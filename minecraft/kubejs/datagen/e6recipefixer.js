const getString = (input) => {
	if (input == null) return
	if (typeof input === "number") return input
	if (input.item) return input
	if (Array.isArray(input)) {
		return `[${input.map(getString).join(", ")}]`
	}
	if (typeof input === "string") return `'${input}'`
	if (typeof input === "object") {
		return `{ ${Object.entries(input).map(([key, value]) => `${key}: ${getString(value)}`).join(", ")} }`
	}
}

const Item = {
	of: (input, additional) => {
		let data = `Item.of('${input}'${additional ? `, ${getString(additional)}` : ""})`
		return {
			item: true,
			toString: () => data,
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

/* // shapeless 
recipes.forEach((recipe) => {
	console.log(`${recipe.id.includes('kubejs:') ? '' : 'e.remove({ id: "' + recipe.id + '" })\n'}e.shapeless(${getString(recipe.output)},
	[${recipe.inputs.map(getString).join(", ")}]
).id('${recipe.id.replace(/.*:/g, "kubejs:shapeless/")}')\n`)
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

/* recipes.forEach((recipe) => {
	// console.log(`Adding recipe: ${recipe.id}, output: ${recipe.output}`)
	// class ArcBloodmagic extends Internal.RecipeJS {
	//             output(output: OutputItem_): this
	//             input(input: InputItem_): this
	//             tool(tool: InputItem_): this
	//             inputFluid(inputFluid: {fluid: string, amount: number}[]): this
	//             addedoutput(addedoutput: {chance: number, mainchance?: number, type: OutputItem_}[]): this
	//             consumeingredient(consumeingredient: boolean): this
	//             inputsize(inputsize: number): this
	//             outputFluid(outputFluid: {fluid: string, amount: number}[]): this
	// }
	const re = event.recipes.bloodmagic
		.arc(recipe.output, recipe.input, recipe.tool)
		.consumeIngredient(recipe.consume)
		.id(recipe.id)

	if (recipe.extraOutputs) {
		re.addedoutput(recipe.extraOutputs)
	}

	if (recipe.outputFluid) {
		re.outputFluid(recipe.outputFluid)
	}
}) */

/* // bloodmagic arc 
recipes.forEach((recipe) => {
	console.log(`${recipe.id.includes('kubejs:') ? '' : 'e.remove({ id: "' + recipe.id + '" })\n'}e.recipes.bloodmagic.arc(${getString(recipe.output)}, ${getString(recipe.input)}, ${getString(recipe.tool)})
	.consumeIngredient(${recipe.consume})${recipe.extraOutputs ? `\n	.addedoutput(${getString(recipe.extraOutputs)})` : ""}
	.id('${recipe.id.replace(/.*:/g, "kubejs:")}')\n`)
}) */