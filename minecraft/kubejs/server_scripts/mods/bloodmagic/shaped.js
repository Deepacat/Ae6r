ServerEvents.recipes(e => {
	e.remove({ id: 'bloodmagic:blood_altar' })
	e.shaped('bloodmagic:altar', [
		'ABA',
		'CDC',
		'EEE'
	], {
		A: 'eidolon:gold_inlay',
		B: 'farmersdelight:cooking_pot',
		C: 'occultism:otherstone',
		D: 'minecraft:heart_of_the_sea',
		E: '#forge:ingots/arcane_gold'
	}).id('kubejs:bloodmagic_blood_altar')

	e.remove({ id: 'bloodmagic:alchemy_table' })
	e.shaped('bloodmagic:alchemytable', [
		'ABC',
		'DDD',
		'EEE'
	], {
		A: 'minecraft:brewing_stand',
		B: 'bloodmagic:blankslate',
		C: 'supplementaries:jar_tinted',
		D: 'thermal:hazmat_fabric',
		E: 'eidolon:stone_altar'
	}).id('kubejs:bloodmagic_alchemy_table')

	e.remove({ id: 'bloodmagic:lava_crystal' })
	e.shaped('bloodmagic:lavacrystal', [
		'BDB',
		'CAC',
		'BCB'
	], {
		A: { type: 'bloodmagic:bloodorb', orb_tier: 2 },
		B: '#forge:dusts/obsidian',
		C: 'bloodmagic:reagentlava',
		D: 'minecraft:conduit'
	}).id('kubejs:bloodmagic_lava_crystal')

	e.remove({ id: 'bloodmagic:altar/daggerofsacrifice' })
	e.shaped('bloodmagic:daggerofsacrifice', [
		'  A',
		'BA ',
		'CB '
	], {
		A: '#forge:ingots/amethyst_bronze',
		B: 'eidolon:pewter_inlay',
		C: '#forge:rods/wooden'
	}).id('kubejs:bloodmagic_altar/daggerofsacrifice')

	e.remove({ id: 'bloodmagic:incense_altar' })
	e.shaped('bloodmagic:incensealtar', [
		'CBC',
		'CDC',
		'EAE'
	], {
		A: { type: 'bloodmagic:bloodorb', orb_tier: 1 },
		B: Item.of('botania:incense_stick', { brewKey: 'botania:soul_cross' }),
		C: 'eidolon:polished_planks',
		D: 'farmersdelight:cooking_pot',
		E: 'eidolon:polished_wood_pillar'
	}).id('kubejs:bloodmagic_incense_altar')

	e.remove({ id: 'bloodmagic:ritual_stone_blank' })
	e.shaped(Item.of('2x bloodmagic:ritualstone'), [
		'CBC',
		'BAB',
		'CBC'
	], {
		A: { type: 'bloodmagic:bloodorb', orb_tier: 2 },
		B: 'bloodmagic:reinforcedslate',
		C: 'architects_palette:abyssaline'
	}).id('kubejs:bloodmagic_ritual_stone_blank')

	e.remove({ id: 'bloodmagic:ritual_stone_master' })
	e.shaped('bloodmagic:masterritualstone', [
		'CBC',
		'BAB',
		'CBC'
	], {
		A: { type: 'bloodmagic:bloodorb', orb_tier: 3 },
		B: 'bloodmagic:ritualstone',
		C: 'architects_palette:abyssaline'
	}).id('kubejs:bloodmagic_ritual_stone_master')

	e.remove({ id: 'bloodmagic:dungeon_stone' })
	e.shaped(Item.of('bloodmagic:dungeon_stone', 8), [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'naturesaura:infused_stone',
		B: '#bloodmagic:crystals/demon'
	}).id('kubejs:bloodmagic_dungeon_stone')

	e.remove({ id: 'bloodmagic:arc' })
	e.shaped('bloodmagic:alchemicalreactionchamber', [
		'AAA',
		'BCB',
		'DED'
	], {
		A: 'bloodmagic:dungeon_stone',
		B: 'bloodmagic:infusedslate',
		C: { type: 'bloodmagic:bloodorb', orb_tier: 3 },
		D: '#forge:storage_blocks/blazing',
		E: 'minecraft:blast_furnace'
	}).id('kubejs:bloodmagic_arc')
	
})