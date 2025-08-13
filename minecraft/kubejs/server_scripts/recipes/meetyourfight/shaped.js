ServerEvents.recipes(e => {
    e.remove({ id: 'meetyourfight:caged_heart' })
    e.shaped('meetyourfight:caged_heart', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: '#forge:bones',
        B: 'eidolon:zombie_heart',
        C: 'meetyourfight:mossy_tooth'
    }).id('kubejs:shaped/caged_heart')
})