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
		inputs: [
			'#forge:dusts/mana',
			'#forge:ingots/manasteel',
			'thermal:blizz_powder',
			'#upgrade_aquatic:coralstone/infused',
			'minecraft:kelp',
			'aquaculture:diamond_hook'
		],
		mana: 16000,
		output: 'botania:rune_water',
		count: 2,
		id: 'botania:runic_altar/water'
	},
	{
		inputs: [
			'#forge:dusts/mana',
			'#forge:ingots/manasteel',
			'minecraft:blaze_powder',
			'quark:magma_bricks',
			'undergarden:ditchbulb',
			'quark:white_candle'
		],
		mana: 16000,
		output: 'botania:rune_fire',
		count: 2,
		id: 'botania:runic_altar/fire'
	},
	{
		inputs: [
			'#forge:dusts/mana',
			'#forge:ingots/manasteel',
			'thermal:basalz_powder',
			'undergarden:shiverstone',
			'#quark:runes',
			'aquaculture:worm'
		],
		mana: 16000,
		output: 'botania:rune_earth',
		count: 2,
		id: 'botania:runic_altar/earth'
	},
	{
		inputs: [
			'#forge:dusts/mana',
			'#forge:ingots/manasteel',
			'thermal:blitz_powder',
                /*'betterendforge:'*/ 'kubejs:replaceme',
			'quark:bottled_cloud',
			'alexsmobs:guster_eye'
		],
		mana: 16000,
		output: 'botania:rune_air',
		count: 2,
		id: 'botania:runic_altar/air'
	},
	{
		inputs: [
			'#forge:ingots/manasteel',
			'#forge:ingots/manasteel',
			'naturesaura:sky_ingot',
			'#forge:ingots/manasteel',
			'#forge:ingots/manasteel',
			'botania:mana_pearl',
                /*'atum:'*/ 'kubejs:replaceme'
		],
		mana: 96000,
		output: 'botania:rune_mana',
		count: 1,
		id: 'botania:runic_altar/mana'
	},
	{
		inputs: [
			'#botania:runes/water',
			'#botania:runes/fire',
			'naturesaura:birth_spirit',
			'thermal:syrup_bottle',
			[
                    /*'byg:'*/ 'kubejs:replaceme',
                    /*'byg:'*/ 'kubejs:replaceme',
                    /*'byg:'*/ 'kubejs:replaceme',
                    /*'byg:'*/ 'kubejs:replaceme',
                    /*'byg:'*/ 'kubejs:replaceme',
				'minecraft:pink_tulip',
				'minecraft:white_tulip',
				'minecraft:orange_tulip',
				'minecraft:red_tulip'
			],
			[
                    /*'byg:'*/ 'kubejs:replaceme',
                    /*'byg:'*/ 'kubejs:replaceme',
                    /*'byg:'*/ 'kubejs:replaceme',
                    /*'byg:'*/ 'kubejs:replaceme',
                    /*'byg:'*/ 'kubejs:replaceme',
				'minecraft:pink_tulip',
				'minecraft:white_tulip',
				'minecraft:orange_tulip',
				'minecraft:red_tulip'
			],
			'quark:turf',
			'quark:turf',
                /*'atum:'*/ 'kubejs:replaceme'
		],
		mana: 32000,
		output: 'botania:rune_spring',
		count: 1,
		id: 'botania:runic_altar/spring'
	},
	{
		inputs: [
			'#botania:runes/earth',
			'#botania:runes/air',
			'#forge:sand',
			'#forge:sand',
			'farmersdelight:melon_popsicle',
			'farmersdelight:melon_popsicle',
			'#forge:pies',
			'#forge:pies',
                /*'atum:'*/ 'kubejs:replaceme'
		],
		mana: 32000,
		output: 'botania:rune_summer',
		count: 1,
		id: 'botania:runic_altar/summer'
	},
	{
		inputs: [
			'#botania:runes/fire',
			'#botania:runes/air',
			'minecraft:carved_pumpkin',
			'minecraft:carved_pumpkin',
			'create:honeyed_apple',
			'create:honeyed_apple',
			'farmersdelight:hot_cocoa',
			'farmersdelight:hot_cocoa',
                /*'atum:'*/ 'kubejs:replaceme'
		],
		mana: 32000,
		output: 'botania:rune_autumn',
		count: 1,
		id: 'botania:runic_altar/autumn'
	},
	{
		inputs: [
			'#botania:runes/water',
			'#botania:runes/earth',
			'farmersdelight:shepherds_pie_block',
			'#upgrade_aquatic:bedrolls',
			'#forge:hay_bales',
			'#forge:hay_bales',
                /*'betterendforge:'*/ 'kubejs:replaceme',
                /*'betterendforge:'*/ 'kubejs:replaceme',
                /*'atum:'*/ 'kubejs:replaceme'
		],
		mana: 32000,
		output: 'botania:rune_winter',
		count: 1,
		id: 'botania:runic_altar/winter'
	},
	{
		inputs: [
			'bloodmagic:weakbloodshard',
                /*'astralsorcery:'*/ 'kubejs:replaceme',
			'#botania:runes/winter',
			'#botania:runes/water',
                /*'astralsorcery:'*/ 'kubejs:replaceme'
		],
		mana: 64000,
		output: 'botania:rune_envy',
		count: 1,
		id: 'botania:runic_altar/envy'
	},
	{
		inputs: [
			'bloodmagic:weakbloodshard',
                /*'astralsorcery:'*/ 'kubejs:replaceme',
			'#botania:runes/winter',
			'#botania:runes/fire',
                /*'astralsorcery:'*/ 'kubejs:replaceme'
		],
		mana: 64000,
		output: 'botania:rune_gluttony',
		count: 1,
		id: 'botania:runic_altar/gluttony'
	},
	{
		inputs: [
			'bloodmagic:weakbloodshard',
                /*'astralsorcery:'*/ 'kubejs:replaceme',
			'#botania:runes/spring',
			'#botania:runes/water',
                /*'astralsorcery:'*/ 'kubejs:replaceme'
		],
		mana: 64000,
		output: 'botania:rune_greed',
		count: 1,
		id: 'botania:runic_altar/greed'
	},
	{
		inputs: [
			'bloodmagic:weakbloodshard',
                /*'astralsorcery:'*/ 'kubejs:replaceme',
			'#botania:runes/summer',
			'#botania:runes/air',
                /*'astralsorcery:'*/ 'kubejs:replaceme'
		],
		mana: 64000,
		output: 'botania:rune_lust',
		count: 1,
		id: 'botania:runic_altar/lust'
	},
	{
		inputs: [
			'bloodmagic:weakbloodshard',
                /*'astralsorcery:'*/ 'kubejs:replaceme',
			'#botania:runes/summer',
			'#botania:runes/fire',
                /*'astralsorcery:'*/ 'kubejs:replaceme'
		],
		mana: 64000,
		output: 'botania:rune_pride',
		count: 1,
		id: 'botania:runic_altar/pride'
	},
	{
		inputs: [
			'bloodmagic:weakbloodshard',
                /*'astralsorcery:'*/ 'kubejs:replaceme',
			'#botania:runes/autumn',
			'#botania:runes/air',
                /*'astralsorcery:'*/ 'kubejs:replaceme'
		],
		mana: 64000,
		output: 'botania:rune_sloth',
		count: 1,
		id: 'botania:runic_altar/sloth'
	},
	{
		inputs: [
			'bloodmagic:weakbloodshard',
                /*'astralsorcery:'*/ 'kubejs:replaceme',
			'#botania:runes/winter',
			'#botania:runes/earth',
                /*'astralsorcery:'*/ 'kubejs:replaceme'
		],
		mana: 64000,
		output: 'botania:rune_wrath',
		count: 1,
		id: 'botania:runic_altar/wrath'
	},
	{
		inputs: [
			'#forge:ingots/alfsteel',
			'#botania:runes/air',
			'#botania:runes/summer',
			'#botania:runes/lust',
			'naturesaura:gold_leaf'
		],
		mana: 96000,
		output: 'mythicbotany:alfheim_rune',
		count: 1,
		id: 'mythicbotany:runic_altar/alfheim'
	},
	{
		inputs: [
			'#forge:ingots/sky',
			'#botania:runes/air',
			'#botania:runes/autumn',
			'#botania:runes/pride',
			'botania:bifrost_perm'
		],
		mana: 96000,
		output: 'mythicbotany:asgard_rune',
		count: 1,
		id: 'mythicbotany:runic_altar/asgard'
	},
	{
		inputs: [
			'#forge:ingots/tainted_gold',
			'#botania:runes/fire',
			'#botania:runes/autumn',
			'#botania:runes/envy',
			['eidolon:zombie_heart', 'eidolon:wraith_heart']
		],
		mana: 96000,
		output: 'mythicbotany:helheim_rune',
		count: 1,
		id: 'mythicbotany:runic_altar/helheim'
	},
	{
		inputs: [
			'#forge:ingots/netherite',
			'#botania:runes/earth',
			'#botania:runes/autumn',
			'#botania:runes/gluttony',
			'naturesaura:infused_stone'
		],
		mana: 96000,
		output: 'mythicbotany:joetunheim_rune',
		count: 1,
		id: 'mythicbotany:runic_altar/joetunheim'
	},
	{
		inputs: [
			'#forge:ingots/terrasteel',
			'#botania:runes/earth',
			'#botania:runes/spring',
			'#botania:runes/greed',
			'minecraft:podzol'
		],
		mana: 96000,
		output: 'mythicbotany:midgard_rune',
		count: 1,
		id: 'mythicbotany:runic_altar/midgard'
	},
	{
		inputs: [
			'#forge:ingots/refined_glowstone',
			'#botania:runes/fire',
			'#botania:runes/summer',
			'#botania:runes/wrath',
			'create:refined_radiance_casing'
		],
		mana: 96000,
		output: 'mythicbotany:muspelheim_rune',
		count: 1,
		id: 'mythicbotany:runic_altar/muspelheim'
	},
	{
		inputs: [
			'#forge:ingots/arcane_gold',
			'#botania:runes/earth',
			'#botania:runes/winter',
			'#botania:runes/sloth',
			'eidolon:shadow_gem'
		],
		mana: 96000,
		output: 'mythicbotany:nidavellir_rune',
		count: 1,
		id: 'mythicbotany:runic_altar/nidavellir'
	},
	{
		inputs: [
			'#forge:ingots/refined_obsidian',
			'#botania:runes/water',
			'#botania:runes/winter',
			'#botania:runes/wrath',
			'create:shadow_steel_casing'
		],
		mana: 96000,
		output: 'mythicbotany:niflheim_rune',
		count: 1,
		id: 'mythicbotany:runic_altar/niflheim'
	},
	{
		inputs: [
			'#forge:ingots/iesnium',
			'#botania:runes/earth',
			'#botania:runes/spring',
			'#botania:runes/pride',
			'bloodmagic:seersigil'
		],
		mana: 96000,
		output: 'mythicbotany:vanaheim_rune',
		count: 1,
		id: 'mythicbotany:runic_altar/vanaheim'
	},
	{
		inputs: [
			'bloodmagic:blankrune',
			'quark:white_rune',
			'bloodmagic:blankslate',
			'ars_nouveau:glyph_accelerate',
			'bloodmagic:blankslate',
			'kubejs:cutting_essence',
			'quark:white_rune',
			'bloodmagic:blankslate',
			'ars_nouveau:glyph_accelerate',
			'bloodmagic:blankslate'
		],
		mana: 16000,
		output: 'bloodmagic:speedrune',
		count: 1,
		id: `kubejs:blood_rune_speed`
	},
	{
		inputs: [
			'bloodmagic:blankrune',
			['quark:green_rune', 'quark:lime_rune'],
			'architects_palette:moonstone',
			'ars_nouveau:glyph_delay',
			'bloodmagic:reinforcedslate',
			'kubejs:cutting_essence',
			['quark:green_rune', 'quark:lime_rune'],
			'architects_palette:moonstone',
			'ars_nouveau:glyph_delay',
			'bloodmagic:reinforcedslate'
		],
		mana: 32000,
		output: 'bloodmagic:chargingrune',
		count: 1,
		id: `kubejs:blood_rune_charging`
	},
	{
		inputs: [
			'bloodmagic:blankrune',
			'quark:red_rune',
			'bloodmagic:reinforcedslate',
			'ars_nouveau:glyph_touch',
			'bloodmagic:reinforcedslate',
			'kubejs:cutting_essence',
			'quark:red_rune',
			'bloodmagic:reinforcedslate',
			'ars_nouveau:glyph_harm',
			'bloodmagic:reinforcedslate'
		],
		mana: 32000,
		output: 'bloodmagic:sacrificerune',
		count: 1,
		id: `kubejs:blood_rune_sacrifice`
	},
	{
		inputs: [
			'bloodmagic:blankrune',
			'quark:yellow_rune',
			'bloodmagic:reinforcedslate',
			'ars_nouveau:glyph_self',
			'bloodmagic:reinforcedslate',
			'kubejs:cutting_essence',
			'quark:yellow_rune',
			'bloodmagic:reinforcedslate',
			'ars_nouveau:glyph_harm',
			'bloodmagic:reinforcedslate'
		],
		mana: 32000,
		output: 'bloodmagic:selfsacrificerune',
		count: 1,
		id: `kubejs:blood_rune_self_sacrifice`
	},
	{
		inputs: [
			'bloodmagic:blankrune',
			'quark:blue_rune',
			'bloodmagic:reinforcedslate',
			'ars_nouveau:glyph_extract',
			'bloodmagic:reinforcedslate',
			'kubejs:cutting_essence',
			'quark:blue_rune',
			'bloodmagic:reinforcedslate',
			'ars_nouveau:glyph_accelerate',
			'bloodmagic:reinforcedslate'
		],
		mana: 32000,
		output: 'bloodmagic:dislocationrune',
		count: 1,
		id: `kubejs:blood_rune_displacement`
	},
	{
		inputs: [
			'bloodmagic:blankrune',
			'quark:orange_rune',
			'bloodmagic:reinforcedslate',
			'bloodmagic:reagentholding',
			'bloodmagic:reinforcedslate',
			'kubejs:cutting_essence',
			'quark:orange_rune',
			'bloodmagic:reinforcedslate',
			'bloodmagic:reagentholding',
			'bloodmagic:reinforcedslate'
		],
		mana: 64000,
		output: 'bloodmagic:altarcapacityrune',
		count: 1,
		id: `kubejs:blood_rune_capacity`
	},
	{
		inputs: [
			'bloodmagic:altarcapacityrune',
			'quark:red_rune',
			'architects_palette:moonstone',
			'ars_nouveau:glyph_amplify',
			'bloodmagic:demonslate',
			'bloodmagic:masterbloodorb',
			'quark:red_rune',
			'architects_palette:moonstone',
			'ars_nouveau:glyph_amplify',
			'bloodmagic:demonslate'
		],
		mana: 96000,
		output: 'bloodmagic:bettercapacityrune',
		count: 1,
		id: `kubejs:blood_rune_aug_capacity`
	},
	{
		inputs: [
			'bloodmagic:blankrune',
			'quark:cyan_rune',
			'architects_palette:moonstone',
			'bloodmagic:masterbloodorb',
			'bloodmagic:demonslate',
			'bloodmagic:masterbloodorb',
			'quark:cyan_rune',
			'architects_palette:moonstone',
			'bloodmagic:masterbloodorb',
			'bloodmagic:demonslate'
		],
		mana: 96000,
		output: 'bloodmagic:orbcapacityrune',
		count: 1,
		id: `kubejs:blood_rune_orb`
	},
	{
		inputs: [
			'bloodmagic:speedrune',
			'quark:light_blue_rune',
			'architects_palette:moonstone',
			'ars_nouveau:glyph_amplify',
			'bloodmagic:demonslate',
			'bloodmagic:masterbloodorb',
			'quark:light_blue_rune',
			'architects_palette:moonstone',
			'ars_nouveau:glyph_amplify',
			'bloodmagic:demonslate'
		],
		mana: 96000,
		output: 'bloodmagic:accelerationrune',
		count: 1,
		id: `kubejs:blood_rune_acceleration`
	},
	{
		inputs: [
			'quark:white_crystal',
			'quark:white_crystal',
			'quark:white_crystal',
			'quark:white_crystal',
			'quark:white_crystal',
			'quark:white_crystal',
			'quark:white_crystal',
			'quark:white_crystal'
		],
		mana: 4000,
		output: 'quark:white_rune',
		count: 2,
		id: `quark:tools/crafting/runes/white_rune_from_crystal`
	},
	{
		inputs: [
			'quark:orange_crystal',
			'quark:orange_crystal',
			'quark:orange_crystal',
			'quark:orange_crystal',
			'quark:orange_crystal',
			'quark:orange_crystal',
			'quark:orange_crystal',
			'quark:orange_crystal'
		],
		mana: 4000,
		output: 'quark:orange_rune',
		count: 2,
		id: `quark:tools/crafting/runes/orange_rune_from_crystal`
	},
	{
		inputs: [
			'quark:violet_crystal',
			'quark:violet_crystal',
			'quark:violet_crystal',
			'quark:violet_crystal',
			'quark:violet_crystal',
			'quark:violet_crystal',
			'quark:violet_crystal',
			'quark:violet_crystal'
		],
		mana: 4000,
		output: 'quark:magenta_rune',
		count: 2,
		id: `quark:tools/crafting/runes/magenta_rune_from_crystal`
	},
	{
		inputs: [
			'quark:blue_crystal',
			'quark:blue_crystal',
			'quark:blue_crystal',
			'quark:blue_crystal',
			'quark:blue_crystal',
			'quark:blue_crystal',
			'quark:blue_crystal',
			'quark:blue_crystal'
		],
		mana: 4000,
		output: 'quark:light_blue_rune',
		count: 2,
		id: `quark:tools/crafting/runes/light_blue_rune_from_crystal`
	},
	{
		inputs: [
			'quark:yellow_crystal',
			'quark:yellow_crystal',
			'quark:yellow_crystal',
			'quark:yellow_crystal',
			'quark:yellow_crystal',
			'quark:yellow_crystal',
			'quark:yellow_crystal',
			'quark:yellow_crystal'
		],
		mana: 4000,
		output: 'quark:yellow_rune',
		count: 2,
		id: `quark:tools/crafting/runes/yellow_rune_from_crystal`
	},
	{
		inputs: [
			'quark:green_crystal',
			'quark:green_crystal',
			'quark:green_crystal',
			'quark:green_crystal',
			'quark:green_crystal',
			'quark:green_crystal',
			'quark:green_crystal',
			'quark:green_crystal'
		],
		mana: 4000,
		output: 'quark:lime_rune',
		count: 2,
		id: `quark:tools/crafting/runes/lime_rune_from_crystal`
	},
	{
		inputs: [
			'quark:indigo_crystal',
			'quark:indigo_crystal',
			'quark:indigo_crystal',
			'quark:indigo_crystal',
			'quark:indigo_crystal',
			'quark:indigo_crystal',
			'quark:indigo_crystal',
			'quark:indigo_crystal'
		],
		mana: 4000,
		output: 'quark:blue_rune',
		count: 2,
		id: `quark:tools/crafting/runes/blue_rune_from_crystal`
	},
	{
		inputs: [
			'quark:red_crystal',
			'quark:red_crystal',
			'quark:red_crystal',
			'quark:red_crystal',
			'quark:red_crystal',
			'quark:red_crystal',
			'quark:red_crystal',
			'quark:red_crystal'
		],
		mana: 4000,
		output: 'quark:red_rune',
		count: 2,
		id: `quark:tools/crafting/runes/red_rune_from_crystal`
	},
	{
		inputs: [
			'quark:black_crystal',
			'quark:black_crystal',
			'quark:black_crystal',
			'quark:black_crystal',
			'quark:black_crystal',
			'quark:black_crystal',
			'quark:black_crystal',
			'quark:black_crystal'
		],
		mana: 4000,
		output: 'quark:black_rune',
		count: 2,
		id: `quark:tools/crafting/runes/black_rune_from_crystal`
	},
	{
		inputs: [
			'quark:red_rune',
			'quark:orange_rune',
			'quark:yellow_rune',
			'quark:lime_rune',
			'quark:light_blue_rune',
			'quark:blue_rune',
			'quark:magenta_rune',
			'quark:white_rune'
		],
		mana: 4000 * 8,
		output: 'quark:rainbow_rune',
		count: 8,
		id: 'quark:tools/crafting/runes/rainbow_rune2'
	},
	{
		inputs: [
                /*'betterendforge:'*/ 'kubejs:replaceme',
			'#forge:shards/aurora',
			'#forge:shards/aurora',
			'#forge:shards/aurora',
			'#forge:shards/aurora',
			'#botania:runes/mana',
			'#forge:shards/aurora',
			'#forge:shards/aurora',
			'#forge:shards/aurora',
			'#forge:shards/aurora'
		],
		mana: 4000 * 8,
		output: /*'betterendforge:'*/ 'kubejs:replaceme',
		count: 2,
		id: /*'betterendforge:'*/ 'kubejs:replaceme'
	}
]

