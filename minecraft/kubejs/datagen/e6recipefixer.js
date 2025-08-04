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


const recipes = [
	{
		output: Item.of('bloodmagic:woodbrickpath', 4),
		inputs: [
			'eidolon:polished_planks',
			'eidolon:polished_planks',
			'eidolon:polished_planks',
			'eidolon:polished_planks',
			{ type: 'bloodmagic:bloodorb', orb_tier: 2 }
		],
		id: 'bloodmagic:path/path_wood'
	},
	{
		output: Item.of('bloodmagic:largebloodstonebrick', 4),
		inputs: [
			'naturesaura:infused_stone',
			'naturesaura:infused_stone',
			'naturesaura:infused_stone',
			'naturesaura:infused_stone',
			'bloodmagic:weakbloodshard'
		],
		id: 'bloodmagic:largebloodstonebrick'
	}
]

// shapeless 
recipes.forEach((recipe) => {
	console.log(`e.shapeless(${getString(recipe.output)},
    [${recipe.inputs.map(getString).join(", ")}]
).id('${recipe.id.replace(/.*:/g, "kubejs:shapeless/")}')\n`)
})


/* // runic altar 
recipes.forEach((recipe) => {
	console.log(`e.recipes.botania.runic_altar(${getString(`${(recipe.count) > 1 ? `${recipe.count}x ` : ""}` + recipe.output)},
    [${recipe.inputs.map(getString).join(", ")}],
	${recipe.mana}
).id('${recipe.id}')\n`)
}) */

/* //enchapp
recipes.forEach((recipe) => {
	console.log(`e.recipes.ars_nouveau.enchanting_apparatus(
    [${recipe.inputs.map(getString).join(", ")}],
    ${getString(recipe.reagent)},
    ${getString(recipe.output)}${recipe.sourceCost ? `, ${recipe.sourceCost}` : ""
		}
).id('${recipe.id}')\n`)
}) */

/* //petal apothecary
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
