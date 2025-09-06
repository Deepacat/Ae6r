ServerEvents.recipes(e => {
    e.remove({ id: 'redstonepen:relay_recipe' })
    e.shaped('redstonepen:relay', [
        'AB',
        'AC'
    ], {
        A: '#enigmatica:crafting_slabs',
        B: 'minecraft:redstone_torch',
        C: '#forge:dusts/redstone'
    }).id('kubejs:redstonepen/shaped/relay')
})