// runic altar 
recipes.forEach((recipe) => {
	console.log(`e.recipes.botania.runic_altar(${getString(`${(recipe.count) > 1 ? `${recipe.count}x ` : ""}` + recipe.output)},
    [${recipe.inputs.map(getString).join(", ")}],
	${recipe.mana}
).id('${recipe.id}')\n`)
})

// //enchapp
// recipes.forEach((recipe) => {
// 	console.log(`e.recipes.ars_nouveau.enchanting_apparatus(
//     [${recipe.inputs.map(getString).join(", ")}],
//     ${getString(recipe.reagent)},
//     ${getString(recipe.output)}${recipe.sourceCost ? `, ${recipe.sourceCost}` : ""
// 		}
// ).id('${recipe.id}')\n`)
// })

// //petal apothecary
// recipes.forEach((recipe) => {
// 	console.log(`e.recipes.botania.petal_apothecary(
// 	${getString(recipe.output)},
//     [${recipe.inputs.map(getString).join(", ")}],
// ).id('${recipe.id}')\n`)
// })

// // shaped
// recipes.forEach(recipe => {
// 	let finalOut = getString(recipe.output)
// 	let finalPattern = recipe.pattern.map(getString).join(",\n\t")
// 	let finalKey = Object.entries(recipe.key).map(([key, value]) => `${key}: ${getString(value)}`).join(",\n\t")
// 	let finalId = `'kubejs:${recipe.id.replace(/:/g, "_")}')`
// 	console.log(`e.remove({ id: '${recipe.id}' })
// e.shaped(${finalOut}, [
// 	${finalPattern}
// ], {
// 	${finalKey}
// }).id(${finalId}\n`
// 	)
// })
