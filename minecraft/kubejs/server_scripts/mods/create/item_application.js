ServerEvents.recipes(e => {
    e.remove({ output: 'create:brass_casing' })
    e.recipes.create.item_application('create:brass_casing',
        ['eidolon:polished_planks', '#forge:plates/brass']
    ).id('kubejs:create/item_application/brass_casing')
})