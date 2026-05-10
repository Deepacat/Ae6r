ServerEvents.lowPriorityData(e => {
	for (let material of ticonMaterialData) {
		// Redirect json, honestly don't know what this does but everything has it
		e.addJson(`tconstruct:tinkering/materials/definition/${material.identifier}.json`, {
			redirect: [{ id: `kubejs:${material.identifier}` }]
		})
		// Main material definition
		e.addJson(`kubejs:tinkering/materials/definition/${material.identifier}.json`, material.recipes[0])
		// Material tool stats definition
		e.addJson(`kubejs:tinkering/materials/stats/${material.identifier}.json`, material.recipes[1])
		// Material tool traits definition
		e.addJson(`kubejs:tinkering/materials/traits/${material.identifier}.json`, material.recipes[2])

		// Recipes for entries 3+
		for (let i = 3; i < material.recipes.length; i++) {
			e.addJson(
				`kubejs:recipes/tools/materials/casting/${material.identifier}${i}.json`,
				material.recipes[i]
			)
			// If material has fluid a casting definition, create a melting definition too
			if (material.recipes[i].type == 'tconstruct:material_fluid') {
				e.addJson(`kubejs:recipes/tools/materials/melting/${material.identifier}.json`, {
					type: 'tconstruct:material_melting',
					input: material.recipes[i].output,
					temperature: material.recipes[i].temperature,
					result: material.recipes[i].fluid
				})
			}
		}
	}
})

