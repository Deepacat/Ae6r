ServerEvents.recipes(e => {
    e.remove({ id: 'shrink:shrinking_device' })
    e.shaped('shrink:shrinking_device', [
        'ABA',
        'CDC',
        'ECE'
    ], {
        A: '#forge:gems/ender',
        B: '#forge:glass_panes/lime',
        C: '#forge:plates/lead',
        D: 'thermal:flux_capacitor',
        E: '#resourcefulbees:resourceful_honeycomb'
    }).id('kubejs:shrink_shrinking_device')
})
