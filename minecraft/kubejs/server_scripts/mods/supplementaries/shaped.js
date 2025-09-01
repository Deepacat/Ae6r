ServerEvents.recipes(e => {
    e.remove({ id: 'supplementaries:bellows' })
    e.shaped('supplementaries:bellows', [
        'AAA',
        'B B',
        'AAA'
    ], {
        A: '#forge:treated_wood_slab',
        B: '#forge:fabric_hemp'
    }).id('kubejs:supplementaries_bellows')
})