const ticonMaterialData = [
	//tier 1
	{
		identifier: 'livingrock',
		recipes: [
			{
				craftable: true,
				tier: 1,
				sortOrder: 1,
				textColor: '#f6eed8'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 0.8,
						mining_speed: 1.1,
						attack_speed: 1.0,
						melee_damage: 1.0
					},
					'tconstruct:head': {
						durability: 191,
						mining_speed: 4.5,
						mining_tier: "minecraft:stone",
						melee_attack: 1.5
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:stonebound',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					item: 'botania:livingrock'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:livingrock'
			}
		]
	},
	{
		identifier: 'treated_wood',
		recipes: [
			{
				craftable: true,
				tier: 1,
				sortOrder: 0,
				textColor: '#5c2d19'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 0.9,
						mining_speed: 1.1,
						attack_speed: 1.0,
						melee_damage: 1.0
					},
					'tconstruct:head': {
						durability: 60,
						mining_speed: 2.5,
						mining_tier: "minecraft:wood",
						melee_attack: 1.0
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:cultivated',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:treated_wood'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:treated_wood'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:rods/treated_wood'
				},
				value: 1,
				needed: 2,
				material: 'kubejs:treated_wood'
			}
		]
	},
	//tier 2
	{
		identifier: 'andesite_alloy',
		recipes: [
			{
				craftable: false,
				tier: 2,
				sortOrder: 0,
				textColor: '#a6a6a7'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 1.0,
						mining_speed: 1.05,
						attack_speed: 1.05,
						melee_damage: 0.95
					},
					'tconstruct:head': {
						durability: 200,
						mining_speed: 5.5,
						mining_tier: "minecraft:iron",
						melee_attack: 1.5
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:lightweight',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				input: 'tconstruct:stone',
				fluid: [
					{
						tag: 'forge:molten_iron',
						amount: 10
					},
					{
						tag: 'forge:molten_zinc',
						amount: 10
					}
				],
				temperature: 800,
				output: 'kubejs:andesite_alloy'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:ingots/andesite_alloy'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:andesite_alloy'
			}
		]
	},
	{
		identifier: 'compressed_iron',
		recipes: [
			{
				craftable: false,
				tier: 2,
				sortOrder: 1,
				textColor: '#868686'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 0.95,
						mining_speed: 1.1,
						attack_speed: 1.0,
						melee_damage: 1.0
					},
					'tconstruct:head': {
						durability: 660,
						mining_speed: 5.0,
						mining_tier: "minecraft:iron",
						melee_attack: 2.5
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:blasting',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				fluid: {
					tag: 'forge:molten_compressed_iron',
					amount: 90
				},
				temperature: 900,
				output: 'kubejs:compressed_iron'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:ingots/compressed_iron'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:compressed_iron'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:storage_blocks/compressed_iron'
				},
				value: 9,
				needed: 1,
				material: 'kubejs:compressed_iron',
				leftover: {
					tag: 'forge:ingots/compressed_iron'
				}
			}
		]
	},
	{
		identifier: 'infused_iron',
		recipes: [
			{
				craftable: false,
				tier: 2,
				sortOrder: 1,
				textColor: '#2eb337'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 1.0,
						mining_speed: 1.1,
						attack_speed: 1.0,
						melee_damage: 1.0
					},
					'tconstruct:head': {
						durability: 250,
						mining_speed: 6.0,
						mining_tier: "minecraft:iron",
						melee_attack: 2.0
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:maintained',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				fluid: {
					tag: 'forge:molten_infused_iron',
					amount: 90
				},
				temperature: 850,
				output: 'kubejs:infused_iron'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:ingots/infused_iron'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:infused_iron'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:storage_blocks/infused_iron'
				},
				value: 9,
				needed: 1,
				material: 'kubejs:infused_iron',
				leftover: {
					tag: 'forge:ingots/infused_iron'
				}
			}
		]
	},
	{
		identifier: 'tin',
		recipes: [
			{
				craftable: false,
				tier: 2,
				sortOrder: 1,
				textColor: '#8eadb1'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 0.8,
						mining_speed: 1.05,
						attack_speed: 1.0,
						melee_damage: 1.0
					},
					'tconstruct:head': {
						durability: 150,
						mining_speed: 6.0,
						mining_tier: "minecraft:iron",
						melee_attack: 1.0
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:stonebound',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				fluid: {
					tag: 'forge:molten_tin',
					amount: 90
				},
				temperature: 225,
				output: 'kubejs:tin'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:ingots/tin'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:tin'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:storage_blocks/tin'
				},
				value: 9,
				needed: 1,
				material: 'kubejs:tin',
				leftover: {
					tag: 'forge:ingots/tin'
				}
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:nuggets/tin'
				},
				value: 1,
				needed: 9,
				material: 'kubejs:tin'
			}
		]
	},
	{
		identifier: 'zinc',
		recipes: [
			{
				craftable: false,
				tier: 2,
				sortOrder: 1,
				textColor: '#b8bd89'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 0.8,
						mining_speed: 1.05,
						attack_speed: 1.0,
						melee_damage: 1.0
					},
					'tconstruct:head': {
						durability: 200,
						mining_speed: 6.0,
						mining_tier: "minecraft:iron",
						melee_attack: 1.0
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:stonebound',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				fluid: {
					tag: 'forge:molten_zinc',
					amount: 90
				},
				temperature: 420,
				output: 'kubejs:zinc'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:storage_blocks/zinc'
				},
				value: 9,
				needed: 1,
				material: 'kubejs:zinc',
				leftover: {
					tag: 'forge:ingots/zinc'
				}
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:ingots/zinc'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:zinc'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:nuggets/zinc'
				},
				value: 1,
				needed: 9,
				material: 'kubejs:zinc'
			}
		]
	},
	//tier 3
	{
		identifier: 'blazing',
		recipes: [
			{
				craftable: false,
				tier: 3,
				sortOrder: 2,
				textColor: '#d79811'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 1.0,
						mining_speed: 1.0,
						attack_speed: 0.9,
						melee_damage: 1.2
					},
					'tconstruct:head': {
						durability: 600,
						mining_speed: 5.0,
						mining_tier: "minecraft:diamond",
						melee_attack: 3.5
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:fiery',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				input: 'kubejs:energized_steel',
				fluid: {
					tag: 'forge:molten_blazing',
					amount: 90
				},
				temperature: 950,
				output: 'kubejs:blazing'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					item: 'powah:crystal_blazing'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:blazing'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					item: 'powah:blazing_crystal_block'
				},
				value: 9,
				needed: 1,
				material: 'kubejs:blazing',
				leftover: {
					item: 'powah:crystal_blazing'
				}
			}
		]
	},
	{
		identifier: 'energized_steel',
		recipes: [
			{
				craftable: false,
				tier: 3,
				sortOrder: 0,
				textColor: '#b89365'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 1.0,
						mining_speed: 1.05,
						attack_speed: 1.05,
						melee_damage: 1.0
					},
					'tconstruct:head': {
						durability: 500,
						mining_speed: 7.0,
						mining_tier: "minecraft:diamond",
						melee_attack: 2.5
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:magnetic',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				fluid: {
					tag: 'forge:molten_energized_steel',
					amount: 90
				},
				temperature: 875,
				output: 'kubejs:energized_steel'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:ingots/energized_steel'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:energized_steel'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:storage_blocks/energized_steel'
				},
				value: 9,
				needed: 1,
				material: 'kubejs:energized_steel',
				leftover: {
					tag: 'forge:ingots/energized_steel'
				}
			}
		]
	},
	{
		identifier: 'sky',
		recipes: [
			{
				craftable: false,
				tier: 3,
				sortOrder: 2,
				textColor: '#88d7fc'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 1.0,
						mining_speed: 1.1,
						attack_speed: 1.0,
						melee_damage: 1.0
					},
					'tconstruct:head': {
						durability: 1561,
						mining_speed: 8.0,
						mining_tier: "minecraft:diamond",
						melee_attack: 3.0
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:maintained',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				fluid: {
					tag: 'forge:molten_sky',
					amount: 90
				},
				temperature: 950,
				output: 'kubejs:sky'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:ingots/sky'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:sky'
			}
		]
	},
	//tier 4
	/*{
		identifier: 'aeternium',
		recipes: [
			{
				craftable: false,
				tier: 4,
				sortOrder: 0,
				textColor: '#2e847c'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 0.95,
						mining_speed: 1.1,
						attack_speed: 1.1,
						melee_damage: 1.0
					},
					'tconstruct:head': {
						durability: 2196,
						mining_speed: 10.0,
						mining_tier: "minecraft:netherite",
						melee_attack: 4.5
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:ductile',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				fluid: {
					tag: 'forge:molten_aeternium',
					amount: 90
				},
				temperature: 1250,
				output: 'kubejs:aeternium'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:ingots/aeternium'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:aeternium'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:storage_blocks/aeternium'
				},
				value: 9,
				needed: 1,
				material: 'kubejs:aeternium',
				leftover: {
					tag: 'forge:ingots/aeternium'
				}
			}
		]
	}, */
	{
		identifier: 'enderium',
		recipes: [
			{
				craftable: false,
				tier: 4,
				sortOrder: 2,
				textColor: '#2c8c9c'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 0.9,
						mining_speed: 1.0,
						attack_speed: 1.05,
						melee_damage: 1.2
					},
					'tconstruct:head': {
						durability: 1800,
						mining_speed: 7.0,
						mining_tier: "minecraft:netherite",
						melee_attack: 4.0
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:experienced',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				fluid: {
					tag: 'forge:molten_enderium',
					amount: 90
				},
				temperature: 1450,
				output: 'kubejs:enderium'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:ingots/enderium'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:enderium'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:storage_blocks/enderium'
				},
				value: 9,
				needed: 1,
				material: 'kubejs:enderium',
				leftover: {
					tag: 'forge:ingots/enderium'
				}
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:nuggets/enderium'
				},
				value: 1,
				needed: 9,
				material: 'kubejs:enderium'
			}
		]
	},
	{
		identifier: 'gaia_spirit',
		recipes: [
			{
				craftable: false,
				tier: 4,
				sortOrder: 1,
				textColor: '#94a0bf'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 1.05,
						mining_speed: 1.25,
						attack_speed: 0.95,
						melee_damage: 0.95
					},
					'tconstruct:head': {
						durability: 1950,
						mining_speed: 10.0,
						mining_tier: "minecraft:netherite",
						melee_attack: 3.0
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:maintained',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				input: 'materialis:terrasteel',
				fluid: {
					tag: 'forge:molten_gaia_spirit',
					amount: 90
				},
				temperature: 1350,
				output: 'kubejs:gaia_spirit'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:ingots/gaia_spirit'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:gaia_spirit'
			}
		]
	},
	{
		identifier: 'lumium',
		recipes: [
			{
				craftable: false,
				tier: 4,
				sortOrder: 1,
				textColor: '#fceea8'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 0.95,
						mining_speed: 1.25,
						attack_speed: 1.0,
						melee_damage: 1.0
					},
					'tconstruct:head': {
						durability: 300,
						mining_speed: 11.0,
						mining_tier: "minecraft:diamond",
						melee_attack: 2.0
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:lightspeed',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				fluid: {
					tag: 'forge:molten_lumium',
					amount: 90
				},
				temperature: 1354,
				output: 'kubejs:lumium'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:ingots/lumium'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:lumium'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:storage_blocks/lumium'
				},
				value: 9,
				needed: 1,
				material: 'kubejs:lumium',
				leftover: {
					tag: 'forge:ingots/lumium'
				}
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:nuggets/lumium'
				},
				value: 1,
				needed: 9,
				material: 'kubejs:lumium'
			}
		]
	},
	{
		identifier: 'niotic',
		recipes: [
			{
				craftable: false,
				tier: 4,
				sortOrder: 0,
				textColor: '#54e5ea'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 1.25,
						mining_speed: 0.95,
						attack_speed: 0.95,
						melee_damage: 1.0
					},
					'tconstruct:head': {
						durability: 1600,
						mining_speed: 7.5,
						mining_tier: "minecraft:diamond",
						melee_attack: 3.0
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:sturdy',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				input: 'kubejs:energized_steel',
				fluid: {
					tag: 'forge:molten_niotic',
					amount: 90
				},
				temperature: 1250,
				output: 'kubejs:niotic'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					item: 'powah:crystal_niotic'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:niotic'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					item: 'powah:niotic_crystal_block'
				},
				value: 9,
				needed: 1,
				material: 'kubejs:niotic',
				leftover: {
					item: 'powah:crystal_niotic'
				}
			}
		]
	},
	{
		identifier: 'nitro',
		recipes: [
			{
				craftable: false,
				tier: 4,
				sortOrder: 2,
				textColor: '#a42022'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 1.25,
						mining_speed: 0.95,
						attack_speed: 0.95,
						melee_damage: 1.0
					},
					'tconstruct:head': {
						durability: 1850,
						mining_speed: 5.0,
						mining_tier: "minecraft:netherite",
						melee_attack: 5.0
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:lacerating',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				input: 'kubejs:energized_steel',
				fluid: {
					tag: 'forge:molten_nitro',
					amount: 90
				},
				temperature: 1450,
				output: 'kubejs:nitro'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					item: 'powah:crystal_nitro'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:nitro'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					item: 'powah:nitro_crystal_block'
				},
				value: 9,
				needed: 1,
				material: 'kubejs:nitro',
				leftover: {
					item: 'powah:crystal_nitro'
				}
			}
		]
	},
	{
		identifier: 'signalum',
		recipes: [
			{
				craftable: false,
				tier: 4,
				sortOrder: 1,
				textColor: '#ec3606'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 0.85,
						mining_speed: 1.2,
						attack_speed: 1.05,
						melee_damage: 1.0
					},
					'tconstruct:head': {
						durability: 350,
						mining_speed: 11.0,
						mining_tier: "minecraft:diamond",
						melee_attack: 2.0
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:lightweight',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				fluid: {
					tag: 'forge:molten_signalum',
					amount: 90
				},
				temperature: 1272,
				output: 'kubejs:signalum'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:ingots/signalum'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:signalum'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:storage_blocks/signalum'
				},
				value: 9,
				needed: 1,
				material: 'kubejs:signalum',
				leftover: {
					tag: 'forge:ingots/signalum'
				}
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					tag: 'forge:nuggets/signalum'
				},
				value: 1,
				needed: 9,
				material: 'kubejs:signalum'
			}
		]
	},
	{
		identifier: 'spirited',
		recipes: [
			{
				craftable: false,
				tier: 4,
				sortOrder: 1,
				textColor: '#86c52d'
			},
			{
				stats: {
					'tconstruct:handle': {
						durability: 1.1,
						mining_speed: 1.2,
						attack_speed: 1.0,
						melee_damage: 0.9
					},
					'tconstruct:head': {
						durability: 1600,
						mining_speed: 9.5,
						mining_tier: "minecraft:diamond",
						melee_attack: 3.0
					}
				}
			},
			{
				default: [
					{
						name: 'tconstruct:momentum',
						level: 1
					}
				]
			},
			{
				type: 'tconstruct:material_fluid',
				input: 'kubejs:energized_steel',
				fluid: {
					tag: 'forge:molten_spirited',
					amount: 90
				},
				temperature: 1350,
				output: 'kubejs:spirited'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					item: 'powah:crystal_spirited'
				},
				value: 1,
				needed: 1,
				material: 'kubejs:spirited'
			},
			{
				type: 'tconstruct:material',
				ingredient: {
					item: 'powah:spirited_crystal_block'
				},
				value: 9,
				needed: 1,
				material: 'kubejs:spirited',
				leftover: {
					item: 'powah:crystal_spirited'
				}
			}
		]
	}
]