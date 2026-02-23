ServerEvents.recipes(e => {
	e.remove({ id: 'create:crafting/materials/electron_tube' })
	e.recipes.create.deploying('create:electron_tube',
		[Ingredient.of('#forge:plates/iron'), Item.of('create:polished_rose_quartz')], 1000
	).id('kubejs:create/deploying/electron_tube')
})